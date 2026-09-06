import React, { useEffect, useRef } from 'react';

export const GlobalBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Neural Network Node structure
    interface NeuralNode {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      alpha: number;
      color: string;
      pulsePhase: number;
      pulseSpeed: number;
    }

    const mouse = {
      x: -9999,
      y: -9999,
      radius: 180,
    };

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initNodes();
    };

    const handlePointerMove = (e: PointerEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handlePointerLeave = () => {
      mouse.x = -9999;
      mouse.y = -9999;
    };

    let nodes: NeuralNode[] = [];
    const colors = [
      'rgba(168, 85, 247, ',  // Electric Purple
      'rgba(192, 132, 252, ', // Neon Violet
      'rgba(129, 140, 248, ', // Soft Indigo
      'rgba(56, 189, 248, ',  // Subtle Electric Blue
    ];

    const getNodeCount = () => {
      if (width > 1200) return 65;
      if (width > 768) return 42;
      return 24;
    };

    const initNodes = () => {
      const count = getNodeCount();
      nodes = [];
      for (let i = 0; i < count; i++) {
        nodes.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.35,
          vy: (Math.random() - 0.5) * 0.35,
          radius: Math.random() * 1.8 + 1.1,
          alpha: Math.random() * 0.45 + 0.25,
          color: colors[Math.floor(Math.random() * colors.length)],
          pulsePhase: Math.random() * Math.PI * 2,
          pulseSpeed: 0.015 + Math.random() * 0.02,
        });
      }
    };

    initNodes();

    window.addEventListener('resize', handleResize);
    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    window.addEventListener('pointerleave', handlePointerLeave, { passive: true });

    if (prefersReducedMotion) {
      // Draw single subtle static neural state
      ctx.clearRect(0, 0, width, height);
      for (const node of nodes) {
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = node.color + '0.4)';
        ctx.fill();
      }
      return () => {
        window.removeEventListener('resize', handleResize);
        window.removeEventListener('pointermove', handlePointerMove);
        window.removeEventListener('pointerleave', handlePointerLeave);
      };
    }

    let isTabVisible = !document.hidden;
    const handleVisibilityChange = () => {
      isTabVisible = !document.hidden;
      if (isTabVisible) {
        animationFrameId = requestAnimationFrame(render);
      }
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);

    const connectionDistance = 150;

    const render = () => {
      if (!isTabVisible) return;

      ctx.clearRect(0, 0, width, height);

      // 1. Move and draw nodes
      for (let i = 0; i < nodes.length; i++) {
        const p = nodes[i];

        p.pulsePhase += p.pulseSpeed;
        const currentAlpha = p.alpha + Math.sin(p.pulsePhase) * 0.15;

        // Subtle cursor repulsion
        if (mouse.x > -5000) {
          const dx = p.x - mouse.x;
          const dy = p.y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < mouse.radius && dist > 1) {
            const force = (1 - dist / mouse.radius) * 1.2;
            p.vx += (dx / dist) * force * 0.25;
            p.vy += (dy / dist) * force * 0.25;
          }
        }

        // Apply friction
        p.vx *= 0.985;
        p.vy *= 0.985;

        p.x += p.vx;
        p.y += p.vy;

        // Wrap around boundaries
        if (p.x < -20) p.x = width + 20;
        if (p.x > width + 20) p.x = -20;
        if (p.y < -20) p.y = height + 20;
        if (p.y > height + 20) p.y = -20;

        // 2. Synaptic connections
        for (let j = i + 1; j < nodes.length; j++) {
          const p2 = nodes[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < connectionDistance) {
            const lineAlpha = (1 - dist / connectionDistance) * 0.16;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(168, 85, 247, ${lineAlpha})`;
            ctx.lineWidth = 0.75;
            ctx.stroke();
          }
        }

        // 3. Node outer halo
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius * 2.8, 0, Math.PI * 2);
        ctx.fillStyle = p.color + (currentAlpha * 0.18) + ')';
        ctx.fill();

        // 4. Node core
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color + currentAlpha + ')';
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerleave', handlePointerLeave);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div 
      aria-hidden="true" 
      className="fixed inset-0 pointer-events-none -z-10 overflow-hidden bg-[#030306]"
    >
      {/* Ambient Neural Glow Blobs */}
      {/* Top-Left Electric Purple Atmospheric Bloom */}
      <div className="absolute -top-[15%] -left-[10%] w-[55vw] h-[55vw] rounded-full bg-purple-900/18 blur-[160px] pointer-events-none" />
      
      {/* Upper-Right Deep Violet Glow */}
      <div className="absolute top-[18%] -right-[12%] w-[50vw] h-[50vw] rounded-full bg-violet-900/16 blur-[170px] pointer-events-none" />
      
      {/* Mid-Left Subtle Indigo Core */}
      <div className="absolute top-[48%] -left-[10%] w-[45vw] h-[45vw] rounded-full bg-indigo-950/20 blur-[150px] pointer-events-none" />
      
      {/* Mid-Right Electric Violet Highlight */}
      <div className="absolute top-[68%] -right-[8%] w-[42vw] h-[42vw] rounded-full bg-purple-950/22 blur-[150px] pointer-events-none" />
      
      {/* Bottom Continuous Ambient Glow (Extends behind Contact & Footer) */}
      <div className="absolute -bottom-[10%] left-[25%] w-[50vw] h-[50vw] rounded-full bg-purple-900/16 blur-[160px] pointer-events-none" />

      {/* Futuristic Digital Micro-Grid */}
      <div 
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(rgba(168, 85, 247, 0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(168, 85, 247, 0.4) 1px, transparent 1px)',
          backgroundSize: '48px 48px'
        }}
      />

      {/* Neural Network & Synaptic Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full block pointer-events-none" />
    </div>
  );
};

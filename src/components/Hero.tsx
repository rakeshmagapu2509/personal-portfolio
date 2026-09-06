import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import { ArrowRight, Send, MapPin, Check, Copy, Sparkles, Cpu, Terminal } from 'lucide-react';
import { GithubIcon, LinkedinIcon, LeetcodeIcon, KaggleIcon } from './BrandIcons';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative bg-transparent pt-8 pb-16 md:pt-14 md:pb-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
        
        {/* Left Content Column */}
        <div className="lg:col-span-7 flex flex-col text-left">
          
          {/* Greeting & System Status Badge */}
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/25 text-purple-300 text-xs font-mono tracking-wide w-fit shadow-[0_0_12px_rgba(168,85,247,0.15)]">
              <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse shadow-[0_0_8px_rgba(192,132,252,0.8)]" />
              <span>3rd Year B.Tech • CSE (AI & ML)</span>
            </div>
          </div>

          {/* Main Name with Radiant Gradient Accent */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white mb-2 leading-[1.1]">
            <span className="bg-gradient-to-r from-white via-slate-100 to-purple-200 bg-clip-text text-transparent">
              {personalInfo.displayName}
            </span>
          </h1>
          
          {/* Subtitle with Electric Violet Accent */}
          <div className="text-lg sm:text-xl font-bold bg-gradient-to-r from-purple-400 via-violet-300 to-cyan-300 bg-clip-text text-transparent font-mono mb-2 tracking-tight">
            {personalInfo.title}
          </div>

          <div className="text-sm sm:text-base font-medium text-purple-300/90 font-mono mb-5 flex items-center gap-2">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_6px_rgba(34,211,238,0.8)]" />
            <span>Aspiring AI/ML Developer & Intelligent Systems Builder</span>
          </div>

          {/* Authentic Introduction */}
          <p className="text-zinc-300 text-base sm:text-lg leading-relaxed mb-4 font-normal">
            {personalInfo.heroDescription}
          </p>

          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed mb-8 max-w-xl">
            {personalInfo.tagline}
          </p>

          {/* CTA Buttons with Neon Violet Glow */}
          <div className="flex flex-wrap items-center gap-3.5 mb-9">
            <a
              href="#about"
              onClick={(e) => handleSmoothScroll(e, 'about')}
              className="flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-purple-600 via-violet-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 rounded-xl transition-all duration-150 shadow-[0_0_22px_rgba(168,85,247,0.35)] hover:shadow-[0_0_30px_rgba(168,85,247,0.5)] focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 cursor-pointer"
            >
              <span>Explore My Journey</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="#contact"
              onClick={(e) => handleSmoothScroll(e, 'contact')}
              className="flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-purple-200 bg-[#0e0e1c]/80 hover:bg-purple-950/40 border border-purple-500/30 hover:border-purple-400 rounded-xl transition-all duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 cursor-pointer shadow-[0_0_12px_rgba(168,85,247,0.1)]"
            >
              <span>Let's Connect</span>
              <Send className="w-3.5 h-3.5 text-purple-400" />
            </a>

            <button
              onClick={onOpenResume}
              className="px-4 py-2.5 text-sm font-medium text-zinc-300 hover:text-white bg-white/[0.03] hover:bg-white/[0.07] border border-white/10 hover:border-purple-500/30 rounded-xl transition-all duration-150 cursor-pointer"
            >
              Download Resume
            </button>
          </div>

          {/* Social Quick Links Bar */}
          <div className="flex items-center gap-3 pt-4 border-t border-purple-500/15">
            <span className="text-xs font-mono text-purple-400/80 mr-1">Connect:</span>
            
            <a
              href="https://github.com/rakeshmagapu2509"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-white/[0.03] hover:bg-purple-500/15 border border-purple-500/20 hover:border-purple-400 text-zinc-300 hover:text-white transition-all duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 shadow-[0_0_10px_rgba(168,85,247,0.08)]"
              title="GitHub Profile"
              aria-label="GitHub Profile"
            >
              <GithubIcon className="w-4 h-4 text-zinc-300" />
            </a>

            <a
              href="https://www.linkedin.com/in/rakesh-magapu-760b9434a"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-white/[0.03] hover:bg-purple-500/15 border border-purple-500/20 hover:border-purple-400 text-zinc-300 transition-all duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 shadow-[0_0_10px_rgba(168,85,247,0.08)]"
              title="LinkedIn Profile"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon className="w-4 h-4 text-[#0a66c2]" />
            </a>

            <a
              href="https://leetcode.com/u/7ccb8QVMgX/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-white/[0.03] hover:bg-purple-500/15 border border-purple-500/20 hover:border-purple-400 text-zinc-300 transition-all duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 flex items-center justify-center shadow-[0_0_10px_rgba(168,85,247,0.08)]"
              title="LeetCode Profile"
              aria-label="LeetCode Profile"
            >
              <LeetcodeIcon className="w-4 h-4 text-[#ffa116]" />
            </a>

            <a
              href="https://www.kaggle.com/rakeshmagapu"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-white/[0.03] hover:bg-purple-500/15 border border-purple-500/20 hover:border-purple-400 text-zinc-300 transition-all duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 flex items-center justify-center shadow-[0_0_10px_rgba(168,85,247,0.08)]"
              title="Kaggle Profile"
              aria-label="Kaggle Profile"
            >
              <KaggleIcon className="w-4 h-4 text-[#20beff]" />
            </a>

            {/* Direct Quick Copy Email */}
            <button
              onClick={handleCopyEmail}
              className="ml-auto flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-mono text-purple-300/80 hover:text-white bg-purple-950/20 hover:bg-purple-900/30 border border-purple-500/20 rounded-lg transition-colors cursor-pointer"
              title="Click to copy email address"
            >
              {copiedEmail ? (
                <>
                  <Check className="w-3 h-3 text-emerald-400" />
                  <span className="text-emerald-300">Copied</span>
                </>
              ) : (
                <>
                  <Copy className="w-3 h-3 text-purple-400" />
                  <span>Copy Email</span>
                </>
              )}
            </button>
          </div>

        </div>

        {/* Right Portrait Frame Column with HUD & AI Core Aesthetic */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end">
          <div className="relative w-full max-w-[340px] sm:max-w-[370px]">
            
            {/* Ambient Purple Glow Field behind Photograph */}
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-b from-purple-600/25 via-violet-600/15 to-transparent blur-xl opacity-80 pointer-events-none" />
            
            {/* Futuristic Dark Glass Container Card */}
            <div className="relative rounded-3xl bg-[#0a0a16]/80 backdrop-blur-xl border border-purple-500/25 p-3 sm:p-4 shadow-[0_0_35px_rgba(168,85,247,0.15)] transition-all duration-300 hover:border-purple-400/50 hover:shadow-[0_0_45px_rgba(168,85,247,0.25)]">
              
              {/* Photo Frame with HUD Tech Accents */}
              <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden bg-gradient-to-b from-zinc-950 to-[#070712] border border-purple-500/20 flex items-center justify-center group shadow-inner">
                
                {/* Real Profile Image */}
                <img
                  src={personalInfo.profileImagePath}
                  alt="Rakesh Magapu — B.Tech CSE & AIML Student"
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                  loading="eager"
                />

                {/* Corner Technical HUD Brackets */}
                <div className="absolute top-3 left-3 w-2.5 h-2.5 border-t-2 border-l-2 border-purple-400/80 pointer-events-none" />
                <div className="absolute top-3 right-3 w-2.5 h-2.5 border-t-2 border-r-2 border-purple-400/80 pointer-events-none" />
                <div className="absolute bottom-3 left-3 w-2.5 h-2.5 border-b-2 border-l-2 border-purple-400/80 pointer-events-none" />
                <div className="absolute bottom-3 right-3 w-2.5 h-2.5 border-b-2 border-r-2 border-purple-400/80 pointer-events-none" />

                {/* Subtle Glass Gradient at bottom */}
                <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#030306]/90 via-[#030306]/30 to-transparent pointer-events-none" />

                {/* Floating Status Pill */}
                <div className="absolute bottom-3 inset-x-3 bg-[#080814]/90 backdrop-blur-md border border-purple-500/30 rounded-xl px-3 py-2 flex items-center justify-between text-left shadow-lg">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_rgba(52,211,153,0.9)]" />
                    <div>
                      <p className="text-[11px] font-semibold text-white leading-tight">Bonam Venkata Chalamayya Eng. College</p>
                      <p className="text-[10px] text-purple-300/80 font-mono leading-tight">3rd Year CSE (AI & ML)</p>
                    </div>
                  </div>
                </div>

              </div>

              {/* Caption Below Frame */}
              <div className="mt-3 flex items-center justify-between px-1 text-[11px] text-zinc-400 font-mono">
                <span className="flex items-center gap-1 text-zinc-300">
                  <MapPin className="w-3 h-3 text-purple-400" />
                  Andhra Pradesh, India
                </span>
                <span className="text-purple-400 font-medium">AI/ML Developer in the Making</span>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

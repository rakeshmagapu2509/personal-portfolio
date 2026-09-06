import React from 'react';
import { Project } from '../types/portfolio';
import { X, ExternalLink, CheckCircle2, Code2, Layers } from 'lucide-react';
import { GithubIcon } from './BrandIcons';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl bg-[#0a0a18] border border-purple-500/30 p-6 sm:p-8 shadow-[0_0_50px_rgba(168,85,247,0.25)] text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-white/[0.04] hover:bg-purple-500/15 border border-purple-500/20 text-zinc-400 hover:text-white transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5 text-purple-400" />
        </button>

        {/* Category & Status */}
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <span className="px-2.5 py-1 rounded-full text-xs font-mono bg-purple-500/15 border border-purple-500/30 text-purple-300 font-medium">
            {project.category}
          </span>
          <span className="px-2.5 py-1 rounded-full text-xs font-mono bg-amber-500/15 border border-amber-500/30 text-amber-300 flex items-center gap-1.5 font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
            {project.status}
          </span>
        </div>

        {/* Title & Subtitle */}
        <h3 className="text-2xl sm:text-3xl font-bold text-white mb-1.5">
          {project.title}
        </h3>
        {project.subtitle && (
          <p className="text-sm font-mono text-purple-400 mb-4">{project.subtitle}</p>
        )}

        {/* Short & Detailed Description */}
        <p className="text-sm text-zinc-300 leading-relaxed mb-4">
          {project.shortDescription}
        </p>
        {project.detailedDescription && (
          <p className="text-sm text-zinc-400 leading-relaxed mb-6 bg-purple-950/20 p-4 rounded-2xl border border-purple-500/20">
            {project.detailedDescription}
          </p>
        )}

        {/* Tech Stack */}
        <div className="mb-6">
          <h4 className="text-xs font-mono uppercase tracking-wider text-purple-400 mb-2.5 flex items-center gap-1.5 font-semibold">
            <Code2 className="w-3.5 h-3.5 text-purple-400" />
            <span>Technologies & Dependencies</span>
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-xs font-mono rounded-lg bg-purple-950/30 border border-purple-500/20 text-purple-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Architectural Highlights */}
        {project.keyHighlights && (
          <div className="mb-6">
            <h4 className="text-xs font-mono uppercase tracking-wider text-purple-400 mb-2.5 flex items-center gap-1.5 font-semibold">
              <Layers className="w-3.5 h-3.5 text-purple-400" />
              <span>Architectural Highlights</span>
            </h4>
            <div className="space-y-2">
              {project.keyHighlights.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs text-zinc-300">
                  <CheckCircle2 className="w-4 h-4 text-purple-400 flex-shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* External Links */}
        <div className="pt-5 border-t border-purple-500/20 flex flex-wrap items-center gap-3">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-purple-950/40 hover:bg-purple-900/50 border border-purple-500/30 text-white text-xs font-medium transition-colors shadow-xs"
            >
              <GithubIcon className="w-4 h-4 text-white" />
              <span>View Source Code</span>
            </a>
          )}
          {project.liveDemoUrl && (
            <a
              href={project.liveDemoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white text-xs font-semibold transition-colors shadow-[0_0_15px_rgba(168,85,247,0.3)]"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Open Live Demo</span>
            </a>
          )}
          <button
            onClick={onClose}
            className="ml-auto px-4 py-2 text-xs font-medium text-zinc-400 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 rounded-xl transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

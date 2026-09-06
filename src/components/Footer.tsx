import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { ArrowUp } from 'lucide-react';
import { GithubIcon, LinkedinIcon, LeetcodeIcon, KaggleIcon } from './BrandIcons';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative z-10 border-t border-purple-500/15 bg-[#04040a]/90 backdrop-blur-xl pt-12 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        
        {/* Brand & Academic Info */}
        <div className="flex flex-col items-center md:items-start">
          <div className="flex items-center gap-2 mb-1">
            <span className="font-bold text-white tracking-tight text-base">
              {personalInfo.displayName}
            </span>
            <span className="text-zinc-600">•</span>
            <span className="text-xs font-mono text-purple-400 font-medium">
              {personalInfo.title}
            </span>
          </div>
          <p className="text-xs text-zinc-400 max-w-sm">
            {personalInfo.college}
          </p>
        </div>

        {/* Social Quick Links */}
        <div className="flex items-center gap-3">
          <a
            href="https://github.com/rakeshmagapu2509"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-xl bg-purple-950/20 hover:bg-purple-900/35 border border-purple-500/20 hover:border-purple-400 text-zinc-400 hover:text-white transition-colors"
            title="GitHub"
            aria-label="GitHub Profile"
          >
            <GithubIcon className="w-4 h-4 text-zinc-300" />
          </a>

          <a
            href="https://www.linkedin.com/in/rakesh-magapu-760b9434a"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-xl bg-purple-950/20 hover:bg-purple-900/35 border border-purple-500/20 hover:border-purple-400 text-zinc-400 hover:text-white transition-colors"
            title="LinkedIn"
            aria-label="LinkedIn Profile"
          >
            <LinkedinIcon className="w-4 h-4 text-[#0a66c2]" />
          </a>

          <a
            href="https://leetcode.com/u/7ccb8QVMgX/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-xl bg-purple-950/20 hover:bg-purple-900/35 border border-purple-500/20 hover:border-purple-400 text-zinc-400 hover:text-white transition-colors"
            title="LeetCode"
            aria-label="LeetCode Profile"
          >
            <LeetcodeIcon className="w-4 h-4 text-[#ffa116]" />
          </a>

          <a
            href="https://www.kaggle.com/rakeshmagapu"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-xl bg-purple-950/20 hover:bg-purple-900/35 border border-purple-500/20 hover:border-purple-400 text-zinc-400 hover:text-white transition-colors"
            title="Kaggle"
            aria-label="Kaggle Profile"
          >
            <KaggleIcon className="w-4 h-4 text-[#20beff]" />
          </a>
        </div>

        {/* Back to top Button */}
        <button
          onClick={scrollToTop}
          className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-purple-950/30 hover:bg-purple-900/40 border border-purple-500/25 hover:border-purple-400 text-xs font-mono text-purple-300 hover:text-white transition-colors cursor-pointer"
        >
          <span>Back to top</span>
          <ArrowUp className="w-3.5 h-3.5 text-purple-400" />
        </button>

      </div>

      {/* Copyright Line */}
      <div className="max-w-6xl mx-auto mt-8 pt-6 border-t border-purple-500/10 text-center text-xs font-mono text-zinc-400">
        <p>© 2026 Rakesh Magapu. All rights reserved. • AI/ML Engineering System</p>
      </div>
    </footer>
  );
};

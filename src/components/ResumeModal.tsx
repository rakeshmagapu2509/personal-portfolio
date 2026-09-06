import React, { useEffect } from 'react';
import { personalInfo } from '../data/portfolioData';
import { X, Download, FileText, ExternalLink, Phone, Mail, GraduationCap } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`${personalInfo.displayName}'s Resume`}
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative bg-[#0a0a16]/95 rounded-3xl shadow-[0_0_50px_rgba(168,85,247,0.25)] border border-purple-500/30 max-w-5xl w-full max-h-[94vh] flex flex-col overflow-hidden text-left backdrop-blur-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between p-4 sm:p-6 border-b border-purple-500/20 bg-[#080814]/90">
          <div className="pr-4">
            <div className="flex items-center gap-2 mb-1.5 flex-wrap">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-mono font-semibold bg-purple-500/15 text-purple-300 border border-purple-500/30">
                <FileText className="w-3.5 h-3.5 text-purple-400" />
                <span>Verified Resume • 2026</span>
              </span>
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-mono text-emerald-300 bg-emerald-950/30 border border-emerald-500/30">
                <GraduationCap className="w-3 h-3 text-emerald-400" />
                <span>8.9 CGPA (B.Tech)</span>
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-white leading-snug">
              {personalInfo.displayName} — Curriculum Vitae
            </h3>

            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-1 text-xs text-zinc-400 font-mono">
              <span className="text-purple-400 font-medium">B.Tech CSE & AIML • Bonam Venkata Chalamayya Eng. College</span>
              {personalInfo.phone && (
                <span className="flex items-center gap-1 text-zinc-300">
                  <Phone className="w-3 h-3 text-purple-400" />
                  {personalInfo.phone}
                </span>
              )}
              <span className="flex items-center gap-1 text-zinc-300">
                <Mail className="w-3 h-3 text-purple-400" />
                {personalInfo.email}
              </span>
            </div>
          </div>

          <button
            onClick={onClose}
            aria-label="Close resume viewer"
            className="p-2 rounded-xl text-zinc-400 hover:text-white hover:bg-purple-900/30 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 cursor-pointer shrink-0"
          >
            <X className="w-5 h-5 text-purple-400" />
          </button>
        </div>

        {/* Embedded PDF Viewport */}
        <div className="relative flex-1 min-h-[350px] max-h-[66vh] sm:max-h-[70vh] bg-black/60 flex flex-col overflow-hidden">
          <iframe
            src="/resume.pdf#toolbar=1"
            title={`${personalInfo.displayName}'s Resume PDF`}
            className="w-full h-full min-h-[50vh] sm:min-h-[66vh] border-0 bg-[#0f0f1d]"
          />
        </div>

        {/* Footer Toolbar */}
        <div className="p-3 sm:p-4 border-t border-purple-500/20 bg-[#080814]/90 flex flex-wrap items-center justify-between gap-3">
          <div className="text-xs font-mono text-zinc-400">
            <span className="text-purple-400">Rakesh Magapu</span> • 2-Page Software Engineer & AI/ML Resume
          </div>

          <div className="flex items-center gap-2.5 ml-auto">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3.5 py-2 text-xs sm:text-sm font-mono font-semibold text-purple-300 bg-purple-950/40 hover:bg-purple-900/50 border border-purple-500/30 rounded-xl transition-colors shadow-sm"
            >
              <ExternalLink className="w-3.5 h-3.5 text-purple-400" />
              <span>Open in New Tab</span>
            </a>

            <a
              href="/resume.pdf"
              download="Rakesh_Magapu_Resume.pdf"
              className="flex items-center gap-1.5 px-4 py-2 text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 rounded-xl transition-colors shadow-[0_0_15px_rgba(168,85,247,0.3)] cursor-pointer"
            >
              <Download className="w-4 h-4" />
              <span>Download Resume (PDF)</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

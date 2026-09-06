import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import { Menu, X, FileText } from 'lucide-react';

interface NavbarProps {
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Hackathons', href: '#hackathons' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full px-4 sm:px-6 lg:px-8 pt-3 pb-2 pointer-events-none">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 sm:px-6 py-2.5 rounded-2xl bg-[#080814]/85 backdrop-blur-xl border border-purple-500/25 shadow-[0_0_25px_rgba(168,85,247,0.12)] pointer-events-auto transition-all">
        {/* Monogram Brand Logo */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, '#home')}
          className="flex items-center gap-2 group cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 rounded-lg p-1"
          aria-label="Home"
        >
          <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-purple-600 via-violet-600 to-indigo-600 flex items-center justify-center text-white font-black text-xs tracking-tight shadow-[0_0_15px_rgba(168,85,247,0.4)] group-hover:shadow-[0_0_22px_rgba(168,85,247,0.6)] transition-all duration-200">
            RM
          </div>
          <div className="text-left hidden sm:block">
            <span className="text-xs font-bold text-white tracking-tight block leading-tight group-hover:text-purple-300 transition-colors">
              {personalInfo.displayName}
            </span>
            <span className="text-[10px] font-mono text-purple-400/90 tracking-tight block leading-tight">
              AI/ML Developer
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center space-x-1 lg:space-x-1.5" aria-label="Main Navigation">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="px-3 py-1.5 rounded-lg text-xs font-medium text-zinc-300 hover:text-white hover:bg-purple-950/40 hover:shadow-[0_0_12px_rgba(168,85,247,0.15)] transition-all duration-150 cursor-pointer"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Resume Action & Mobile Menu Button */}
        <div className="flex items-center gap-2">
          <button
            onClick={onOpenResume}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-purple-200 bg-purple-950/40 hover:bg-purple-900/60 border border-purple-500/30 rounded-xl transition-all duration-150 cursor-pointer shadow-[0_0_12px_rgba(168,85,247,0.15)] hover:shadow-[0_0_18px_rgba(168,85,247,0.3)]"
          >
            <FileText className="w-3.5 h-3.5 text-purple-400" />
            <span>Resume</span>
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-xl text-zinc-300 hover:text-white hover:bg-purple-950/40 border border-purple-500/20 transition-colors cursor-pointer"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden max-w-6xl mx-auto mt-2 p-4 rounded-2xl bg-[#0a0a16]/95 backdrop-blur-2xl border border-purple-500/25 shadow-[0_0_35px_rgba(168,85,247,0.2)] pointer-events-auto animate-in slide-in-from-top-2 duration-150 text-left">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-3 py-2 rounded-xl text-sm font-medium text-zinc-300 hover:text-white hover:bg-purple-950/50 hover:text-purple-300 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

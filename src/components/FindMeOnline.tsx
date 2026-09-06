import React, { useState } from 'react';
import { socialProfiles } from '../data/portfolioData';
import { Globe, ArrowUpRight, Copy, Check } from 'lucide-react';
import { GithubIcon, LinkedinIcon, LeetcodeIcon, KaggleIcon, InstagramIcon, HackerrankIcon } from './BrandIcons';

export const FindMeOnline: React.FC = () => {
  const [copiedHandle, setCopiedHandle] = useState<string | null>(null);

  const handleCopy = (handle: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(handle);
    setCopiedHandle(handle);
    setTimeout(() => setCopiedHandle(null), 2000);
  };

  const getPlatformIcon = (name: string) => {
    switch (name) {
      case 'GitHub':
        return <GithubIcon className="w-5 h-5 text-white" />;
      case 'LinkedIn':
        return <LinkedinIcon className="w-5 h-5 text-[#0a66c2]" />;
      case 'LeetCode':
        return <LeetcodeIcon className="w-5 h-5 text-[#ffa116]" />;
      case 'HackerRank':
        return <HackerrankIcon className="w-5 h-5 text-[#2ec866]" />;
      case 'Kaggle':
        return <KaggleIcon className="w-5 h-5 text-[#20beff]" />;
      case 'Instagram':
        return <InstagramIcon className="w-5 h-5 text-[#e1306c]" />;
      default:
        return <Globe className="w-5 h-5 text-purple-400" />;
    }
  };

  return (
    <section id="find-me" className="relative bg-transparent py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-4">
          Find Me <span className="bg-gradient-to-r from-purple-400 via-violet-300 to-indigo-300 bg-clip-text text-transparent">Online</span>
        </h2>
        <p className="text-zinc-400 text-base max-w-2xl leading-relaxed">
          Connect across my primary developer ecosystems, competitive programming portals, and professional hubs.
        </p>
      </div>

      {/* Profile Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 text-left">
        {socialProfiles.map((profile) => (
          <a
            key={profile.name}
            href={profile.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative rounded-3xl bg-[#0a0a16]/75 backdrop-blur-xl border border-purple-500/20 p-6 flex flex-col justify-between transition-all duration-200 hover:-translate-y-1 hover:border-purple-400/50 hover:shadow-[0_0_30px_rgba(168,85,247,0.2)] shadow-[0_0_20px_rgba(0,0,0,0.5)]"
          >
            <div>
              {/* Header with Icon & Category Badge */}
              <div className="flex items-center justify-between mb-4">
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center border transition-transform duration-200 group-hover:scale-105 shadow-inner"
                  style={{
                    backgroundColor: profile.accentColor + '15',
                    borderColor: profile.accentColor + '40',
                  }}
                >
                  {getPlatformIcon(profile.name)}
                </div>

                <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-md bg-purple-950/30 text-purple-300 border border-purple-500/20">
                  {profile.badge || profile.category}
                </span>
              </div>

              {/* Name & Handle */}
              <div className="mb-2 flex items-center justify-between">
                <h3 className="text-lg font-bold text-white group-hover:text-purple-300 transition-colors">
                  {profile.name}
                </h3>
              </div>

              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-lg bg-purple-950/25 border border-purple-500/20 font-mono text-xs text-purple-300 mb-3">
                <span>{profile.handle}</span>
                <button
                  onClick={(e) => handleCopy(profile.handle, e)}
                  className="text-zinc-400 hover:text-white cursor-pointer"
                  title="Copy handle"
                >
                  {copiedHandle === profile.handle ? (
                    <Check className="w-3 h-3 text-emerald-400" />
                  ) : (
                    <Copy className="w-3 h-3 text-purple-400" />
                  )}
                </button>
              </div>

              {/* Description */}
              <p className="text-xs text-zinc-300 leading-relaxed mb-6">
                {profile.description}
              </p>
            </div>

            {/* Direct Link Action */}
            <div className="pt-4 border-t border-purple-500/15 flex items-center justify-between text-xs font-mono text-purple-400 group-hover:text-purple-300 font-medium">
              <span>Connect On Platform</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

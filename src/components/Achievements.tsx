import React from 'react';
import { achievementsList } from '../data/portfolioData';
import { Award, BookmarkCheck, CheckCircle2, ArrowUpRight, Sparkles } from 'lucide-react';

export const Achievements: React.FC = () => {
  const hasAchievements = achievementsList.length > 0;

  return (
    <section id="achievements" className="relative bg-transparent py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-4">
          Achievements & <span className="bg-gradient-to-r from-purple-400 via-violet-300 to-indigo-300 bg-clip-text text-transparent">Certifications</span>
        </h2>
        <p className="text-zinc-400 text-base max-w-2xl leading-relaxed">
          Verified academic and technical milestones. Maintained with total transparency and zero fabricated claims.
        </p>
      </div>

      {hasAchievements ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left max-w-4xl mx-auto">
          {achievementsList.map((item) => (
            <div
              key={item.id}
              className="rounded-3xl bg-[#0a0a16]/75 backdrop-blur-xl border border-purple-500/20 p-6 flex flex-col justify-between hover:border-purple-400/40 shadow-sm"
            >
              <div>
                <span className="text-xs font-mono text-purple-300 bg-purple-500/15 px-2.5 py-0.5 rounded-md border border-purple-500/30 font-medium">
                  {item.category}
                </span>
                <h3 className="text-lg font-bold text-white mt-2 mb-1">{item.title}</h3>
                <p className="text-xs text-zinc-400 font-mono mb-3">{item.organization} • {item.date}</p>
                <p className="text-sm text-zinc-300 leading-relaxed mb-4">{item.description}</p>
              </div>
              {item.credentialUrl && (
                <a
                  href={item.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-mono text-purple-300 hover:text-purple-200 flex items-center gap-1 mt-2"
                >
                  <span>Verify Credential</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
          ))}
        </div>
      ) : (
        /* Strict Requirement: Polished Futuristic Empty State */
        <div className="relative rounded-3xl bg-[#0a0a16]/80 backdrop-blur-xl border border-purple-500/25 p-8 sm:p-12 text-center max-w-3xl mx-auto shadow-[0_0_35px_rgba(168,85,247,0.1)]">
          <div className="w-16 h-16 rounded-2xl bg-purple-950/40 border border-purple-500/30 flex items-center justify-center text-purple-300 mx-auto mb-5 shadow-[0_0_20px_rgba(168,85,247,0.25)]">
            <BookmarkCheck className="w-8 h-8 text-purple-400" />
          </div>

          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/25 text-purple-300 text-xs font-mono mb-4 font-medium">
            <Sparkles className="w-3 h-3 text-purple-400" />
            In Active Pursuit
          </span>

          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3 tracking-tight">
            Achievements & certifications will be added here as I continue my journey.
          </h3>

          <p className="text-zinc-300 text-sm sm:text-base leading-relaxed max-w-xl mx-auto mb-6">
            Currently focusing on building deep conceptual and practical mastery in AI, Machine Learning algorithms, and software development. Formal certifications and competition ranks will be featured here upon completion.
          </p>

          <div className="p-4 rounded-2xl bg-[#080814]/90 border border-purple-500/20 max-w-md mx-auto text-left text-xs text-zinc-300 flex items-start gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-purple-400 flex-shrink-0 mt-0.5" />
            <p>
              <strong className="text-white">Future Ready:</strong> Fully structured to support achievement title, granting organization, date, description, credential links, and certificate previews without altering the layout.
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

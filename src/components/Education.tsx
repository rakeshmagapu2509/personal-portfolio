import React from 'react';
import { educationList } from '../data/portfolioData';
import { MapPin, Calendar, BookOpen, CheckCircle2 } from 'lucide-react';

export const Education: React.FC = () => {
  return (
    <section id="education" className="relative bg-transparent py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-4">
          Academic <span className="bg-gradient-to-r from-purple-400 via-violet-300 to-indigo-300 bg-clip-text text-transparent">Foundation</span>
        </h2>
        <p className="text-zinc-400 text-base max-w-2xl leading-relaxed">
          Formal academic training in Computer Science & Engineering with specialization in Artificial Intelligence and Machine Learning.
        </p>
      </div>

      {/* Timeline Layout */}
      <div className="max-w-3xl mx-auto text-left">
        {educationList.map((edu, idx) => (
          <div
            key={idx}
            className="relative pl-6 sm:pl-8 border-l-2 border-purple-500/30 pb-4 last:pb-0"
          >
            {/* Timeline Node with Purple Pulse */}
            <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-[#030306] border-2 border-purple-400 shadow-[0_0_10px_rgba(168,85,247,0.8)]" />

            {/* Education Card */}
            <div className="rounded-3xl bg-[#0a0a16]/75 backdrop-blur-xl border border-purple-500/20 p-6 sm:p-8 shadow-[0_0_30px_rgba(168,85,247,0.06)] transition-all hover:border-purple-400/40 hover:shadow-[0_0_35px_rgba(168,85,247,0.15)]">
              
              {/* Institution & Status */}
              <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                <span className="text-xs font-mono text-purple-300 bg-purple-500/15 px-3 py-1 rounded-full border border-purple-500/30 flex items-center gap-1.5 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse shadow-[0_0_6px_rgba(168,85,247,0.8)]" />
                  {edu.status}
                </span>
                
                <span className="text-xs font-mono text-zinc-400 flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-purple-400" />
                  {edu.year}
                </span>
              </div>

              {/* Institution Title */}
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-1.5">
                {edu.institution}
              </h3>

              {/* Degree & Field */}
              <div className="text-sm sm:text-base font-semibold text-purple-400 mb-4 font-mono">
                {edu.degree} — {edu.field}
              </div>

              {/* Location */}
              <div className="flex items-center gap-1.5 text-xs text-zinc-400 mb-5">
                <MapPin className="w-3.5 h-3.5 text-purple-400" />
                <span>{edu.location}</span>
              </div>

              {/* Academic Summary */}
              <p className="text-sm text-zinc-300 leading-relaxed mb-6">
                {edu.summary}
              </p>

              {/* Core Academic Focus Areas */}
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-purple-400/90 mb-3 flex items-center gap-1.5 font-semibold">
                  <BookOpen className="w-3.5 h-3.5 text-purple-400" />
                  <span>Key Coursework & Focus Areas</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {edu.focusAreas.map((area, areaIdx) => (
                    <div
                      key={areaIdx}
                      className="flex items-center gap-2 p-2.5 rounded-xl bg-purple-950/20 border border-purple-500/20 text-xs text-zinc-300 font-mono"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 flex-shrink-0" />
                      <span>{area}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Academic Performance & Graduation Status */}
              <div className="mt-6 pt-4 border-t border-purple-500/15 flex flex-wrap items-center justify-between gap-2 text-xs font-mono">
                {edu.cgpa ? (
                  <span className="flex items-center gap-1.5">
                    <span className="text-zinc-400">Score / Performance:</span>
                    <span className="px-2 py-0.5 rounded-md bg-purple-500/15 border border-purple-500/30 text-purple-300 font-bold">
                      {edu.cgpa}
                    </span>
                  </span>
                ) : (
                  <span className="text-zinc-400">Academic Standing: Verified</span>
                )}
                <span className="text-purple-300/90 font-medium">
                  {edu.graduationYear || edu.year}
                </span>
              </div>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

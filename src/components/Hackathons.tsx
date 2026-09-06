import React from 'react';
import { hackathonsList, certificatesList } from '../data/portfolioData';
import type { Certificate } from '../types/portfolio';
import { Users, Calendar, CheckCircle2, Shield, Eye } from 'lucide-react';

interface HackathonsProps {
  onSelectCertificate?: (cert: Certificate) => void;
}

export const Hackathons: React.FC<HackathonsProps> = ({ onSelectCertificate }) => {
  return (
    <section id="hackathons" className="relative bg-transparent py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-4">
          Hackathons & <span className="bg-gradient-to-r from-purple-400 via-violet-300 to-indigo-300 bg-clip-text text-transparent">Events</span>
        </h2>
        <p className="text-zinc-400 text-base max-w-2xl leading-relaxed">
          Competitive hackathons and collaborative events where I apply computational problem solving to engineer real prototypes.
        </p>
      </div>

      {/* Hackathons Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left max-w-6xl mx-auto">
        {hackathonsList.map((event) => {
          const matchedCert = event.certificateId
            ? certificatesList.find((c) => c.id === event.certificateId)
            : null;

          return (
            <div
              key={event.id}
              className="group rounded-3xl bg-[#0a0a16]/75 backdrop-blur-xl border border-purple-500/20 p-6 sm:p-7 flex flex-col justify-between transition-all duration-200 hover:-translate-y-1 hover:border-purple-400/50 hover:shadow-[0_0_30px_rgba(168,85,247,0.18)]"
            >
              <div>
                {/* Event Header */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-xs font-mono text-purple-300 bg-purple-500/15 px-3 py-1 rounded-full border border-purple-500/30 flex items-center gap-1.5 font-medium">
                    <Shield className="w-3 h-3 text-purple-400" />
                    {event.status}
                  </span>

                  <span className="text-xs font-mono text-zinc-400">
                    {event.organization}
                  </span>
                </div>

                {/* Event Name */}
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                  {event.name}
                </h3>

                {/* Role & Date */}
                <div className="flex items-center justify-between gap-2 text-xs font-mono text-purple-400 mb-4 font-medium flex-wrap">
                  <div className="flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5" />
                    <span>Role: {event.role}</span>
                  </div>
                  {event.date && (
                    <div className="flex items-center gap-1 text-zinc-400">
                      <Calendar className="w-3 h-3 text-purple-400/70" />
                      <span>{event.date}</span>
                    </div>
                  )}
                </div>

                {/* Description */}
                <p className="text-sm text-zinc-300 leading-relaxed mb-5">
                  {event.description}
                </p>

                {/* Technologies / Focus */}
                {event.technologies && (
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {event.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs font-mono text-purple-200 bg-purple-950/30 px-2.5 py-1 rounded-lg border border-purple-500/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Footer / Extensibility with View Certificate */}
              <div className="pt-4 border-t border-purple-500/15 flex items-center justify-between text-xs text-zinc-400 font-mono gap-2 flex-wrap">
                <span className="flex items-center gap-1.5 text-zinc-300">
                  <CheckCircle2 className="w-3.5 h-3.5 text-purple-400" />
                  Verified Participation
                </span>

                {matchedCert && onSelectCertificate && (
                  <button
                    onClick={() => onSelectCertificate(matchedCert)}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-semibold text-xs transition-all shadow-[0_0_12px_rgba(168,85,247,0.25)] cursor-pointer"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>View Certificate</span>
                  </button>
                )}
              </div>

            </div>
          );
        })}
      </div>

      {/* Informational Subtext */}
      <div className="mt-8 text-center">
        <p className="text-xs font-mono text-purple-400/80">
          * More hackathons, event prototypes, and certificates can be added directly via <code className="text-purple-300 bg-purple-950/40 px-1.5 py-0.5 rounded font-medium border border-purple-500/25">src/data/portfolioData.ts</code>.
        </p>
      </div>
    </section>
  );
};

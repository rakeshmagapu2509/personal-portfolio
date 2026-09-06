import React from 'react';
import { certificatesList } from '../data/portfolioData';
import type { Certificate } from '../types/portfolio';
import { Award, Eye, ExternalLink, Calendar, CheckCircle } from 'lucide-react';

interface CertificationsProps {
  onSelectCertificate: (cert: Certificate) => void;
}

export const Certifications: React.FC<CertificationsProps> = ({ onSelectCertificate }) => {
  return (
    <section id="certifications" className="relative bg-transparent py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-14">
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-4">
          Certifications & <span className="bg-gradient-to-r from-purple-400 via-violet-300 to-cyan-300 bg-clip-text text-transparent">Credentials</span>
        </h2>
        <p className="text-zinc-400 text-base sm:text-lg max-w-2xl leading-relaxed">
          Professional certifications and learning achievements from leading industry organizations, validating skills in AI, prompt engineering, Java, and Python.
        </p>
      </div>

      {/* Responsive Cards Grid without image preview box */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 text-left">
        {certificatesList.map((cert) => (
          <div
            key={cert.id}
            className="group rounded-3xl bg-[#0a0a16]/80 backdrop-blur-xl border border-purple-500/20 p-6 sm:p-7 flex flex-col justify-between transition-all duration-200 hover:-translate-y-1 hover:border-purple-400/50 hover:shadow-[0_0_30px_rgba(168,85,247,0.18)]"
          >
            <div>
              {/* Card Top: Icon, Issuer & Date */}
              <div className="flex items-start justify-between gap-3 mb-4">
                <div className="w-10 h-10 rounded-2xl bg-purple-950/40 border border-purple-500/30 flex items-center justify-center text-purple-300 shadow-[0_0_12px_rgba(168,85,247,0.15)] shrink-0">
                  <Award className="w-5 h-5 text-purple-400" />
                </div>

                <div className="flex flex-col items-end gap-1">
                  <span className="inline-flex items-center gap-1 text-xs font-mono font-semibold text-purple-300 bg-purple-500/15 px-2.5 py-0.5 rounded-full border border-purple-500/25">
                    {cert.issuer}
                  </span>
                  {cert.date && (
                    <span className="text-[11px] font-mono text-zinc-400 flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-purple-400/70" />
                      {cert.date}
                    </span>
                  )}
                </div>
              </div>

              {/* Certificate Title */}
              <h3 className="text-lg font-bold text-white mb-2 leading-snug group-hover:text-purple-300 transition-colors">
                {cert.title}
              </h3>

              {/* Program or Credential Type */}
              <div className="space-y-1 mb-4">
                {cert.certificateType && (
                  <p className="text-xs text-emerald-400 font-mono flex items-center gap-1.5 font-medium">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>{cert.certificateType}</span>
                  </p>
                )}

                {cert.program && (
                  <p className="text-xs text-zinc-400 font-sans leading-relaxed">
                    {cert.program}
                  </p>
                )}

                {cert.certificateNo && (
                  <p className="text-[11px] font-mono text-purple-400/80">
                    ID: {cert.certificateNo}
                  </p>
                )}
              </div>

              {/* Skills covered pills */}
              {cert.skillsCovered && cert.skillsCovered.length > 0 && (
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {cert.skillsCovered.map((skill, idx) => (
                    <span
                      key={idx}
                      className="text-[11px] font-mono text-purple-300/90 bg-purple-950/30 border border-purple-500/15 px-2.5 py-1 rounded-lg"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              )}
            </div>

            {/* Card Action Row: View Certificate Button */}
            <div className="pt-4 border-t border-purple-500/15 flex items-center justify-between gap-2.5">
              <button
                onClick={() => onSelectCertificate(cert)}
                className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-purple-600 via-violet-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 rounded-xl transition-all shadow-[0_0_15px_rgba(168,85,247,0.25)] hover:shadow-[0_0_22px_rgba(168,85,247,0.4)] cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400"
              >
                <Eye className="w-4 h-4" />
                <span>View Certificate</span>
              </button>

              {cert.verificationUrl && (
                <a
                  href={cert.verificationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-3 py-2 text-xs font-mono font-medium text-purple-300 hover:text-white bg-purple-950/30 hover:bg-purple-900/40 border border-purple-500/25 rounded-xl transition-colors shrink-0"
                  title="Verify Credential"
                >
                  <span>Verify</span>
                  <ExternalLink className="w-3.5 h-3.5 text-purple-400" />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

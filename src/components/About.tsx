import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import { Sparkles, Brain, Cpu, Code2, CheckCircle2 } from 'lucide-react';

export const About: React.FC = () => {
  const [selectedTopic, setSelectedTopic] = useState<number>(0);

  const iconsMap: { [key: string]: React.ReactNode } = {
    'Artificial Intelligence': <Sparkles className="w-5 h-5 text-purple-400" />,
    'Machine Learning': <Brain className="w-5 h-5 text-violet-400" />,
    'Deep Learning': <Cpu className="w-5 h-5 text-indigo-400" />,
    'Software Development': <Code2 className="w-5 h-5 text-cyan-400" />
  };

  const domainFocusTags = [
    'Artificial Intelligence',
    'Machine Learning',
    'Deep Learning',
    'Web Development',
    'Databases',
    'Software Development'
  ];

  return (
    <section id="about" className="relative bg-transparent py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-4">
          About <span className="bg-gradient-to-r from-purple-400 via-violet-300 to-indigo-300 bg-clip-text text-transparent">Me</span>
        </h2>
        <p className="text-zinc-400 text-base max-w-2xl leading-relaxed">
          An honest look at my current academic standing, foundational areas of study, and trajectory toward intelligent systems engineering.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Authentic Bio Narrative */}
        <div className="lg:col-span-7 flex flex-col gap-6 text-left">
          
          <div className="rounded-3xl bg-[#0a0a16]/75 backdrop-blur-xl border border-purple-500/20 p-6 sm:p-8 shadow-[0_0_30px_rgba(168,85,247,0.06)] hover:border-purple-500/35 transition-all">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2.5">
              <span>B.Tech CSE & AIML Student</span>
            </h3>

            <div className="space-y-4 text-zinc-300 text-sm sm:text-base leading-relaxed">
              {personalInfo.aboutBio.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            {/* Core Competencies Being Developed */}
            <div className="mt-8 pt-6 border-t border-purple-500/15">
              <h4 className="text-xs font-mono uppercase tracking-wider text-purple-400/90 mb-3 font-semibold">
                Foundations in Active Development
              </h4>
              <div className="flex flex-wrap gap-2">
                {domainFocusTags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1.5 rounded-xl bg-purple-950/25 border border-purple-500/20 text-xs text-purple-200 font-mono transition-colors hover:border-purple-400/50 hover:bg-purple-900/30"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Integrity Notice Banner */}
            <div className="mt-6 p-4 rounded-2xl bg-purple-950/30 border border-purple-500/25 text-xs text-zinc-300 flex items-start gap-3 shadow-inner">
              <CheckCircle2 className="w-4 h-4 text-purple-400 flex-shrink-0 mt-0.5" />
              <p>
                <strong className="text-white font-semibold">Clear Focus:</strong> I am actively building real skills through coursework, self-driven study, and coding practice at Bonam Venkata Chalamayya Engineering College. No exaggerated professional claims—only genuine curiosity and dedication to engineering excellence.
              </p>
            </div>

          </div>

        </div>

        {/* Right Column: Currently Exploring Interactive Area */}
        <div className="lg:col-span-5 flex flex-col gap-4 text-left">
          
          <div className="rounded-3xl bg-[#0a0a16]/75 backdrop-blur-xl border border-purple-500/20 p-6 sm:p-8 shadow-[0_0_30px_rgba(168,85,247,0.06)] hover:border-purple-500/35 transition-all">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-white">
                Currently Exploring
              </h3>
              <span className="text-[11px] font-mono text-purple-300 bg-purple-500/15 px-2 py-0.5 rounded-md border border-purple-500/30 font-medium">
                Daily Focus
              </span>
            </div>

            <p className="text-xs text-zinc-400 mb-5">
              Click or explore these primary areas where I am currently investing my time, writing code, and studying foundational architectures.
            </p>

            {/* Topic Selectors */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
              {personalInfo.currentlyExploring.map((topic, index) => (
                <button
                  key={topic.title}
                  onClick={() => setSelectedTopic(index)}
                  className={"p-3 rounded-2xl border text-left transition-all duration-150 flex items-center gap-2.5 cursor-pointer " + (
                    selectedTopic === index
                      ? 'bg-purple-900/35 border-purple-400 shadow-[0_0_15px_rgba(168,85,247,0.25)]'
                      : 'bg-white/[0.02] hover:bg-purple-950/20 border-purple-500/15'
                  )}
                >
                  <div className="p-1.5 rounded-xl bg-purple-950/40 border border-purple-500/30">
                    {iconsMap[topic.title]}
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs font-semibold text-white">{topic.title}</span>
                    <span className="text-[10px] text-purple-400 font-mono">{topic.badge}</span>
                  </div>
                </button>
              ))}
            </div>

            {/* Active Topic Detailed Card */}
            {personalInfo.currentlyExploring[selectedTopic] && (
              <div className="p-4 sm:p-5 rounded-2xl bg-[#0c0c1c]/90 border border-purple-500/25 shadow-inner">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-semibold text-purple-400 font-mono">
                    {personalInfo.currentlyExploring[selectedTopic].badge}
                  </span>
                  <span className="text-[10px] text-zinc-500 font-mono">
                    Module 0{selectedTopic + 1}
                  </span>
                </div>
                
                <h4 className="text-sm font-bold text-white mb-2">
                  {personalInfo.currentlyExploring[selectedTopic].title}
                </h4>
                
                <p className="text-xs text-zinc-300 leading-relaxed mb-4">
                  {personalInfo.currentlyExploring[selectedTopic].description}
                </p>

                <div className="space-y-1.5 pt-3 border-t border-purple-500/15">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-purple-400/80 block mb-1">
                    Specific Learning Points:
                  </span>
                  {personalInfo.currentlyExploring[selectedTopic].focus.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-zinc-300 font-mono">
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-400 shadow-[0_0_6px_rgba(168,85,247,0.8)]" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};

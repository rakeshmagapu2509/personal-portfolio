import React, { useState } from 'react';
import { skillCategories } from '../data/portfolioData';
import { SkillCategory, SkillItem } from '../types/portfolio';
import { GithubIcon } from './BrandIcons';
import { 
  Code, 
  Terminal, 
  Cpu, 
  Database, 
  Layers, 
  Wrench, 
  FileCode2, 
  Coffee, 
  BrainCircuit, 
  Sparkles, 
  Palette, 
  Code2, 
  Atom, 
  Server, 
  GitBranch, 
  BookOpen 
} from 'lucide-react';

export const Skills: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('all');

  const getSkillIcon = (iconName: string) => {
    switch (iconName) {
      case 'FileCode2': return <FileCode2 className="w-5 h-5 text-purple-400" />;
      case 'Coffee': return <Coffee className="w-5 h-5 text-orange-400" />;
      case 'Terminal': return <Terminal className="w-5 h-5 text-zinc-300" />;
      case 'BrainCircuit': return <BrainCircuit className="w-5 h-5 text-violet-400" />;
      case 'Sparkles': return <Sparkles className="w-5 h-5 text-purple-300" />;
      case 'Code2': return <Code2 className="w-5 h-5 text-cyan-400" />;
      case 'Palette': return <Palette className="w-5 h-5 text-pink-400" />;
      case 'Atom': return <Atom className="w-5 h-5 text-sky-400" />;
      case 'Server': return <Server className="w-5 h-5 text-emerald-400" />;
      case 'Database': return <Database className="w-5 h-5 text-indigo-400" />;
      case 'Layers': return <Layers className="w-5 h-5 text-purple-400" />;
      case 'GitBranch': return <GitBranch className="w-5 h-5 text-orange-400" />;
      case 'Github': return <GithubIcon className="w-5 h-5 text-white" />;
      case 'BookOpen': return <BookOpen className="w-5 h-5 text-amber-400" />;
      case 'Code': default: return <Code className="w-5 h-5 text-purple-400" />;
    }
  };

  const allSkills: SkillItem[] = skillCategories.flatMap((category) => category.skills);

  const displayedSkills = activeTab === 'all'
    ? allSkills
    : skillCategories.find((c) => c.id === activeTab)?.skills || [];

  return (
    <section id="skills" className="relative bg-transparent py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-10">
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-4">
          Skills & <span className="bg-gradient-to-r from-purple-400 via-violet-300 to-cyan-300 bg-clip-text text-transparent">Technologies</span>
        </h2>
        <p className="text-zinc-400 text-base max-w-2xl leading-relaxed">
          Core languages, frameworks, databases, and environments I work with. Organized transparently without artificial percentages or fake progress bars.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
        <button
          onClick={() => setActiveTab('all')}
          className={"px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-150 cursor-pointer " + (
            activeTab === 'all'
              ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-[0_0_15px_rgba(168,85,247,0.4)] font-semibold'
              : 'bg-[#0a0a16]/80 text-zinc-300 hover:text-white hover:bg-purple-950/20 border border-purple-500/20'
          )}
        >
          All Technologies ({allSkills.length})
        </button>

        {skillCategories.map((category) => (
          <button
            key={category.id}
            onClick={() => setActiveTab(category.id)}
            className={"px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-150 cursor-pointer " + (
              activeTab === category.id
                ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-[0_0_15px_rgba(168,85,247,0.4)] font-semibold'
                : 'bg-[#0a0a16]/80 text-zinc-300 hover:text-white hover:bg-purple-950/20 border border-purple-500/20'
            )}
          >
            {category.name}
          </button>
        ))}
      </div>

      {/* Skill Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {displayedSkills.map((skill) => (
          <div
            key={skill.name}
            className="group rounded-2xl bg-[#0a0a16]/75 backdrop-blur-xl border border-purple-500/20 p-5 flex flex-col justify-between transition-all duration-200 hover:-translate-y-1 hover:border-purple-400/50 hover:shadow-[0_0_25px_rgba(168,85,247,0.18)]"
          >
            <div>
              <div className="flex items-start justify-between gap-3 mb-3">
                <div className="p-2.5 rounded-xl bg-purple-950/30 border border-purple-500/30 shadow-inner group-hover:scale-105 transition-transform">
                  {getSkillIcon(skill.iconName)}
                </div>
                <span className="text-[11px] font-mono text-purple-300/80 bg-purple-500/10 px-2 py-0.5 rounded border border-purple-500/20">
                  {skill.category}
                </span>
              </div>

              <h3 className="text-base font-bold text-white mb-1 group-hover:text-purple-300 transition-colors">
                {skill.name}
              </h3>

              <p className="text-xs text-zinc-300 leading-relaxed mb-4">
                {skill.description}
              </p>
            </div>

            {skill.tags && (
              <div className="flex flex-wrap gap-1.5 pt-3 border-t border-purple-500/15">
                {skill.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] font-mono text-purple-200 bg-purple-950/30 px-2 py-0.5 rounded border border-purple-500/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Subtext */}
      <div className="mt-8 text-center">
        <p className="text-xs font-mono text-purple-400/80">
          * Actively expanding proficiency across PyTorch, algorithmic problem solving, and modern distributed AI systems.
        </p>
      </div>
    </section>
  );
};

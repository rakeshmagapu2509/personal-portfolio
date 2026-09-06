import React, { useState } from 'react';
import { projects as projectsList, futureProjectSchemaTemplate } from '../data/portfolioData';
import type { Project } from '../types/portfolio';
import { ProjectModal } from './ProjectModal';
import { 
  Sparkles, 
  Clock, 
  ExternalLink, 
  Eye, 
  CheckCircle2,
  Cpu
} from 'lucide-react';
import { GithubIcon } from './BrandIcons';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const hasActiveProjects = projectsList.length > 0;

  return (
    <section id="projects" className="relative bg-transparent py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-4">
          Featured <span className="bg-gradient-to-r from-purple-400 via-violet-300 to-indigo-300 bg-clip-text text-transparent">Projects</span>
        </h2>
        <p className="text-zinc-400 text-base max-w-2xl leading-relaxed">
          An authentic showcase of engineering work, full-stack applications, and software systems built with modern web technologies and clean architecture.
        </p>
      </div>

      {/* If Projects Exist, Render Them */}
      {hasActiveProjects ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
          {projectsList.map((project) => (
            <div
              key={project.id}
              className="group rounded-3xl bg-[#0a0a16]/75 backdrop-blur-xl border border-purple-500/20 p-6 flex flex-col justify-between transition-all duration-200 hover:-translate-y-1 hover:border-purple-400/50 hover:shadow-[0_0_30px_rgba(168,85,247,0.2)]"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-mono text-purple-300 bg-purple-500/15 px-2.5 py-0.5 rounded-md border border-purple-500/30 font-medium">
                    {project.category}
                  </span>
                  <span className="text-[11px] font-mono text-zinc-400">
                    {project.date || 'In Progress'}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                  {project.title}
                </h3>

                <p className="text-sm text-zinc-300 leading-relaxed mb-4">
                  {project.shortDescription}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-mono text-purple-200 bg-purple-950/30 px-2.5 py-1 rounded-lg border border-purple-500/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-purple-500/15 flex items-center justify-between">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="text-xs font-medium text-purple-300 hover:text-purple-200 flex items-center gap-1.5 cursor-pointer"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>View Details</span>
                </button>

                <div className="flex items-center gap-3">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-zinc-400 hover:text-white transition-colors"
                      title="GitHub Repository"
                    >
                      <GithubIcon className="w-4 h-4 text-zinc-300" />
                    </a>
                  )}
                  {project.liveDemoUrl && (
                    <a
                      href={project.liveDemoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-zinc-400 hover:text-purple-300 transition-colors"
                      title="Live Demo"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        /* Strict Requirement: Polished Futuristic Empty State */
        <div className="relative rounded-3xl bg-[#0a0a16]/80 backdrop-blur-xl border border-purple-500/25 p-8 sm:p-12 text-center max-w-3xl mx-auto shadow-[0_0_35px_rgba(168,85,247,0.1)]">
          <div className="w-16 h-16 rounded-2xl bg-purple-950/40 border border-purple-500/40 flex items-center justify-center text-purple-300 mx-auto mb-5 shadow-[0_0_20px_rgba(168,85,247,0.25)]">
            <Cpu className="w-8 h-8 text-purple-400" />
          </div>

          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/25 text-purple-300 text-xs font-mono mb-4 font-medium">
            <Sparkles className="w-3 h-3 text-purple-400" />
            Neural Core In Active Development
          </span>

          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3 tracking-tight">
            Projects are currently in active development.
          </h3>

          <p className="text-zinc-300 text-sm sm:text-base leading-relaxed max-w-xl mx-auto mb-6">
            I am actively writing code, training machine learning models, and constructing foundational applications. Verified repositories and deployment endpoints will appear here upon deployment.
          </p>

          <div className="p-4 rounded-2xl bg-[#080814]/90 border border-purple-500/20 max-w-md mx-auto text-left text-xs text-zinc-300 mb-6 flex items-start gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-purple-400 flex-shrink-0 mt-0.5" />
            <p>
              <strong className="text-white">Extensible Architecture:</strong> The portfolio code is backed by a strongly-typed TypeScript model. Future projects appear dynamically by simply updating <code className="text-purple-300 font-mono">portfolioData.ts</code>.
            </p>
          </div>

          {/* Blueprint Modal Preview Trigger */}
          <button
            onClick={() => setSelectedProject(futureProjectSchemaTemplate)}
            className="inline-flex items-center gap-2 px-4 py-2 text-xs font-medium text-purple-200 hover:text-white bg-purple-950/30 hover:bg-purple-900/40 border border-purple-500/30 hover:border-purple-400 rounded-xl transition-all cursor-pointer shadow-[0_0_15px_rgba(168,85,247,0.15)]"
          >
            <Eye className="w-3.5 h-3.5 text-purple-400" />
            <span>Preview Project Display System</span>
          </button>
        </div>
      )}

      {/* Project Details Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};

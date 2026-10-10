import React from 'react';
import { roleProjects } from '../data/projects';
import { roleConfigs } from '../data/roles';
import { Github, ExternalLink, Check, Terminal, Code2, Server } from 'lucide-react';

export default function Projects({ currentRole = 'sde' }) {
  const roleConfig = roleConfigs[currentRole] || roleConfigs.sde;
  const currentProjects = roleProjects[currentRole] || roleProjects.sde;

  if (!currentProjects.length) return null;

  const accentTextClass =
    currentRole === 'sde'
      ? 'text-indigo-600 dark:text-indigo-400'
      : currentRole === 'fullstack'
      ? 'text-sky-600 dark:text-sky-400'
      : 'text-emerald-600 dark:text-emerald-400';

  return (
    <section id="projects" className="border-t border-slate-200/80 py-20 dark:border-slate-800">
      <div className="premium-shell">
        <div className="mb-10">
          <span className={`section-kicker ${accentTextClass}`}>
            Selected Work • {roleConfig.shortLabel} Focus
          </span>
          <h2 className="section-title mt-3">Featured Projects</h2>
          <p className="section-copy mt-3 max-w-2xl">
            {currentRole === 'sde' && 'End-to-end applications combining responsive React interfaces, backend services, REST APIs, and structured database logic.'}
            {currentRole === 'fullstack' && 'End-to-end full stack web applications with interactive frontends, REST APIs, and database persistence.'}
            {currentRole === 'devops' && 'Automated deployment workflows, containerized multi-tier setups, and Linux infrastructure management.'}
          </p>
        </div>

        <div className="grid items-stretch gap-6 md:grid-cols-1 xl:grid-cols-2">
          {currentProjects.map((project) => (
            <article
              key={project.id}
              className="premium-card group relative flex h-full flex-col justify-between overflow-hidden rounded-[28px] p-4 shadow-[0_18px_60px_-28px_rgba(15,23,42,0.3)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_22px_68px_-30px_rgba(79,70,229,0.38)] dark:shadow-none"
            >
              <div className={`absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r ${currentRole === 'sde' ? 'from-indigo-500 via-violet-500 to-sky-500' : currentRole === 'fullstack' ? 'from-sky-500 via-cyan-500 to-emerald-500' : 'from-emerald-500 via-teal-500 to-cyan-500'}`} />

              <div className="mb-4 flex items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <span className={`section-kicker ${accentTextClass}`}>Project {project.projectNumber}</span>
                  {project.featured && (
                    <span className={`rounded-full border px-2 py-1 text-[9px] font-semibold uppercase tracking-[0.12em] ${currentRole === 'sde' ? 'border-indigo-200 bg-indigo-50 text-indigo-700 dark:border-indigo-500/40 dark:bg-indigo-500/10 dark:text-indigo-300' : currentRole === 'fullstack' ? 'border-sky-200 bg-sky-50 text-sky-700 dark:border-sky-500/40 dark:bg-sky-500/10 dark:text-sky-300' : 'border-emerald-200 bg-emerald-50 text-emerald-700 dark:border-emerald-500/40 dark:bg-emerald-500/10 dark:text-emerald-300'}`}>
                      Featured
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-2">
                  <a href={project.githubUrl} target="_blank" rel="noreferrer" aria-label={`${project.title} GitHub`} className="rounded-lg border border-slate-200 bg-white p-2 text-slate-500 transition hover:border-slate-300 hover:text-slate-900 dark:border-slate-700 dark:bg-[#11151A] dark:text-slate-300 dark:hover:border-slate-600 dark:hover:text-white" title="GitHub">
                    <Github className="h-4 w-4" />
                  </a>
                  <a href={project.liveUrl} target="_blank" rel="noreferrer" aria-label={`${project.title} Live Demo`} className="rounded-lg border border-slate-200 bg-white p-2 text-slate-500 transition hover:border-slate-300 hover:text-slate-900 dark:border-slate-700 dark:bg-[#11151A] dark:text-slate-300 dark:hover:border-slate-600 dark:hover:text-white" title="Live Demo">
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </div>

              <div className="flex flex-1 flex-col gap-4">
                <div>
                  <h3 className="text-xl font-bold tracking-[-0.05em] text-slate-900 dark:text-slate-100">{project.title}</h3>
                  <p className="mt-1 text-[10px] font-medium uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">{project.date}</p>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">{project.description || project.problemSolution}</p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {(project.techStack || project.technologies || []).map((tech) => (
                    <span key={tech} className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-[9px] font-medium uppercase tracking-[0.12em] text-slate-600 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="rounded-2xl border border-slate-200 bg-slate-50/90 p-3 dark:border-slate-700 dark:bg-slate-900/80">
                  <p className="text-[9px] font-semibold uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">Key outcomes</p>
                  <ul className="mt-3 space-y-2 text-sm text-slate-600 dark:text-slate-300">
                    {(project.keyFeatures || []).map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className={`mt-0.5 h-4 w-4 shrink-0 ${accentTextClass}`} />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between gap-3 border-t border-slate-200 pt-3 dark:border-slate-700">
                <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                  <Terminal className="h-3.5 w-3.5" />
                  <span>{currentRole === 'devops' ? 'DevOps workflow' : 'Full-stack build'}</span>
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  <a href={project.githubUrl} target="_blank" rel="noreferrer" className={`inline-flex items-center gap-2 text-sm font-semibold ${accentTextClass}`}>
                    GitHub <span aria-hidden="true">→</span>
                  </a>
                  <a href={project.liveUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700 transition hover:text-slate-900 dark:text-slate-300 dark:hover:text-white">
                    Live Demo <span aria-hidden="true">→</span>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

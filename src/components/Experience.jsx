import React from 'react';
import { roleExperience } from '../data/experience';
import { roleConfigs } from '../data/roles';

export default function Experience({ currentRole = 'sde' }) {
  const roleConfig = roleConfigs[currentRole] || roleConfigs.sde;
  const items = roleExperience[currentRole] || roleExperience.sde;

  const accentTextClass =
    currentRole === 'sde'
      ? 'text-indigo-600 dark:text-indigo-400'
      : currentRole === 'fullstack'
      ? 'text-sky-600 dark:text-sky-400'
      : 'text-emerald-600 dark:text-emerald-400';

  const badgeClass =
    currentRole === 'sde'
      ? 'text-indigo-700 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-500/10 border-indigo-200 dark:border-indigo-500/20'
      : currentRole === 'fullstack'
      ? 'text-sky-700 dark:text-sky-400 bg-sky-50 dark:bg-sky-500/10 border-sky-200 dark:border-sky-500/20'
      : 'text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-500/10 border-emerald-200 dark:border-emerald-500/20';

  const nodeBorderClass =
    currentRole === 'sde'
      ? 'border-indigo-500'
      : currentRole === 'fullstack'
      ? 'border-sky-500'
      : 'border-emerald-500';

  const nodeDotClass =
    currentRole === 'sde'
      ? 'bg-indigo-500'
      : currentRole === 'fullstack'
      ? 'bg-sky-500'
      : 'bg-emerald-500';

  return (
    <section id="experience" className="border-t border-slate-200/80 py-20 dark:border-slate-800">
      <div className="premium-shell">
        <div className="mb-10">
          <span className={`section-kicker ${accentTextClass}`}>
            Timeline • {roleConfig.shortLabel}
          </span>
          <h2 className="section-title mt-3">Experience & Journey</h2>
          <p className="section-copy mt-3 max-w-2xl">
            {currentRole === 'sde' && 'End-to-end software engineering projects spanning React interfaces, backend implementations, APIs, and database systems.'}
            {currentRole === 'fullstack' && 'Full stack web development, responsive application architecture, and practical engineering projects.'}
            {currentRole === 'devops' && 'DevOps automation, Docker containerization, CI/CD pipeline implementation, and Linux infrastructure.'}
          </p>
        </div>

        <div className="relative ml-3 max-w-3xl space-y-8 border-l border-slate-200 pl-6 dark:border-slate-700 sm:ml-4 sm:pl-8">
          {items.map((item) => (
            <div key={item.id} className="relative group">
              <div className={`absolute -left-[29px] top-6 flex h-4 w-4 items-center justify-center rounded-full border-2 bg-white dark:bg-[#0b0d10] sm:-left-[36px] ${nodeBorderClass}`}>
                <div className={`h-1.5 w-1.5 rounded-full ${nodeDotClass}`} />
              </div>

              <div className="premium-card rounded-2xl p-6 transition hover:-translate-y-0.5">
                <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
                  <h3 className="text-base font-semibold tracking-[-0.02em] text-slate-900 dark:text-slate-100">{item.role}</h3>
                  <span className={`rounded-full border px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] ${badgeClass}`}>{item.period}</span>
                </div>

                <div className="mb-3 text-sm font-medium text-slate-700 dark:text-slate-300">{item.organization}</div>

                {item.bullets ? (
                  <ul className="mb-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                    {item.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
                  </ul>
                ) : (
                  <p className="mb-4 text-sm leading-relaxed text-slate-600 dark:text-slate-400">{item.description}</p>
                )}

                {item.technologies && (
                  <div className="mb-3 flex flex-wrap gap-1.5">
                    {item.technologies.map((tech) => (
                      <span key={tech} className="rounded-full border border-slate-200 bg-slate-50 px-2 py-0.5 text-[10px] font-medium text-slate-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200">
                        {tech}
                      </span>
                    ))}
                  </div>
                )}

                {item.note && <div className="border-t border-slate-200 pt-3 text-xs italic text-slate-500 dark:border-slate-700 dark:text-slate-400">{item.note}</div>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

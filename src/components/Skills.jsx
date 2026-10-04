import React from 'react';
import { roleSkills } from '../data/skills';
import { roleConfigs } from '../data/roles';

export default function Skills({ currentRole = 'sde' }) {
  const roleConfig = roleConfigs[currentRole] || roleConfigs.sde;
  const categories = roleSkills[currentRole] || roleSkills.sde;

  const accentTextClass =
    currentRole === 'sde'
      ? 'text-indigo-600 dark:text-indigo-400'
      : currentRole === 'fullstack'
      ? 'text-sky-600 dark:text-sky-400'
      : 'text-emerald-600 dark:text-emerald-400';

  const badgeClass =
    currentRole === 'sde'
      ? 'bg-indigo-50 dark:bg-indigo-500/10 text-indigo-700 dark:text-indigo-300 border-indigo-200 dark:border-indigo-500/30'
      : currentRole === 'fullstack'
      ? 'bg-sky-50 dark:bg-sky-500/10 text-sky-700 dark:text-sky-300 border-sky-200 dark:border-sky-500/30'
      : 'bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-500/30';

  const borderHighlight =
    currentRole === 'sde'
      ? 'border-indigo-300/80 dark:border-indigo-500/40'
      : currentRole === 'fullstack'
      ? 'border-sky-300/80 dark:border-sky-500/40'
      : 'border-emerald-300/80 dark:border-emerald-500/40';

  return (
    <section id="skills" className="border-t border-slate-200/80 py-20 dark:border-slate-800">
      <div className="premium-shell">
        <div className="mb-10">
          <span className={`section-kicker ${accentTextClass}`}>
            Capabilities • {roleConfig.shortLabel} View
          </span>
          <h2 className="section-title mt-3">Skills & Technologies</h2>
          <p className="section-copy mt-3 max-w-2xl">
            {currentRole === 'sde' && 'Technical skillset spanning React interfaces, backend APIs, database management, core computer science, and deployment-ready workflows.'}
            {currentRole === 'fullstack' && 'Technical skillset emphasizing interactive React user interfaces, Node.js REST services, and database persistence.'}
            {currentRole === 'devops' && 'Technical skillset emphasizing Docker containerization, GitHub Actions CI/CD automation, and Linux infrastructure.'}
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {categories.map((group, idx) => {
            const isHighlight = idx === 0 || idx === 1;
            return (
              <div
                key={group.category}
                className={`premium-card flex min-h-[220px] flex-col justify-between rounded-2xl p-5 transition hover:-translate-y-0.5 ${isHighlight ? borderHighlight : 'border-slate-200 dark:border-slate-700'}`}
              >
                <div>
                  <div className="mb-4 flex items-center justify-between gap-3">
                    <h3 className="text-base font-semibold tracking-[-0.02em] text-slate-900 dark:text-slate-100">{group.category}</h3>
                    {isHighlight && <span className={`rounded-full border px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.14em] ${badgeClass}`}>Core</span>}
                  </div>
                  <p className="text-xs leading-relaxed text-slate-500 dark:text-slate-400">{group.description}</p>
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span key={skill} className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-[11px] font-medium text-slate-700 transition hover:border-slate-300 hover:text-slate-900 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:border-slate-600 dark:hover:text-white">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

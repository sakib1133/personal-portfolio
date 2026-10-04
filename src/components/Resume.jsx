import React from 'react';
import { ExternalLink } from 'lucide-react';
import { roleConfigs } from '../data/roles';

export default function Resume({ currentRole = 'sde' }) {
  if (currentRole === 'devops' || currentRole === 'sde' || currentRole === 'fullstack') return null;

  const roleConfig = roleConfigs[currentRole] || roleConfigs.sde;

  const accentTextClass =
    currentRole === 'sde'
      ? 'text-indigo-600 dark:text-indigo-400'
      : currentRole === 'fullstack'
      ? 'text-sky-600 dark:text-sky-400'
      : 'text-emerald-600 dark:text-emerald-400';

  const btnBgClass =
    currentRole === 'sde'
      ? 'bg-indigo-600 hover:bg-indigo-500 shadow-indigo-600/20'
      : currentRole === 'fullstack'
      ? 'bg-sky-600 hover:bg-sky-500 shadow-sky-600/20'
      : 'bg-emerald-600 hover:bg-emerald-500 shadow-emerald-600/20';

  return (
    <section id="resume" className="py-16 px-4 sm:px-6 lg:px-8 border-t border-slate-200 dark:border-[#1a2234]">
      <div className="max-w-4xl mx-auto">
        <div className="rounded-xl bg-white dark:bg-[#0e131f] border border-slate-200 dark:border-[#1a2234] p-8 sm:p-10 flex flex-col sm:flex-row sm:items-center justify-between gap-6 shadow-sm">
          <div className="max-w-xl">
            <span className={`text-xs font-semibold uppercase tracking-wider font-mono ${accentTextClass}`}>
              Recruiter Overview • {roleConfig.shortLabel}
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mt-1">
              Want to review my full credentials?
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">
              Access and view my verified {roleConfig.label} resume hosted directly on WPS Office with a complete breakdown of projects, technical competencies, and academic background.
            </p>
          </div>

          <div className="shrink-0">
            <a
              href={roleConfig.resumeUrl}
              target="_blank"
              rel="noreferrer"
              className={`inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg text-white font-medium text-sm transition-all duration-150 shadow-sm ${btnBgClass}`}
            >
              <ExternalLink className="w-4 h-4" />
              <span>{roleConfig.resumeBtnLabel}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

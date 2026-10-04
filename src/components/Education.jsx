import React from 'react';
import { BookOpen, GraduationCap, School } from 'lucide-react';
import { educationData } from '../data/education';

export default function Education({ currentRole = 'sde' }) {
  const isSde = currentRole === 'sde';
  const accent = isSde
    ? {
        text: 'text-indigo-600 dark:text-indigo-400',
        soft: 'bg-indigo-50 dark:bg-indigo-500/10',
        border: 'border-indigo-200 dark:border-indigo-500/30',
        line: 'bg-indigo-200 dark:bg-indigo-500/30'
      }
    : {
        text: 'text-emerald-600 dark:text-emerald-400',
        soft: 'bg-emerald-50 dark:bg-emerald-500/10',
        border: 'border-emerald-200 dark:border-emerald-500/30',
        line: 'bg-emerald-200 dark:bg-emerald-500/30'
      };
  const icons = [GraduationCap, BookOpen, School];

  return (
    <section id="education" className="border-t border-slate-200/80 py-20 dark:border-slate-800">
      <div className="premium-shell">
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className={`section-kicker ${accent.text}`}>Academics</span>
            <h2 className="section-title mt-3">Education</h2>
          </div>
          <p className="section-copy max-w-sm sm:text-right">A progression from foundational learning to computer science and engineering.</p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-12">
          {educationData.map((edu, index) => {
            const Icon = icons[index];
            const isGraduation = index === 0;

            return (
              <article
                key={edu.id}
                className={`premium-card relative overflow-hidden rounded-2xl p-5 transition hover:-translate-y-0.5 sm:p-6 ${
                  isGraduation ? 'md:col-span-2 lg:col-span-6' : 'lg:col-span-3'
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className={`flex items-center justify-center rounded-xl ${isGraduation ? 'h-11 w-11' : 'h-10 w-10'} ${accent.soft} ${accent.text}`}>
                    <Icon className={isGraduation ? 'h-5 w-5' : 'h-[18px] w-[18px]'} />
                  </div>
                  <span className={`rounded-full px-2.5 py-1 text-[10px] font-mono font-semibold uppercase tracking-[0.12em] ${accent.soft} ${accent.text}`}>
                    {edu.year}
                  </span>
                </div>

                <div className="mt-5">
                  <p className={`section-kicker ${accent.text}`}>{edu.level}</p>
                  <h3 className={`${isGraduation ? 'text-xl sm:text-2xl' : 'text-lg'} mt-2 font-bold tracking-[-0.04em] text-slate-900 dark:text-slate-100`}>
                    {edu.degree || edu.level}
                  </h3>
                  {edu.specialization && <p className="mt-2 text-sm font-medium text-slate-700 dark:text-slate-300">{edu.specialization}</p>}
                  <p className="mt-4 text-sm leading-relaxed text-slate-600 dark:text-slate-400">{edu.institution}</p>
                  {edu.board && <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">{edu.board} {edu.institutionLabel}</p>}
                </div>

                <div className={`mt-6 flex items-end justify-between gap-3 border-t pt-4 ${isGraduation ? accent.border : 'border-slate-200 dark:border-slate-700'}`}>
                  <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-500 dark:text-slate-400">{edu.scoreLabel}</span>
                  <span className={`${isGraduation ? 'text-2xl' : 'text-xl'} font-bold tracking-[-0.05em] ${accent.text}`}>{edu.score}</span>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

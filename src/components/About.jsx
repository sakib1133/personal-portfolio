import React from 'react';
import { profileData } from '../data/profile';
import { roleConfigs } from '../data/roles';
import { GraduationCap, Code2, Server, Database, Layers, GitBranch, Terminal } from 'lucide-react';

const iconMap = {
  sde: [Code2, Server, Database],
  fullstack: [Layers, Server, Database],
  devops: [Layers, GitBranch, Terminal]
};

export default function About({ currentRole = 'sde' }) {
  const roleConfig = roleConfigs[currentRole] || roleConfigs.sde;
  const paragraphs = profileData.aboutParagraphs[currentRole] || [roleConfig.aboutIntro];
  const facts = profileData.quickFacts[currentRole] || profileData.quickFacts.sde;
  const currentIcons = iconMap[currentRole] || iconMap.sde;

  const accentTextClass =
    currentRole === 'sde'
      ? 'text-indigo-600 dark:text-indigo-400'
      : currentRole === 'fullstack'
      ? 'text-sky-600 dark:text-sky-400'
      : 'text-emerald-600 dark:text-emerald-400';

  return (
    <section id="about" className="border-t border-slate-200/80 py-20 dark:border-slate-800">
      <div className="premium-shell">
        <div className="grid items-start gap-8 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-4">
            <span className={`section-kicker ${accentTextClass}`}>
              Background • {roleConfig.shortLabel}
            </span>
            <h2 className="section-title mt-3">About Me</h2>
            <p className="section-copy mt-3 max-w-sm">{roleConfig.aboutFocus}</p>
          </div>

          <div className="lg:col-span-8 space-y-8">
            <div className="space-y-4 text-base leading-relaxed text-slate-700 dark:text-slate-300">
              {paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {facts.map((fact, index) => {
                const IconComponent = currentIcons[index] || GraduationCap;
                return (
                  <div key={index} className="premium-card flex items-start gap-3 rounded-2xl p-4 transition hover:-translate-y-0.5 hover:border-slate-300 dark:hover:border-slate-600">
                    <div className={`flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 dark:bg-slate-800 ${accentTextClass}`}>
                      <IconComponent className="h-4 w-4" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-100">{fact.title}</h3>
                      <p className="mt-1 text-xs leading-relaxed text-slate-600 dark:text-slate-400">{fact.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

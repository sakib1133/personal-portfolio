import React from 'react';
import { ArrowRight, FileText } from 'lucide-react';
import { profileData } from '../data/profile';
import { roleConfigs } from '../data/roles';

export default function Hero({ currentRole = 'sde' }) {
  const roleConfig = roleConfigs[currentRole] || roleConfigs.sde;

  const accentTextClass = currentRole === 'sde' ? 'text-indigo-600 dark:text-indigo-400' : currentRole === 'fullstack' ? 'text-sky-600 dark:text-sky-400' : 'text-emerald-600 dark:text-emerald-400';
  const btnPrimaryClass = currentRole === 'sde' ? 'bg-indigo-600 text-white hover:bg-indigo-500 shadow-[0_16px_25px_-16px_rgba(79,70,229,0.75)]' : currentRole === 'fullstack' ? 'bg-sky-600 text-white hover:bg-sky-500 shadow-[0_16px_25px_-16px_rgba(14,165,233,0.7)]' : 'bg-emerald-600 text-white hover:bg-emerald-500 shadow-[0_16px_25px_-16px_rgba(16,185,129,0.7)]';
  const glowClass = currentRole === 'sde' ? 'from-indigo-500/20 via-indigo-400/5 to-transparent' : currentRole === 'fullstack' ? 'from-sky-500/20 via-sky-400/5 to-transparent' : 'from-emerald-500/20 via-emerald-400/5 to-transparent';

  return (
    <section id="home" className="relative overflow-hidden pt-28 pb-16 sm:pb-20">
      <div className="absolute inset-0 -z-10">
        <div className={`absolute left-[-5%] top-16 h-72 w-72 rounded-full bg-gradient-to-br ${glowClass} blur-3xl`} />
        <div className="absolute bottom-0 right-[10%] h-56 w-56 rounded-full bg-slate-300/30 blur-3xl dark:bg-slate-700/20" />
      </div>

      <div className="premium-shell">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-7">
            <h1 className="mt-4 max-w-xl text-4xl font-bold tracking-[-0.06em] text-slate-900 dark:text-slate-50 sm:text-5xl lg:text-6xl">
              {profileData.name}
            </h1>
            <h2 className="mt-3 max-w-xl text-xl font-semibold text-slate-700 dark:text-slate-200 sm:text-2xl">
              {roleConfig.heroTitle}
            </h2>
            <p className="mt-4 max-w-xl text-base font-medium text-slate-700 dark:text-slate-300 sm:text-lg">
              {roleConfig.heroSubtitle}
            </p>
            <p className="mt-5 max-w-xl text-sm leading-relaxed text-slate-600 dark:text-slate-400 sm:text-base">
              {roleConfig.heroDescription}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#projects" className={`inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition duration-200 hover:-translate-y-0.5 ${btnPrimaryClass}`}>
                <span>View Projects</span>
                <ArrowRight className="h-4 w-4" />
              </a>
              <a href={roleConfig.resumeUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:-translate-y-0.5 hover:border-slate-300 hover:text-slate-900 dark:border-slate-700 dark:bg-[#11151A] dark:text-slate-200 dark:hover:border-slate-600 dark:hover:text-white">
                <FileText className={`h-4 w-4 ${accentTextClass}`} />
                {roleConfig.resumeBtnLabel}
              </a>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-slate-500 dark:text-slate-400">
              <span className="font-medium">Connect:</span>
              <a href={profileData.links.github} target="_blank" rel="noreferrer" className={`${accentTextClass} transition hover:opacity-75`}>GitHub</a>
              <span aria-hidden="true">·</span>
              <a href={profileData.links.linkedin} target="_blank" rel="noreferrer" className={`${accentTextClass} transition hover:opacity-75`}>LinkedIn</a>
              <span aria-hidden="true">·</span>
              <a href={`mailto:${profileData.email}`} className={`${accentTextClass} transition hover:opacity-75`}>Email</a>
            </div>
          </div>

          <div className="flex justify-center lg:col-span-5 lg:justify-end">
            <img
              src="/profile-photo.png"
              alt={`${profileData.name} portrait`}
              className="hero-portrait"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

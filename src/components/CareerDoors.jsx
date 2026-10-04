import React, { useState } from 'react';
import { Code2, Server, ArrowRight, Layers, GitBranch, Cpu, Terminal } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import { roleConfigs } from '../data/roles';

export default function CareerDoors({ onSelectRole, theme = 'dark', onToggleTheme }) {
  const [openingDoor, setOpeningDoor] = useState(null); // 'sde' | 'devops' | null

  const handleDoorClick = (roleId) => {
    if (openingDoor) return;
    setOpeningDoor(roleId);
    // Play smooth door-opening transition for 600ms before revealing portfolio
    setTimeout(() => {
      onSelectRole(roleId);
    }, 650);
  };

  const handleDirectEnter = (e, roleId) => {
    e.stopPropagation();
    onSelectRole(roleId);
  };

  return (
    <div className="career-doors-background min-h-screen text-slate-800 dark:text-slate-200 flex flex-col justify-between relative overflow-hidden selection:bg-indigo-500/25 selection:text-indigo-600 dark:selection:text-indigo-200 transition-colors duration-200">
      {/* Subtle Background Ambient Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-violet-500/10 dark:bg-violet-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-fuchsia-500/10 dark:bg-fuchsia-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-64 bg-violet-200/50 dark:bg-purple-950/30 blur-[120px] pointer-events-none -z-10" />

      {/* Top Header / Brand */}
      <header className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-indigo-50 dark:bg-[#121829] border border-indigo-200 dark:border-[#1e2638] flex items-center justify-center text-indigo-600 dark:text-indigo-400 font-bold text-sm">
            S
          </div>
          <span className="font-semibold text-slate-900 dark:text-slate-100 tracking-tight text-base sm:text-lg">
            Mohd Sakib Malik<span className="text-indigo-600 dark:text-indigo-400">.</span>
          </span>
        </div>

        {/* Right side: Status + Theme Toggle */}
        <div className="flex items-center gap-3">
          <div className="hidden sm:inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white dark:bg-[#0e131f] border border-slate-200 dark:border-[#1a2234] text-slate-700 dark:text-slate-300 text-xs font-medium shadow-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0 animate-pulse" />
            <span>2026 CS Graduate • Open to Opportunities</span>
          </div>

          <ThemeToggle theme={theme} onToggleTheme={onToggleTheme} />
        </div>
      </header>

      {/* Main Center Content: Title + Two Doors */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full flex-1 flex flex-col justify-center items-center">
        {/* Title Area */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-3 leading-tight">
            Welcome to Sakib's Portfolio
          </h1>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 font-medium">
            Choose your path. Explore my work.
          </p>
        </div>

        {/* Two Architectural Doors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 w-full max-w-4xl">
          {/* --- DOOR 1: SDE / FULL-STACK DEVELOPER --- */}
          <div
            tabIndex={0}
            role="button"
            aria-label="Enter Software Development Portfolio Door"
            onClick={() => handleDoorClick('sde')}
            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') handleDoorClick('sde'); }}
            className={`group perspective-door cursor-pointer rounded-2xl bg-white dark:bg-[#0c1018] border transition-all duration-300 p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden shadow-xl dark:shadow-2xl ${
              openingDoor === 'sde'
                ? 'ring-2 ring-indigo-500 scale-[1.02] border-indigo-500'
                : 'border-slate-200 dark:border-indigo-500/30 hover:border-indigo-400/60 hover:-translate-y-1'
            }`}
          >
            {/* Ambient Backlight Behind Door */}
            <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/10 via-transparent to-indigo-950/20 dark:to-indigo-950/30 opacity-60 group-hover:opacity-100 transition-opacity" />

            {/* Top Door Badges */}
            <div className="relative z-10 flex items-center justify-between mb-6">
              <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded-md border bg-indigo-50 dark:bg-indigo-500/10 text-indigo-700 dark:text-indigo-400 border-indigo-200 dark:border-indigo-500/30">
                SDE / FULL STACK
              </span>
              <div className="p-2.5 rounded-xl bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-500/20 group-hover:scale-110 transition-transform">
                <Code2 className="w-5 h-5" />
              </div>
            </div>

            {/* Architectural 3D Door Portal Graphic */}
            <div className="relative z-10 my-4 h-48 sm:h-52 w-full rounded-xl bg-slate-50 dark:bg-[#080b12] border border-slate-200 dark:border-[#1a2234] p-3 flex flex-col justify-between overflow-hidden shadow-inner">
              {/* Inner Arch Light */}
              <div className="absolute inset-x-4 top-2 bottom-2 bg-gradient-to-b from-indigo-500/20 via-sky-500/10 to-transparent rounded-lg blur-md opacity-40 group-hover:opacity-80 transition-opacity" />

              {/* 3D Double Door Panels */}
              <div className="relative w-full h-full flex gap-1.5 preserve-3d">
                {/* Left Door Panel */}
                <div
                  className={`door-panel-left flex-1 h-full rounded-l-lg bg-gradient-to-b from-indigo-50 via-white to-slate-100 dark:from-[#141b2e] dark:via-[#0f1524] dark:to-[#090d16] border border-indigo-200 dark:border-indigo-500/30 p-3 flex flex-col justify-between ${
                    openingDoor === 'sde' ? 'door-opening-left shadow-2xl' : 'group-hover:border-indigo-400/50'
                  }`}
                >
                  <div className="space-y-1.5 opacity-60">
                    <div className="h-1.5 w-12 bg-indigo-400/40 rounded" />
                    <div className="h-1.5 w-16 bg-slate-400/40 rounded" />
                  </div>
                  {/* Handle */}
                  <div className="self-end w-2 h-6 rounded bg-slate-300 dark:bg-slate-700 border border-indigo-400/40 shadow-sm" />
                  <div className="text-[10px] font-mono text-indigo-600 dark:text-indigo-400/60 flex items-center gap-1">
                    <Layers className="w-3 h-3" />
                    <span>REACT</span>
                  </div>
                </div>

                {/* Right Door Panel */}
                <div
                  className={`door-panel-right flex-1 h-full rounded-r-lg bg-gradient-to-b from-indigo-50 via-white to-slate-100 dark:from-[#141b2e] dark:via-[#0f1524] dark:to-[#090d16] border border-indigo-200 dark:border-indigo-500/30 p-3 flex flex-col justify-between ${
                    openingDoor === 'sde' ? 'door-opening-right shadow-2xl' : 'group-hover:border-indigo-400/50'
                  }`}
                >
                  <div className="space-y-1.5 opacity-60">
                    <div className="h-1.5 w-14 bg-sky-400/40 rounded" />
                    <div className="h-1.5 w-10 bg-slate-400/40 rounded" />
                  </div>
                  {/* Handle */}
                  <div className="self-start w-2 h-6 rounded bg-slate-300 dark:bg-slate-700 border border-indigo-400/40 shadow-sm" />
                  <div className="text-[10px] font-mono text-sky-600 dark:text-sky-400/60 flex items-center gap-1 justify-end">
                    <span>NODE.JS</span>
                    <Terminal className="w-3 h-3" />
                  </div>
                </div>
              </div>
            </div>

            {/* Label & Description */}
            <div className="relative z-10 mt-4 mb-6">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight group-hover:text-indigo-600 dark:group-hover:text-indigo-300 transition-colors">
                Software Engineering & Full Stack
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">
                Explore my web applications, backend APIs, relational databases, data structures, and system logic.
              </p>
            </div>

            {/* Action Button */}
            <div className="relative z-10 pt-4 border-t border-slate-200 dark:border-[#1a2234]">
              <button
                type="button"
                onClick={(e) => handleDirectEnter(e, 'sde')}
                className={`w-full py-3 px-4 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 transition-all duration-150 ${
                  roleConfigs.sde.doorTheme.btn
                }`}
              >
                <span>{openingDoor === 'sde' ? 'Opening...' : 'Enter Development'}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* --- DOOR 2: DEVOPS ENGINEER --- */}
          <div
            tabIndex={0}
            role="button"
            aria-label="Enter DevOps Engineering Portfolio Door"
            onClick={() => handleDoorClick('devops')}
            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') handleDoorClick('devops'); }}
            className={`group perspective-door cursor-pointer rounded-2xl bg-white dark:bg-[#0c1018] border transition-all duration-300 p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden shadow-xl dark:shadow-2xl ${
              openingDoor === 'devops'
                ? 'ring-2 ring-emerald-500 scale-[1.02] border-emerald-500'
                : 'border-slate-200 dark:border-emerald-500/30 hover:border-emerald-400/60 hover:-translate-y-1'
            }`}
          >
            {/* Ambient Backlight Behind Door */}
            <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/10 via-transparent to-emerald-950/20 dark:to-emerald-950/30 opacity-60 group-hover:opacity-100 transition-opacity" />

            {/* Top Door Badges */}
            <div className="relative z-10 flex items-center justify-between mb-6">
              <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded-md border bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border-emerald-200 dark:border-emerald-500/30">
                DEVOPS
              </span>
              <div className="p-2.5 rounded-xl bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-500/20 group-hover:scale-110 transition-transform">
                <Server className="w-5 h-5" />
              </div>
            </div>

            {/* Architectural 3D Door Portal Graphic */}
            <div className="relative z-10 my-4 h-48 sm:h-52 w-full rounded-xl bg-slate-50 dark:bg-[#080b12] border border-slate-200 dark:border-[#1a2234] p-3 flex flex-col justify-between overflow-hidden shadow-inner">
              {/* Inner Arch Light */}
              <div className="absolute inset-x-4 top-2 bottom-2 bg-gradient-to-b from-emerald-500/20 via-teal-500/10 to-transparent rounded-lg blur-md opacity-40 group-hover:opacity-80 transition-opacity" />

              {/* 3D Double Door Panels */}
              <div className="relative w-full h-full flex gap-1.5 preserve-3d">
                {/* Left Door Panel */}
                <div
                  className={`door-panel-left flex-1 h-full rounded-l-lg bg-gradient-to-b from-emerald-50 via-white to-slate-100 dark:from-[#0e211d] dark:via-[#0b1716] dark:to-[#08100f] border border-emerald-200 dark:border-emerald-500/30 p-3 flex flex-col justify-between ${
                    openingDoor === 'devops' ? 'door-opening-left shadow-2xl' : 'group-hover:border-emerald-400/50'
                  }`}
                >
                  <div className="space-y-1.5 opacity-60">
                    <div className="h-1.5 w-12 bg-emerald-400/40 rounded" />
                    <div className="h-1.5 w-16 bg-slate-400/40 rounded" />
                  </div>
                  {/* Handle */}
                  <div className="self-end w-2 h-6 rounded bg-slate-300 dark:bg-slate-700 border border-emerald-400/40 shadow-sm" />
                  <div className="text-[10px] font-mono text-emerald-600 dark:text-emerald-400/60 flex items-center gap-1">
                    <GitBranch className="w-3 h-3" />
                    <span>DOCKER</span>
                  </div>
                </div>

                {/* Right Door Panel */}
                <div
                  className={`door-panel-right flex-1 h-full rounded-r-lg bg-gradient-to-b from-emerald-50 via-white to-slate-100 dark:from-[#0e211d] dark:via-[#0b1716] dark:to-[#08100f] border border-emerald-200 dark:border-emerald-500/30 p-3 flex flex-col justify-between ${
                    openingDoor === 'devops' ? 'door-opening-right shadow-2xl' : 'group-hover:border-emerald-400/50'
                  }`}
                >
                  <div className="space-y-1.5 opacity-60">
                    <div className="h-1.5 w-14 bg-teal-400/40 rounded" />
                    <div className="h-1.5 w-10 bg-slate-400/40 rounded" />
                  </div>
                  {/* Handle */}
                  <div className="self-start w-2 h-6 rounded bg-slate-300 dark:bg-slate-700 border border-emerald-400/40 shadow-sm" />
                  <div className="text-[10px] font-mono text-teal-600 dark:text-teal-400/60 flex items-center gap-1 justify-end">
                    <span>CI/CD</span>
                    <Cpu className="w-3 h-3" />
                  </div>
                </div>
              </div>
            </div>

            {/* Label & Description */}
            <div className="relative z-10 mt-4 mb-6">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight group-hover:text-emerald-600 dark:group-hover:text-emerald-300 transition-colors">
                {roleConfigs.devops.label}
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">
                Explore my deployment workflows, Docker, CI/CD, automation, monitoring, and DevOps-related projects.
              </p>
            </div>

            {/* Action Button */}
            <div className="relative z-10 pt-4 border-t border-slate-200 dark:border-[#1a2234]">
              <button
                type="button"
                onClick={(e) => handleDirectEnter(e, 'devops')}
                className={`w-full py-3 px-4 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 transition-all duration-150 ${
                  roleConfigs.devops.doorTheme.btn
                }`}
              >
                <span>{openingDoor === 'devops' ? 'Opening...' : 'Enter DevOps'}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>

        {/* Recruiter Fast Direct Access Bar */}
        <div className="mt-10 sm:mt-12 flex flex-wrap items-center justify-center gap-3 text-xs text-slate-600 dark:text-slate-400 bg-white/90 dark:bg-[#0c1018]/80 border border-slate-200 dark:border-[#1a2234] px-5 py-2.5 rounded-full shadow-sm dark:shadow-md">
          <span className="font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider">Direct Gate Access:</span>
          <button
            type="button"
            onClick={() => onSelectRole('sde')}
            className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-500 dark:hover:text-indigo-300 font-semibold underline underline-offset-4 transition-colors"
          >
            SDE / Full Stack Developer View →
          </button>
          <span className="text-slate-300 dark:text-slate-600">•</span>
          <button
            type="button"
            onClick={() => onSelectRole('devops')}
            className="text-emerald-600 dark:text-emerald-400 hover:text-emerald-500 dark:hover:text-emerald-300 font-semibold underline underline-offset-4 transition-colors"
          >
            DevOps Engineer View →
          </button>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 text-center text-xs text-slate-500 dark:text-slate-400 font-mono border-t border-slate-200 dark:border-[#1a2234]/50">
        &copy; 2026 Mohd Sakib Malik • Software Engineer & DevOps Enthusiast
      </footer>
    </div>
  );
}

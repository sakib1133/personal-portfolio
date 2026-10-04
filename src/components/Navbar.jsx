import React, { useState, useEffect } from 'react';
import { Menu, X, DoorOpen } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import { roleConfigs } from '../data/roles';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Education', href: '#education' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Certifications', href: '#certifications' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar({ currentRole = 'sde', onSwitchRole, onBackToDoors, theme = 'dark', onToggleTheme }) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  const roleList = [
    { id: 'sde', label: 'SDE / Full Stack', fullLabel: 'SDE / Full Stack Developer', color: 'indigo' },
    { id: 'devops', label: 'DevOps', fullLabel: 'DevOps Engineer', color: 'emerald' }
  ];

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 16);

          const sectionIds = ['home', 'about', 'education', 'projects', 'skills', 'experience', 'certifications', 'contact'];
          const scrollPosition = window.scrollY + 180;

          for (let i = sectionIds.length - 1; i >= 0; i--) {
            const section = document.getElementById(sectionIds[i]);
            if (section && section.offsetTop <= scrollPosition) {
              setActiveSection(sectionIds[i]);
              break;
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = () => setIsOpen(false);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${
        isScrolled
          ? 'border-slate-200/80 bg-white/80 backdrop-blur-xl dark:border-slate-800 dark:bg-[#0b0d10]/80'
          : 'border-slate-200/70 bg-white/70 backdrop-blur-md dark:border-slate-800/80 dark:bg-[#0b0d10]/70'
      }`}
    >
      <div className="premium-shell">
        <div className="flex h-16 items-center justify-between gap-3">
          <div className="flex items-center gap-3 min-w-0" />

          <nav className="hidden lg:flex flex-1 items-center justify-center gap-1" aria-label="Main navigation">
            <div className="mr-2 flex shrink-0 items-center gap-1 rounded-full border border-slate-200 bg-slate-100/80 p-1 dark:border-slate-700 dark:bg-[#11151A]">
              {roleList.map((role) => {
                const isCurrentRole = role.id === currentRole;
                return (
                  <button
                    key={role.id}
                    type="button"
                    onClick={() => !isCurrentRole && onSwitchRole(role.id)}
                    aria-pressed={isCurrentRole}
                    className={`whitespace-nowrap rounded-full px-2.5 py-1.5 text-[10px] font-semibold transition-all ${
                      isCurrentRole
                        ? role.id === 'devops'
                          ? 'bg-emerald-600 text-white shadow-sm'
                          : 'bg-indigo-600 text-white shadow-sm'
                        : 'text-slate-600 hover:bg-white hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white'
                    }`}
                    title={`Switch to ${role.fullLabel}`}
                  >
                    {role.label}
                  </button>
                );
              })}
            </div>
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`rounded-full px-3 py-1.5 text-sm font-medium transition-all ${
                    isActive
                      ? 'bg-slate-900 text-white shadow-sm dark:bg-slate-100 dark:text-slate-900'
                      : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-slate-100'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <button
              type="button"
              onClick={onBackToDoors}
              className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-2.5 py-1.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-700 shadow-sm transition hover:-translate-y-0.5 dark:border-slate-700 dark:bg-[#11151A] dark:text-slate-100"
              aria-label="Return to career doors"
            >
              <DoorOpen className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">Doors</span>
            </button>

            <ThemeToggle theme={theme} onToggleTheme={onToggleTheme} />

            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden inline-flex h-9 w-9 items-center justify-center rounded-md border border-slate-200 bg-white text-slate-700 transition hover:bg-slate-50 dark:border-slate-700 dark:bg-[#11151A] dark:text-slate-200"
              aria-expanded={isOpen}
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
            >
              {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="border-t border-slate-200 bg-white/95 px-4 py-4 shadow-lg dark:border-slate-800 dark:bg-[#0b0d10]/95 lg:hidden">
          <div className="space-y-1.5">
            <div className="mb-3 flex w-fit items-center gap-1 rounded-full border border-slate-200 bg-slate-100/80 p-1 dark:border-slate-700 dark:bg-[#11151A]">
              {roleList.map((role) => {
                const isCurrentRole = role.id === currentRole;
                return (
                  <button
                    key={role.id}
                    type="button"
                    onClick={() => {
                      if (!isCurrentRole) onSwitchRole(role.id);
                      setIsOpen(false);
                    }}
                    aria-pressed={isCurrentRole}
                    className={`whitespace-nowrap rounded-full px-3 py-2 text-xs font-semibold transition-all ${
                      isCurrentRole
                        ? role.id === 'devops'
                          ? 'bg-emerald-600 text-white shadow-sm'
                          : 'bg-indigo-600 text-white shadow-sm'
                        : 'text-slate-600 hover:bg-white hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white'
                    }`}
                  >
                    {role.label}
                  </button>
                );
              })}
            </div>
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={handleLinkClick}
                  className={`block rounded-xl px-3 py-2 text-sm font-medium ${
                    isActive
                      ? 'bg-slate-100 text-slate-900 dark:bg-slate-800 dark:text-slate-100'
                      : 'text-slate-600 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
            <div className="pt-2">
              <button
                type="button"
                onClick={() => { onBackToDoors(); setIsOpen(false); }}
                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-left text-sm font-medium text-slate-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200"
              >
                Career Doors
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

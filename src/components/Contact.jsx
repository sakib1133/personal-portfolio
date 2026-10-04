import React, { useState } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, ArrowUpRight } from 'lucide-react';
import { LeetCodeIcon } from './Icons';
import { profileData } from '../data/profile';
import { roleConfigs } from '../data/roles';

export default function Contact({ currentRole = 'sde' }) {
  const roleConfig = roleConfigs[currentRole] || roleConfigs.sde;
  const [copyMessage, setCopyMessage] = useState('');

  const handleQuickAction = async (event, item) => {
    if (!item?.href) return;

    if (item.href.startsWith('mailto:') || item.href.startsWith('tel:')) {
      event.preventDefault();
      const value = item.name === 'Email' ? profileData.email : item.name === 'Phone' ? profileData.phone : item.value;

      try {
        window.location.href = item.href;
      } catch (error) {
        console.warn('Native mailto/tel open failed:', error);
      }

      try {
        if (navigator.clipboard && navigator.clipboard.writeText) {
          await navigator.clipboard.writeText(value);
          setCopyMessage(`${item.name} copied to clipboard.`);
          setTimeout(() => setCopyMessage(''), 2200);
        } else {
          setCopyMessage(`${item.name} ready to copy: ${value}`);
          setTimeout(() => setCopyMessage(''), 2200);
        }
      } catch (error) {
        console.warn('Clipboard copy failed:', error);
        setCopyMessage(`${item.name} is ready: ${value}`);
        setTimeout(() => setCopyMessage(''), 2200);
      }
    }
  };

  const accentTextClass =
    currentRole === 'sde'
      ? 'text-indigo-600 dark:text-indigo-400'
      : currentRole === 'fullstack'
      ? 'text-sky-600 dark:text-sky-400'
      : 'text-emerald-600 dark:text-emerald-400';

  const contactLinks = [
    { name: 'Email', value: profileData.email, href: `mailto:${profileData.email}`, icon: Mail, external: false },
    { name: 'Phone', value: profileData.phone, href: `tel:${profileData.phone.replace(/[^0-9+]/g, '')}`, icon: Phone, external: false },
    { name: 'Location', value: profileData.location, href: `https://maps.google.com/?q=${encodeURIComponent(profileData.location)}`, icon: MapPin, external: true },
    { name: 'LinkedIn', value: 'Connect on LinkedIn', href: profileData.links.linkedin, icon: Linkedin, external: true },
    { name: 'GitHub', value: 'Explore Repositories', href: profileData.links.github, icon: Github, external: true },
    { name: 'LeetCode', value: 'sakib_malik79', href: profileData.links.leetcode, icon: LeetCodeIcon, external: true }
  ];

  return (
    <section id="contact" className="border-t border-slate-200/80 py-20 dark:border-slate-800">
      <div className="premium-shell">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <span className={`section-kicker ${accentTextClass}`}>
            Get In Touch • {roleConfig.shortLabel}
          </span>
          <h2 className="section-title mt-3">Let’s build something useful.</h2>
          <p className="section-copy mt-3">
            {currentRole === 'sde' && "I'm open to conversations about software engineering, full-stack applications, backend systems, database modeling, and new technical opportunities."}
            {currentRole === 'fullstack' && "I'm open to conversations about full-stack web development, React applications, REST APIs, and developer opportunities."}
            {currentRole === 'devops' && "I'm open to conversations about DevOps engineering, CI/CD automation, Docker infrastructure, and deployment roles."}
          </p>
        </div>

        {copyMessage && <div className="mb-6 text-center text-sm font-medium text-emerald-600 dark:text-emerald-400">{copyMessage}</div>}

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {contactLinks.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.name}
                href={item.href}
                target={item.external ? '_blank' : '_self'}
                rel={item.external ? 'noreferrer' : undefined}
                onClick={(event) => handleQuickAction(event, item)}
                className="premium-card group flex flex-col justify-between rounded-2xl p-5 transition hover:-translate-y-0.5"
              >
                <div className="mb-4 flex items-center justify-between">
                  <div className={`flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-200 ${accentTextClass}`}>
                    <Icon className="h-4 w-4" />
                  </div>
                  <ArrowUpRight className="h-4 w-4 text-slate-400 transition group-hover:text-slate-900 dark:group-hover:text-white" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-100">{item.name}</h3>
                  <p className="mt-1 truncate text-xs text-slate-500 dark:text-slate-400" title={item.value}>{item.value}</p>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

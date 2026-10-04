import React from 'react';
import { profileData } from '../data/profile';

export default function Footer({ currentRole = 'sde' }) {
  const handleEmailClick = async (event) => {
    event.preventDefault();
    const email = profileData.links.email;

    try {
      window.location.href = `mailto:${email}`;
    } catch (error) {
      console.warn('Mailto open failed:', error);
    }

    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(email);
      }
      window.alert(`Email copied to clipboard: ${email}`);
    } catch (error) {
      console.warn('Clipboard copy failed:', error);
      window.alert(`Email ready to copy: ${email}`);
    }
  };

  return (
    <footer className="border-t border-slate-200/80 bg-white/80 py-8 dark:border-slate-800 dark:bg-[#0b0d10]/80">
      <div className="premium-shell flex flex-col items-center justify-between gap-4 text-xs text-slate-600 sm:flex-row dark:text-slate-400">
        <div className="flex items-center gap-2">
          <span className="text-base font-semibold tracking-[-0.05em] text-slate-900 dark:text-slate-100">Sakib.</span>
          <span className="text-slate-400 dark:text-slate-500">•</span>
          <span>{profileData.location}</span>
        </div>

        <div className="flex flex-wrap items-center gap-4">
          <a href={profileData.links.github} target="_blank" rel="noreferrer" className="transition hover:text-slate-900 dark:hover:text-white">GitHub</a>
          <a href={profileData.links.linkedin} target="_blank" rel="noreferrer" className="transition hover:text-slate-900 dark:hover:text-white">LinkedIn</a>
          <a href={profileData.links.leetcode} target="_blank" rel="noreferrer" className="transition hover:text-amber-500">LeetCode</a>
          <a href={`mailto:${profileData.links.email}`} onClick={handleEmailClick} className="transition hover:text-slate-900 dark:hover:text-white">Email</a>
        </div>

        <div className="text-slate-500 dark:text-slate-400">© 2026 Sakib. Built with React.</div>
      </div>
    </footer>
  );
}

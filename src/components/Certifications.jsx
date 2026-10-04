import React from 'react';
import { Award, ExternalLink, ShieldCheck } from 'lucide-react';
import { roleCertifications as importedRoleCertifications } from '../data/certifications';
import { roleConfigs } from '../data/roles';

// Verified fallback certifications in case data file is pending editor reload
const defaultDevOpsCerts = [
  {
    id: "datacom-cloud-job-simulation",
    title: "Datacom – Introduction to Cloud Job Simulation",
    issuer: "Forage",
    issuedDate: "July 2026",
    expiration: "No expiration",
    credentialId: "6a685012898071be9e1ef33f",
    skills: [
      "Cloud Computing",
      "Version Control (Git/GitHub)",
      "DevOps Fundamentals",
      "CI/CD Concepts"
    ],
    credentialUrl: "https://www.theforage.com/completion-certificates/gCW7Xki5Y3vNpBmnn/qsuRRyXDZ7Dj2QFx4_gCW7Xki5Y3vNpBmnn_6916d685f8a076de76ca00c5_1785221424113_completion_certificate.pdf"
  },
  {
    id: "cisco-introduction-to-cybersecurity",
    title: "Introduction to Cybersecurity",
    issuer: "Cisco Networking Academy",
    issuedDate: "September 2025",
    expiration: "No expiration",
    credentialId: "c7f22568-3064-4b28-94d8-5662358b621b",
    skills: [
      "Network Defense",
      "Cybersecurity Fundamentals",
      "Security Threat Analysis"
    ],
    credentialUrl: "https://drive.google.com/file/d/1uCrBL54VrTzKDqCNj97xgf-eGYPVHkmx/view"
  }
];

function InternalCertificationCard({ cert, currentRole = 'devops' }) {
  const isDevops = currentRole === 'devops';
  const isFullstack = currentRole === 'fullstack';

  const accentText = isDevops
    ? 'text-emerald-600 dark:text-emerald-400'
    : isFullstack
    ? 'text-sky-600 dark:text-sky-400'
    : 'text-indigo-600 dark:text-indigo-400';

  const accentSoft = isDevops
    ? 'bg-emerald-50 dark:bg-emerald-500/10'
    : isFullstack
    ? 'bg-sky-50 dark:bg-sky-500/10'
    : 'bg-indigo-50 dark:bg-indigo-500/10';

  const badgeClass = isDevops
    ? 'text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-500/10 border-emerald-200 dark:border-emerald-500/20'
    : isFullstack
    ? 'text-sky-700 dark:text-sky-400 bg-sky-50 dark:bg-sky-500/10 border-sky-200 dark:border-sky-500/20'
    : 'text-indigo-700 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-500/10 border-indigo-200 dark:border-indigo-500/20';

  const btnClass = isDevops
    ? 'bg-emerald-600 hover:bg-emerald-500 text-white shadow-emerald-600/20 active:translate-y-0.5'
    : isFullstack
    ? 'bg-sky-600 hover:bg-sky-500 text-white shadow-sky-600/20 active:translate-y-0.5'
    : 'bg-indigo-600 hover:bg-indigo-500 text-white shadow-indigo-600/20 active:translate-y-0.5';

  const titleHover = isDevops
    ? 'group-hover:text-emerald-600 dark:group-hover:text-emerald-400'
    : isFullstack
    ? 'group-hover:text-sky-600 dark:group-hover:text-sky-400'
    : 'group-hover:text-indigo-600 dark:group-hover:text-indigo-400';

  const IconComponent = cert.title?.toLowerCase().includes('security') ? ShieldCheck : Award;

  return (
    <article className="group rounded-xl bg-white dark:bg-[#0e131f] border border-slate-200 dark:border-[#1a2234] hover:border-slate-300 dark:hover:border-[#28354f] p-6 sm:p-7 flex flex-col justify-between shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:shadow-black/10">
      <div>
        {/* Top Header: Issuer badge & Issued Date */}
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-3 min-w-0">
            <div className={`flex items-center justify-center w-10 h-10 rounded-lg shrink-0 ${accentSoft} ${accentText}`}>
              <IconComponent className="w-5 h-5" />
            </div>
            <div className="min-w-0">
              <span className="text-xs font-semibold uppercase tracking-wider font-mono text-slate-500 dark:text-slate-400 block truncate">
                {cert.issuer}
              </span>
              <span className="text-[11px] font-mono text-slate-400 dark:text-slate-500 block">
                Verified Credential
              </span>
            </div>
          </div>
          <span className={`shrink-0 rounded-full px-2.5 py-1 text-xs font-mono font-semibold border ${badgeClass}`}>
            {cert.issuedDate}
          </span>
        </div>

        {/* Title */}
        <h3 className={`text-lg sm:text-xl font-bold tracking-tight text-slate-900 dark:text-white mt-4 leading-snug transition-colors ${titleHover}`}>
          {cert.title}
        </h3>

        {/* Credential ID & Expiration */}
        <div className="mt-3.5 p-3 rounded-lg bg-slate-50 dark:bg-[#141a29] border border-slate-200 dark:border-[#1f293d] flex flex-wrap items-center justify-between gap-2 text-xs">
          <div className="flex items-center gap-1.5 font-mono min-w-0">
            <span className="text-slate-400 dark:text-slate-500 font-semibold uppercase text-[11px] shrink-0">ID:</span>
            <span className="font-mono text-slate-700 dark:text-slate-300 font-medium truncate select-all" title={cert.credentialId}>
              {cert.credentialId}
            </span>
          </div>
          {cert.expiration && (
            <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400 shrink-0">
              {cert.expiration}
            </span>
          )}
        </div>

        {/* Skills */}
        {cert.skills && cert.skills.length > 0 && (
          <div className="mt-5">
            <span className="text-xs font-semibold uppercase tracking-wider font-mono text-slate-500 dark:text-slate-400 block mb-2.5">
              Skills
            </span>
            <div className="flex flex-wrap gap-1.5">
              {cert.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-2.5 py-1 text-xs font-mono font-medium rounded-md bg-slate-100 dark:bg-[#141a29] text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-[#1f293d]"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Card Footer: View Credential CTA */}
      <div className="mt-6 pt-5 border-t border-slate-200 dark:border-[#1a2234] flex items-center justify-between gap-3">
        <a
          href={cert.credentialUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`View Credential for ${cert.title}`}
          className={`inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-xs sm:text-sm font-semibold transition-all duration-200 shadow-sm w-full sm:w-auto ${btnClass}`}
        >
          <span>View Credential</span>
          <ExternalLink className="w-4 h-4 shrink-0" />
        </a>
      </div>
    </article>
  );
}

export default function Certifications({ currentRole = 'devops' }) {
  const roleConfig = roleConfigs[currentRole] || roleConfigs.devops;

  const getCertifications = () => {
    if (currentRole === 'sde' || currentRole === 'fullstack') {
      const sdeList = importedRoleCertifications?.sde || [];
      return sdeList.filter((c) => c.id !== 'cert-sde');
    }
    if (currentRole === 'devops') {
      const devopsList = importedRoleCertifications?.devops || [];
      const hasDetailedCerts = devopsList.some(
        (c) => c.credentialUrl || c.id?.includes('datacom') || c.id?.includes('cisco')
      );
      return hasDetailedCerts ? devopsList : defaultDevOpsCerts;
    }
    return [];
  };

  const certifications = getCertifications();

  if (!certifications || !certifications.length) return null;

  const accentTextClass =
    currentRole === 'sde'
      ? 'text-indigo-600 dark:text-indigo-400'
      : currentRole === 'fullstack'
      ? 'text-sky-600 dark:text-sky-400'
      : 'text-emerald-600 dark:text-emerald-400';

  return (
    <section id="certifications" className="border-t border-slate-200/80 py-20 dark:border-slate-800">
      <div className="premium-shell">
        <div className="mb-10">
          <span className={`section-kicker ${accentTextClass}`}>
            Credentials • {roleConfig.shortLabel} Focus
          </span>
          <h2 className="section-title mt-3">Certifications</h2>
          <p className="section-copy mt-3 max-w-2xl">
            {currentRole === 'devops'
              ? 'Industry simulations and specialized credentials in cloud infrastructure, CI/CD automation, and cybersecurity.'
              : 'Professional coursework and verified credentials validating software engineering and full stack web architecture.'}
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {certifications.map((cert) => (
            <InternalCertificationCard key={cert.id} cert={cert} currentRole={currentRole} />
          ))}
        </div>
      </div>
    </section>
  );
}

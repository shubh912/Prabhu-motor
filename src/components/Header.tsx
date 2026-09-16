import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { BadgeCheck, Menu, Phone, X } from 'lucide-react';
import { BUSINESS } from '../lib/business';

const NAV_LINKS = [
  { to: '/', label: 'Home', end: true },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Courses' },
  { to: '/services/hmv-training', label: 'HMV Training' },
  { to: '/services/lmv-training', label: 'LMV Training' },
  { to: '/services/e-rickshaw-training', label: 'E-Rickshaw' },
  { to: '/faq', label: 'FAQ' },
  { to: '/contact', label: 'Contact' },
];

function LogoMark() {
  return (
    <svg viewBox="0 0 48 48" className="h-11 w-11 shrink-0" role="img" aria-label="Prabhu Motor Training School logo">
      <circle cx="24" cy="24" r="21" fill="#7f1d1d" />
      <circle cx="24" cy="24" r="21" fill="none" stroke="#fbbf24" strokeWidth="2.5" />
      <circle cx="24" cy="24" r="14.5" fill="none" stroke="#fbbf24" strokeWidth="2.5" />
      <g stroke="#fbbf24" strokeWidth="3" strokeLinecap="round">
        <line x1="24" y1="24" x2="24" y2="10.5" />
        <line x1="24" y1="24" x2="12" y2="31" />
        <line x1="24" y1="24" x2="36" y2="31" />
      </g>
      <circle cx="24" cy="24" r="4.5" fill="#fbbf24" />
    </svg>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location.pathname, location.search]);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <header className="sticky top-0 z-50 shadow-md">
      <div className="bg-stone-950 text-white">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-3 px-4 py-1.5 text-[13px] sm:px-6 sm:text-sm lg:px-8">
          <p className="flex min-w-0 items-center gap-1.5 font-medium text-gold-300">
            <BadgeCheck className="h-4 w-4 shrink-0" aria-hidden="true" />
            <span className="truncate">Government Recognized <span className="hidden sm:inline">({BUSINESS.taglineHindi})</span></span>
          </p>
          <a href={BUSINESS.telLink} className="flex shrink-0 items-center gap-1.5 font-semibold text-white hover:text-gold-300">
            <Phone className="h-4 w-4" aria-hidden="true" />
            <span>Call: {BUSINESS.phone}</span>
          </a>
        </div>
      </div>
      <div className="border-b-4 border-gold-400 bg-white">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
          <Link to="/" className="flex min-w-0 items-center gap-3" aria-label="Prabhu Motor Training School - Home">
            <LogoMark />
            <span className="min-w-0">
              <span className="block truncate font-display text-base font-bold leading-tight text-brand-800 sm:text-lg">{BUSINESS.registeredName}</span>
              <span className="block text-xs font-medium text-stone-600 sm:text-[13px]">{BUSINESS.tagline} - Ayodhya, U.P.</span>
            </span>
          </Link>
          <nav className="hidden items-center gap-1 xl:flex" aria-label="Primary">
            {NAV_LINKS.map((link) => (
              <NavLink key={link.to} to={link.to} end={link.end} className={({ isActive }) => 'rounded-md px-2.5 py-2 text-[13.5px] font-semibold transition-colors ' + (isActive ? 'bg-brand-50 text-brand-800' : 'text-stone-700 hover:bg-stone-100 hover:text-brand-800')}>{link.label}</NavLink>
            ))}
            <a href={BUSINESS.telLink} className="ml-2 inline-flex min-h-[44px] items-center gap-2 rounded-lg bg-brand-700 px-4 py-2 text-sm font-bold text-white shadow-sm transition-colors hover:bg-brand-800">
              <Phone className="h-4 w-4" aria-hidden="true" /> Call Now
            </a>
          </nav>
          <div className="flex items-center gap-2 xl:hidden">
            <a href={BUSINESS.telLink} className="inline-flex min-h-[44px] items-center gap-1.5 rounded-lg bg-brand-700 px-3.5 py-2 text-sm font-bold text-white shadow-sm transition-colors hover:bg-brand-800" aria-label={'Call Prabhu Motor Training School now on ' + BUSINESS.phone}>
              <Phone className="h-4 w-4" aria-hidden="true" /> Call
            </a>
            <button type="button" onClick={() => setOpen((v) => !v)} aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? 'Close navigation menu' : 'Open navigation menu'} className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-lg border border-stone-300 text-stone-800 hover:bg-stone-100">
              {open ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
            </button>
          </div>
        </div>
        {open && (
          <nav id="mobile-menu" className="border-t border-stone-200 bg-white xl:hidden" aria-label="Mobile">
            <ul className="mx-auto w-full max-w-6xl space-y-1 px-4 py-4 sm:px-6">
              {NAV_LINKS.map((link) => (
                <li key={link.to}>
                  <NavLink to={link.to} end={link.end} className={({ isActive }) => 'block rounded-lg px-4 py-3 text-[15px] font-semibold ' + (isActive ? 'bg-brand-700 text-white' : 'text-stone-800 hover:bg-brand-50 hover:text-brand-800')}>{link.label}</NavLink>
                </li>
              ))}
              <li className="pt-2">
                <a href={BUSINESS.telLink} className="flex items-center justify-center gap-2 rounded-lg bg-gold-400 px-4 py-3.5 text-base font-bold text-stone-950 hover:bg-gold-300">
                  <Phone className="h-5 w-5" aria-hidden="true" /> Call Now: {BUSINESS.phone}
                </a>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
}

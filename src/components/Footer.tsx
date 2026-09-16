import { Link } from 'react-router-dom';
import { BadgeCheck, MapPin, Navigation, Phone } from 'lucide-react';
import { BUSINESS } from '../lib/business';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-stone-950 text-stone-300">
      <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="font-display text-lg font-bold text-white">{BUSINESS.registeredName}</p>
            <p className="mt-1 flex items-center gap-1.5 text-sm font-semibold text-gold-300">
              <BadgeCheck className="h-4 w-4" aria-hidden="true" /> {BUSINESS.tagline} ({BUSINESS.taglineHindi})
            </p>
            <p className="mt-3 text-sm leading-relaxed">Motor driving training in Ayodhya for HMV, LMV and E-Rickshaw learners, with a focus on practical driving, road safety and traffic awareness.</p>
          </div>
          <nav aria-label="Footer quick links">
            <p className="font-display text-sm font-bold uppercase tracking-wider text-white">Quick Links</p>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li><Link className="hover:text-gold-300" to="/">Home</Link></li>
              <li><Link className="hover:text-gold-300" to="/about">About the School</Link></li>
              <li><Link className="hover:text-gold-300" to="/services">All Training Programs</Link></li>
              <li><Link className="hover:text-gold-300" to="/license-training">Training vs. Driving Licence Info</Link></li>
              <li><Link className="hover:text-gold-300" to="/location">Location and Directions</Link></li>
              <li><Link className="hover:text-gold-300" to="/faq">Frequently Asked Questions</Link></li>
              <li><Link className="hover:text-gold-300" to="/gallery">Gallery</Link></li>
              <li><Link className="hover:text-gold-300" to="/contact">Contact and Enquiry</Link></li>
            </ul>
          </nav>
          <nav aria-label="Footer course links">
            <p className="font-display text-sm font-bold uppercase tracking-wider text-white">Our Courses</p>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li><Link className="hover:text-gold-300" to="/services/hmv-training">HMV Training in Ayodhya</Link></li>
              <li><Link className="hover:text-gold-300" to="/services/lmv-training">LMV Training in Ayodhya</Link></li>
              <li><Link className="hover:text-gold-300" to="/services/e-rickshaw-training">E-Rickshaw Training in Ayodhya</Link></li>
              <li><Link className="hover:text-gold-300" to="/services">Compare All Programs</Link></li>
            </ul>
            <p className="mt-6 font-display text-sm font-bold uppercase tracking-wider text-white">Registration</p>
            <dl className="mt-3 space-y-1.5 text-[13px]">
              <div className="flex gap-2"><dt className="text-stone-400">Licence No.:</dt><dd className="font-semibold text-white">{BUSINESS.licenseNo}</dd></div>
              <div className="flex gap-2"><dt className="text-stone-400">Valid till:</dt><dd className="font-semibold text-white">{BUSINESS.licenseValid}</dd></div>
              <div className="flex gap-2"><dt className="text-stone-400">GSTIN:</dt><dd className="font-semibold text-white">{BUSINESS.gstin}</dd></div>
            </dl>
          </nav>
          <div>
            <p className="font-display text-sm font-bold uppercase tracking-wider text-white">Contact</p>
            <address className="mt-4 space-y-3 text-sm not-italic">
              <p className="flex gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold-300" aria-hidden="true" />
                <span>{BUSINESS.addressLines.map((line) => (<span key={line} className="block">{line}</span>))}</span>
              </p>
              <p>
                <a href={BUSINESS.telLink} className="flex items-center gap-2 font-bold text-white hover:text-gold-300">
                  <Phone className="h-4 w-4 text-gold-300" aria-hidden="true" /> {BUSINESS.phone}
                </a>
              </p>
              <p>
                <a href={BUSINESS.mapsUrl} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-[44px] items-center gap-2 rounded-lg border border-stone-700 px-4 py-2 font-semibold text-white hover:border-gold-400 hover:text-gold-300">
                  <Navigation className="h-4 w-4" aria-hidden="true" /> Get Directions
                </a>
              </p>
            </address>
          </div>
        </div>
      </div>
      <div className="border-t border-stone-800">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 px-4 py-5 text-[13px] text-stone-400 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
          <p>© {year} {BUSINESS.registeredName} All rights reserved.</p>
          <p>{BUSINESS.tagline} - Licence {BUSINESS.licenseNo} - GSTIN {BUSINESS.gstin}</p>
        </div>
      </div>
    </footer>
  );
}

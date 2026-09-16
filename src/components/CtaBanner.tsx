import { Link } from 'react-router-dom';
import { Navigation, Phone, Send } from 'lucide-react';
import { BUSINESS } from '../lib/business';

type CtaBannerProps = { title: string; subtitle: string; variant?: 'red' | 'dark' };

export default function CtaBanner({ title, subtitle, variant = 'red' }: CtaBannerProps) {
  const bg = variant === 'red' ? 'bg-gradient-to-br from-brand-800 via-brand-900 to-stone-950' : 'bg-gradient-to-br from-stone-900 via-stone-950 to-brand-950';
  return (
    <section aria-label="Contact call to action" className={bg + ' border-y-4 border-gold-400'}>
      <div className="mx-auto w-full max-w-6xl px-4 py-12 text-center sm:px-6 lg:px-8">
        <h2 className="mx-auto max-w-3xl font-display text-2xl font-bold text-white sm:text-3xl">{title}</h2>
        <p className="mx-auto mt-3 max-w-2xl text-base text-stone-200 sm:text-lg">{subtitle}</p>
        <div className="mt-7 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
          <a href={BUSINESS.telLink} className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-lg bg-gold-400 px-7 py-3 text-base font-bold text-stone-950 shadow transition-colors hover:bg-gold-300">
            <Phone className="h-5 w-5" aria-hidden="true" /> Call Now: {BUSINESS.phone}
          </a>
          <Link to="/contact" className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-lg bg-white px-7 py-3 text-base font-bold text-brand-800 shadow transition-colors hover:bg-brand-50">
            <Send className="h-5 w-5" aria-hidden="true" /> Send Enquiry
          </Link>
          <a href={BUSINESS.mapsUrl} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-lg border-2 border-white/70 px-7 py-3 text-base font-bold text-white transition-colors hover:border-gold-300 hover:text-gold-300">
            <Navigation className="h-5 w-5" aria-hidden="true" /> Get Directions
          </a>
        </div>
      </div>
    </section>
  );
}

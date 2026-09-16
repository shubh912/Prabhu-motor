import { MapPin, Navigation, Phone } from 'lucide-react';
import { BUSINESS } from '../lib/business';

type MapSectionProps = { showHeading?: boolean };

export default function MapSection({ showHeading = true }: MapSectionProps) {
  return (
    <div>
      {showHeading && (
        <div className="max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-wider text-brand-700">Visit Us</p>
          <h2 className="mt-2 font-display text-2xl font-bold text-stone-950 sm:text-3xl">Find Us at Udaya Chauraha, Ayodhya</h2>
          <p className="mt-3 text-base leading-relaxed text-stone-600">The school is located at Udaya Chauraha, Jalpa Colony, Amanigunj — easy to reach from Ayodhya city and the Faizabad area. Call before you visit, or tap below for step-by-step directions.</p>
        </div>
      )}
      <div className="mt-6 grid gap-6 lg:grid-cols-5">
        <div className="rounded-2xl border border-stone-200 bg-stone-950 p-6 text-white sm:p-7 lg:col-span-2">
          <p className="flex items-center gap-2 font-display text-lg font-bold text-gold-300">
            <MapPin className="h-5 w-5" aria-hidden="true" /> School Address
          </p>
          <address className="mt-3 text-[15px] not-italic leading-relaxed text-stone-200">
            <strong className="text-white">{BUSINESS.registeredName}</strong>
            {BUSINESS.addressLines.map((line) => (<span key={line} className="block">{line}</span>))}
          </address>
          <p className="mt-4 text-sm text-stone-400">Landmark: {BUSINESS.landmark}</p>
          <div className="mt-6 flex flex-col gap-3">
            <a href={BUSINESS.mapsUrl} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-lg bg-gold-400 px-5 py-3 text-base font-bold text-stone-950 transition-colors hover:bg-gold-300">
              <Navigation className="h-5 w-5" aria-hidden="true" /> Get Directions
            </a>
            <a href={BUSINESS.telLink} className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-lg border-2 border-white/60 px-5 py-3 text-base font-bold text-white transition-colors hover:border-gold-300 hover:text-gold-300">
              <Phone className="h-5 w-5" aria-hidden="true" /> Call Now: {BUSINESS.phone}
            </a>
          </div>
        </div>
        <div className="overflow-hidden rounded-2xl border border-stone-200 bg-stone-100 shadow-sm lg:col-span-3">
          <iframe title="Google Map showing the location of Prabhu Motor Training School at Udaya Chauraha, Ayodhya" src={BUSINESS.mapsEmbed} className="h-80 w-full border-0 lg:h-full lg:min-h-[380px]" loading="lazy" allowFullScreen referrerPolicy="no-referrer-when-downgrade" />
        </div>
      </div>
    </div>
  );
}

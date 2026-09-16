import { Navigation, Phone } from 'lucide-react';
import { BUSINESS } from '../lib/business';

export default function MobileCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 lg:hidden">
      <div className="grid grid-cols-2 border-t border-stone-800 shadow-[0_-4px_16px_rgba(0,0,0,0.25)]" style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}>
        <a href={BUSINESS.telLink} className="flex min-h-[60px] items-center justify-center gap-2 bg-brand-700 text-base font-bold text-white active:bg-brand-800" aria-label={'Call Now on ' + BUSINESS.phone}>
          <Phone className="h-5 w-5" aria-hidden="true" /> Call Now
        </a>
        <a href={BUSINESS.mapsUrl} target="_blank" rel="noopener noreferrer" className="flex min-h-[60px] items-center justify-center gap-2 bg-stone-950 text-base font-bold text-gold-300 active:bg-stone-900" aria-label="Get directions to Prabhu Motor Training School on Google Maps">
          <Navigation className="h-5 w-5" aria-hidden="true" /> Get Directions
        </a>
      </div>
    </div>
  );
}

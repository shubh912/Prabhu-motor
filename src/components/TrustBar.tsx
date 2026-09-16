import { BadgeCheck, CalendarCheck, IdCard, Receipt, ShieldCheck } from 'lucide-react';
import { BUSINESS } from '../lib/business';

const ITEMS = [
  { icon: BadgeCheck, label: 'Government Recognized', sub: BUSINESS.taglineHindi },
  { icon: ShieldCheck, label: 'Registered Driving School', sub: 'Ayodhya, Uttar Pradesh' },
  { icon: IdCard, label: 'Licence No. ' + BUSINESS.licenseNo, sub: 'Official licence number' },
  { icon: CalendarCheck, label: 'Valid till ' + BUSINESS.licenseValid, sub: 'Licence validity' },
  { icon: Receipt, label: 'GSTIN ' + BUSINESS.gstin, sub: 'GST registered' },
];

export default function TrustBar() {
  return (
    <section aria-label="School credentials" className="border-y-4 border-gold-400 bg-brand-800 text-white">
      <div className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        <dl className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5 lg:gap-4">
          {ITEMS.map((item) => (
            <div key={item.label} className="flex items-start gap-3">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gold-400 text-stone-950">
                <item.icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <div className="min-w-0">
                <dt className="text-[15px] font-bold leading-snug">{item.label}</dt>
                <dd className="text-sm text-brand-100">{item.sub}</dd>
              </div>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

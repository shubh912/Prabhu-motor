import { Link, useSearchParams } from 'react-router-dom';
import { CalendarCheck, ChevronRight, IdCard, MapPin, Navigation, Phone, Receipt } from 'lucide-react';
import Seo from '../components/Seo';
import ContactForm from '../components/ContactForm';
import { BUSINESS } from '../lib/business';
import { breadcrumbSchema, localBusinessSchema } from '../lib/seo';

const COURSE_PARAM_MAP: Record<string, string> = { hmv: 'HMV Training', lmv: 'LMV Training', 'e-rickshaw': 'E-Rickshaw Training', erickshaw: 'E-Rickshaw Training', general: 'General Enquiry' };

export default function ContactPage() {
  const [searchParams] = useSearchParams();
  const requested = (searchParams.get('course') || '').toLowerCase();
  const defaultCourse = COURSE_PARAM_MAP[requested] || '';
  return (
    <>
      <Seo title="Contact Us | Prabhu Motor Training School, Ayodhya - 8005022800" description="Contact Prabhu Motor Training School (Regd.), Ayodhya - phone 8005022800, address Udaya Chauraha, Amanigunj. Send an enquiry for HMV, LMV or E-Rickshaw training." path="/contact" schemas={[localBusinessSchema(), breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Contact', path: '/contact' }])]} />
      <section className="page-hero" aria-label="Page introduction">
        <div className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
          <nav aria-label="Breadcrumb"><ol className="flex flex-wrap items-center gap-1.5 text-sm font-medium text-stone-300"><li><Link to="/" className="hover:text-gold-300">Home</Link></li><li aria-hidden="true"><ChevronRight className="h-4 w-4" /></li><li aria-current="page" className="text-gold-300">Contact</li></ol></nav>
          <h1 className="mt-3 max-w-3xl font-display text-3xl font-extrabold text-white sm:text-4xl">Contact Prabhu Motor Training School</h1>
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-stone-200 sm:text-lg">Call the school, visit us at Udaya Chauraha, or send an enquiry below - for HMV, LMV, E-Rickshaw training or any general question.</p>
        </div>
      </section>
      <section className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8" aria-label="Contact details and enquiry form">
        <div className="grid items-start gap-8 lg:grid-cols-5">
          <div className="space-y-5 lg:col-span-2">
            <article className="rounded-2xl bg-stone-950 p-6 text-white sm:p-7" aria-label="Phone contact">
              <h2 className="flex items-center gap-2 font-display text-lg font-bold text-gold-300"><Phone className="h-5 w-5" aria-hidden="true" /> Call the School</h2>
              <p className="mt-2 text-[15px] text-stone-300">The fastest way to reach us - call for admissions, course guidance or directions.</p>
              <a href={BUSINESS.telLink} className="mt-4 flex min-h-[56px] items-center justify-center gap-2 rounded-lg bg-gold-400 px-5 py-3 font-display text-xl font-extrabold text-stone-950 hover:bg-gold-300" aria-label={'Call ' + BUSINESS.phone + ' now'}><Phone className="h-5 w-5" aria-hidden="true" /> {BUSINESS.phone}</a>
            </article>
            <article className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm" aria-label="School address">
              <h2 className="flex items-center gap-2 font-display text-lg font-bold text-stone-950"><MapPin className="h-5 w-5 text-brand-700" aria-hidden="true" /> School Address</h2>
              <address className="mt-2 text-[15px] not-italic leading-relaxed text-stone-700"><strong className="text-stone-900">{BUSINESS.registeredName}</strong><br />{BUSINESS.fullAddress}</address>
              <div className="mt-4 flex flex-col gap-3">
                <a href={BUSINESS.mapsUrl} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-lg bg-brand-700 px-5 py-2.5 font-bold text-white hover:bg-brand-800"><Navigation className="h-4 w-4" aria-hidden="true" /> Get Directions</a>
                <Link to="/location" className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-lg border-2 border-brand-700 px-5 py-2.5 font-bold text-brand-800 hover:bg-brand-700 hover:text-white">Full Location Page</Link>
              </div>
            </article>
            <article className="rounded-2xl border border-stone-200 bg-brand-50 p-6" aria-label="Registration details">
              <h2 className="font-display text-lg font-bold text-stone-950">Registration Details</h2>
              <dl className="mt-3 space-y-2.5 text-[15px] text-stone-700">
                <div className="flex items-start gap-2.5"><IdCard className="mt-0.5 h-5 w-5 shrink-0 text-brand-700" aria-hidden="true" /><div><dt className="sr-only">Licence number</dt><dd><strong className="text-stone-900">Licence No.:</strong> {BUSINESS.licenseNo}</dd></div></div>
                <div className="flex items-start gap-2.5"><CalendarCheck className="mt-0.5 h-5 w-5 shrink-0 text-brand-700" aria-hidden="true" /><div><dt className="sr-only">Licence validity</dt><dd><strong className="text-stone-900">Licence Valid Till:</strong> {BUSINESS.licenseValid}</dd></div></div>
                <div className="flex items-start gap-2.5"><Receipt className="mt-0.5 h-5 w-5 shrink-0 text-brand-700" aria-hidden="true" /><div><dt className="sr-only">GSTIN</dt><dd><strong className="text-stone-900">GSTIN:</strong> {BUSINESS.gstin}</dd></div></div>
              </dl>
            </article>
          </div>
          <div className="lg:col-span-3">
            <ContactForm defaultCourse={defaultCourse} heading="Send an Enquiry" subheading="Choose your course, share your phone number, and the school will contact you back. All fields marked * are required." />
            <div className="mt-6 overflow-hidden rounded-2xl border border-stone-200">
              <iframe title="Google Map showing the location of Prabhu Motor Training School at Udaya Chauraha, Ayodhya" src={BUSINESS.mapsEmbed} className="h-64 w-full border-0" loading="lazy" allowFullScreen referrerPolicy="no-referrer-when-downgrade" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

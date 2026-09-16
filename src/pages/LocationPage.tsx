import { Link } from 'react-router-dom';
import { ChevronRight, Landmark, MapPin, Navigation, Phone, Send } from 'lucide-react';
import Seo from '../components/Seo';
import CtaBanner from '../components/CtaBanner';
import SectionHeading from '../components/SectionHeading';
import { BUSINESS } from '../lib/business';
import { breadcrumbSchema, localBusinessSchema } from '../lib/seo';

export default function LocationPage() {
  return (
    <>
      <Seo title="Our Location in Ayodhya | Udaya Chauraha, Amanigunj - Directions" description="Find Prabhu Motor Training School (Regd.) at Udaya Chauraha, Jalpa Colony, Amanigunj, Ayodhya 224001. Get Google Maps directions or call 8005022800." path="/location" schemas={[localBusinessSchema(), breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Location', path: '/location' }])]} />
      <section className="page-hero" aria-label="Page introduction">
        <div className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
          <nav aria-label="Breadcrumb"><ol className="flex flex-wrap items-center gap-1.5 text-sm font-medium text-stone-300"><li><Link to="/" className="hover:text-gold-300">Home</Link></li><li aria-hidden="true"><ChevronRight className="h-4 w-4" /></li><li aria-current="page" className="text-gold-300">Location</li></ol></nav>
          <h1 className="mt-3 max-w-3xl font-display text-3xl font-extrabold text-white sm:text-4xl">Our Location in Ayodhya</h1>
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-stone-200 sm:text-lg">Visit {BUSINESS.registeredName} at Udaya Chauraha, Jalpa Colony, Amanigunj - easy to find and easy to reach.</p>
        </div>
      </section>
      <section className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8" aria-label="Address and map">
        <div className="grid items-start gap-8 lg:grid-cols-5">
          <div className="space-y-5 lg:col-span-2">
            <article className="rounded-2xl bg-stone-950 p-6 text-white sm:p-7" aria-label="Full address">
              <h2 className="flex items-center gap-2 font-display text-xl font-bold text-gold-300"><MapPin className="h-5 w-5" aria-hidden="true" /> Full Address</h2>
              <address className="mt-3 text-base not-italic leading-relaxed text-stone-200"><strong className="text-lg text-white">{BUSINESS.registeredName}</strong><br />{BUSINESS.addressLines.map((line) => (<span key={line} className="block">{line}</span>))}</address>
              <p className="mt-4 flex items-start gap-2 text-[15px] text-stone-300"><Landmark className="mt-0.5 h-5 w-5 shrink-0 text-gold-300" aria-hidden="true" /><span>Landmark: {BUSINESS.landmark} - ask anyone nearby for Udaya Chauraha.</span></p>
            </article>
            <div className="grid gap-3" aria-label="Location actions">
              <a href={BUSINESS.mapsUrl} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-[56px] items-center justify-center gap-2 rounded-lg bg-brand-700 px-6 py-3 text-lg font-bold text-white shadow hover:bg-brand-800"><Navigation className="h-5 w-5" aria-hidden="true" /> Get Directions</a>
              <a href={BUSINESS.telLink} className="inline-flex min-h-[56px] items-center justify-center gap-2 rounded-lg bg-gold-400 px-6 py-3 text-lg font-bold text-stone-950 shadow hover:bg-gold-300"><Phone className="h-5 w-5" aria-hidden="true" /> Call Now: {BUSINESS.phone}</a>
              <Link to="/contact" className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-lg border-2 border-brand-700 px-6 py-3 text-base font-bold text-brand-800 hover:bg-brand-700 hover:text-white"><Send className="h-5 w-5" aria-hidden="true" /> Send Enquiry Instead</Link>
            </div>
          </div>
          <div className="lg:col-span-3">
            <div className="overflow-hidden rounded-2xl border border-stone-200 shadow-sm">
              <iframe title="Google Map showing the location of Prabhu Motor Training School at Udaya Chauraha, Ayodhya" src={BUSINESS.mapsEmbed} className="h-[420px] w-full border-0 lg:h-[520px]" loading="lazy" allowFullScreen referrerPolicy="no-referrer-when-downgrade" />
            </div>
            <p className="mt-3 text-sm text-stone-500">Map preview for orientation. For turn-by-turn navigation, use the Get Directions button above, which opens the school's exact Google Maps listing.</p>
          </div>
        </div>
      </section>
      <section className="bg-stone-50 py-12 sm:py-16" aria-label="Planning your visit">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Planning Your Visit" title="Reaching the School Is Simple" />
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            <article className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gold-400 font-display text-lg font-extrabold text-stone-950" aria-hidden="true">1</span>
              <h3 className="mt-3 font-display text-lg font-bold text-stone-950">Tap Get Directions</h3>
              <p className="mt-1.5 text-[15px] leading-relaxed text-stone-600">The Get Directions button opens the school's Google Maps listing on your phone with the exact location pinned - just follow the navigation.</p>
            </article>
            <article className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gold-400 font-display text-lg font-extrabold text-stone-950" aria-hidden="true">2</span>
              <h3 className="mt-3 font-display text-lg font-bold text-stone-950">Look for Udaya Chauraha</h3>
              <p className="mt-1.5 text-[15px] leading-relaxed text-stone-600">The school sits at Udaya Chauraha in the Amanigunj / Jalpa Colony area - a known local junction, so auto and e-rickshaw drivers will know it.</p>
            </article>
            <article className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gold-400 font-display text-lg font-extrabold text-stone-950" aria-hidden="true">3</span>
              <h3 className="mt-3 font-display text-lg font-bold text-stone-950">Call If You Need Help</h3>
              <p className="mt-1.5 text-[15px] leading-relaxed text-stone-600">Unsure about the route or the right time to visit? Call <a href={BUSINESS.telLink} className="font-bold text-brand-800 underline underline-offset-2">{BUSINESS.phone}</a> and the school will guide you.</p>
            </article>
          </div>
        </div>
      </section>
      <CtaBanner title="Come, Visit the School and See for Yourself." subtitle="Meet the school at Udaya Chauraha, discuss HMV, LMV or E-Rickshaw training, and get all your questions answered." variant="dark" />
    </>
  );
}

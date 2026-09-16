import { Link } from 'react-router-dom';
import { BookOpen, Camera, CarFront, ChevronRight, Gauge, Landmark, Navigation, Phone, Truck, Zap } from 'lucide-react';
import Seo from '../components/Seo';
import CtaBanner from '../components/CtaBanner';
import { BUSINESS } from '../lib/business';
import { breadcrumbSchema, localBusinessSchema } from '../lib/seo';

const PLACEHOLDERS = [
  { icon: CarFront, title: 'Training Vehicles', text: "Photos of the school's training vehicles will appear here." },
  { icon: Gauge, title: 'Practical Training Sessions', text: 'Photos from on-road practice and manoeuvring sessions will appear here.' },
  { icon: Landmark, title: 'School Premises', text: 'Photos of the school premises at Udaya Chauraha will appear here.' },
  { icon: Truck, title: 'HMV Training', text: 'Photos related to heavy motor vehicle training will appear here.' },
  { icon: Zap, title: 'E-Rickshaw Training', text: 'Photos related to e-rickshaw training will appear here.' },
  { icon: BookOpen, title: 'Guidance and Instruction', text: 'Photos of classroom guidance and learner briefings will appear here.' },
];

export default function GalleryPage() {
  return (
    <>
      <Seo title="Gallery | Prabhu Motor Training School, Ayodhya" description="Photo gallery of Prabhu Motor Training School (Regd.), Ayodhya. Real photographs of the school, training vehicles and sessions will be published here." path="/gallery" schemas={[localBusinessSchema(), breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Gallery', path: '/gallery' }])]} />
      <section className="page-hero" aria-label="Page introduction">
        <div className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
          <nav aria-label="Breadcrumb"><ol className="flex flex-wrap items-center gap-1.5 text-sm font-medium text-stone-300"><li><Link to="/" className="hover:text-gold-300">Home</Link></li><li aria-hidden="true"><ChevronRight className="h-4 w-4" /></li><li aria-current="page" className="text-gold-300">Gallery</li></ol></nav>
          <h1 className="mt-3 max-w-3xl font-display text-3xl font-extrabold text-white sm:text-4xl">Photo Gallery</h1>
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-stone-200 sm:text-lg">A look at the school, its training vehicles and its sessions - real photographs will be published here.</p>
        </div>
      </section>
      <section className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8" aria-label="Gallery">
        <div className="flex flex-col gap-4 rounded-2xl border-2 border-dashed border-brand-300 bg-brand-50 p-6 sm:flex-row sm:items-start" role="note" aria-label="About these gallery images">
          <Camera className="h-8 w-8 shrink-0 text-brand-700" aria-hidden="true" />
          <div>
            <h2 className="font-display text-lg font-bold text-stone-950">Real Photos Coming Soon</h2>
            <p className="mt-1.5 text-[15px] leading-relaxed text-stone-700">This gallery currently shows placeholders. The school believes in showing only genuine photographs, so no stock or substitute images are used here. Real photos of the premises, training vehicles and sessions will be added. Meanwhile, the best way to see the school is to <Link to="/location" className="font-bold text-brand-800 underline underline-offset-2">visit us at Udaya Chauraha</Link> - or <a href={BUSINESS.telLink} className="font-bold text-brand-800 underline underline-offset-2">call {BUSINESS.phone}</a> with any questions.</p>
          </div>
        </div>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {PLACEHOLDERS.map((item) => (
            <figure key={item.title} className="flex min-h-[240px] flex-col items-center justify-center rounded-2xl border-2 border-dashed border-stone-300 bg-stone-50 p-8 text-center">
              <span className="flex h-16 w-16 items-center justify-center rounded-full bg-stone-200 text-stone-500"><item.icon className="h-8 w-8" aria-hidden="true" /></span>
              <figcaption className="mt-4">
                <span className="block font-display text-lg font-bold text-stone-800">{item.title}</span>
                <span className="mt-1 block text-sm leading-relaxed text-stone-500">{item.text}</span>
                <span className="mt-3 inline-block rounded-full bg-stone-200 px-3 py-1 text-xs font-bold uppercase tracking-wider text-stone-600">Photo coming soon</span>
              </figcaption>
            </figure>
          ))}
        </div>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <a href={BUSINESS.telLink} className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-lg bg-brand-700 px-7 py-3 text-base font-bold text-white hover:bg-brand-800"><Phone className="h-5 w-5" aria-hidden="true" /> Call Now: {BUSINESS.phone}</a>
          <a href={BUSINESS.mapsUrl} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-lg border-2 border-brand-700 px-7 py-3 text-base font-bold text-brand-800 hover:bg-brand-700 hover:text-white"><Navigation className="h-5 w-5" aria-hidden="true" /> Visit the School</a>
        </div>
      </section>
      <CtaBanner title="See the School in Person - It Beats Any Photo." subtitle="Drop by Udaya Chauraha, Amanigunj, meet the school and discuss the right training program for you." variant="dark" />
    </>
  );
}

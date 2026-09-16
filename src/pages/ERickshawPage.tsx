import { Link } from 'react-router-dom';
import { CarFront, ChevronRight, CircleCheck, ClipboardList, Navigation, Phone, ShieldCheck, TrafficCone, TriangleAlert, Truck, Users, Zap } from 'lucide-react';
import Seo from '../components/Seo';
import CtaBanner from '../components/CtaBanner';
import ContactForm from '../components/ContactForm';
import SectionHeading from '../components/SectionHeading';
import { BUSINESS } from '../lib/business';
import { breadcrumbSchema, localBusinessSchema } from '../lib/seo';

const COVERAGE = [
  { icon: Zap, title: 'Controls and Safe Operation', text: 'Throttle, brakes, steering, indicators, lights and battery awareness - everything needed to operate an e-rickshaw smoothly and safely.' },
  { icon: Users, title: 'Passenger Safety and Comfort', text: 'Safe boarding, balanced seating, smooth acceleration and braking, and the courteous habits passengers remember and trust.' },
  { icon: TrafficCone, title: 'Manoeuvring and Parking', text: 'Turns, U-turns, reversing and parking in tight bazaar lanes and crowded crossings - the daily reality of e-rickshaw routes.' },
  { icon: ShieldCheck, title: 'Traffic Rules and Road Awareness', text: 'Signals, signs, lane sense, night-driving care and sharing the road responsibly with cars, two-wheelers and pedestrians.' },
];

const PROCESS = [
  { title: 'Enquire', text: 'Call 8005022800 or send an enquiry selecting E-Rickshaw Training.' },
  { title: 'Learn the Controls', text: 'Understand the vehicle - controls, balance, braking and safety checks.' },
  { title: 'Practise Manoeuvres', text: 'Turns, reversing, parking and stop-start driving under guidance.' },
  { title: 'Drive Responsibly', text: 'Build traffic sense, passenger care and disciplined road habits.' },
];

export default function ERickshawPage() {
  return (
    <>
      <Seo title="E-Rickshaw Training in Ayodhya | E-Rickshaw Driving Classes Faizabad" description="E-Rickshaw training in Ayodhya at Prabhu Motor Training School (Regd.) - safe operation, passenger safety, manoeuvring, parking and traffic rules. Call 8005022800." path="/services/e-rickshaw-training" schemas={[localBusinessSchema(), breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Courses', path: '/services' }, { name: 'E-Rickshaw Training', path: '/services/e-rickshaw-training' }])]} />
      <section className="page-hero" aria-label="Page introduction">
        <div className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
          <nav aria-label="Breadcrumb"><ol className="flex flex-wrap items-center gap-1.5 text-sm font-medium text-stone-300"><li><Link to="/" className="hover:text-gold-300">Home</Link></li><li aria-hidden="true"><ChevronRight className="h-4 w-4" /></li><li><Link to="/services" className="hover:text-gold-300">Courses</Link></li><li aria-hidden="true"><ChevronRight className="h-4 w-4" /></li><li aria-current="page" className="text-gold-300">E-Rickshaw Training</li></ol></nav>
          <h1 className="mt-3 max-w-3xl font-display text-3xl font-extrabold text-white sm:text-4xl">E-Rickshaw Training in Ayodhya</h1>
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-stone-200 sm:text-lg">E-Rickshaw driving classes at a Government Recognized e-rickshaw driving school in Uttar Pradesh - vehicle controls, safe operation, passenger safety and responsible driving.</p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a href={BUSINESS.telLink} className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-lg bg-gold-400 px-7 py-3 text-base font-bold text-stone-950 hover:bg-gold-300"><Phone className="h-5 w-5" aria-hidden="true" /> Call Now</a>
            <a href="#erickshaw-enquiry" className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-lg bg-white px-7 py-3 text-base font-bold text-brand-800 hover:bg-brand-50"><ClipboardList className="h-5 w-5" aria-hidden="true" /> Enquire for E-Rickshaw</a>
            <a href={BUSINESS.mapsUrl} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-lg border-2 border-white/70 px-7 py-3 text-base font-bold text-white hover:border-gold-300 hover:text-gold-300"><Navigation className="h-5 w-5" aria-hidden="true" /> Get Directions</a>
          </div>
        </div>
      </section>
      <section className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8" aria-label="About E-Rickshaw training">
        <div className="grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <SectionHeading eyebrow="Battery-Rickshaw Driving Classes" title="Learn to Drive an E-Rickshaw Safely" />
            <div className="mt-4 space-y-4 text-base leading-relaxed text-stone-700 sm:text-[17px]">
              <p>E-rickshaws are everywhere in Ayodhya - ferrying passengers through bazaars, lanes and busy crossings. They may look simple, but safe e-rickshaw driving needs proper training: balance, braking judgement, passenger care and sharp traffic awareness. E-Rickshaw training in Faizabad and Ayodhya at <strong className="text-stone-900">{BUSINESS.registeredName}</strong> teaches exactly that.</p>
              <p>This program is for anyone who wants to operate an e-rickshaw confidently - whether for personal use or passenger service. Training focuses on practical skill: handling the vehicle, manoeuvring in tight spaces, parking correctly, following signals and keeping passengers safe and comfortable on every trip.</p>
              <h2 className="pt-2 font-display text-2xl font-bold text-stone-950">What You Will Practise</h2>
              <ul className="space-y-2.5">
                {['E-rickshaw controls - throttle, brakes, steering, indicators and lights', 'Smooth starting, stopping and speed control with and without passengers', 'Turns, U-turns, reversing and parking in crowded, narrow spaces', 'Passenger safety - boarding, seating balance and comfortable driving', 'Traffic rules, road signs, signals and night-driving precautions', 'Courteous, responsible behaviour toward passengers and other road users'].map((item) => (<li key={item} className="flex items-start gap-2.5"><CircleCheck className="mt-1 h-5 w-5 shrink-0 text-brand-700" aria-hidden="true" /><span>{item}</span></li>))}
              </ul>
              <p>To join E-Rickshaw driving classes in Ayodhya, <a href={BUSINESS.telLink} className="font-semibold text-brand-800 underline underline-offset-2">call {BUSINESS.phone}</a> or <a href="#erickshaw-enquiry" className="font-semibold text-brand-800 underline underline-offset-2">send an E-Rickshaw enquiry below</a>. Also see our <Link to="/services/lmv-training" className="font-semibold text-brand-800 underline underline-offset-2">LMV training</Link> and <Link to="/services/hmv-training" className="font-semibold text-brand-800 underline underline-offset-2">HMV training</Link> programs.</p>
            </div>
          </div>
          <aside className="h-fit rounded-2xl border border-stone-200 bg-brand-50 p-6" aria-label="E-Rickshaw training highlights">
            <h2 className="flex items-center gap-2 font-display text-lg font-bold text-stone-950"><Zap className="h-5 w-5 text-brand-700" aria-hidden="true" /> Training Highlights</h2>
            <ul className="mt-4 space-y-3 text-[15px] text-stone-700">
              <li className="flex gap-2.5"><CircleCheck className="mt-0.5 h-5 w-5 shrink-0 text-brand-700" aria-hidden="true" /><span>Controls and safe operation</span></li>
              <li className="flex gap-2.5"><CircleCheck className="mt-0.5 h-5 w-5 shrink-0 text-brand-700" aria-hidden="true" /><span>Passenger safety first</span></li>
              <li className="flex gap-2.5"><CircleCheck className="mt-0.5 h-5 w-5 shrink-0 text-brand-700" aria-hidden="true" /><span>Manoeuvring and parking</span></li>
              <li className="flex gap-2.5"><CircleCheck className="mt-0.5 h-5 w-5 shrink-0 text-brand-700" aria-hidden="true" /><span>Traffic rules and awareness</span></li>
            </ul>
            <a href={BUSINESS.telLink} className="mt-5 inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-lg bg-brand-700 px-5 py-2.5 font-bold text-white hover:bg-brand-800"><Phone className="h-4 w-4" aria-hidden="true" /> Call {BUSINESS.phone}</a>
          </aside>
        </div>
      </section>
      <section className="bg-stone-50 py-12 sm:py-16" aria-label="What E-Rickshaw training covers">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeading align="center" eyebrow="Course Coverage" title="What E-Rickshaw Training Covers" />
          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {COVERAGE.map((item) => (
              <article key={item.title} className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-700 text-gold-300"><item.icon className="h-6 w-6" aria-hidden="true" /></span>
                <h3 className="mt-4 font-display text-lg font-bold text-stone-950">{item.title}</h3>
                <p className="mt-1.5 text-[15px] leading-relaxed text-stone-600">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8" aria-label="E-Rickshaw training process">
        <SectionHeading eyebrow="Step by Step" title="How the Training Progresses" />
        <ol className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {PROCESS.map((step, index) => (
            <li key={step.title} className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gold-400 font-display text-lg font-extrabold text-stone-950" aria-hidden="true">{index + 1}</span>
              <h3 className="mt-3 font-display text-lg font-bold text-stone-950">{step.title}</h3>
              <p className="mt-1.5 text-[15px] leading-relaxed text-stone-600">{step.text}</p>
            </li>
          ))}
        </ol>
        <div className="mt-8 flex flex-col gap-3 rounded-2xl border border-amber-300 bg-amber-50 p-6 sm:flex-row sm:items-start" role="note" aria-label="Honest note">
          <TriangleAlert className="h-7 w-7 shrink-0 text-amber-700" aria-hidden="true" />
          <div className="text-[15px] leading-relaxed text-stone-800">
            <h2 className="font-display text-lg font-bold text-stone-950">An Honest Note</h2>
            <p className="mt-1.5">This program teaches e-rickshaw driving skills. It does not promise any licence, permit, employment or income - those depend on government procedures and your own efforts, which change over time. If you need a driving licence, please <Link to="/license-training" className="font-bold text-brand-800 underline underline-offset-2">read how training and licensing differ</Link> and verify current requirements with the relevant government authority.</p>
          </div>
        </div>
      </section>
      <section id="erickshaw-enquiry" className="scroll-mt-32 bg-stone-50 py-12 sm:py-16" aria-label="Enquire for E-Rickshaw training">
        <div className="mx-auto w-full max-w-3xl px-4 sm:px-6 lg:px-8">
          <ContactForm defaultCourse="E-Rickshaw Training" heading="Enquire for E-Rickshaw Training" subheading="Select E-Rickshaw Training, submit the form, and the school will contact you back on your phone number." />
        </div>
      </section>
      <section className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 lg:px-8" aria-label="Related courses">
        <h2 className="font-display text-xl font-bold text-stone-950">Explore Other Training Programs</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <Link to="/services/hmv-training" className="flex items-center gap-4 rounded-2xl border border-stone-200 bg-white p-5 shadow-sm hover:shadow-md"><Truck className="h-8 w-8 shrink-0 text-brand-700" aria-hidden="true" /><span><span className="block font-display font-bold text-stone-950">HMV Training in Ayodhya</span><span className="block text-sm text-stone-600">Heavy vehicle handling, safety and practical driving.</span></span></Link>
          <Link to="/services/lmv-training" className="flex items-center gap-4 rounded-2xl border border-stone-200 bg-white p-5 shadow-sm hover:shadow-md"><CarFront className="h-8 w-8 shrink-0 text-brand-700" aria-hidden="true" /><span><span className="block font-display font-bold text-stone-950">LMV Training in Ayodhya</span><span className="block text-sm text-stone-600">Car driving training - controls, parking and road confidence.</span></span></Link>
        </div>
      </section>
      <CtaBanner title="Want to Join E-Rickshaw Driving Classes?" subtitle="Call 8005022800 or send an E-Rickshaw enquiry - training happens in Ayodhya at Udaya Chauraha, Amanigunj." />
    </>
  );
}

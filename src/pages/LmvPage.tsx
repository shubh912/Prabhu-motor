import { Link } from 'react-router-dom';
import { BookOpen, CarFront, ChevronRight, CircleCheck, ClipboardList, Gauge, Navigation, Phone, ShieldCheck, TrafficCone, Truck, Zap } from 'lucide-react';
import Seo from '../components/Seo';
import CtaBanner from '../components/CtaBanner';
import ContactForm from '../components/ContactForm';
import SectionHeading from '../components/SectionHeading';
import { BUSINESS } from '../lib/business';
import { breadcrumbSchema, localBusinessSchema } from '../lib/seo';

const COVERAGE = [
  { icon: CarFront, title: 'Controls, Starting and Stopping', text: 'Clutch, brake, accelerator, steering, mirrors, seat position - the foundations of car driving, taught patiently from the very first session.' },
  { icon: Gauge, title: 'Steering, Gears and Speed Control', text: "Smooth steering technique, correct gear use where applicable, clutch control and judging safe speed for Ayodhya's mixed traffic." },
  { icon: TrafficCone, title: 'Parking and Manoeuvring', text: 'Reversing, parallel and bay parking, tight turns and U-turns - the practical skills learners use every single day.' },
  { icon: BookOpen, title: 'Traffic Rules and Road Safety', text: 'Road signs, signals, right of way, lane discipline and defensive habits that keep you and others safe.' },
];

const PROCESS = [
  { title: 'First Controls', text: 'Get comfortable with the car - seating, mirrors, pedals, starting and stopping safely.' },
  { title: 'Guided Practice', text: 'Steering, gears, turns and traffic rules with step-by-step guidance.' },
  { title: 'Parking Skills', text: 'Reversing, parking and manoeuvring in realistic situations.' },
  { title: 'Road Confidence', text: 'Real-road practice in Ayodhya traffic until driving feels natural and safe.' },
];

export default function LmvPage() {
  return (
    <>
      <Seo title="LMV Training in Ayodhya | Car Driving School Ayodhya and Faizabad" description="LMV training in Ayodhya at Prabhu Motor Training School (Regd.) - car driving training with controls, steering, parking, traffic rules and road confidence. Call 8005022800." path="/services/lmv-training" schemas={[localBusinessSchema(), breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Courses', path: '/services' }, { name: 'LMV Training', path: '/services/lmv-training' }])]} />
      <section className="page-hero" aria-label="Page introduction">
        <div className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
          <nav aria-label="Breadcrumb"><ol className="flex flex-wrap items-center gap-1.5 text-sm font-medium text-stone-300"><li><Link to="/" className="hover:text-gold-300">Home</Link></li><li aria-hidden="true"><ChevronRight className="h-4 w-4" /></li><li><Link to="/services" className="hover:text-gold-300">Courses</Link></li><li aria-hidden="true"><ChevronRight className="h-4 w-4" /></li><li aria-current="page" className="text-gold-300">LMV Training</li></ol></nav>
          <h1 className="mt-3 max-w-3xl font-display text-3xl font-extrabold text-white sm:text-4xl">LMV Training in Ayodhya</h1>
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-stone-200 sm:text-lg">Car driving training at a Government Recognized LMV driving school in Ayodhya - vehicle controls, steering, parking, traffic rules and real-road confidence.</p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a href={BUSINESS.telLink} className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-lg bg-gold-400 px-7 py-3 text-base font-bold text-stone-950 hover:bg-gold-300"><Phone className="h-5 w-5" aria-hidden="true" /> Call Now: {BUSINESS.phone}</a>
            <a href="#lmv-enquiry" className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-lg bg-white px-7 py-3 text-base font-bold text-brand-800 hover:bg-brand-50"><ClipboardList className="h-5 w-5" aria-hidden="true" /> Enquire for LMV</a>
            <a href={BUSINESS.mapsUrl} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-lg border-2 border-white/70 px-7 py-3 text-base font-bold text-white hover:border-gold-300 hover:text-gold-300"><Navigation className="h-5 w-5" aria-hidden="true" /> Get Directions</a>
          </div>
        </div>
      </section>
      <section className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8" aria-label="About LMV training">
        <div className="grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <SectionHeading eyebrow="Light Motor Vehicle Training" title="Car Driving Training, Done Properly" />
            <div className="mt-4 space-y-4 text-base leading-relaxed text-stone-700 sm:text-[17px]">
              <p>LMV training at <strong className="text-stone-900">{BUSINESS.registeredName}</strong> is car driving training for real Indian roads. Whether you have never sat in the driver's seat or you already drive but want to fix bad habits, Light Motor Vehicle training in Faizabad and Ayodhya here follows a clear path: master the controls, learn the rules, practise manoeuvres, then build road confidence.</p>
              <p>Training happens in and around Ayodhya, so learners practise in the same conditions they will face daily - crossings, bazaars, narrow lanes, two-wheelers and e-rickshaws sharing the road. That local practice is what turns nervous beginners into calm, dependable drivers.</p>
              <h2 className="pt-2 font-display text-2xl font-bold text-stone-950">Skills Every LMV Learner Practises</h2>
              <ul className="space-y-2.5">
                {['Basic vehicle controls - seating, mirrors, pedals, indicators and dashboard', 'Smooth starting and stopping, including on slopes and in traffic', 'Steering control, correct gear use and clutch control where applicable', 'Reversing, bay parking, parallel parking and tight-space manoeuvring', 'Road signs, traffic signals, right of way and lane discipline', 'Defensive driving habits for mixed city and highway conditions'].map((item) => (<li key={item} className="flex items-start gap-2.5"><CircleCheck className="mt-1 h-5 w-5 shrink-0 text-brand-700" aria-hidden="true" /><span>{item}</span></li>))}
              </ul>
              <p>New to driving? No problem - most LMV learners start as complete beginners. Call <a href={BUSINESS.telLink} className="font-semibold text-brand-800 underline underline-offset-2">{BUSINESS.phone}</a> or <a href="#lmv-enquiry" className="font-semibold text-brand-800 underline underline-offset-2">send an LMV enquiry below</a> and the school will guide your next step.</p>
            </div>
          </div>
          <aside className="h-fit rounded-2xl border border-stone-200 bg-brand-50 p-6" aria-label="LMV training highlights">
            <h2 className="flex items-center gap-2 font-display text-lg font-bold text-stone-950"><ShieldCheck className="h-5 w-5 text-brand-700" aria-hidden="true" /> Why Train LMV Here</h2>
            <ul className="mt-4 space-y-3 text-[15px] text-stone-700">
              <li className="flex gap-2.5"><CarFront className="mt-0.5 h-5 w-5 shrink-0 text-brand-700" aria-hidden="true" /><span>Beginner-friendly, step-by-step method</span></li>
              <li className="flex gap-2.5"><TrafficCone className="mt-0.5 h-5 w-5 shrink-0 text-brand-700" aria-hidden="true" /><span>Parking and manoeuvring practice</span></li>
              <li className="flex gap-2.5"><BookOpen className="mt-0.5 h-5 w-5 shrink-0 text-brand-700" aria-hidden="true" /><span>Traffic rules and road signs</span></li>
              <li className="flex gap-2.5"><Gauge className="mt-0.5 h-5 w-5 shrink-0 text-brand-700" aria-hidden="true" /><span>Real-road confidence building</span></li>
            </ul>
            <a href={BUSINESS.telLink} className="mt-5 inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-lg bg-brand-700 px-5 py-2.5 font-bold text-white hover:bg-brand-800"><Phone className="h-4 w-4" aria-hidden="true" /> Call Now</a>
            <a href="#lmv-enquiry" className="mt-3 inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-lg border-2 border-brand-700 px-5 py-2.5 font-bold text-brand-800 hover:bg-brand-700 hover:text-white"><ClipboardList className="h-4 w-4" aria-hidden="true" /> Send Enquiry</a>
          </aside>
        </div>
      </section>
      <section className="bg-stone-50 py-12 sm:py-16" aria-label="What LMV training covers">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeading align="center" eyebrow="Course Coverage" title="What LMV Training Covers" />
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
      <section className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8" aria-label="LMV learning stages">
        <SectionHeading eyebrow="Your Learning Journey" title="From First Lesson to Road Confidence" description="Most learners move through these four stages at their own pace." />
        <ol className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {PROCESS.map((step, index) => (
            <li key={step.title} className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gold-400 font-display text-lg font-extrabold text-stone-950" aria-hidden="true">{index + 1}</span>
              <h3 className="mt-3 font-display text-lg font-bold text-stone-950">{step.title}</h3>
              <p className="mt-1.5 text-[15px] leading-relaxed text-stone-600">{step.text}</p>
            </li>
          ))}
        </ol>
        <p className="mt-6 rounded-2xl bg-brand-50 p-5 text-[15px] leading-relaxed text-stone-700"><strong className="text-stone-900">About licences:</strong> LMV training builds your driving ability. The driving licence is issued separately by the relevant government authority after its own procedure - the school does not issue licences. Please <Link to="/license-training" className="font-bold text-brand-800 underline underline-offset-2">read how training and licensing differ</Link> and verify current requirements with the authority.</p>
      </section>
      <section id="lmv-enquiry" className="scroll-mt-32 bg-stone-50 py-12 sm:py-16" aria-label="Enquire for LMV training">
        <div className="mx-auto w-full max-w-3xl px-4 sm:px-6 lg:px-8">
          <ContactForm defaultCourse="LMV Training" heading="Enquire for LMV Training" subheading="Select LMV Training, submit the form, and the school will contact you back on your phone number." />
        </div>
      </section>
      <section className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 lg:px-8" aria-label="Related courses">
        <h2 className="font-display text-xl font-bold text-stone-950">Explore Other Training Programs</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <Link to="/services/hmv-training" className="flex items-center gap-4 rounded-2xl border border-stone-200 bg-white p-5 shadow-sm hover:shadow-md"><Truck className="h-8 w-8 shrink-0 text-brand-700" aria-hidden="true" /><span><span className="block font-display font-bold text-stone-950">HMV Training in Ayodhya</span><span className="block text-sm text-stone-600">Heavy vehicle handling, safety and practical driving.</span></span></Link>
          <Link to="/services/e-rickshaw-training" className="flex items-center gap-4 rounded-2xl border border-stone-200 bg-white p-5 shadow-sm hover:shadow-md"><Zap className="h-8 w-8 shrink-0 text-brand-700" aria-hidden="true" /><span><span className="block font-display font-bold text-stone-950">E-Rickshaw Training in Ayodhya</span><span className="block text-sm text-stone-600">Safe operation, passenger safety and traffic discipline.</span></span></Link>
        </div>
      </section>
      <CtaBanner title="Ready to Learn Car Driving in Ayodhya?" subtitle={'Call Now on ' + BUSINESS.phone + ' or send an LMV enquiry - the school will take it from there.'} />
    </>
  );
}

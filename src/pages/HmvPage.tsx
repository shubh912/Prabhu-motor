import { Link } from 'react-router-dom';
import { BookOpen, CarFront, ChevronRight, CircleCheck, ClipboardList, Gauge, Navigation, Phone, ShieldCheck, TrafficCone, TriangleAlert, Truck, Wrench, Zap } from 'lucide-react';
import Seo from '../components/Seo';
import CtaBanner from '../components/CtaBanner';
import ContactForm from '../components/ContactForm';
import SectionHeading from '../components/SectionHeading';
import { BUSINESS } from '../lib/business';
import { breadcrumbSchema, localBusinessSchema } from '../lib/seo';

const COVERAGE = [
  { icon: Truck, title: 'Heavy Vehicle Handling', text: 'Understanding the size, weight and movement of heavy motor vehicles - smooth starting, stopping, steering control and safe speed judgement.' },
  { icon: TrafficCone, title: 'Road Safety and Traffic Awareness', text: 'Signals, road signs, lane discipline, safe following distance, mirror discipline and awareness of smaller vehicles and pedestrians.' },
  { icon: Gauge, title: 'Practical Driving Sessions', text: 'Supervised on-road practice that builds real-world judgement - turns, gradients, traffic situations and patient, defensive driving.' },
  { icon: Wrench, title: 'Basic Vehicle Knowledge', text: 'Everyday essentials every HMV learner should know - basic checks, dashboard indicators, tyres, lights and keeping the vehicle road-ready.' },
];

const WHO_NEEDS = ['Learners who want to drive heavy motor vehicles skillfully and responsibly', 'Drivers moving up from smaller vehicles to heavier categories', 'Anyone who wants structured, supervised HMV practice in the Ayodhya-Faizabad area', 'Learners who want to build correct habits before facing real-road HMV situations'];

const PROCESS = [
  { title: 'Enquire', text: 'Call 8005022800 or send an enquiry selecting HMV Training.' },
  { title: 'Understand the Basics', text: 'Learn vehicle controls, safety checks and traffic rules that HMV driving demands.' },
  { title: 'Supervised Practice', text: 'Practise handling, manoeuvring and road driving under guidance.' },
  { title: 'Build Road Sense', text: 'Develop the patience, anticipation and discipline heavy vehicles require.' },
];

export default function HmvPage() {
  return (
    <>
      <Seo title="HMV Training in Ayodhya | Heavy Motor Vehicle Driving School" description="HMV training in Ayodhya at Prabhu Motor Training School (Regd.) - heavy vehicle handling, road safety, traffic awareness and practical driving. Call 8005022800." path="/services/hmv-training" schemas={[localBusinessSchema(), breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Courses', path: '/services' }, { name: 'HMV Training', path: '/services/hmv-training' }])]} />
      <section className="page-hero" aria-label="Page introduction">
        <div className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
          <nav aria-label="Breadcrumb"><ol className="flex flex-wrap items-center gap-1.5 text-sm font-medium text-stone-300"><li><Link to="/" className="hover:text-gold-300">Home</Link></li><li aria-hidden="true"><ChevronRight className="h-4 w-4" /></li><li><Link to="/services" className="hover:text-gold-300">Courses</Link></li><li aria-hidden="true"><ChevronRight className="h-4 w-4" /></li><li aria-current="page" className="text-gold-300">HMV Training</li></ol></nav>
          <h1 className="mt-3 max-w-3xl font-display text-3xl font-extrabold text-white sm:text-4xl">HMV Training in Ayodhya</h1>
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-stone-200 sm:text-lg">Heavy Motor Vehicle training at a Government Recognized HMV driving school in Ayodhya - handling, road safety, traffic awareness and supervised practical driving.</p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a href={BUSINESS.telLink} className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-lg bg-gold-400 px-7 py-3 text-base font-bold text-stone-950 hover:bg-gold-300"><Phone className="h-5 w-5" aria-hidden="true" /> Call Now</a>
            <a href="#hmv-enquiry" className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-lg bg-white px-7 py-3 text-base font-bold text-brand-800 hover:bg-brand-50"><ClipboardList className="h-5 w-5" aria-hidden="true" /> Enquire for HMV</a>
            <a href={BUSINESS.mapsUrl} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-lg border-2 border-white/70 px-7 py-3 text-base font-bold text-white hover:border-gold-300 hover:text-gold-300"><Navigation className="h-5 w-5" aria-hidden="true" /> Get Directions</a>
          </div>
        </div>
      </section>
      <section className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8" aria-label="About HMV training">
        <div className="grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <SectionHeading eyebrow="Heavy Motor Vehicle Training" title="What Is HMV Training?" />
            <div className="mt-4 space-y-4 text-base leading-relaxed text-stone-700 sm:text-[17px]">
              <p>HMV training teaches learners how to handle Heavy Motor Vehicles - larger, heavier vehicles that need more space, longer stopping distance and far greater anticipation than cars. At <strong className="text-stone-900">{BUSINESS.registeredName}</strong>, HMV driving training in Ayodhya focuses on correct handling technique, deep road-safety habits and calm, patient driving.</p>
              <p>The program suits learners in Ayodhya and Faizabad who want structured HMV licence training in Uttar Pradesh's real road conditions - busy crossings like those near Udaya Chauraha, mixed traffic with two-wheelers, e-rickshaws and pedestrians, and narrow stretches where judgement matters most.</p>
              <h2 className="pt-2 font-display text-2xl font-bold text-stone-950">Who May Need HMV Training</h2>
              <ul className="space-y-2.5">{WHO_NEEDS.map((item) => (<li key={item} className="flex items-start gap-2.5"><CircleCheck className="mt-1 h-5 w-5 shrink-0 text-brand-700" aria-hidden="true" /><span>{item}</span></li>))}</ul>
              <p>If you are unsure whether HMV training is right for you, <a href={BUSINESS.telLink} className="font-semibold text-brand-800 underline underline-offset-2">call {BUSINESS.phone}</a> and describe your goal - the school will guide you honestly, including pointing you to <Link to="/services/lmv-training" className="font-semibold text-brand-800 underline underline-offset-2">LMV training</Link> or <Link to="/services/e-rickshaw-training" className="font-semibold text-brand-800 underline underline-offset-2">E-Rickshaw training</Link> if one of those fits better.</p>
            </div>
          </div>
          <aside className="h-fit rounded-2xl border border-stone-200 bg-brand-50 p-6" aria-label="HMV training highlights">
            <h2 className="flex items-center gap-2 font-display text-lg font-bold text-stone-950"><ShieldCheck className="h-5 w-5 text-brand-700" aria-hidden="true" /> Training Highlights</h2>
            <ul className="mt-4 space-y-3 text-[15px] text-stone-700">
              <li className="flex gap-2.5"><Truck className="mt-0.5 h-5 w-5 shrink-0 text-brand-700" aria-hidden="true" /><span>Heavy vehicle handling and control</span></li>
              <li className="flex gap-2.5"><TrafficCone className="mt-0.5 h-5 w-5 shrink-0 text-brand-700" aria-hidden="true" /><span>Road safety and traffic awareness</span></li>
              <li className="flex gap-2.5"><Gauge className="mt-0.5 h-5 w-5 shrink-0 text-brand-700" aria-hidden="true" /><span>Supervised practical driving</span></li>
              <li className="flex gap-2.5"><Wrench className="mt-0.5 h-5 w-5 shrink-0 text-brand-700" aria-hidden="true" /><span>Basic vehicle knowledge</span></li>
              <li className="flex gap-2.5"><BookOpen className="mt-0.5 h-5 w-5 shrink-0 text-brand-700" aria-hidden="true" /><span>Traffic rules and road signs</span></li>
            </ul>
            <a href={BUSINESS.telLink} className="mt-5 inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-lg bg-brand-700 px-5 py-2.5 font-bold text-white hover:bg-brand-800"><Phone className="h-4 w-4" aria-hidden="true" /> Call {BUSINESS.phone}</a>
          </aside>
        </div>
      </section>
      <section className="bg-stone-50 py-12 sm:py-16" aria-label="What HMV training covers">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeading align="center" eyebrow="Course Coverage" title="What HMV Training Covers" description="Four pillars of heavy-vehicle driving, taught through explanation plus supervised practice." />
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
      <section className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8" aria-label="HMV training process">
        <SectionHeading eyebrow="Step by Step" title="The HMV Training Process" description="From your first enquiry to steady road practice - a clear, unhurried path." />
        <ol className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {PROCESS.map((step, index) => (
            <li key={step.title} className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gold-400 font-display text-lg font-extrabold text-stone-950" aria-hidden="true">{index + 1}</span>
              <h3 className="mt-3 font-display text-lg font-bold text-stone-950">{step.title}</h3>
              <p className="mt-1.5 text-[15px] leading-relaxed text-stone-600">{step.text}</p>
            </li>
          ))}
        </ol>
        <div className="mt-8 flex flex-col gap-3 rounded-2xl border border-amber-300 bg-amber-50 p-6 sm:flex-row sm:items-start" role="note" aria-label="Important note about licensing">
          <TriangleAlert className="h-7 w-7 shrink-0 text-amber-700" aria-hidden="true" />
          <div className="text-[15px] leading-relaxed text-stone-800">
            <h2 className="font-display text-lg font-bold text-stone-950">Please Note: Training Is Not a Licence Guarantee</h2>
            <p className="mt-1.5">HMV training prepares you with real driving skill. The driving licence itself is issued only by the relevant government authority after its own procedure and tests. The school does not issue licences and makes no claim of guaranteed licence approval. Licensing requirements can change, so please verify the current requirements with the relevant government authority. Read our <Link to="/license-training" className="font-bold text-brand-800 underline underline-offset-2">training vs. licence guide</Link> for details.</p>
          </div>
        </div>
      </section>
      <section id="hmv-enquiry" className="scroll-mt-32 bg-stone-50 py-12 sm:py-16" aria-label="Enquire for HMV training">
        <div className="mx-auto w-full max-w-3xl px-4 sm:px-6 lg:px-8">
          <ContactForm defaultCourse="HMV Training" heading="Enquire for HMV Training" subheading="Select HMV Training, submit the form, and the school will contact you back on your phone number." />
        </div>
      </section>
      <section className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 lg:px-8" aria-label="Related courses">
        <h2 className="font-display text-xl font-bold text-stone-950">Explore Other Training Programs</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <Link to="/services/lmv-training" className="flex items-center gap-4 rounded-2xl border border-stone-200 bg-white p-5 shadow-sm hover:shadow-md"><CarFront className="h-8 w-8 shrink-0 text-brand-700" aria-hidden="true" /><span><span className="block font-display font-bold text-stone-950">LMV Training in Ayodhya</span><span className="block text-sm text-stone-600">Car driving training - controls, parking and road confidence.</span></span></Link>
          <Link to="/services/e-rickshaw-training" className="flex items-center gap-4 rounded-2xl border border-stone-200 bg-white p-5 shadow-sm hover:shadow-md"><Zap className="h-8 w-8 shrink-0 text-brand-700" aria-hidden="true" /><span><span className="block font-display font-bold text-stone-950">E-Rickshaw Training in Ayodhya</span><span className="block text-sm text-stone-600">Safe operation, passenger safety and traffic discipline.</span></span></Link>
        </div>
      </section>
      <CtaBanner title="Interested in HMV Training? Call or Enquire Today." subtitle="Speak to the school on 8005022800 or send an HMV enquiry - training happens in Ayodhya at Udaya Chauraha, Amanigunj." />
    </>
  );
}

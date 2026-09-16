import { Link } from 'react-router-dom';
import { ArrowRight, BadgeCheck, CarFront, ChevronRight, ClipboardList, Gauge, MapPin, Navigation, Phone, Receipt, Route, Send, ShieldCheck, TrafficCone, Truck, Zap } from 'lucide-react';
import Seo from '../components/Seo';
import TrustBar from '../components/TrustBar';
import CourseCard from '../components/CourseCard';
import CtaBanner from '../components/CtaBanner';
import MapSection from '../components/MapSection';
import SectionHeading from '../components/SectionHeading';
import { BUSINESS } from '../lib/business';
import { breadcrumbSchema, localBusinessSchema } from '../lib/seo';

const WHY_POINTS = [
  { icon: BadgeCheck, title: 'Government Recognized School', text: 'The school operates with government recognition, so learners train with a formally acknowledged institution in Ayodhya.' },
  { icon: ShieldCheck, title: 'Registered and Verifiable', text: 'Licence No. UPZ072026DSL00008 (valid till 20/08/2031) and GSTIN 09AVRPJ3630K2Z4 are openly displayed for complete transparency.' },
  { icon: Gauge, title: 'Practical, Hands-On Training', text: 'Training focuses on real driving practice - vehicle control, manoeuvring, parking and building confidence on actual roads.' },
  { icon: TrafficCone, title: 'Road Safety First', text: 'Every program covers traffic rules, road signs, safe habits and awareness of other road users, including pedestrians.' },
  { icon: MapPin, title: 'Easy to Reach in Ayodhya', text: 'Located at Udaya Chauraha, Jalpa Colony, Amanigunj - convenient for learners from Ayodhya city and nearby Faizabad areas.' },
  { icon: ClipboardList, title: 'Clear Guidance on Process', text: 'The school clearly explains the difference between driving training and the government licence procedure, so you always know the next step.' },
];

const STEPS = [
  { icon: Phone, title: 'Call or Visit', text: 'Call 8005022800 or visit the school at Udaya Chauraha to discuss your requirement.' },
  { icon: ClipboardList, title: 'Choose Your Program', text: 'Pick HMV, LMV or E-Rickshaw training based on the vehicle you want to learn.' },
  { icon: CarFront, title: 'Practical Sessions', text: 'Learn vehicle controls, traffic rules and safe driving through guided practice.' },
  { icon: Route, title: 'Build Road Confidence', text: 'Practise manoeuvring, parking and real-road driving until you feel confident and responsible.' },
];

const FAQ_TEASER = [
  { q: 'Which training programs does the school offer?', a: 'HMV training, LMV training and E-Rickshaw training at Udaya Chauraha, Ayodhya.' },
  { q: 'Where exactly is the school located?', a: 'Udaya Chauraha, Jalpa Colony, Amanigunj, Ayodhya, Faizabad (U.P.) 224001.' },
  { q: 'How can I contact the school?', a: 'Call 8005022800 or send an enquiry through the contact page.' },
  { q: 'Does the school issue driving licences?', a: 'No. The school provides driving training; licences are issued only by the government authority.' },
];

export default function HomePage() {
  return (
    <>
      <Seo title="Best Driving School in Ayodhya | Prabhu Motor Training School (Regd.)" description="Prabhu Motor Training School (Regd.) is a Government Recognized driving school in Ayodhya offering HMV, LMV and E-Rickshaw training. Call 8005022800 or visit Udaya Chauraha, Amanigunj." path="/" schemas={[localBusinessSchema(), breadcrumbSchema([{ name: 'Home', path: '/' }])]} />
      <section className="hero-bg relative overflow-hidden" aria-label="Introduction">
        <div className="mx-auto grid w-full max-w-6xl items-center gap-10 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-2 lg:px-8 lg:py-20">
          <div>
            <p className="animate-fade-up inline-flex flex-wrap items-center gap-2 rounded-full border border-gold-400/60 bg-white/10 px-4 py-1.5 text-[13px] font-bold text-gold-300 sm:text-sm">
              <BadgeCheck className="h-4 w-4" aria-hidden="true" /> {BUSINESS.registeredName} - {BUSINESS.tagline} ({BUSINESS.taglineHindi})
            </p>
            <h1 className="animate-fade-up anim-delay-1 mt-4 font-display text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-[2.75rem]">Professional Motor Driving Training in Ayodhya</h1>
            <p className="animate-fade-up anim-delay-2 mt-4 max-w-xl text-base leading-relaxed text-stone-200 sm:text-lg">Learn to drive with structured <strong className="text-white">HMV, LMV and E-Rickshaw training</strong> - practical sessions, traffic rules and road safety guidance from a registered driving school at Udaya Chauraha, Amanigunj.</p>
            <div className="animate-fade-up anim-delay-3 mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a href={BUSINESS.telLink} className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-lg bg-gold-400 px-7 py-3 text-base font-bold text-stone-950 shadow-lg transition-colors hover:bg-gold-300"><Phone className="h-5 w-5" aria-hidden="true" /> Call Now</a>
              <a href={BUSINESS.mapsUrl} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-lg border-2 border-white/70 px-7 py-3 text-base font-bold text-white transition-colors hover:border-gold-300 hover:text-gold-300"><Navigation className="h-5 w-5" aria-hidden="true" /> Get Directions</a>
              <Link to="/contact" className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-lg bg-white px-7 py-3 text-base font-bold text-brand-800 shadow transition-colors hover:bg-brand-50"><Send className="h-5 w-5" aria-hidden="true" /> Send Enquiry</Link>
            </div>
            <ul className="mt-7 flex flex-wrap gap-2.5 text-sm font-semibold" aria-label="Training categories">
              <li className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-4 py-2 text-white ring-1 ring-white/25"><Truck className="h-4 w-4 text-gold-300" aria-hidden="true" /> HMV Training</li>
              <li className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-4 py-2 text-white ring-1 ring-white/25"><CarFront className="h-4 w-4 text-gold-300" aria-hidden="true" /> LMV Training</li>
              <li className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-4 py-2 text-white ring-1 ring-white/25"><Zap className="h-4 w-4 text-gold-300" aria-hidden="true" /> E-Rickshaw Training</li>
            </ul>
          </div>
          <aside className="animate-fade-up anim-delay-2 rounded-2xl border border-white/20 bg-white p-6 shadow-2xl sm:p-7" aria-label="School registration details">
            <p className="flex items-center gap-2 font-display text-lg font-bold text-brand-800"><ShieldCheck className="h-5 w-5" aria-hidden="true" /> Registered Driving School</p>
            <dl className="mt-4 space-y-3 text-[15px]">
              <div className="flex items-start justify-between gap-3 border-b border-stone-100 pb-3"><dt className="text-stone-500">Recognition</dt><dd className="text-right font-bold text-stone-900">Government Recognized</dd></div>
              <div className="flex items-start justify-between gap-3 border-b border-stone-100 pb-3"><dt className="text-stone-500">Licence No.</dt><dd className="text-right font-bold text-stone-900">{BUSINESS.licenseNo}</dd></div>
              <div className="flex items-start justify-between gap-3 border-b border-stone-100 pb-3"><dt className="text-stone-500">Licence Valid Till</dt><dd className="text-right font-bold text-stone-900">{BUSINESS.licenseValid}</dd></div>
              <div className="flex items-start justify-between gap-3 border-b border-stone-100 pb-3"><dt className="text-stone-500">GSTIN</dt><dd className="text-right font-bold text-stone-900">{BUSINESS.gstin}</dd></div>
              <div className="flex items-start justify-between gap-3"><dt className="text-stone-500">Phone</dt><dd className="text-right font-bold text-brand-800"><a href={BUSINESS.telLink} className="underline underline-offset-2">{BUSINESS.phone}</a></dd></div>
            </dl>
            <Link to="/about" className="mt-5 inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-lg bg-brand-700 px-5 py-2.5 font-bold text-white transition-colors hover:bg-brand-800">About the School <ArrowRight className="h-4 w-4" aria-hidden="true" /></Link>
          </aside>
        </div>
        <div className="road-divider" aria-hidden="true" />
      </section>
      <TrustBar />
      <section className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8" aria-label="About our driving school">
        <div className="grid items-start gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <SectionHeading eyebrow="Driving School in Ayodhya" title="Motor Training School in Ayodhya and Faizabad" />
            <div className="mt-4 space-y-4 text-base leading-relaxed text-stone-700 sm:text-[17px]">
              <p><strong className="text-stone-900">{BUSINESS.registeredName}</strong> is a Government Recognized motor training school located at Udaya Chauraha, Jalpa Colony, Amanigunj, Ayodhya. Learners searching for driving classes near them in Ayodhya or a motor training school in Faizabad can join practical, road-safety-focused training here.</p>
              <p>The school offers three training programs - <Link to="/services/hmv-training" className="font-semibold text-brand-800 underline underline-offset-2">HMV training</Link>, <Link to="/services/lmv-training" className="font-semibold text-brand-800 underline underline-offset-2">LMV training</Link> and <Link to="/services/e-rickshaw-training" className="font-semibold text-brand-800 underline underline-offset-2">E-Rickshaw training</Link> - each built around real driving practice, traffic rules and responsible road behaviour.</p>
              <p>Whether you are a first-time learner or want to improve your road confidence, the school's approach stays simple: understand the vehicle, respect traffic rules, practise patiently and drive responsibly. Read more <Link to="/about" className="font-semibold text-brand-800 underline underline-offset-2">about the school and its training approach</Link>, or <Link to="/license-training" className="font-semibold text-brand-800 underline underline-offset-2">understand how driving training differs from the government licence process</Link>.</p>
            </div>
          </div>
          <aside className="rounded-2xl border border-stone-200 bg-brand-50 p-6" aria-label="Quick facts">
            <h2 className="font-display text-lg font-bold text-stone-950">At a Glance</h2>
            <ul className="mt-4 space-y-3 text-[15px] text-stone-700">
              <li className="flex gap-2.5"><MapPin className="mt-0.5 h-5 w-5 shrink-0 text-brand-700" aria-hidden="true" /><span>Udaya Chauraha, Jalpa Colony, Amanigunj, Ayodhya 224001</span></li>
              <li className="flex gap-2.5"><Phone className="mt-0.5 h-5 w-5 shrink-0 text-brand-700" aria-hidden="true" /><a href={BUSINESS.telLink} className="font-bold text-brand-800">{BUSINESS.phone}</a></li>
              <li className="flex gap-2.5"><Receipt className="mt-0.5 h-5 w-5 shrink-0 text-brand-700" aria-hidden="true" /><span>GSTIN {BUSINESS.gstin}</span></li>
              <li className="flex gap-2.5"><BadgeCheck className="mt-0.5 h-5 w-5 shrink-0 text-brand-700" aria-hidden="true" /><span>Licence {BUSINESS.licenseNo}, valid till {BUSINESS.licenseValid}</span></li>
            </ul>
            <Link to="/location" className="mt-5 inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-lg border-2 border-brand-700 px-5 py-2.5 font-bold text-brand-800 transition-colors hover:bg-brand-700 hover:text-white"><Navigation className="h-4 w-4" aria-hidden="true" /> Location and Directions</Link>
          </aside>
        </div>
      </section>
      <section className="bg-stone-50 py-12 sm:py-16" aria-label="Training programs">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeading align="center" eyebrow="Courses" title="Driving Training Programs in Ayodhya" description="Three focused programs for three kinds of learners. Open any course to see exactly what the training covers." />
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <CourseCard icon={Truck} title="HMV Training" description="Heavy Motor Vehicle training in Ayodhya - vehicle handling, road safety, traffic awareness and practical driving." points={['Heavy vehicle handling basics', 'Road safety and traffic awareness', 'Practical driving practice', 'Basic vehicle knowledge']} href="/services/hmv-training" linkLabel="View HMV training in Ayodhya course details" />
            <CourseCard icon={CarFront} title="LMV Training" description="Car / Light Motor Vehicle driving training in Ayodhya - controls, steering, parking and road confidence." points={['Controls, steering and gears', 'Parking and manoeuvring', 'Traffic rules and road safety', 'Real-road driving practice']} href="/services/lmv-training" linkLabel="View LMV training in Ayodhya course details" />
            <CourseCard icon={Zap} title="E-Rickshaw Training" description="E-Rickshaw driving classes in Ayodhya - safe operation, passenger safety and responsible driving habits." points={['Vehicle controls and operation', 'Passenger safety focus', 'Manoeuvring and parking', 'Traffic rules and road awareness']} href="/services/e-rickshaw-training" linkLabel="View E-Rickshaw training in Ayodhya course details" />
          </div>
          <p className="mt-8 text-center"><Link to="/services" className="inline-flex min-h-[48px] items-center gap-2 rounded-lg border-2 border-brand-700 px-6 py-2.5 font-bold text-brand-800 transition-colors hover:bg-brand-700 hover:text-white">Compare All Training Programs <ArrowRight className="h-4 w-4" aria-hidden="true" /></Link></p>
        </div>
      </section>
      <section className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8" aria-label="Why choose us">
        <SectionHeading align="center" eyebrow="Why Choose Us" title="A Trustworthy Choice for Driving Training in Ayodhya" description="No tall claims - just a registered school, practical training and honest guidance." />
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {WHY_POINTS.map((point) => (
            <article key={point.title} className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold-100 text-brand-800"><point.icon className="h-6 w-6" aria-hidden="true" /></span>
              <h3 className="mt-4 font-display text-lg font-bold text-stone-950">{point.title}</h3>
              <p className="mt-1.5 text-[15px] leading-relaxed text-stone-600">{point.text}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="bg-brand-950 py-12 sm:py-16" aria-label="How training works">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-wider text-gold-300">Getting Started</p>
            <h2 className="mt-2 font-display text-2xl font-bold text-white sm:text-3xl">How Training Works at Our School</h2>
            <p className="mt-3 text-base text-stone-300">Four simple steps from your first enquiry to confident, responsible driving.</p>
          </div>
          <ol className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((step, index) => (
              <li key={step.title} className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/15">
                <span className="flex items-center justify-between"><step.icon className="h-7 w-7 text-gold-300" aria-hidden="true" /><span className="font-display text-3xl font-extrabold text-white/20" aria-hidden="true">{index + 1}</span></span>
                <h3 className="mt-3 font-display text-lg font-bold text-white">{step.title}</h3>
                <p className="mt-1.5 text-[15px] leading-relaxed text-stone-300">{step.text}</p>
              </li>
            ))}
          </ol>
          <p className="mt-6 text-[15px] text-stone-300">Note: driving training and the government driving licence procedure are two different things. <Link to="/license-training" className="font-semibold text-gold-300 underline underline-offset-2">Learn how training and licensing differ</Link>.</p>
        </div>
      </section>
      <section className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8" aria-label="School location">
        <MapSection />
      </section>
      <section className="bg-stone-50 py-12 sm:py-16" aria-label="Common questions">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeading align="center" eyebrow="Good to Know" title="Common Questions, Answered Briefly" />
          <div className="mx-auto mt-8 grid max-w-4xl gap-4 sm:grid-cols-2">
            {FAQ_TEASER.map((item) => (
              <article key={item.q} className="rounded-2xl border border-stone-200 bg-white p-5">
                <h3 className="font-display text-[17px] font-bold text-stone-950">{item.q}</h3>
                <p className="mt-1.5 text-[15px] leading-relaxed text-stone-600">{item.a}</p>
              </article>
            ))}
          </div>
          <p className="mt-8 text-center"><Link to="/faq" className="inline-flex min-h-[48px] items-center gap-1.5 rounded-lg bg-brand-700 px-6 py-2.5 font-bold text-white transition-colors hover:bg-brand-800">Read All FAQs <ChevronRight className="h-4 w-4" aria-hidden="true" /></Link></p>
        </div>
      </section>
      <CtaBanner title="Ready to Learn Driving in Ayodhya? Talk to Us Today." subtitle="Call 8005022800 for HMV, LMV or E-Rickshaw training - or send an enquiry and the school will contact you back." />
    </>
  );
}

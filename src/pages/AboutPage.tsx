import { Link } from 'react-router-dom';
import { BadgeCheck, CarFront, ChevronRight, Gauge, GraduationCap, MapPin, Phone, ShieldCheck, TrafficCone, Truck, Users, Zap } from 'lucide-react';
import Seo from '../components/Seo';
import CtaBanner from '../components/CtaBanner';
import SectionHeading from '../components/SectionHeading';
import { BUSINESS } from '../lib/business';
import { breadcrumbSchema, localBusinessSchema } from '../lib/seo';

const APPROACH = [
  { icon: Gauge, title: 'Practical First', text: 'Driving is a hands-on skill. Sessions focus on actual vehicle handling - starting, stopping, steering, manoeuvring and parking - rather than theory alone.' },
  { icon: TrafficCone, title: 'Safety in Every Lesson', text: 'Road signs, traffic rules, safe following distance, mirror use and awareness of pedestrians and two-wheelers are part of every program.' },
  { icon: GraduationCap, title: 'Step-by-Step Learning', text: 'Learners move from basic controls to real-road practice gradually, building confidence at a steady, patient pace.' },
  { icon: Users, title: 'Guidance You Can Trust', text: 'The school explains the training process honestly - including what training covers and what the government licence procedure involves separately.' },
];

export default function AboutPage() {
  return (
    <>
      <Seo title="About Us | Prabhu Motor Training School (Regd.), Ayodhya" description="About Prabhu Motor Training School (Regd.) - a Government Recognized motor training school in Ayodhya offering HMV, LMV and E-Rickshaw training at Udaya Chauraha, Amanigunj." path="/about" schemas={[localBusinessSchema(), breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'About', path: '/about' }])]} />
      <section className="page-hero" aria-label="Page introduction">
        <div className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
          <nav aria-label="Breadcrumb"><ol className="flex flex-wrap items-center gap-1.5 text-sm font-medium text-stone-300"><li><Link to="/" className="hover:text-gold-300">Home</Link></li><li aria-hidden="true"><ChevronRight className="h-4 w-4" /></li><li aria-current="page" className="text-gold-300">About</li></ol></nav>
          <h1 className="mt-3 max-w-3xl font-display text-3xl font-extrabold text-white sm:text-4xl">About Prabhu Motor Training School (Regd.)</h1>
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-stone-200 sm:text-lg">A Government Recognized ({BUSINESS.taglineHindi}) motor training school in Ayodhya, offering structured HMV, LMV and E-Rickshaw driving training.</p>
        </div>
      </section>
      <section className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8" aria-label="Who we are">
        <div className="grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <SectionHeading eyebrow="Who We Are" title="A Registered Driving School in Ayodhya" />
            <div className="mt-4 space-y-4 text-base leading-relaxed text-stone-700 sm:text-[17px]">
              <p><strong className="text-stone-900">{BUSINESS.registeredName}</strong> is a motor training school located at {BUSINESS.fullAddress}. The school is <strong className="text-stone-900">Government Recognized</strong> and operates as a registered driving school in Ayodhya, Uttar Pradesh.</p>
              <p>The school's work is focused on one thing: teaching people to drive safely and responsibly. Training covers understanding the vehicle, following traffic rules, developing road awareness and gaining supervised practice on the road. Programs are available for three learner groups - those who want <Link to="/services/hmv-training" className="font-semibold text-brand-800 underline underline-offset-2">Heavy Motor Vehicle (HMV) training</Link>, those who want <Link to="/services/lmv-training" className="font-semibold text-brand-800 underline underline-offset-2">Light Motor Vehicle (LMV) / car driving training</Link>, and those who want <Link to="/services/e-rickshaw-training" className="font-semibold text-brand-800 underline underline-offset-2">E-Rickshaw training</Link>.</p>
              <p>Learners from Ayodhya city, Amanigunj, Jalpa Colony and nearby Faizabad areas can reach the school easily - it stands at Udaya Chauraha, a well-known local junction. New learners are welcome to <Link to="/contact" className="font-semibold text-brand-800 underline underline-offset-2">call or send an enquiry</Link> before visiting, so the school can guide them on the right program.</p>
            </div>
          </div>
          <aside className="h-fit rounded-2xl border border-stone-200 bg-white p-6 shadow-sm" aria-label="Registration and licence information">
            <h2 className="flex items-center gap-2 font-display text-lg font-bold text-stone-950"><ShieldCheck className="h-5 w-5 text-brand-700" aria-hidden="true" /> Registration and Licence</h2>
            <dl className="mt-4 space-y-3 text-[15px]">
              <div className="rounded-lg bg-stone-50 p-3"><dt className="text-sm text-stone-500">School Name</dt><dd className="font-bold text-stone-900">{BUSINESS.registeredName}</dd></div>
              <div className="rounded-lg bg-stone-50 p-3"><dt className="text-sm text-stone-500">Recognition</dt><dd className="font-bold text-stone-900">{BUSINESS.tagline} ({BUSINESS.taglineHindi})</dd></div>
              <div className="rounded-lg bg-stone-50 p-3"><dt className="text-sm text-stone-500">Licence No.</dt><dd className="font-bold text-stone-900">{BUSINESS.licenseNo}</dd></div>
              <div className="rounded-lg bg-stone-50 p-3"><dt className="text-sm text-stone-500">Licence Valid Till</dt><dd className="font-bold text-stone-900">{BUSINESS.licenseValid}</dd></div>
              <div className="rounded-lg bg-stone-50 p-3"><dt className="text-sm text-stone-500">GSTIN</dt><dd className="font-bold text-stone-900">{BUSINESS.gstin}</dd></div>
            </dl>
          </aside>
        </div>
      </section>
      <section className="bg-stone-50 py-12 sm:py-16" aria-label="Training approach">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeading align="center" eyebrow="How We Teach" title="Our Training Approach" description="Simple, patient and safety-focused - built for first-time learners and improving drivers alike." />
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {APPROACH.map((item) => (
              <article key={item.title} className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-700 text-gold-300"><item.icon className="h-6 w-6" aria-hidden="true" /></span>
                <h3 className="mt-4 font-display text-lg font-bold text-stone-950">{item.title}</h3>
                <p className="mt-1.5 text-[15px] leading-relaxed text-stone-600">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8" aria-label="Available courses">
        <SectionHeading eyebrow="Available Courses" title="What You Can Learn Here" description="Three training programs, one per vehicle category. Open any course page for full details." />
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          <Link to="/services/hmv-training" className="group rounded-2xl border border-stone-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-lg">
            <Truck className="h-8 w-8 text-brand-700" aria-hidden="true" />
            <h3 className="mt-3 font-display text-lg font-bold text-stone-950 group-hover:text-brand-800">HMV Training</h3>
            <p className="mt-1.5 text-[15px] text-stone-600">Heavy Motor Vehicle handling, road safety, traffic awareness and practical driving.</p>
            <span className="mt-3 inline-flex items-center gap-1 font-bold text-brand-700">HMV course details <ChevronRight className="h-4 w-4" aria-hidden="true" /></span>
          </Link>
          <Link to="/services/lmv-training" className="group rounded-2xl border border-stone-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-lg">
            <CarFront className="h-8 w-8 text-brand-700" aria-hidden="true" />
            <h3 className="mt-3 font-display text-lg font-bold text-stone-950 group-hover:text-brand-800">LMV Training</h3>
            <p className="mt-1.5 text-[15px] text-stone-600">Car driving training - controls, steering, gears, parking and road confidence.</p>
            <span className="mt-3 inline-flex items-center gap-1 font-bold text-brand-700">LMV course details <ChevronRight className="h-4 w-4" aria-hidden="true" /></span>
          </Link>
          <Link to="/services/e-rickshaw-training" className="group rounded-2xl border border-stone-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-lg">
            <Zap className="h-8 w-8 text-brand-700" aria-hidden="true" />
            <h3 className="mt-3 font-display text-lg font-bold text-stone-950 group-hover:text-brand-800">E-Rickshaw Training</h3>
            <p className="mt-1.5 text-[15px] text-stone-600">Safe E-Rickshaw operation, passenger safety, manoeuvring and traffic rules.</p>
            <span className="mt-3 inline-flex items-center gap-1 font-bold text-brand-700">E-Rickshaw course details <ChevronRight className="h-4 w-4" aria-hidden="true" /></span>
          </Link>
        </div>
      </section>
      <section className="bg-stone-50 py-12 sm:py-16" aria-label="Visit the school">
        <div className="mx-auto grid w-full max-w-6xl gap-6 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div className="rounded-2xl bg-stone-950 p-6 text-white sm:p-8">
            <h2 className="flex items-center gap-2 font-display text-xl font-bold"><MapPin className="h-5 w-5 text-gold-300" aria-hidden="true" /> Where to Find Us</h2>
            <address className="mt-3 text-[15px] not-italic leading-relaxed text-stone-200"><strong className="text-white">{BUSINESS.registeredName}</strong><br />{BUSINESS.fullAddress}</address>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <Link to="/location" className="inline-flex min-h-[48px] items-center justify-center rounded-lg bg-gold-400 px-5 py-2.5 font-bold text-stone-950 hover:bg-gold-300">Location and Directions</Link>
              <a href={BUSINESS.telLink} className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-lg border-2 border-white/60 px-5 py-2.5 font-bold text-white hover:border-gold-300 hover:text-gold-300"><Phone className="h-4 w-4" aria-hidden="true" /> {BUSINESS.phone}</a>
            </div>
          </div>
          <div className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8">
            <h2 className="flex items-center gap-2 font-display text-xl font-bold text-stone-950"><BadgeCheck className="h-5 w-5 text-brand-700" aria-hidden="true" /> An Honest Note for Learners</h2>
            <div className="mt-3 space-y-3 text-[15px] leading-relaxed text-stone-700">
              <p>Driving training and the government driving licence procedure are separate processes. The school provides training - practical driving skills, traffic rules and road safety. Driving licences are issued only by the relevant government authority after its own procedure.</p>
              <p>The school does not claim guaranteed licence approval, and licensing requirements can change over time - so learners should always verify current requirements with the relevant government authority.</p>
              <p><Link to="/license-training" className="font-bold text-brand-800 underline underline-offset-2">Read the full training vs. licence guide</Link></p>
            </div>
          </div>
        </div>
      </section>
      <CtaBanner title="Want to Learn Driving? Start With a Simple Phone Call." subtitle="Call 8005022800 or send an enquiry - the school will guide you to the right training program." variant="dark" />
    </>
  );
}

import { Link } from 'react-router-dom';
import { CarFront, ChevronRight, CircleAlert, ExternalLink, GraduationCap, Landmark, TriangleAlert } from 'lucide-react';
import Seo from '../components/Seo';
import CtaBanner from '../components/CtaBanner';
import SectionHeading from '../components/SectionHeading';
import { BUSINESS } from '../lib/business';
import { breadcrumbSchema, localBusinessSchema } from '../lib/seo';

export default function LicensePage() {
  return (
    <>
      <Seo title="Driving Training vs. Driving Licence Explained | Ayodhya" description="Understand the difference between driving training and the government driving licence procedure. Training at Prabhu Motor Training School, Ayodhya - licences only from the government authority." path="/license-training" schemas={[localBusinessSchema(), breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Training vs. Licence', path: '/license-training' }])]} />
      <section className="page-hero" aria-label="Page introduction">
        <div className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
          <nav aria-label="Breadcrumb"><ol className="flex flex-wrap items-center gap-1.5 text-sm font-medium text-stone-300"><li><Link to="/" className="hover:text-gold-300">Home</Link></li><li aria-hidden="true"><ChevronRight className="h-4 w-4" /></li><li aria-current="page" className="text-gold-300">Training vs. Licence</li></ol></nav>
          <h1 className="mt-3 max-w-3xl font-display text-3xl font-extrabold text-white sm:text-4xl">Driving Training vs. Driving Licence: What to Know</h1>
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-stone-200 sm:text-lg">An honest explanation of what a motor training school does, what the government licence procedure involves, and how the two fit together.</p>
        </div>
      </section>
      <section className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8" aria-label="The key difference">
        <SectionHeading eyebrow="The Key Difference" title="Training Teaches You to Drive - the Government Issues the Licence" description="These are two separate processes, handled by two different sides. Understanding this saves confusion later." />
        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <article className="rounded-2xl border-2 border-brand-700 bg-white p-6 shadow-sm sm:p-8">
            <p className="flex items-center gap-2.5"><span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-700 text-gold-300"><GraduationCap className="h-6 w-6" aria-hidden="true" /></span><span className="font-display text-lg font-bold text-stone-950">What the School Provides</span></p>
            <h2 className="mt-4 font-display text-xl font-bold text-brand-800">Driving Training</h2>
            <ul className="mt-3 list-disc space-y-2.5 pl-5 text-[15px] leading-relaxed text-stone-700">
              <li>Practical driving instruction - vehicle controls, manoeuvring, parking and road practice.</li>
              <li>Teaching of traffic rules, road signs, signals and safe driving habits.</li>
              <li>Supervised sessions that build skill, judgement and road confidence step by step.</li>
              <li>Programs for HMV, LMV and E-Rickshaw learners at the school in Ayodhya.</li>
            </ul>
            <p className="mt-4 text-[15px] text-stone-600">See: <Link to="/services" className="font-bold text-brand-800 underline underline-offset-2">all training programs</Link>.</p>
          </article>
          <article className="rounded-2xl border-2 border-stone-800 bg-white p-6 shadow-sm sm:p-8">
            <p className="flex items-center gap-2.5"><span className="flex h-12 w-12 items-center justify-center rounded-xl bg-stone-900 text-gold-300"><Landmark className="h-6 w-6" aria-hidden="true" /></span><span className="font-display text-lg font-bold text-stone-950">What the Authority Handles</span></p>
            <h2 className="mt-4 font-display text-xl font-bold text-stone-950">Government Licence Procedure</h2>
            <ul className="mt-3 list-disc space-y-2.5 pl-5 text-[15px] leading-relaxed text-stone-700">
              <li>Licence applications, documents and fees are handled through the government system.</li>
              <li>Learner and driving tests are conducted by the government authority, not the school.</li>
              <li>The final decision to issue any licence rests solely with the authority.</li>
              <li>Rules, documents, fees and test procedures can change - always verify the latest position.</li>
            </ul>
            <p className="mt-4 text-[15px] text-stone-600">Verify current requirements with the relevant government authority or its official portal.</p>
          </article>
        </div>
      </section>
      <section className="bg-stone-50 py-12 sm:py-16" aria-label="How they fit together">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="The Sensible Order" title="How Training and Licensing Fit Together" />
          <ol className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[{ title: '1. Get Trained', text: 'Join HMV, LMV or E-Rickshaw training and learn to drive properly with supervised practice.' }, { title: '2. Learn the Rules', text: 'Understand traffic rules, signs and safe habits as part of your training.' }, { title: '3. Check Requirements', text: 'Verify the current government licence requirements, documents and procedure from the official authority.' }, { title: '4. Follow the Official Process', text: 'Apply and appear for tests through the government system as instructed by the authority.' }].map((step) => (
              <li key={step.title} className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm">
                <h3 className="font-display text-lg font-bold text-stone-950">{step.title}</h3>
                <p className="mt-1.5 text-[15px] leading-relaxed text-stone-600">{step.text}</p>
              </li>
            ))}
          </ol>
          <div className="mt-8 flex flex-col gap-3 rounded-2xl border border-amber-300 bg-amber-50 p-6 sm:flex-row sm:items-start" role="note" aria-label="Important notice">
            <TriangleAlert className="h-7 w-7 shrink-0 text-amber-700" aria-hidden="true" />
            <div className="text-[15px] leading-relaxed text-stone-800">
              <h2 className="font-display text-lg font-bold text-stone-950">What This School Does Not Claim</h2>
              <ul className="mt-1.5 list-disc space-y-1.5 pl-5">
                <li>The school does not issue driving licences - only the government authority does.</li>
                <li>The school does not guarantee licence approval, test clearance or any employment.</li>
                <li>The school does not publish licence fees, document lists or test rules here, because these can change.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8" aria-label="Verify requirements">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl bg-stone-950 p-6 text-white sm:p-8">
            <h2 className="flex items-center gap-2 font-display text-xl font-bold"><CircleAlert className="h-5 w-5 text-gold-300" aria-hidden="true" /> Always Verify Current Requirements</h2>
            <div className="mt-3 space-y-3 text-[15px] leading-relaxed text-stone-200">
              <p>Licence categories, eligibility, documents, fees, waiting periods and test procedures are decided by the government and may change from time to time. Before making any plan, please verify the current requirements directly with the relevant government authority.</p>
              <p>Useful starting points are your nearest Regional Transport Office (RTO) and the government's official transport portal:</p>
              <p><a href="https://parivahan.gov.in/" target="_blank" rel="noopener noreferrer" className="inline-flex min-h-[48px] items-center gap-2 rounded-lg bg-gold-400 px-5 py-2.5 font-bold text-stone-950 hover:bg-gold-300">Parivahan - Official Portal <ExternalLink className="h-4 w-4" aria-hidden="true" /></a></p>
              <p className="text-sm text-stone-400">External government website. The school is not responsible for its content or availability.</p>
            </div>
          </div>
          <div className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8">
            <h2 className="flex items-center gap-2 font-display text-xl font-bold text-stone-950"><CarFront className="h-5 w-5 text-brand-700" aria-hidden="true" /> Start With the Part You Control: Skill</h2>
            <div className="mt-3 space-y-3 text-[15px] leading-relaxed text-stone-700">
              <p>Whatever the official procedure requires on paper, one thing never changes - safe drivers are made through practice. Joining proper training first means you face every later step with genuine skill and confidence.</p>
              <ul className="space-y-2">
                <li><Link to="/services/hmv-training" className="font-bold text-brand-800 underline underline-offset-2">HMV training in Ayodhya</Link></li>
                <li><Link to="/services/lmv-training" className="font-bold text-brand-800 underline underline-offset-2">LMV training in Ayodhya</Link></li>
                <li><Link to="/services/e-rickshaw-training" className="font-bold text-brand-800 underline underline-offset-2">E-Rickshaw training in Ayodhya</Link></li>
              </ul>
              <p>Questions? Call the school on <a href={BUSINESS.telLink} className="font-bold text-brand-800 underline underline-offset-2">{BUSINESS.phone}</a>.</p>
            </div>
          </div>
        </div>
      </section>
      <CtaBanner title="Begin With Proper Training - Call the School Today." subtitle="Training builds skill; the government handles licensing. Call 8005022800 to discuss HMV, LMV or E-Rickshaw training." variant="dark" />
    </>
  );
}

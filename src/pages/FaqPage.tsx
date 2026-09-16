import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ChevronRight, MessageSquare } from 'lucide-react';
import Seo from '../components/Seo';
import CtaBanner from '../components/CtaBanner';
import { BUSINESS } from '../lib/business';
import { breadcrumbSchema, faqPageSchema, localBusinessSchema } from '../lib/seo';

const FAQS: { question: string; answer: string; link?: { label: string; to: string } }[] = [
  { question: 'Where is Prabhu Motor Training School located?', answer: 'The school is located at Udaya Chauraha, Jalpa Colony, Amanigunj, Ayodhya, Faizabad (U.P.) 224001. Udaya Chauraha is the nearest landmark. Use the Get Directions button on this website to open the exact Google Maps listing.', link: { label: 'Open the location page', to: '/location' } },
  { question: 'Which driving training programs does the school offer?', answer: 'The school offers three training programs: HMV training, LMV (car) training and E-Rickshaw training. Each program focuses on practical driving, traffic rules and road safety.', link: { label: 'Compare all training programs', to: '/services' } },
  { question: 'What does HMV training cover?', answer: 'HMV training covers heavy vehicle handling, road safety, traffic awareness, supervised practical driving and basic vehicle knowledge. It is meant for learners who want to handle heavy motor vehicles skillfully and responsibly.', link: { label: 'Read the HMV training details', to: '/services/hmv-training' } },
  { question: 'What will I learn in LMV training?', answer: 'LMV training covers basic vehicle controls, starting and stopping, steering, gears where applicable, traffic rules, parking, reversing, manoeuvring and real-road practice to build driving confidence.', link: { label: 'Read the LMV training details', to: '/services/lmv-training' } },
  { question: 'What does E-Rickshaw training include?', answer: 'E-Rickshaw training includes vehicle controls, safe operation, road awareness, traffic rules, passenger safety, practical manoeuvring, parking and responsible driving habits.', link: { label: 'Read the E-Rickshaw training details', to: '/services/e-rickshaw-training' } },
  { question: 'How can I contact the school?', answer: 'You can call the school on 8005022800, visit in person at Udaya Chauraha, Amanigunj, Ayodhya, or send an enquiry through the contact form on this website by choosing your course.', link: { label: 'Go to the contact page', to: '/contact' } },
  { question: 'How do I reach the school?', answer: "The easiest way is to tap the Get Directions button on this website, which opens the school's exact location on Google Maps with turn-by-turn navigation. You can also call 8005022800 for route guidance.", link: { label: 'See directions and map', to: '/location' } },
  { question: 'Is Prabhu Motor Training School government recognized?', answer: 'Yes. The school is Government Recognized and operates as a registered driving school with Licence No. UPZ072026DSL00008 (valid till 20/08/2031) and GSTIN 09AVRPJ3630K2Z4.', link: { label: 'Read more about the school', to: '/about' } },
  { question: 'Does the school issue driving licences?', answer: 'No. The school provides driving training only. Driving licences are issued solely by the relevant government authority after its own application and testing procedure.', link: { label: 'Understand training vs. licensing', to: '/license-training' } },
  { question: 'What is the difference between driving training and the licence process?', answer: "Driving training teaches you the skill of driving - vehicle control, traffic rules and road safety. The licence process is the government's separate procedure of application, documents and tests through which a licence is issued. Training prepares you; the authority decides on the licence.", link: { label: 'Read the full guide', to: '/license-training' } },
  { question: 'Does the school guarantee licence approval or employment?', answer: "No. No genuine school can guarantee licence approval, test results, permits or employment. The school provides honest, practical training; licences and tests remain the government authority's domain, and results depend on official procedures and your own preparation." },
  { question: 'I am a complete beginner. Which course should I choose?', answer: 'It depends on the vehicle you want to learn. Most car learners start with LMV training, while HMV and E-Rickshaw training suit those specific vehicles. If you are unsure, call 8005022800 or send a General Enquiry describing your goal, and the school will guide you.', link: { label: 'Send a General Enquiry', to: '/contact' } },
];

export default function FaqPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  return (
    <>
      <Seo title="FAQs | HMV, LMV and E-Rickshaw Training in Ayodhya" description="Frequently asked questions about HMV, LMV and E-Rickshaw training, location, directions, contact and the driving licence process at Prabhu Motor Training School, Ayodhya." path="/faq" schemas={[localBusinessSchema(), breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'FAQ', path: '/faq' }]), faqPageSchema(FAQS.map((f) => ({ question: f.question, answer: f.answer })))]} />
      <section className="page-hero" aria-label="Page introduction">
        <div className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
          <nav aria-label="Breadcrumb"><ol className="flex flex-wrap items-center gap-1.5 text-sm font-medium text-stone-300"><li><Link to="/" className="hover:text-gold-300">Home</Link></li><li aria-hidden="true"><ChevronRight className="h-4 w-4" /></li><li aria-current="page" className="text-gold-300">FAQ</li></ol></nav>
          <h1 className="mt-3 max-w-3xl font-display text-3xl font-extrabold text-white sm:text-4xl">Frequently Asked Questions</h1>
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-stone-200 sm:text-lg">Answers about our HMV, LMV and E-Rickshaw training, location, directions, contact and the driving licence process. Tap any question to expand it.</p>
        </div>
      </section>
      <section className="mx-auto w-full max-w-4xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8" aria-label="Questions and answers">
        <div className="space-y-3">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            const buttonId = 'faq-button-' + index;
            const panelId = 'faq-panel-' + index;
            return (
              <article key={faq.question} className={'overflow-hidden rounded-2xl border bg-white shadow-sm transition-colors ' + (isOpen ? 'border-brand-700' : 'border-stone-200')}>
                <h2>
                  <button type="button" id={buttonId} aria-expanded={isOpen} aria-controls={panelId} onClick={() => setOpenIndex(isOpen ? null : index)} className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left sm:px-6 sm:py-5">
                    <span className="flex items-start gap-3 font-display text-[16px] font-bold text-stone-950 sm:text-lg"><MessageSquare className="mt-1 h-5 w-5 shrink-0 text-brand-700" aria-hidden="true" />{faq.question}</span>
                    <ChevronDown className={'h-5 w-5 shrink-0 text-brand-700 transition-transform ' + (isOpen ? 'rotate-180' : '')} aria-hidden="true" />
                  </button>
                </h2>
                {isOpen && (
                  <div id={panelId} role="region" aria-labelledby={buttonId} className="border-t border-stone-100 px-5 py-4 sm:px-6 sm:py-5">
                    <p className="text-[15px] leading-relaxed text-stone-700 sm:text-base">{faq.answer}</p>
                    {faq.link && <p className="mt-3"><Link to={faq.link.to} className="inline-flex min-h-[44px] items-center rounded-lg bg-brand-50 px-4 py-2 text-[15px] font-bold text-brand-800 hover:bg-brand-100">{faq.link.label} →</Link></p>}
                  </div>
                )}
              </article>
            );
          })}
        </div>
        <p className="mt-8 rounded-2xl bg-brand-50 p-5 text-center text-[15px] leading-relaxed text-stone-700 sm:text-base">Still have a question? Call the school on <a href={BUSINESS.telLink} className="font-bold text-brand-800 underline underline-offset-2">{BUSINESS.phone}</a> or <Link to="/contact" className="font-bold text-brand-800 underline underline-offset-2">send an enquiry</Link>.</p>
      </section>
      <CtaBanner title="Your Question Not Listed? Just Call Us." subtitle="The school is happy to answer course, location and training questions on 8005022800." variant="dark" />
    </>
  );
}

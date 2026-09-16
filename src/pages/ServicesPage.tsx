import { Link } from 'react-router-dom';
import { ArrowRight, CarFront, ChevronRight, CircleCheck, Info, Truck, Zap } from 'lucide-react';
import Seo from '../components/Seo';
import CourseCard from '../components/CourseCard';
import CtaBanner from '../components/CtaBanner';
import SectionHeading from '../components/SectionHeading';
import { BUSINESS } from '../lib/business';
import { breadcrumbSchema, localBusinessSchema } from '../lib/seo';

const PROGRAM_DETAILS = [
  { icon: Truck, title: 'HMV Training', path: '/services/hmv-training', intro: 'Heavy Motor Vehicle training for learners who want to handle larger vehicles with care and discipline. The program builds correct handling habits, road safety sense and traffic awareness through supervised practical driving.', includes: ['Heavy vehicle handling and control basics', 'Road safety, signals and traffic awareness', 'Supervised practical driving sessions', 'Basic vehicle knowledge and checks', 'Responsible, patient driving habits'] },
  { icon: CarFront, title: 'LMV Training', path: '/services/lmv-training', intro: 'Light Motor Vehicle / car driving training for first-time learners and improving drivers. The program moves step by step from basic controls to confident real-road driving, including parking and manoeuvring.', includes: ['Vehicle controls, starting and stopping', 'Steering control and gears where applicable', 'Parking, reversing and manoeuvring', 'Traffic rules, signs and road safety', 'Real-road practice for confidence'] },
  { icon: Zap, title: 'E-Rickshaw Training', path: '/services/e-rickshaw-training', intro: 'E-Rickshaw driving classes for learners who want to operate battery-run three-wheelers safely and responsibly. The program focuses on controls, safe operation, passenger safety and traffic discipline.', includes: ['E-Rickshaw controls and safe operation', 'Passenger safety and comfort', 'Manoeuvring, turning and parking', 'Traffic rules and road awareness', 'Responsible, courteous driving habits'] },
];

export default function ServicesPage() {
  return (
    <>
      <Seo title="Driving Training Programs in Ayodhya | HMV, LMV and E-Rickshaw Courses" description="Explore HMV training, LMV car driving training and E-Rickshaw training at Prabhu Motor Training School (Regd.), a Government Recognized driving school in Ayodhya. Call 8005022800." path="/services" schemas={[localBusinessSchema(), breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Courses', path: '/services' }])]} />
      <section className="page-hero" aria-label="Page introduction">
        <div className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
          <nav aria-label="Breadcrumb"><ol className="flex flex-wrap items-center gap-1.5 text-sm font-medium text-stone-300"><li><Link to="/" className="hover:text-gold-300">Home</Link></li><li aria-hidden="true"><ChevronRight className="h-4 w-4" /></li><li aria-current="page" className="text-gold-300">Courses</li></ol></nav>
          <h1 className="mt-3 max-w-3xl font-display text-3xl font-extrabold text-white sm:text-4xl">Motor Driving Training Programs in Ayodhya</h1>
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-stone-200 sm:text-lg">Three focused programs - HMV training, LMV training and E-Rickshaw training - each built around practical driving, traffic rules and road safety.</p>
        </div>
      </section>
      <section className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8" aria-label="Program overview">
        <SectionHeading align="center" eyebrow="All Courses" title="Choose the Right Training for You" description="Every program is taught at the school in Ayodhya with an emphasis on real driving practice. Open a course page for complete details." />
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <CourseCard icon={Truck} title="HMV Training" description="Heavy Motor Vehicle training in Ayodhya - handling, safety and supervised practical driving." points={['Vehicle handling basics', 'Traffic awareness', 'Practical driving', 'Vehicle knowledge']} href="/services/hmv-training" linkLabel="View HMV training in Ayodhya course details" />
          <CourseCard icon={CarFront} title="LMV Training" description="Car driving training in Ayodhya - from first controls to confident real-road driving." points={['Controls and steering', 'Parking and reversing', 'Traffic rules', 'Road confidence']} href="/services/lmv-training" linkLabel="View LMV training in Ayodhya course details" />
          <CourseCard icon={Zap} title="E-Rickshaw Training" description="E-Rickshaw driving classes in Ayodhya - safe operation and passenger-first habits." points={['Safe operation', 'Passenger safety', 'Manoeuvring', 'Traffic discipline']} href="/services/e-rickshaw-training" linkLabel="View E-Rickshaw training in Ayodhya course details" />
        </div>
      </section>
      <section className="bg-stone-50 py-12 sm:py-16" aria-label="Program details">
        <div className="mx-auto w-full max-w-6xl space-y-8 px-4 sm:px-6 lg:px-8">
          {PROGRAM_DETAILS.map((program, index) => (
            <article key={program.title} className="grid items-start gap-6 rounded-2xl border border-stone-200 bg-white p-6 shadow-sm sm:p-8 lg:grid-cols-2">
              <div>
                <p className="flex items-center gap-2.5"><span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-700 text-gold-300"><program.icon className="h-6 w-6" aria-hidden="true" /></span><span className="text-sm font-bold uppercase tracking-wider text-brand-700">Program {index + 1} of 3</span></p>
                <h2 className="mt-3 font-display text-2xl font-bold text-stone-950">{program.title}</h2>
                <p className="mt-2 text-base leading-relaxed text-stone-600">{program.intro}</p>
                <Link to={program.path} className="mt-4 inline-flex min-h-[48px] items-center gap-2 rounded-lg bg-brand-700 px-6 py-2.5 font-bold text-white transition-colors hover:bg-brand-800" aria-label={'Read full details about ' + program.title + ' in Ayodhya'}>Full {program.title} Details <ArrowRight className="h-4 w-4" aria-hidden="true" /></Link>
              </div>
              <div className="rounded-xl bg-stone-50 p-5 sm:p-6">
                <h3 className="font-display text-lg font-bold text-stone-950">What is Included</h3>
                <ul className="mt-3 space-y-2.5 text-[15px] text-stone-700">
                  {program.includes.map((item) => (<li key={item} className="flex items-start gap-2.5"><CircleCheck className="mt-0.5 h-5 w-5 shrink-0 text-brand-700" aria-hidden="true" /><span>{item}</span></li>))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>
      <section className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8" aria-label="Important note">
        <div className="flex flex-col gap-4 rounded-2xl border-l-8 border-gold-400 bg-brand-50 p-6 sm:flex-row sm:items-start sm:p-8">
          <Info className="h-8 w-8 shrink-0 text-brand-700" aria-hidden="true" />
          <div>
            <h2 className="font-display text-xl font-bold text-stone-950">Training Prepares You - the Licence Comes From the Government</h2>
            <p className="mt-2 text-base leading-relaxed text-stone-700">All three programs teach driving skills: how to handle the vehicle, follow traffic rules and drive safely. The driving licence itself is issued only by the relevant government authority through its own application and testing procedure. The school does not issue licences and does not guarantee licence approval. For the full picture, read our <Link to="/license-training" className="font-bold text-brand-800 underline underline-offset-2">training vs. driving licence guide</Link>.</p>
          </div>
        </div>
        <p className="mt-8 text-center text-base text-stone-600">Not sure which program fits you? <a href={BUSINESS.telLink} className="font-bold text-brand-800 underline underline-offset-2">Call {BUSINESS.phone}</a> or <Link to="/contact" className="font-bold text-brand-800 underline underline-offset-2">send an enquiry</Link> - the school will guide you.</p>
      </section>
      <CtaBanner title="Have Questions About Any Course? Just Ask." subtitle="Call the school or send an enquiry with your chosen course - HMV, LMV, E-Rickshaw or a general question." />
    </>
  );
}

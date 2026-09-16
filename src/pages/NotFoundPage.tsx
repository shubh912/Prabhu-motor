import { Link } from 'react-router-dom';
import { Home, MapPin, Phone } from 'lucide-react';
import Seo from '../components/Seo';
import { BUSINESS } from '../lib/business';

export default function NotFoundPage() {
  return (
    <>
      <Seo title="Page Not Found | Prabhu Motor Training School, Ayodhya" description="The page you are looking for does not exist. Return to the homepage of Prabhu Motor Training School (Regd.), Ayodhya, or call 8005022800." path="/404" />
      <section className="mx-auto w-full max-w-3xl px-4 py-16 text-center sm:px-6 sm:py-24" aria-label="Page not found">
        <p className="font-display text-7xl font-extrabold text-brand-700 sm:text-8xl" aria-hidden="true">404</p>
        <h1 className="mt-4 font-display text-2xl font-bold text-stone-950 sm:text-3xl">This Page Took a Wrong Turn</h1>
        <p className="mx-auto mt-3 max-w-md text-base text-stone-600">The page you are looking for does not exist or has moved. Let us get you back on the right road.</p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link to="/" className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-lg bg-brand-700 px-7 py-3 text-base font-bold text-white hover:bg-brand-800"><Home className="h-5 w-5" aria-hidden="true" /> Back to Home</Link>
          <Link to="/contact" className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-lg border-2 border-brand-700 px-7 py-3 text-base font-bold text-brand-800 hover:bg-brand-700 hover:text-white"><MapPin className="h-5 w-5" aria-hidden="true" /> Contact Us</Link>
          <a href={BUSINESS.telLink} className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-lg bg-stone-950 px-7 py-3 text-base font-bold text-gold-300 hover:bg-stone-900"><Phone className="h-5 w-5" aria-hidden="true" /> {BUSINESS.phone}</a>
        </div>
      </section>
    </>
  );
}

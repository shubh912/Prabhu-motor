import type { ComponentType } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';

type CourseCardProps = {
  icon: ComponentType<{ className?: string }>;
  title: string;
  description: string;
  points: string[];
  href: string;
  linkLabel: string;
};

export default function CourseCard({ icon: Icon, title, description, points, href, linkLabel }: CourseCardProps) {
  return (
    <article className="flex h-full flex-col rounded-2xl border border-stone-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-lg">
      <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-brand-700 text-gold-300">
        <Icon className="h-7 w-7" aria-hidden="true" />
      </span>
      <h3 className="mt-4 font-display text-xl font-bold text-stone-950">{title}</h3>
      <p className="mt-2 text-[15px] leading-relaxed text-stone-600">{description}</p>
      <ul className="mt-4 space-y-2 text-[15px] text-stone-700">
        {points.map((point) => (
          <li key={point} className="flex items-start gap-2">
            <Check className="mt-1 h-4 w-4 shrink-0 text-brand-700" aria-hidden="true" />
            <span>{point}</span>
          </li>
        ))}
      </ul>
      <div className="mt-auto pt-5">
        <Link to={href} className="inline-flex min-h-[48px] items-center gap-2 rounded-lg bg-brand-700 px-5 py-2.5 text-[15px] font-bold text-white transition-colors hover:bg-brand-800" aria-label={linkLabel}>
          View Course Details
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
}

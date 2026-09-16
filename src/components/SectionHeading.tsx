type SectionHeadingProps = { eyebrow: string; title: string; description?: string; align?: 'left' | 'center' };

export default function SectionHeading({ eyebrow, title, description, align = 'left' }: SectionHeadingProps) {
  const alignClass = align === 'center' ? 'mx-auto text-center items-center' : 'text-left items-start';
  return (
    <div className={'flex max-w-2xl flex-col ' + alignClass}>
      <p className="text-sm font-bold uppercase tracking-wider text-brand-700">{eyebrow}</p>
      <h2 className="mt-2 font-display text-2xl font-bold text-stone-950 sm:text-3xl">{title}</h2>
      {description && <p className="mt-3 text-base leading-relaxed text-stone-600">{description}</p>}
    </div>
  );
}

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description: string;
  align?: 'center' | 'left';
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
}: SectionHeadingProps) {
  const centered = align === 'center';

  return (
    <div
      className={
        centered
          ? 'mx-auto mb-12 grid max-w-2xl justify-items-center gap-3 text-center'
          : 'grid max-w-xl justify-items-start gap-3'
      }
    >
      <span className="inline-block rounded-full bg-[var(--color-primary-soft)] px-3 py-1 text-sm font-semibold text-[var(--color-primary)]">
        {eyebrow}
      </span>
      <h2>{title}</h2>
      <p className="text-[var(--color-text-muted)]">{description}</p>
    </div>
  );
}

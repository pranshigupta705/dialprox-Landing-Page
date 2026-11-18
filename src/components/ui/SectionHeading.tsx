import { cn } from '@/utils/cn';

export type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn('mb-12', align === 'center' && 'text-center', className)}>
      {eyebrow && (
        <p className="text-sm font-semibold uppercase tracking-widest text-[var(--color-primary)] mb-3">
          {eyebrow}
        </p>
      )}
      <h2 className="text-[clamp(1.75rem,3.5vw,2.5rem)] font-bold leading-[1.2] text-[var(--color-text)]">
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            'mt-4 text-[var(--color-text-muted)] leading-relaxed max-w-[65ch]',
            align === 'center' && 'mx-auto'
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}

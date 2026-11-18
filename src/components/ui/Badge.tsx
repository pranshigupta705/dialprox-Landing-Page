import { cva } from 'class-variance-authority';
import type { VariantProps } from 'class-variance-authority';
import { cn } from '@/utils/cn';

const badgeVariants = cva(
  'inline-flex items-center rounded-[var(--radius-full)] px-3 py-1 text-xs font-semibold',
  {
    variants: {
      variant: {
        neutral:
          'bg-[var(--color-background-alt)] text-[var(--color-text-muted)] border border-[var(--color-border)]',
        primary: 'bg-[var(--color-primary-soft)] text-[var(--color-primary)]',
        accent: 'bg-[var(--color-accent)]/10 text-[var(--color-accent)]',
      },
    },
    defaultVariants: {
      variant: 'neutral',
    },
  }
);

export type BadgeVariant = 'neutral' | 'primary' | 'accent';
export type BadgeProps = VariantProps<typeof badgeVariants> &
  React.HTMLAttributes<HTMLSpanElement> & {
    className?: string;
  };

export function Badge({ variant, className, ...rest }: BadgeProps) {
  return <span className={cn(badgeVariants({ variant }), className)} {...rest} />;
}

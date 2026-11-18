/* eslint-disable react-refresh/only-export-components */
import { forwardRef } from 'react';
import { cva } from 'class-variance-authority';
import type { VariantProps } from 'class-variance-authority';
import { cn } from '@/utils/cn';

const cardVariants = cva(
  'rounded-[var(--radius-lg)] p-6 border transition-all duration-200',
  {
    variants: {
      variant: {
        default:
          'bg-[var(--color-surface)] border-[var(--color-border)] shadow-[var(--shadow-sm)]',
        elevated:
          'bg-[var(--color-surface)] border-[var(--color-border)] shadow-[var(--shadow-md)]',
        outline: 'bg-transparent border-[var(--color-border)]',
        dark: 'bg-[var(--color-dark-section)] border-white/10 text-white',
      },
      hoverable: {
        true: 'hover:-translate-y-1 hover:shadow-[var(--shadow-md)] cursor-pointer',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

export type CardVariant = 'default' | 'elevated' | 'outline' | 'dark';
export type CardProps = VariantProps<typeof cardVariants> &
  React.HTMLAttributes<HTMLDivElement> & {
    hoverable?: boolean;
  };
export type CardIconProps = React.HTMLAttributes<HTMLDivElement>;
export type CardTitleProps = React.HTMLAttributes<HTMLHeadingElement>;
export type CardDescriptionProps = React.HTMLAttributes<HTMLParagraphElement>;

const CardRoot = forwardRef<HTMLDivElement, CardProps>(
  ({ variant, hoverable, className, ...rest }, ref) => (
    <div
      ref={ref}
      className={cn(cardVariants({ variant, hoverable }), className)}
      {...rest}
    />
  )
);
CardRoot.displayName = 'Card';

const CardIcon = forwardRef<HTMLDivElement, CardIconProps>(
  ({ className, ...rest }, ref) => (
    <div
      ref={ref}
      className={cn(
        'w-12 h-12 rounded-[var(--radius-md)] flex items-center justify-center mb-4 bg-[var(--color-primary-soft)] text-[var(--color-primary)]',
        className
      )}
      {...rest}
    />
  )
);
CardIcon.displayName = 'Card.Icon';

const CardTitle = forwardRef<HTMLHeadingElement, CardTitleProps>(
  ({ className, ...rest }, ref) => (
    <h3
      ref={ref}
      className={cn('text-lg font-semibold text-[var(--color-text)] mb-2', className)}
      {...rest}
    />
  )
);
CardTitle.displayName = 'Card.Title';

const CardDescription = forwardRef<HTMLParagraphElement, CardDescriptionProps>(
  ({ className, ...rest }, ref) => (
    <p
      ref={ref}
      className={cn(
        'text-sm text-[var(--color-text-muted)] leading-relaxed max-w-none',
        className
      )}
      {...rest}
    />
  )
);
CardDescription.displayName = 'Card.Description';

export const Card = Object.assign(CardRoot, {
  Icon: CardIcon,
  Title: CardTitle,
  Description: CardDescription,
});

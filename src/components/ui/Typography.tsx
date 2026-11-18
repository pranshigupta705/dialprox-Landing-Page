import { cva } from 'class-variance-authority';
import type { VariantProps } from 'class-variance-authority';
import { cn } from '@/utils/cn';

const headingVariants = cva('font-bold text-[var(--color-text)]', {
  variants: {
    size: {
      1: 'text-[clamp(2.25rem,5vw,3.75rem)] leading-[1.1] font-bold',
      2: 'text-[clamp(1.75rem,3.5vw,2.5rem)] leading-[1.2] font-bold',
      3: 'text-xl leading-snug font-semibold',
      4: 'text-lg leading-snug font-semibold',
    },
  },
  defaultVariants: { size: 1 },
});

export type HeadingLevel = 1 | 2 | 3 | 4;
export type HeadingSize = 1 | 2 | 3 | 4;

export type HeadingProps = VariantProps<typeof headingVariants> & {
  as?: `h${HeadingLevel}`;
  size?: HeadingSize;
  className?: string;
  children?: React.ReactNode;
};

export function Heading({ as, size = 1, className, children }: HeadingProps) {
  const Tag = (as ?? `h${size}`) as React.ElementType;
  return (
    <Tag className={cn(headingVariants({ size }), className)}>
      {children}
    </Tag>
  );
}

const textVariants = cva('', {
  variants: {
    variant: {
      body: 'text-base text-[var(--color-text)] leading-relaxed',
      muted: 'text-base text-[var(--color-text-muted)] leading-relaxed',
      small: 'text-sm text-[var(--color-text-muted)] leading-relaxed',
    },
  },
  defaultVariants: { variant: 'body' },
});

export type TextVariant = 'body' | 'muted' | 'small';
export type TextProps = VariantProps<typeof textVariants> & {
  as?: keyof React.JSX.IntrinsicElements;
  className?: string;
  children?: React.ReactNode;
};

export function Text({ as: Tag = 'p', variant, className, children }: TextProps) {
  return (
    <Tag className={cn(textVariants({ variant }), className)}>
      {children}
    </Tag>
  );
}

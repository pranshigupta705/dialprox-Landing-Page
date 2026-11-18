import { forwardRef } from 'react';
import { cva } from 'class-variance-authority';
import type { VariantProps } from 'class-variance-authority';
import { cn } from '@/utils/cn';
import { Container } from './Container';
import type { ContainerSize } from './Container';

const sectionVariants = cva('w-full', {
  variants: {
    background: {
      default: 'bg-[var(--color-background)]',
      alt: 'bg-[var(--color-background-alt)]',
      dark: 'bg-[var(--color-dark-section)] text-white',
    },
    padding: {
      md: 'py-16 md:py-20',
      lg: 'py-16 md:py-24 lg:py-28',
    },
  },
  defaultVariants: {
    background: 'default',
    padding: 'lg',
  },
});

export type SectionBackground = 'default' | 'alt' | 'dark';
export type SectionPadding = 'md' | 'lg';
export type SectionProps = VariantProps<typeof sectionVariants> & {
  id?: string;
  containerSize?: ContainerSize;
  className?: string;
  children?: React.ReactNode;
};

export const Section = forwardRef<HTMLElement, SectionProps>(
  ({ id, background, padding, containerSize, className, children }, ref) => (
    <section
      ref={ref}
      id={id}
      className={cn(sectionVariants({ background, padding }), className)}
    >
      <Container size={containerSize}>{children}</Container>
    </section>
  )
);
Section.displayName = 'Section';

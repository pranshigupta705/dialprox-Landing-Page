import { forwardRef } from 'react';
import { cva } from 'class-variance-authority';
import type { VariantProps } from 'class-variance-authority';
import { cn } from '@/utils/cn';

const containerVariants = cva('w-full mx-auto px-4 sm:px-6 lg:px-8', {
  variants: {
    size: {
      default: 'max-w-[1200px]',
      narrow: 'max-w-[720px]',
      wide: 'max-w-[1400px]',
    },
  },
  defaultVariants: { size: 'default' },
});

export type ContainerSize = 'default' | 'narrow' | 'wide';
export type ContainerProps = VariantProps<typeof containerVariants> &
  React.HTMLAttributes<HTMLDivElement> & {
    className?: string;
  };

export const Container = forwardRef<HTMLDivElement, ContainerProps>(
  ({ size, className, ...rest }, ref) => (
    <div ref={ref} className={cn(containerVariants({ size }), className)} {...rest} />
  )
);
Container.displayName = 'Container';

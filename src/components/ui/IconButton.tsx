import { forwardRef } from 'react';
import { cva } from 'class-variance-authority';
import type { VariantProps } from 'class-variance-authority';
import { cn } from '@/utils/cn';

const iconButtonVariants = cva(
  'inline-flex items-center justify-center rounded-full transition-all duration-150 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-primary)] disabled:opacity-50 disabled:cursor-not-allowed',
  {
    variants: {
      variant: {
        default:
          'bg-[var(--color-background-alt)] text-[var(--color-text)] hover:bg-[var(--color-border)]',
        primary:
          'bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-hover)]',
        ghost:
          'bg-transparent text-[var(--color-text-muted)] hover:bg-[var(--color-background-alt)]',
      },
      size: {
        sm: 'w-8 h-8',
        md: 'w-10 h-10',
        lg: 'w-12 h-12',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
    },
  }
);

export type IconButtonProps = VariantProps<typeof iconButtonVariants> &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    'aria-label': string;
    className?: string;
  };

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ variant, size, className, ...rest }, ref) => (
    <button
      ref={ref}
      type="button"
      className={cn(iconButtonVariants({ variant, size }), className)}
      {...rest}
    />
  )
);
IconButton.displayName = 'IconButton';

export type VoiceButtonProps = {
  listening?: boolean;
  'aria-label': string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  className?: string;
  children?: React.ReactNode;
};

export const VoiceButton = forwardRef<HTMLButtonElement, VoiceButtonProps>(
  ({ listening = false, className, children, ...rest }, ref) => (
    <div className="relative inline-flex items-center justify-center">
      {listening && (
        <span
          aria-hidden="true"
          className="absolute inset-0 rounded-full bg-[var(--color-accent)] pulse-ring"
        />
      )}
      <button
        ref={ref}
        type="button"
        className={cn(
          'relative z-10 w-16 h-16 md:w-[72px] md:h-[72px] rounded-full bg-[var(--color-accent)] text-white flex items-center justify-center transition-transform duration-150 hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)] disabled:opacity-50 disabled:cursor-not-allowed',
          listening && 'scale-105',
          className
        )}
        {...rest}
      >
        {children}
      </button>
    </div>
  )
);
VoiceButton.displayName = 'VoiceButton';

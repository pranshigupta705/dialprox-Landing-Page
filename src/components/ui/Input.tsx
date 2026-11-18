import { forwardRef } from 'react';
import { cn } from '@/utils/cn';

export type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  hasError?: boolean;
  errorId?: string;
  className?: string;
};

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ hasError, errorId, className, ...rest }, ref) => (
    <input
      ref={ref}
      aria-invalid={hasError === true ? 'true' : undefined}
      aria-describedby={hasError === true && errorId ? errorId : undefined}
      className={cn(
        'w-full h-12 px-4 rounded-[var(--radius-md)] border text-[var(--color-text)] bg-[var(--color-surface)] text-base transition-colors duration-150',
        'placeholder:text-[var(--color-text-muted)]/60',
        'focus-visible:outline-2 focus-visible:outline-offset-0 focus-visible:outline-[var(--color-primary)]',
        hasError
          ? 'border-[var(--color-danger)] focus-visible:outline-[var(--color-danger)]'
          : 'border-[var(--color-border)] hover:border-[var(--color-primary)]/50',
        'disabled:opacity-50 disabled:cursor-not-allowed',
        className
      )}
      {...rest}
    />
  )
);
Input.displayName = 'Input';

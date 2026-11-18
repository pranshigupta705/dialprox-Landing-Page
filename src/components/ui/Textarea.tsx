import { forwardRef } from 'react';
import { cn } from '@/utils/cn';

export type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
  hasError?: boolean;
  errorId?: string;
  className?: string;
};

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ hasError, errorId, className, ...rest }, ref) => (
    <textarea
      ref={ref}
      aria-invalid={hasError === true ? 'true' : undefined}
      aria-describedby={hasError === true && errorId ? errorId : undefined}
      className={cn(
        'w-full px-4 py-3 rounded-[var(--radius-md)] border text-[var(--color-text)] bg-[var(--color-surface)] text-base transition-colors duration-150 resize-y min-h-[120px]',
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
Textarea.displayName = 'Textarea';

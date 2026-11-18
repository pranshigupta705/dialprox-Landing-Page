import { forwardRef } from 'react';
import { cn } from '@/utils/cn';

export type LabelProps = React.LabelHTMLAttributes<HTMLLabelElement> & {
  required?: boolean;
  className?: string;
};

export const Label = forwardRef<HTMLLabelElement, LabelProps>(
  ({ required, className, children, ...rest }, ref) => (
    <label
      ref={ref}
      className={cn(
        'block text-sm font-medium text-[var(--color-text)] mb-1.5',
        className
      )}
      {...rest}
    >
      {children}
      {required === true && (
        <span className="ml-1 text-[var(--color-danger)]" aria-hidden="true">
          *
        </span>
      )}
    </label>
  )
);
Label.displayName = 'Label';

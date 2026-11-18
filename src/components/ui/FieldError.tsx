import { cn } from '@/utils/cn';

export type FieldErrorProps = {
  id?: string;
  message?: string;
  className?: string;
};

export function FieldError({ id, message, className }: FieldErrorProps) {
  if (!message) return null;
  return (
    <p
      id={id}
      role="alert"
      className={cn('mt-1.5 text-sm text-[var(--color-danger)]', className)}
    >
      {message}
    </p>
  );
}

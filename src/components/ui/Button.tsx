import { forwardRef } from 'react';
import { cva } from 'class-variance-authority';
import type { VariantProps } from 'class-variance-authority';
import { cn } from '@/utils/cn';

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 font-semibold rounded-[var(--radius-md)] transition-all duration-150 cursor-pointer select-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-primary)] disabled:opacity-50 disabled:cursor-not-allowed',
  {
    variants: {
      variant: {
        primary:
          'bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-hover)] active:scale-[0.98]',
        secondary:
          'bg-[var(--color-primary-soft)] text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white border border-[var(--color-primary)] active:scale-[0.98]',
        ghost:
          'bg-transparent text-[var(--color-text-muted)] hover:bg-[var(--color-background-alt)] hover:text-[var(--color-text)] active:scale-[0.98]',
        accent:
          'bg-[var(--color-accent)] text-white hover:opacity-90 active:scale-[0.98]',
        danger:
          'bg-[var(--color-danger)] text-white hover:opacity-90 active:scale-[0.98]',
      },
      size: {
        sm: 'h-9 px-4 text-sm min-w-[44px]',
        md: 'h-11 px-6 text-base min-w-[44px]',
        lg: 'h-12 px-8 text-lg min-w-[44px]',
      },
      fullWidth: {
        true: 'w-full',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
);

export type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'accent' | 'danger';
export type ButtonSize = 'sm' | 'md' | 'lg';

type ButtonBaseProps = VariantProps<typeof buttonVariants> & {
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  fullWidth?: boolean;
  className?: string;
  children?: React.ReactNode;
};

type ButtonAsButton = ButtonBaseProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof ButtonBaseProps> & {
    as?: 'button';
    href?: never;
  };

type ButtonAsAnchor = ButtonBaseProps &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof ButtonBaseProps> & {
    as: 'a';
    href: string;
  };

export type ButtonProps = ButtonAsButton | ButtonAsAnchor;

const Spinner = () => (
  <span
    className="spin inline-block w-4 h-4 border-2 border-current border-t-transparent rounded-full"
    aria-hidden="true"
  />
);

export const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  (props, ref) => {
    const {
      variant,
      size,
      fullWidth,
      isLoading,
      leftIcon,
      rightIcon,
      className,
      children,
      as,
      ...rest
    } = props;

    const classes = cn(buttonVariants({ variant, size, fullWidth }), className);

    const content = (
      <>
        {isLoading ? <Spinner /> : leftIcon}
        {children}
        {!isLoading && rightIcon}
      </>
    );

    if (as === 'a') {
      const { href, ...anchorRest } = rest as Omit<ButtonAsAnchor, keyof ButtonBaseProps | 'as'>;
      return (
        <a
          ref={ref as React.Ref<HTMLAnchorElement>}
          href={href}
          className={classes}
          {...anchorRest}
        >
          {content}
        </a>
      );
    }

    const buttonRest = rest as Omit<ButtonAsButton, keyof ButtonBaseProps | 'as'>;
    return (
      <button
        ref={ref as React.Ref<HTMLButtonElement>}
        className={classes}
        disabled={isLoading === true || buttonRest.disabled}
        aria-busy={isLoading}
        type={buttonRest.type ?? 'button'}
        {...buttonRest}
      >
        {content}
      </button>
    );
  }
);
Button.displayName = 'Button';

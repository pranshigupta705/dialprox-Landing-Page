import { useState, type FormEvent, type ReactNode } from 'react';
import { Check } from 'lucide-react';
import SectionHeading from '@/features/product/SectionHeading';
import { teamSizes } from './data';
import {
  emptyValues,
  fieldOrder,
  validate,
  type DemoFormErrors,
  type DemoFormValues,
} from './validation';

type Status = 'idle' | 'sending' | 'sent';

interface AriaProps {
  id: string;
  'aria-invalid': boolean;
  'aria-describedby'?: string;
}

interface FieldProps {
  name: keyof DemoFormValues;
  label: string;
  optional?: boolean;
  error?: string;
  children: (aria: AriaProps) => ReactNode;
}

const inputBase =
  'w-full rounded-lg border bg-[var(--color-surface)] px-3 py-2.5 text-base text-inherit placeholder:text-[var(--color-text-muted)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--color-primary)]';

function Field({ name, label, optional, error, children }: FieldProps) {
  const id = `demo-${name}`;
  const errorId = `${id}-error`;

  return (
    <div className="grid gap-1.5">
      <label htmlFor={id} className="text-sm font-semibold">
        {label}
        {optional && (
          <span className="font-normal text-[var(--color-text-muted)]"> (optional)</span>
        )}
      </label>
      {children({
        id,
        'aria-invalid': Boolean(error),
        'aria-describedby': error ? errorId : undefined,
      })}
      {error && (
        <p id={errorId} className="text-sm text-[var(--color-danger)]">
          {error}
        </p>
      )}
    </div>
  );
}

const nextSteps = [
  'A short call to understand your volume and workflows',
  'A live demo using your own FAQs and call flows',
  'A clear plan and pricing, with no pressure',
];

export default function DemoForm() {
  const [values, setValues] = useState<DemoFormValues>(emptyValues);
  const [errors, setErrors] = useState<DemoFormErrors>({});
  const [touched, setTouched] = useState<Partial<Record<keyof DemoFormValues, boolean>>>({});
  const [status, setStatus] = useState<Status>('idle');

  const borderFor = (name: keyof DemoFormValues) =>
    errors[name] ? 'border-[var(--color-danger)]' : 'border-[var(--color-border)]';

  function handleChange(name: keyof DemoFormValues, value: string) {
    const next = { ...values, [name]: value };
    setValues(next);
    // Once a field has been visited, re-check it as the person types.
    if (touched[name]) {
      setErrors((prev) => ({ ...prev, [name]: validate(next)[name] }));
    }
  }

  function handleBlur(name: keyof DemoFormValues) {
    setTouched((prev) => ({ ...prev, [name]: true }));
    setErrors((prev) => ({ ...prev, [name]: validate(values)[name] }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === 'sending') return;

    const found = validate(values);
    setErrors(found);
    setTouched(Object.fromEntries(fieldOrder.map((key) => [key, true])));

    const firstInvalid = fieldOrder.find((key) => found[key]);
    if (firstInvalid) {
      document.getElementById(`demo-${firstInvalid}`)?.focus();
      return;
    }

    setStatus('sending');
    // TODO: send `values` to your backend or form service here.
    // For now this only simulates a request so the success state can be tested.
    await new Promise((resolve) => setTimeout(resolve, 800));
    setStatus('sent');
  }

  function reset() {
    setValues(emptyValues);
    setErrors({});
    setTouched({});
    setStatus('idle');
  }

  return (
    <section id="contact" className="scroll-mt-20 py-16 lg:py-28">
      <div className="mx-auto grid max-w-[1200px] items-start gap-10 px-4 md:px-6 lg:grid-cols-[1fr_1.1fr] lg:gap-14 lg:px-8">
        <div className="grid gap-8">
          <SectionHeading
            align="left"
            eyebrow="Book a demo"
            title="See DialProx handle your calls"
            description="Tell us a little about your team and we will set up a demo around your use case."
          />
          <div>
            <p className="mb-3 font-semibold">What happens next</p>
            <ul className="grid gap-3">
              {nextSteps.map((step) => (
                <li key={step} className="flex items-start gap-2">
                  <Check
                    size={18}
                    aria-hidden="true"
                    className="mt-1 flex-none text-[var(--color-accent)]"
                  />
                  <span className="text-[var(--color-text-muted)]">{step}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 shadow-sm md:p-8">
          {status === 'sent' ? (
            <div role="status" className="grid justify-items-start gap-4">
              <div className="grid h-12 w-12 place-items-center rounded-full bg-[var(--color-primary-soft)] text-[var(--color-primary)]">
                <Check size={24} aria-hidden="true" />
              </div>
              <h3>Thanks, we’ve got your request</h3>
              <p className="text-[var(--color-text-muted)]">
                We will email {values.email.trim()} to arrange your demo.
              </p>
              <button
                type="button"
                onClick={reset}
                className="rounded-lg border border-[var(--color-border)] px-4 py-2 font-semibold transition-colors hover:border-[var(--color-primary)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--color-primary)]"
              >
                Send another request
              </button>
            </div>
          ) : (
            <form noValidate onSubmit={handleSubmit} className="grid gap-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <Field name="name" label="Full name" error={errors.name}>
                  {(aria) => (
                    <input
                      {...aria}
                      type="text"
                      autoComplete="name"
                      value={values.name}
                      onChange={(e) => handleChange('name', e.target.value)}
                      onBlur={() => handleBlur('name')}
                      className={`${inputBase} ${borderFor('name')}`}
                    />
                  )}
                </Field>
                <Field name="email" label="Work email" error={errors.email}>
                  {(aria) => (
                    <input
                      {...aria}
                      type="email"
                      autoComplete="email"
                      value={values.email}
                      onChange={(e) => handleChange('email', e.target.value)}
                      onBlur={() => handleBlur('email')}
                      className={`${inputBase} ${borderFor('email')}`}
                    />
                  )}
                </Field>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <Field name="company" label="Company" error={errors.company}>
                  {(aria) => (
                    <input
                      {...aria}
                      type="text"
                      autoComplete="organization"
                      value={values.company}
                      onChange={(e) => handleChange('company', e.target.value)}
                      onBlur={() => handleBlur('company')}
                      className={`${inputBase} ${borderFor('company')}`}
                    />
                  )}
                </Field>
                <Field name="phone" label="Phone" optional error={errors.phone}>
                  {(aria) => (
                    <input
                      {...aria}
                      type="tel"
                      autoComplete="tel"
                      value={values.phone}
                      onChange={(e) => handleChange('phone', e.target.value)}
                      onBlur={() => handleBlur('phone')}
                      className={`${inputBase} ${borderFor('phone')}`}
                    />
                  )}
                </Field>
              </div>

              <Field name="teamSize" label="Team size" error={errors.teamSize}>
                {(aria) => (
                  <select
                    {...aria}
                    value={values.teamSize}
                    onChange={(e) => handleChange('teamSize', e.target.value)}
                    onBlur={() => handleBlur('teamSize')}
                    className={`${inputBase} ${borderFor('teamSize')}`}
                  >
                    <option value="">Select a range</option>
                    {teamSizes.map((size) => (
                      <option key={size} value={size}>
                        {size} people
                      </option>
                    ))}
                  </select>
                )}
              </Field>

              <Field name="message" label="What would you like to solve?" optional error={errors.message}>
                {(aria) => (
                  <textarea
                    {...aria}
                    rows={4}
                    maxLength={500}
                    value={values.message}
                    onChange={(e) => handleChange('message', e.target.value)}
                    onBlur={() => handleBlur('message')}
                    className={`${inputBase} ${borderFor('message')}`}
                  />
                )}
              </Field>

              <div className="grid gap-3">
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="rounded-lg bg-[var(--color-primary)] px-5 py-3 font-semibold text-white transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--color-primary)] disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {status === 'sending' ? 'Sending…' : 'Book a demo'}
                </button>
                <p className="text-sm text-[var(--color-text-muted)]">
                  We will only use your details to contact you about a demo.
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}


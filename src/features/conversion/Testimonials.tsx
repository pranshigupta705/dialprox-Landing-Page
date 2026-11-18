import SectionHeading from '@/features/product/SectionHeading';
import { testimonials } from './data';

function initials(name: string) {
  return name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="scroll-mt-20 py-16 lg:py-28">
      <div className="mx-auto max-w-[1200px] px-4 md:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Customers"
          title="Teams that stopped missing calls"
          description="Here is what customers say after their first weeks with DialProx."
        />

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map(({ id, quote, name, role, company }) => (
            <figure
              key={id}
              className="flex flex-col justify-between gap-6 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 shadow-sm"
            >
              <blockquote>
                <p>“{quote}”</p>
              </blockquote>
              <figcaption className="flex items-center gap-3">
                <span
                  aria-hidden="true"
                  className="grid h-10 w-10 flex-none place-items-center rounded-full bg-[var(--color-primary-soft)] text-sm font-semibold text-[var(--color-primary)]"
                >
                  {initials(name)}
                </span>
                <span className="grid text-sm">
                  <span className="font-semibold">{name}</span>
                  <span className="text-[var(--color-text-muted)]">
                    {role}, {company}
                  </span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

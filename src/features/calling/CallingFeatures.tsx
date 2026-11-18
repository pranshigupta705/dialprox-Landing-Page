import { Check } from 'lucide-react';
import { callingFeatures } from './data';

export default function CallingFeatures() {
  return (
    <section id="calling" className="scroll-mt-20 bg-background-alt py-16 lg:py-28">
      <div className="mx-auto max-w-[1200px] px-4 md:px-6 lg:px-8">
        <div className="mx-auto mb-12 grid max-w-2xl justify-items-center gap-3 text-center">
          <span className="inline-block rounded-full bg-[var(--color-primary-soft)] px-3 py-1 text-sm font-semibold text-[var(--color-primary)]">
            Calling features
          </span>
          <h2>Every call, handled the way you’d handle it</h2>
          <p className="text-[var(--color-text-muted)]">
            One platform for answering, dialing, routing, and managing your agents.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {callingFeatures.map(({ id, title, description, points, icon: Icon }) => (
            <article
              key={id}
              className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 shadow-sm transition-all motion-safe:hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="mb-4 grid h-10 w-10 place-items-center rounded-xl bg-[var(--color-primary-soft)] text-[var(--color-primary)]">
                <Icon size={20} aria-hidden="true" />
              </div>
              <h3>{title}</h3>
              <p className="mt-2 text-[var(--color-text-muted)]">{description}</p>
              <ul className="mt-4 grid gap-2">
                {points.map((point) => (
                  <li key={point} className="flex items-start gap-2 text-sm">
                    <Check
                      size={16}
                      aria-hidden="true"
                      className="mt-0.5 flex-none text-[var(--color-accent)]"
                    />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}


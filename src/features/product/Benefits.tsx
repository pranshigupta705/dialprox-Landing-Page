import SectionHeading from './SectionHeading';
import { benefits } from './data';

export default function Benefits() {
  return (
    <section id="benefits" className="scroll-mt-20 bg-background-alt py-16 lg:py-28">
      <div className="mx-auto max-w-[1200px] px-4 md:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Why DialProx"
          title="Built for teams that can’t afford to miss a call"
          description="The basics, done right, so your customers always get an answer."
        />

        <div className="grid gap-6 md:grid-cols-3">
          {benefits.map(({ id, title, description, icon: Icon }) => (
            <article
              key={id}
              className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 shadow-sm transition-all motion-safe:hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="mb-4 grid h-10 w-10 place-items-center rounded-xl bg-[var(--color-primary-soft)] text-[var(--color-primary)]">
                <Icon size={20} aria-hidden="true" />
              </div>
              <h3>{title}</h3>
              <p className="mt-2 text-[var(--color-text-muted)]">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

import SectionHeading from './SectionHeading';
import { workflowSteps } from './data';

export default function Workflow() {
  return (
    <section id="workflow" className="scroll-mt-20 py-16 lg:py-28">
      <div className="mx-auto max-w-[1200px] px-4 md:px-6 lg:px-8">
        <SectionHeading
          eyebrow="How it works"
          title="Live in three steps"
          description="No engineers needed. Most teams take their first call the same day."
        />

        <ol className="grid gap-6 md:grid-cols-3">
          {workflowSteps.map(({ id, title, description, icon: Icon }, index) => (
            <li
              key={id}
              className="relative rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 shadow-sm"
            >
              <div className="mb-4 flex items-center justify-between">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-[var(--color-primary-soft)] text-[var(--color-primary)]">
                  <Icon size={20} aria-hidden="true" />
                </div>
                <span
                  aria-hidden="true"
                  className="text-3xl font-bold text-[var(--color-border)]"
                >
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>
              <h3>
                <span className="sr-only">Step {index + 1}: </span>
                {title}
              </h3>
              <p className="mt-2 text-[var(--color-text-muted)]">{description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

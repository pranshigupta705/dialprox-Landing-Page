import SectionHeading from './SectionHeading';
import { integrations } from './data';

export default function Integrations() {
  return (
    <section id="integrations" className="scroll-mt-20 py-16 lg:py-28">
      <div className="mx-auto max-w-[1200px] px-4 md:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Integrations"
          title="Plugs into the tools you already use"
          description="Sync calls, contacts, and outcomes with your CRM, helpdesk, calendar, and more."
        />

        <ul className="mx-auto flex max-w-3xl flex-wrap justify-center gap-3">
          {integrations.map((name) => (
            <li
              key={name}
              className="flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:border-[var(--color-primary)]"
            >
              <span
                aria-hidden="true"
                className="h-2 w-2 rounded-full"
                style={{ background: 'var(--color-accent)' }}
              />
              {name}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

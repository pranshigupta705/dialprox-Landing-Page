import Hero from '@/features/hero/Hero';
import CallingFeatures from '@/features/calling/CallingFeatures';

const placeholders = [
  { id: 'workflow', label: 'Workflow: Phase 5' },
  { id: 'analytics', label: 'Analytics: Phase 5' },
  { id: 'integrations', label: 'Integrations: Phase 5' },
  { id: 'faq', label: 'FAQ: Phase 6' },
  { id: 'contact', label: 'Contact: Phase 6' },
];

export default function HomePage() {
  return (
    <>
      <Hero />
      <CallingFeatures />
      {/* TODO: replace these placeholders in Phases 5-6 */}
      {placeholders.map((p) => (
        <section
          key={p.id}
          id={p.id}
          className="grid min-h-[60vh] scroll-mt-20 place-items-center border-t border-[var(--color-border)] text-[var(--color-text-muted)]"
        >
          {p.label}
        </section>
      ))}
    </>
  );
}

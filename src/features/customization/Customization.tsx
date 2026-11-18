import { ClipboardList, GitBranch, SlidersHorizontal, type LucideIcon } from 'lucide-react';
import SectionHeading from '@/features/product/SectionHeading';

interface Item {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

const items: Item[] = [
  {
    id: 'dynamic',
    title: 'Fully dynamic',
    description:
      'Everything adapts as your business changes. Update greetings, answers, and rules whenever you need to, without starting over.',
    icon: SlidersHorizontal,
  },
  {
    id: 'flows',
    title: 'Customizable call flows',
    description:
      'Design each call flow step by step: what the agent asks, when it checks an account, and when it hands the call to a person.',
    icon: GitBranch,
  },
  {
    id: 'requirements',
    title: 'Built around your requirements',
    description:
      'Tell us how your team works. Languages, hours, routing, and responses are tailored to match.',
    icon: ClipboardList,
  },
];

export default function Customization() {
  return (
    <section id="customization" className="scroll-mt-20 py-16 lg:py-28">
      <div className="mx-auto max-w-[1200px] px-4 md:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Customization"
          title="Fully dynamic, customized to your requirements"
          description="Shape DialProx and your call flows around how your business actually works."
        />

        <div className="grid gap-6 md:grid-cols-3">
          {items.map(({ id, title, description, icon: Icon }) => (
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

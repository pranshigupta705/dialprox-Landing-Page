import { GitBranch, RefreshCw, SlidersHorizontal, type LucideIcon } from 'lucide-react';
import DialPad from '@/features/dialpad/DialPad';

interface Item {
  title: string;
  description: string;
  icon: LucideIcon;
}

const items: Item[] = [
  {
    title: 'Fully dynamic',
    description:
      'Everything adapts as your business changes. Update greetings, answers, and rules whenever you need to, without starting over.',
    icon: RefreshCw,
  },
  {
    title: 'Customizable call flows',
    description:
      'Design each call flow step by step: what the agent asks, when it checks an account, and when it hands the call to a person.',
    icon: GitBranch,
  },
  {
    title: 'Built around your requirements',
    description:
      'Tell us how your team works. Languages, hours, routing, and responses are tailored to match.',
    icon: SlidersHorizontal,
  },
];

export default function Customization() {
  return (
    <section id="customization" className="scroll-mt-20 py-16 lg:py-28">
      <div className="mx-auto max-w-[1200px] px-4 md:px-6 lg:px-8">
        <div className="mx-auto mb-12 grid max-w-2xl justify-items-center gap-3 text-center">
          <span className="rounded-full bg-[var(--color-primary-soft)] px-3 py-1 text-sm font-semibold text-[var(--color-primary)]">
            Customization
          </span>
          <h2>Fully dynamic, customized to your requirements</h2>
          <p className="text-[var(--color-text-muted)]">
            Shape DialProX and your call flows around how your business actually works.
          </p>
        </div>

        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <DialPad />

          <div className="grid gap-4">
            {items.map(({ title, description, icon: Icon }) => (
              <article
                key={title}
                className="flex gap-4 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-5 shadow-sm transition-all motion-safe:hover:-translate-y-0.5 hover:shadow-md"
              >
                <div className="grid h-11 w-11 flex-none place-items-center rounded-xl bg-[var(--color-primary-soft)] text-[var(--color-primary)]">
                  <Icon size={22} aria-hidden="true" />
                </div>
                <div>
                  <h3>{title}</h3>
                  <p className="mt-1.5 text-sm text-[var(--color-text-muted)]">{description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

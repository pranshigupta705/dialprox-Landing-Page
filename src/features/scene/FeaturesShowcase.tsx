import { useState } from 'react';
import {
  Activity,
  Check,
  Phone,
  PhoneIncoming,
  PhoneOutgoing,
  Route,
  Users,
  type LucideIcon,
} from 'lucide-react';
import AgentIllustration from '@/features/scene/AgentIllustration';

type Focus = 'calls' | 'followups' | 'reports';

interface Feature {
  id: string;
  title: string;
  description: string;
  points: string[];
  icon: LucideIcon;
  tags: Focus[];
}

const features: Feature[] = [
  {
    id: 'inbound',
    title: 'Inbound calling',
    description: 'Answer instantly. Callers get a real answer, not a hold message.',
    points: ['Customer card on every call', 'Notes saved to the record', 'Transfer with a full summary'],
    icon: PhoneIncoming,
    tags: ['calls', 'followups'],
  },
  {
    id: 'outbound',
    title: 'Outbound calling',
    description: 'Work through call lists and follow-ups at scale.',
    points: ['Click to dial from the CRM', 'Reminders and call-backs', 'Retry unanswered calls'],
    icon: PhoneOutgoing,
    tags: ['calls', 'followups'],
  },
  {
    id: 'routing',
    title: 'Call routing',
    description: 'Send each caller to the right person or team.',
    points: ['Rules by topic and hours', 'Language-based routing', 'Fallback when no one is free'],
    icon: Route,
    tags: ['calls'],
  },
  {
    id: 'agents',
    title: 'Agent management',
    description: 'Keep your people organised and supported.',
    points: ['Status and working hours', 'Role-based permissions', 'Recordings and coaching notes'],
    icon: Users,
    tags: ['reports'],
  },
];

const chips: { key: Focus; label: string; Icon: LucideIcon; text: string }[] = [
  {
    key: 'calls',
    label: 'Call handling',
    Icon: Phone,
    text: 'Calls ring in, get routed to the right person, and open with the customer record on screen.',
  },
  {
    key: 'followups',
    label: 'Customer follow-ups',
    Icon: Users,
    text: 'Notes, reminders and call-backs keep every customer conversation moving.',
  },
  {
    key: 'reports',
    label: 'Live reports',
    Icon: Activity,
    text: 'Live numbers on calls, agents and outcomes, as they happen.',
  },
];

export default function FeaturesShowcase() {
  const [active, setActive] = useState<Focus | null>(null);
  const caption =
    chips.find((c) => c.key === active)?.text ??
    'Select a feature to see it light up in the scene and the cards.';

  return (
    <section
      id="calling"
      className="scroll-mt-20 bg-gradient-to-b from-[var(--color-primary-soft)] to-[var(--color-background)] py-16 lg:py-24"
    >
      <div className="mx-auto max-w-[1200px] px-4 md:px-6 lg:px-8">
        <div className="mx-auto mb-12 grid max-w-2xl justify-items-center gap-3 text-center">
          <span className="rounded-full bg-[var(--color-primary-soft)] px-3 py-1 text-sm font-semibold text-[var(--color-primary)]">
            Calling features
          </span>
          <h2>Every call. Every customer. One place.</h2>
          <p className="text-[var(--color-text-muted)]">
            Answer calls, follow up and track your day from one dashboard.
          </p>
        </div>

        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div>
            <AgentIllustration focus={active} />

            <div role="group" aria-label="Choose a feature to highlight" className="mt-6 flex flex-wrap justify-center gap-3">
              {chips.map(({ key, label, Icon }) => {
                const on = active === key;
                return (
                  <button
                    key={key}
                    type="button"
                    aria-pressed={on}
                    onClick={() => setActive(on ? null : key)}
                    className={`inline-flex min-h-11 items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium shadow-sm transition-colors ${
                      on
                        ? 'border-[var(--color-primary-hover)] bg-[var(--color-primary-hover)] text-white'
                        : 'border-[var(--color-border)] bg-[var(--color-surface)] hover:border-[var(--color-primary)]'
                    }`}
                  >
                    <Icon
                      size={16}
                      aria-hidden="true"
                      className={on ? 'text-white' : 'text-[var(--color-primary)]'}
                    />
                    {label}
                  </button>
                );
              })}
            </div>

            <p
              aria-live="polite"
              className="mx-auto mt-4 min-h-12 max-w-md text-center text-sm text-[var(--color-text-muted)]"
            >
              {caption}
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {features.map(({ id, title, description, points, icon: Icon, tags }) => {
              const on = !active || tags.includes(active);
              const picked = active !== null && on;
              return (
                <article
                  key={id}
                  className={`rounded-2xl border bg-[var(--color-surface)] p-5 shadow-sm transition-all duration-300 motion-safe:hover:-translate-y-0.5 hover:shadow-md ${
                    picked
                      ? 'border-[var(--color-primary)] ring-2 ring-[var(--color-primary)]'
                      : 'border-[var(--color-border)]'
                  } ${on ? '' : 'opacity-40'}`}
                >
                  <div className="mb-3 grid h-10 w-10 place-items-center rounded-xl bg-[var(--color-primary-soft)] text-[var(--color-primary)]">
                    <Icon size={20} aria-hidden="true" />
                  </div>
                  <h3>{title}</h3>
                  <p className="mt-1.5 text-sm text-[var(--color-text-muted)]">{description}</p>
                  <ul className="mt-3 grid gap-1.5">
                    {points.map((point) => (
                      <li key={point} className="flex items-start gap-2 text-sm">
                        <Check
                          size={14}
                          aria-hidden="true"
                          className="mt-1 flex-none text-[var(--color-accent)]"
                        />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

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

interface Feature {
  id: string;
  title: string;
  description: string;
  points: string[];
  icon: LucideIcon;
}

const features: Feature[] = [
  {
    id: 'inbound',
    title: 'Inbound calling',
    description: 'Answer instantly. Callers get a real answer, not a hold message.',
    points: ['Customer card on every call', 'Notes saved to the record', 'Transfer with a full summary'],
    icon: PhoneIncoming,
  },
  {
    id: 'outbound',
    title: 'Outbound calling',
    description: 'Work through call lists and follow-ups at scale.',
    points: ['Click to dial from the CRM', 'Reminders and call-backs', 'Retry unanswered calls'],
    icon: PhoneOutgoing,
  },
  {
    id: 'routing',
    title: 'Call routing',
    description: 'Send each caller to the right person or team.',
    points: ['Rules by topic and hours', 'Language-based routing', 'Fallback when no one is free'],
    icon: Route,
  },
  {
    id: 'agents',
    title: 'Agent management',
    description: 'Keep your people organised and supported.',
    points: ['Status and working hours', 'Role-based permissions', 'Recordings and coaching notes'],
    icon: Users,
  },
];

const chips = [
  { label: 'Call handling', Icon: Phone },
  { label: 'Customer follow-ups', Icon: Users },
  { label: 'Live reports', Icon: Activity },
];

export default function FeaturesShowcase() {
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
            <AgentIllustration />
            <ul className="mt-6 flex flex-wrap justify-center gap-3">
              {chips.map(({ label, Icon }) => (
                <li
                  key={label}
                  className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-2 text-sm font-medium shadow-sm"
                >
                  <Icon size={16} aria-hidden="true" className="text-[var(--color-primary)]" />
                  {label}
                </li>
              ))}
            </ul>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {features.map(({ id, title, description, points, icon: Icon }) => (
              <article
                key={id}
                className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-5 shadow-sm transition-all motion-safe:hover:-translate-y-0.5 hover:shadow-md"
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
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

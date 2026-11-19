import { Mic } from 'lucide-react';
import DashboardPreview from './DashboardPreview';

const companies = ['Northwind', 'Lumora', 'Brightpay', 'Kestrel', 'Oakline'];

export default function Hero() {
  return (
    <section className="bg-[radial-gradient(900px_400px_at_80%_-10%,color-mix(in_srgb,var(--color-primary)_14%,transparent),transparent)] py-12 lg:py-24">
      <div className="mx-auto max-w-[1200px] px-4 md:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <span className="inline-block rounded-full bg-[var(--color-primary-soft)] px-3 py-1 text-sm font-semibold text-[var(--color-primary)]">
              AI voice agents + human teams
            </span>
            <h1 className="mt-4 tracking-tight">
              Answer every call. Resolve most of them without a queue.
            </h1>
            <p className="mt-4 text-lg text-[var(--color-text-muted)]">
              DialProX handles inbound and outbound calls with voice agents that know your business, then passes the hard ones to your team with the full conversation attached.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#contact"
                className="inline-flex h-12 items-center gap-2 rounded-xl bg-[var(--color-primary)] px-6 font-semibold text-white hover:bg-[var(--color-primary-hover)]"
              >
                <Mic size={20} aria-hidden="true" /> Talk to a live agent
              </a>
              <a
                href="#workflow"
                className="inline-flex h-12 items-center rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] px-6 font-semibold"
              >
                See how it works
              </a>
            </div>
            <p className="mt-4 text-sm text-[var(--color-text-muted)]">
              Free 14-day trial. No credit card needed.
            </p>
          </div>
          <DashboardPreview />
        </div>

        <div className="mt-14 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 font-semibold text-[var(--color-text-muted)]">
          <span className="text-sm font-medium">Trusted by</span>
          {companies.map((c) => (
            <span key={c}>{c}</span>
          ))}
        </div>
      </div>
    </section>
  );
}


import { Mic } from 'lucide-react';

const kpis = [
  { label: 'Calls today', value: '1,284', delta: '+12%' },
  { label: 'Resolved by AI', value: '71%', delta: '+6%' },
  { label: 'Average wait', value: '4s', delta: '−38s' },
];

const rows = [
  { name: 'Refund status', status: 'Resolved' },
  { name: 'Billing dispute', status: 'Handoff to Sam' },
  { name: 'Delivery reschedule', status: 'Resolved' },
];

export default function DashboardPreview() {
  return (
    <div
      role="img"
      aria-label="DialProx dashboard preview showing a live call, key metrics, and recent calls"
      className="animate-fade-in rounded-2xl border border-white/20 bg-dark-section p-4 text-white shadow-xl"
    >
      <div aria-hidden="true" className="mb-3 flex gap-1.5">
        {[0, 1, 2].map((i) => (
          <b key={i} className="h-2.5 w-2.5 rounded-full bg-[#8c8c8c]" />
        ))}
      </div>

      <div aria-hidden="true" className="flex items-center gap-3 rounded-xl border border-white/20 bg-white/10 p-3">
        <span className="relative grid h-12 w-12 flex-none place-items-center rounded-full bg-[var(--color-accent)] text-white">
          <Mic size={22} />
          <span className="pulse-ring absolute inset-0 rounded-full border-2 border-[var(--color-accent)]" />
        </span>
        <div className="min-w-0">
          <strong className="block text-white">Live call: Order #4821</strong>
          <small className="text-white/70">Agent Maya · 02:14</small>
        </div>
        <div className="ml-auto flex h-8 items-center gap-[3px]">
          {Array.from({ length: 9 }).map((_, i) => (
            <i
              key={i}
              className="wave-bar w-[3px] rounded-sm bg-[var(--color-accent)]"
              style={{ animationDelay: `${(i % 3) * 0.25}s` }}
            />
          ))}
        </div>
      </div>

      <div aria-hidden="true" className="my-3 grid grid-cols-3 gap-2">
        {kpis.map((k) => (
          <div key={k.label} className="rounded-xl border border-white/20 bg-white/10 p-2.5">
            <small className="text-xs text-white/70">{k.label}</small>
            <b className="block text-xl text-white">{k.value}</b>
            <em className="text-xs not-italic text-[var(--color-primary)]">{k.delta}</em>
          </div>
        ))}
      </div>

      <div aria-hidden="true" className="grid gap-1.5">
        {rows.map((r) => (
          <div
            key={r.name}
            className="flex justify-between gap-2 rounded-[10px] border border-white/20 bg-white/10 px-3 py-2 text-sm"
          >
            <span>{r.name}</span>
            <span
              className={
                r.status === 'Resolved'
                  ? 'font-semibold text-[var(--color-primary)]'
                  : 'font-semibold text-[var(--color-accent)]'
              }
            >
              {r.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

import SectionHeading from './SectionHeading';
import { weeklyCalls } from './data';

const WIDTH = 520;
const HEIGHT = 240;
const PAD_LEFT = 36;
const PAD_RIGHT = 8;
const PAD_TOP = 12;
const PAD_BOTTOM = 28;
const MAX = 200;
const TICKS = [0, 50, 100, 150, 200];

const plotWidth = WIDTH - PAD_LEFT - PAD_RIGHT;
const plotHeight = HEIGHT - PAD_TOP - PAD_BOTTOM;
const slot = plotWidth / weeklyCalls.length;
const barWidth = Math.min(36, slot * 0.6);

const yFor = (value: number) => PAD_TOP + plotHeight - (value / MAX) * plotHeight;

export default function Analytics() {
  const resolved = weeklyCalls.reduce((sum, d) => sum + d.resolved, 0);
  const transferred = weeklyCalls.reduce((sum, d) => sum + d.transferred, 0);
  const total = resolved + transferred;
  const resolvedRate = Math.round((resolved / total) * 100);

  const stats = [
    { label: 'Calls this week', value: total.toLocaleString() },
    { label: 'Resolved without a transfer', value: `${resolvedRate}%` },
    { label: 'Average answer time', value: '4 sec' },
  ];

  return (
    <section id="analytics" className="scroll-mt-20 bg-background-alt py-16 lg:py-28">
      <div className="mx-auto grid max-w-[1200px] items-center gap-10 px-4 md:px-6 lg:grid-cols-[1fr_1.2fr] lg:gap-14 lg:px-8">
        <div className="grid gap-8">
          <SectionHeading
            align="left"
            eyebrow="Analytics"
            title="See what every call is telling you"
            description="Track volume, outcomes, and answer times in real time, and spot what to improve next."
          />
          <dl className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-4"
              >
                <dd className="text-2xl font-bold text-[var(--color-primary)]">{stat.value}</dd>
                <dt className="mt-1 text-sm text-[var(--color-text-muted)]">{stat.label}</dt>
              </div>
            ))}
          </dl>
        </div>

        <figure className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-4 shadow-sm md:p-6">
          <figcaption className="mb-4 flex flex-wrap items-center justify-between gap-3">
            <span className="font-semibold">Calls handled, last 7 days</span>
            <span className="flex items-center gap-4 text-sm text-[var(--color-text-muted)]">
              <span className="flex items-center gap-1.5">
                <span
                  aria-hidden="true"
                  className="h-2.5 w-2.5 rounded-sm"
                  style={{ background: 'var(--color-primary)' }}
                />
                Resolved
              </span>
              <span className="flex items-center gap-1.5">
                <span
                  aria-hidden="true"
                  className="h-2.5 w-2.5 rounded-sm"
                  style={{ background: 'var(--color-accent)' }}
                />
                Transferred
              </span>
            </span>
          </figcaption>

          <svg
            viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
            role="img"
            aria-labelledby="calls-chart-title calls-chart-desc"
            className="h-auto w-full"
          >
            <title id="calls-chart-title">Calls handled per day, last 7 days</title>
            <desc id="calls-chart-desc">
              Stacked bar chart of calls resolved by the agent and calls transferred to a person,
              for each day of the week.
            </desc>

            {TICKS.map((tick) => (
              <g key={tick}>
                <line
                  x1={PAD_LEFT}
                  x2={WIDTH - PAD_RIGHT}
                  y1={yFor(tick)}
                  y2={yFor(tick)}
                  strokeWidth={1}
                  style={{ stroke: 'var(--color-border)' }}
                />
                <text
                  x={PAD_LEFT - 8}
                  y={yFor(tick) + 4}
                  textAnchor="end"
                  fontSize={11}
                  style={{ fill: 'var(--color-text-muted)' }}
                >
                  {tick}
                </text>
              </g>
            ))}

            {weeklyCalls.map((d, i) => {
              const x = PAD_LEFT + slot * i + (slot - barWidth) / 2;
              const resolvedHeight = (d.resolved / MAX) * plotHeight;
              const transferredHeight = (d.transferred / MAX) * plotHeight;
              const baseY = PAD_TOP + plotHeight;

              return (
                <g key={d.day}>
                  <rect
                    x={x}
                    y={baseY - resolvedHeight}
                    width={barWidth}
                    height={resolvedHeight}
                    rx={2}
                    style={{ fill: 'var(--color-primary)' }}
                  />
                  <rect
                    x={x}
                    y={baseY - resolvedHeight - transferredHeight}
                    width={barWidth}
                    height={transferredHeight}
                    rx={2}
                    style={{ fill: 'var(--color-accent)' }}
                  />
                  <text
                    x={x + barWidth / 2}
                    y={HEIGHT - 8}
                    textAnchor="middle"
                    fontSize={11}
                    style={{ fill: 'var(--color-text-muted)' }}
                  >
                    {d.day}
                  </text>
                </g>
              );
            })}
          </svg>

          <table className="sr-only">
            <caption>Calls handled per day, last 7 days</caption>
            <thead>
              <tr>
                <th scope="col">Day</th>
                <th scope="col">Resolved</th>
                <th scope="col">Transferred</th>
              </tr>
            </thead>
            <tbody>
              {weeklyCalls.map((d) => (
                <tr key={d.day}>
                  <th scope="row">{d.day}</th>
                  <td>{d.resolved}</td>
                  <td>{d.transferred}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </figure>
      </div>
    </section>
  );
}

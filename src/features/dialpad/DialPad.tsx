import { useEffect, useRef, useState } from 'react';
import { Phone, PhoneOff } from 'lucide-react';

type Phase = 'typing' | 'calling' | 'connected';

const DIGITS = '9876543210';
const CONTACT = 'Priya Sharma';

const KEYS = [
  { d: '1', l: '' }, { d: '2', l: 'ABC' }, { d: '3', l: 'DEF' },
  { d: '4', l: 'GHI' }, { d: '5', l: 'JKL' }, { d: '6', l: 'MNO' },
  { d: '7', l: 'PQRS' }, { d: '8', l: 'TUV' }, { d: '9', l: 'WXYZ' },
  { d: '*', l: '' }, { d: '0', l: '+' }, { d: '#', l: '' },
];

const prefersReducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const formatTime = (s: number) =>
  `${String(Math.floor(s / 60)).padStart(2, '0')}:${String(s % 60).padStart(2, '0')}`;

export default function DialPad() {
  const ref = useRef<HTMLDivElement>(null);
  const [reduced] = useState(prefersReducedMotion);
  const [visible, setVisible] = useState(false);
  const [phase, setPhase] = useState<Phase>(reduced ? 'connected' : 'typing');
  const [count, setCount] = useState(reduced ? DIGITS.length : 0);
  const [secs, setSecs] = useState(reduced ? 134 : 0);

  // Start only when the phone is on screen.
  useEffect(() => {
    const el = ref.current;
    if (!el || reduced) return;
    const obs = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), {
      threshold: 0.35,
    });
    obs.observe(el);
    return () => obs.disconnect();
  }, [reduced]);

  // Phase sequencing.
  useEffect(() => {
    if (reduced || !visible) return;
    const delay =
      phase === 'typing' ? (count === 0 ? 900 : count === DIGITS.length ? 700 : 420)
      : phase === 'calling' ? 2600
      : 5000;
    const id = window.setTimeout(() => {
      if (phase === 'typing') {
        if (count < DIGITS.length) setCount((c) => c + 1);
        else setPhase('calling');
      } else if (phase === 'calling') {
        setPhase('connected');
      } else {
        setCount(0);
        setSecs(0);
        setPhase('typing');
      }
    }, delay);
    return () => window.clearTimeout(id);
  }, [phase, count, reduced, visible]);

  // Call timer.
  useEffect(() => {
    if (reduced || !visible || phase !== 'connected') return;
    const id = window.setInterval(() => setSecs((s) => s + 1), 1000);
    return () => window.clearInterval(id);
  }, [phase, reduced, visible]);

  const shown = DIGITS.slice(0, count);
  const display = shown.length > 5 ? `${shown.slice(0, 5)} ${shown.slice(5)}` : shown;
  const active = phase === 'typing' && count > 0 ? DIGITS[count - 1] : null;
  const status =
    phase === 'typing' ? 'Dial a number' : phase === 'calling' ? 'Calling…' : `Connected · ${formatTime(secs)}`;

  return (
    <div ref={ref} className="flex justify-center">
      <div
        role="img"
        aria-label="Animated demo of a number being dialed, the call ringing, and then connecting"
        className="w-full max-w-[320px] rounded-[2.5rem] border border-[var(--color-border)] bg-[var(--color-surface)] p-4 shadow-[var(--shadow-md)]"
      >
        <div className="rounded-[1.75rem] bg-[var(--color-dark-section)] px-5 py-6 text-center text-white">
          <p className="flex min-h-5 items-center justify-center gap-2 text-xs text-[var(--color-primary-soft)]">
            {phase === 'connected' && <span className="h-2 w-2 rounded-full bg-[var(--color-accent)]" />}
            {status}
          </p>
          <p className="mt-2 flex min-h-10 items-center justify-center text-3xl font-semibold tracking-wider tabular-nums">
            {display}
            {phase === 'typing' && <span className="dial-caret" />}
          </p>
          <p className="mt-1 min-h-5 text-sm text-[var(--color-primary-soft)]">
            {phase === 'typing' ? '' : CONTACT}
          </p>
          <div className="mt-2 flex h-6 items-end justify-center gap-1">
            {phase === 'connected' &&
              Array.from({ length: 7 }).map((_, i) => <i key={i} className="dial-wave-bar" />)}
          </div>
        </div>

        <div className="mt-5 grid grid-cols-3 place-items-center gap-3">
          {KEYS.map(({ d, l }) => (
            <div key={d} className={`dial-key ${active === d ? 'dial-key-pressed' : ''}`}>
              <span className="text-xl font-semibold leading-none">{d}</span>
              <small>{l}</small>
            </div>
          ))}
        </div>

        <div className="relative mx-auto mt-5 h-16 w-16">
          {phase === 'calling' && (
            <>
              <span className="dial-ring" />
              <span className="dial-ring dial-ring-delay" />
            </>
          )}
          <span
            className={`absolute inset-0 grid place-items-center rounded-full text-white transition-colors duration-300 ${
              phase === 'connected' ? 'bg-[var(--color-danger)]' : 'bg-[var(--color-primary-hover)]'
            }`}
          >
            <span className={phase === 'calling' ? 'dial-wiggle' : ''}>
              {phase === 'connected' ? <PhoneOff size={26} /> : <Phone size={26} />}
            </span>
          </span>
        </div>
      </div>
    </div>
  );
}

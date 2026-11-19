const c = {
  primary: 'var(--color-primary)',
  hover: 'var(--color-primary-hover)',
  soft: 'var(--color-primary-soft)',
  accent: 'var(--color-accent)',
  dark: 'var(--color-dark-section)',
  muted: 'var(--color-text-muted)',
  surface: 'var(--color-surface)',
  danger: 'var(--color-danger)',
};

const PHONE_PATH =
  'M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z';

export default function AgentIllustration() {
  return (
<svg
          viewBox="0 0 600 380"
          role="img"
          aria-label="An agent with a headset working at a desk, with a monitor showing charts, chat bubbles, a clock and a ringing phone"
          className="scn-in h-auto w-full"
        >
          {/* backdrop */}
          <circle cx="310" cy="215" r="150" fill={c.soft} fillOpacity="0.9" />
          <path d="M168 78 Q300 37 470 96" fill="none" stroke={c.primary} strokeWidth="2" strokeDasharray="4 6" className="scn-orbit" />

          {/* typing bubble */}
          <g className="scn-float">
            <polygon points="60,158 48,180 84,160" fill={c.surface} stroke={c.primary} strokeOpacity="0.35" strokeWidth="2" />
            <rect x="40" y="105" width="104" height="58" rx="20" fill={c.surface} stroke={c.primary} strokeOpacity="0.35" strokeWidth="2" />
            {[72, 92, 112].map((x, i) => (
              <circle key={x} cx={x} cy="134" r="5" fill={c.primary} className="scn-dot" style={{ animationDelay: `${i * 0.18}s` }} />
            ))}
          </g>

          {/* blue chat bubble */}
          <g className="scn-float" style={{ animationDelay: '-1.5s' }}>
            <polygon points="208,90 226,90 226,106" fill={c.primary} />
            <rect x="168" y="50" width="74" height="42" rx="10" fill={c.primary} />
            <rect x="182" y="63" width="46" height="5" rx="2.5" fill="#fff" />
            <rect x="182" y="74" width="30" height="5" rx="2.5" fill="#fff" />
          </g>

          {/* clock */}
          <g className="scn-float" style={{ animationDelay: '-3s' }}>
            <circle cx="330" cy="70" r="24" fill={c.surface} stroke={c.primary} strokeWidth="3" />
            <line x1="330" y1="70" x2="330" y2="58" stroke={c.dark} strokeWidth="3" strokeLinecap="round" className="scn-hr" />
            <line x1="330" y1="70" x2="330" y2="53" stroke={c.primary} strokeWidth="3" strokeLinecap="round" className="scn-min" />
            <circle cx="330" cy="70" r="2.5" fill={c.dark} />
          </g>

          {/* ringing phone */}
          <g className="scn-float" style={{ animationDelay: '-2s' }}>
            <circle cx="470" cy="110" r="26" fill="none" stroke={c.primary} strokeWidth="2" className="scn-pulse" />
            <circle cx="470" cy="110" r="26" fill={c.surface} stroke={c.primary} strokeWidth="3" />
            <g className="scn-ringwig">
              <g transform="translate(458 98) scale(0.5)">
                <path d={PHONE_PATH} fill="none" stroke={c.primary} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
              </g>
            </g>
            <circle cx="490" cy="90" r="10" fill={c.danger} className="scn-badge" />
            <text x="490" y="94" textAnchor="middle" fontSize="11" fontWeight="700" fill="#fff">3</text>
          </g>

          {/* floor */}
          <line x1="70" y1="332" x2="560" y2="332" stroke={c.primary} strokeOpacity="0.4" strokeWidth="3" strokeLinecap="round" />
          <line x1="130" y1="346" x2="260" y2="346" stroke={c.primary} strokeOpacity="0.2" strokeWidth="2" strokeLinecap="round" />
          <line x1="300" y1="346" x2="420" y2="346" stroke={c.primary} strokeOpacity="0.2" strokeWidth="2" strokeLinecap="round" />

          {/* plant */}
          <g className="scn-sway">
            <line x1="513" y1="300" x2="505" y2="284" stroke={c.primary} strokeWidth="2" />
            <line x1="513" y1="300" x2="522" y2="280" stroke={c.primary} strokeWidth="2" />
            <ellipse cx="504" cy="272" rx="7" ry="18" transform="rotate(-20 504 272)" fill={c.primary} />
            <ellipse cx="524" cy="262" rx="8" ry="22" transform="rotate(18 524 262)" fill={c.hover} />
          </g>
          <path d="M496 300 H530 L524 330 H502 Z" fill={c.accent} />

          {/* cabinet and desk leg */}
          <rect x="455" y="256" width="6" height="72" fill={c.primary} />
          <rect x="395" y="258" width="52" height="68" rx="4" fill={c.surface} stroke={c.primary} strokeOpacity="0.4" strokeWidth="2" />
          <line x1="395" y1="292" x2="447" y2="292" stroke={c.primary} strokeOpacity="0.4" strokeWidth="2" />
          <rect x="412" y="272" width="18" height="3" rx="1.5" fill={c.primary} />
          <rect x="412" y="306" width="18" height="3" rx="1.5" fill={c.primary} />

          {/* chair */}
          <rect x="118" y="185" width="12" height="68" rx="6" fill={c.accent} />
          <rect x="118" y="250" width="66" height="10" rx="5" fill={c.accent} />
          <rect x="148" y="260" width="5" height="52" fill={c.muted} />
          <path d="M118 314 H184" stroke={c.muted} strokeWidth="4" strokeLinecap="round" />
          {[118, 151, 184].map((x) => (
            <circle key={x} cx={x} cy="322" r="4" fill={c.dark} />
          ))}

          {/* legs and shoe */}
          <path d="M158 254 H236 L244 316" fill="none" stroke={c.dark} strokeWidth="16" strokeLinecap="round" strokeLinejoin="round" />
          <ellipse cx="252" cy="322" rx="15" ry="6" fill={c.dark} />

          {/* torso */}
          <path d="M140 205 Q142 170 175 168 Q205 170 212 205 L218 252 L142 252 Z" fill={c.primary} />

          {/* head and headset */}
          <g className="scn-head">
            <circle cx="178" cy="143" r="20" fill={c.accent} fillOpacity="0.35" />
            <path d="M158 140 Q160 118 180 120 Q198 122 198 140 Q188 130 170 134 Z" fill={c.dark} />
            <path d="M160 140 Q158 120 178 118" fill="none" stroke={c.dark} strokeWidth="3" strokeLinecap="round" />
            <circle cx="160" cy="145" r="6" fill={c.hover} />
            <path d="M160 150 Q162 166 182 163" fill="none" stroke={c.dark} strokeWidth="2" strokeLinecap="round" />
            <circle cx="183" cy="163" r="3" fill={c.dark} />
            {[0, 1, 2].map((i) => (
              <path
                key={i}
                d={`M${206 + i * 8} 140 q${6 + i * 2} 7 0 14`}
                fill="none"
                stroke={c.primary}
                strokeWidth="2"
                strokeLinecap="round"
                className="scn-wave"
                style={{ animationDelay: `${i * 0.25}s` }}
              />
            ))}
          </g>

          {/* desk top */}
          <rect x="215" y="246" width="250" height="10" rx="3" fill={c.dark} />

          {/* monitor */}
          <rect x="328" y="236" width="14" height="10" fill={c.dark} />
          <rect x="255" y="140" width="160" height="96" rx="6" fill={c.surface} stroke={c.dark} strokeWidth="6" />
          <rect x="270" y="152" width="40" height="4" rx="2" fill={c.primary} fillOpacity="0.35" />
          {[
            { x: 272, h: 28, d: '0s' },
            { x: 296, h: 40, d: '0.15s' },
            { x: 320, h: 22, d: '0.3s' },
          ].map(({ x, h, d }) => (
            <rect key={x} x={x} y={212 - h} width="16" height={h} rx="2" fill={c.primary} className="scn-bar" style={{ animationDelay: d }} />
          ))}
          <circle cx="372" cy="188" r="18" fill="none" stroke={c.soft} strokeWidth="8" />
          <circle
            cx="372"
            cy="188"
            r="18"
            fill="none"
            stroke={c.primary}
            strokeWidth="8"
            strokeLinecap="round"
            strokeDasharray="113"
            transform="rotate(-90 372 188)"
            className="scn-donut"
          />
          <rect x="350" y="214" width="42" height="3" rx="1.5" fill={c.muted} fillOpacity="0.5" />
          <rect x="350" y="221" width="28" height="3" rx="1.5" fill={c.muted} fillOpacity="0.5" />

          {/* keyboard, arm and hand */}
          <rect x="236" y="240" width="44" height="6" rx="2" fill={c.surface} stroke={c.muted} strokeOpacity="0.6" />
          <g className="scn-arm">
            <path d="M190 195 L240 238" stroke={c.primary} strokeWidth="14" strokeLinecap="round" fill="none" />
            <circle cx="246" cy="241" r="6" fill={c.accent} fillOpacity="0.35" />
          </g>
        </svg>
  );
}

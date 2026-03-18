import React, { useState } from 'react';

const steps = [
  { num: '01', icon: '📥', color: '#6c63ff', title: 'Paste Your Script', desc: 'Send your video script, scene descriptions, and screenshots via a simple POST request to your n8n webhook URL.' },
  { num: '02', icon: '👁️', color: '#22d3ee', title: 'Claude Analyses Vision', desc: 'Claude Vision reads every screenshot — identifying characters, environments, visual style, lighting, and mood.' },
  { num: '03', icon: '📌', color: '#f43f7a', title: 'Pinterest Style Pulled', desc: 'Your Pinterest board is scraped for dominant colors, typography choices, and animation aesthetic references.' },
  { num: '04', icon: '🎭', color: '#f59e0b', title: 'Emotion Arc Mapped', desc: 'Claude maps each scene to an emotion — calm, tension, joy, triumph — building a full narrative arc.' },
  { num: '05', icon: '🎵', color: '#10b981', title: 'Free Music Matched', desc: 'YouTube Audio Library is searched per emotion. You get 5 free, no-copyright tracks per scene automatically.' },
  { num: '06', icon: '🎨', color: '#a855f7', title: 'Figma Storyboard Built', desc: 'All data compiles into a Figma-ready JSON with frames, motion arrows, typography specs, face guides, and color palettes.' },
];

export default function HowItWorks() {
  const [active, setActive] = useState(0);

  const s = {
    section: { padding: '100px 0', background: 'var(--bg)' },
    inner: { maxWidth: 1100, margin: '0 auto', padding: '0 24px' },
    header: { textAlign: 'center', marginBottom: 64 },
    tag: {
      display: 'inline-block', fontFamily: 'var(--mono)', fontSize: 10,
      letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--a1)',
      border: '1px solid rgba(108,99,255,0.3)', padding: '4px 14px',
      borderRadius: 100, marginBottom: 20,
    },
    h2: { fontFamily: 'var(--serif)', fontSize: 'clamp(32px,4vw,52px)', fontStyle: 'italic', color: '#fff', marginBottom: 16 },
    sub: { fontSize: 15, color: 'var(--text2)', maxWidth: 480, margin: '0 auto' },
    grid: { display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 16 },
    card: (i) => ({
      background: active === i ? 'var(--card2)' : 'var(--card)',
      border: `1px solid ${active === i ? steps[i].color : 'var(--border)'}`,
      borderRadius: 16, padding: '24px 22px', cursor: 'pointer',
      transition: 'all 0.25s ease',
      boxShadow: active === i ? `0 0 32px ${steps[i].color}22` : 'none',
      transform: active === i ? 'translateY(-4px)' : 'none',
    }),
    cardTop: { display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 14 },
    ico: (c) => ({
      width: 44, height: 44, borderRadius: 12, fontSize: 20,
      background: `${c}18`, border: `1px solid ${c}33`,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
    }),
    num: (c) => ({ fontFamily: 'var(--mono)', fontSize: 11, color: c, letterSpacing: '0.1em' }),
    title: { fontSize: 15, fontWeight: 700, marginBottom: 8, color: '#fff' },
    desc: { fontSize: 13, color: 'var(--text2)', lineHeight: 1.6 },
    connector: {
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      margin: '20px 0', gap: 8,
    },
    connLine: { flex: 1, height: 1, background: 'var(--border)', maxWidth: 120 },
    connDot: { width: 6, height: 6, borderRadius: '50%', background: 'var(--border2)' },
  };

  return (
    <section id="howitworks" style={s.section}>
      <div style={s.inner}>
        <div style={s.header}>
          <div style={s.tag}>How It Works</div>
          <h2 style={s.h2}>Six steps from script<br />to storyboard</h2>
          <p style={s.sub}>The entire pipeline runs automatically inside n8n. Click each step to explore.</p>
        </div>
        <div style={s.grid}>
          {steps.map((st, i) => (
            <div key={i} style={s.card(i)} onClick={() => setActive(i)}>
              <div style={s.cardTop}>
                <div style={s.ico(st.color)}>{st.icon}</div>
                <span style={s.num(st.color)}>{st.num}</span>
              </div>
              <div style={s.title}>{st.title}</div>
              <div style={s.desc}>{st.desc}</div>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @media(max-width:900px){ #howitworks .hw-grid { grid-template-columns: repeat(2,1fr) !important; } }
        @media(max-width:560px){ #howitworks .hw-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}

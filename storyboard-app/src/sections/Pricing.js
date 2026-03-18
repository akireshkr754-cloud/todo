import React, { useState } from 'react';

const plans = [
  {
    name: 'Starter', price: { monthly: 0, yearly: 0 }, color: '#6c63ff',
    desc: 'Try the workflow for free',
    features: ['5 storyboards / month', 'Up to 6 scenes per video', 'Basic emotion analysis', '3 music suggestions / scene', 'JSON Figma export', 'Webhook delivery'],
    cta: 'Start Free', highlight: false,
  },
  {
    name: 'Pro', price: { monthly: 29, yearly: 19 }, color: '#a855f7',
    desc: 'For serious content creators',
    features: ['Unlimited storyboards', 'Up to 20 scenes per video', 'Advanced emotion arc AI', '10 music suggestions / scene', 'Pinterest style scraper', 'Priority Claude processing', 'Custom webhook URL', 'Figma auto-push API'],
    cta: 'Start Pro', highlight: true,
    badge: 'Most Popular',
  },
  {
    name: 'Agency', price: { monthly: 99, yearly: 69 }, color: '#22d3ee',
    desc: 'For studios and teams',
    features: ['Everything in Pro', 'Team workspace (10 seats)', 'White-label output', 'Custom n8n instance', 'API access + webhooks', 'Dedicated Claude credits', 'Priority support', 'SLA guarantee'],
    cta: 'Contact Sales', highlight: false,
  },
];

export default function Pricing() {
  const [yearly, setYearly] = useState(false);

  const s = {
    section: { padding: '100px 0', background: 'var(--surf)' },
    inner: { maxWidth: 1100, margin: '0 auto', padding: '0 24px' },
    header: { textAlign: 'center', marginBottom: 56 },
    tag: { display: 'inline-block', fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#a855f7', border: '1px solid rgba(168,85,247,0.3)', padding: '4px 14px', borderRadius: 100, marginBottom: 20 },
    h2: { fontFamily: 'var(--serif)', fontSize: 'clamp(30px,4vw,50px)', fontStyle: 'italic', color: '#fff', marginBottom: 16 },
    toggle: { display: 'inline-flex', alignItems: 'center', gap: 12, background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 100, padding: '6px 8px', marginBottom: 48 },
    toggleLabel: (active) => ({ fontFamily: 'var(--mono)', fontSize: 11, color: active ? '#fff' : 'var(--muted)', background: active ? '#6c63ff' : 'transparent', borderRadius: 100, padding: '6px 16px', cursor: 'pointer', transition: 'all 0.2s', letterSpacing: '0.06em' }),
    saveBadge: { background: '#10b98122', color: '#10b981', border: '1px solid #10b98133', borderRadius: 100, fontFamily: 'var(--mono)', fontSize: 9, padding: '3px 8px' },
    grid: { display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20 },
    card: (p) => ({
      background: p.highlight ? 'linear-gradient(180deg, rgba(168,85,247,0.08) 0%, var(--card) 100%)' : 'var(--card)',
      border: `1px solid ${p.highlight ? p.color : 'var(--border)'}`,
      borderRadius: 20, padding: '28px 24px', position: 'relative',
      boxShadow: p.highlight ? `0 0 48px ${p.color}18` : 'none',
      transition: 'transform 0.25s',
    }),
    popularBadge: (c) => ({ position: 'absolute', top: -12, left: '50%', transform: 'translateX(-50%)', background: c, color: '#fff', fontFamily: 'var(--mono)', fontSize: 9, padding: '4px 14px', borderRadius: 100, letterSpacing: '0.08em', whiteSpace: 'nowrap' }),
    planName: { fontSize: 13, fontWeight: 700, color: 'var(--text2)', marginBottom: 4, textTransform: 'uppercase', letterSpacing: '0.08em', fontFamily: 'var(--mono)' },
    price: { display: 'flex', alignItems: 'baseline', gap: 4, marginBottom: 4 },
    priceNum: { fontFamily: 'var(--serif)', fontSize: 52, color: '#fff', lineHeight: 1, fontStyle: 'italic' },
    priceSub: { fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--muted)' },
    desc: { fontSize: 13, color: 'var(--text2)', marginBottom: 24, lineHeight: 1.5 },
    divider: { height: 1, background: 'var(--border)', marginBottom: 20 },
    features: { listStyle: 'none', marginBottom: 28 },
    feature: { display: 'flex', alignItems: 'center', gap: 10, fontSize: 13, color: 'var(--text2)', marginBottom: 10 },
    check: (c) => ({ color: c, fontSize: 12, flexShrink: 0 }),
    cta: (p) => ({
      width: '100%', padding: '12px', borderRadius: 10, border: 'none',
      background: p.highlight ? `linear-gradient(135deg, ${p.color}, #6c63ff)` : 'var(--border2)',
      color: p.highlight ? '#fff' : 'var(--text2)', fontFamily: 'var(--sans)',
      fontSize: 14, fontWeight: 700, cursor: 'pointer', transition: 'opacity 0.2s',
    }),
  };

  return (
    <section id="pricing" style={s.section}>
      <div style={s.inner}>
        <div style={s.header}>
          <div style={s.tag}>Pricing</div>
          <h2 style={s.h2}>Simple pricing.<br />Powerful output.</h2>
          <div style={s.toggle}>
            <span style={s.toggleLabel(!yearly)} onClick={() => setYearly(false)}>Monthly</span>
            <span style={s.toggleLabel(yearly)} onClick={() => setYearly(true)}>Yearly</span>
            <span style={s.saveBadge}>Save 35%</span>
          </div>
        </div>
        <div style={s.grid} className="pricing-grid">
          {plans.map((p) => (
            <div key={p.name} style={s.card(p)}
              onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-4px)'}
              onMouseLeave={e => e.currentTarget.style.transform = 'none'}>
              {p.badge && <div style={s.popularBadge(p.color)}>{p.badge}</div>}
              <div style={s.planName}>{p.name}</div>
              <div style={s.price}>
                <span style={s.priceNum}>${yearly ? p.price.yearly : p.price.monthly}</span>
                <span style={s.priceSub}>/mo</span>
              </div>
              <p style={s.desc}>{p.desc}</p>
              <div style={s.divider} />
              <ul style={s.features}>
                {p.features.map(f => (
                  <li key={f} style={s.feature}><span style={s.check(p.color)}>✓</span>{f}</li>
                ))}
              </ul>
              <button style={s.cta(p)}
                onMouseEnter={e => e.currentTarget.style.opacity = '0.85'}
                onMouseLeave={e => e.currentTarget.style.opacity = '1'}>
                {p.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @media(max-width:900px){ .pricing-grid{ grid-template-columns:1fr !important; max-width:400px; margin:0 auto; } }
      `}</style>
    </section>
  );
}

import React, { useState } from 'react';

const emotions = [
  { id: 'calm', label: 'Calm', emoji: '😌', color: '#6c63ff', scene: 'Hook / Intro', bpm: '60–80', tracks: ['Lofi Study Beats – YT Audio Library', 'Soft Morning – Bensound', 'Peaceful Background – Pixabay', 'Gentle Breeze – Free Music Archive', 'Slow Drift – Incompetech'] },
  { id: 'excited', label: 'Excited', emoji: '⚡', color: '#f97316', scene: 'Build Up', bpm: '120–140', tracks: ['Upbeat Indie – NCS', 'Energy Flow – AudioLibrary', 'Drive Forward – Pixabay', 'Let\'s Go – Epidemic Sound Free', 'Power Up – Mixkit'] },
  { id: 'tense', label: 'Tense', emoji: '😬', color: '#ef4444', scene: 'Climax', bpm: '140–160', tracks: ['Cinematic Tension – Pixabay', 'Dark Build – NCS', 'Rising Stakes – Epidemic Sound', 'Edge of Night – Free Music Archive', 'Danger Zone – Incompetech'] },
  { id: 'vulnerable', label: 'Vulnerable', emoji: '💗', color: '#ec4899', scene: 'Emotion Peak', bpm: '55–75', tracks: ['Emotional Piano – Free Music Archive', 'Heartfelt Strings – Incompetech', 'Soft Tears – Bensound', 'Tender Moment – Mixkit', 'Fragile – YT Audio Library'] },
  { id: 'resolved', label: 'Resolved', emoji: '🌿', color: '#10b981', scene: 'Resolution', bpm: '70–90', tracks: ['Peaceful End – Mixkit', 'Morning Light – Bensound', 'Calm After Storm – Pixabay', 'Resolution – Kevin MacLeod', 'New Dawn – Incompetech'] },
  { id: 'confident', label: 'Confident', emoji: '🚀', color: '#f59e0b', scene: 'CTA / Outro', bpm: '110–130', tracks: ['Uplifting Corporate – AudioLibrary', 'Brand Sting – YT Library', 'Victory Lap – NCS', 'Motivated – Pixabay', 'Winning – Mixkit'] },
];

export default function EmotionMusic() {
  const [active, setActive] = useState(0);
  const em = emotions[active];

  const s = {
    section: { padding: '100px 0', background: 'var(--surf)' },
    inner: { maxWidth: 1100, margin: '0 auto', padding: '0 24px' },
    header: { textAlign: 'center', marginBottom: 56 },
    tag: { display: 'inline-block', fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#f59e0b', border: '1px solid rgba(245,158,11,0.3)', padding: '4px 14px', borderRadius: 100, marginBottom: 20 },
    h2: { fontFamily: 'var(--serif)', fontSize: 'clamp(30px,4vw,50px)', fontStyle: 'italic', color: '#fff', marginBottom: 12 },
    sub: { fontSize: 15, color: 'var(--text2)' },
    tabs: { display: 'flex', gap: 10, flexWrap: 'wrap', justifyContent: 'center', marginBottom: 40 },
    tab: (e, isA) => ({
      display: 'flex', alignItems: 'center', gap: 8,
      background: isA ? `${e.color}18` : 'var(--card)',
      border: `1px solid ${isA ? e.color : 'var(--border)'}`,
      borderRadius: 10, padding: '10px 18px', cursor: 'pointer',
      transition: 'all 0.2s', color: isA ? '#fff' : 'var(--text2)',
      fontSize: 13, fontWeight: isA ? 700 : 500,
    }),
    content: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 },
    card: { background: 'var(--card)', border: `1px solid ${em.color}33`, borderRadius: 16, padding: 28 },
    cardTitle: { fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '0.12em', textTransform: 'uppercase', color: em.color, marginBottom: 16 },
    arcBar: { display: 'flex', alignItems: 'flex-end', gap: 6, height: 80, marginBottom: 8 },
    bar: (e, isA) => ({
      flex: 1, borderRadius: '4px 4px 0 0', background: isA ? e.color : `${e.color}22`,
      transition: 'all 0.3s ease', cursor: 'pointer',
      height: `${[30,65,95,80,45,70][emotions.indexOf(e)]}%`,
    }),
    arcLabel: { display: 'flex', gap: 6 },
    arcLbl: (e, isA) => ({ flex: 1, fontFamily: 'var(--mono)', fontSize: 8, textAlign: 'center', color: isA ? e.color : 'var(--muted)', letterSpacing: '0.06em', textTransform: 'uppercase' }),
    sceneInfo: { marginTop: 20, padding: '14px', background: 'var(--bg)', borderRadius: 8 },
    infoRow: { display: 'flex', justifyContent: 'space-between', marginBottom: 8, fontSize: 12 },
    infoKey: { color: 'var(--muted)', fontFamily: 'var(--mono)', fontSize: 10 },
    infoVal: { color: '#fff', fontWeight: 600 },
    trackList: { display: 'flex', flexDirection: 'column', gap: 10 },
    track: (i) => ({
      display: 'flex', alignItems: 'center', gap: 12,
      background: 'var(--bg)', borderRadius: 10, padding: '12px 14px',
      border: '1px solid var(--border)', transition: 'border-color 0.2s',
    }),
    trackNum: { fontFamily: 'var(--mono)', fontSize: 10, color: em.color, width: 20, flexShrink: 0 },
    trackName: { fontSize: 12, color: 'var(--text2)', flex: 1 },
    trackBadge: { fontFamily: 'var(--mono)', fontSize: 8, background: '#0a200a', color: '#4ade80', border: '1px solid #166534', padding: '2px 6px', borderRadius: 4, flexShrink: 0 },
  };

  return (
    <section id="music" style={s.section}>
      <div style={s.inner}>
        <div style={s.header}>
          <div style={s.tag}>Emotion × Music Engine</div>
          <h2 style={s.h2}>Every scene gets the<br /><em style={{ color: em.color }}>perfect soundtrack.</em></h2>
          <p style={s.sub}>Claude maps each scene to an emotion arc. YouTube is searched automatically for free, no-copyright tracks.</p>
        </div>
        <div style={s.tabs}>
          {emotions.map((e, i) => (
            <div key={e.id} style={s.tab(e, active === i)} onClick={() => setActive(i)}>
              <span>{e.emoji}</span> {e.label}
            </div>
          ))}
        </div>
        <div style={s.content} className="em-content">
          <div style={s.card}>
            <div style={s.cardTitle}>Emotion Arc Visualiser</div>
            <div style={s.arcBar}>
              {emotions.map((e, i) => (
                <div key={e.id} style={s.bar(e, active === i)} onClick={() => setActive(i)} />
              ))}
            </div>
            <div style={s.arcLabel}>
              {emotions.map((e, i) => (
                <div key={e.id} style={s.arcLbl(e, active === i)}>{e.emoji}</div>
              ))}
            </div>
            <div style={s.sceneInfo}>
              <div style={s.infoRow}><span style={s.infoKey}>SCENE</span><span style={s.infoVal}>{em.scene}</span></div>
              <div style={s.infoRow}><span style={s.infoKey}>EMOTION</span><span style={{ ...s.infoVal, color: em.color }}>{em.label}</span></div>
              <div style={{ ...s.infoRow, marginBottom: 0 }}><span style={s.infoKey}>BPM RANGE</span><span style={s.infoVal}>{em.bpm}</span></div>
            </div>
          </div>
          <div style={s.card}>
            <div style={s.cardTitle}>🎵 Free YouTube Music — {em.label} Scenes</div>
            <div style={s.trackList}>
              {em.tracks.map((t, i) => (
                <div key={t} style={s.track(i)}
                  onMouseEnter={e => e.currentTarget.style.borderColor = em.color}
                  onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border)'}>
                  <span style={s.trackNum}>{String(i + 1).padStart(2, '0')}</span>
                  <span style={s.trackName}>{t}</span>
                  <span style={s.trackBadge}>FREE</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <style>{`
        @media(max-width:768px){ .em-content{ grid-template-columns:1fr !important; } }
      `}</style>
    </section>
  );
}

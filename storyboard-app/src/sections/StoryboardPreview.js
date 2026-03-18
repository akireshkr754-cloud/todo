import React, { useState } from 'react';

const frames = [
  {
    id: 'FRAME_01', scene: 'Hook — Introduce the World',
    camera: 'WIDE SHOT', emotion: 'calm → curious', intensity: 30,
    expression: 'Soft eyes, neutral, slight curiosity',
    palette: ['#302b63', '#24243e', '#f9c784', '#c4b5fd'],
    moodColor: '#a78bfa', moodBg: '#f5f3ff', moodText: '#4c1d95',
    pinterest: 'Dark UI Hero',
    motion: 'Slow zoom in · 0s–2s · ease-out',
    effect: 'Radial ring expand, opacity 0→1',
    typo: 'Instrument Serif · Bold · 48pt',
    bg: 'linear-gradient(135deg,#0f0c29,#302b63,#24243e)',
    faceColor: 'linear-gradient(135deg,#f9c784,#f0a05a)',
    music: ['Lofi Chill – YT Audio Library', 'Soft Ambient – Kevin MacLeod'],
  },
  {
    id: 'FRAME_02', scene: 'Build Up — Energy Rising',
    camera: 'MID SHOT', emotion: 'excited', intensity: 65,
    expression: 'Eyebrows raised, mouth open (surprise)',
    palette: ['#fff8f0', '#f97316', '#fbbf24', '#dc2626'],
    moodColor: '#f97316', moodBg: '#fff7ed', moodText: '#c2410c',
    pinterest: 'Motion Dashboard',
    motion: 'Bars stagger grow · 0.1s delay each',
    effect: 'Pan left camera · bounce ease',
    typo: 'Plus Jakarta Sans · Semibold · 32pt',
    bg: 'linear-gradient(135deg,#fff8f0,#ffecd2)',
    faceColor: 'linear-gradient(135deg,#fbbf24,#f59e0b)',
    music: ['Upbeat Corporate – AudioLibrary', 'Rising Energy – NCS'],
  },
  {
    id: 'FRAME_03', scene: 'Climax — Moment of Truth',
    camera: 'CLOSE-UP', emotion: 'tense → triumph', intensity: 95,
    expression: 'Wide eyes, determined jaw, intense stare',
    palette: ['#1a0533', '#4c1d95', '#a78bfa', '#ffffff'],
    moodColor: '#a855f7', moodBg: '#f5f3ff', moodText: '#6d28d9',
    pinterest: 'Dark Drama Poster',
    motion: 'Quick push-in · 0.4s · ease-in-back',
    effect: 'Burst scale 0→1.4→1 · glow pulse',
    typo: 'Instrument Serif · Bold Italic · 56pt',
    bg: 'linear-gradient(135deg,#1a0533,#4c1d95)',
    faceColor: 'linear-gradient(135deg,#c4b5fd,#a78bfa)',
    music: ['Cinematic Tension – Epidemic Sound', 'Epic Moment – Pixabay'],
  },
  {
    id: 'FRAME_04', scene: 'Emotion Peak — Feel It',
    camera: 'ECU FACE', emotion: 'vulnerable', intensity: 80,
    expression: 'Soft eyes, slight smile, emotional tear',
    palette: ['#fdf2f8', '#f9a8d4', '#ec4899', '#831843'],
    moodColor: '#ec4899', moodBg: '#fdf2f8', moodText: '#be185d',
    pinterest: 'Emotional Editorial',
    motion: 'Slow-mo 0.3x speed · subtle drift',
    effect: 'Sound wave animates with music beat',
    typo: 'Instrument Serif · Light Italic · 40pt',
    bg: 'linear-gradient(135deg,#fdf2f8,#fce7f3)',
    faceColor: 'linear-gradient(135deg,#f9a8d4,#ec4899)',
    music: ['Emotional Piano – Free Music Archive', 'Heartfelt Strings – Incompetech'],
  },
  {
    id: 'FRAME_05', scene: 'Resolution — Peace Found',
    camera: 'MEDIUM WIDE', emotion: 'resolved', intensity: 45,
    expression: 'Relaxed brow, soft smile, calm eyes',
    palette: ['#ecfdf5', '#6ee7b7', '#10b981', '#065f46'],
    moodColor: '#10b981', moodBg: '#ecfdf5', moodText: '#065f46',
    pinterest: 'Zen Minimal Design',
    motion: 'Pull back · 1.5s · linear ease-out',
    effect: 'Rings fade in sequence · 0.3s stagger',
    typo: 'Plus Jakarta Sans · Regular · 28pt',
    bg: 'linear-gradient(135deg,#ecfdf5,#d1fae5)',
    faceColor: 'linear-gradient(135deg,#6ee7b7,#34d399)',
    music: ['Peaceful Resolution – Mixkit', 'Calm Ambient End – Bensound'],
  },
  {
    id: 'FRAME_06', scene: 'CTA — Action Moment',
    camera: 'PRODUCT SHOT', emotion: 'confident', intensity: 70,
    expression: 'Confident smile, pointing gesture, engaged',
    palette: ['#eff6ff', '#93c5fd', '#2d5be3', '#1e3a8a'],
    moodColor: '#2d5be3', moodBg: '#eff6ff', moodText: '#1d4ed8',
    pinterest: 'SaaS Landing CTA',
    motion: 'Button scale 0→1 · bounce · 0.6s',
    effect: 'Pulse glow on CTA · 1s loop',
    typo: 'Plus Jakarta Sans · Bold · 16pt',
    bg: 'linear-gradient(135deg,#eff6ff,#dbeafe)',
    faceColor: 'linear-gradient(135deg,#93c5fd,#60a5fa)',
    music: ['Uplifting End – Pixabay', 'Brand Sting – YT Audio Library'],
  },
];

function FrameCard({ f, isActive, onClick }) {
  const s = {
    card: {
      background: 'var(--card)', border: `1px solid ${isActive ? f.moodColor : 'var(--border)'}`,
      borderRadius: 16, overflow: 'hidden', cursor: 'pointer',
      transition: 'all 0.25s', transform: isActive ? 'translateY(-4px)' : 'none',
      boxShadow: isActive ? `0 16px 48px ${f.moodColor}22` : 'none',
    },
    topbar: { background: '#1a1a2e', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '8px 14px' },
    frameId: { fontFamily: 'var(--mono)', fontSize: 9, color: '#8888bb', letterSpacing: '0.08em' },
    tags: { display: 'flex', gap: 6 },
    tag: (c) => ({ fontFamily: 'var(--mono)', fontSize: 8, padding: '2px 7px', borderRadius: 3, background: `${c}22`, color: c }),
    canvas: { aspectRatio: '16/9', background: f.bg, position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' },
    face: { width: 52, height: 52, borderRadius: '50%', background: f.faceColor, position: 'relative', zIndex: 2, boxShadow: `0 4px 20px ${f.moodColor}44` },
    camBadge: { position: 'absolute', top: 10, right: 10, background: 'rgba(0,0,0,0.55)', backdropFilter: 'blur(4px)', fontFamily: 'var(--mono)', fontSize: 8, color: 'rgba(255,255,255,0.8)', padding: '3px 8px', borderRadius: 4, letterSpacing: '0.06em' },
    motionArrow: { position: 'absolute', bottom: 14, left: 14, fontFamily: 'var(--mono)', fontSize: 8, color: 'rgba(255,255,255,0.55)', background: 'rgba(0,0,0,0.3)', padding: '3px 8px', borderRadius: 4 },
    typoNote: { position: 'absolute', top: 14, left: 14, fontFamily: 'var(--mono)', fontSize: 8, color: 'rgba(255,255,255,0.55)', border: '1px dashed rgba(255,255,255,0.25)', padding: '2px 7px', borderRadius: 3, background: 'rgba(0,0,0,0.3)' },
    info: { padding: '14px 16px' },
    title: { fontSize: 13, fontWeight: 700, marginBottom: 4, color: '#fff' },
    pintTag: { display: 'inline-flex', alignItems: 'center', gap: 4, fontFamily: 'var(--mono)', fontSize: 9, background: '#fef2f2', color: '#e11d48', border: '1px solid #fecdd3', padding: '2px 8px', borderRadius: 4, float: 'right' },
    palette: { display: 'flex', gap: 4, marginTop: 8 },
    swatch: (c) => ({ width: 16, height: 16, borderRadius: 4, background: c, border: '1px solid rgba(255,255,255,0.08)' }),
    moodChip: { display: 'inline-block', fontFamily: 'var(--mono)', fontSize: 9, padding: '3px 9px', borderRadius: 100, background: f.moodBg, color: f.moodText, marginTop: 8 },
  };

  return (
    <div style={s.card} onClick={onClick}>
      <div style={s.topbar}>
        <span style={s.frameId}>{f.id}</span>
        <div style={s.tags}>
          <span style={s.tag(f.moodColor)}>{f.camera}</span>
        </div>
      </div>
      <div style={s.canvas}>
        <div style={s.face} />
        <span style={s.camBadge}>🎥 {f.camera}</span>
        <span style={s.motionArrow}>↗ {f.motion.split('·')[0].trim()}</span>
        <span style={s.typoNote}>{f.typo.split('·')[0].trim()}</span>
      </div>
      <div style={s.info}>
        <span style={s.pintTag}>📌 {f.pinterest}</span>
        <div style={s.title}>{f.scene}</div>
        <div style={s.moodChip}>{f.emotion}</div>
        <div style={s.palette}>{f.palette.map(c => <div key={c} style={s.swatch(c)} />)}</div>
      </div>
    </div>
  );
}

export default function StoryboardPreview() {
  const [active, setActive] = useState(0);
  const f = frames[active];

  const s = {
    section: { padding: '100px 0', background: 'var(--bg)' },
    inner: { maxWidth: 1100, margin: '0 auto', padding: '0 24px' },
    header: { textAlign: 'center', marginBottom: 56 },
    tag: { display: 'inline-block', fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#f43f7a', border: '1px solid rgba(244,63,122,0.3)', padding: '4px 14px', borderRadius: 100, marginBottom: 20 },
    h2: { fontFamily: 'var(--serif)', fontSize: 'clamp(30px,4vw,50px)', fontStyle: 'italic', color: '#fff', marginBottom: 12 },
    sub: { fontSize: 15, color: 'var(--text2)' },
    layout: { display: 'grid', gridTemplateColumns: '1fr 340px', gap: 24, alignItems: 'start' },
    framesGrid: { display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 14 },
    detail: { background: 'var(--card)', border: `1px solid ${f.moodColor}44`, borderRadius: 16, padding: 24, position: 'sticky', top: 80 },
    detailTitle: { fontSize: 15, fontWeight: 800, color: '#fff', marginBottom: 4 },
    detailSub: { fontFamily: 'var(--mono)', fontSize: 10, color: f.moodColor, letterSpacing: '0.08em', marginBottom: 20 },
    row: { marginBottom: 16 },
    rowKey: { fontFamily: 'var(--mono)', fontSize: 9, color: 'var(--muted)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 5 },
    rowVal: { fontSize: 12, color: 'var(--text2)', lineHeight: 1.55 },
    intensityBar: { height: 4, borderRadius: 2, background: 'var(--border)', marginTop: 6, overflow: 'hidden' },
    intensityFill: { height: '100%', borderRadius: 2, background: `linear-gradient(90deg, ${f.moodColor}, ${f.moodColor}88)`, width: `${f.intensity}%`, transition: 'width 0.5s ease' },
    musicList: { display: 'flex', flexDirection: 'column', gap: 6 },
    musicChip: { background: '#1a1200', border: '1px solid #3d2900', borderRadius: 6, padding: '7px 10px', fontSize: 11, color: '#fbbf24', display: 'flex', alignItems: 'center', gap: 6 },
  };

  return (
    <section id="storyboard" style={s.section}>
      <div style={s.inner}>
        <div style={s.header}>
          <div style={s.tag}>Figma Storyboard Preview</div>
          <h2 style={s.h2}>6 scenes. Every detail<br />annotated for your animator.</h2>
          <p style={s.sub}>Click any frame to inspect the full spec.</p>
        </div>
        <div style={s.layout} className="sb-layout">
          <div style={s.framesGrid} className="sb-grid">
            {frames.map((fr, i) => (
              <FrameCard key={fr.id} f={fr} isActive={active === i} onClick={() => setActive(i)} />
            ))}
          </div>
          <div style={s.detail}>
            <div style={s.detailTitle}>{f.scene}</div>
            <div style={s.detailSub}>{f.id} · {f.camera}</div>
            <div style={s.row}>
              <div style={s.rowKey}>Emotion</div>
              <div style={s.rowVal}>{f.emotion}</div>
              <div style={s.intensityBar}><div style={s.intensityFill} /></div>
            </div>
            <div style={s.row}>
              <div style={s.rowKey}>Character Expression</div>
              <div style={s.rowVal}>{f.expression}</div>
            </div>
            <div style={s.row}>
              <div style={s.rowKey}>Motion</div>
              <div style={s.rowVal}>{f.motion}</div>
            </div>
            <div style={s.row}>
              <div style={s.rowKey}>Special Effect</div>
              <div style={s.rowVal}>{f.effect}</div>
            </div>
            <div style={s.row}>
              <div style={s.rowKey}>Typography</div>
              <div style={s.rowVal}>{f.typo}</div>
            </div>
            <div style={s.row}>
              <div style={s.rowKey}>Colour Palette</div>
              <div style={{ display: 'flex', gap: 6, marginTop: 4 }}>
                {f.palette.map(c => <div key={c} style={{ width: 24, height: 24, borderRadius: 6, background: c, border: '1px solid rgba(255,255,255,0.1)' }} title={c} />)}
              </div>
            </div>
            <div style={s.row}>
              <div style={s.rowKey}>Pinterest Reference</div>
              <div style={{ ...s.rowVal, color: '#f43f7a' }}>📌 {f.pinterest}</div>
            </div>
            <div style={s.row}>
              <div style={s.rowKey}>🎵 Free Music Suggestions</div>
              <div style={s.musicList}>
                {f.music.map(m => <div key={m} style={s.musicChip}>🎵 {m}</div>)}
              </div>
            </div>
          </div>
        </div>
      </div>
      <style>{`
        @media(max-width:1024px){ .sb-layout{ grid-template-columns:1fr !important; } }
        @media(max-width:680px){ .sb-grid{ grid-template-columns:repeat(2,1fr) !important; } }
        @media(max-width:440px){ .sb-grid{ grid-template-columns:1fr !important; } }
      `}</style>
    </section>
  );
}

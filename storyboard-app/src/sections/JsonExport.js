import React, { useState } from 'react';

const JSON_SAMPLE = `{
  "storyboard": {
    "project": "AI Video Storyboard",
    "style": "SaaS / Clean UI",
    "canvas_size": { "w": 1920, "h": 1080 },
    "pinterest_ref": "https://pinterest.com/your-board",
    "emotion_arc": ["calm","excited","tense","vulnerable","resolved","confident"],
    "frames": [
      {
        "id": "FRAME_01",
        "scene": "Hook — Introduce the World",
        "camera": "WIDE SHOT",
        "emotion": "calm → curious",
        "character_expression": "neutral, soft eyes, slight curiosity",
        "typography": {
          "font": "Instrument Serif",
          "size": 48,
          "weight": "Bold"
        },
        "motion": {
          "type": "zoom-in",
          "duration": 2,
          "easing": "ease-out"
        },
        "color_palette": ["#302b63","#24243e","#f9c784","#c4b5fd"],
        "pinterest_tag": "Dark UI Hero",
        "music": [
          { "title": "Lofi Chill", "source": "YouTube Audio Library", "free": true },
          { "title": "Soft Ambient Intro", "source": "Kevin MacLeod", "free": true }
        ],
        "figma_layers": [
          { "name": "BG/Gradient", "type": "RECTANGLE" },
          { "name": "Character/Face", "type": "ELLIPSE" },
          { "name": "Annotation/CameraAngle", "type": "TEXT" },
          { "name": "Annotation/MotionArrow", "type": "VECTOR" },
          { "name": "Annotation/Typography", "type": "TEXT" },
          { "name": "Note/PinterestRef", "type": "TEXT" }
        ]
      }
    ]
  },
  "webhook_delivery": {
    "method": "POST",
    "content_type": "application/json",
    "payload_includes": ["storyboard","music_list","emotion_map","figma_json"]
  }
}`;

export default function JsonExport() {
  const [copied, setCopied] = useState(false);

  const copy = () => {
    navigator.clipboard.writeText(JSON_SAMPLE);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  const download = () => {
    const blob = new Blob([JSON_SAMPLE], { type: 'application/json' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'storyboard_figma_export.json';
    a.click();
  };

  const s = {
    section: { padding: '100px 0', background: 'var(--bg)' },
    inner: { maxWidth: 1100, margin: '0 auto', padding: '0 24px' },
    header: { textAlign: 'center', marginBottom: 56 },
    tag: { display: 'inline-block', fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#22d3ee', border: '1px solid rgba(34,211,238,0.3)', padding: '4px 14px', borderRadius: 100, marginBottom: 20 },
    h2: { fontFamily: 'var(--serif)', fontSize: 'clamp(30px,4vw,50px)', fontStyle: 'italic', color: '#fff', marginBottom: 12 },
    sub: { fontSize: 15, color: 'var(--text2)' },
    layout: { display: 'grid', gridTemplateColumns: '1fr 320px', gap: 24, alignItems: 'start' },
    codeBox: { background: '#0d0d1a', border: '1px solid var(--border2)', borderRadius: 16, overflow: 'hidden' },
    topbar: { display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 18px', borderBottom: '1px solid var(--border2)' },
    filename: { fontFamily: 'var(--mono)', fontSize: 11, color: '#8888bb', letterSpacing: '0.06em' },
    btns: { display: 'flex', gap: 8 },
    btn: (primary) => ({
      fontFamily: 'var(--mono)', fontSize: 9, letterSpacing: '0.06em', textTransform: 'uppercase',
      padding: '6px 12px', borderRadius: 6, border: 'none', cursor: 'pointer',
      background: primary ? (copied ? '#10b981' : '#6c63ff') : 'var(--border2)',
      color: primary ? '#fff' : '#8888bb', transition: 'all 0.2s',
    }),
    pre: { padding: '20px 22px', overflowX: 'auto', fontFamily: 'var(--mono)', fontSize: 11, lineHeight: 1.8, color: '#cdd6f4', maxHeight: 420, overflowY: 'auto' },
    sidebar: { display: 'flex', flexDirection: 'column', gap: 14 },
    sideCard: { background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 14, padding: 20 },
    sideTitle: { fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 12 },
    step: { display: 'flex', gap: 10, alignItems: 'flex-start', marginBottom: 12 },
    stepNum: (c) => ({ width: 22, height: 22, borderRadius: 6, background: `${c}18`, border: `1px solid ${c}33`, fontFamily: 'var(--mono)', fontSize: 9, color: c, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 1 }),
    stepText: { fontSize: 12, color: 'var(--text2)', lineHeight: 1.55 },
    pluginChip: { display: 'flex', alignItems: 'center', gap: 8, background: 'var(--bg)', border: '1px solid var(--border)', borderRadius: 8, padding: '10px 12px', marginBottom: 8 },
    pluginName: { fontSize: 12, fontWeight: 600, color: '#fff' },
    pluginSub: { fontSize: 10, color: 'var(--muted)', marginTop: 1 },
  };

  const highlight = (code) => {
    return code
      .replace(/"([^"]+)":/g, '<span style="color:#89b4fa">"$1":</span>')
      .replace(/: "([^"]+)"/g, ': <span style="color:#a6e3a1">"$1"</span>')
      .replace(/: (\d+)/g, ': <span style="color:#fab387">$1</span>')
      .replace(/: (true|false|null)/g, ': <span style="color:#cba6f7">$1</span>');
  };

  return (
    <section id="jsonexport" style={s.section}>
      <div style={s.inner}>
        <div style={s.header}>
          <div style={s.tag}>JSON Export / Figma Import</div>
          <h2 style={s.h2}>One file. Paste into Figma.<br />Frames appear instantly.</h2>
          <p style={s.sub}>The workflow outputs a complete Figma Plugin JSON. No manual design work needed.</p>
        </div>
        <div style={s.layout} className="json-layout">
          <div style={s.codeBox}>
            <div style={s.topbar}>
              <span style={s.filename}>storyboard_figma_export.json</span>
              <div style={s.btns}>
                <button style={s.btn(false)} onClick={download}>⬇ Download</button>
                <button style={s.btn(true)} onClick={copy}>{copied ? '✓ Copied!' : '⎘ Copy JSON'}</button>
              </div>
            </div>
            <pre style={s.pre} dangerouslySetInnerHTML={{ __html: highlight(JSON_SAMPLE) }} />
          </div>
          <div style={s.sidebar}>
            <div style={s.sideCard}>
              <div style={s.sideTitle}>How to Import</div>
              {[
                ['#6c63ff', 'Copy or download the JSON file above'],
                ['#a855f7', 'Open Figma and install "JSON to Figma" plugin'],
                ['#22d3ee', 'Plugin → Paste JSON → Click Import'],
                ['#10b981', 'All 6 frames generate with named layers'],
              ].map(([c, t], i) => (
                <div key={i} style={s.step}>
                  <div style={s.stepNum(c)}>{i + 1}</div>
                  <div style={s.stepText}>{t}</div>
                </div>
              ))}
            </div>
            <div style={s.sideCard}>
              <div style={s.sideTitle}>Recommended Figma Plugins</div>
              {[
                ['🔌', 'JSON to Figma', 'Import JSON as frames'],
                ['🎨', 'Figma Tokens', 'Apply color & type tokens'],
                ['↗', 'Figma Motion', 'Animate your storyboard'],
              ].map(([ico, name, sub]) => (
                <div key={name} style={s.pluginChip}>
                  <span style={{ fontSize: 18 }}>{ico}</span>
                  <div><div style={s.pluginName}>{name}</div><div style={s.pluginSub}>{sub}</div></div>
                </div>
              ))}
            </div>
            <div style={s.sideCard}>
              <div style={s.sideTitle}>Each Frame Includes</div>
              {['BG/Gradient layer', 'Character/Face ellipse', 'Camera angle badge', 'Motion arrow vector', 'Typography note', 'Pinterest ref tag', 'Colour palette styles'].map(item => (
                <div key={item} style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8, fontSize: 12, color: 'var(--text2)' }}>
                  <span style={{ color: '#10b981', fontSize: 10 }}>✓</span> {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <style>{`
        @media(max-width:1024px){ .json-layout{ grid-template-columns:1fr !important; } }
      `}</style>
    </section>
  );
}

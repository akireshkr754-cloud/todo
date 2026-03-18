import React, { useState } from 'react';

const nodes = [
  { step: 1, icon: '🪝', color: '#ef4444', label: 'Webhook Trigger', type: 'n8n · Webhook', desc: 'Receives POST with video script (text), screenshots (base64), and Pinterest board URL.', config: [['method', 'POST'], ['path', '"/storyboard"'], ['auth', 'Header Token'], ['body', 'multipart/form-data']] },
  { step: 2, icon: '📄', color: '#a855f7', label: 'Script Parser', type: 'n8n · Code Node (JS)', desc: 'Splits script into scenes by [SCENE] tag or paragraph. Extracts dialogue, action lines, and shot descriptions.', config: [['split_by', '"[SCENE]" / paragraph'], ['output', '[{scene, text, type}]'], ['max_scenes', '20']] },
  { step: 3, icon: '👁️', color: '#22d3ee', label: 'Claude Vision', type: 'HTTP · Anthropic API', desc: 'Analyses uploaded screenshots — identifies visual style, character expressions, environment, lighting mood.', config: [['model', 'claude-opus-4-6'], ['input', 'base64 images'], ['extract', 'style, mood, faces']] },
  { step: 4, icon: '📌', color: '#f43f7a', label: 'Pinterest Scraper', type: 'HTTP · Pinterest API v5', desc: 'Fetches pins from your board. Extracts dominant colors, typography styles, and animation aesthetic references.', config: [['endpoint', '/boards/{id}/pins'], ['extract', 'colors, fonts, mood'], ['limit', '24 pins']] },
  { step: 5, icon: '🎭', color: '#f97316', label: 'Emotion Analyser', type: 'HTTP · Claude AI', desc: 'Maps each scene to an emotion arc: joy, tension, melancholy, triumph, suspense, calm.', config: [['output', '[{scene, emotion, intensity}]'], ['arc_type', 'hero / narrative'], ['format', 'JSON']] },
  { step: 6, icon: '🎵', color: '#f59e0b', label: 'YT Music Matcher', type: 'HTTP · YouTube Data API v3', desc: 'Searches YouTube for free-to-use background music per emotion. Returns 5 tracks per scene.', config: [['query', '{emotion} + "no copyright"'], ['filter', 'creativeCommons'], ['per_scene', '5 tracks']] },
  { step: 7, icon: '🧠', color: '#a855f7', label: 'Storyboard Generator', type: 'HTTP · Claude AI (Main)', desc: 'The core node. Takes all inputs and generates complete storyboard JSON with Figma annotations.', config: [['model', 'claude-sonnet-4-6'], ['prompt', 'storyboard_system.txt'], ['output', 'structured JSON']] },
  { step: 8, icon: '🎨', color: '#6c63ff', label: 'Figma Formatter', type: 'n8n · Code Node (JS)', desc: 'Transforms output into Figma Plugin JSON with frames, text layers, motion vectors, and color styles.', config: [['schema', 'figma-plugin-v2'], ['frame_size', '1920×1080'], ['components', 'auto-named']] },
  { step: 9, icon: '🗜️', color: '#22d3ee', label: 'Asset Compiler', type: 'n8n · Merge Node', desc: 'Merges storyboard JSON, emotion map, music list, and Figma file into one delivery bundle.', config: [['merge', 'storyboard + music + figma'], ['format', 'application/json'], ['compress', 'false']] },
  { step: 10, icon: '📤', color: '#10b981', label: 'Webhook Delivery', type: 'n8n · HTTP Request (POST)', desc: 'Sends the compiled bundle to your custom webhook URL. Includes X-Workflow-ID header.', config: [['method', 'POST'], ['body', 'full_bundle.json'], ['header', 'X-Workflow-ID']] },
];

export default function WorkflowNodes() {
  const [active, setActive] = useState(null);

  const s = {
    section: { padding: '100px 0', background: 'var(--surf)' },
    inner: { maxWidth: 1100, margin: '0 auto', padding: '0 24px' },
    header: { textAlign: 'center', marginBottom: 56 },
    tag: {
      display: 'inline-block', fontFamily: 'var(--mono)', fontSize: 10,
      letterSpacing: '0.14em', textTransform: 'uppercase', color: '#22d3ee',
      border: '1px solid rgba(34,211,238,0.3)', padding: '4px 14px', borderRadius: 100, marginBottom: 20,
    },
    h2: { fontFamily: 'var(--serif)', fontSize: 'clamp(30px,4vw,50px)', fontStyle: 'italic', color: '#fff', marginBottom: 12 },
    sub: { fontSize: 15, color: 'var(--text2)' },
    flow: { display: 'flex', flexWrap: 'wrap', gap: 12, justifyContent: 'center', marginBottom: 32 },
    nodePill: (n, isActive) => ({
      display: 'flex', alignItems: 'center', gap: 8,
      background: isActive ? `${n.color}22` : 'var(--card)',
      border: `1px solid ${isActive ? n.color : 'var(--border)'}`,
      borderRadius: 10, padding: '10px 16px', cursor: 'pointer',
      transition: 'all 0.2s', minWidth: 160,
    }),
    pillIco: (c) => ({
      width: 32, height: 32, borderRadius: 8, fontSize: 16,
      background: `${c}18`, display: 'flex', alignItems: 'center', justifyContent: 'center',
    }),
    pillInfo: {},
    pillNum: (c) => ({ fontFamily: 'var(--mono)', fontSize: 9, color: c, letterSpacing: '0.1em' }),
    pillLabel: { fontSize: 12, fontWeight: 700, color: '#fff', marginTop: 2 },
    arrow: { color: 'var(--muted)', fontSize: 14, display: 'flex', alignItems: 'center' },
    detail: (n) => ({
      background: 'var(--card)', border: `1px solid ${n.color}44`,
      borderRadius: 16, padding: 28,
      boxShadow: `0 0 40px ${n.color}18`,
      animation: 'fadeIn 0.25s ease',
    }),
    detailTop: { display: 'flex', alignItems: 'center', gap: 16, marginBottom: 16 },
    detailIco: (c) => ({
      width: 52, height: 52, borderRadius: 14, fontSize: 24,
      background: `${c}18`, border: `1px solid ${c}33`,
      display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
    }),
    detailName: { fontSize: 18, fontWeight: 800, color: '#fff' },
    detailType: (c) => ({ fontFamily: 'var(--mono)', fontSize: 10, color: c, letterSpacing: '0.08em', marginTop: 3 }),
    detailDesc: { fontSize: 14, color: 'var(--text2)', lineHeight: 1.65, marginBottom: 16 },
    configBox: {
      background: 'var(--bg)', borderRadius: 10, padding: '14px 16px',
      fontFamily: 'var(--mono)', fontSize: 11, lineHeight: 2,
    },
    cfgRow: { display: 'flex', gap: 12 },
    cfgKey: { color: 'var(--muted)', minWidth: 100 },
    cfgVal: { color: '#a78bfa' },
  };

  return (
    <section id="workflow" style={s.section}>
      <div style={s.inner}>
        <div style={s.header}>
          <div style={s.tag}>n8n Node Configuration</div>
          <h2 style={s.h2}>10 nodes. One workflow.<br />Infinite storyboards.</h2>
          <p style={s.sub}>Click any node to see its full configuration.</p>
        </div>
        <div style={s.flow}>
          {nodes.map((n, i) => (
            <React.Fragment key={n.step}>
              <div style={s.nodePill(n, active === i)}
                onClick={() => setActive(active === i ? null : i)}
                onMouseEnter={e => { if (active !== i) e.currentTarget.style.borderColor = n.color; }}
                onMouseLeave={e => { if (active !== i) e.currentTarget.style.borderColor = 'var(--border)'; }}>
                <div style={s.pillIco(n.color)}>{n.icon}</div>
                <div style={s.pillInfo}>
                  <div style={s.pillNum(n.color)}>STEP {String(n.step).padStart(2, '0')}</div>
                  <div style={s.pillLabel}>{n.label}</div>
                </div>
              </div>
              {i < nodes.length - 1 && <div style={s.arrow}>→</div>}
            </React.Fragment>
          ))}
        </div>
        {active !== null && (
          <div style={s.detail(nodes[active])}>
            <div style={s.detailTop}>
              <div style={s.detailIco(nodes[active].color)}>{nodes[active].icon}</div>
              <div>
                <div style={s.detailName}>{nodes[active].label}</div>
                <div style={s.detailType(nodes[active].color)}>{nodes[active].type}</div>
              </div>
            </div>
            <p style={s.detailDesc}>{nodes[active].desc}</p>
            <div style={s.configBox}>
              {nodes[active].config.map(([k, v]) => (
                <div key={k} style={s.cfgRow}>
                  <span style={s.cfgKey}>{k}:</span>
                  <span style={s.cfgVal}>{v}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      <style>{`@keyframes fadeIn{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:none}}`}</style>
    </section>
  );
}

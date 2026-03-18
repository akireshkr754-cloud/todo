import React, { useState } from 'react';

const faqs = [
  { q: 'What format does my video script need to be in?', a: 'Plain text works perfectly. You can use [SCENE] tags to separate scenes, or just write in paragraphs — the Script Parser node intelligently splits your content. Include shot descriptions, dialogue, and action notes for the best storyboard output.' },
  { q: 'Do I need to know how to code to use this workflow?', a: 'No coding required for basic use. You import the n8n workflow JSON, add your API keys in the credentials panel, and it runs automatically. For custom modifications, basic JavaScript knowledge helps but is not required.' },
  { q: 'Which Claude model does the workflow use?', a: 'The workflow uses claude-opus-4-6 for the vision analysis node (highest accuracy for image understanding) and claude-sonnet-4-6 for the storyboard generation node (best balance of speed and quality for structured JSON output).' },
  { q: 'Are the YouTube music suggestions actually free to use?', a: 'Yes — the Music Matcher node searches YouTube specifically with the creativeCommons license filter, returning only tracks from the YouTube Audio Library, Kevin MacLeod (Incompetech), Pixabay, Bensound, Mixkit, and NCS — all free for content use.' },
  { q: 'How do I get my Pinterest board connected?', a: 'You need a Pinterest Developer account (free at developers.pinterest.com). Create an app, get your API v5 token, add it as a credential in n8n, and paste your board URL in the webhook payload. The scraper handles the rest.' },
  { q: 'Can I customise the Figma storyboard frame layout?', a: 'Absolutely. The JSON export includes named Figma layers (BG/Gradient, Character/Face, Annotation layers, etc.) which you can restyle after import. You can also modify the Figma Formatter node to change the default frame structure.' },
  { q: 'How long does the full workflow take to run?', a: 'Typically 30–60 seconds for a 6-scene storyboard. Claude Vision and the Storyboard Generator are the slowest nodes (~10–15s each). The YouTube music search adds ~5s. Total pipeline time scales with the number of scenes.' },
  { q: 'Can I deploy this on self-hosted n8n?', a: 'Yes, this workflow runs on both n8n Cloud and self-hosted n8n (v1.0+). The only requirement is outbound internet access for the Anthropic API, YouTube Data API, and Pinterest API HTTP calls.' },
];

export default function FAQ() {
  const [open, setOpen] = useState(null);

  const s = {
    section: { padding: '100px 0', background: 'var(--bg)' },
    inner: { maxWidth: 800, margin: '0 auto', padding: '0 24px' },
    header: { textAlign: 'center', marginBottom: 56 },
    tag: { display: 'inline-block', fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#10b981', border: '1px solid rgba(16,185,129,0.3)', padding: '4px 14px', borderRadius: 100, marginBottom: 20 },
    h2: { fontFamily: 'var(--serif)', fontSize: 'clamp(30px,4vw,50px)', fontStyle: 'italic', color: '#fff', marginBottom: 12 },
    sub: { fontSize: 15, color: 'var(--text2)' },
    list: { display: 'flex', flexDirection: 'column', gap: 8 },
    item: (isOpen) => ({
      background: isOpen ? 'var(--card2)' : 'var(--card)',
      border: `1px solid ${isOpen ? 'rgba(108,99,255,0.4)' : 'var(--border)'}`,
      borderRadius: 14, overflow: 'hidden', transition: 'border-color 0.2s',
    }),
    question: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px 22px', cursor: 'pointer', gap: 16 },
    qText: { fontSize: 15, fontWeight: 600, color: '#fff', lineHeight: 1.4 },
    chevron: (isOpen) => ({ fontSize: 14, color: 'var(--muted)', transform: isOpen ? 'rotate(180deg)' : 'rotate(0)', transition: 'transform 0.25s ease', flexShrink: 0 }),
    answer: (isOpen) => ({
      maxHeight: isOpen ? 300 : 0, overflow: 'hidden',
      transition: 'max-height 0.35s ease',
    }),
    aText: { padding: '0 22px 20px', fontSize: 14, color: 'var(--text2)', lineHeight: 1.7 },
    bottomCta: { textAlign: 'center', marginTop: 60, padding: '48px 32px', background: 'var(--card)', border: '1px solid var(--border2)', borderRadius: 20 },
    ctaTitle: { fontFamily: 'var(--serif)', fontSize: 32, fontStyle: 'italic', color: '#fff', marginBottom: 12 },
    ctaSub: { fontSize: 15, color: 'var(--text2)', marginBottom: 28 },
    ctaBtn: { background: 'linear-gradient(135deg, #6c63ff, #a855f7)', color: '#fff', border: 'none', borderRadius: 10, padding: '14px 32px', fontSize: 15, fontWeight: 700, cursor: 'pointer', boxShadow: '0 0 32px rgba(108,99,255,0.3)', transition: 'all 0.2s' },
  };

  return (
    <section id="faq" style={s.section}>
      <div style={s.inner}>
        <div style={s.header}>
          <div style={s.tag}>FAQ</div>
          <h2 style={s.h2}>Questions answered.</h2>
          <p style={s.sub}>Everything you need to know before you start.</p>
        </div>
        <div style={s.list}>
          {faqs.map((f, i) => (
            <div key={i} style={s.item(open === i)} onClick={() => setOpen(open === i ? null : i)}>
              <div style={s.question}>
                <span style={s.qText}>{f.q}</span>
                <span style={s.chevron(open === i)}>▼</span>
              </div>
              <div style={s.answer(open === i)}>
                <p style={s.aText}>{f.a}</p>
              </div>
            </div>
          ))}
        </div>
        <div style={s.bottomCta}>
          <div style={s.ctaTitle}>Ready to build your storyboard?</div>
          <p style={s.ctaSub}>Start free. No credit card. Storyboard ready in under 60 seconds.</p>
          <button style={s.ctaBtn}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 40px rgba(108,99,255,0.5)'; }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = '0 0 32px rgba(108,99,255,0.3)'; }}>
            ⚡ Start Generating Free →
          </button>
        </div>
      </div>
    </section>
  );
}

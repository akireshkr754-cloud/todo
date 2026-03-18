import React from 'react';

export default function Footer() {
  const s = {
    footer: { background: 'var(--surf)', borderTop: '1px solid var(--border)', padding: '48px 24px 32px' },
    inner: { maxWidth: 1100, margin: '0 auto' },
    top: { display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', gap: 40, marginBottom: 48 },
    brand: {},
    logo: { display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14, textDecoration: 'none' },
    logoIcon: { width: 32, height: 32, borderRadius: 8, background: 'linear-gradient(135deg,#6c63ff,#a855f7)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16 },
    logoText: { fontFamily: 'var(--serif)', fontSize: 20, color: 'var(--text)', fontStyle: 'italic' },
    brandDesc: { fontSize: 13, color: 'var(--muted)', lineHeight: 1.65, maxWidth: 220 },
    colTitle: { fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 16 },
    links: { listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 },
    link: { fontSize: 13, color: 'var(--text2)', textDecoration: 'none', transition: 'color 0.2s' },
    bottom: { display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid var(--border)', paddingTop: 24, flexWrap: 'wrap', gap: 12 },
    copy: { fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--muted)' },
    bottomLinks: { display: 'flex', gap: 24 },
    bottomLink: { fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--muted)', textDecoration: 'none' },
  };

  const cols = [
    { title: 'Product', links: ['How It Works', 'Workflow Nodes', 'Storyboard Preview', 'Emotion Engine', 'JSON Export'] },
    { title: 'Resources', links: ['Documentation', 'n8n Setup Guide', 'Figma Plugin Guide', 'API Reference', 'Changelog'] },
    { title: 'Company', links: ['About', 'Blog', 'Careers', 'Contact', 'Privacy Policy'] },
  ];

  return (
    <footer style={s.footer}>
      <div style={s.inner}>
        <div style={s.top} className="footer-top">
          <div style={s.brand}>
            <a href="#hero" style={s.logo}>
              <div style={s.logoIcon}>🎬</div>
              <span style={s.logoText}>StoryFlow</span>
            </a>
            <p style={s.brandDesc}>AI-powered storyboard generation. n8n × Claude × Figma. Built for creators who move fast.</p>
          </div>
          {cols.map(col => (
            <div key={col.title}>
              <div style={s.colTitle}>{col.title}</div>
              <ul style={s.links}>
                {col.links.map(l => (
                  <li key={l}><a href="#hero" style={s.link}
                    onMouseEnter={e => e.target.style.color = '#fff'}
                    onMouseLeave={e => e.target.style.color = 'var(--text2)'}>{l}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div style={s.bottom}>
          <span style={s.copy}>© 2025 StoryFlow AI. Built with n8n, Claude & ❤️</span>
          <div style={s.bottomLinks}>
            {['Privacy', 'Terms', 'Status'].map(l => (
              <a key={l} href="#hero" style={s.bottomLink}
                onMouseEnter={e => e.target.style.color = '#fff'}
                onMouseLeave={e => e.target.style.color = 'var(--muted)'}>{l}</a>
            ))}
          </div>
        </div>
      </div>
      <style>{`
        @media(max-width:768px){ .footer-top{ grid-template-columns:1fr 1fr !important; } }
        @media(max-width:480px){ .footer-top{ grid-template-columns:1fr !important; } }
      `}</style>
    </footer>
  );
}

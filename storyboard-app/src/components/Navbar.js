import React, { useState, useEffect } from 'react';

const links = [
  { label: 'How It Works', href: '#howitworks' },
  { label: 'Workflow', href: '#workflow' },
  { label: 'Storyboard', href: '#storyboard' },
  { label: 'Music', href: '#music' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const s = {
    nav: {
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      transition: 'all 0.3s ease',
      background: scrolled ? 'rgba(5,5,8,0.85)' : 'transparent',
      backdropFilter: scrolled ? 'blur(20px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(30,30,53,0.8)' : '1px solid transparent',
    },
    inner: {
      maxWidth: 1100, margin: '0 auto', padding: '0 24px',
      height: 64, display: 'flex', alignItems: 'center', justifyContent: 'space-between',
    },
    logo: {
      display: 'flex', alignItems: 'center', gap: 10,
      textDecoration: 'none',
    },
    logoIcon: {
      width: 32, height: 32, borderRadius: 8,
      background: 'linear-gradient(135deg, #6c63ff, #a855f7)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      fontSize: 16,
    },
    logoText: {
      fontFamily: 'var(--serif)', fontSize: 20, color: 'var(--text)',
      fontStyle: 'italic',
    },
    links: {
      display: 'flex', gap: 32, listStyle: 'none',
    },
    link: {
      fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '0.08em',
      textTransform: 'uppercase', color: 'var(--text2)',
      textDecoration: 'none', transition: 'color 0.2s',
    },
    cta: {
      background: 'linear-gradient(135deg, #6c63ff, #a855f7)',
      color: '#fff', border: 'none', borderRadius: 8,
      padding: '8px 18px', fontFamily: 'var(--sans)',
      fontSize: 13, fontWeight: 700, cursor: 'pointer',
      transition: 'opacity 0.2s',
    },
    burger: {
      display: 'none', background: 'none', border: 'none',
      color: 'var(--text)', cursor: 'pointer', fontSize: 22,
    },
    mobileMenu: {
      display: menuOpen ? 'flex' : 'none',
      flexDirection: 'column', gap: 0,
      background: 'var(--surf)',
      borderBottom: '1px solid var(--border)',
      padding: '16px 24px 20px',
    },
    mobileLink: {
      fontFamily: 'var(--mono)', fontSize: 12, letterSpacing: '0.08em',
      textTransform: 'uppercase', color: 'var(--text2)',
      textDecoration: 'none', padding: '12px 0',
      borderBottom: '1px solid var(--border)',
    },
  };

  return (
    <nav style={s.nav}>
      <div style={s.inner}>
        <a href="#hero" style={s.logo}>
          <div style={s.logoIcon}>🎬</div>
          <span style={s.logoText}>StoryFlow</span>
        </a>
        <ul style={{ ...s.links, display: menuOpen ? 'none' : undefined }}
          className="nav-links">
          {links.map(l => (
            <li key={l.label} style={{ display: 'none' }} className="nav-item">
              <a href={l.href} style={s.link}
                onMouseEnter={e => e.target.style.color = '#fff'}
                onMouseLeave={e => e.target.style.color = 'var(--text2)'}
                onClick={() => setMenuOpen(false)}>
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        {/* Desktop links */}
        <div style={{ display: 'flex', gap: 28, alignItems: 'center' }} className="desktop-nav">
          {links.map(l => (
            <a key={l.label} href={l.href} style={s.link}
              onMouseEnter={e => e.target.style.color = '#fff'}
              onMouseLeave={e => e.target.style.color = 'var(--text2)'}>
              {l.label}
            </a>
          ))}
          <button style={s.cta} onMouseEnter={e => e.target.style.opacity = '0.85'}
            onMouseLeave={e => e.target.style.opacity = '1'}>
            Get Started
          </button>
        </div>
        <button style={s.burger} className="burger-btn" onClick={() => setMenuOpen(o => !o)}>
          {menuOpen ? '✕' : '☰'}
        </button>
      </div>
      <div style={s.mobileMenu}>
        {links.map(l => (
          <a key={l.label} href={l.href} style={s.mobileLink} onClick={() => setMenuOpen(false)}>
            {l.label}
          </a>
        ))}
        <button style={{ ...s.cta, marginTop: 16, width: '100%' }}>Get Started</button>
      </div>
      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .burger-btn { display: block !important; }
        }
      `}</style>
    </nav>
  );
}

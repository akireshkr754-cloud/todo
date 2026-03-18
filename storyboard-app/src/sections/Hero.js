import React, { useEffect, useRef } from 'react';

export default function Hero() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animId;
    let particles = [];

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 1.5 + 0.3,
        dx: (Math.random() - 0.5) * 0.3,
        dy: (Math.random() - 0.5) * 0.3,
        o: Math.random() * 0.5 + 0.1,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(108,99,255,${p.o})`;
        ctx.fill();
        p.x += p.dx; p.y += p.dy;
        if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
      });
      animId = requestAnimationFrame(draw);
    };
    draw();
    return () => { cancelAnimationFrame(animId); window.removeEventListener('resize', resize); };
  }, []);

  const s = {
    section: {
      position: 'relative', minHeight: '100vh',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      overflow: 'hidden', paddingTop: 80,
    },
    canvas: {
      position: 'absolute', inset: 0, width: '100%', height: '100%', zIndex: 0,
    },
    glow1: {
      position: 'absolute', width: 600, height: 600, borderRadius: '50%',
      background: 'radial-gradient(circle, rgba(108,99,255,0.12) 0%, transparent 65%)',
      top: '10%', left: '20%', transform: 'translate(-50%,-50%)', zIndex: 0,
      filter: 'blur(40px)',
    },
    glow2: {
      position: 'absolute', width: 400, height: 400, borderRadius: '50%',
      background: 'radial-gradient(circle, rgba(168,85,247,0.1) 0%, transparent 65%)',
      top: '60%', right: '10%', zIndex: 0, filter: 'blur(40px)',
    },
    inner: {
      position: 'relative', zIndex: 1, textAlign: 'center',
      maxWidth: 820, margin: '0 auto', padding: '0 24px',
    },
    badge: {
      display: 'inline-flex', alignItems: 'center', gap: 8,
      fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '0.14em',
      textTransform: 'uppercase', color: '#a78bfa',
      background: 'rgba(108,99,255,0.1)', border: '1px solid rgba(108,99,255,0.25)',
      padding: '6px 16px', borderRadius: 100, marginBottom: 32,
    },
    dot: {
      width: 6, height: 6, borderRadius: '50%', background: '#a78bfa',
      animation: 'pulse 2s infinite',
    },
    h1: {
      fontFamily: 'var(--serif)', fontSize: 'clamp(42px, 7vw, 88px)',
      fontWeight: 400, lineHeight: 1.05, letterSpacing: '-1px',
      color: '#fff', marginBottom: 24,
    },
    h1em: { fontStyle: 'italic', color: '#a78bfa' },
    sub: {
      fontSize: 'clamp(15px, 2vw, 18px)', color: 'var(--text2)',
      lineHeight: 1.7, maxWidth: 560, margin: '0 auto 40px',
    },
    btns: {
      display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 64,
    },
    btnPrimary: {
      background: 'linear-gradient(135deg, #6c63ff, #a855f7)',
      color: '#fff', border: 'none', borderRadius: 10,
      padding: '14px 28px', fontSize: 15, fontWeight: 700,
      cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 8,
      transition: 'transform 0.2s, box-shadow 0.2s',
      boxShadow: '0 0 32px rgba(108,99,255,0.3)',
    },
    btnSecondary: {
      background: 'transparent', color: 'var(--text)',
      border: '1px solid var(--border2)', borderRadius: 10,
      padding: '14px 28px', fontSize: 15, fontWeight: 600,
      cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 8,
      transition: 'border-color 0.2s',
    },
    stats: {
      display: 'flex', gap: 40, justifyContent: 'center', flexWrap: 'wrap',
    },
    stat: { textAlign: 'center' },
    statNum: {
      fontFamily: 'var(--serif)', fontSize: 36, fontStyle: 'italic',
      color: '#fff', display: 'block', lineHeight: 1,
    },
    statLabel: {
      fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '0.1em',
      color: 'var(--muted)', textTransform: 'uppercase', marginTop: 4, display: 'block',
    },
    divider: { width: 1, height: 40, background: 'var(--border)', alignSelf: 'center' },
    scrollHint: {
      position: 'absolute', bottom: 32, left: '50%', transform: 'translateX(-50%)',
      display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, zIndex: 1,
    },
    scrollLabel: {
      fontFamily: 'var(--mono)', fontSize: 9, letterSpacing: '0.14em',
      color: 'var(--muted)', textTransform: 'uppercase',
    },
    scrollLine: {
      width: 1, height: 40, background: 'linear-gradient(180deg, var(--border2), transparent)',
      animation: 'scrollPulse 2s infinite',
    },
  };

  return (
    <section id="hero" style={s.section}>
      <canvas ref={canvasRef} style={s.canvas} />
      <div style={s.glow1} /><div style={s.glow2} />
      <div style={s.inner}>
        <div style={s.badge}><span style={s.dot} />n8n × Claude AI × Figma</div>
        <h1 style={s.h1}>
          Your Script Becomes<br />
          <em style={s.h1em}>A Full Storyboard</em><br />
          Automatically
        </h1>
        <p style={s.sub}>
          Paste your video script and screenshots. Claude analyses story, emotion, and style —
          then generates a complete Figma-ready storyboard with music, motion notes, and Pinterest references.
        </p>
        <div style={s.btns}>
          <button style={s.btnPrimary}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 40px rgba(108,99,255,0.5)'; }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = '0 0 32px rgba(108,99,255,0.3)'; }}>
            ⚡ Start Generating Free
          </button>
          <button style={s.btnSecondary}
            onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--a1)'}
            onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border2)'}>
            ▶ Watch Demo
          </button>
        </div>
        <div style={s.stats}>
          <div style={s.stat}><span style={s.statNum}>10</span><span style={s.statLabel}>n8n Nodes</span></div>
          <div style={s.divider} />
          <div style={s.stat}><span style={s.statNum}>6</span><span style={s.statLabel}>Scene Frames</span></div>
          <div style={s.divider} />
          <div style={s.stat}><span style={s.statNum}>5×</span><span style={s.statLabel}>Music per Scene</span></div>
          <div style={s.divider} />
          <div style={s.stat}><span style={{ ...s.statNum, fontSize: 28 }}>Figma</span><span style={s.statLabel}>JSON Export</span></div>
        </div>
      </div>
      <div style={s.scrollHint}>
        <span style={s.scrollLabel}>Scroll</span>
        <div style={s.scrollLine} />
      </div>
      <style>{`
        @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.3} }
        @keyframes scrollPulse { 0%,100%{opacity:0.4} 50%{opacity:1} }
      `}</style>
    </section>
  );
}

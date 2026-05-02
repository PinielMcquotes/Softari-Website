'use client'
import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'

export default function HeroSection() {
  const canvasRef  = useRef<HTMLCanvasElement>(null)
  const [vis, setVis] = useState(false)

  /* Staggered reveal */
  useEffect(() => {
    const t = setTimeout(() => setVis(true), 100)
    return () => clearTimeout(t)
  }, [])

  /* IoT network canvas */
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let W = (canvas.width  = window.innerWidth)
    let H = (canvas.height = window.innerHeight)
    let raf: number
    let tick = 0

    const resize = () => { W = canvas.width = window.innerWidth; H = canvas.height = window.innerHeight }
    window.addEventListener('resize', resize)

    const N = Math.max(30, Math.floor((W * H) / 18000))
    interface Node { x: number; y: number; vx: number; vy: number; r: number; pulse: number; pulsing: boolean }
    const nodes: Node[] = Array.from({ length: N }, () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      vx: (Math.random() - 0.5) * 0.18,
      vy: (Math.random() - 0.5) * 0.18,
      r: Math.random() * 1.2 + 0.5,
      pulse: 0,
      pulsing: Math.random() < 0.15,
    }))

    /* Signal particles traveling along edges */
    interface Signal { from: number; to: number; t: number; speed: number }
    const signals: Signal[] = []

    const draw = () => {
      tick++
      ctx.clearRect(0, 0, W, H)

      /* Edges */
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x
          const dy = nodes[i].y - nodes[j].y
          const d  = Math.hypot(dx, dy)
          if (d < 130) {
            const alpha = 0.07 * (1 - d / 130)
            ctx.beginPath()
            ctx.moveTo(nodes[i].x, nodes[i].y)
            ctx.lineTo(nodes[j].x, nodes[j].y)
            ctx.strokeStyle = `rgba(0,212,255,${alpha})`
            ctx.lineWidth   = 0.5
            ctx.stroke()
          }
        }
      }

      /* Spawn signals occasionally */
      if (tick % 40 === 0 && nodes.length > 1) {
        const from = Math.floor(Math.random() * nodes.length)
        let best = -1; let bestD = 9999
        for (let j = 0; j < nodes.length; j++) {
          if (j === from) continue
          const d = Math.hypot(nodes[from].x - nodes[j].x, nodes[from].y - nodes[j].y)
          if (d < 130 && d < bestD) { bestD = d; best = j }
        }
        if (best !== -1) signals.push({ from, to: best, t: 0, speed: 0.025 + Math.random() * 0.02 })
      }

      /* Draw signals */
      for (let s = signals.length - 1; s >= 0; s--) {
        const sig = signals[s]
        sig.t += sig.speed
        if (sig.t >= 1) { signals.splice(s, 1); continue }
        const fx = nodes[sig.from].x, fy = nodes[sig.from].y
        const tx = nodes[sig.to].x,   ty = nodes[sig.to].y
        const sx = fx + (tx - fx) * sig.t
        const sy = fy + (ty - fy) * sig.t
        ctx.beginPath()
        ctx.arc(sx, sy, 2.5, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(0,212,255,${0.9 * (1 - Math.abs(sig.t - 0.5) * 2)})`
        ctx.fill()
        /* Tail glow */
        const g = ctx.createRadialGradient(sx, sy, 0, sx, sy, 8)
        g.addColorStop(0, 'rgba(0,212,255,0.3)')
        g.addColorStop(1, 'rgba(0,212,255,0)')
        ctx.beginPath()
        ctx.arc(sx, sy, 8, 0, Math.PI * 2)
        ctx.fillStyle = g
        ctx.fill()
      }

      /* Nodes */
      nodes.forEach(n => {
        /* Pulsing nodes */
        if (n.pulsing) {
          n.pulse = (n.pulse + 0.02) % (Math.PI * 2)
          const pr = 6 + Math.sin(n.pulse) * 3
          const g = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, pr)
          g.addColorStop(0, 'rgba(0,212,255,0.25)')
          g.addColorStop(1, 'rgba(0,212,255,0)')
          ctx.beginPath()
          ctx.arc(n.x, n.y, pr, 0, Math.PI * 2)
          ctx.fillStyle = g
          ctx.fill()
        }
        ctx.beginPath()
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2)
        ctx.fillStyle = n.pulsing ? 'rgba(0,212,255,0.7)' : 'rgba(255,255,255,0.15)'
        ctx.fill()
        n.x += n.vx; n.y += n.vy
        if (n.x < 0 || n.x > W) n.vx *= -1
        if (n.y < 0 || n.y > H) n.vy *= -1
      })

      raf = requestAnimationFrame(draw)
    }
    draw()
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', resize) }
  }, [])

  const delay = (n: number) => ({ transitionDelay: `${n}ms`, animationDelay: `${n}ms` })

  const stats = [
    { val: '$1T+',   label: 'Idle industrial assets across Africa, unused every day'      },
    { val: '600M',   label: 'Africans without consistent, reliable access to power'       },
    { val: '4 mo',   label: 'Average ROI window on a single Softari power pack unit'      },
    { val: '$5/day', label: 'Daily rental — accessible to any SME or sole trader'         },
  ]

  const base = 'transition-all duration-700'
  const shown = 'opacity-100 translate-y-0'
  const hidden = 'opacity-0 translate-y-6'

  return (
    <section
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
      style={{ background: 'var(--bg-base)', paddingTop: '64px' }}
    >
      {/* Network canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" style={{ opacity: 0.55 }} />

      {/* Line grid overlay */}
      <div className="absolute inset-0 line-grid pointer-events-none" style={{ opacity: 0.4 }} />

      {/* Left rule */}
      <div
        className="absolute left-0 top-0 bottom-0 w-px"
        style={{ background: 'linear-gradient(to bottom, transparent 5%, rgba(0,212,255,0.2) 30%, rgba(0,212,255,0.2) 70%, transparent 95%)' }}
      />

      {/* Ghost background text */}
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 font-mono-dm font-black leading-none select-none pointer-events-none hidden xl:block"
        style={{
          fontSize: 'clamp(12rem, 18vw, 18rem)',
          color: 'transparent',
          WebkitTextStroke: '1px rgba(0,212,255,0.04)',
          letterSpacing: '-0.06em',
          right: '-2rem',
        }}
      >
        SFT
      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-48 pointer-events-none"
        style={{ background: 'linear-gradient(to top, var(--bg-base), transparent)' }}
      />

      {/* ── Content ── */}
      <div className="container-pad relative z-10 pb-16 md:pb-28">

        {/* System status row */}
        <div
          className={`flex items-center gap-4 mb-10 ${base} ${vis ? shown : hidden}`}
          style={delay(0)}
        >
          <span className="status-active">System Online</span>
          <span className="font-mono-dm text-[0.55rem] tracking-widest uppercase" style={{ color: 'var(--text-muted)' }}>
            v1.0 · IoT Infrastructure Layer · Africa
          </span>
        </div>

        {/* Headline */}
        <h1
          className={`font-display font-black leading-[0.9] tracking-tight mb-0 ${base} ${vis ? shown : hidden}`}
          style={{
            fontSize: 'clamp(2.8rem, 7.5vw, 7.5rem)',
            color: 'var(--text-white)',
            ...delay(120),
          }}
        >
          Turn Any Idle Asset<br />
          Into a Smart,{' '}
          <span className="gradient-text">Revenue-</span><br />
          <span className="gradient-text">Generating</span>{' '}
          <span style={{ WebkitTextStroke: '1px rgba(255,255,255,0.15)', color: 'transparent' }}>Service.</span>
        </h1>

        {/* Sub-line */}
        <p
          className={`font-mono-dm mt-6 mb-0 ${base} ${vis ? shown : hidden}`}
          style={{
            fontSize: '0.78rem',
            letterSpacing: '0.08em',
            color: 'var(--text-dim)',
            ...delay(200),
          }}
        >
          Infrastructure for IoT-powered asset access, payments, and automation.
        </p>

        {/* Two-col grid */}
        <div className="grid md:grid-cols-2 gap-10 md:gap-20 items-start mt-12 md:mt-16">

          {/* Left */}
          <div>
            <p
              className={`text-base leading-relaxed mb-3 ${base} ${vis ? shown : hidden}`}
              style={{ color: 'var(--text-body)', maxWidth: '42ch', ...delay(280) }}
            >
              We design our own IoT hardware locally — then connect it to a complete platform:
              digital wallets, smart contracts, and real-time asset control. From first install to first payment.
            </p>

            {/* Investor micro-label */}
            <p
              className={`font-mono-dm text-[0.58rem] tracking-widest uppercase mb-5 ${base} ${vis ? shown : hidden}`}
              style={{ color: 'var(--text-muted)', ...delay(320) }}
            >
              For Investors &amp; Strategic Partners
            </p>

            <div
              className={`flex flex-col sm:flex-row gap-3 ${base} ${vis ? shown : hidden}`}
              style={delay(360)}
            >
              <a
                href="https://www.softari.co.zw"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary btn-lg animate-pulse-teal"
              >
                Deploy Assets
                <svg className="w-3.5 h-3.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <Link href="#why-softari" className="btn-ghost btn-lg">Partner With Us</Link>
            </div>
          </div>

          {/* Right — stat rows */}
          <div
            className={`border-t ${base} ${vis ? shown : hidden}`}
            style={{ borderColor: 'var(--border-dim)', ...delay(440) }}
          >
            {stats.map((s, i) => (
              <div key={s.val} className="stat-row" style={{ transitionDelay: `${460 + i * 60}ms` }}>
                <span className="stat-val" style={{ color: 'var(--cyan)', fontFamily: 'var(--font-mono)' }}>{s.val}</span>
                <span className="stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Trust strip */}
        <div
          className={`trust-strip mt-14 md:mt-20 ${base} ${vis ? shown : hidden}`}
          style={delay(700)}
        >
          <span className="trust-label">Stack</span>
          {['Custom IoT Hardware', 'GSM / LPWAN', 'Smart Contracts', 'Digital Wallets', 'Asset Access Platform'].map(t => (
            <span key={t} className="trust-item flex items-center gap-1.5">
              <span className="w-1 h-1 rounded-full" style={{ background: 'var(--cyan)', opacity: 0.5 }} />
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Scroll cue */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-float"
        style={{ color: 'var(--text-muted)' }}
      >
        <div className="w-px h-10" style={{ background: 'linear-gradient(to bottom, transparent, var(--cyan))' }} />
        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ color: 'var(--cyan)' }}>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  )
}
'use client'
import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'

export default function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let w = (canvas.width  = window.innerWidth)
    let h = (canvas.height = window.innerHeight)
    let raf: number

    const resize = () => { w = canvas.width = window.innerWidth; h = canvas.height = window.innerHeight }
    window.addEventListener('resize', resize)

    /* Sparse, slow-moving node field — evokes infrastructure grid */
    const N = Math.max(18, Math.floor((w * h) / 24000))
    const nodes = Array.from({ length: N }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.18,
      vy: (Math.random() - 0.5) * 0.18,
      r: Math.random() * 1 + 0.3,
    }))

    const draw = () => {
      ctx.clearRect(0, 0, w, h)
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x
          const dy = nodes[i].y - nodes[j].y
          const dist = Math.sqrt(dx*dx + dy*dy)
          if (dist < 160) {
            ctx.beginPath()
            ctx.moveTo(nodes[i].x, nodes[i].y)
            ctx.lineTo(nodes[j].x, nodes[j].y)
            ctx.strokeStyle = `rgba(255,255,255,${0.05 * (1 - dist/160)})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        }
      }
      nodes.forEach(n => {
        ctx.beginPath()
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2)
        ctx.fillStyle = 'rgba(255,255,255,0.18)'
        ctx.fill()
        n.x += n.vx; n.y += n.vy
        if (n.x < 0 || n.x > w) n.vx *= -1
        if (n.y < 0 || n.y > h) n.vy *= -1
      })
      raf = requestAnimationFrame(draw)
    }
    draw()
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', resize) }
  }, [])

  return (
    <section
      className="relative min-h-screen flex flex-col justify-end overflow-hidden"
      style={{ background: '#070707' }}
    >
      {/* Node canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ opacity: 0.55 }}
      />

      {/* Horizontal centre line — editorial grid */}
      <div
        className="absolute left-0 right-0 pointer-events-none hidden md:block"
        style={{ top: '50%', height: '1px', background: 'rgba(255,255,255,0.04)' }}
      />

      {/* Left vertical rule */}
      <div
        className="absolute left-0 top-0 bottom-0 w-px pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, transparent 10%, rgba(255,255,255,0.15) 50%, transparent 90%)' }}
      />

      {/* Right vertical rule — desktop only */}
      <div
        className="absolute right-0 top-0 bottom-0 w-px pointer-events-none hidden md:block"
        style={{ background: 'linear-gradient(to bottom, transparent 10%, rgba(255,255,255,0.06) 50%, transparent 90%)' }}
      />

      {/* Ghost section label */}
      <div className="absolute top-32 right-8 hidden lg:flex flex-col items-center gap-4">
        <span
          className="font-mono-dm"
          style={{ writingMode: 'vertical-rl', fontSize: '0.55rem', letterSpacing: '0.28em', textTransform: 'uppercase', color: 'var(--ash)' }}
        >
          Softari Technologies — 2025
        </span>
        <div className="w-px flex-1 min-h-16" style={{ background: 'rgba(255,255,255,0.08)' }} />
      </div>

      {/* Main content — bottom-aligned for cinematic feel */}
      <div className="container-pad relative z-10 pb-20 md:pb-24 pt-32 flex flex-col justify-end min-h-screen">

        {/* Eyebrow */}
        <div
          className={`flex items-center gap-3 mb-8 transition-all duration-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          style={{ transitionDelay: '0.1s' }}
        >
          <div className="w-8 h-px" style={{ background: 'var(--ash)' }} />
          <span
            className="font-mono-dm uppercase tracking-widest"
            style={{ fontSize: '0.6rem', color: 'var(--fog)', letterSpacing: '0.22em' }}
          >
            Building Africa's Asset Economy
          </span>
        </div>

        {/* Main headline — Cormorant, cinematic scale */}
        <h1
          className={`font-display font-light leading-none tracking-tight mb-10 transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          style={{
            fontSize: 'clamp(3.2rem, 9vw, 9rem)',
            color: 'var(--white)',
            transitionDelay: '0.25s',
            maxWidth: '14ch',
          }}
        >
          The quiet force<br />
          <em style={{ color: 'var(--cloud)', fontStyle: 'italic', fontWeight: 300 }}>
            behind every<br />idle asset.
          </em>
        </h1>

        {/* Sub-copy + CTAs row */}
        <div className="flex flex-col lg:flex-row lg:items-end gap-10 lg:gap-20">

          {/* Sub-copy */}
          <div
            className={`max-w-sm transition-all duration-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
            style={{ transitionDelay: '0.45s' }}
          >
            <p className="text-sm leading-relaxed mb-6" style={{ color: 'var(--silver)' }}>
              Africa holds over $1 trillion in idle equipment, power, and
              spaces. We connect those assets to the creators and businesses
              who need them — through IoT devices and smart contracts.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="#contact" className="btn-primary animate-pulse-w">
                <span>Get Early Access</span>
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link href="#how-it-works" className="btn-outline">
                <span>See How It Works</span>
              </Link>
            </div>
          </div>

          {/* Stat trio — right */}
          <div
            className={`flex flex-row lg:flex-row gap-8 lg:gap-12 lg:ml-auto transition-all duration-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
            style={{ transitionDelay: '0.6s' }}
          >
            {[
              { val: '$1T+',  label: 'Idle assets\nacross Africa' },
              { val: '600M+', label: 'Without\nreliable power'   },
              { val: '4 mo',  label: 'To full\nROI payback'      },
            ].map(stat => (
              <div key={stat.val} className="flex flex-col">
                <span
                  className="font-display font-light leading-none mb-1"
                  style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', color: 'var(--white)', letterSpacing: '-0.02em' }}
                >
                  {stat.val}
                </span>
                <span
                  className="font-mono-dm uppercase"
                  style={{ fontSize: '0.55rem', letterSpacing: '0.18em', color: 'var(--ash)', whiteSpace: 'pre-line', lineHeight: 1.5 }}
                >
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom rule + scroll cue */}
      <div
        className="absolute bottom-0 left-0 right-0 flex items-center justify-between px-8 pb-5 pointer-events-none"
        style={{ borderTop: 'var(--rule)' }}
      >
        <div className="flex gap-5">
          {['IoT-Powered', 'Smart Contracts', 'Built for Africa', 'Trustless'].map(b => (
            <span key={b} className="font-mono-dm uppercase hidden sm:block" style={{ fontSize: '0.55rem', letterSpacing: '0.18em', color: 'var(--ash)' }}>
              {b}
            </span>
          ))}
        </div>
        <div className="flex flex-col items-center gap-1 animate-float pointer-events-auto">
          <span className="font-mono-dm uppercase" style={{ fontSize: '0.52rem', letterSpacing: '0.22em', color: 'var(--ash)' }}>Scroll</span>
          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ color: 'var(--ash)' }}>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </section>
  )
}
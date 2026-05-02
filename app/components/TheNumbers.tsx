'use client'
import { useEffect, useRef, useState } from 'react'

const stats = [
  { numericValue: 1,   prefix: '$', suffix: 'T+',  label: 'Idle industrial assets in Africa',  sub: 'Sitting unused every single day',        id: 'ASSET-MKT'  },
  { numericValue: 600, prefix: '',  suffix: 'M+',  label: 'Africans without reliable power',   sub: 'Locked out of the productive economy',   id: 'PWR-DEFICIT' },
  { numericValue: 60,  prefix: '',  suffix: '%',   label: "Youth underemployment rate",         sub: 'Skills without tools or access',          id: 'EMPL-GAP'   },
  { numericValue: 75,  prefix: '$', suffix: '/mo', label: 'Revenue per Softari power pack',     sub: 'Just 15 rental days at $5/day',           id: 'REV-NODE'   },
]

function CountUp({ target, prefix, suffix, inView }: { target: number; prefix: string; suffix: string; inView: boolean }) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!inView) return
    const steps = 60; const dur = 1800; const inc = target / steps; let cur = 0
    const t = setInterval(() => {
      cur += inc
      if (cur >= target) { setCount(target); clearInterval(t) }
      else setCount(Math.floor(cur))
    }, dur / steps)
    return () => clearInterval(t)
  }, [inView, target])
  return (
    <span className="font-mono-dm font-black block" style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', color: 'var(--cyan)', letterSpacing: '-0.03em', lineHeight: 1 }}>
      {prefix}{count}{suffix}
    </span>
  )
}

export default function TheNumbers() {
  const ref = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true) }, { threshold: 0.2 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <section
      ref={ref}
      className="section-pad relative overflow-hidden "
      style={{ background: 'var(--bg-raised)' }}
    >
      {/* Dot grid */}
      <div className="absolute inset-0 dot-grid pointer-events-none" style={{ opacity: 0.35 }} />

      {/* Connecting line — desktop */}
      <div
        className="absolute hidden lg:block"
        style={{
          top: '50%',
          left: 'calc(12.5% + 2rem)',
          right: 'calc(12.5% + 2rem)',
          height: '1px',
          background: 'linear-gradient(90deg, transparent, rgba(0,212,255,0.08), rgba(0,212,255,0.08), rgba(0,212,255,0.08), transparent)',
          zIndex: 0,
        }}
      />

      <div className="container-pad relative z-10">

        {/* Header */}
        <div className="text-center mb-14">
          <span className="eyebrow">System Telemetry</span>
          <h2
            className="font-display font-black mt-5"
            style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', color: 'var(--text-white)', letterSpacing: '-0.025em', lineHeight: 1.05 }}
          >
            This problem is massive.{' '}
            <span style={{ WebkitTextStroke: '1px rgba(255,255,255,0.18)', color: 'transparent' }}>
              So is the opportunity.
            </span>
          </h2>
        </div>

        {/* Data nodes grid */}
        <div
          className="grid grid-cols-2 lg:grid-cols-4"
          style={{ border: '1px solid var(--border-dim)', borderRadius: 'var(--radius-xl)', overflow: 'hidden' }}
        >
          {stats.map((s, i) => (
            <div
              key={s.label}
              className="p-6 md:p-8 relative group transition-all duration-300"
              style={{
                background: inView ? (i % 2 === 0 ? 'var(--bg-elevated)' : 'var(--bg-surface)') : 'var(--bg-elevated)',
                borderRight: i < 3 ? '1px solid var(--border-dim)' : 'none',
                transitionDelay: `${i * 100}ms`,
              }}
            >
              {/* Node ID */}
              <div
                className="font-mono-dm text-[0.5rem] tracking-widest mb-3 flex items-center gap-1.5"
                style={{ color: 'var(--text-muted)', letterSpacing: '0.22em' }}
              >
                <span className="w-1 h-1 rounded-full" style={{ background: 'var(--cyan)', opacity: 0.5 }} />
                {s.id}
              </div>

              <CountUp target={s.numericValue} prefix={s.prefix} suffix={s.suffix} inView={inView} />

              <div className="mt-3 text-sm font-medium" style={{ color: 'var(--text-soft)' }}>{s.label}</div>
              <div className="mt-1 text-xs leading-snug" style={{ color: 'var(--text-mid)' }}>{s.sub}</div>

              {/* Hover glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-300"
                style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(0,212,255,0.04) 0%, transparent 70%)' }}
              />
            </div>
          ))}
        </div>

        {/* Callout — terminal style */}
        <div
          className="mt-6 terminal"
        >
          <div className="terminal-bar">
            <div className="terminal-dot" />
            <div className="terminal-dot" />
            <div className="terminal-dot" />
            <span className="font-mono-dm text-[0.58rem] tracking-wider ml-2" style={{ color: 'var(--text-muted)' }}>
              softari.node → revenue_model.calc
            </span>
          </div>
          <div className="p-5 md:p-6">
            <p className="font-mono-dm" style={{ fontSize: 'clamp(0.8rem, 1.5vw, 1rem)', color: 'var(--text-soft)', lineHeight: 1.8 }}>
              <span style={{ color: 'var(--text-dim)' }}>$ </span>
              <span style={{ color: 'var(--cyan)' }}>calc</span>
              {' '}--unit=power_pack --cost=300 --rate=5 --days=15
            </p>
            <p className="font-mono-dm mt-3" style={{ fontSize: 'clamp(0.85rem, 1.6vw, 1.05rem)', color: 'var(--text-bright)', lineHeight: 1.8 }}>
              → Monthly revenue:{' '}
              <span style={{ color: 'var(--cyan)' }}>$75/mo</span>
              {'  '}·{'  '}
              Payback period:{' '}
              <span style={{ color: 'var(--text-soft)' }}>4 months</span>
              {'  '}·{'  '}
              Post-payback:{' '}
              <span style={{ color: 'var(--text-white)' }}>pure profit</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
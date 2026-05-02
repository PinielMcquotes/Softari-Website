'use client'
import { useEffect, useRef, useState } from 'react'

const capabilities = [
  {
    id: 'CAP-01',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2} strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="4" width="16" height="16" rx="2"/><line x1="9" y1="4" x2="9" y2="20"/>
        <line x1="4" y1="9" x2="9" y2="9"/><line x1="4" y1="15" x2="9" y2="15"/>
      </svg>
    ),
    title: 'Proprietary IoT Hardware',
    body: 'Not off-the-shelf — locally engineered devices tuned for heat, dust, low power, and intermittent connectivity. Competitors need years to replicate.',
  },
  {
    id: 'CAP-02',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2} strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"/>
      </svg>
    ),
    title: 'Platform, Not a Product',
    body: 'Power packs are the entry point. The Softari platform scales to equipment, vehicles, space — any physical asset. The addressable market is unlimited.',
  },
  {
    id: 'CAP-03',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2} strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/>
      </svg>
    ),
    title: 'Two-Sided Network Effects',
    body: 'Every supplier attracts more renters. Every renter attracts more suppliers. Growth compounds — a true marketplace moat that deepens with scale.',
  },
  {
    id: 'CAP-04',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2} strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
      </svg>
    ),
    title: 'Proprietary Data Layer',
    body: 'The IoT layer generates unique asset performance intelligence. Sold back to suppliers as SaaS — a revenue stream no competitor in this space has.',
  },
]

const comparison = [
  { attr: 'What it is',    competitor: 'Consumer gadget',     softari: 'Infrastructure platform'             },
  { attr: 'Asset types',   competitor: 'Single-purpose only', softari: 'Power · Equipment · Space · Energy'  },
  { attr: 'Technology',    competitor: 'QR scan & charge',    softari: 'LoRaWAN IoT + Smart Contracts'       },
  { attr: 'For suppliers', competitor: 'No — consumer only',  softari: 'Yes — passive income enabled'        },
  { attr: 'Scalability',   competitor: 'Hardware-limited',    softari: 'Any physical asset, any category'    },
]

export default function WhySoftari() {
  const ref = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)
  const [activeRow, setActiveRow] = useState<number | null>(null)

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true) }, { threshold: 0.1 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <section
      id="why-softari"
      ref={ref}
      className="section-pad relative overflow-hidden"
      style={{ background: 'var(--bg-raised)' }}
    >
      {/* Subtle glow */}
      <div
        className="absolute -top-64 -right-64 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(0,212,255,0.04) 0%, transparent 65%)' }}
      />

      <div className="container-pad relative z-10">

        {/* ── Header ── */}
        <div className="text-center mb-14 ">
          <span className="eyebrow">System Capabilities</span>
          <h2
            className="font-display font-black mt-5 mb-3"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.8rem)', color: 'var(--text-white)', letterSpacing: '-0.025em', lineHeight: 0.95 }}
          >
            Why This System Wins.
          </h2>
          <p
            className="font-display italic"
            style={{ fontSize: 'clamp(1rem, 2vw, 1.3rem)', color: 'var(--text-mid)' }}
          >
            We are not a product. We are the infrastructure.
          </p>
        </div>

        {/* ── Capability modules ── */}
        <div className="grid md:grid-cols-2 gap-3 mb-20">
          {capabilities.map((c, i) => (
            <div
              key={c.id}
              className="group flex gap-4 p-6 cursor-default"
              style={{
                background: 'var(--bg-elevated)',
                border: '1px solid var(--border-dim)',
                borderLeft: '2px solid rgba(0,212,255,0.3)',
                borderRadius: 'var(--radius-lg)',
                opacity: inView ? 1 : 0,
                transform: inView ? 'translateY(0)' : 'translateY(16px)',
                transition: 'opacity 0.6s, transform 0.6s, border-color 0.3s, background 0.3s',
                transitionDelay: `${i * 90}ms`,
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderLeftColor = 'var(--cyan)'
                e.currentTarget.style.background = 'var(--bg-surface)'
                e.currentTarget.style.boxShadow = '-4px 0 20px rgba(0,212,255,0.08)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderLeftColor = 'rgba(0,212,255,0.3)'
                e.currentTarget.style.background = 'var(--bg-elevated)'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              <div>
                {/* Module ID */}
                <div className="font-mono-dm text-[0.5rem] tracking-widest mb-2 flex items-center gap-2" style={{ color: 'var(--text-muted)' }}>
                  <span className="w-1 h-1 rounded-full" style={{ background: 'var(--cyan)', opacity: 0.5 }} />
                  {c.id}
                </div>
                {/* Icon + title */}
                <div className="flex items-center gap-2.5 mb-2">
                  <span style={{ color: 'var(--cyan)' }}>{c.icon}</span>
                  <h3 className="font-display text-lg font-bold" style={{ color: 'var(--text-white)' }}>{c.title}</h3>
                </div>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-mid)' }}>{c.body}</p>
              </div>
            </div>
          ))}
        </div>

        {/* ── Terminal comparison ── */}
        <div className="">
          <div className="text-center mb-8">
            <p
              className="font-display text-xl md:text-2xl italic mb-2"
              style={{ color: 'var(--text-soft)' }}
            >
              "What makes you different from your competitors?"
            </p>
            <p className="font-mono-dm text-[0.65rem] tracking-wider" style={{ color: 'var(--text-muted)' }}>
              SYSTEM COMPARISON · INFRASTRUCTURE LAYER ANALYSIS
            </p>
          </div>

          <div className="terminal overflow-x-auto">
            {/* Terminal bar */}
            <div className="terminal-bar">
              <div className="terminal-dot" /><div className="terminal-dot" /><div className="terminal-dot" />
              <span className="font-mono-dm text-[0.55rem] tracking-widest ml-2 flex-1" style={{ color: 'var(--text-muted)' }}>
                softari.compare → competitive_analysis.run
              </span>
              <span className="font-mono-dm text-[0.55rem] tracking-widest" style={{ color: 'var(--cyan)' }}>
                LIVE
              </span>
            </div>

            {/* Table header */}
            <div
              className="grid min-w-[520px]"
              style={{ gridTemplateColumns: '1.2fr 1fr 1fr', borderBottom: '1px solid var(--border-dim)' }}
            >
              <div className="px-5 py-3.5 font-mono-dm text-[0.58rem] tracking-widest uppercase" style={{ color: 'var(--text-muted)' }}>
                Parameter
              </div>
              <div
                className="px-5 py-3.5 font-mono-dm text-[0.58rem] tracking-widest uppercase text-center"
                style={{ color: 'var(--text-dim)', borderLeft: '1px solid var(--border-dim)', background: 'rgba(0,0,0,0.2)' }}
              >
                Other Providers
              </div>
              <div
                className="px-5 py-3.5 font-mono-dm text-[0.58rem] tracking-widest uppercase text-center"
                style={{ color: 'var(--cyan)', borderLeft: '1px solid rgba(0,212,255,0.2)', background: 'rgba(0,212,255,0.05)' }}
              >
                Softari Technologies
              </div>
            </div>

            {comparison.map((row, i) => (
              <div
                key={row.attr}
                className="grid cursor-pointer min-w-[520px]"
                style={{
                  gridTemplateColumns: '1.2fr 1fr 1fr',
                  borderTop: '1px solid var(--border-dim)',
                  background: activeRow === i
                    ? 'rgba(0,212,255,0.04)'
                    : i % 2 === 0 ? 'var(--bg-raised)' : 'var(--bg-elevated)',
                  transition: 'background 0.2s',
                }}
                onMouseEnter={() => setActiveRow(i)}
                onMouseLeave={() => setActiveRow(null)}
              >
                <div className="px-5 py-3.5 font-mono-dm text-xs" style={{ color: 'var(--text-soft)' }}>{row.attr}</div>
                <div
                  className="px-5 py-3.5 font-mono-dm text-xs text-center"
                  style={{ color: 'var(--text-dim)', borderLeft: '1px solid var(--border-dim)' }}
                >
                  {row.competitor}
                </div>
                <div
                  className="px-5 py-3.5 font-mono-dm text-xs text-center font-medium"
                  style={{
                    color: activeRow === i ? 'var(--cyan)' : 'var(--text-soft)',
                    borderLeft: '1px solid rgba(0,212,255,0.15)',
                    transition: 'color 0.2s',
                  }}
                >
                  {row.softari}
                </div>
              </div>
            ))}

            {/* Terminal conclusion */}
            <div
              className="px-5 py-4 font-mono-dm text-xs"
              style={{ background: 'rgba(0,212,255,0.04)', borderTop: '1px solid rgba(0,212,255,0.12)' }}
            >
              <span style={{ color: 'var(--text-dim)' }}>$ </span>
              <span style={{ color: 'var(--text-mid)' }}>conclusion → </span>
              <span style={{ color: 'var(--text-soft)' }}>Others rent a device. </span>
              <span style={{ color: 'var(--cyan)' }}>Softari builds the operating layer every asset-sharing business in Africa will run on.</span>
              <span className="animate-blink" style={{ color: 'var(--cyan)' }}>_</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
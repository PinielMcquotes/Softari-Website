'use client'
import { useEffect, useRef, useState } from 'react'

const solutions = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2} strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 10V3L4 14h7v7l9-11h-7z"/>
      </svg>
    ),
    title: 'Energy Sharing',
    headline: 'Power when you need it.',
    body: 'Rent lithium-ion power packs that keep your shop, studio, or home running through any outage. IoT-monitored, smart-contract-secured.',
    tag: 'ACTIVE',
    featured: true,
    metric: '$75/mo',
    metricLabel: 'Revenue per unit',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2} strokeLinecap="round" strokeLinejoin="round">
        <path d="M17.657 16.657L13.414 20.9a2 2 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
      </svg>
    ),
    title: 'Asset Tracking',
    headline: 'Know where every asset is.',
    body: 'Real-time GPS and LoRaWAN tracking for equipment, vehicles, and infrastructure. Full visibility, zero guesswork.',
    tag: 'QUEUED',
    featured: false,
    metric: 'Q3 2025',
    metricLabel: 'Target deploy',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2} strokeLinecap="round" strokeLinejoin="round">
        <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/>
        <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
      </svg>
    ),
    title: 'Predictive Maintenance',
    headline: 'Fix it before it breaks.',
    body: 'IoT sensors monitor asset health in real time. AI-powered alerts prevent downtime before it costs money.',
    tag: 'QUEUED',
    featured: false,
    metric: 'Q4 2025',
    metricLabel: 'Target deploy',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2} strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
      </svg>
    ),
    title: 'Space & Security',
    headline: 'Share your space. Securely.',
    body: 'Smart locks, access control, and audit logs for offices, workshops, and commercial spaces — fully remote.',
    tag: 'QUEUED',
    featured: false,
    metric: '2026',
    metricLabel: 'Roadmap target',
  },
]

export default function Solutions() {
  const ref = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true) }, { threshold: 0.1 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <section
      id="solutions"
      ref={ref}
      className="section-pad relative overflow-hidden"
      style={{ background: 'var(--bg-base)' }}
    >
      {/* Dot grid */}
      <div className="absolute inset-0 dot-grid pointer-events-none" style={{ opacity: 0.25 }} />

      <div className="container-pad relative z-10">

        {/* Header */}
        <div className="text-center mb-14 ">
          <span className="eyebrow">Platform Modules</span>
          <h2
            className="font-display font-black mt-5 mb-4"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.8rem)', color: 'var(--text-white)', letterSpacing: '-0.025em', lineHeight: 0.95 }}
          >
            Every idle asset is<br />
            <span className="gradient-text">an opportunity.</span>
          </h2>
          <p style={{ color: 'var(--text-mid)', maxWidth: '44ch', margin: '0 auto', fontSize: '0.95rem', lineHeight: 1.75 }}>
            We start with energy and scale to every category of physical asset.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-5">
          {solutions.map((sol, i) => {
            const isActive  = sol.tag === 'ACTIVE'
            const isQueued  = sol.tag === 'QUEUED'

            return (
              <div
                key={sol.title}
                className="relative overflow-hidden group"
                style={{
                  background: isActive ? 'var(--bg-surface)' : 'var(--bg-elevated)',
                  border: isActive ? '1px solid rgba(0,212,255,0.25)' : '1px solid var(--border-dim)',
                  borderRadius: 'var(--radius-xl)',
                  opacity: inView ? 1 : 0,
                  transform: inView ? 'translateY(0)' : 'translateY(20px)',
                  transition: 'opacity 0.6s, transform 0.6s, border-color 0.3s, box-shadow 0.3s',
                  transitionDelay: `${i * 90}ms`,
                  boxShadow: isActive ? '0 0 40px rgba(0,212,255,0.06), inset 0 1px 0 rgba(0,212,255,0.08)' : 'none',
                }}
              >
                {/* Hover glow overlay */}
                <div
                  className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-400"
                  style={{ background: isActive ? 'radial-gradient(ellipse at 30% 0%, rgba(0,212,255,0.05) 0%, transparent 60%)' : 'radial-gradient(ellipse at 30% 0%, rgba(255,255,255,0.02) 0%, transparent 60%)' }}
                />

                {/* Top module bar */}
                <div
                  className="px-6 py-3 flex items-center justify-between"
                  style={{
                    borderBottom: '1px solid var(--border-dim)',
                    background: isActive ? 'rgba(0,212,255,0.05)' : 'var(--bg-base)',
                  }}
                >
                  <div className="flex items-center gap-2">
                    <span
                      style={{ color: isActive ? 'var(--cyan)' : 'var(--text-dim)' }}
                    >
                      {sol.icon}
                    </span>
                    <span
                      className="font-mono-dm text-[0.58rem] tracking-widest uppercase"
                      style={{ color: isActive ? 'var(--cyan)' : 'var(--text-muted)' }}
                    >
                      {sol.title}
                    </span>
                  </div>
                  {isActive ? (
                    <span className="status-active">Active</span>
                  ) : (
                    <span className="status-locked">Queued</span>
                  )}
                </div>

                <div className="p-7 md:p-8">
                  <h3
                    className="font-display text-2xl font-bold mb-2"
                    style={{ color: 'var(--text-white)' }}
                  >
                    {sol.headline}
                  </h3>
                  <p className="text-sm leading-relaxed mb-5" style={{ color: 'var(--text-mid)' }}>
                    {sol.body}
                  </p>

                  {/* Metric */}
                  <div
                    className="flex items-baseline gap-2 pt-4"
                    style={{ borderTop: '1px solid var(--border-dim)' }}
                  >
                    <span
                      className="font-mono-dm font-bold text-xl"
                      style={{ color: isActive ? 'var(--cyan)' : 'var(--text-dim)', letterSpacing: '-0.02em' }}
                    >
                      {sol.metric}
                    </span>
                    <span className="font-mono-dm text-[0.6rem] tracking-wider uppercase" style={{ color: 'var(--text-muted)' }}>
                      {sol.metricLabel}
                    </span>
                  </div>
                </div>

                {/* Active corner mark */}
                {isActive && (
                  <>
                    <div className="absolute top-0 left-0 w-4 h-4" style={{ borderTop: '1px solid var(--cyan)', borderLeft: '1px solid var(--cyan)', borderRadius: '12px 0 0 0' }} />
                    <div className="absolute bottom-0 right-0 w-4 h-4" style={{ borderBottom: '1px solid var(--cyan)', borderRight: '1px solid var(--cyan)', borderRadius: '0 0 12px 0' }} />
                  </>
                )}
              </div>
            )
          })}
        </div>

        <p className="text-center text-xs mt-10 font-mono-dm tracking-wider " style={{ color: 'var(--text-muted)' }}>
          PLATFORM-AGNOSTIC · SCALES TO ANY PHYSICAL ASSET CLASS · VEHICLES · EQUIPMENT · OFFICES · FARMLAND
        </p>
      </div>
    </section>
  )
}
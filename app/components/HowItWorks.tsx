'use client'
import { useEffect, useRef, useState } from 'react'

const steps = [
  {
    num: '01',
    title: 'List Your Asset',
    tag: 'For Asset Owners',
    body: 'Register idle equipment, energy, or space on the Softari platform. We install a proprietary IoT device — enabling real-time monitoring, remote access control, and usage intelligence.',
    detail: 'LoRaWAN IoT · Remote Access · Usage Analytics',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    num: '02',
    title: 'Rent Securely',
    tag: 'For Creators & SMEs',
    body: 'A creator or small business discovers the listing, books it, and pays via smart contract. Power flows instantly. No middleman. No paperwork. No risk of non-payment.',
    detail: 'Smart Contracts · Instant Access · Zero Friction',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
      </svg>
    ),
  },
  {
    num: '03',
    title: 'Earn Passively',
    tag: 'Win–Win–Win',
    body: 'The asset owner earns $75/month from just 15 rental days. Predictive maintenance keeps assets in peak condition. The economy moves forward. Everyone gains.',
    detail: 'Automated Payouts · Predictive Maintenance · Passive Income',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
]

export default function HowItWorks() {
  const ref = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setInView(true) },
      { threshold: 0.1 }
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <section
      id="how-it-works"
      ref={ref}
      className="section-pad relative overflow-hidden"
      style={{ background: 'var(--ink)', borderTop: 'var(--rule)' }}
    >
      <div className="container-pad relative z-10">

        {/* Header */}
        <div
          className="flex flex-col md:flex-row md:items-end gap-6 mb-16 pb-10"
          style={{ borderBottom: 'var(--rule)' }}
        >
          <div className="flex-1">
            <div className="eyebrow mb-6">The Process</div>
            <h2
              className="font-display font-light leading-none"
              style={{ fontSize: 'clamp(2.2rem, 5vw, 4rem)', color: 'var(--white)', letterSpacing: '-0.03em' }}
            >
              Three steps.<br />
              <em style={{ fontStyle: 'italic', color: 'var(--cloud)' }}>One platform.</em>
            </h2>
          </div>
          <p className="max-w-xs text-sm" style={{ color: 'var(--silver)', paddingBottom: '0.2rem' }}>
            Powered by LoRaWAN IoT and smart contracts. Every transaction is
            automated, trustless, and fully auditable.
          </p>
        </div>

        {/* Steps grid */}
        <div className="grid md:grid-cols-3" style={{ border: 'var(--rule)' }}>
          {steps.map((step, i) => (
            <div
              key={step.num}
              className={`p-8 md:p-10 flex flex-col gap-6 transition-all duration-700 hover-lift ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{
                borderRight: i < 2 ? 'var(--rule)' : 'none',
                borderBottom: 'var(--rule)',
                transitionDelay: `${i * 120}ms`,
              }}
            >
              {/* Header row */}
              <div className="flex items-start justify-between">
                <span
                  className="font-display font-light"
                  style={{ fontSize: '3.5rem', color: 'rgba(255,255,255,0.08)', lineHeight: 1, letterSpacing: '-0.04em' }}
                >
                  {step.num}
                </span>
                <div style={{ color: 'var(--fog)' }}>
                  {step.icon}
                </div>
              </div>

              {/* Tag */}
              <span
                className="font-mono-dm uppercase self-start"
                style={{
                  fontSize: '0.57rem',
                  letterSpacing: '0.2em',
                  color: 'var(--fog)',
                  borderBottom: '1px solid rgba(255,255,255,0.12)',
                  paddingBottom: '0.3rem',
                }}
              >
                {step.tag}
              </span>

              {/* Title */}
              <h3
                className="font-display font-medium"
                style={{ fontSize: '1.7rem', color: 'var(--white)', letterSpacing: '-0.01em', lineHeight: 1.1 }}
              >
                {step.title}
              </h3>

              {/* Body */}
              <p className="text-sm leading-relaxed flex-1" style={{ color: 'var(--silver)' }}>
                {step.body}
              </p>

              {/* Detail strip */}
              <p
                className="font-mono-dm text-xs"
                style={{ fontSize: '0.58rem', letterSpacing: '0.12em', color: 'var(--ash)', textTransform: 'uppercase' }}
              >
                {step.detail}
              </p>
            </div>
          ))}
        </div>

        {/* Tech strip */}
        <div
          className="flex flex-wrap items-center gap-x-8 gap-y-3 py-5 px-0 mt-0"
          style={{ borderBottom: 'var(--rule)' }}
        >
          {['LoRaWAN IoT', 'Smart Contracts', 'Real-time Monitoring', 'Predictive Maintenance', 'Automated Payouts'].map((t, i) => (
            <span
              key={t}
              className="font-mono-dm flex items-center gap-2"
              style={{ fontSize: '0.58rem', letterSpacing: '0.16em', color: 'var(--ash)', textTransform: 'uppercase' }}
            >
              {i > 0 && <span style={{ width: '3px', height: '3px', borderRadius: '50%', background: 'var(--smoke)', display: 'inline-block' }} />}
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
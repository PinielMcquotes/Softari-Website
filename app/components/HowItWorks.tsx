'use client'
import { useEffect, useRef, useState } from 'react'

const steps = [
  {
    num: '01',
    tag: 'Hardware',
    title: 'Device Installed',
    body: 'A Softari IoT device is fitted to the asset — energy pack, equipment, or space. Under one hour. No specialist required.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.2} strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
        <rect x="4" y="4" width="16" height="16" rx="2"/><line x1="9" y1="4" x2="9" y2="20"/><line x1="15" y1="4" x2="15" y2="20"/>
        <line x1="4" y1="9" x2="9" y2="9"/><line x1="4" y1="15" x2="9" y2="15"/>
      </svg>
    ),
    detail: 'Local hardware · Sub-1hr install · Offline-capable',
  },
  {
    num: '02',
    tag: 'Connectivity',
    title: 'Asset Goes Live',
    body: 'The device connects to the Softari platform via GSM or LPWAN. Real-time status, usage tracking, and access control activate immediately.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.2} strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
        <path d="M1.5 8.5s4.5-5 10.5-5 10.5 5 10.5 5"/><path d="M5 12s2.5-3 7-3 7 3 7 3"/>
        <path d="M8.5 15.5s1.5-2 3.5-2 3.5 2 3.5 2"/><circle cx="12" cy="19" r="1" fill="currentColor"/>
      </svg>
    ),
    detail: 'GSM + LoRaWAN · Offline-first · Real-time sync',
  },
  {
    num: '03',
    tag: 'Platform',
    title: 'User Accesses',
    body: 'Renters discover and book the asset via mobile or web. A smart contract executes on payment — access granted automatically.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.2} strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
        <rect x="5" y="2" width="14" height="20" rx="2"/><line x1="12" y1="18" x2="12" y2="18.01" strokeWidth={2}/>
        <path d="M9 6h6"/><path d="M9 10h6"/>
      </svg>
    ),
    detail: 'Mobile + Web · Smart contract gate · No friction',
  },
  {
    num: '04',
    tag: 'Payments',
    title: 'Owner Gets Paid',
    body: 'Funds settle to the digital wallet instantly. No invoices. No collection risk. No delays. Revenue — fully automated.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.2} strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
        <rect x="2" y="6" width="20" height="14" rx="2"/><path d="M2 10h20"/>
        <path d="M6 14h2"/><path d="M10 14h4"/>
      </svg>
    ),
    detail: 'Digital wallet · Instant settlement · Auto-payout',
  },
]

export default function HowItWorks() {
  const ref = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)
  const [hovered, setHovered] = useState<number | null>(null)

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true) }, { threshold: 0.12 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <section
      id="how-it-works"
      ref={ref}
      className="section-pad relative overflow-hidden"
      style={{ background: 'var(--bg-elevated)' }}
    >
      {/* Line grid */}
      <div className="absolute inset-0 line-grid pointer-events-none" style={{ opacity: 0.3 }} />

      <div className="container-pad relative z-10">

        {/* Header */}
        <div className="text-center mb-16 md:mb-20 ">
          <span className="eyebrow">Process Flow</span>
          <h2
            className="font-display font-black mt-5"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.8rem)', color: 'var(--text-white)', letterSpacing: '-0.025em', lineHeight: 0.95 }}
          >
            Four steps. Any asset.<br />
            <span style={{ WebkitTextStroke: '1px rgba(255,255,255,0.14)', color: 'transparent' }}>
              Fully automated.
            </span>
          </h2>
        </div>

        {/* Steps */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 relative">

          {/* Progress connector — desktop */}
          <div
            className="hidden lg:block absolute z-0"
            style={{
              top: '52px',
              left: 'calc(12.5% + 10px)',
              right: 'calc(12.5% + 10px)',
              height: '1px',
            }}
          >
            <div
              className="w-full h-full"
              style={{ background: 'linear-gradient(90deg, rgba(0,212,255,0.25), rgba(0,212,255,0.1), rgba(0,212,255,0.1), rgba(0,212,255,0.25))' }}
            />
          </div>

          {steps.map((step, i) => (
            <div
              key={step.num}
              className="panel-card p-7 flex flex-col relative z-10 cursor-pointer"
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? 'translateY(0)' : 'translateY(20px)',
                transition: 'opacity 0.6s, transform 0.6s, border-color 0.3s, box-shadow 0.3s',
                transitionDelay: `${i * 100}ms`,
                borderColor: hovered === i ? 'rgba(0,212,255,0.3)' : 'var(--border-dim)',
                boxShadow: hovered === i ? '0 0 0 1px rgba(0,212,255,0.06), 0 20px 60px rgba(0,0,0,0.4), 0 0 30px rgba(0,212,255,0.06)' : 'none',
                background: hovered === i ? 'var(--bg-surface)' : 'var(--bg-elevated)',
              }}
            >
              {/* Step number circle */}
              <div
                className="w-[52px] h-[52px] rounded-full flex items-center justify-center mb-5 mx-auto relative"
                style={{
                  background: 'var(--bg-base)',
                  border: hovered === i ? '1px solid var(--cyan)' : '1px solid var(--border-soft)',
                  transition: 'border-color 0.3s',
                  boxShadow: hovered === i ? '0 0 16px rgba(0,212,255,0.25)' : 'none',
                }}
              >
                <span
                  className="font-mono-dm text-xs font-bold tracking-widest"
                  style={{ color: hovered === i ? 'var(--cyan)' : 'var(--text-mid)' }}
                >
                  {step.num}
                </span>
                {/* Signal pulse on hover */}
                {hovered === i && (
                  <span
                    className="absolute inset-0 rounded-full"
                    style={{
                      border: '1px solid rgba(0,212,255,0.3)',
                      animation: 'signalPulse 1.2s ease-out infinite',
                    }}
                  />
                )}
              </div>

              {/* Tag */}
              <span
                className="font-mono-dm text-[0.55rem] tracking-widest uppercase text-center block mb-3"
                style={{ color: hovered === i ? 'var(--cyan)' : 'var(--text-muted)', transition: 'color 0.2s' }}
              >
                {step.tag}
              </span>

              {/* Icon */}
              <div
                className="flex justify-center mb-4"
                style={{ color: hovered === i ? 'var(--cyan)' : 'var(--text-dim)', transition: 'color 0.3s' }}
              >
                {step.icon}
              </div>

              <h3
                className="font-display text-lg font-bold mb-2 text-center"
                style={{ color: hovered === i ? 'var(--text-white)' : 'var(--text-bright)', transition: 'color 0.2s' }}
              >
                {step.title}
              </h3>
              <p className="text-sm leading-relaxed text-center mb-4 flex-1" style={{ color: 'var(--text-mid)' }}>
                {step.body}
              </p>

              {/* Detail line — appears on hover */}
              <div
                className="font-mono-dm text-[0.55rem] tracking-wider text-center border-t pt-3"
                style={{
                  color: 'var(--cyan)',
                  borderColor: 'var(--border-dim)',
                  opacity: hovered === i ? 1 : 0.3,
                  transition: 'opacity 0.3s',
                }}
              >
                {step.detail}
              </div>
            </div>
          ))}
        </div>

        {/* Tech pill strip */}
        <div
          className="mt-10 py-3.5 px-5 flex flex-wrap justify-center gap-4 md:gap-7 "
          style={{ background: 'var(--bg-base)', border: '1px solid var(--border-dim)', borderRadius: 'var(--radius-md)' }}
        >
          {['Custom IoT Hardware', 'GSM + LoRaWAN', 'Smart Contracts', 'Predictive Maintenance', 'Automated Settlement'].map(t => (
            <span key={t} className="flex items-center gap-2 font-mono-dm text-[0.6rem] tracking-wider uppercase" style={{ color: 'var(--text-dim)' }}>
              <span className="w-1 h-1 rounded-full" style={{ background: 'var(--cyan)', opacity: 0.4 }} />
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
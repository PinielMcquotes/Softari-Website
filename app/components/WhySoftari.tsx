'use client'
import { useEffect, useRef, useState } from 'react'

const moats = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18" />
      </svg>
    ),
    title: 'IoT + Smart Contracts',
    body: 'We build the hardware and software infrastructure. Every rental is automated, trustless, and fully auditable on-chain. Competitors cannot replicate this without years of R&D.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
    title: 'Platform, Not a Product',
    body: 'Power packs are our entry point. The Softari platform scales to equipment, vehicles, office space — any physical asset. Our addressable market is limitless.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    title: 'Two-Sided Network Effects',
    body: 'Every new supplier attracts more creators. Every creator attracts more suppliers. The more we grow, the harder we are to displace — a true marketplace moat.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: 'Proprietary Data Layer',
    body: 'Our IoT layer generates unique asset performance intelligence. We sell this data back to suppliers as a SaaS product — a revenue stream no competitor has.',
  },
]

const comparison = [
  { attr: 'What it is',    choto: 'Consumer gadget',       softari: 'Infrastructure platform'              },
  { attr: 'Asset types',   choto: 'Phone charging only',   softari: 'Power · Equipment · Space · Energy'   },
  { attr: 'Technology',    choto: 'QR scan & charge',      softari: 'LoRaWAN IoT + Smart Contracts'        },
  { attr: 'For suppliers', choto: 'No — consumer only',    softari: 'Yes — passive income enabled'         },
  { attr: 'Scalability',   choto: 'Hardware-limited',      softari: 'Any physical asset, any category'     },
]

export default function WhySoftari() {
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
      id="why-softari"
      ref={ref}
      className="section-pad relative overflow-hidden"
      style={{ background: '#111111' }}
    >
      {/* Subtle top-right glow */}
      <div
        className="absolute -top-32 -right-32 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.03) 0%, transparent 70%)' }}
      />

      <div className="container-pad relative z-10">

        {/* ── Moats section ── */}
        <div className="text-center mb-14">
          <span
            className="inline-block text-xs font-mono-dm tracking-widest uppercase px-3 py-1 rounded-full mb-4"
            style={{
              color: 'var(--grey-200)',
              background: 'rgba(255,255,255,0.06)',
              border: '1px solid rgba(255,255,255,0.14)',
            }}
          >
            Our Unfair Advantages
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-2" style={{ color: 'var(--white)' }}>
            We are not a product.
          </h2>
          <h2 className="font-display text-3xl md:text-5xl font-bold" style={{ color: 'var(--grey-300)' }}>
            We are the infrastructure.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-5 md:gap-6 mb-20 md:mb-24">
          {moats.map((m, i) => (
            <div
              key={m.title}
              className={`glass-card p-6 hover-lift flex gap-5 transition-all duration-700 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{
                transitionDelay: `${i * 100}ms`,
                borderLeft: '2px solid rgba(255,255,255,0.25)',
                borderColor: undefined,
                border: '1px solid rgba(255,255,255,0.07)',
                borderLeftWidth: '2px',
                borderLeftColor: 'rgba(255,255,255,0.3)',
              }}
            >
              <div
                className="w-12 h-12 rounded-lg flex items-center justify-center shrink-0"
                style={{ background: 'rgba(255,255,255,0.06)', color: 'var(--grey-100)' }}
              >
                {m.icon}
              </div>
              <div>
                <h3 className="font-display text-xl font-bold mb-2" style={{ color: 'var(--white)' }}>
                  {m.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>
                  {m.body}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* ── Competitive table ── */}
        <div>
          <div className="text-center mb-8">
            <p className="font-display text-xl md:text-2xl italic mb-2" style={{ color: 'var(--grey-100)' }}>
              "What makes you different from Choto Energy?"
            </p>
            <p className="text-sm" style={{ color: 'var(--muted)' }}>
              Great question. Here's the honest answer.
            </p>
          </div>

          <div
            className="rounded-2xl overflow-hidden overflow-x-auto"
            style={{ border: '1px solid rgba(255,255,255,0.1)' }}
          >
            {/* Table header */}
            <div className="grid grid-cols-3 min-w-[480px]">
              <div className="p-4" style={{ background: 'rgba(0,0,0,0.4)' }} />
              <div
                className="p-4 text-center text-sm font-medium"
                style={{ background: 'rgba(25,25,25,0.7)', color: 'var(--grey-400)' }}
              >
                Choto Energy
              </div>
              <div
                className="p-4 text-center text-sm font-bold"
                style={{ background: 'rgba(255,255,255,0.08)', color: 'var(--white)' }}
              >
                <span
                  className="inline-block px-3 py-1 rounded-full text-xs font-mono-dm font-bold tracking-wider"
                  style={{ background: 'var(--white)', color: 'var(--black)' }}
                >
                  Softari Technologies
                </span>
              </div>
            </div>

            {comparison.map((row, i) => (
              <div
                key={row.attr}
                className="grid grid-cols-3 min-w-[480px]"
                style={{
                  borderTop: '1px solid rgba(255,255,255,0.05)',
                  background: i % 2 === 0 ? 'rgba(12,12,12,0.7)' : 'rgba(20,20,20,0.5)',
                }}
              >
                <div className="p-4 text-sm font-medium" style={{ color: 'var(--cream)' }}>{row.attr}</div>
                <div className="p-4 text-sm text-center" style={{ color: 'var(--grey-400)' }}>{row.choto}</div>
                <div className="p-4 text-sm text-center font-medium" style={{ color: 'var(--grey-100)' }}>{row.softari}</div>
              </div>
            ))}
          </div>

          <p className="text-center text-sm mt-6 font-medium" style={{ color: 'var(--grey-200)' }}>
            Choto rents a battery.{' '}
            <span style={{ color: 'var(--white)' }}>
              We build the operating layer every asset-sharing business in Africa will run on.
            </span>
          </p>
        </div>
      </div>
    </section>
  )
}
'use client'
import { useEffect, useRef, useState } from 'react'

const solutions = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'Energy Sharing',
    headline: 'Power when you need it.',
    body: 'Rent lithium-ion power packs that keep your shop, studio, or home running through any power cut. IoT-monitored, smart-contract-secured.',
    tag: 'MVP Product',
    featured: true,
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: 'Asset Tracking',
    headline: 'Know where every asset is.',
    body: 'Real-time GPS and LoRaWAN tracking for equipment, vehicles, and infrastructure. Full visibility, zero guesswork.',
    tag: 'Coming Soon',
    featured: false,
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: 'Predictive Maintenance',
    headline: 'Fix it before it breaks.',
    body: 'Our IoT sensors monitor asset health in real time. AI-powered alerts prevent downtime before it costs you money.',
    tag: 'Coming Soon',
    featured: false,
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
    title: 'Space & Security',
    headline: 'Share your space. Securely.',
    body: 'Smart locks, access control, and audit logs for offices, workshops, and commercial spaces. Rent them out without ever being there.',
    tag: 'Coming Soon',
    featured: false,
  },
]

export default function Solutions() {
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
      id="solutions"
      ref={ref}
      className="section-pad relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #0d0d0d 0%, #111111 100%)' }}
    >
      <div className="container-pad relative z-10">
        {/* Header */}
        <div className="text-center mb-14">
          <span
            className="inline-block text-xs font-mono-dm tracking-widest uppercase px-3 py-1 rounded-full mb-4"
            style={{
              color: 'var(--grey-200)',
              background: 'rgba(255,255,255,0.06)',
              border: '1px solid rgba(255,255,255,0.14)',
            }}
          >
            Our Solutions
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4" style={{ color: 'var(--white)' }}>
            Every idle asset is<br />
            <span className="gradient-text">an opportunity.</span>
          </h2>
          <p className="max-w-lg mx-auto text-base" style={{ color: 'var(--muted)' }}>
            We start with energy and scale to every category of physical asset.
          </p>
        </div>

        {/* Solution cards */}
        <div className="grid md:grid-cols-2 gap-5 md:gap-6">
          {solutions.map((sol, i) => (
            <div
              key={sol.title}
              className={`glass-card overflow-hidden hover-lift transition-all duration-700 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              } ${sol.featured ? 'ring-1 ring-white/20' : ''}`}
              style={{
                transitionDelay: `${i * 100}ms`,
                borderColor: sol.featured ? 'rgba(255,255,255,0.2)' : 'rgba(255,255,255,0.06)',
                ...(sol.featured ? { boxShadow: '0 0 40px rgba(255,255,255,0.04)' } : {}),
              }}
            >
              {/* Featured badge */}
              {sol.featured && (
                <div
                  className="w-full text-center py-2 text-xs font-mono-dm font-medium tracking-widest uppercase"
                  style={{ background: 'var(--white)', color: 'var(--black)' }}
                >
                  ✦ First Product — Available Now
                </div>
              )}

              <div className="p-7 md:p-8">
                <div className="flex items-start justify-between mb-6 gap-4">
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center shrink-0"
                    style={{
                      background: 'rgba(255,255,255,0.07)',
                      color: 'var(--grey-100)',
                    }}
                  >
                    {sol.icon}
                  </div>
                  <span
                    className="text-xs font-mono-dm tracking-wider uppercase px-3 py-1 rounded-full shrink-0"
                    style={{
                      color: sol.featured ? 'var(--white)' : 'var(--grey-400)',
                      background: sol.featured ? 'rgba(255,255,255,0.1)' : 'rgba(255,255,255,0.04)',
                      border: '1px solid rgba(255,255,255,0.12)',
                    }}
                  >
                    {sol.tag}
                  </span>
                </div>

                <p className="text-xs font-mono-dm tracking-wider uppercase mb-2" style={{ color: 'var(--grey-400)' }}>
                  {sol.title}
                </p>
                <h3 className="font-display text-2xl font-bold mb-3" style={{ color: 'var(--white)' }}>
                  {sol.headline}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>
                  {sol.body}
                </p>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-sm mt-10 italic" style={{ color: 'var(--muted)' }}>
          Power packs are our entry point. Our platform is designed to scale to any physical asset — vehicles, equipment, offices, farmland.
        </p>
      </div>
    </section>
  )
}
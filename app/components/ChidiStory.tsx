'use client'
import { useEffect, useRef, useState } from 'react'

export default function ChidiStory() {
  const ref = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setInView(true) },
      { threshold: 0.12 }
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  const losses = [
    { label: 'Revenue lost per outage',  value: '$30–$50',        note: 'Per incident' },
    { label: 'Outages per month',        value: '10–15',          note: 'National average' },
    { label: 'Monthly revenue at risk',  value: '$450–$750',      note: 'Every month' },
    { label: 'Annual opportunity cost',  value: '$5,400–$9,000',  note: 'Every year' },
  ]

  return (
    <section
      className="relative overflow-hidden"
      style={{ background: 'var(--ink-deep)', borderTop: 'var(--rule)' }}
    >
      {/* Ghost numeral — decorative */}
      <span
        className="ghost-numeral select-none pointer-events-none"
        style={{ right: '-2rem', bottom: '-3rem', opacity: 0.025 }}
      >
        600M
      </span>

      <div className="container-pad">
        <div className="grid lg:grid-cols-2" style={{ minHeight: '80vh' }}>

          {/* LEFT — Story column */}
          <div
            className={`py-20 md:py-28 pr-0 lg:pr-16 flex flex-col justify-center transition-all duration-1000 ${
              inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
            style={{ borderRight: 'var(--rule)' }}
          >
            <div className="eyebrow mb-8">The Human Cost</div>

            <h2
              className="font-display font-light leading-none mb-8"
              style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', color: 'var(--white)', letterSpacing: '-0.03em' }}
            >
              This isn't data.<br />
              <em style={{ fontStyle: 'italic', color: 'var(--cloud)' }}>
                It's someone's<br />livelihood.
              </em>
            </h2>

            {/* Pull quote — Old Mutual-style life narrative */}
            <div
              className="mb-8"
              style={{ borderLeft: '2px solid rgba(255,255,255,0.2)', paddingLeft: '1.25rem' }}
            >
              <h3
                className="font-display font-semibold mb-1"
                style={{ fontSize: '1.5rem', color: 'var(--white)' }}
              >
                Meet Chidi.
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--silver)' }}>
                A barber in Lagos. 6am start. Eight clients booked.
                Clippers on. Fan running. Phone charging.
              </p>
            </div>

            {/* The moment */}
            <div
              className="mb-8 py-6 px-6"
              style={{ background: 'rgba(255,255,255,0.03)', borderLeft: '2px solid var(--white)' }}
            >
              <p
                className="font-display font-medium mb-2"
                style={{ fontSize: '1.2rem', color: 'var(--white)' }}
              >
                9am. The power goes out.
              </p>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--silver)' }}>
                Clippers die. Clients leave. The day is over. No power.
                No work. No income. Again.
              </p>
            </div>

            <p className="text-xs italic" style={{ color: 'var(--ash)' }}>
              Chidi's story belongs to 600 million people across Africa.
              The infrastructure failure is systemic. The solution must be too.
            </p>
          </div>

          {/* RIGHT — Data column */}
          <div
            className={`py-20 md:py-28 pl-0 lg:pl-16 flex flex-col justify-center transition-all duration-1000 delay-300 ${
              inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            {/* Section label */}
            <div className="flex items-center gap-3 mb-8">
              <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} style={{ color: 'var(--ash)' }}>
                <circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/>
                <line x1="20" y1="4" x2="8.12" y2="15.88"/>
                <line x1="14.47" y1="14.48" x2="20" y2="20"/>
                <line x1="8.12" y1="8.12" x2="12" y2="12"/>
              </svg>
              <span
                className="font-mono-dm uppercase"
                style={{ fontSize: '0.6rem', letterSpacing: '0.2em', color: 'var(--ash)' }}
              >
                Chidi's Reality — Annual Impact
              </span>
            </div>

            {/* Data rows — clean editorial table */}
            <div style={{ border: 'var(--rule)' }}>
              {losses.map((row, i) => (
                <div
                  key={row.label}
                  className="flex items-center justify-between gap-4 py-5 px-6"
                  style={{
                    borderBottom: i < losses.length - 1 ? 'var(--rule)' : 'none',
                    background: i >= 2 ? 'rgba(255,255,255,0.025)' : 'transparent',
                  }}
                >
                  <div>
                    <p className="text-xs mb-0.5" style={{ color: 'var(--silver)' }}>{row.label}</p>
                    <p className="font-mono-dm text-xs" style={{ fontSize: '0.55rem', color: 'var(--ash)', letterSpacing: '0.1em' }}>
                      {row.note}
                    </p>
                  </div>
                  <span
                    className="font-display font-semibold shrink-0"
                    style={{
                      fontSize: i >= 2 ? '1.5rem' : '1.1rem',
                      color: i >= 2 ? 'var(--white)' : 'var(--mist)',
                      letterSpacing: '-0.02em',
                    }}
                  >
                    {row.value}
                  </span>
                </div>
              ))}
            </div>

            {/* Solution call-to-action */}
            <div
              className="mt-8 py-5 px-6"
              style={{ border: 'var(--rule)', background: 'rgba(255,255,255,0.03)' }}
            >
              <p className="font-mono-dm uppercase mb-2" style={{ fontSize: '0.58rem', letterSpacing: '0.2em', color: 'var(--fog)' }}>
                The Softari Solution
              </p>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--pearl)' }}>
                Chidi rents a Softari power pack for{' '}
                <strong style={{ color: 'var(--white)' }}>$5 a day</strong>.
                His shop stays open. His clients stay. His income is protected.
                The asset owner earns passive income. Everyone wins.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
'use client'
import { useEffect, useRef, useState } from 'react'

interface Stat {
  numericValue: number
  prefix: string
  suffix: string
  label: string
  sub: string
  index: string
}

const stats: Stat[] = [
  {
    numericValue: 1,
    prefix: '$', suffix: 'T+',
    label: 'In idle industrial assets across Africa',
    sub: 'Equipment, energy, and space sitting dormant — every single day.',
    index: '01',
  },
  {
    numericValue: 600,
    prefix: '', suffix: 'M+',
    label: 'Africans without reliable power',
    sub: 'Locked out of the productive economy by infrastructure failure.',
    index: '02',
  },
  {
    numericValue: 60,
    prefix: '', suffix: '%',
    label: "Of Africa's youth face underemployment",
    sub: 'The skills exist. The tools do not. We change that.',
    index: '03',
  },
  {
    numericValue: 75,
    prefix: '$', suffix: '/mo',
    label: 'Monthly revenue per power pack',
    sub: 'Just 15 rental days at $5/day. Fully paid back in 4 months.',
    index: '04',
  },
]

function CountUp({ target, prefix, suffix, inView }: {
  target: number; prefix: string; suffix: string; inView: boolean
}) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!inView) return
    const duration = 2000
    const steps    = 70
    const increment = target / steps
    let current = 0
    const timer = setInterval(() => {
      current += increment
      if (current >= target) { setCount(target); clearInterval(timer) }
      else setCount(Math.floor(current))
    }, duration / steps)
    return () => clearInterval(timer)
  }, [inView, target])

  return (
    <span
      className="font-display font-light leading-none"
      style={{
        fontSize: 'clamp(3rem, 7vw, 5.5rem)',
        color: 'var(--white)',
        letterSpacing: '-0.04em',
      }}
    >
      {prefix}{count}{suffix}
    </span>
  )
}

export default function TheNumbers() {
  const ref    = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setInView(true) },
      { threshold: 0.15 }
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <section
      ref={ref}
      className="section-pad relative overflow-hidden"
      style={{ background: 'var(--ink-mid)' }}
    >
      {/* Background line grid */}
      <div className="absolute inset-0 line-grid opacity-60 pointer-events-none" />

      <div className="container-pad relative z-10">

        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-20" style={{ borderBottom: 'var(--rule)', paddingBottom: '3rem' }}>
          <div>
            <div className="eyebrow mb-4">The Scale of Opportunity</div>
            <h2
              className="font-display font-light leading-none"
              style={{ fontSize: 'clamp(2.2rem, 5.5vw, 4.5rem)', color: 'var(--white)', letterSpacing: '-0.03em' }}
            >
              This problem is<br />
              <em style={{ fontStyle: 'italic', color: 'var(--cloud)' }}>massive.</em>
            </h2>
          </div>
          <p className="max-w-xs text-sm leading-relaxed" style={{ color: 'var(--silver)', paddingBottom: '0.25rem' }}>
            So is the opportunity. We are building infrastructure to unlock
            Africa's most undercapitalised resource: idle physical assets.
          </p>
        </div>

        {/* Stats — editorial 4-column grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <div
              key={stat.index}
              className={`py-10 pr-8 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{
                borderRight: i < 3 ? 'var(--rule)' : 'none',
                borderLeft: i === 0 ? 'none' : undefined,
                transitionDelay: `${i * 120}ms`,
                paddingLeft: i === 0 ? 0 : '2rem',
              }}
            >
              {/* Index */}
              <span
                className="font-mono-dm block mb-6"
                style={{ fontSize: '0.58rem', letterSpacing: '0.22em', color: 'var(--ash)', textTransform: 'uppercase' }}
              >
                {stat.index}
              </span>

              {/* Number */}
              <div className="mb-4">
                <CountUp
                  target={stat.numericValue}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                  inView={inView}
                />
              </div>

              {/* Label */}
              <p className="text-sm font-medium mb-2 leading-snug" style={{ color: 'var(--pearl)' }}>
                {stat.label}
              </p>
              <p className="text-xs leading-relaxed" style={{ color: 'var(--silver)' }}>
                {stat.sub}
              </p>
            </div>
          ))}
        </div>

        {/* Callout banner — full-width editorial pull quote */}
        <div
          className="mt-16 px-8 md:px-14 py-10"
          style={{ border: 'var(--rule)', borderLeft: '3px solid var(--white)', background: 'rgba(255,255,255,0.02)' }}
        >
          <div className="eyebrow mb-4">The Economics</div>
          <p
            className="font-display font-light leading-snug"
            style={{ fontSize: 'clamp(1.35rem, 3.5vw, 2.2rem)', color: 'var(--white)', letterSpacing: '-0.02em' }}
          >
            A $300 power pack. Rented for{' '}
            <em style={{ fontStyle: 'italic', color: 'var(--cloud)' }}>$5 a day.</em> For just{' '}
            <em style={{ fontStyle: 'italic', color: 'var(--cloud)' }}>15 days</em> per month.
            That's <span style={{ color: 'var(--white)', fontWeight: 600 }}>$75/month</span>.
            Fully repaid in <span style={{ color: 'var(--white)', fontWeight: 600 }}>4 months</span>.
            Then it's pure profit — indefinitely.
          </p>
        </div>
      </div>
    </section>
  )
}
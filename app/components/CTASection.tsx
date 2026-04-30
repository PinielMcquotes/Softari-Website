'use client'
import Link from 'next/link'

export default function CTASection() {
  const milestones = [
    { num: '01', text: 'Power pack production + IoT integration' },
    { num: '02', text: 'Platform launch + first 50 suppliers onboarded' },
    { num: '03', text: 'Scale to 3 cities · 500 assets · Series A' },
  ]

  return (
    <section
      className="section-pad relative overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #080808 0%, #111111 50%, #0d0d0d 100%)' }}
    >
      {/* Glow orbs */}
      <div
        className="absolute -top-32 -left-32 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.03) 0%, transparent 70%)' }}
      />
      <div
        className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.02) 0%, transparent 70%)' }}
      />

      {/* Left accent */}
      <div
        className="absolute left-0 top-0 bottom-0 w-px"
        style={{ background: 'linear-gradient(to bottom, transparent, rgba(255,255,255,0.2), transparent)' }}
      />

      <div className="container-pad relative z-10 text-center">

        {/* Eyebrow */}
        <span
          className="inline-block text-xs font-mono-dm tracking-widest uppercase px-3 py-1 rounded-full mb-6"
          style={{
            color: 'var(--grey-200)',
            background: 'rgba(255,255,255,0.06)',
            border: '1px solid rgba(255,255,255,0.15)',
          }}
        >
          The Ask
        </span>

        {/* Headline */}
        <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-black mb-4 leading-tight" style={{ color: 'var(--white)' }}>
          Help Us Give Chidi<br />
          <span className="gradient-text">His Power Back.</span>
        </h2>
        <p className="font-display text-lg md:text-xl italic mb-10" style={{ color: 'rgba(240,240,240,0.5)' }}>
          And the 600 million people just like him.
        </p>

        {/* Two metric boxes */}
        <div className="flex flex-col sm:flex-row gap-5 justify-center mb-12 max-w-2xl mx-auto">
          {[
            { label: 'RAISING',  val: 'USD $30,000', sub: 'Seed round — first power pack production run' },
            { label: 'OFFERING', val: '20% Equity',  sub: 'Strategic partner stake in Softari Technologies' },
          ].map(b => (
            <div
              key={b.label}
              className="flex-1 p-6 rounded-xl text-left"
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.12)',
                borderLeftWidth: '3px',
                borderLeftColor: 'var(--white)',
              }}
            >
              <p className="text-xs font-mono-dm tracking-widest uppercase mb-2" style={{ color: 'var(--grey-400)' }}>
                {b.label}
              </p>
              <p className="font-display text-3xl font-bold mb-1" style={{ color: 'var(--white)' }}>
                {b.val}
              </p>
              <p className="text-xs italic" style={{ color: 'var(--muted)' }}>{b.sub}</p>
            </div>
          ))}
        </div>

        {/* Roadmap milestones */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-12">
          {milestones.map((m) => (
            <div
              key={m.num}
              className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm text-left"
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.09)',
              }}
            >
              <span className="font-mono-dm text-xs font-bold flex-shrink-0" style={{ color: 'var(--grey-300)' }}>
                {m.num}
              </span>
              <span style={{ color: 'var(--grey-100)' }}>{m.text}</span>
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center">
          <Link href="#contact" className="btn-primary text-base px-10 py-4">
            Get Early Access →
          </Link>
          <Link href="mailto:hello@softari.tech" className="btn-outline text-base px-10 py-4">
            Talk to the Founders
          </Link>
        </div>

        <p className="text-xs mt-6" style={{ color: 'var(--muted)' }}>
          softari.tech · hello@softari.tech · Building Africa's Asset Economy
        </p>
      </div>
    </section>
  )
}
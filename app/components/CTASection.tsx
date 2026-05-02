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
      id="cta"
      className="section-pad relative overflow-hidden"
      style={{ background: 'var(--bg-base)' }}
    >
      {/* Dot grid */}
      <div className="absolute inset-0 dot-grid pointer-events-none" style={{ opacity: 0.2 }} />

      {/* Cyan glow top-left */}
      <div
        className="absolute -top-48 -left-48 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(0,212,255,0.05) 0%, transparent 65%)' }}
      />
      {/* Cyan glow bottom-right */}
      <div
        className="absolute -bottom-48 -right-48 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(0,212,255,0.04) 0%, transparent 65%)' }}
      />

      {/* Left accent line */}
      <div
        className="absolute left-0 top-0 bottom-0 w-px"
        style={{ background: 'linear-gradient(to bottom, transparent, rgba(0,212,255,0.25), transparent)' }}
      />

      <div className="container-pad relative z-10 text-center">

        {/* Eyebrow */}
        <span className="eyebrow mb-6 inline-flex">
          Infrastructure Participation
        </span>

        {/* Headline */}
        <h2
          className="font-display font-black leading-[0.92] tracking-tight mt-6 mb-5"
          style={{ fontSize: 'clamp(2.2rem, 6vw, 5rem)', color: 'var(--text-white)' }}
        >
          Help Us Give Africa's Creators<br />
          <span className="gradient-text">Their Power Back.</span>
        </h2>

        <p
          className="font-display italic mb-4"
          style={{ fontSize: 'clamp(1rem, 2vw, 1.3rem)', color: 'var(--text-mid)' }}
        >
          And the 600 million people just like them.
        </p>

        {/* Strategic framing line */}
        <p
          className="font-mono-dm text-[0.65rem] tracking-widest uppercase mb-12"
          style={{ color: 'var(--text-muted)' }}
        >
          We are opening access to early infrastructure participation.
        </p>

        {/* Two raise boxes — increased padding p-8, gap-6 */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-14 max-w-2xl mx-auto">
          {[
            {
              label: 'RAISING',
              val: 'USD $60,000',
              sub: 'Seed round — first power pack production run',
            },
            {
              label: 'OFFERING',
              val: '20% Equity',
              sub: 'Strategic partner stake in Softari Technologies',
            },
          ].map(b => (
            <div key={b.label} className="raise-box flex-1">
              <div className="raise-box-label">{b.label}</div>
              <div className="raise-box-val">{b.val}</div>
              <div className="raise-box-sub">{b.sub}</div>
            </div>
          ))}
        </div>

        {/* Roadmap milestones */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-14">
          {milestones.map(m => (
            <div
              key={m.num}
              className="flex items-center gap-3 px-5 py-3.5 text-sm text-left"
              style={{
                background: 'var(--bg-elevated)',
                border: '1px solid var(--border-dim)',
                borderRadius: 'var(--radius-md)',
              }}
            >
              <span
                className="font-mono-dm text-xs font-bold flex-shrink-0"
                style={{ color: 'var(--cyan)' }}
              >
                {m.num}
              </span>
              <span style={{ color: 'var(--text-soft)' }}>{m.text}</span>
            </div>
          ))}
        </div>

        {/* CTAs
            — "Deploy Assets"    → softari.co.zw
            — "Talk to Founders" → mailto both addresses
        */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://www.softari.co.zw"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary btn-lg animate-pulse-teal"
          >
            Deploy Assets
            <svg className="w-3.5 h-3.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <a
            href="mailto:admin@softari.co.zw,sales@softari.co.zw?subject=Partnership%20Enquiry%20%E2%80%94%20Softari%20Technologies"
            className="btn-ghost btn-lg"
          >
            Talk to the Founders
          </a>
        </div>

        {/* Contact line */}
        <p
          className="font-mono-dm text-[0.6rem] tracking-wider mt-8"
          style={{ color: 'var(--text-muted)' }}
        >
          admin@softari.co.zw · sales@softari.co.zw · +263 77 609 1349
        </p>
      </div>
    </section>
  )
}
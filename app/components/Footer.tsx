'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

function CopyEmail({ address }: { address: string }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(address)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // Fallback for older browsers
      const el = document.createElement('textarea')
      el.value = address
      document.body.appendChild(el)
      el.select()
      document.execCommand('copy')
      document.body.removeChild(el)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  return (
    <button
      onClick={handleCopy}
      data-hover
      className="group flex items-center gap-2 transition-all duration-200"
      style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
    >
      <span
        className="font-mono-dm text-sm transition-colors duration-200"
        style={{ color: copied ? 'var(--cyan)' : 'var(--text-soft)' }}
      >
        {address}
      </span>
      <span
        className="font-mono-dm text-[0.55rem] tracking-wider px-1.5 py-0.5 rounded transition-all duration-200"
        style={{
          background: copied ? 'rgba(0,212,255,0.12)' : 'rgba(255,255,255,0.04)',
          border: `1px solid ${copied ? 'rgba(0,212,255,0.3)' : 'var(--border-dim)'}`,
          color: copied ? 'var(--cyan)' : 'var(--text-muted)',
        }}
      >
        {copied ? 'COPIED' : 'COPY'}
      </span>
    </button>
  )
}

export default function Footer() {
  const year = new Date().getFullYear()

  const navLinks = {
    Platform: [
      { label: 'How It Works',  href: '#how-it-works' },
      { label: 'Solutions',     href: '#solutions'    },
      { label: 'Architecture',  href: '#stack'        },
      { label: 'Deploy Assets', href: 'https://www.softari.co.zw' },
    ],
    Company: [
      { label: 'About Softari', href: '#why-softari'  },
      { label: 'Why We Win',    href: '#why-softari'  },
      { label: 'Investors',     href: '#cta'          },
      { label: 'Contact',       href: '#contact'      },
    ],
    Technology: [
      { label: 'IoT Hardware',    href: '#solutions' },
      { label: 'Smart Contracts', href: '#solutions' },
      { label: 'Asset Tracking',  href: '#solutions' },
      { label: 'Energy Sharing',  href: '#solutions' },
    ],
  }

  return (
    <footer
      id="contact"
      style={{
        background: 'var(--bg-raised)',
        borderTop: '1px solid var(--border-dim)',
      }}
    >
      {/* ── "Partner With Softari" contact band ── */}
      <div
        className="py-16 md:py-20 relative overflow-hidden"
        style={{
          background: 'var(--bg-elevated)',
          borderBottom: '1px solid var(--border-dim)',
        }}
      >
        {/* Cyan glow */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-32 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(0,212,255,0.06) 0%, transparent 70%)' }}
        />

        <div className="container-pad relative z-10">
          <div className="text-center mb-12">
            <span className="eyebrow inline-flex mb-5">Contact</span>
            <h2
              className="font-display font-black mt-4"
              style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', color: 'var(--text-white)', letterSpacing: '-0.025em', lineHeight: 0.95 }}
            >
              Partner With Softari.
            </h2>
            <p className="mt-4 font-mono-dm text-[0.65rem] tracking-widest uppercase" style={{ color: 'var(--text-muted)' }}>
              Choose the right channel below
            </p>
          </div>

          {/* Two contact blocks — gap-5 vertically on mobile, gap-6 on desktop */}
          <div className="grid sm:grid-cols-2 gap-5 md:gap-6 max-w-2xl mx-auto mb-12">

            {/* Investors block */}
            <div
              className="p-7 group transition-all duration-300"
              style={{
                background: 'var(--bg-surface)',
                border: '1px solid var(--border-dim)',
                borderLeft: '2px solid rgba(0,212,255,0.35)',
                borderRadius: 'var(--radius-lg)',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderLeftColor = 'var(--cyan)'
                e.currentTarget.style.boxShadow = '-4px 0 24px rgba(0,212,255,0.1)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderLeftColor = 'rgba(0,212,255,0.35)'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              <div
                className="font-mono-dm text-[0.55rem] tracking-widest uppercase mb-3 flex items-center gap-2"
                style={{ color: 'var(--text-muted)' }}
              >
                <span className="w-1 h-1 rounded-full" style={{ background: 'var(--cyan)', opacity: 0.6 }} />
                For Investors &amp; Strategic Partnerships
              </div>
              <p className="text-sm mb-4" style={{ color: 'var(--text-mid)', lineHeight: 1.7 }}>
                Discuss equity participation, strategic alignment, or co-deployment opportunities.
              </p>
              <CopyEmail address="admin@softari.co.zw" />
              <a
                href="mailto:admin@softari.co.zw?subject=Investment%20Enquiry%20%E2%80%94%20Softari%20Technologies"
                className="btn-primary btn-sm mt-4 w-full justify-center"
                style={{ display: 'inline-flex' }}
              >
                Send Email →
              </a>
            </div>

            {/* Clients block */}
            <div
              className="p-7 group transition-all duration-300"
              style={{
                background: 'var(--bg-surface)',
                border: '1px solid var(--border-dim)',
                borderLeft: '2px solid rgba(0,212,255,0.35)',
                borderRadius: 'var(--radius-lg)',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderLeftColor = 'var(--cyan)'
                e.currentTarget.style.boxShadow = '-4px 0 24px rgba(0,212,255,0.1)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderLeftColor = 'rgba(0,212,255,0.35)'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              <div
                className="font-mono-dm text-[0.55rem] tracking-widest uppercase mb-3 flex items-center gap-2"
                style={{ color: 'var(--text-muted)' }}
              >
                <span className="w-1 h-1 rounded-full" style={{ background: 'var(--cyan)', opacity: 0.6 }} />
                For Deployments &amp; Clients
              </div>
              <p className="text-sm mb-4" style={{ color: 'var(--text-mid)', lineHeight: 1.7 }}>
                Ready to deploy assets, enquire about a power pack, or integrate the Softari platform.
              </p>
              <CopyEmail address="sales@softari.co.zw" />
              <a
                href="mailto:sales@softari.co.zw?subject=Deployment%20Enquiry%20%E2%80%94%20Softari%20Technologies"
                className="btn-ghost btn-sm mt-4 w-full justify-center"
                style={{ display: 'inline-flex' }}
              >
                Send Email →
              </a>
            </div>
          </div>

          {/* Waitlist form */}
          <div className="max-w-md mx-auto text-center">
            <p
              className="font-mono-dm text-[0.58rem] tracking-widest uppercase mb-4"
              style={{ color: 'var(--text-muted)' }}
            >
              Or join the early access waitlist
            </p>
            <form
              onSubmit={e => {
                e.preventDefault()
                const input = (e.currentTarget.elements.namedItem('email') as HTMLInputElement)
                const email = input?.value?.trim()
                if (email) {
                  window.location.href = `mailto:sales@softari.co.zw?subject=Waitlist%20Request&body=Please%20add%20me%20to%20the%20Softari%20waitlist.%0A%0AEmail%3A%20${encodeURIComponent(email)}`
                }
              }}
              className="flex flex-col sm:flex-row gap-3"
            >
              <input
                type="email"
                name="email"
                placeholder="your@email.com"
                required
                className="flex-1"
              />
              <button type="submit" className="btn-primary px-6 py-3 whitespace-nowrap">
                Join Waitlist →
              </button>
            </form>
            <p className="text-xs mt-3 font-mono-dm" style={{ color: 'var(--text-muted)' }}>
              No spam. We'll reach out when we're ready to onboard you.
            </p>
          </div>
        </div>
      </div>

      {/* ── Links grid ── */}
      <div className="container-pad py-14 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-12">

          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-3 mb-5 w-20">
              <Image src={"/logo.png"} alt="" width={1200} height={750}
                        className="w-full object-cover"  style={{ display:"block", height:"auto", marginTop: 10, maxHeight:35 , background: "#42df5c", borderRadius: "3px"}}/>

            </div>
            <p className="text-sm leading-relaxed mb-5" style={{ color: 'var(--text-mid)' }}>
              The operating layer for Africa's idle asset economy — hardware to payments, end-to-end.
            </p>
            <div className="flex gap-3">
              {[
                { label: 'X',  href: 'https://x.com/softaritech' },
                { label: 'Li', href: 'https://linkedin.com/company/softari' },
                { label: 'Gh', href: 'https://github.com/softari' },
              ].map(soc => (
                <a
                  key={soc.label}
                  href={soc.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-hover
                  className="w-8 h-8 rounded flex items-center justify-center text-xs font-mono-dm transition-all duration-200"
                  style={{
                    background: 'var(--bg-surface)',
                    border: '1px solid var(--border-dim)',
                    color: 'var(--text-dim)',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.color = 'var(--cyan)'
                    e.currentTarget.style.borderColor = 'rgba(0,212,255,0.3)'
                    e.currentTarget.style.background = 'rgba(0,212,255,0.06)'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.color = 'var(--text-dim)'
                    e.currentTarget.style.borderColor = 'var(--border-dim)'
                    e.currentTarget.style.background = 'var(--bg-surface)'
                  }}
                >
                  {soc.label}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(navLinks).map(([group, items]) => (
            <div key={group}>
              <h4
                className="font-mono-dm text-[0.55rem] tracking-widest uppercase mb-4"
                style={{ color: 'var(--cyan)' }}
              >
                {group}
              </h4>
              <ul className="space-y-3">
                {items.map(item => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      target={item.href.startsWith('http') ? '_blank' : undefined}
                      rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="text-sm transition-colors duration-200"
                      style={{ color: 'var(--text-mid)' }}
                      onMouseEnter={e => (e.currentTarget.style.color = 'var(--text-white)')}
                      onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-mid)')}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div
          className="mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs"
          style={{ borderTop: '1px solid var(--border-dim)', color: 'var(--text-dim)' }}
        >
          <p>© {year} Softari Technologies. All rights reserved.</p>
          <p className="font-mono-dm" style={{ color: 'var(--text-muted)' }}>
            Built for Africa. Powered by IoT.
          </p>
          <div className="flex gap-5">
            <a href="#" className="transition-colors hover:text-white">Privacy</a>
            <a href="#" className="transition-colors hover:text-white">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
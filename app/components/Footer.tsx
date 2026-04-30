'use client'
import Link from 'next/link'

export default function Footer() {
  const year = new Date().getFullYear()

  const links = {
    Platform: [
      { label: 'How It Works',  href: '#how-it-works' },
      { label: 'Solutions',     href: '#solutions'    },
      { label: 'List an Asset', href: '#contact'      },
      { label: 'Get Access',    href: '#contact'      },
    ],
    Company: [
      { label: 'About Softari', href: '#why-softari'  },
      { label: 'Our Story',     href: '#'             },
      { label: 'Investors',     href: '#contact'      },
      { label: 'Contact',       href: '#contact'      },
    ],
    Technology: [
      { label: 'IoT Devices',     href: '#solutions' },
      { label: 'Smart Contracts', href: '#solutions' },
      { label: 'Asset Tracking',  href: '#solutions' },
      { label: 'Energy Sharing',  href: '#solutions' },
    ],
  }

  return (
    <footer
      id="contact"
      style={{
        background: 'linear-gradient(180deg, #0d0d0d 0%, #080808 100%)',
        borderTop: '1px solid rgba(255,255,255,0.07)',
      }}
    >
      {/* CTA band */}
      <div
        className="py-14 md:py-16"
        style={{
          background: 'rgba(255,255,255,0.02)',
          borderBottom: '1px solid rgba(255,255,255,0.06)',
        }}
      >
        <div className="container-pad text-center">
          <p className="text-xs font-mono-dm tracking-widest uppercase mb-4" style={{ color: 'var(--grey-300)' }}>
            Early Access
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4" style={{ color: 'var(--white)' }}>
            Ready to unlock your<br />
            <span className="gradient-text">idle assets?</span>
          </h2>
          <p className="max-w-md mx-auto text-base mb-8" style={{ color: 'var(--muted)' }}>
            Join the waitlist. Be first to list your assets or access
            the power pack when we launch.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1"
              style={{
                background: 'rgba(22,22,22,0.9)',
                border: '1px solid rgba(255,255,255,0.15)',
                color: 'var(--cream)',
                borderRadius: '6px',
                padding: '0.75rem 1rem',
                fontSize: '0.9rem',
                outline: 'none',
              }}
            />
            <button className="btn-primary px-6 py-3 whitespace-nowrap">
              Join Waitlist →
            </button>
          </div>
          <p className="text-xs mt-3" style={{ color: 'var(--muted)' }}>
            No spam. We'll reach out when we're ready to onboard you.
          </p>
        </div>
      </div>

      {/* Links grid */}
      <div className="container-pad py-14 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-9 h-9 shrink-0">
                <polygon points="20,4 30,22 10,22" fill="#ffffff" opacity="0.9"/>
                <rect x="18" y="22" width="4" height="8" rx="1" fill="#aaaaaa"/>
                <path d="M27,8 Q34,15 27,22" stroke="#cccccc" strokeWidth="1.8" fill="none" strokeLinecap="round"/>
                <path d="M29.5,5 Q39,15 29.5,25" stroke="#888888" strokeWidth="1.4" fill="none" strokeLinecap="round" opacity="0.5"/>
              </svg>
              <div>
                <span className="font-display text-lg font-bold block" style={{ color: 'var(--white)' }}>SOFTARI</span>
                <span className="block text-[9px] tracking-[0.25em] font-mono-dm uppercase" style={{ color: 'var(--grey-400)' }}>TECHNOLOGIES</span>
              </div>
            </div>
            <p className="text-sm leading-relaxed mb-5" style={{ color: 'var(--muted)' }}>
              The operating system for Africa's idle asset economy. Connecting
              surplus resources to the next generation of builders.
            </p>
            <div className="flex gap-3">
              {['X', 'Li', 'Gh'].map(soc => (
                <a
                  key={soc}
                  href="#"
                  className="w-8 h-8 rounded-lg flex items-center justify-center text-xs font-mono-dm transition-colors"
                  style={{
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    color: 'var(--grey-400)',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.color = 'var(--white)'
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.35)'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.color = 'var(--grey-400)'
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'
                  }}
                >
                  {soc}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(links).map(([group, items]) => (
            <div key={group}>
              <h4 className="text-xs font-mono-dm tracking-widest uppercase mb-4" style={{ color: 'var(--grey-300)' }}>
                {group}
              </h4>
              <ul className="space-y-3">
                {items.map(item => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="text-sm transition-colors"
                      style={{ color: 'var(--muted)' }}
                      onMouseEnter={e => (e.currentTarget.style.color = 'var(--white)')}
                      onMouseLeave={e => (e.currentTarget.style.color = 'var(--muted)')}
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
          style={{ borderTop: '1px solid rgba(255,255,255,0.06)', color: 'var(--muted)' }}
        >
          <p>© {year} Softari Technologies. All rights reserved.</p>
          <p className="font-mono-dm" style={{ color: 'rgba(255,255,255,0.25)' }}>
            Built for Africa. Powered by IoT.
          </p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
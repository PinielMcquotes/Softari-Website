'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const links = [
  { href: '#solutions',    label: 'Platform'     },
  { href: '#how-it-works', label: 'How It Works'  },
  { href: '#stack',        label: 'Architecture'  },
  { href: '#why-softari',  label: 'Why Softari'   },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [time,     setTime]     = useState('')

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 48)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  useEffect(() => {
    const tick = () => setTime(new Date().toLocaleTimeString('en-ZW', { hour12: false }))
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? 'nav-glass' : 'bg-transparent'
      }`}
    >
      <div className="container-pad">
        <div className="flex items-center justify-between h-[64px]">

          {/* ── Logo ── */}
          <Link href="/" className="flex items-center gap-3 shrink-0 group">
            <Image src={"/logo.png"} alt="" width={1200} height={750}
                        className="w-20 object-cover"  style={{ display:"block", height:"auto", maxHeight:35 , background: "#50da67", borderRadius: "2px"}}/>
          </Link>

          {/* ── Desktop links ── */}
          <div className="hidden md:flex items-center gap-8 lg:gap-10">
            {links.map(l => (
              <Link key={l.href} href={l.href} className="nav-link">{l.label}</Link>
            ))}
          </div>

          {/* ── Right side: clock + CTAs ── */}
          <div className="hidden md:flex items-center gap-4">
            {/* Live system clock */}
            <div
              className="font-mono-dm text-[0.58rem] tracking-wider px-2.5 py-1 rounded flex items-center gap-1.5"
              style={{
                background: 'rgba(0,212,255,0.05)',
                border: '1px solid rgba(0,212,255,0.12)',
                color: 'var(--text-dim)',
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: 'var(--cyan)', opacity: 0.7 }} />
              SYS · {time || '--:--:--'}
            </div>
            <Link href="#why-softari" className="btn-ghost btn-sm">Partner With Us</Link>
            <a href="https://www.softari.co.zw" target="_blank" rel="noopener noreferrer" className="btn-primary btn-sm animate-pulse-teal">Deploy Assets</a>
          </div>

          {/* ── Hamburger ── */}
          <button
            onClick={() => setMenuOpen(o => !o)}
            aria-label="Toggle menu"
            className="md:hidden flex flex-col justify-center gap-[5px] p-2 w-10 h-10"
          >
            <span
              className={`block h-px w-5 transition-all duration-300 origin-center ${menuOpen ? 'rotate-45 translate-y-[5px]' : ''}`}
              style={{ background: menuOpen ? 'var(--cyan)' : 'var(--text-body)' }}
            />
            <span
              className={`block h-px w-5 transition-all duration-300 ${menuOpen ? 'opacity-0 scale-x-0' : ''}`}
              style={{ background: 'var(--text-body)' }}
            />
            <span
              className={`block h-px w-5 transition-all duration-300 origin-center ${menuOpen ? '-rotate-45 -translate-y-[5px]' : ''}`}
              style={{ background: menuOpen ? 'var(--cyan)' : 'var(--text-body)' }}
            />
          </button>
        </div>

        {/* ── Mobile drawer ── */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            menuOpen ? 'max-h-80 pb-8 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div
            className="flex flex-col gap-5 pt-6 border-t"
            style={{ borderColor: 'var(--border-dim)' }}
          >
            {links.map(l => (
              <Link
                key={l.href}
                href={l.href}
                className="font-mono-dm text-xs tracking-widest uppercase"
                style={{ color: 'var(--text-body)' }}
                onClick={() => setMenuOpen(false)}
              >
                {l.label}
              </Link>
            ))}
            <div className="flex flex-col gap-3 pt-3">
              <a href="https://www.softari.co.zw" target="_blank" rel="noopener noreferrer" className="btn-primary" onClick={() => setMenuOpen(false)}>Deploy Assets</a>
              <Link href="#why-softari" className="btn-ghost" onClick={() => setMenuOpen(false)}>Partner With Us</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom cyan line */}
      {scrolled && (
        <div
          className="absolute bottom-0 left-0 h-px"
          style={{
            background: 'linear-gradient(90deg, transparent, var(--cyan), transparent)',
            width: '100%',
            opacity: 0.3,
          }}
        />
      )}
    </nav>
  )
}
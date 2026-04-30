'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'

const links = [
  { href: '#how-it-works', label: 'How It Works' },
  { href: '#solutions',    label: 'Solutions'    },
  { href: '#why-softari',  label: 'Why Softari'  },
  { href: '#contact',      label: 'Investors'    },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 48)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? 'nav-glass' : 'bg-transparent'
      }`}
    >
      <div className="container-pad">
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* ── Logo ── */}
          <Link href="/" className="flex items-center gap-3 shrink-0 group">
            <div className="relative">
              <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 transition-opacity group-hover:opacity-80">
                <polygon points="20,4 30,22 10,22" fill="#ffffff" opacity="0.92"/>
                <rect x="18" y="22" width="4" height="8" rx="1" fill="#aaaaaa"/>
                <path d="M27,8 Q35,15 27,22" stroke="#cccccc" strokeWidth="1.8" fill="none" strokeLinecap="round"/>
                <path d="M30,4.5 Q40,15 30,25.5" stroke="#777777" strokeWidth="1.3" fill="none" strokeLinecap="round" opacity="0.5"/>
              </svg>
            </div>
            <div>
              <span className="font-display text-base md:text-lg font-bold tracking-[0.12em] text-white block leading-tight">
                SOFTARI
              </span>
              <span className="font-mono-dm text-[7.5px] tracking-[0.28em] uppercase block leading-none" style={{ color: 'var(--silver)' }}>
                Technologies
              </span>
            </div>
          </Link>

          {/* ── Desktop nav ── */}
          <div className="hidden md:flex items-center gap-8 lg:gap-10">
            {links.map(l => (
              <Link
                key={l.href}
                href={l.href}
                className="relative text-xs font-mono-dm tracking-widest uppercase transition-colors duration-200 hover:text-white group"
                style={{ color: 'var(--silver)' }}
              >
                {l.label}
                <span
                  className="absolute -bottom-1 left-0 w-0 h-px bg-white transition-all duration-300 group-hover:w-full"
                />
              </Link>
            ))}
          </div>

          {/* ── Desktop CTAs ── */}
          <div className="hidden md:flex items-center gap-3">
            <Link href="#contact" className="btn-outline btn-sm">
              List Asset
            </Link>
            <Link href="#contact" className="btn-primary btn-sm animate-pulse-w">
              Early Access
            </Link>
          </div>

          {/* ── Hamburger ── */}
          <button
            onClick={() => setMenuOpen(o => !o)}
            aria-label="Toggle menu"
            className="md:hidden flex flex-col justify-center gap-[5px] p-2 w-10 h-10"
          >
            <span className={`block h-px w-6 bg-white transition-all duration-300 origin-center ${menuOpen ? 'rotate-45 translate-y-[6px]' : ''}`} />
            <span className={`block h-px w-6 bg-white transition-all duration-300 ${menuOpen ? 'opacity-0 scale-x-0' : ''}`} />
            <span className={`block h-px w-6 bg-white transition-all duration-300 origin-center ${menuOpen ? '-rotate-45 -translate-y-[6px]' : ''}`} />
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
            style={{ borderColor: 'rgba(255,255,255,0.07)' }}
          >
            {links.map(l => (
              <Link
                key={l.href}
                href={l.href}
                className="text-xs font-mono-dm tracking-widest uppercase text-white"
                onClick={() => setMenuOpen(false)}
              >
                {l.label}
              </Link>
            ))}
            <div className="flex flex-col gap-3 pt-2">
              <Link href="#contact" className="btn-primary" onClick={() => setMenuOpen(false)}>
                Get Early Access
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
'use client'
import { useEffect } from 'react'

export default function Cursor() {
  useEffect(() => {
    const cursor = document.getElementById('cursor')
    const ring = document.getElementById('cursor-ring')
    if (!cursor || !ring) return

    let mx = 0, my = 0
    let rx = 0, ry = 0

    const move = (e: MouseEvent) => {
      mx = e.clientX
      my = e.clientY

      cursor.style.left = mx + 'px'
      cursor.style.top = my + 'px'
    }

    const animate = () => {
      rx += (mx - rx) * 0.12
      ry += (my - ry) * 0.12

      ring.style.left = rx + 'px'
      ring.style.top = ry + 'px'

      requestAnimationFrame(animate)
    }

    document.addEventListener('mousemove', move)
    animate()

    const hoverTargets = document.querySelectorAll('a,button,[data-hover]')

    hoverTargets.forEach((el) => {
      el.addEventListener('mouseenter', () => {
        cursor.style.width = '6px'
        cursor.style.height = '6px'
        ring.style.width = '48px'
        ring.style.height = '48px'
        ring.style.borderColor = 'rgba(0,212,255,0.6)'
      })

      el.addEventListener('mouseleave', () => {
        cursor.style.width = '10px'
        cursor.style.height = '10px'
        ring.style.width = '32px'
        ring.style.height = '32px'
        ring.style.borderColor = 'rgba(0,212,255,0.35)'
      })
    })

    return () => {
      document.removeEventListener('mousemove', move)
    }
  }, [])

  return (
    <>
      <div id="cursor" />
      <div id="cursor-ring" />
    </>
  )
}
import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { navLinks } from '../data/content'
import Logo from './ui/Logo'
import Button from './ui/Button'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header id="top" className={`fixed inset-x-0 top-0 z-50 transition ${scrolled || open ? 'bg-white/90 shadow-sm backdrop-blur' : 'bg-transparent'}`}>
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5" aria-label="Main">
        <Logo />
        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="text-sm font-medium text-ink/70 transition hover:text-ink">{l.label}</a>
            </li>
          ))}
        </ul>
        <div className="hidden md:block"><Button href="#pricing" className="!py-2.5">Start free</Button></div>
        <button className="rounded-lg p-2 md:hidden" onClick={() => setOpen(!open)} aria-expanded={open} aria-label="Toggle menu">
          {open ? <X /> : <Menu />}
        </button>
      </nav>
      {open && (
        <div className="border-t border-ink/10 bg-white px-5 pb-6 pt-2 md:hidden">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block py-3 font-medium">{l.label}</a>
          ))}
          <Button href="#pricing" className="mt-3 w-full" onClick={() => setOpen(false)}>Start free</Button>
        </div>
      )}
    </header>
  )
}

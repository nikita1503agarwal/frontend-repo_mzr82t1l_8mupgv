import { Menu } from 'lucide-react'
import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    setOpen(false)
  }

  const links = [
    { id: 'about', label: 'About' },
    { id: 'programs', label: 'Programs' },
    { id: 'highlights', label: 'Highlights' },
    { id: 'contact', label: 'Contact' },
  ]

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur bg-slate-900/60 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-blue-600/90 ring-1 ring-white/20 flex items-center justify-center text-white font-bold">SG</div>
          <div className="leading-tight">
            <p className="text-white font-semibold text-sm sm:text-base">Shri Ghanshyam Dubey Degree College</p>
            <p className="text-blue-300/80 text-xs">Suriyawan, Bhadohi, U.P.</p>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          {links.map(l => (
            <button key={l.id} onClick={() => scrollTo(l.id)} className="text-blue-100/80 hover:text-white text-sm">
              {l.label}
            </button>
          ))}
          <a href="/test" className="text-xs text-blue-300/80 hover:text-white">System Test</a>
        </nav>

        <button onClick={() => setOpen(v => !v)} className="md:hidden text-white/90">
          <Menu />
        </button>
      </div>

      {open && (
        <div className="md:hidden px-4 pb-4 space-y-2">
          {links.map(l => (
            <button key={l.id} onClick={() => scrollTo(l.id)} className="block w-full text-left px-3 py-2 rounded-lg bg-white/5 text-blue-100/90">
              {l.label}
            </button>
          ))}
          <a href="/test" className="block px-3 py-2 rounded-lg bg-white/5 text-blue-100/90">System Test</a>
        </div>
      )}
    </header>
  )
}

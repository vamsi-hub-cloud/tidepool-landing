import { Mail, MapPin, Phone, Twitter, Linkedin, Github, Instagram } from 'lucide-react'
import Logo from './ui/Logo'

const columns = {
  Product: ['Features', 'Pricing', 'Integrations', 'Changelog'],
  Company: ['About us', 'Careers', 'Blog', 'Press'],
  Support: ['Help center', 'Contact', 'Status', 'Privacy policy'],
}
const socials = [[Twitter, 'Twitter'], [Linkedin, 'LinkedIn'], [Github, 'GitHub'], [Instagram, 'Instagram']]

export default function Footer() {
  return (
    <footer className="bg-ink text-white/70">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 sm:grid-cols-2 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <Logo light />
          <p className="mt-4 max-w-xs text-sm leading-relaxed">One clear plan for every team. Less chasing, more shipping.</p>
          <ul className="mt-6 space-y-2 text-sm">
            <li className="flex items-center gap-2"><Mail className="h-4 w-4" /> hello@tidepool.app</li>
            <li className="flex items-center gap-2"><Phone className="h-4 w-4" /> +91 40 1234 5678</li>
            <li className="flex items-center gap-2"><MapPin className="h-4 w-4" /> Hyderabad, Telangana, India</li>
          </ul>
        </div>
        {Object.entries(columns).map(([title, links]) => (
          <div key={title}>
            <h4 className="font-bold text-white">{title}</h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              {links.map((l) => <li key={l}><a href="#top" className="transition hover:text-white">{l}</a></li>)}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 py-6 text-sm sm:flex-row">
          <p>© {new Date().getFullYear()} Tidepool. All rights reserved.</p>
          <div className="flex gap-3">
            {socials.map(([Icon, label]) => (
              <a key={label} href="#top" aria-label={label} className="grid h-9 w-9 place-items-center rounded-full bg-white/10 transition hover:-translate-y-0.5 hover:bg-tide-500 hover:text-white">
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

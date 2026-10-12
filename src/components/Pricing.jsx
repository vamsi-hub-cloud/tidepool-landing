import { useState } from 'react'
import { Check } from 'lucide-react'
import { plans } from '../data/content'
import Button from './ui/Button'
import Reveal from './ui/Reveal'
import SectionHeading from './ui/SectionHeading'

export default function Pricing() {
  const [yearly, setYearly] = useState(true)

  return (
    <section id="pricing" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading title="Simple pricing that grows with you" text="Start free. Upgrade when your team needs more." />

        <div className="mt-8 flex items-center justify-center gap-3 text-sm font-medium" role="group" aria-label="Billing period">
          <span className={yearly ? 'text-ink/50' : ''}>Monthly</span>
          <button onClick={() => setYearly(!yearly)} role="switch" aria-checked={yearly} aria-label="Bill yearly"
            className={`relative h-7 w-12 rounded-full transition ${yearly ? 'bg-tide-500' : 'bg-ink/20'}`}>
            <span className={`absolute left-1 top-1 h-5 w-5 rounded-full bg-white transition ${yearly ? 'translate-x-5' : ''}`} />
          </button>
          <span className={yearly ? '' : 'text-ink/50'}>Yearly <span className="ml-1 rounded-full bg-coral-500/10 px-2 py-0.5 text-xs font-bold text-coral-600">Save 25%</span></span>
        </div>

        <div className="mt-12 grid items-stretch gap-6 lg:grid-cols-3">
          {plans.map((p, i) => (
            <Reveal key={p.name} delay={i * 120}>
              <article className={`relative flex h-full flex-col rounded-3xl p-8 transition duration-300 hover:-translate-y-1 ${p.popular ? 'bg-ink text-white shadow-2xl shadow-ink/20 lg:scale-105' : 'border border-ink/10 bg-white hover:shadow-xl hover:shadow-ink/5'}`}>
                {p.popular && <span className="absolute -top-3 left-8 rounded-full bg-coral-500 px-3 py-1 text-xs font-bold text-white">Most popular</span>}
                <h3 className="text-xl font-bold">{p.name}</h3>
                <p className={`mt-1 text-sm ${p.popular ? 'text-white/65' : 'text-ink/60'}`}>{p.blurb}</p>
                <p className="mt-6 flex items-baseline gap-1">
                  <span className="font-display text-5xl font-extrabold">${yearly ? p.yearly : p.monthly}</span>
                  <span className={`text-sm ${p.popular ? 'text-white/65' : 'text-ink/60'}`}>/ user / month</span>
                </p>
                <ul className="mt-8 flex-1 space-y-3">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm">
                      <Check className={`mt-0.5 h-4 w-4 shrink-0 ${p.popular ? 'text-tide-100' : 'text-tide-500'}`} />{f}
                    </li>
                  ))}
                </ul>
                <Button href="#top" variant={p.popular ? 'primary' : 'ghost'} className="mt-8 w-full">{p.cta}</Button>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

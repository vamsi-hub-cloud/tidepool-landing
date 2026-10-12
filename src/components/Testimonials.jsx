import { Star } from 'lucide-react'
import { testimonials } from '../data/content'
import Reveal from './ui/Reveal'
import SectionHeading from './ui/SectionHeading'

export default function Testimonials() {
  return (
    <section id="reviews" className="bg-ink py-20 text-white sm:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading title="Teams say they finally feel in sync" />
        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 120}>
              <figure className="flex h-full flex-col rounded-2xl bg-white/5 p-7 ring-1 ring-white/10 transition hover:bg-white/10">
                <div className="flex gap-0.5 text-amber-300" aria-label="5 out of 5 stars">
                  {Array.from({ length: 5 }).map((_, n) => <Star key={n} className="h-4 w-4 fill-current" />)}
                </div>
                <blockquote className="mt-4 flex-1 leading-relaxed text-white/85">“{t.quote}”</blockquote>
                <figcaption className="mt-6 flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-tide-500 font-bold">{t.name[0]}</span>
                  <span><span className="block font-bold">{t.name}</span><span className="text-sm text-white/60">{t.role}</span></span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

import { steps } from '../data/content'
import Reveal from './ui/Reveal'
import SectionHeading from './ui/SectionHeading'

export default function HowItWorks() {
  return (
    <section id="how" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading title="Up and running in three steps" text="Most teams finish setup in under an hour." />
        <ol className="relative mt-16 grid gap-12 md:grid-cols-3 md:gap-8">
          <span aria-hidden className="absolute left-[16.6%] right-[16.6%] top-8 hidden border-t-2 border-dashed border-tide-500/30 md:block" />
          {steps.map(({ icon: Icon, title, text }, i) => (
            <li key={title}>
              <Reveal delay={i * 150} className="relative text-center">
                <span className="relative mx-auto grid h-16 w-16 place-items-center rounded-full bg-tide-500 text-white shadow-lg shadow-tide-500/30">
                  <Icon className="h-7 w-7" />
                  <span className="absolute -right-1 -top-1 grid h-6 w-6 place-items-center rounded-full bg-ink text-xs font-bold">{i + 1}</span>
                </span>
                <h3 className="mt-6 text-xl font-bold">{title}</h3>
                <p className="mx-auto mt-2 max-w-xs leading-relaxed text-ink/70">{text}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

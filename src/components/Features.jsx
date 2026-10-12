import { features } from '../data/content'
import Reveal from './ui/Reveal'
import SectionHeading from './ui/SectionHeading'

export default function Features() {
  return (
    <section id="features" className="bg-mist py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading title="Everything your team needs, nothing it doesn't" text="Six tools that cover planning, tracking and shipping." />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, text }, i) => (
            <Reveal key={title} delay={(i % 3) * 100}>
              <article className="group h-full rounded-2xl border border-transparent bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-tide-500/40 hover:shadow-xl hover:shadow-ink/5">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-tide-50 text-tide-600 transition group-hover:bg-tide-500 group-hover:text-white">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 text-xl font-bold">{title}</h3>
                <p className="mt-2 leading-relaxed text-ink/70">{text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

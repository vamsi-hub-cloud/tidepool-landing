import Reveal from './ui/Reveal'
import SectionHeading from './ui/SectionHeading'

const stats = [['12,000+', 'teams'], ['3.2M', 'tasks finished'], ['4.8/5', 'average rating']]

export default function About() {
  return (
    <section id="about" className="py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 lg:grid-cols-2">
        <Reveal>
          <SectionHeading center={false} title="Built for teams tired of status meetings"
            text="Most teams juggle chat threads, spreadsheets and sticky notes. Tidepool replaces them with one plan that stays current. Everyone sees the same picture, and managers stop asking for updates." />
        </Reveal>
        <Reveal delay={150}>
          <dl className="grid grid-cols-3 gap-4">
            {stats.map(([n, l]) => (
              <div key={l} className="rounded-2xl bg-mist p-5 text-center transition hover:bg-tide-50">
                <dt className="font-display text-2xl font-extrabold text-tide-600 sm:text-3xl">{n}</dt>
                <dd className="mt-1 text-sm text-ink/60">{l}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  )
}

import { Play, CheckCircle2, Circle } from 'lucide-react'
import Button from './ui/Button'

const cols = [
  { name: 'To do', tasks: [['Write launch email', 'Sana'], ['Review pricing copy', 'Aarav']] },
  { name: 'In progress', tasks: [['Build onboarding flow', 'Daniel'], ['Fix invite bug', 'Mira']] },
  { name: 'Done', tasks: [['Set up analytics', 'Daniel']], done: true },
]

function BoardMock() {
  return (
    <div className="relative animate-float">
      <div className="rounded-2xl border border-ink/10 bg-white p-4 shadow-2xl shadow-ink/10">
        <div className="mb-4 flex items-center gap-1.5">
          <span className="h-3 w-3 rounded-full bg-coral-500" /><span className="h-3 w-3 rounded-full bg-amber-300" /><span className="h-3 w-3 rounded-full bg-tide-500" />
          <span className="ml-3 text-xs font-medium text-ink/50">Spring launch</span>
        </div>
        <div className="grid grid-cols-3 gap-3">
          {cols.map((c) => (
            <div key={c.name} className="rounded-xl bg-mist p-2.5">
              <p className="mb-2 text-xs font-bold text-ink/60">{c.name}</p>
              {c.tasks.map(([t, who]) => (
                <div key={t} className="mb-2 rounded-lg bg-white p-2.5 shadow-sm">
                  <div className="flex items-start gap-1.5 text-xs font-medium leading-snug">
                    {c.done ? <CheckCircle2 className="mt-px h-3.5 w-3.5 shrink-0 text-tide-500" /> : <Circle className="mt-px h-3.5 w-3.5 shrink-0 text-ink/30" />}
                    {t}
                  </div>
                  <p className="mt-1.5 pl-5 text-[11px] text-ink/50">{who}</p>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="absolute -bottom-5 -left-3 rounded-xl bg-ink px-4 py-3 text-white shadow-xl sm:-left-8">
        <p className="text-xs text-white/60">This week</p>
        <p className="font-display text-lg font-bold">18 of 24 tasks done</p>
      </div>
    </div>
  )
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-tide-50 to-white pb-24 pt-32 sm:pt-36">
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 lg:grid-cols-2">
        <div className="animate-rise">
          <h1 className="text-4xl font-extrabold leading-[1.05] sm:text-6xl">Plan work your whole team can follow.</h1>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-ink/70">
            Tidepool puts every task, owner and deadline on one board. Your team sees what to do next without chasing updates.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="#pricing">Start free</Button>
            <Button href="#how" variant="ghost"><Play className="h-4 w-4" /> See how it works</Button>
          </div>
          <p className="mt-5 text-sm text-ink/50">No credit card needed. Free for up to 5 people.</p>
        </div>
        <div className="animate-rise [animation-delay:200ms]"><BoardMock /></div>
      </div>
    </section>
  )
}

export default function Logo({ light = false }) {
  return (
    <a href="#top" className="flex items-center gap-2 font-display text-xl font-extrabold">
      <span className="grid h-8 w-8 place-items-center rounded-lg bg-tide-500">
        <svg viewBox="0 0 24 24" className="h-5 w-5 text-white" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
          <path d="M3 9c3-3 6 3 9 0s6 3 9 0M3 15c3-3 6 3 9 0s6 3 9 0" />
        </svg>
      </span>
      <span className={light ? 'text-white' : 'text-ink'}>Tidepool</span>
    </a>
  )
}

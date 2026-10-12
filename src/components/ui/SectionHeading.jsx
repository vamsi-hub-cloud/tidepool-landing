export default function SectionHeading({ title, text, center = true }) {
  return (
    <div className={`max-w-2xl ${center ? 'mx-auto text-center' : ''}`}>
      <h2 className="text-3xl font-extrabold sm:text-4xl lg:text-5xl">{title}</h2>
      {text && <p className="mt-4 text-lg leading-relaxed text-ink/70">{text}</p>}
    </div>
  )
}

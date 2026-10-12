import { useEffect, useRef, useState } from 'react'

// Fades children in once as they scroll into view.
export default function Reveal({ children, delay = 0, className = '' }) {
  const ref = useRef(null)
  const [shown, setShown] = useState(false)

  useEffect(() => {
    const io = new IntersectionObserver(([e]) => e.isIntersecting && (setShown(true), io.disconnect()), { threshold: 0.15 })
    ref.current && io.observe(ref.current)
    return () => io.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition duration-700 ease-out ${shown ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'} ${className}`}
    >
      {children}
    </div>
  )
}

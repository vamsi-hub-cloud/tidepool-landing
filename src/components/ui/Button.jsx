const styles = {
  primary: 'bg-coral-500 text-white hover:bg-coral-600 shadow-lg shadow-coral-500/25',
  dark: 'bg-ink text-white hover:bg-ink/90',
  ghost: 'border border-ink/15 text-ink hover:border-ink/40 hover:bg-mist',
}

export default function Button({ as: Tag = 'a', variant = 'primary', className = '', children, ...props }) {
  return (
    <Tag
      className={`inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-bold transition duration-200 hover:-translate-y-0.5 active:translate-y-0 ${styles[variant]} ${className}`}
      {...props}
    >
      {children}
    </Tag>
  )
}

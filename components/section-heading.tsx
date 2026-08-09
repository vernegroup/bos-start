export function SectionHeading({
  eyebrow,
  title,
  invert = false,
}: {
  eyebrow: string
  title: string
  invert?: boolean
}) {
  return (
    <div className="max-w-2xl">
      <span className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-primary">
        <span className="h-px w-10 bg-primary" aria-hidden="true" />
        {eyebrow}
      </span>
      <h2
        className={`mt-5 text-balance text-4xl font-extrabold leading-[1.05] tracking-tight md:text-5xl ${
          invert ? 'text-navy-foreground' : 'text-foreground'
        }`}
      >
        {title}
      </h2>
    </div>
  )
}

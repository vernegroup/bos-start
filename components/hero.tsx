import { BuyButton } from '@/components/buy-button'

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy text-navy-foreground">
      {/* subtle grid accent */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.06] [background-image:linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] [background-size:64px_64px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-24 size-96 rounded-full bg-primary/20 blur-3xl"
      />

      <div className="relative mx-auto flex min-h-[88vh] max-w-6xl flex-col justify-center px-6 py-28 md:py-40">
        <span className="inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-navy-muted backdrop-blur-sm">
          <span className="size-2 rounded-full bg-primary shadow-[0_0_12px] shadow-primary/60" aria-hidden="true" />
          Business Operating Standards
        </span>

        <h1 className="mt-10 max-w-3xl text-balance text-6xl font-extrabold leading-[1.02] tracking-tight md:text-8xl">
          BOS
          <span className="mt-4 block text-2xl font-semibold leading-tight tracking-normal text-navy-muted md:text-4xl">
            Business Operating Standards
          </span>
        </h1>

        <p className="mt-10 max-w-xl text-pretty text-lg leading-relaxed text-navy-muted md:text-xl">
          BOS Start to gotowy system wdrażania pracowników. Zamiast tworzyć dokumentację od zera,
          dostajesz komplet standardów, list kontrolnych i dokumentów wdrożeniowych.
        </p>

        <div className="mt-12">
          <BuyButton />
        </div>
      </div>
    </section>
  )
}

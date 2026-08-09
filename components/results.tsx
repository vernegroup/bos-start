import { ShieldCheck, TimerReset, Rocket } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { BuyButton } from '@/components/buy-button'

const results = [
  {
    icon: ShieldCheck,
    title: 'Mniej chaosu',
    description: 'Każde wdrożenie przebiega według tego samego, sprawdzonego procesu.',
  },
  {
    icon: TimerReset,
    title: 'Oszczędność czasu',
    description: 'Koniec z odtwarzaniem dokumentów. Menedżerowie korzystają z gotowych standardów i list kontrolnych.',
  },
  {
    icon: Rocket,
    title: 'Szybsze wdrożenie',
    description: 'Nowe osoby szybciej stają się samodzielne dzięki jasnej ścieżce od pierwszego dnia.',
  },
]

export function Results() {
  return (
    <section className="bg-navy py-24 text-navy-foreground md:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow="Efekt" title="Rezultaty" invert />

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {results.map((item) => (
            <div
              key={item.title}
              className="group rounded-3xl border border-white/10 bg-white/[0.04] p-9 backdrop-blur-sm transition-all duration-300 ease-out hover:-translate-y-1.5 hover:border-primary/40 hover:bg-white/[0.07] hover:shadow-[0_24px_48px_-16px_rgba(0,0,0,0.5)]"
            >
              <div className="flex size-12 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-[0_8px_24px_-8px] shadow-primary/50 transition-transform duration-300 ease-out group-hover:scale-110">
                <item.icon className="size-6" aria-hidden="true" />
              </div>
              <h3 className="mt-7 text-xl font-bold tracking-tight">{item.title}</h3>
              <p className="mt-3 leading-relaxed text-navy-muted">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="relative mt-20 flex flex-col items-start gap-8 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.05] p-10 shadow-[0_24px_60px_-20px_rgba(0,0,0,0.5)] md:flex-row md:items-center md:justify-between md:p-14">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-20 -top-20 size-64 rounded-full bg-primary/15 blur-3xl"
          />
          <div className="relative">
            <h3 className="text-2xl font-extrabold tracking-tight md:text-3xl">Chcesz ujednolicić wdrożenia?</h3>
            <p className="mt-3 max-w-xl leading-relaxed text-navy-muted">
              Pobierz pełny pakiet BOS Start i prowadź wdrożenia według jednego standardu.
            </p>
          </div>
          <div className="relative">
            <BuyButton />
          </div>
        </div>
      </div>
    </section>
  )
}

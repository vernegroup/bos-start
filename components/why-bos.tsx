import { AlertTriangle, Clock, FileX } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'

const problems = [
  {
    icon: AlertTriangle,
    title: 'Chaos we wdrożeniu',
    description:
      'Każde wdrożenie wygląda inaczej. Wszystko zależy od osoby, która je prowadzi. Nic nie jest powtarzalne.',
  },
  {
    icon: Clock,
    title: 'Strata czasu',
    description:
      'Przy każdej nowej osobie menedżerowie odtwarzają te same dokumenty i odpowiadają na te same pytania.',
  },
  {
    icon: FileX,
    title: 'Brak standardów',
    description:
      'Bez jednego źródła wiedzy jakość jest różna, a wiedza zostaje w głowach pojedynczych osób.',
  },
]

export function WhyBos() {
  return (
    <section className="bg-background py-24 md:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow="Problem" title="Dlaczego BOS?" />

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {problems.map((item) => (
            <div
              key={item.title}
              className="group rounded-3xl border border-border bg-card p-9 shadow-[0_1px_2px_rgba(16,24,40,0.04),0_8px_24px_-12px_rgba(16,24,40,0.12)] transition-all duration-300 ease-out hover:-translate-y-1.5 hover:border-primary/30 hover:shadow-[0_2px_4px_rgba(16,24,40,0.05),0_24px_48px_-16px_rgba(16,24,40,0.22)]"
            >
              <div className="flex size-12 items-center justify-center rounded-2xl bg-accent text-accent-foreground transition-transform duration-300 ease-out group-hover:scale-110">
                <item.icon className="size-6" aria-hidden="true" />
              </div>
              <h3 className="mt-7 text-xl font-bold tracking-tight text-foreground">{item.title}</h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

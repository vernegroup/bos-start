import {
  Map,
  ClipboardCheck,
  ListChecks,
  FileText,
  GraduationCap,
  BookOpen,
} from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'

const items = [
  {
    icon: Map,
    title: 'Plan wdrożenia 30/60/90',
    description: 'Uporządkowany plan na pierwsze trzy miesiące. Jasny cel na każdym etapie.',
  },
  {
    icon: ClipboardCheck,
    title: 'Listy kontrolne dla menedżera',
    description: 'Kolejne kroki, dzięki którym każdy menedżer prowadzi wdrożenie tak samo i w komplecie.',
  },
  {
    icon: ListChecks,
    title: 'Listy kontrolne dla pracownika',
    description: 'Nowa osoba zawsze wie, co zrobić dalej i czego się od niej oczekuje.',
  },
  {
    icon: FileText,
    title: 'Formularze',
    description: 'Gotowe szablony i dokumenty. Ograniczają powtarzalne formalności.',
  },
  {
    icon: GraduationCap,
    title: 'Test wiedzy',
    description: 'Sprawdź, czy kluczowe standardy i procesy zostały naprawdę zrozumiane.',
  },
  {
    icon: BookOpen,
    title: 'Instrukcja wdrożenia',
    description: 'Jasny przewodnik, jak uruchomić cały system w firmie.',
  },
]

export function WhatsInside() {
  return (
    <section className="bg-secondary py-24 md:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow="Pakiet" title="Co zawiera?" />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <div
              key={item.title}
              className="group relative overflow-hidden rounded-3xl border border-border bg-card p-9 shadow-[0_1px_2px_rgba(16,24,40,0.04),0_8px_24px_-12px_rgba(16,24,40,0.10)] transition-all duration-300 ease-out hover:-translate-y-1.5 hover:border-primary/30 hover:shadow-[0_2px_4px_rgba(16,24,40,0.05),0_24px_48px_-16px_rgba(16,24,40,0.20)]"
            >
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-10 -top-10 size-24 rounded-full bg-primary/5 opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100"
              />
              <div className="flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-transform duration-300 ease-out group-hover:scale-110">
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

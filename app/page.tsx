import { Hero } from '@/components/hero'
import { WhyBos } from '@/components/why-bos'
import { WhatsInside } from '@/components/whats-inside'
import { Results } from '@/components/results'

export default function Page() {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <WhyBos />
      <WhatsInside />
      <Results />
      <footer className="border-t border-white/10 bg-navy py-8 text-navy-muted">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-6 text-sm sm:flex-row">
          <span className="font-semibold text-navy-foreground">BOS · Business Operating Standards</span>
          <span>&copy; {new Date().getFullYear()} BOS Start. Wszelkie prawa zastrzeżone.</span>
        </div>
      </footer>
    </main>
  )
}

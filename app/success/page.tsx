import Link from "next/link"
import { CheckCircle2 } from "lucide-react"

export const metadata = {
  title: "Dziękujemy za zakup | BOS Start",
}

export default function SuccessPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-navy px-6 py-24 text-navy-foreground">
      <div className="mx-auto flex max-w-lg flex-col items-center text-center">
        <div className="flex size-16 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-[0_12px_32px_-10px] shadow-primary/60">
          <CheckCircle2 className="size-8" aria-hidden="true" />
        </div>

        <h1 className="mt-8 text-balance text-4xl font-extrabold tracking-tight md:text-5xl">
          Dziękujemy za zakup
        </h1>

        <p className="mt-4 text-pretty leading-relaxed text-navy-muted">
          Płatność przebiegła pomyślnie. Wkrótce otrzymasz wiadomość e-mail z dostępem do pakietu
          BOS Start.
        </p>

        <Link
          href="/"
          className="mt-10 inline-flex items-center justify-center rounded-full bg-primary px-8 py-4 text-base font-semibold text-primary-foreground shadow-[0_10px_30px_-8px] shadow-primary/50 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:brightness-[1.06] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-navy"
        >
          Wróć na stronę główną
        </Link>
      </div>
    </main>
  )
}

'use client'

import { useState } from 'react'
import { ArrowRight, Loader2 } from 'lucide-react'
import { cn } from '@/lib/utils'

export function BuyButton({
  className,
  label = 'Kup BOS Start — 199 zł',
}: {
  className?: string
  label?: string
}) {
  const [loading, setLoading] = useState(false)
  const [note, setNote] = useState<string | null>(null)

  async function handleClick() {
    setLoading(true)
    setNote(null)
    try {
      const res = await fetch('/api/checkout', { method: 'POST' })
      const data = (await res.json()) as { url?: string }

      if (res.ok && data.url) {
        setNote('Przekierowanie do bezpiecznej płatności...')
        window.location.href = data.url
        return
      }
      throw new Error('checkout_failed')
    } catch {
      setNote('Nie udało się uruchomić płatności. Spróbuj ponownie.')
      setLoading(false)
    }
  }

  return (
    <div className="flex flex-col items-center gap-2 sm:items-start">
      <button
        type="button"
        onClick={handleClick}
        disabled={loading}
        className={cn(
          'group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 text-base font-semibold text-primary-foreground shadow-[0_10px_30px_-8px] shadow-primary/50 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-[0_18px_40px_-10px] hover:shadow-primary/60 hover:brightness-[1.06] active:translate-y-0 active:shadow-[0_8px_20px_-8px] active:shadow-primary/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-navy disabled:cursor-not-allowed disabled:opacity-70',
          className,
        )}
      >
        {loading ? (
          <Loader2 className="size-5 animate-spin" aria-hidden="true" />
        ) : (
          <>
            {label}
            <ArrowRight
              className="size-5 transition-transform duration-300 ease-out group-hover:translate-x-1"
              aria-hidden="true"
            />
          </>
        )}
      </button>
      {note ? (
        <p className="text-sm text-navy-muted" role="status">
          {note}
        </p>
      ) : null}
    </div>
  )
}

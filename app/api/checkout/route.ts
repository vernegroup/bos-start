import { NextResponse } from "next/server"
import { stripe } from "@/lib/stripe"

export async function POST(request: Request) {
  try {
    const priceId = process.env.STRIPE_PRICE_ID
    if (!priceId) {
      return NextResponse.json({ error: "STRIPE_PRICE_ID is not set" }, { status: 500 })
    }

    // Build absolute URLs from the incoming request origin.
    const origin = request.headers.get("origin") ?? new URL(request.url).origin

    const session = await stripe.checkout.sessions.create(
      {
        mode: "payment",
        // Omitting `payment_method_types` enables Stripe's automatic payment
        // methods (configured in the Dashboard) for this Checkout Session.
        line_items: [{ price: priceId, quantity: 1 }],
        success_url: `${origin}/success`,
        cancel_url: `${origin}/`,
      },
      // Idempotency guards against duplicate sessions on retries.
      { idempotencyKey: crypto.randomUUID() },
    )

    if (!session.url) {
      return NextResponse.json({ error: "Missing checkout URL" }, { status: 500 })
    }

    return NextResponse.json({ url: session.url })
  } catch (error) {
    console.error("[v0] Stripe checkout error:", error)
    return NextResponse.json({ error: "checkout_failed" }, { status: 500 })
  }
}

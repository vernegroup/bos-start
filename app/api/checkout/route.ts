import { NextResponse } from "next/server"
import { stripe } from "@/lib/stripe"

export async function POST(request: Request) {
  try {
    console.log("========== STRIPE DEBUG ==========")
    console.log(
      "SECRET:",
      process.env.STRIPE_SECRET_KEY
        ? process.env.STRIPE_SECRET_KEY.substring(0, 12)
        : "UNDEFINED",
    )
    console.log("PRICE:", process.env.STRIPE_PRICE_ID)

    const priceId = process.env.STRIPE_PRICE_ID

    if (!priceId) {
      console.error("ERROR: STRIPE_PRICE_ID is not set")
      return NextResponse.json(
        { error: "STRIPE_PRICE_ID is not set" },
        { status: 500 },
      )
    }

    const origin =
      request.headers.get("origin") ?? new URL(request.url).origin

    console.log("Creating checkout session...")

    const session = await stripe.checkout.sessions.create(
      {
        mode: "payment",
        line_items: [
          {
            price: priceId,
            quantity: 1,
          },
        ],
        success_url: `${origin}/success`,
        cancel_url: `${origin}/`,
      },
      {
        idempotencyKey: crypto.randomUUID(),
      },
    )

    console.log("Session created:", session.id)

    if (!session.url) {
      console.error("ERROR: Missing checkout URL")
      return NextResponse.json(
        { error: "Missing checkout URL" },
        { status: 500 },
      )
    }

    return NextResponse.json({
      url: session.url,
    })
  } catch (error) {
    console.error("========== STRIPE ERROR ==========")
    console.error(error)

    return NextResponse.json(
      { error: "checkout_failed" },
      { status: 500 },
    )
  }
}

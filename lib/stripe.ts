import "server-only"
import Stripe from "stripe"

if (!process.env.STRIPE_SECRET_KEY) {
  throw new Error("STRIPE_SECRET_KEY is not set")
}

// Use the SDK's pinned API version by omitting `apiVersion`.
export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

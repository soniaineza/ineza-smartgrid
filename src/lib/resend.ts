import { Resend } from "resend";

/**
 * Shared Resend client for transactional email (contact form delivery).
 *
 * Created lazily so the app builds and runs even before RESEND_API_KEY is
 * configured — the contact route fails with a clear message instead of
 * crashing at import time.
 */
let client: Resend | null | undefined;

export function getResend(): Resend | null {
  if (client !== undefined) return client;
  const apiKey = process.env.RESEND_API_KEY;
  client = apiKey ? new Resend(apiKey) : null;
  return client;
}

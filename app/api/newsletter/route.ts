import { Resend } from 'resend'

export async function POST(request: Request) {
  const body = await request.json().catch(() => null)
  const email = typeof body?.email === 'string' ? body.email.trim() : ''
  if (!email || !/^\S+@\S+\.\S+$/.test(email)) return Response.json({ error: 'Introduce un email válido.' }, { status: 400 })
  const resend = new Resend(process.env.RESEND_API_KEY)
  const domain = process.env.RESEND_EMAIL_DOMAIN || 'resend.dev'
  const { error } = await resend.emails.send({ from: `Ideas Irene <onboarding@${domain}>`, to: [`hola@${domain}`], replyTo: email, subject: 'Nueva suscripción a Ideas', text: `Nueva persona suscrita: ${email}` }, { idempotencyKey: `newsletter/${email}` })
  if (error) return Response.json({ error: 'No se pudo completar la suscripción.' }, { status: 502 })
  return Response.json({ ok: true })
}

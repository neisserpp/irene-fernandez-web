import { Resend } from 'resend'

export async function POST(request: Request) {
  const body = await request.json().catch(() => null)
  const name = typeof body?.name === 'string' ? body.name.trim() : ''
  const email = typeof body?.email === 'string' ? body.email.trim() : ''
  const message = typeof body?.message === 'string' ? body.message.trim() : ''
  if (!name || !email || !message || !/^\S+@\S+\.\S+$/.test(email)) return Response.json({ error: 'Revisa los campos del formulario.' }, { status: 400 })
  const resend = new Resend(process.env.RESEND_API_KEY)
  const domain = process.env.RESEND_EMAIL_DOMAIN || 'resend.dev'
  const { error } = await resend.emails.send({ from: `Web Irene <onboarding@${domain}>`, to: [`hola@${domain}`], replyTo: email, subject: `Nuevo contacto de ${name}`, text: `${name} (${email})\n\n${message}` }, { idempotencyKey: `contact/${email}-${Date.now()}` })
  if (error) return Response.json({ error: 'No se pudo enviar el mensaje.' }, { status: 502 })
  return Response.json({ ok: true })
}

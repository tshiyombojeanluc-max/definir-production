import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: NextRequest) {
  try {
    const { firstName, lastName, email, phone, projectType, message } = await request.json()

    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    })

    await transporter.sendMail({
      from: `"définir Website" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER,
      replyTo: email,
      subject: `New Inquiry — ${projectType} from ${firstName} ${lastName}`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto;color:#111">
          <h2 style="font-size:1.4rem;font-weight:400;border-bottom:1px solid #eee;padding-bottom:1rem;margin-bottom:1.5rem">
            New Contact Inquiry
          </h2>
          <table style="width:100%;border-collapse:collapse">
            <tr><td style="padding:0.5rem 0;color:#666;width:130px">Name</td><td style="padding:0.5rem 0"><strong>${firstName} ${lastName}</strong></td></tr>
            <tr><td style="padding:0.5rem 0;color:#666">Email</td><td style="padding:0.5rem 0"><a href="mailto:${email}">${email}</a></td></tr>
            <tr><td style="padding:0.5rem 0;color:#666">Phone</td><td style="padding:0.5rem 0">${phone || '—'}</td></tr>
            <tr><td style="padding:0.5rem 0;color:#666">Project Type</td><td style="padding:0.5rem 0">${projectType}</td></tr>
          </table>
          <div style="margin-top:1.5rem;padding:1.25rem;background:#f9f9f9;border-left:3px solid #000">
            <p style="margin:0;color:#333;line-height:1.7">${message.replace(/\n/g, '<br>')}</p>
          </div>
          <p style="margin-top:2rem;font-size:0.8rem;color:#aaa">Sent from definir.productions website contact form</p>
        </div>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Contact email error:', JSON.stringify(err, Object.getOwnPropertyNames(err)))
    return NextResponse.json({ error: 'Failed to send message' }, { status: 500 })
  }
}

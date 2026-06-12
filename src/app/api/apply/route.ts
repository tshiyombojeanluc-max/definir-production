import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const {
      fullName, email, phone, age, gender, location,
      height, weight, waist, chest, hip,
      experience, instagram, tiktok, website,
      biography, motivation,
      attachments = [],
    } = body

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    })

    const row = (label: string, value: string) =>
      `<tr><td style="padding:0.4rem 0;color:#666;width:140px;vertical-align:top">${label}</td><td style="padding:0.4rem 0">${value || '—'}</td></tr>`

    await transporter.sendMail({
      from: `"définir Website" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER,
      replyTo: email,
      subject: `New Model Application — ${fullName}`,
      html: `
        <div style="font-family:sans-serif;max-width:640px;margin:0 auto;color:#111">
          <h2 style="font-size:1.4rem;font-weight:400;border-bottom:1px solid #eee;padding-bottom:1rem;margin-bottom:1.5rem">
            New Model Application
          </h2>

          <h3 style="font-size:0.8rem;letter-spacing:0.1em;text-transform:uppercase;color:#999;margin:1.5rem 0 0.75rem">Personal</h3>
          <table style="width:100%;border-collapse:collapse">
            ${row('Name', fullName)}
            ${row('Email', `<a href="mailto:${email}">${email}</a>`)}
            ${row('Phone', phone)}
            ${row('Age', age)}
            ${row('Gender', gender)}
            ${row('Location', location)}
          </table>

          <h3 style="font-size:0.8rem;letter-spacing:0.1em;text-transform:uppercase;color:#999;margin:1.5rem 0 0.75rem">Measurements</h3>
          <table style="width:100%;border-collapse:collapse">
            ${row('Height', height)}
            ${row('Weight', weight)}
            ${row('Waist', waist)}
            ${row('Chest / Bust', chest)}
            ${row('Hip', hip)}
          </table>

          <h3 style="font-size:0.8rem;letter-spacing:0.1em;text-transform:uppercase;color:#999;margin:1.5rem 0 0.75rem">Experience & Social</h3>
          <table style="width:100%;border-collapse:collapse">
            ${row('Instagram', instagram)}
            ${row('TikTok', tiktok)}
            ${row('Website', website)}
          </table>
          ${experience ? `<div style="margin-top:0.75rem;padding:1rem;background:#f9f9f9"><p style="margin:0;color:#333;line-height:1.7">${experience.replace(/\n/g, '<br>')}</p></div>` : ''}

          <h3 style="font-size:0.8rem;letter-spacing:0.1em;text-transform:uppercase;color:#999;margin:1.5rem 0 0.75rem">Biography</h3>
          <div style="padding:1rem;background:#f9f9f9;border-left:3px solid #000">
            <p style="margin:0;color:#333;line-height:1.7">${biography.replace(/\n/g, '<br>')}</p>
          </div>

          <h3 style="font-size:0.8rem;letter-spacing:0.1em;text-transform:uppercase;color:#999;margin:1.5rem 0 0.75rem">Motivation</h3>
          <div style="padding:1rem;background:#f9f9f9;border-left:3px solid #000">
            <p style="margin:0;color:#333;line-height:1.7">${motivation.replace(/\n/g, '<br>')}</p>
          </div>

          <p style="margin-top:2rem;font-size:0.8rem;color:#aaa">
            Photos are attached${attachments.length === 0 ? ' (none uploaded)' : ` (${attachments.length} file${attachments.length > 1 ? 's' : ''})`}.
            Sent from definir.productions website.
          </p>
        </div>
      `,
      attachments: attachments.map((a: { name: string; data: string; type: string }) => ({
        filename: a.name,
        content: Buffer.from(a.data, 'base64'),
        contentType: a.type,
      })),
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Apply email error:', err)
    return NextResponse.json({ error: 'Failed to send application' }, { status: 500 })
  }
}

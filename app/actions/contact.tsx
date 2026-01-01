"use server"

import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

// BCC recipients for all emails
const BCC_RECIPIENTS = ["tom@northernspeech.com", "info@northernspeech.com"]

interface ContactFormData {
  name: string
  email: string
  organization: string
  subject: string
  message: string
  inquiryType: "general" | "demo" | "support" | "partnership" | "press" | "billing" | "clinical"
}

const inquiryTypeLabels: Record<ContactFormData["inquiryType"], string> = {
  general: "General Inquiry",
  demo: "Request a Demo",
  support: "Technical Support",
  partnership: "Partnership Opportunity",
  press: "Press & Media",
  billing: "Billing & Ordering",
  clinical: "Clinical Questions",
}

// Email routing based on inquiry type
const inquiryTypeRecipients: Record<ContactFormData["inquiryType"], string> = {
  general: "matthew@itherapyllc.com",
  demo: "matthew@itherapyllc.com",
  support: "admin@itherapyllc.com",
  partnership: "matthew@itherapyllc.com",
  press: "lois@itherapyllc.com",
  billing: "info@northernspeech.com",
  clinical: "matthew@itherapyllc.com",
}

export async function submitContactForm(data: ContactFormData): Promise<{ success: boolean; error?: string }> {
  // Basic validation
  if (!data.name || !data.email || !data.subject || !data.message) {
    return { success: false, error: "Please fill in all required fields." }
  }

  // Email format validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(data.email)) {
    return { success: false, error: "Please enter a valid email address." }
  }

  // Honeypot and rate limiting could be added here for extra security

  try {
    const recipient = inquiryTypeRecipients[data.inquiryType]

    const { error } = await resend.emails.send({
      from: "EASI Contact Form <admin@itherapyllc.com>",
      to: recipient,
      bcc: BCC_RECIPIENTS,
      replyTo: data.email,
      subject: `[EASI - ${inquiryTypeLabels[data.inquiryType]}] ${data.subject}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
          </head>
          <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; padding: 20px; background-color: #f5f5f5;">
            <div style="max-width: 600px; margin: 0 auto; background: white; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
              <!-- Header -->
              <div style="background: linear-gradient(135deg, #3F4B5B 0%, #2d3748 100%); padding: 24px; text-align: center;">
                <h1 style="color: white; margin: 0; font-size: 24px;">New Contact Form Submission</h1>
                <p style="color: rgba(255,255,255,0.8); margin: 8px 0 0 0; font-size: 14px;">
                  ${inquiryTypeLabels[data.inquiryType]}
                </p>
              </div>
              
              <!-- Content -->
              <div style="padding: 24px;">
                <table style="width: 100%; border-collapse: collapse;">
                  <tr>
                    <td style="padding: 12px 0; border-bottom: 1px solid #eee; color: #6b7280; font-size: 14px; width: 120px;">Name</td>
                    <td style="padding: 12px 0; border-bottom: 1px solid #eee; color: #1f2937; font-weight: 500;">${data.name}</td>
                  </tr>
                  <tr>
                    <td style="padding: 12px 0; border-bottom: 1px solid #eee; color: #6b7280; font-size: 14px;">Email</td>
                    <td style="padding: 12px 0; border-bottom: 1px solid #eee;">
                      <a href="mailto:${data.email}" style="color: #14B8A6; text-decoration: none;">${data.email}</a>
                    </td>
                  </tr>
                  ${
                    data.organization
                      ? `
                  <tr>
                    <td style="padding: 12px 0; border-bottom: 1px solid #eee; color: #6b7280; font-size: 14px;">Organization</td>
                    <td style="padding: 12px 0; border-bottom: 1px solid #eee; color: #1f2937;">${data.organization}</td>
                  </tr>
                  `
                      : ""
                  }
                  <tr>
                    <td style="padding: 12px 0; border-bottom: 1px solid #eee; color: #6b7280; font-size: 14px;">Subject</td>
                    <td style="padding: 12px 0; border-bottom: 1px solid #eee; color: #1f2937; font-weight: 500;">${data.subject}</td>
                  </tr>
                </table>
                
                <!-- Message -->
                <div style="margin-top: 24px;">
                  <h3 style="color: #3F4B5B; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px; margin: 0 0 12px 0;">Message</h3>
                  <div style="background: #f8fafc; border-radius: 8px; padding: 16px; color: #374151; line-height: 1.6; white-space: pre-wrap;">${data.message}</div>
                </div>
                
                <!-- Quick Reply Button -->
                <div style="margin-top: 24px; text-align: center;">
                  <a href="mailto:${data.email}?subject=Re: ${data.subject}" 
                     style="display: inline-block; background: #14B8A6; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: 500;">
                    Reply to ${data.name.split(" ")[0]}
                  </a>
                </div>
              </div>
              
              <!-- Footer -->
              <div style="background: #f8fafc; padding: 16px 24px; text-align: center; border-top: 1px solid #eee;">
                <p style="color: #9ca3af; font-size: 12px; margin: 0;">
                  This email was sent from the EASI website contact form.
                </p>
              </div>
            </div>
          </body>
        </html>
      `,
    })

    if (error) {
      console.error("Resend error:", error)
      return { success: false, error: "Failed to send message. Please try again." }
    }

    // Send auto-reply to the user
    await resend.emails.send({
      from: "EASI <admin@itherapyllc.com>",
      to: data.email,
      subject: "Thank you for contacting EASI",
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
          </head>
          <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; padding: 20px; background-color: #f5f5f5;">
            <div style="max-width: 600px; margin: 0 auto; background: white; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
              <div style="background: linear-gradient(135deg, #14B8A6 0%, #0d9488 100%); padding: 32px; text-align: center;">
                <h1 style="color: white; margin: 0; font-size: 24px;">Thank You, ${data.name.split(" ")[0]}!</h1>
              </div>
              
              <div style="padding: 32px;">
                <p style="color: #374151; line-height: 1.6; margin: 0 0 16px 0;">
                  We've received your message and appreciate you reaching out to EASI.
                </p>
                <p style="color: #374151; line-height: 1.6; margin: 0 0 16px 0;">
                  Our team reviews all inquiries and will get back to you within <strong>1-2 business days</strong>. 
                  If you have an urgent matter, please call us at <a href="tel:707-651-9915" style="color: #14B8A6;">707-651-9915</a>.
                </p>
                
                <div style="background: #f0fdfa; border-radius: 8px; padding: 16px; margin: 24px 0;">
                  <p style="color: #0d9488; font-weight: 500; margin: 0 0 8px 0;">Your inquiry:</p>
                  <p style="color: #374151; margin: 0; font-style: italic;">"${data.subject}"</p>
                </div>
                
                <p style="color: #374151; line-height: 1.6; margin: 0;">
                  In the meantime, you can learn more about how EASI transforms speech-language assessment on our website.
                </p>
                
                <div style="margin-top: 24px; text-align: center;">
                  <a href="https://easi.app" 
                     style="display: inline-block; background: #14B8A6; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: 500;">
                    Visit EASI
                  </a>
                </div>
              </div>
              
              <div style="background: #f8fafc; padding: 16px 24px; text-align: center; border-top: 1px solid #eee;">
                <p style="color: #9ca3af; font-size: 12px; margin: 0;">
                  iTherapy, LLC | Vallejo, CA | <a href="https://easi.app" style="color: #14B8A6;">easi.app</a>
                </p>
              </div>
            </div>
          </body>
        </html>
      `,
    })

    return { success: true }
  } catch (error) {
    console.error("Contact form error:", error)
    return { success: false, error: "An unexpected error occurred. Please try again later." }
  }
}

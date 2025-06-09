import { NextResponse } from 'next/server'
import sgMail from '@sendgrid/mail'

// Validate email format
const isValidEmail = (email: string) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

export async function POST(req: Request) {
  try {
    // Validate environment variables at runtime, not build time
    const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY
    const SEND_TO_EMAIL = process.env.SEND_TO_EMAIL
    const FROM_EMAIL = process.env.FROM_EMAIL

    if (!SENDGRID_API_KEY || !SEND_TO_EMAIL || !FROM_EMAIL) {
      console.error('Missing required environment variables')
      return NextResponse.json(
        { 
          error: 'Server configuration error',
          message: 'The server is not properly configured to send emails. Please contact support.'
        },
        { status: 500 }
      )
    }

    // Initialize SendGrid with your API key (at runtime)
    sgMail.setApiKey(SENDGRID_API_KEY)

    const { name, email, phone, message } = await req.json()

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { 
          error: 'Missing required fields',
          message: 'Please fill in all required fields'
        },
        { status: 400 }
      )
    }

    // Validate email format
    if (!isValidEmail(email)) {
      return NextResponse.json(
        { 
          error: 'Invalid email format',
          message: 'Please enter a valid email address'
        },
        { status: 400 }
      )
    }

    // Construct the email
    const msg = {
      to: SEND_TO_EMAIL,
      from: {
        email: FROM_EMAIL,
        name: 'Contact Form'
      },
      subject: `New Contact Form Submission from ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        Phone: ${phone || 'Not provided'}
        Message: ${message}
      `,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    }

    // Send the email
    await sgMail.send(msg)

    return NextResponse.json(
      { 
        message: 'Email sent successfully',
        success: true
      },
      { status: 200 }
    )
  } catch (error: any) {
    console.error('Error sending email:', error)

    // Handle different types of errors
    if (error.code === 401) {
      return NextResponse.json(
        { 
          error: 'Authentication failed',
          message: 'Unable to authenticate with the email service. Please try again later.'
        },
        { status: 401 }
      )
    }

    if (error.code === 429) {
      return NextResponse.json(
        { 
          error: 'Rate limit exceeded',
          message: 'Too many requests. Please try again later.'
        },
        { status: 429 }
      )
    }

    // Handle SendGrid specific errors
    if (error.response?.body?.errors && error.response.body.errors.length > 0) {
      const sgError = error.response.body.errors[0]
      return NextResponse.json(
        { 
          error: 'SendGrid error',
          message: sgError.message || 'Error sending email',
          details: {
            field: sgError.field,
            help: sgError.help
          }
        },
        { status: error.code || 500 }
      )
    }

    // Default error response
    return NextResponse.json(
      { 
        error: 'Internal server error',
        message: 'An unexpected error occurred. Please try again later.'
      },
      { status: 500 }
    )
  }
}
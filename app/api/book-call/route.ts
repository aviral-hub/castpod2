import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    const bookingData = await request.json()
    
    // Format the date and time for display
    const bookingDate = new Date(bookingData.selectedDate)
    const formattedDate = bookingDate.toLocaleDateString('en-US', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    })

    // Generate Zoom meeting link (in a real app, you'd integrate with Zoom API)
    const zoomLink = `https://zoom.us/j/meeting-${Date.now()}`
    const meetingId = `${Date.now().toString().slice(-9)}`

    // Send notification email to admin
    const adminEmail = await resend.emails.send({
      from: 'CastPod Connect <onboarding@resend.dev>',
      to: ['aviralpathak6@gmail.com'],
      subject: `New Call Booking - ${bookingData.callTypeDetails.name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f8fafc;">
          <div style="background: linear-gradient(135deg, #8B5CF6 0%, #3B82F6 100%); padding: 30px; border-radius: 12px; text-align: center; margin-bottom: 30px;">
            <h1 style="color: white; margin: 0; font-size: 28px; font-weight: bold;">New Call Booking</h1>
            <p style="color: #E5E7EB; margin: 10px 0 0 0; font-size: 16px;">${bookingData.callTypeDetails.name} scheduled</p>
          </div>
          
          <div style="background: white; padding: 30px; border-radius: 12px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
            <h2 style="color: #1F2937; margin-bottom: 20px; font-size: 24px;">Booking Details</h2>
            
            <div style="background: #F3F4F6; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
              <h3 style="color: #1F2937; margin: 0 0 15px 0; font-size: 18px;">📅 Call Information</h3>
              <p style="margin: 8px 0;"><strong>Type:</strong> ${bookingData.callTypeDetails.name}</p>
              <p style="margin: 8px 0;"><strong>Duration:</strong> ${bookingData.callTypeDetails.duration}</p>
              <p style="margin: 8px 0;"><strong>Date:</strong> ${formattedDate}</p>
              <p style="margin: 8px 0;"><strong>Time:</strong> ${bookingData.selectedTime} EST</p>
              <p style="margin: 8px 0;"><strong>Zoom Link:</strong> <a href="${zoomLink}" style="color: #8B5CF6;">${zoomLink}</a></p>
              <p style="margin: 8px 0;"><strong>Meeting ID:</strong> ${meetingId}</p>
            </div>

            <h3 style="color: #1F2937; margin: 30px 0 15px 0; font-size: 18px;">👤 Client Information</h3>
            <div style="margin-bottom: 20px;">
              <p style="margin: 8px 0;"><strong>Name:</strong> ${bookingData.name}</p>
              <p style="margin: 8px 0;"><strong>Email:</strong> ${bookingData.email}</p>
              <p style="margin: 8px 0;"><strong>Company:</strong> ${bookingData.company}</p>
              <p style="margin: 8px 0;"><strong>Phone:</strong> ${bookingData.phone || 'Not provided'}</p>
            </div>

            ${bookingData.message ? `
              <h3 style="color: #1F2937; margin: 30px 0 15px 0; font-size: 18px;">💬 Discussion Topics</h3>
              <div style="background: #F9FAFB; padding: 15px; border-radius: 8px; border-left: 4px solid #8B5CF6;">
                <p style="margin: 0; color: #4B5563; line-height: 1.6;">${bookingData.message}</p>
              </div>
            ` : ''}
          </div>
          
          <div style="text-align: center; margin-top: 30px; padding: 20px; background: white; border-radius: 12px;">
            <p style="color: #6B7280; margin: 0; font-size: 14px;">
              Booking confirmed on ${new Date().toLocaleDateString()} at ${new Date().toLocaleTimeString()}
            </p>
          </div>
        </div>
      `
    })

    // Send confirmation email to client
    const clientEmail = await resend.emails.send({
      from: 'CastPod Connect <onboarding@resend.dev>',
      to: [bookingData.email],
      subject: `Call Confirmed: ${bookingData.callTypeDetails.name} - ${formattedDate}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f8fafc;">
          <div style="background: linear-gradient(135deg, #8B5CF6 0%, #3B82F6 100%); padding: 30px; border-radius: 12px; text-align: center; margin-bottom: 30px;">
            <h1 style="color: white; margin: 0; font-size: 28px; font-weight: bold;">Call Confirmed! 🎉</h1>
            <p style="color: #E5E7EB; margin: 10px 0 0 0; font-size: 16px;">We're excited to speak with you</p>
          </div>
          
          <div style="background: white; padding: 30px; border-radius: 12px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
            <h2 style="color: #1F2937; margin-bottom: 20px; font-size: 24px;">Hi ${bookingData.name}!</h2>
            
            <p style="color: #4B5563; line-height: 1.6; margin-bottom: 20px; font-size: 16px;">
              Thank you for booking a ${bookingData.callTypeDetails.name} with CastPod Connect. We're looking forward to discussing how podcast advertising can help <strong>${bookingData.company}</strong> achieve its goals.
            </p>
            
            <div style="background: #F3F4F6; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #1F2937; margin: 0 0 15px 0; font-size: 18px;">📅 Your Call Details</h3>
              <p style="margin: 8px 0; color: #4B5563;"><strong>Type:</strong> ${bookingData.callTypeDetails.name}</p>
              <p style="margin: 8px 0; color: #4B5563;"><strong>Duration:</strong> ${bookingData.callTypeDetails.duration}</p>
              <p style="margin: 8px 0; color: #4B5563;"><strong>Date:</strong> ${formattedDate}</p>
              <p style="margin: 8px 0; color: #4B5563;"><strong>Time:</strong> ${bookingData.selectedTime} EST</p>
            </div>

            <div style="background: #EEF2FF; border: 2px solid #8B5CF6; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #1F2937; margin: 0 0 15px 0; font-size: 18px;">🔗 Join Your Call</h3>
              <p style="margin: 8px 0; color: #4B5563;"><strong>Zoom Link:</strong></p>
              <a href="${zoomLink}" style="color: #8B5CF6; font-weight: bold; text-decoration: none; font-size: 16px;">${zoomLink}</a>
              <p style="margin: 15px 0 8px 0; color: #4B5563;"><strong>Meeting ID:</strong> ${meetingId}</p>
              <p style="margin: 8px 0; color: #6B7280; font-size: 14px;">💡 We recommend joining 2-3 minutes early to test your audio/video</p>
            </div>
            
            <div style="background: #F9FAFB; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #1F2937; margin: 0 0 15px 0; font-size: 18px;">🎯 What to Expect</h3>
              <ul style="color: #4B5563; margin: 0; padding-left: 20px; line-height: 1.8;">
                <li>We'll discuss your brand goals and target audience</li>
                <li>Learn about your current marketing challenges</li>
                <li>Share insights about podcast advertising opportunities</li>
                <li>Provide tailored recommendations for your industry</li>
                <li>Answer any questions about our services</li>
              </ul>
            </div>

            ${bookingData.message ? `
              <div style="background: #F0FDF4; border-left: 4px solid #10B981; padding: 15px; margin: 20px 0;">
                <h4 style="color: #1F2937; margin: 0 0 10px 0;">Your Discussion Topics:</h4>
                <p style="margin: 0; color: #4B5563; line-height: 1.6;">${bookingData.message}</p>
              </div>
            ` : ''}
            
            <div style="text-align: center; margin: 30px 0;">
              <a href="${zoomLink}" style="background: linear-gradient(135deg, #8B5CF6 0%, #3B82F6 100%); color: white; padding: 12px 24px; text-decoration: none; border-radius: 8px; font-weight: bold; display: inline-block;">
                Join Call on ${formattedDate}
              </a>
            </div>
            
            <p style="color: #6B7280; font-size: 14px; line-height: 1.6; margin: 20px 0 0 0;">
              Need to reschedule or have questions? Reply to this email or contact us at <a href="mailto:castpodconnect@gmail.com" style="color: #8B5CF6;">castpodconnect@gmail.com</a>
            </p>
          </div>
          
          <div style="text-align: center; margin-top: 30px; padding: 20px;">
            <p style="color: #6B7280; margin: 0; font-size: 14px;">
              <strong>CastPod Connect</strong><br>
              Real Voices • Real Brands • Real Impact
            </p>
          </div>
        </div>
      `
    })

    // Send calendar reminder email (24 hours before - in a real app, you'd use a scheduler)
    const reminderEmail = await resend.emails.send({
      from: 'CastPod Connect <onboarding@resend.dev>',
      to: [bookingData.email],
      subject: `Reminder: Your ${bookingData.callTypeDetails.name} is Tomorrow`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f8fafc;">
          <div style="background: linear-gradient(135deg, #8B5CF6 0%, #3B82F6 100%); padding: 30px; border-radius: 12px; text-align: center; margin-bottom: 30px;">
            <h1 style="color: white; margin: 0; font-size: 28px; font-weight: bold;">Call Reminder ⏰</h1>
            <p style="color: #E5E7EB; margin: 10px 0 0 0; font-size: 16px;">Your call is tomorrow!</p>
          </div>
          
          <div style="background: white; padding: 30px; border-radius: 12px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
            <h2 style="color: #1F2937; margin-bottom: 20px; font-size: 24px;">Hi ${bookingData.name}!</h2>
            
            <p style="color: #4B5563; line-height: 1.6; margin-bottom: 20px; font-size: 16px;">
              This is a friendly reminder that your ${bookingData.callTypeDetails.name} with CastPod Connect is scheduled for tomorrow.
            </p>
            
            <div style="background: #EEF2FF; border: 2px solid #8B5CF6; padding: 20px; border-radius: 8px; margin: 20px 0; text-align: center;">
              <h3 style="color: #1F2937; margin: 0 0 15px 0; font-size: 20px;">📅 Tomorrow at ${bookingData.selectedTime} EST</h3>
              <a href="${zoomLink}" style="background: linear-gradient(135deg, #8B5CF6 0%, #3B82F6 100%); color: white; padding: 12px 24px; text-decoration: none; border-radius: 8px; font-weight: bold; display: inline-block; margin: 10px 0;">
                Join Zoom Call
              </a>
              <p style="margin: 15px 0 0 0; color: #6B7280; font-size: 14px;">Meeting ID: ${meetingId}</p>
            </div>
            
            <p style="color: #4B5563; line-height: 1.6; margin: 20px 0; font-size: 16px;">
              We're excited to discuss how podcast advertising can help ${bookingData.company} reach its goals. See you tomorrow!
            </p>
          </div>
        </div>
      `
    })

    return NextResponse.json({ 
      success: true, 
      message: 'Call booked successfully',
      bookingDetails: {
        date: formattedDate,
        time: bookingData.selectedTime,
        type: bookingData.callTypeDetails.name,
        zoomLink,
        meetingId
      },
      emailIds: {
        admin: adminEmail.data?.id,
        client: clientEmail.data?.id,
        reminder: reminderEmail.data?.id
      }
    })

  } catch (error) {
    console.error('Error booking call:', error)
    return NextResponse.json(
      { success: false, message: 'Failed to book call', error: error.message },
      { status: 500 }
    )
  }
}

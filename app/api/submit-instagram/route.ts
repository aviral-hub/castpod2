import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    const formData = await request.json()

    // Send notification email to admin
    const adminEmail = await resend.emails.send({
      from: 'CastPod Connect <onboarding@resend.dev>',
      to: ['aviralpathak6@gmail.com'],
      subject: 'New Instagram Creator Application - CastPod Connect',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f8fafc;">
          <div style="background: linear-gradient(135deg, #EC4899 0%, #8B5CF6 100%); padding: 30px; border-radius: 12px; text-align: center; margin-bottom: 30px;">
            <h1 style="color: white; margin: 0; font-size: 28px; font-weight: bold;">New Instagram Creator Application</h1>
            <p style="color: #F3E8FF; margin: 10px 0 0 0; font-size: 16px;">A new creator wants to join your network!</p>
          </div>
          
          <div style="background: white; padding: 30px; border-radius: 12px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
            <h2 style="color: #1F2937; margin-bottom: 20px; font-size: 24px;">Personal Information</h2>
            <div style="margin-bottom: 20px;">
              <p style="margin: 8px 0;"><strong>Name:</strong> ${formData.fullName}</p>
              <p style="margin: 8px 0;"><strong>Email:</strong> ${formData.email}</p>
              <p style="margin: 8px 0;"><strong>Phone:</strong> ${formData.phone || 'Not provided'}</p>
              <p style="margin: 8px 0;"><strong>Location:</strong> ${formData.location || 'Not provided'}</p>
            </div>

            <h2 style="color: #1F2937; margin: 30px 0 20px 0; font-size: 24px;">Instagram Account</h2>
            <div style="margin-bottom: 20px;">
              <p style="margin: 8px 0;"><strong>Handle:</strong> ${formData.instagramHandle}</p>
              <p style="margin: 8px 0;"><strong>Account Type:</strong> ${formData.accountType}</p>
              <p style="margin: 8px 0;"><strong>Category:</strong> ${formData.contentCategory}</p>
              <p style="margin: 8px 0;"><strong>Content Types:</strong> ${formData.contentTypes?.join(', ') || 'Not provided'}</p>
              <p style="margin: 8px 0;"><strong>Bio:</strong> ${formData.bio || 'Not provided'}</p>
            </div>

            <h2 style="color: #1F2937; margin: 30px 0 20px 0; font-size: 24px;">Statistics</h2>
            <div style="margin-bottom: 20px;">
              <p style="margin: 8px 0;"><strong>Followers:</strong> ${formData.followerCount}</p>
              <p style="margin: 8px 0;"><strong>Average Likes:</strong> ${formData.averageLikes || 'Not provided'}</p>
              <p style="margin: 8px 0;"><strong>Average Comments:</strong> ${formData.averageComments || 'Not provided'}</p>
              <p style="margin: 8px 0;"><strong>Story Views:</strong> ${formData.storyViews || 'Not provided'}</p>
              <p style="margin: 8px 0;"><strong>Top Countries:</strong> ${formData.topCountries || 'Not provided'}</p>
              <p style="margin: 8px 0;"><strong>Age Group:</strong> ${formData.ageGroup || 'Not provided'}</p>
            </div>

            <h2 style="color: #1F2937; margin: 30px 0 20px 0; font-size: 24px;">Brand Experience</h2>
            <div style="margin-bottom: 20px;">
              <p style="margin: 8px 0;"><strong>Previous Collaborations:</strong> ${formData.brandCollaborations || 'Not provided'}</p>
              <p style="margin: 8px 0;"><strong>Current Monetization:</strong> ${formData.currentMonetization || 'Not provided'}</p>
              <p style="margin: 8px 0;"><strong>Brand Goals:</strong> ${formData.brandGoals}</p>
            </div>

            <h2 style="color: #1F2937; margin: 30px 0 20px 0; font-size: 24px;">Additional Information</h2>
            <div style="margin-bottom: 20px;">
              <p style="margin: 8px 0;"><strong>Portfolio Links:</strong> ${formData.portfolioLinks || 'Not provided'}</p>
              <p style="margin: 8px 0;"><strong>Additional Info:</strong> ${formData.additionalInfo || 'Not provided'}</p>
            </div>
          </div>
          
          <div style="text-align: center; margin-top: 30px; padding: 20px; background: white; border-radius: 12px;">
            <p style="color: #6B7280; margin: 0; font-size: 14px;">
              Application submitted on ${new Date().toLocaleDateString()} at ${new Date().toLocaleTimeString()}
            </p>
          </div>
        </div>
      `
    })

    // Send confirmation email to applicant
    const confirmationEmail = await resend.emails.send({
      from: 'CastPod Connect <onboarding@resend.dev>',
      to: [formData.email],
      subject: 'Application Received - CastPod Connect',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f8fafc;">
          <div style="background: linear-gradient(135deg, #EC4899 0%, #8B5CF6 100%); padding: 30px; border-radius: 12px; text-align: center; margin-bottom: 30px;">
            <h1 style="color: white; margin: 0; font-size: 28px; font-weight: bold;">Welcome to CastPod Connect!</h1>
            <p style="color: #F3E8FF; margin: 10px 0 0 0; font-size: 16px;">Your Instagram creator application has been received</p>
          </div>
          
          <div style="background: white; padding: 30px; border-radius: 12px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
            <h2 style="color: #1F2937; margin-bottom: 20px; font-size: 24px;">Hi ${formData.fullName}!</h2>
            
            <p style="color: #4B5563; line-height: 1.6; margin-bottom: 20px; font-size: 16px;">
              Thank you for applying to join our Instagram creator network! We're excited about the possibility of working with <strong>${formData.instagramHandle}</strong>.
            </p>
            
            <div style="background: #F3F4F6; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #1F2937; margin: 0 0 15px 0; font-size: 18px;">What happens next?</h3>
              <ul style="color: #4B5563; margin: 0; padding-left: 20px; line-height: 1.8;">
                <li>Our team will review your application within 48 hours</li>
                <li>We'll analyze your engagement metrics and audience demographics</li>
                <li>If approved, we'll schedule a welcome call to discuss opportunities</li>
                <li>We'll start matching you with brands that align with your content</li>
              </ul>
            </div>
            
            <p style="color: #4B5563; line-height: 1.6; margin-bottom: 20px; font-size: 16px;">
              We believe in authentic partnerships where your creativity shines. Whether you have 1K or 100K followers, quality engagement and authentic content matter most to us.
            </p>
            
            <div style="text-align: center; margin: 30px 0;">
              <a href="mailto:castpodconnect@gmail.com" style="background: linear-gradient(135deg, #EC4899 0%, #8B5CF6 100%); color: white; padding: 12px 24px; text-decoration: none; border-radius: 8px; font-weight: bold; display: inline-block;">
                Contact Us
              </a>
            </div>
            
            <p style="color: #6B7280; font-size: 14px; line-height: 1.6; margin: 0;">
              Have questions? Reply to this email or reach out to us at <a href="mailto:castpodconnect@gmail.com" style="color: #EC4899;">castpodconnect@gmail.com</a>
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

    return NextResponse.json({ 
      success: true, 
      message: 'Application submitted successfully',
      adminEmailId: adminEmail.data?.id,
      confirmationEmailId: confirmationEmail.data?.id
    })

  } catch (error) {
    console.error('Error sending emails:', error)
    return NextResponse.json(
      { success: false, message: 'Failed to submit application', error: error.message },
      { status: 500 }
    )
  }
}

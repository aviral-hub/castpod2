import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    const campaignData = await request.json()

    // Send detailed notification email to admin
    const adminEmail = await resend.emails.send({
      from: 'CastPod Connect <onboarding@resend.dev>',
      to: ['aviralpathak6@gmail.com'],
      subject: `New Campaign Request - ${campaignData.companyName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 800px; margin: 0 auto; padding: 20px; background-color: #f8fafc;">
          <div style="background: linear-gradient(135deg, #8B5CF6 0%, #3B82F6 100%); padding: 30px; border-radius: 12px; text-align: center; margin-bottom: 30px;">
            <h1 style="color: white; margin: 0; font-size: 32px; font-weight: bold;">🚀 New Campaign Request</h1>
            <p style="color: #E5E7EB; margin: 10px 0 0 0; font-size: 18px;">${campaignData.companyName} wants to start advertising!</p>
          </div>
          
          <div style="background: white; padding: 30px; border-radius: 12px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); margin-bottom: 20px;">
            <h2 style="color: #1F2937; margin-bottom: 20px; font-size: 24px; border-bottom: 2px solid #8B5CF6; padding-bottom: 10px;">🏢 Company Information</h2>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 20px;">
              <div>
                <p style="margin: 8px 0;"><strong>Company:</strong> ${campaignData.companyName}</p>
                <p style="margin: 8px 0;"><strong>Website:</strong> <a href="${campaignData.website}" style="color: #8B5CF6;">${campaignData.website}</a></p>
                <p style="margin: 8px 0;"><strong>Industry:</strong> ${campaignData.industry}</p>
                <p style="margin: 8px 0;"><strong>Company Size:</strong> ${campaignData.companySize || 'Not specified'}</p>
              </div>
              <div>
                <p style="margin: 8px 0;"><strong>Contact:</strong> ${campaignData.contactName}</p>
                <p style="margin: 8px 0;"><strong>Role:</strong> ${campaignData.contactRole}</p>
                <p style="margin: 8px 0;"><strong>Email:</strong> <a href="mailto:${campaignData.contactEmail}" style="color: #8B5CF6;">${campaignData.contactEmail}</a></p>
                <p style="margin: 8px 0;"><strong>Phone:</strong> ${campaignData.contactPhone || 'Not provided'}</p>
              </div>
            </div>
          </div>

          <div style="background: white; padding: 30px; border-radius: 12px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); margin-bottom: 20px;">
            <h2 style="color: #1F2937; margin-bottom: 20px; font-size: 24px; border-bottom: 2px solid #8B5CF6; padding-bottom: 10px;">🎯 Campaign Goals & Audience</h2>
            <div style="margin-bottom: 20px;">
              <p style="margin: 8px 0;"><strong>Primary Goals:</strong> ${campaignData.campaignGoals?.join(', ') || 'Not specified'}</p>
              <p style="margin: 8px 0;"><strong>Target Audience:</strong></p>
              <div style="background: #F3F4F6; padding: 15px; border-radius: 8px; margin: 10px 0;">
                <p style="margin: 0; color: #4B5563; line-height: 1.6;">${campaignData.targetAudience || 'Not specified'}</p>
              </div>
              <p style="margin: 8px 0;"><strong>Age Group:</strong> ${campaignData.ageGroup || 'Not specified'}</p>
              <p style="margin: 8px 0;"><strong>Geography:</strong> ${campaignData.geography || 'Not specified'}</p>
            </div>
          </div>

          <div style="background: white; padding: 30px; border-radius: 12px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); margin-bottom: 20px;">
            <h2 style="color: #1F2937; margin-bottom: 20px; font-size: 24px; border-bottom: 2px solid #8B5CF6; padding-bottom: 10px;">💰 Budget & Timeline</h2>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
              <div>
                <p style="margin: 8px 0;"><strong>Monthly Budget:</strong> ${campaignData.monthlyBudget}</p>
                <p style="margin: 8px 0;"><strong>Campaign Duration:</strong> ${campaignData.campaignDuration || 'Not specified'}</p>
              </div>
              <div>
                <p style="margin: 8px 0;"><strong>Start Date:</strong> ${campaignData.startDate || 'Not specified'}</p>
                <p style="margin: 8px 0;"><strong>Urgency:</strong> ${campaignData.urgency || 'Not specified'}</p>
              </div>
            </div>
          </div>

          <div style="background: white; padding: 30px; border-radius: 12px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); margin-bottom: 20px;">
            <h2 style="color: #1F2937; margin-bottom: 20px; font-size: 24px; border-bottom: 2px solid #8B5CF6; padding-bottom: 10px;">💬 Brand Message & Content</h2>
            <div style="margin-bottom: 20px;">
              <p style="margin: 8px 0;"><strong>Key Brand Message:</strong></p>
              <div style="background: #F9FAFB; padding: 15px; border-radius: 8px; border-left: 4px solid #8B5CF6; margin: 10px 0;">
                <p style="margin: 0; color: #4B5563; line-height: 1.6;">${campaignData.brandMessage || 'Not specified'}</p>
              </div>
              <p style="margin: 8px 0;"><strong>Content Style:</strong> ${campaignData.contentStyle || 'Not specified'}</p>
              <p style="margin: 8px 0;"><strong>Previous Advertising:</strong> ${campaignData.previousAdvertising || 'Not specified'}</p>
            </div>
          </div>

          <div style="background: white; padding: 30px; border-radius: 12px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); margin-bottom: 20px;">
            <h2 style="color: #1F2937; margin-bottom: 20px; font-size: 24px; border-bottom: 2px solid #8B5CF6; padding-bottom: 10px;">🎙️ Podcast Preferences</h2>
            <div style="margin-bottom: 20px;">
              <p style="margin: 8px 0;"><strong>Preferred Categories:</strong> ${campaignData.podcastCategories?.join(', ') || 'Not specified'}</p>
              <p style="margin: 8px 0;"><strong>Podcast Size:</strong> ${campaignData.podcastSize || 'No preference'}</p>
              <p style="margin: 8px 0;"><strong>Host-Read Preference:</strong> ${campaignData.hostReadPreference || 'No preference'}</p>
              <p style="margin: 8px 0;"><strong>Ad Placement:</strong> ${campaignData.adPlacement || 'Not specified'}</p>
            </div>
          </div>

          ${campaignData.successMetrics || campaignData.additionalInfo ? `
            <div style="background: white; padding: 30px; border-radius: 12px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); margin-bottom: 20px;">
              <h2 style="color: #1F2937; margin-bottom: 20px; font-size: 24px; border-bottom: 2px solid #8B5CF6; padding-bottom: 10px;">📊 Additional Information</h2>
              ${campaignData.successMetrics ? `
                <div style="margin-bottom: 15px;">
                  <p style="margin: 8px 0;"><strong>Success Metrics:</strong></p>
                  <div style="background: #F0FDF4; padding: 15px; border-radius: 8px; border-left: 4px solid #10B981;">
                    <p style="margin: 0; color: #4B5563; line-height: 1.6;">${campaignData.successMetrics}</p>
                  </div>
                </div>
              ` : ''}
              ${campaignData.additionalInfo ? `
                <div style="margin-bottom: 15px;">
                  <p style="margin: 8px 0;"><strong>Additional Information:</strong></p>
                  <div style="background: #FEF3C7; padding: 15px; border-radius: 8px; border-left: 4px solid #F59E0B;">
                    <p style="margin: 0; color: #4B5563; line-height: 1.6;">${campaignData.additionalInfo}</p>
                  </div>
                </div>
              ` : ''}
              <p style="margin: 8px 0;"><strong>Heard about us:</strong> ${campaignData.hearAboutUs || 'Not specified'}</p>
            </div>
          ` : ''}
          
          <div style="text-align: center; margin-top: 30px; padding: 20px; background: white; border-radius: 12px;">
            <p style="color: #6B7280; margin: 0; font-size: 14px;">
              Campaign request submitted on ${new Date().toLocaleDateString()} at ${new Date().toLocaleTimeString()}
            </p>
            <div style="margin-top: 20px;">
              <a href="mailto:${campaignData.contactEmail}" style="background: linear-gradient(135deg, #8B5CF6 0%, #3B82F6 100%); color: white; padding: 12px 24px; text-decoration: none; border-radius: 8px; font-weight: bold; display: inline-block; margin-right: 10px;">
                Reply to Client
              </a>
              <a href="${campaignData.website}" style="background: #6B7280; color: white; padding: 12px 24px; text-decoration: none; border-radius: 8px; font-weight: bold; display: inline-block;">
                Visit Website
              </a>
            </div>
          </div>
        </div>
      `
    })

    // Send confirmation email to client
    const clientEmail = await resend.emails.send({
      from: 'CastPod Connect <onboarding@resend.dev>',
      to: [campaignData.contactEmail],
      subject: `Campaign Request Received - ${campaignData.companyName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f8fafc;">
          <div style="background: linear-gradient(135deg, #8B5CF6 0%, #3B82F6 100%); padding: 30px; border-radius: 12px; text-align: center; margin-bottom: 30px;">
            <h1 style="color: white; margin: 0; font-size: 28px; font-weight: bold;">Campaign Request Received! 🚀</h1>
            <p style="color: #E5E7EB; margin: 10px 0 0 0; font-size: 16px;">We're excited to help ${campaignData.companyName} grow</p>
          </div>
          
          <div style="background: white; padding: 30px; border-radius: 12px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
            <h2 style="color: #1F2937; margin-bottom: 20px; font-size: 24px;">Hi ${campaignData.contactName}!</h2>
            
            <p style="color: #4B5563; line-height: 1.6; margin-bottom: 20px; font-size: 16px;">
              Thank you for submitting your campaign request! We've received all the details about <strong>${campaignData.companyName}</strong> and are excited about the opportunity to help you reach your goals through strategic podcast advertising.
            </p>
            
            <div style="background: #F3F4F6; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #1F2937; margin: 0 0 15px 0; font-size: 18px;">📋 What We Received:</h3>
              <ul style="color: #4B5563; margin: 0; padding-left: 20px; line-height: 1.8;">
                <li>Company information and industry details</li>
                <li>Campaign goals: ${campaignData.campaignGoals?.join(', ') || 'To be discussed'}</li>
                <li>Target audience and demographics</li>
                <li>Budget range: ${campaignData.monthlyBudget}</li>
                <li>Timeline and urgency preferences</li>
                <li>Brand messaging and content preferences</li>
                <li>Podcast category preferences</li>
              </ul>
            </div>
            
            <div style="background: #EEF2FF; border: 2px solid #8B5CF6; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #1F2937; margin: 0 0 15px 0; font-size: 18px;">⏰ What Happens Next?</h3>
              <div style="color: #4B5563; line-height: 1.8;">
                <p style="margin: 8px 0;"><strong>Within 4 hours:</strong> Our team reviews your campaign requirements</p>
                <p style="margin: 8px 0;"><strong>Within 24 hours:</strong> You receive a custom strategy proposal with:</p>
                <ul style="margin: 10px 0; padding-left: 20px;">
                  <li>Recommended podcast matches for your audience</li>
                  <li>Detailed campaign strategy and timeline</li>
                  <li>Transparent pricing and package options</li>
                  <li>Expected ROI projections</li>
                </ul>
                <p style="margin: 8px 0;"><strong>Next step:</strong> We schedule a strategy call to discuss and refine the proposal</p>
              </div>
            </div>
            
            <div style="background: #F0FDF4; border-left: 4px solid #10B981; padding: 20px; margin: 20px 0;">
              <h4 style="color: #1F2937; margin: 0 0 10px 0;">💡 In the meantime:</h4>
              <ul style="color: #4B5563; margin: 0; padding-left: 20px; line-height: 1.6;">
                <li>Start thinking about any specific podcasts you'd like to target</li>
                <li>Consider your key performance indicators (KPIs)</li>
                <li>Prepare any brand assets or guidelines you'd like to share</li>
                <li>Think of any questions about podcast advertising</li>
              </ul>
            </div>
            
            <div style="text-align: center; margin: 30px 0;">
              <a href="mailto:castpodconnect@gmail.com" style="background: linear-gradient(135deg, #8B5CF6 0%, #3B82F6 100%); color: white; padding: 12px 24px; text-decoration: none; border-radius: 8px; font-weight: bold; display: inline-block;">
                Contact Our Team
              </a>
            </div>
            
            <p style="color: #6B7280; font-size: 14px; line-height: 1.6; margin: 20px 0 0 0;">
              Have urgent questions? Reply to this email or contact us directly at <a href="mailto:castpodconnect@gmail.com" style="color: #8B5CF6;">castpodconnect@gmail.com</a>
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
      message: 'Campaign request submitted successfully',
      campaignDetails: {
        company: campaignData.companyName,
        contact: campaignData.contactName,
        budget: campaignData.monthlyBudget,
        goals: campaignData.campaignGoals
      },
      emailIds: {
        admin: adminEmail.data?.id,
        client: clientEmail.data?.id
      }
    })

  } catch (error) {
    console.error('Error submitting campaign:', error)
    return NextResponse.json(
      { success: false, message: 'Failed to submit campaign request', error: error.message },
      { status: 500 }
    )
  }
}

'use client'

import { useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Building, User, Mail, Phone, Target, DollarSign, Calendar, MessageSquare, CheckCircle, AlertCircle, Rocket } from 'lucide-react'

export function CampaignForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [formData, setFormData] = useState({
    // Company Information
    companyName: '',
    website: '',
    industry: '',
    companySize: '',
    contactName: '',
    contactEmail: '',
    contactPhone: '',
    contactRole: '',
    
    // Campaign Goals
    campaignGoals: [],
    targetAudience: '',
    ageGroup: '',
    geography: '',
    interests: '',
    
    // Budget & Timeline
    monthlyBudget: '',
    campaignDuration: '',
    startDate: '',
    urgency: '',
    
    // Content & Messaging
    brandMessage: '',
    contentStyle: '',
    previousAdvertising: '',
    competitorAnalysis: '',
    
    // Podcast Preferences
    podcastCategories: [],
    podcastSize: '',
    hostReadPreference: '',
    adPlacement: '',
    
    // Additional Information
    successMetrics: '',
    additionalInfo: '',
    hearAboutUs: '',
    
    // Legal & Compliance
    hasAdvertisingGuidelines: '',
    complianceRequirements: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleCheckboxChange = (field: string, value: string) => {
    setFormData({
      ...formData,
      [field]: formData[field as keyof typeof formData].includes(value)
        ? (formData[field as keyof typeof formData] as string[]).filter((item: string) => item !== value)
        : [...(formData[field as keyof typeof formData] as string[]), value]
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')
    
    try {
      const response = await fetch('/api/start-campaign', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (result.success) {
        setSubmitStatus('success')
        // Reset form
        setFormData({
          companyName: '', website: '', industry: '', companySize: '', contactName: '', contactEmail: '', contactPhone: '', contactRole: '',
          campaignGoals: [], targetAudience: '', ageGroup: '', geography: '', interests: '',
          monthlyBudget: '', campaignDuration: '', startDate: '', urgency: '',
          brandMessage: '', contentStyle: '', previousAdvertising: '', competitorAnalysis: '',
          podcastCategories: [], podcastSize: '', hostReadPreference: '', adPlacement: '',
          successMetrics: '', additionalInfo: '', hearAboutUs: '',
          hasAdvertisingGuidelines: '', complianceRequirements: ''
        })
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      console.error('Error submitting campaign:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const campaignGoalOptions = [
    'Brand Awareness', 'Lead Generation', 'Sales Conversion', 'App Downloads', 
    'Website Traffic', 'Event Promotion', 'Product Launch', 'Thought Leadership'
  ]

  const podcastCategoryOptions = [
    'Business', 'Technology', 'Health & Fitness', 'Education', 'Entertainment',
    'News & Politics', 'Sports', 'Lifestyle', 'True Crime', 'Comedy'
  ]

  const industryOptions = [
    'Technology', 'Healthcare', 'Finance', 'E-commerce', 'Education', 'Real Estate',
    'Food & Beverage', 'Fashion', 'Travel', 'Automotive', 'B2B Services', 'Other'
  ]

  if (submitStatus === 'success') {
    return (
      <section id="campaign-form" className="py-16 lg:py-24 bg-gray-900 relative">
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="text-center animate-on-scroll max-w-3xl mx-auto">
            <Card className="bg-gradient-to-br from-gray-800 to-gray-900 border border-green-500/30">
              <CardContent className="p-12">
                <div className="mb-6">
                  <CheckCircle className="w-20 h-20 text-green-400 mx-auto mb-6" />
                  <h2 className="text-3xl font-bold text-white mb-4">
                    Campaign Request Submitted! 🚀
                  </h2>
                </div>
                
                <div className="bg-green-600/20 border border-green-500/30 rounded-lg p-6 mb-8">
                  <p className="text-green-400 font-medium mb-2">
                    ✅ Your campaign details have been received
                  </p>
                  <p className="text-gray-300 text-sm">
                    Our team will review your requirements and get back to you within 24 hours with a custom strategy proposal.
                  </p>
                </div>

                <div className="space-y-4 text-left bg-gray-700/30 rounded-lg p-6 mb-8">
                  <h3 className="text-white font-semibold text-lg">What happens next?</h3>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                      <span className="text-sm">Our team reviews your campaign requirements (within 4 hours)</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                      <span className="text-sm">We create a custom strategy and podcast recommendations</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                      <span className="text-sm">You receive a detailed proposal with pricing and timeline</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                      <span className="text-sm">We schedule a call to discuss and refine the strategy</span>
                    </li>
                  </ul>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    onClick={() => setSubmitStatus('idle')}
                    className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-3 rounded-full"
                    data-cursor-hover
                  >
                    Submit Another Campaign
                  </Button>
                  <Button 
                    variant="outline"
                    className="border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white px-8 py-3 rounded-full"
                    data-cursor-hover
                  >
                    View Our Case Studies
                  </Button>
                </div>

                <p className="text-gray-400 text-sm mt-6">
                  Questions? Email us at <a href="mailto:castpodconnect@gmail.com" className="text-purple-400 hover:text-purple-300">castpodconnect@gmail.com</a>
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="campaign-form" className="py-16 lg:py-24 bg-gray-900 relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-purple-600/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="mb-4">
            <span className="text-purple-400 text-sm font-medium tracking-wider uppercase">
              Campaign Details
            </span>
          </div>
          <h2 className="text-white text-4xl lg:text-6xl font-bold leading-tight mb-6">
            Tell Us About Your <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Brand & Goals</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            The more details you provide, the better we can tailor a podcast advertising strategy that delivers results for your brand.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <Card className="bg-gradient-to-br from-gray-800 to-gray-900 border border-purple-500/20">
            <CardContent className="p-8 lg:p-12">
              <form onSubmit={handleSubmit} className="space-y-12">
                
                {/* Company Information */}
                <div>
                  <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
                    <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center text-white text-sm font-bold mr-4">1</div>
                    <Building className="w-6 h-6 mr-3" />
                    Company Information
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-300 text-sm font-medium mb-2">Company Name *</label>
                      <input
                        type="text"
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:border-purple-500 focus:outline-none"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-gray-300 text-sm font-medium mb-2">Website URL *</label>
                      <input
                        type="url"
                        name="website"
                        value={formData.website}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:border-purple-500 focus:outline-none"
                        placeholder="https://yourcompany.com"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-gray-300 text-sm font-medium mb-2">Industry *</label>
                      <select
                        name="industry"
                        value={formData.industry}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:border-purple-500 focus:outline-none"
                        required
                      >
                        <option value="">Select Industry</option>
                        {industryOptions.map((industry) => (
                          <option key={industry} value={industry}>{industry}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-gray-300 text-sm font-medium mb-2">Company Size</label>
                      <select
                        name="companySize"
                        value={formData.companySize}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:border-purple-500 focus:outline-none"
                      >
                        <option value="">Select Size</option>
                        <option value="1-10">1-10 employees</option>
                        <option value="11-50">11-50 employees</option>
                        <option value="51-200">51-200 employees</option>
                        <option value="201-1000">201-1000 employees</option>
                        <option value="1000+">1000+ employees</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Contact Information */}
                <div>
                  <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
                    <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center text-white text-sm font-bold mr-4">2</div>
                    <User className="w-6 h-6 mr-3" />
                    Contact Information
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-300 text-sm font-medium mb-2">Contact Name *</label>
                      <input
                        type="text"
                        name="contactName"
                        value={formData.contactName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:border-purple-500 focus:outline-none"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-gray-300 text-sm font-medium mb-2">Email Address *</label>
                      <input
                        type="email"
                        name="contactEmail"
                        value={formData.contactEmail}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:border-purple-500 focus:outline-none"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-gray-300 text-sm font-medium mb-2">Phone Number</label>
                      <input
                        type="tel"
                        name="contactPhone"
                        value={formData.contactPhone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:border-purple-500 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-300 text-sm font-medium mb-2">Your Role *</label>
                      <select
                        name="contactRole"
                        value={formData.contactRole}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:border-purple-500 focus:outline-none"
                        required
                      >
                        <option value="">Select Role</option>
                        <option value="CEO/Founder">CEO/Founder</option>
                        <option value="Marketing Director">Marketing Director</option>
                        <option value="CMO">CMO</option>
                        <option value="Marketing Manager">Marketing Manager</option>
                        <option value="Brand Manager">Brand Manager</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Campaign Goals */}
                <div>
                  <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
                    <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center text-white text-sm font-bold mr-4">3</div>
                    <Target className="w-6 h-6 mr-3" />
                    Campaign Goals & Audience
                  </h3>
                  
                  <div className="space-y-6">
                    <div>
                      <label className="block text-gray-300 text-sm font-medium mb-4">Primary Campaign Goals (Select all that apply) *</label>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                        {campaignGoalOptions.map((goal) => (
                          <label key={goal} className="flex items-center space-x-2 cursor-pointer">
                            <input
                              type="checkbox"
                              checked={formData.campaignGoals.includes(goal)}
                              onChange={() => handleCheckboxChange('campaignGoals', goal)}
                              className="w-4 h-4 text-purple-600 bg-gray-700 border-gray-600 rounded focus:ring-purple-500"
                            />
                            <span className="text-gray-300 text-sm">{goal}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-gray-300 text-sm font-medium mb-2">Target Audience Description *</label>
                        <textarea
                          name="targetAudience"
                          value={formData.targetAudience}
                          onChange={handleInputChange}
                          rows={4}
                          className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:border-purple-500 focus:outline-none"
                          placeholder="Describe your ideal customer (demographics, interests, behaviors...)"
                          required
                        />
                      </div>
                      <div className="space-y-4">
                        <div>
                          <label className="block text-gray-300 text-sm font-medium mb-2">Primary Age Group</label>
                          <select
                            name="ageGroup"
                            value={formData.ageGroup}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:border-purple-500 focus:outline-none"
                          >
                            <option value="">Select Age Group</option>
                            <option value="18-24">18-24</option>
                            <option value="25-34">25-34</option>
                            <option value="35-44">35-44</option>
                            <option value="45-54">45-54</option>
                            <option value="55+">55+</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-gray-300 text-sm font-medium mb-2">Geographic Focus</label>
                          <input
                            type="text"
                            name="geography"
                            value={formData.geography}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:border-purple-500 focus:outline-none"
                            placeholder="e.g., India, USA, Global"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Budget & Timeline */}
                <div>
                  <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
                    <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center text-white text-sm font-bold mr-4">4</div>
                    <DollarSign className="w-6 h-6 mr-3" />
                    Budget & Timeline
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-300 text-sm font-medium mb-2">Monthly Budget Range *</label>
                      <select
                        name="monthlyBudget"
                        value={formData.monthlyBudget}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:border-purple-500 focus:outline-none"
                        required
                      >
                        <option value="">Select Budget Range</option>
                        <option value="₹25,000-₹50,000">₹25,000 - ₹50,000</option>
                        <option value="₹50,000-₹1,00,000">₹50,000 - ₹1,00,000</option>
                        <option value="₹1,00,000-₹2,50,000">₹1,00,000 - ₹2,50,000</option>
                        <option value="₹2,50,000-₹5,00,000">₹2,50,000 - ₹5,00,000</option>
                        <option value="₹5,00,000+">₹5,00,000+</option>
                        <option value="Custom">Custom (discuss with team)</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-gray-300 text-sm font-medium mb-2">Campaign Duration</label>
                      <select
                        name="campaignDuration"
                        value={formData.campaignDuration}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:border-purple-500 focus:outline-none"
                      >
                        <option value="">Select Duration</option>
                        <option value="1 month">1 month</option>
                        <option value="3 months">3 months</option>
                        <option value="6 months">6 months</option>
                        <option value="12 months">12 months</option>
                        <option value="Ongoing">Ongoing</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-gray-300 text-sm font-medium mb-2">Preferred Start Date</label>
                      <input
                        type="date"
                        name="startDate"
                        value={formData.startDate}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:border-purple-500 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-300 text-sm font-medium mb-2">Timeline Urgency</label>
                      <select
                        name="urgency"
                        value={formData.urgency}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:border-purple-500 focus:outline-none"
                      >
                        <option value="">Select Urgency</option>
                        <option value="ASAP">ASAP (within 1 week)</option>
                        <option value="Soon">Soon (within 2-4 weeks)</option>
                        <option value="Flexible">Flexible (1-3 months)</option>
                        <option value="Planning">Just planning ahead</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Brand Message & Content */}
                <div>
                  <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
                    <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center text-white text-sm font-bold mr-4">5</div>
                    <MessageSquare className="w-6 h-6 mr-3" />
                    Brand Message & Content
                  </h3>
                  <div className="space-y-6">
                    <div>
                      <label className="block text-gray-300 text-sm font-medium mb-2">Key Brand Message *</label>
                      <textarea
                        name="brandMessage"
                        value={formData.brandMessage}
                        onChange={handleInputChange}
                        rows={4}
                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:border-purple-500 focus:outline-none"
                        placeholder="What's the main message you want to communicate to your audience?"
                        required
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-gray-300 text-sm font-medium mb-2">Content Style Preference</label>
                        <select
                          name="contentStyle"
                          value={formData.contentStyle}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:border-purple-500 focus:outline-none"
                        >
                          <option value="">Select Style</option>
                          <option value="Professional">Professional & Formal</option>
                          <option value="Conversational">Conversational & Friendly</option>
                          <option value="Educational">Educational & Informative</option>
                          <option value="Entertaining">Entertaining & Fun</option>
                          <option value="Inspirational">Inspirational & Motivational</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-gray-300 text-sm font-medium mb-2">Previous Advertising Experience</label>
                        <select
                          name="previousAdvertising"
                          value={formData.previousAdvertising}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:border-purple-500 focus:outline-none"
                        >
                          <option value="">Select Experience</option>
                          <option value="First time">First time advertising</option>
                          <option value="Digital only">Digital advertising only</option>
                          <option value="Traditional">Traditional media experience</option>
                          <option value="Podcast veteran">Podcast advertising veteran</option>
                          <option value="Mixed">Mixed media experience</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Podcast Preferences */}
                <div>
                  <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
                    <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center text-white text-sm font-bold mr-4">6</div>
                    <Rocket className="w-6 h-6 mr-3" />
                    Podcast Preferences
                  </h3>
                  
                  <div className="space-y-6">
                    <div>
                      <label className="block text-gray-300 text-sm font-medium mb-4">Preferred Podcast Categories (Select all that apply)</label>
                      <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                        {podcastCategoryOptions.map((category) => (
                          <label key={category} className="flex items-center space-x-2 cursor-pointer">
                            <input
                              type="checkbox"
                              checked={formData.podcastCategories.includes(category)}
                              onChange={() => handleCheckboxChange('podcastCategories', category)}
                              className="w-4 h-4 text-purple-600 bg-gray-700 border-gray-600 rounded focus:ring-purple-500"
                            />
                            <span className="text-gray-300 text-sm">{category}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-gray-300 text-sm font-medium mb-2">Podcast Size Preference</label>
                        <select
                          name="podcastSize"
                          value={formData.podcastSize}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:border-purple-500 focus:outline-none"
                        >
                          <option value="">No preference</option>
                          <option value="Micro">Micro (1K-10K downloads)</option>
                          <option value="Small">Small (10K-50K downloads)</option>
                          <option value="Medium">Medium (50K-100K downloads)</option>
                          <option value="Large">Large (100K+ downloads)</option>
                          <option value="Mix">Mix of sizes</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-gray-300 text-sm font-medium mb-2">Host-Read Preference</label>
                        <select
                          name="hostReadPreference"
                          value={formData.hostReadPreference}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:border-purple-500 focus:outline-none"
                        >
                          <option value="">No preference</option>
                          <option value="Host-read only">Host-read ads only</option>
                          <option value="Produced ads">Produced ads only</option>
                          <option value="Both">Both host-read and produced</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Additional Information */}
                <div>
                  <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
                    <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center text-white text-sm font-bold mr-4">7</div>
                    Additional Information
                  </h3>
                  <div className="space-y-6">
                    <div>
                      <label className="block text-gray-300 text-sm font-medium mb-2">Success Metrics & KPIs</label>
                      <textarea
                        name="successMetrics"
                        value={formData.successMetrics}
                        onChange={handleInputChange}
                        rows={3}
                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:border-purple-500 focus:outline-none"
                        placeholder="How will you measure campaign success? (e.g., leads, sales, brand awareness, website traffic)"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-gray-300 text-sm font-medium mb-2">Additional Information</label>
                      <textarea
                        name="additionalInfo"
                        value={formData.additionalInfo}
                        onChange={handleInputChange}
                        rows={4}
                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:border-purple-500 focus:outline-none"
                        placeholder="Any other details, requirements, or questions you'd like to share?"
                      />
                    </div>

                    <div>
                      <label className="block text-gray-300 text-sm font-medium mb-2">How did you hear about us?</label>
                      <select
                        name="hearAboutUs"
                        value={formData.hearAboutUs}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:border-purple-500 focus:outline-none"
                      >
                        <option value="">Select source</option>
                        <option value="Google Search">Google Search</option>
                        <option value="Social Media">Social Media</option>
                        <option value="Referral">Referral from friend/colleague</option>
                        <option value="Podcast">Heard on a podcast</option>
                        <option value="Industry Event">Industry event/conference</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="text-center pt-8">
                  <Button 
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-16 py-4 text-xl font-medium rounded-full transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    data-cursor-hover
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                        Submitting Campaign...
                      </>
                    ) : (
                      <>
                        <Rocket className="w-6 h-6 mr-3" />
                        Launch My Campaign
                      </>
                    )}
                  </Button>
                  
                  {submitStatus === 'error' && (
                    <div className="mt-6 p-4 bg-red-600/20 border border-red-500/30 rounded-lg flex items-center justify-center">
                      <AlertCircle className="w-5 h-5 text-red-400 mr-3 flex-shrink-0" />
                      <div>
                        <p className="text-red-400 font-medium">Failed to submit campaign</p>
                        <p className="text-gray-300 text-sm mt-1">Please try again or contact us directly at castpodconnect@gmail.com</p>
                      </div>
                    </div>
                  )}
                  
                  <p className="text-gray-400 text-sm mt-6">
                    🚀 Our team will review your campaign and get back to you within 24 hours with a custom strategy proposal.
                  </p>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

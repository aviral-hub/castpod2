'use client'

import { useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ArrowLeft, Upload, Instagram, BarChart } from 'lucide-react'

interface InstagramFormProps {
  onBack: () => void
}

export function InstagramForm({ onBack }: InstagramFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [formData, setFormData] = useState({
    // Personal Information
    fullName: '',
    email: '',
    phone: '',
    location: '',
    
    // Instagram Information
    instagramHandle: '',
    accountType: '',
    bio: '',
    contentCategory: '',
    postingFrequency: '',
    
    // Statistics
    followerCount: '',
    averageLikes: '',
    averageComments: '',
    storyViews: '',
    topCountries: '',
    ageGroup: '',
    genderSplit: '',
    
    // Content & Style
    contentStyle: '',
    brandCollaborations: '',
    contentTypes: [],
    
    // Monetization
    currentMonetization: '',
    monthlyRevenue: '',
    brandGoals: '',
    rateExpectation: '',
    
    // Additional
    portfolioLinks: '',
    mediaKit: null,
    additionalInfo: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleCheckboxChange = (value: string) => {
    setFormData({
      ...formData,
      contentTypes: formData.contentTypes.includes(value)
        ? formData.contentTypes.filter(type => type !== value)
        : [...formData.contentTypes, value]
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')
    
    try {
      const response = await fetch('/api/submit-instagram', {
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
          fullName: '', email: '', phone: '', location: '',
          instagramHandle: '', accountType: '', bio: '', contentCategory: '', postingFrequency: '',
          followerCount: '', averageLikes: '', averageComments: '', storyViews: '', topCountries: '', ageGroup: '', genderSplit: '',
          contentStyle: '', brandCollaborations: '', contentTypes: [],
          currentMonetization: '', monthlyRevenue: '', brandGoals: '', rateExpectation: '',
          portfolioLinks: '', mediaKit: null, additionalInfo: ''
        })
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const contentTypeOptions = [
    'Photos', 'Reels', 'Stories', 'IGTV', 'Live Streams', 'Carousels'
  ]

  return (
    <section className="py-16 lg:py-24 bg-gray-900 relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-purple-600/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <Button 
              variant="outline" 
              onClick={onBack}
              className="border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white mb-6"
              data-cursor-hover
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Selection
            </Button>
            
            <div className="flex items-center justify-center mb-4">
              <Instagram className="w-8 h-8 text-purple-400 mr-3" />
              <h1 className="text-white text-3xl lg:text-5xl font-bold">
                Join as <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Instagram Creator</span>
              </h1>
            </div>
            <p className="text-gray-400 text-lg">
              Share your Instagram details and start earning through authentic brand partnerships.
            </p>
          </div>

          {/* Form */}
          <Card className="bg-gradient-to-br from-gray-800 to-gray-900 border border-purple-500/20">
            <CardContent className="p-8 lg:p-12">
              <form onSubmit={handleSubmit} className="space-y-8">
                
                {/* Personal Information */}
                <div>
                  <h2 className="text-xl font-bold text-white mb-6 flex items-center">
                    <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center text-white text-sm font-bold mr-3">1</div>
                    Personal Information
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-300 text-sm font-medium mb-2">Full Name *</label>
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:border-purple-500 focus:outline-none"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-gray-300 text-sm font-medium mb-2">Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:border-purple-500 focus:outline-none"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-gray-300 text-sm font-medium mb-2">Phone Number</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:border-purple-500 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-300 text-sm font-medium mb-2">Location (City, Country)</label>
                      <input
                        type="text"
                        name="location"
                        value={formData.location}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:border-purple-500 focus:outline-none"
                      />
                    </div>
                  </div>
                </div>

                {/* Instagram Information */}
                <div>
                  <h2 className="text-xl font-bold text-white mb-6 flex items-center">
                    <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center text-white text-sm font-bold mr-3">2</div>
                    Instagram Account Details
                  </h2>
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-gray-300 text-sm font-medium mb-2">Instagram Handle *</label>
                        <input
                          type="text"
                          name="instagramHandle"
                          value={formData.instagramHandle}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:border-purple-500 focus:outline-none"
                          placeholder="@yourusername"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-gray-300 text-sm font-medium mb-2">Account Type *</label>
                        <select
                          name="accountType"
                          value={formData.accountType}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:border-purple-500 focus:outline-none"
                          required
                        >
                          <option value="">Select Type</option>
                          <option value="personal">Personal</option>
                          <option value="business">Business</option>
                          <option value="creator">Creator</option>
                        </select>
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-gray-300 text-sm font-medium mb-2">Content Category *</label>
                      <select
                        name="contentCategory"
                        value={formData.contentCategory}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:border-purple-500 focus:outline-none"
                        required
                      >
                        <option value="">Select Category</option>
                        <option value="lifestyle">Lifestyle</option>
                        <option value="fashion">Fashion & Beauty</option>
                        <option value="fitness">Fitness & Health</option>
                        <option value="food">Food & Cooking</option>
                        <option value="travel">Travel</option>
                        <option value="technology">Technology</option>
                        <option value="business">Business & Finance</option>
                        <option value="entertainment">Entertainment</option>
                        <option value="education">Education</option>
                        <option value="parenting">Parenting</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-gray-300 text-sm font-medium mb-2">Bio/Account Description</label>
                      <textarea
                        name="bio"
                        value={formData.bio}
                        onChange={handleInputChange}
                        rows={3}
                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:border-purple-500 focus:outline-none"
                        placeholder="Describe your content style and what makes your account unique..."
                      />
                    </div>

                    <div>
                      <label className="block text-gray-300 text-sm font-medium mb-2">Content Types (Select all that apply)</label>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                        {contentTypeOptions.map((type) => (
                          <label key={type} className="flex items-center space-x-2 cursor-pointer">
                            <input
                              type="checkbox"
                              checked={formData.contentTypes.includes(type)}
                              onChange={() => handleCheckboxChange(type)}
                              className="w-4 h-4 text-purple-600 bg-gray-700 border-gray-600 rounded focus:ring-purple-500"
                            />
                            <span className="text-gray-300 text-sm">{type}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Statistics */}
                <div>
                  <h2 className="text-xl font-bold text-white mb-6 flex items-center">
                    <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center text-white text-sm font-bold mr-3">3</div>
                    <BarChart className="w-5 h-5 mr-2" />
                    Account Statistics
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-300 text-sm font-medium mb-2">Follower Count *</label>
                      <select
                        name="followerCount"
                        value={formData.followerCount}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:border-purple-500 focus:outline-none"
                        required
                      >
                        <option value="">Select Range</option>
                        <option value="1k-5k">1K - 5K</option>
                        <option value="5k-10k">5K - 10K</option>
                        <option value="10k-25k">10K - 25K</option>
                        <option value="25k-50k">25K - 50K</option>
                        <option value="50k-100k">50K - 100K</option>
                        <option value="100k-500k">100K - 500K</option>
                        <option value="500k+">500K+</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-gray-300 text-sm font-medium mb-2">Average Likes per Post</label>
                      <input
                        type="text"
                        name="averageLikes"
                        value={formData.averageLikes}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:border-purple-500 focus:outline-none"
                        placeholder="e.g., 500"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-300 text-sm font-medium mb-2">Average Comments per Post</label>
                      <input
                        type="text"
                        name="averageComments"
                        value={formData.averageComments}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:border-purple-500 focus:outline-none"
                        placeholder="e.g., 50"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-300 text-sm font-medium mb-2">Average Story Views</label>
                      <input
                        type="text"
                        name="storyViews"
                        value={formData.storyViews}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:border-purple-500 focus:outline-none"
                        placeholder="e.g., 300"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-300 text-sm font-medium mb-2">Top 3 Countries</label>
                      <input
                        type="text"
                        name="topCountries"
                        value={formData.topCountries}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:border-purple-500 focus:outline-none"
                        placeholder="e.g., India, USA, UK"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-300 text-sm font-medium mb-2">Primary Age Group</label>
                      <select
                        name="ageGroup"
                        value={formData.ageGroup}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:border-purple-500 focus:outline-none"
                      >
                        <option value="">Select Age Group</option>
                        <option value="13-17">13-17</option>
                        <option value="18-24">18-24</option>
                        <option value="25-34">25-34</option>
                        <option value="35-44">35-44</option>
                        <option value="45+">45+</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Brand Collaboration Experience */}
                <div>
                  <h2 className="text-xl font-bold text-white mb-6 flex items-center">
                    <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center text-white text-sm font-bold mr-3">4</div>
                    Brand Collaboration Experience
                  </h2>
                  <div className="space-y-6">
                    <div>
                      <label className="block text-gray-300 text-sm font-medium mb-2">Previous Brand Collaborations</label>
                      <textarea
                        name="brandCollaborations"
                        value={formData.brandCollaborations}
                        onChange={handleInputChange}
                        rows={3}
                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:border-purple-500 focus:outline-none"
                        placeholder="List any brands you've worked with or mention if this is your first time..."
                      />
                    </div>
                    
                    <div>
                      <label className="block text-gray-300 text-sm font-medium mb-2">Current Monetization Methods</label>
                      <textarea
                        name="currentMonetization"
                        value={formData.currentMonetization}
                        onChange={handleInputChange}
                        rows={3}
                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:border-purple-500 focus:outline-none"
                        placeholder="e.g., Sponsored posts, Affiliate marketing, Product sales, None yet..."
                      />
                    </div>
                    
                    <div>
                      <label className="block text-gray-300 text-sm font-medium mb-2">Brand Partnership Goals</label>
                      <textarea
                        name="brandGoals"
                        value={formData.brandGoals}
                        onChange={handleInputChange}
                        rows={3}
                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:border-purple-500 focus:outline-none"
                        placeholder="What types of brands would you like to work with? What are your goals?"
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Additional Information */}
                <div>
                  <h2 className="text-xl font-bold text-white mb-6 flex items-center">
                    <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center text-white text-sm font-bold mr-3">5</div>
                    Additional Information
                  </h2>
                  <div className="space-y-6">
                    <div>
                      <label className="block text-gray-300 text-sm font-medium mb-2">Portfolio/Other Social Links</label>
                      <input
                        type="text"
                        name="portfolioLinks"
                        value={formData.portfolioLinks}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:border-purple-500 focus:outline-none"
                        placeholder="YouTube, TikTok, Website, etc."
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
                        placeholder="Anything else you'd like us to know about you or your content..."
                      />
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="text-center pt-8">
                  <Button 
                    type="submit"
                    className={`bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-12 py-4 text-lg font-medium rounded-full transform hover:scale-105 transition-all duration-300 ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                    data-cursor-hover
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      'Submitting...'
                    ) : (
                      <>
                        Submit Application
                        <Upload className="w-5 h-5 ml-2" />
                      </>
                    )}
                  </Button>
                  {submitStatus === 'success' && (
                    <p className="text-green-500 text-sm mt-4">
                      Application submitted successfully! We'll be in touch soon.
                    </p>
                  )}
                  {submitStatus === 'error' && (
                    <p className="text-red-500 text-sm mt-4">
                      There was an error submitting your application. Please try again.
                    </p>
                  )}
                  <p className="text-gray-400 text-sm mt-4">
                    We'll review your application and get back to you within 48 hours.
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

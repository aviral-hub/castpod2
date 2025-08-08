'use client'

import { useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ArrowLeft, Upload, Mic, BarChart } from 'lucide-react'

interface PodcasterFormProps {
  onBack: () => void
}

export function PodcasterForm({ onBack }: PodcasterFormProps) {
  const [formData, setFormData] = useState({
    // Personal Information
    fullName: '',
    email: '',
    phone: '',
    location: '',
    
    // Podcast Information
    podcastName: '',
    podcastDescription: '',
    category: '',
    startDate: '',
    episodeCount: '',
    frequency: '',
    
    // Statistics
    monthlyDownloads: '',
    averageListeners: '',
    topCountries: '',
    ageGroup: '',
    genderSplit: '',
    
    // Platforms & Links
    spotifyUrl: '',
    appleUrl: '',
    googleUrl: '',
    websiteUrl: '',
    socialMedia: '',
    
    // Monetization
    currentMonetization: '',
    monthlyRevenue: '',
    brandGoals: '',
    contentStyle: '',
    
    // Additional
    mediaKit: null,
    sampleEpisode: '',
    additionalInfo: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')
    
    try {
      const response = await fetch('/api/submit-podcaster', {
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
          podcastName: '', podcastDescription: '', category: '', startDate: '', episodeCount: '', frequency: '',
          monthlyDownloads: '', averageListeners: '', topCountries: '', ageGroup: '', genderSplit: '',
          spotifyUrl: '', appleUrl: '', googleUrl: '', websiteUrl: '', socialMedia: '',
          currentMonetization: '', monthlyRevenue: '', brandGoals: '', contentStyle: '',
          mediaKit: null, sampleEpisode: '', additionalInfo: ''
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
              <Mic className="w-8 h-8 text-purple-400 mr-3" />
              <h1 className="text-white text-3xl lg:text-5xl font-bold">
                Join as <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Podcaster</span>
              </h1>
            </div>
            <p className="text-gray-400 text-lg">
              Tell us about your podcast and let's start building authentic brand partnerships.
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

                {/* Podcast Information */}
                <div>
                  <h2 className="text-xl font-bold text-white mb-6 flex items-center">
                    <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center text-white text-sm font-bold mr-3">2</div>
                    Podcast Details
                  </h2>
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-gray-300 text-sm font-medium mb-2">Podcast Name *</label>
                        <input
                          type="text"
                          name="podcastName"
                          value={formData.podcastName}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:border-purple-500 focus:outline-none"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-gray-300 text-sm font-medium mb-2">Category *</label>
                        <select
                          name="category"
                          value={formData.category}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:border-purple-500 focus:outline-none"
                          required
                        >
                          <option value="">Select Category</option>
                          <option value="business">Business</option>
                          <option value="technology">Technology</option>
                          <option value="health">Health & Fitness</option>
                          <option value="education">Education</option>
                          <option value="entertainment">Entertainment</option>
                          <option value="lifestyle">Lifestyle</option>
                          <option value="news">News & Politics</option>
                          <option value="sports">Sports</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-gray-300 text-sm font-medium mb-2">Podcast Description *</label>
                      <textarea
                        name="podcastDescription"
                        value={formData.podcastDescription}
                        onChange={handleInputChange}
                        rows={4}
                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:border-purple-500 focus:outline-none"
                        placeholder="Tell us about your podcast, target audience, and content style..."
                        required
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div>
                        <label className="block text-gray-300 text-sm font-medium mb-2">Start Date</label>
                        <input
                          type="date"
                          name="startDate"
                          value={formData.startDate}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:border-purple-500 focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-gray-300 text-sm font-medium mb-2">Total Episodes</label>
                        <input
                          type="number"
                          name="episodeCount"
                          value={formData.episodeCount}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:border-purple-500 focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-gray-300 text-sm font-medium mb-2">Publishing Frequency</label>
                        <select
                          name="frequency"
                          value={formData.frequency}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:border-purple-500 focus:outline-none"
                        >
                          <option value="">Select Frequency</option>
                          <option value="daily">Daily</option>
                          <option value="weekly">Weekly</option>
                          <option value="biweekly">Bi-weekly</option>
                          <option value="monthly">Monthly</option>
                          <option value="irregular">Irregular</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Statistics */}
                <div>
                  <h2 className="text-xl font-bold text-white mb-6 flex items-center">
                    <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center text-white text-sm font-bold mr-3">3</div>
                    <BarChart className="w-5 h-5 mr-2" />
                    Podcast Statistics
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-300 text-sm font-medium mb-2">Monthly Downloads *</label>
                      <select
                        name="monthlyDownloads"
                        value={formData.monthlyDownloads}
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
                        <option value="100k+">100K+</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-gray-300 text-sm font-medium mb-2">Average Listeners per Episode</label>
                      <input
                        type="text"
                        name="averageListeners"
                        value={formData.averageListeners}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:border-purple-500 focus:outline-none"
                        placeholder="e.g., 2,500"
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
                        <option value="18-24">18-24</option>
                        <option value="25-34">25-34</option>
                        <option value="35-44">35-44</option>
                        <option value="45-54">45-54</option>
                        <option value="55+">55+</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Platform Links */}
                <div>
                  <h2 className="text-xl font-bold text-white mb-6 flex items-center">
                    <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center text-white text-sm font-bold mr-3">4</div>
                    Platform Links
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-300 text-sm font-medium mb-2">Spotify URL</label>
                      <input
                        type="url"
                        name="spotifyUrl"
                        value={formData.spotifyUrl}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:border-purple-500 focus:outline-none"
                        placeholder="https://open.spotify.com/show/..."
                      />
                    </div>
                    <div>
                      <label className="block text-gray-300 text-sm font-medium mb-2">Apple Podcasts URL</label>
                      <input
                        type="url"
                        name="appleUrl"
                        value={formData.appleUrl}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:border-purple-500 focus:outline-none"
                        placeholder="https://podcasts.apple.com/..."
                      />
                    </div>
                    <div>
                      <label className="block text-gray-300 text-sm font-medium mb-2">Website URL</label>
                      <input
                        type="url"
                        name="websiteUrl"
                        value={formData.websiteUrl}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:border-purple-500 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-300 text-sm font-medium mb-2">Social Media Links</label>
                      <input
                        type="text"
                        name="socialMedia"
                        value={formData.socialMedia}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:border-purple-500 focus:outline-none"
                        placeholder="Instagram, Twitter, LinkedIn handles"
                      />
                    </div>
                  </div>
                </div>

                {/* Monetization Goals */}
                <div>
                  <h2 className="text-xl font-bold text-white mb-6 flex items-center">
                    <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center text-white text-sm font-bold mr-3">5</div>
                    Monetization & Goals
                  </h2>
                  <div className="space-y-6">
                    <div>
                      <label className="block text-gray-300 text-sm font-medium mb-2">Current Monetization Methods</label>
                      <textarea
                        name="currentMonetization"
                        value={formData.currentMonetization}
                        onChange={handleInputChange}
                        rows={3}
                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:border-purple-500 focus:outline-none"
                        placeholder="e.g., Sponsorships, Patreon, Merchandise, None yet..."
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
                        placeholder="What types of brands would you like to work with? What are your monetization goals?"
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="text-center pt-8">
                  {submitStatus === 'success' ? (
                    <div className="text-center">
                      <div className="mb-4 p-4 bg-green-600/20 border border-green-500/30 rounded-lg">
                        <p className="text-green-400 font-medium">✅ Application submitted successfully!</p>
                        <p className="text-gray-300 text-sm mt-2">Check your email for confirmation. Our team will contact you within 48 hours.</p>
                      </div>
                      <Button 
                        onClick={() => setSubmitStatus('idle')}
                        className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-3 rounded-full"
                        data-cursor-hover
                      >
                        Submit Another Application
                      </Button>
                    </div>
                  ) : (
                    <>
                      <Button 
                        type="submit"
                        disabled={isSubmitting}
                        className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-12 py-4 text-lg font-medium rounded-full transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                        data-cursor-hover
                      >
                        {isSubmitting ? 'Submitting...' : 'Submit Application'}
                        <Upload className="w-5 h-5 ml-2" />
                      </Button>
                      
                      {submitStatus === 'error' && (
                        <div className="mt-4 p-4 bg-red-600/20 border border-red-500/30 rounded-lg">
                          <p className="text-red-400 font-medium">❌ Failed to submit application</p>
                          <p className="text-gray-300 text-sm mt-2">Please try again or contact us directly.</p>
                        </div>
                      )}
                      
                      <p className="text-gray-400 text-sm mt-4">
                        We'll review your application and get back to you within 48 hours.
                      </p>
                    </>
                  )}
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

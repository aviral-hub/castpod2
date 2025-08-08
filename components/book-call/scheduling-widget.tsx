'use client'

import { useEffect, useRef, useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Calendar, Clock, User, CheckCircle, AlertCircle } from 'lucide-react'

export function SchedulingWidget() {
  const sectionRef = useRef<HTMLElement>(null)
  const [selectedDate, setSelectedDate] = useState<string>('')
  const [selectedTime, setSelectedTime] = useState<string>('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    callType: 'discovery',
    message: ''
  })

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up')
          }
        })
      },
      { threshold: 0.1 }
    )

    const elements = sectionRef.current?.querySelectorAll('.animate-on-scroll')
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  // Generate next 14 days (excluding weekends)
  const generateDates = () => {
    const dates = []
    const today = new Date()
    for (let i = 1; i <= 21; i++) { // Check more days to get 10 weekdays
      const date = new Date(today)
      date.setDate(today.getDate() + i)
      // Skip weekends
      if (date.getDay() !== 0 && date.getDay() !== 6) {
        dates.push(date)
      }
    }
    return dates.slice(0, 10) // Show 10 available dates
  }

  const availableTimes = [
    '09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
    '02:00 PM', '03:00 PM', '04:00 PM', '05:00 PM'
  ]

  const callTypeDetails = {
    discovery: { name: 'Discovery Call', duration: '30 minutes' },
    strategy: { name: 'Strategy Session', duration: '45 minutes' },
    quick: { name: 'Quick Consultation', duration: '15 minutes' }
  }

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
      const bookingData = {
        ...formData,
        selectedDate,
        selectedTime,
        callTypeDetails: callTypeDetails[formData.callType as keyof typeof callTypeDetails]
      }

      const response = await fetch('/api/book-call', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(bookingData),
      })

      const result = await response.json()

      if (result.success) {
        setSubmitStatus('success')
        // Reset form
        setFormData({
          name: '',
          email: '',
          company: '',
          phone: '',
          callType: 'discovery',
          message: ''
        })
        setSelectedDate('')
        setSelectedTime('')
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      console.error('Error booking call:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section ref={sectionRef} className="bg-gray-900 py-16 lg:py-24 relative">
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-on-scroll">
          <div className="mb-4">
            <span className="text-purple-400 text-sm font-medium tracking-wider uppercase">
              Schedule Your Call
            </span>
          </div>
          <h2 className="text-white text-4xl lg:text-6xl font-bold leading-tight mb-6">
            Book Your Free <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Strategy Call</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Choose a time that works for you. All calls are conducted via Zoom and you'll receive a calendar invite immediately.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {submitStatus === 'success' ? (
            // Success State
            <div className="text-center animate-on-scroll">
              <Card className="bg-gradient-to-br from-gray-800 to-gray-900 border border-green-500/30 max-w-2xl mx-auto">
                <CardContent className="p-12">
                  <div className="mb-6">
                    <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-white mb-4">
                      Call Booked Successfully! 🎉
                    </h3>
                  </div>
                  
                  <div className="bg-green-600/20 border border-green-500/30 rounded-lg p-6 mb-6">
                    <p className="text-green-400 font-medium mb-2">
                      ✅ Confirmation emails sent to {formData.email}
                    </p>
                    <p className="text-gray-300 text-sm">
                      Check your email for the Zoom link and calendar invite. We'll also send a reminder 24 hours before your call.
                    </p>
                  </div>

                  <div className="space-y-3 text-left bg-gray-700/30 rounded-lg p-4 mb-6">
                    <h4 className="text-white font-semibold">Call Details:</h4>
                    <p className="text-gray-300 text-sm">
                      <strong>Type:</strong> {callTypeDetails[formData.callType as keyof typeof callTypeDetails].name}
                    </p>
                    <p className="text-gray-300 text-sm">
                      <strong>Duration:</strong> {callTypeDetails[formData.callType as keyof typeof callTypeDetails].duration}
                    </p>
                    <p className="text-gray-300 text-sm">
                      <strong>Date:</strong> {new Date(selectedDate).toLocaleDateString('en-US', { 
                        weekday: 'long', 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}
                    </p>
                    <p className="text-gray-300 text-sm">
                      <strong>Time:</strong> {selectedTime} EST
                    </p>
                  </div>

                  <Button 
                    onClick={() => setSubmitStatus('idle')}
                    className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-3 rounded-full"
                    data-cursor-hover
                  >
                    Book Another Call
                  </Button>
                </CardContent>
              </Card>
            </div>
          ) : (
            // Booking Form
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              
              {/* Calendar & Time Selection */}
              <div className="animate-on-scroll">
                <Card className="bg-gradient-to-br from-gray-800 to-gray-900 border border-purple-500/20">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-bold text-white mb-6 flex items-center">
                      <Calendar className="w-5 h-5 mr-3 text-purple-400" />
                      Select Date & Time
                    </h3>
                    
                    {/* Date Selection */}
                    <div className="mb-8">
                      <h4 className="text-white font-semibold mb-4">Available Dates</h4>
                      <div className="grid grid-cols-2 gap-3">
                        {generateDates().map((date, index) => (
                          <button
                            key={index}
                            onClick={() => setSelectedDate(date.toISOString().split('T')[0])}
                            className={`p-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                              selectedDate === date.toISOString().split('T')[0]
                                ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white'
                                : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                            }`}
                            data-cursor-hover
                          >
                            {date.toLocaleDateString('en-US', { 
                              weekday: 'short', 
                              month: 'short', 
                              day: 'numeric' 
                            })}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Time Selection */}
                    {selectedDate && (
                      <div>
                        <h4 className="text-white font-semibold mb-4 flex items-center">
                          <Clock className="w-4 h-4 mr-2 text-purple-400" />
                          Available Times (EST)
                        </h4>
                        <div className="grid grid-cols-2 gap-3">
                          {availableTimes.map((time, index) => (
                            <button
                              key={index}
                              onClick={() => setSelectedTime(time)}
                              className={`p-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                                selectedTime === time
                                  ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white'
                                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                              }`}
                              data-cursor-hover
                            >
                              {time}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>

              {/* Contact Form */}
              <div className="animate-on-scroll">
                <Card className="bg-gradient-to-br from-gray-800 to-gray-900 border border-purple-500/20">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-bold text-white mb-6 flex items-center">
                      <User className="w-5 h-5 mr-3 text-purple-400" />
                      Your Information
                    </h3>
                    
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-gray-300 text-sm font-medium mb-2">
                            Full Name *
                          </label>
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:border-purple-500 focus:outline-none"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-gray-300 text-sm font-medium mb-2">
                            Company *
                          </label>
                          <input
                            type="text"
                            name="company"
                            value={formData.company}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:border-purple-500 focus:outline-none"
                            required
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-gray-300 text-sm font-medium mb-2">
                            Email Address *
                          </label>
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
                          <label className="block text-gray-300 text-sm font-medium mb-2">
                            Phone Number
                          </label>
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:border-purple-500 focus:outline-none"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-gray-300 text-sm font-medium mb-2">
                          Call Type
                        </label>
                        <select
                          name="callType"
                          value={formData.callType}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:border-purple-500 focus:outline-none"
                        >
                          <option value="discovery">Discovery Call (30 min)</option>
                          <option value="strategy">Strategy Session (45 min)</option>
                          <option value="quick">Quick Consultation (15 min)</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-gray-300 text-sm font-medium mb-2">
                          What would you like to discuss?
                        </label>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          rows={4}
                          className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:border-purple-500 focus:outline-none"
                          placeholder="Tell us about your brand, goals, or specific questions..."
                        />
                      </div>

                      <Button 
                        type="submit"
                        disabled={!selectedDate || !selectedTime || isSubmitting}
                        className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white py-4 text-lg font-medium rounded-full transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                        data-cursor-hover
                      >
                        {isSubmitting ? 'Booking Your Call...' : selectedDate && selectedTime ? 'Confirm Booking' : 'Select Date & Time First'}
                      </Button>

                      {submitStatus === 'error' && (
                        <div className="bg-red-600/20 border border-red-500/30 rounded-lg p-4 flex items-center">
                          <AlertCircle className="w-5 h-5 text-red-400 mr-3 flex-shrink-0" />
                          <div>
                            <p className="text-red-400 font-medium">Failed to book call</p>
                            <p className="text-gray-300 text-sm mt-1">Please try again or contact us directly.</p>
                          </div>
                        </div>
                      )}

                      {selectedDate && selectedTime && (
                        <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 border border-purple-500/30 rounded-lg p-4">
                          <p className="text-white font-medium">
                            📅 {new Date(selectedDate).toLocaleDateString('en-US', { 
                              weekday: 'long', 
                              year: 'numeric', 
                              month: 'long', 
                              day: 'numeric' 
                            })} at {selectedTime} EST
                          </p>
                          <p className="text-gray-300 text-sm mt-2">
                            You'll receive a Zoom link via email immediately after booking.
                          </p>
                        </div>
                      )}
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

'use client'

import { useEffect, useRef } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Star, Quote } from 'lucide-react'

export function BrandTestimonials() {
  const sectionRef = useRef<HTMLElement>(null)

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

  const testimonials = [
    {
      quote: "CastPod Connect transformed our marketing strategy. The authenticity of podcast advertising delivered results we never achieved with traditional channels.",
      author: "Priya Sharma",
      position: "Marketing Director",
      company: "TechFlow Solutions",
      rating: 5,
      results: "340% increase in qualified leads"
    },
    {
      quote: "The team's expertise in matching our brand with the right podcasts was incredible. Every placement felt natural and drove real engagement.",
      author: "Rajesh Kumar",
      position: "Founder & CEO",
      company: "EcoStart India",
      rating: 5,
      results: "280% boost in brand awareness"
    },
    {
      quote: "Best ROI we've ever seen from any advertising channel. The personal recommendations from podcast hosts converted like nothing else.",
      author: "Anita Desai",
      position: "CMO",
      company: "FinanceFirst",
      rating: 5,
      results: "4.2x return on ad spend"
    }
  ]

  return (
    <section ref={sectionRef} className="bg-gray-900 py-16 lg:py-24 relative">
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-on-scroll">
          <div className="mb-4">
            <span className="text-purple-400 text-sm font-medium tracking-wider uppercase">
              Client Testimonials
            </span>
          </div>
          <h2 className="text-white text-4xl lg:text-6xl font-bold leading-tight mb-6">
            What Our Clients <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Are Saying</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Don't just take our word for it. Here's what brands are saying about their experience with CastPod Connect.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="bg-gradient-to-br from-gray-800 to-gray-900 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-500 group animate-on-scroll"
              style={{ animationDelay: `${index * 200}ms` }}
              data-cursor-hover
            >
              <CardContent className="p-8">
                <div className="mb-6">
                  <Quote className="w-8 h-8 text-purple-400 mb-4" />
                  <blockquote className="text-gray-300 text-lg leading-relaxed group-hover:text-white transition-colors duration-300">
                    "{testimonial.quote}"
                  </blockquote>
                </div>

                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                <div className="border-t border-gray-700 pt-6">
                  <div className="mb-3">
                    <div className="font-semibold text-white group-hover:text-purple-300 transition-colors duration-300">
                      {testimonial.author}
                    </div>
                    <div className="text-sm text-gray-400">
                      {testimonial.position}
                    </div>
                    <div className="text-sm text-purple-400">
                      {testimonial.company}
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-lg p-3">
                    <div className="text-sm font-medium text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
                      Result: {testimonial.results}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

'use client'

import { useEffect, useRef } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { TrendingUp, Users, DollarSign } from 'lucide-react'

export function CaseStudies() {
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

  const caseStudies = [
    {
      company: 'TechStart Pro',
      industry: 'SaaS Platform',
      challenge: 'Needed to reach tech-savvy entrepreneurs and startup founders',
      solution: 'Partnered with 15 business and tech podcasts for host-read ads',
      results: [
        { icon: <TrendingUp className="w-5 h-5" />, metric: '340%', label: 'Increase in signups' },
        { icon: <Users className="w-5 h-5" />, metric: '25K', label: 'New users acquired' },
        { icon: <DollarSign className="w-5 h-5" />, metric: '4.2x', label: 'Return on ad spend' }
      ],
      quote: "Podcast advertising helped us reach our exact target audience. The authenticity of host recommendations converted better than any other channel.",
      author: "Sarah Chen, CMO"
    },
    {
      company: 'EcoLife Products',
      industry: 'Sustainable Goods',
      challenge: 'Wanted to connect with environmentally conscious consumers',
      solution: 'Sponsored sustainability and lifestyle podcasts with custom content',
      results: [
        { icon: <TrendingUp className="w-5 h-5" />, metric: '280%', label: 'Sales growth' },
        { icon: <Users className="w-5 h-5" />, metric: '50K', label: 'Brand impressions' },
        { icon: <DollarSign className="w-5 h-5" />, metric: '3.8x', label: 'ROI achieved' }
      ],
      quote: "The personal connection podcast hosts have with their audience translated into genuine interest in our sustainable products.",
      author: "Mike Rodriguez, Founder"
    },
    {
      company: 'FitnessPro App',
      industry: 'Health & Fitness',
      challenge: 'Competing in a crowded fitness app market',
      solution: 'Targeted health and wellness podcasts with success story integrations',
      results: [
        { icon: <TrendingUp className="w-5 h-5" />, metric: '450%', label: 'App downloads' },
        { icon: <Users className="w-5 h-5" />, metric: '75K', label: 'Active users' },
        { icon: <DollarSign className="w-5 h-5" />, metric: '5.1x', label: 'Marketing ROI' }
      ],
      quote: "Podcast advertising gave us the credibility we needed. When fitness influencers personally recommend your app, people listen.",
      author: "Jessica Park, Marketing Director"
    }
  ]

  return (
    <section ref={sectionRef} className="bg-gray-900 py-16 lg:py-24 relative">
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-on-scroll">
          <div className="mb-4">
            <span className="text-purple-400 text-sm font-medium tracking-wider uppercase">
              Success Stories
            </span>
          </div>
          <h2 className="text-white text-4xl lg:text-6xl font-bold leading-tight mb-6">
            Real Results from <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Real Brands</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            See how brands like yours are achieving remarkable growth through strategic podcast advertising.
          </p>
        </div>

        <div className="space-y-12">
          {caseStudies.map((study, index) => (
            <Card 
              key={index}
              className="bg-gradient-to-br from-gray-800 to-gray-900 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-500 group animate-on-scroll"
              style={{ animationDelay: `${index * 200}ms` }}
              data-cursor-hover
            >
              <CardContent className="p-8 lg:p-12">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                  
                  {/* Company Info */}
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors duration-300">
                      {study.company}
                    </h3>
                    <p className="text-purple-400 text-sm font-medium mb-4">
                      {study.industry}
                    </p>
                    
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-white font-semibold mb-2">Challenge:</h4>
                        <p className="text-gray-400 text-sm">{study.challenge}</p>
                      </div>
                      <div>
                        <h4 className="text-white font-semibold mb-2">Solution:</h4>
                        <p className="text-gray-400 text-sm">{study.solution}</p>
                      </div>
                    </div>
                  </div>

                  {/* Results */}
                  <div className="lg:col-span-1">
                    <h4 className="text-white font-semibold mb-4">Results:</h4>
                    <div className="space-y-4">
                      {study.results.map((result, resultIndex) => (
                        <div key={resultIndex} className="flex items-center space-x-3">
                          <div className="text-purple-400">
                            {result.icon}
                          </div>
                          <div>
                            <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
                              {result.metric}
                            </div>
                            <div className="text-sm text-gray-400">
                              {result.label}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Testimonial */}
                  <div className="lg:col-span-1">
                    <blockquote className="text-gray-300 italic text-lg leading-relaxed mb-4 group-hover:text-white transition-colors duration-300">
                      "{study.quote}"
                    </blockquote>
                    <cite className="text-purple-400 font-medium">
                      — {study.author}
                    </cite>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16 animate-on-scroll">
          <button 
            className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 rounded-full font-medium transform hover:scale-105 transition-all duration-300"
            data-cursor-hover
          >
            View More Case Studies
          </button>
        </div>
      </div>
    </section>
  )
}

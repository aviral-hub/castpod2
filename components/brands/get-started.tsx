'use client'

import { useEffect, useRef } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Calendar, MessageSquare, FileText, Zap } from 'lucide-react'

export function GetStarted() {
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

  const steps = [
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: 'Discovery Call',
      description: 'We learn about your brand, goals, and target audience',
      duration: '30 minutes'
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: 'Strategy Development',
      description: 'Custom campaign strategy with podcast recommendations',
      duration: '2-3 days'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Campaign Launch',
      description: 'Your ads go live across our curated podcast network',
      duration: '1 week'
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: 'Optimization',
      description: 'Continuous monitoring and optimization for best results',
      duration: 'Ongoing'
    }
  ]

  return (
    <section ref={sectionRef} className="bg-gradient-to-br from-gray-900 via-purple-900/10 to-gray-900 py-16 lg:py-24 relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-purple-600/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-on-scroll">
          <div className="mb-4">
            <span className="text-purple-400 text-sm font-medium tracking-wider uppercase">
              Get Started
            </span>
          </div>
          <h2 className="text-white text-4xl lg:text-6xl font-bold leading-tight mb-6">
            Ready to Launch Your <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Podcast Campaign?</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Getting started is simple. Here's how we'll work together to create a successful podcast advertising campaign.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {steps.map((step, index) => (
            <Card 
              key={index}
              className="bg-gradient-to-br from-gray-800 to-gray-900 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-500 group animate-on-scroll"
              style={{ animationDelay: `${index * 150}ms` }}
              data-cursor-hover
            >
              <CardContent className="p-6 text-center">
                <div className="mb-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-full flex items-center justify-center mx-auto text-purple-400 group-hover:scale-110 transition-transform duration-300">
                    {step.icon}
                  </div>
                </div>
                
                <div className="mb-4">
                  <div className="text-sm text-purple-400 font-medium mb-2">
                    Step {index + 1}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors duration-300">
                    {step.title}
                  </h3>
                  <div className="text-xs text-gray-500 mb-3">
                    {step.duration}
                  </div>
                </div>
                
                <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                  {step.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center animate-on-scroll">
          <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 border border-purple-500/30 rounded-2xl p-8 lg:p-12 backdrop-blur-sm">
            <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Start Your Success Story Today
            </h3>
            <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
              Join hundreds of brands already seeing incredible results with podcast advertising. 
              Your first campaign could be live within a week.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 text-lg font-medium rounded-full transform hover:scale-105 transition-all duration-300"
                data-cursor-hover
              >
                <Calendar className="w-5 h-5 mr-2" />
                Schedule Free Consultation
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white px-8 py-4 text-lg font-medium rounded-full transform hover:scale-105 transition-all duration-300"
                data-cursor-hover
              >
                <FileText className="w-5 h-5 mr-2" />
                Download Media Kit
              </Button>
            </div>
            
            <p className="text-sm text-gray-500 mt-6">
              🚀 Free consultation • No commitment required • Results guaranteed
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

'use client'

import { useEffect, useRef } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Calendar, MessageSquare, Users, Zap } from 'lucide-react'

export function CallTypes() {
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

  const callTypes = [
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: 'Discovery Call',
      duration: '30 minutes',
      description: 'Perfect for brands new to podcast advertising. We\'ll discuss your goals and explore opportunities.',
      features: [
        'Brand goals assessment',
        'Target audience analysis',
        'Podcast recommendation preview',
        'Budget discussion',
        'Next steps planning'
      ],
      cta: 'Book Discovery Call',
      popular: false
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Strategy Session',
      duration: '45 minutes',
      description: 'Deep-dive strategy session for brands ready to launch comprehensive podcast campaigns.',
      features: [
        'Detailed campaign strategy',
        'Audience matching analysis',
        'Content recommendations',
        'Timeline & budget planning',
        'ROI projections'
      ],
      cta: 'Book Strategy Session',
      popular: true
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Quick Consultation',
      duration: '15 minutes',
      description: 'Quick consultation for specific questions about podcast advertising or existing campaigns.',
      features: [
        'Campaign optimization tips',
        'Performance review',
        'Quick Q&A session',
        'Immediate recommendations',
        'Follow-up resources'
      ],
      cta: 'Book Quick Call',
      popular: false
    }
  ]

  return (
    <section ref={sectionRef} className="bg-gray-900 py-16 lg:py-24 relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/3 w-72 h-72 bg-purple-600/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-on-scroll">
          <div className="mb-4">
            <span className="text-purple-400 text-sm font-medium tracking-wider uppercase">
              Choose Your Call Type
            </span>
          </div>
          <h2 className="text-white text-4xl lg:text-6xl font-bold leading-tight mb-6">
            What Would You Like to <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Discuss?</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Choose the type of call that best fits your needs. All calls are free and designed to provide immediate value.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {callTypes.map((callType, index) => (
            <Card 
              key={index}
              className={`relative bg-gradient-to-br from-gray-800 to-gray-900 border transition-all duration-500 group animate-on-scroll ${
                callType.popular 
                  ? 'border-purple-500/60 scale-105 shadow-2xl shadow-purple-500/20' 
                  : 'border-purple-500/20 hover:border-purple-500/40 hover:scale-102'
              }`}
              style={{ animationDelay: `${index * 200}ms` }}
              data-cursor-hover
            >
              {callType.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                    Most Popular
                  </div>
                </div>
              )}

              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <div className="mb-6 flex justify-center">
                    <div className={`p-4 rounded-full transition-all duration-300 ${
                      callType.popular
                        ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white'
                        : 'bg-gradient-to-r from-purple-600/20 to-blue-600/20 text-purple-400 group-hover:scale-110'
                    }`}>
                      {callType.icon}
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors duration-300">
                    {callType.title}
                  </h3>
                  
                  <div className="text-purple-400 font-medium mb-4">
                    <Calendar className="w-4 h-4 inline mr-2" />
                    {callType.duration}
                  </div>
                  
                  <p className="text-gray-400 leading-relaxed mb-6 group-hover:text-gray-300 transition-colors duration-300">
                    {callType.description}
                  </p>
                </div>

                <div className="space-y-4 mb-8">
                  <h4 className="text-white font-semibold">What we'll cover:</h4>
                  <ul className="space-y-3">
                    {callType.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300 group-hover:text-white transition-colors duration-300">
                        <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mr-3 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Button 
                  className={`w-full py-3 font-medium rounded-full transition-all duration-300 transform hover:scale-105 ${
                    callType.popular
                      ? 'bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white'
                      : 'border border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white'
                  }`}
                  variant={callType.popular ? 'default' : 'outline'}
                  data-cursor-hover
                >
                  {callType.cta}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16 animate-on-scroll">
          <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 border border-purple-500/30 rounded-2xl p-8 backdrop-blur-sm max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Not Sure Which Call to Book?
            </h3>
            <p className="text-gray-400 mb-6">
              Start with a Discovery Call. Our team will help determine the best approach for your brand's specific needs.
            </p>
            <Button 
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-3 rounded-full font-medium transform hover:scale-105 transition-all duration-300"
              data-cursor-hover
            >
              Book Discovery Call
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

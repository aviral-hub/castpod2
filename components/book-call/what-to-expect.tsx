'use client'

import { useEffect, useRef } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { CheckCircle, Clock, Users, TrendingUp, Target, Lightbulb } from 'lucide-react'

export function WhatToExpect() {
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

  const expectations = [
    {
      icon: <Target className="w-6 h-6" />,
      title: 'Goal Alignment',
      description: 'We\'ll understand your brand objectives, target audience, and success metrics.'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Audience Analysis',
      description: 'Deep dive into your ideal customer profile and how they consume podcast content.'
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: 'Strategy Recommendations',
      description: 'Tailored podcast advertising strategies based on your industry and goals.'
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: 'ROI Projections',
      description: 'Realistic expectations and projections for your podcast advertising investment.'
    }
  ]

  const preparation = [
    'Your brand\'s current marketing challenges',
    'Target audience demographics and behaviors',
    'Marketing budget and timeline',
    'Previous advertising experiences',
    'Specific questions about podcast advertising'
  ]

  return (
    <section ref={sectionRef} className="bg-gradient-to-br from-gray-900 via-purple-900/10 to-gray-900 py-16 lg:py-24 relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-0 w-64 h-64 bg-purple-600/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-on-scroll">
          <div className="mb-4">
            <span className="text-purple-400 text-sm font-medium tracking-wider uppercase">
              What to Expect
            </span>
          </div>
          <h2 className="text-white text-4xl lg:text-6xl font-bold leading-tight mb-6">
            Your Call Will Be <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Valuable & Actionable</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Every call is designed to provide immediate value, whether you decide to work with us or not.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-16">
          {/* What We'll Cover */}
          <div className="animate-on-scroll">
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
              <CheckCircle className="w-6 h-6 text-purple-400 mr-3" />
              What We'll Cover
            </h3>
            <div className="space-y-6">
              {expectations.map((item, index) => (
                <div key={index} className="flex items-start space-x-4 group">
                  <div className="p-2 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-lg text-purple-400 group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-2 group-hover:text-purple-300 transition-colors duration-300">
                      {item.title}
                    </h4>
                    <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* How to Prepare */}
          <div className="animate-on-scroll">
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
              <Clock className="w-6 h-6 text-purple-400 mr-3" />
              How to Prepare
            </h3>
            <Card className="bg-gradient-to-br from-gray-800 to-gray-900 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-500">
              <CardContent className="p-6">
                <p className="text-gray-300 mb-6 leading-relaxed">
                  To make the most of our time together, think about these topics beforehand:
                </p>
                <ul className="space-y-3">
                  {preparation.map((item, index) => (
                    <li key={index} className="flex items-center text-gray-300 hover:text-white transition-colors duration-300">
                      <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mr-3 flex-shrink-0" />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Call Process */}
        <div className="animate-on-scroll">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            Our Call Process
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: '1', title: 'Introduction', desc: 'Quick introductions and agenda overview' },
              { step: '2', title: 'Discovery', desc: 'Understanding your brand and challenges' },
              { step: '3', title: 'Strategy', desc: 'Tailored recommendations and insights' },
              { step: '4', title: 'Next Steps', desc: 'Clear action plan and follow-up' }
            ].map((phase, index) => (
              <Card 
                key={index}
                className="bg-gradient-to-br from-gray-800 to-gray-900 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-500 group text-center"
                data-cursor-hover
              >
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    {phase.step}
                  </div>
                  <h4 className="text-white font-semibold mb-2 group-hover:text-purple-300 transition-colors duration-300">
                    {phase.title}
                  </h4>
                  <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">
                    {phase.desc}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

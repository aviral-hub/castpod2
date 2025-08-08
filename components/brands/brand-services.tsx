'use client'

import { useEffect, useRef } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Mic, Users, BarChart, Megaphone, Target, Zap } from 'lucide-react'

export function BrandServices() {
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

  const services = [
    {
      icon: <Mic className="w-8 h-8" />,
      title: 'Host-Read Ads',
      description: 'Personal endorsements from trusted podcast hosts that feel natural and authentic.',
      features: ['Personal touch', 'Higher conversion', 'Authentic delivery', 'Custom scripts']
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Audience Matching',
      description: 'Connect with podcasts whose audience perfectly aligns with your target demographic.',
      features: ['Demographic analysis', 'Interest targeting', 'Behavior matching', 'Quality assurance']
    },
    {
      icon: <BarChart className="w-8 h-8" />,
      title: 'Performance Analytics',
      description: 'Detailed insights and metrics to track your campaign performance and ROI.',
      features: ['Real-time tracking', 'Conversion metrics', 'Audience insights', 'ROI analysis']
    },
    {
      icon: <Megaphone className="w-8 h-8" />,
      title: 'Brand Integration',
      description: 'Seamless integration of your brand message into podcast content and conversations.',
      features: ['Natural placement', 'Story integration', 'Brand alignment', 'Content strategy']
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Campaign Strategy',
      description: 'Comprehensive campaign planning and execution tailored to your brand goals.',
      features: ['Goal setting', 'Strategy development', 'Timeline planning', 'Budget optimization']
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Quick Launch',
      description: 'Fast-track your campaigns with our streamlined process and ready network.',
      features: ['Rapid deployment', 'Pre-vetted hosts', 'Quick approvals', '48hr launch']
    }
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
              Our Services
            </span>
          </div>
          <h2 className="text-white text-4xl lg:text-6xl font-bold leading-tight mb-6">
            Everything You Need to <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Succeed</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            From strategy to execution, we handle every aspect of your podcast advertising campaign.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="bg-gradient-to-br from-gray-800 to-gray-900 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-500 group animate-on-scroll"
              style={{ animationDelay: `${index * 150}ms` }}
              data-cursor-hover
            >
              <CardContent className="p-6">
                <div className="mb-4">
                  <div className="p-3 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-full text-purple-400 group-hover:scale-110 transition-transform duration-300 w-fit">
                    {service.icon}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-gray-400 text-sm leading-relaxed mb-4 group-hover:text-gray-300 transition-colors duration-300">
                  {service.description}
                </p>

                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-500 group-hover:text-gray-400 transition-colors duration-300">
                      <div className="w-1.5 h-1.5 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

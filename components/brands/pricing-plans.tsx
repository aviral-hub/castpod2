'use client'

import { useEffect, useRef } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Check, Star, Zap } from 'lucide-react'

export function PricingPlans() {
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

  const plans = [
    {
      name: 'Starter',
      price: '₹25,000',
      period: '/month',
      description: 'Perfect for small businesses testing podcast advertising',
      features: [
        '2-3 podcast placements',
        'Basic audience targeting',
        'Monthly performance reports',
        'Email support',
        'Campaign optimization'
      ],
      cta: 'Start Small',
      popular: false
    },
    {
      name: 'Growth',
      price: '₹75,000',
      period: '/month',
      description: 'Ideal for growing brands ready to scale their reach',
      features: [
        '8-10 podcast placements',
        'Advanced audience targeting',
        'Bi-weekly performance reports',
        'Priority support',
        'A/B testing',
        'Custom ad scripts',
        'Dedicated account manager'
      ],
      cta: 'Scale Up',
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'For large brands with complex advertising needs',
      features: [
        'Unlimited podcast placements',
        'Premium audience targeting',
        'Real-time analytics',
        '24/7 support',
        'Advanced A/B testing',
        'Custom integrations',
        'Strategic consulting',
        'White-label reporting'
      ],
      cta: 'Get Quote',
      popular: false
    }
  ]

  return (
    <section ref={sectionRef} className="bg-gradient-to-br from-gray-900 via-purple-900/10 to-gray-900 py-16 lg:py-24 relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-on-scroll">
          <div className="mb-4">
            <span className="text-purple-400 text-sm font-medium tracking-wider uppercase">
              Pricing Plans
            </span>
          </div>
          <h2 className="text-white text-4xl lg:text-6xl font-bold leading-tight mb-6">
            Choose Your <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Growth Plan</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Transparent pricing with no hidden fees. Start small or go big - we have a plan that fits your budget and goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {plans.map((plan, index) => (
            <Card 
              key={index}
              className={`relative bg-gradient-to-br from-gray-800 to-gray-900 border transition-all duration-500 group animate-on-scroll ${
                plan.popular 
                  ? 'border-purple-500/60 scale-105 shadow-2xl shadow-purple-500/20' 
                  : 'border-purple-500/20 hover:border-purple-500/40'
              }`}
              style={{ animationDelay: `${index * 200}ms` }}
              data-cursor-hover
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium flex items-center space-x-1">
                    <Star className="w-4 h-4" />
                    <span>Most Popular</span>
                  </div>
                </div>
              )}

              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors duration-300">
                    {plan.name}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4">
                    {plan.description}
                  </p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
                      {plan.price}
                    </span>
                    <span className="text-gray-400 ml-1">
                      {plan.period}
                    </span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300 group-hover:text-white transition-colors duration-300">
                      <Check className="w-5 h-5 text-purple-400 mr-3 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  className={`w-full py-3 font-medium rounded-full transition-all duration-300 transform hover:scale-105 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white'
                      : 'border border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white'
                  }`}
                  variant={plan.popular ? 'default' : 'outline'}
                  data-cursor-hover
                >
                  {plan.popular && <Zap className="w-4 h-4 mr-2" />}
                  {plan.cta}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16 animate-on-scroll">
          <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 border border-purple-500/30 rounded-2xl p-8 backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-white mb-4">
              Need a Custom Solution?
            </h3>
            <p className="text-gray-400 mb-6">
              Let's discuss your specific needs and create a tailored plan that delivers results.
            </p>
            <Button 
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-3 rounded-full font-medium transform hover:scale-105 transition-all duration-300"
              data-cursor-hover
            >
              Schedule Consultation
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

'use client'

import { useEffect, useRef, useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { ChevronDown, ChevronUp } from 'lucide-react'

export function FAQSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [openFAQ, setOpenFAQ] = useState<number | null>(0)

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

  const faqs = [
    {
      question: 'What happens during the call?',
      answer: 'We\'ll discuss your brand goals, target audience, and current marketing challenges. Then we\'ll share insights about podcast advertising opportunities and provide tailored recommendations for your specific situation.'
    },
    {
      question: 'Is there any cost for the consultation?',
      answer: 'No, all our consultation calls are completely free. We believe in providing value upfront and only work with brands that are a good fit for podcast advertising.'
    },
    {
      question: 'How long are the calls?',
      answer: 'Discovery calls are 30 minutes, Strategy sessions are 45 minutes, and Quick consultations are 15 minutes. We respect your time and keep calls focused and valuable.'
    },
    {
      question: 'What if I\'m not ready to start a campaign?',
      answer: 'That\'s perfectly fine! Many of our best partnerships started with brands who were just exploring podcast advertising. We\'ll provide insights and resources regardless of your timeline.'
    },
    {
      question: 'Do you work with all types of brands?',
      answer: 'We work with brands across various industries, but we\'re selective about partnerships to ensure authentic alignment with our podcast network. We\'ll be honest about whether podcast advertising is right for your brand.'
    },
    {
      question: 'What should I prepare before the call?',
      answer: 'Think about your marketing goals, target audience, budget range, and any specific questions about podcast advertising. We\'ll guide the conversation, so don\'t worry about having everything figured out.'
    },
    {
      question: 'Can I reschedule if needed?',
      answer: 'Life happens. Just email us or use the calendar link we send you to reschedule. We ask for at least 24 hours notice when possible.'
    },
    {
      question: 'Will you try to sell me something on the call?',
      answer: 'Our focus is on providing value and determining if there\'s a mutual fit. If podcast advertising isn\'t right for your brand, we\'ll tell you honestly. No high-pressure sales tactics.'
    }
  ]

  return (
    <section ref={sectionRef} className="bg-gradient-to-br from-gray-900 via-purple-900/10 to-gray-900 py-16 lg:py-24 relative">
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-on-scroll">
          <div className="mb-4">
            <span className="text-purple-400 text-sm font-medium tracking-wider uppercase">
              Frequently Asked Questions
            </span>
          </div>
          <h2 className="text-white text-4xl lg:text-6xl font-bold leading-tight mb-6">
            Questions About <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Booking a Call?</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Here are answers to the most common questions about our consultation calls.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4 animate-on-scroll">
            {faqs.map((faq, index) => (
              <Card 
                key={index}
                className="bg-gradient-to-br from-gray-800 to-gray-900 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-500"
              >
                <CardContent className="p-0">
                  <button
                    onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                    className="w-full p-6 text-left flex items-center justify-between hover:bg-purple-600/10 transition-colors duration-300"
                    data-cursor-hover
                  >
                    <h3 className="text-white font-semibold text-lg pr-4">
                      {faq.question}
                    </h3>
                    <div className="text-purple-400 flex-shrink-0">
                      {openFAQ === index ? (
                        <ChevronUp className="w-5 h-5" />
                      ) : (
                        <ChevronDown className="w-5 h-5" />
                      )}
                    </div>
                  </button>
                  
                  <div className={`overflow-hidden transition-all duration-300 ${
                    openFAQ === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}>
                    <div className="px-6 pb-6">
                      <p className="text-gray-400 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

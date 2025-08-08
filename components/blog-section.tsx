'use client'

import { useEffect, useRef } from 'react'

export function BlogSection() {
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

  const articles = [
    { 
      category: 'May 28, 2024', 
      award: 'The Complete Guide to Podcast Monetization in 2024', 
      year: 'Discover proven strategies to turn your podcast into a sustainable income stream.',
      readTime: '8 min read'
    },
    { 
      category: 'May 20, 2024', 
      award: 'Instagram Creator Strategies: Beyond Follower Count', 
      year: 'How micro-influencers are outperforming accounts with millions of followers.',
      readTime: '6 min read'
    },
    { 
      category: 'May 15, 2024', 
      award: 'How Brands Can Find Their Perfect Podcast Match', 
      year: 'A step-by-step guide to identifying podcasts that align with your brand values.',
      readTime: '10 min read'
    }
  ]

  return (
    <section ref={sectionRef} className="bg-gradient-to-br from-gray-900 via-purple-900/10 to-gray-900 py-16 lg:py-24 relative">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-purple-600/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="mb-16 animate-on-scroll">
          <div className="mb-4">
            <span className="text-purple-400 text-sm font-medium tracking-wider uppercase">
              Learn From Our Blog
            </span>
          </div>
          <h2 className="text-white text-4xl lg:text-6xl xl:text-7xl font-bold leading-tight">
            Insights, strategies, and<br />
            trends in podcast marketing<br />
            <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">and creator monetization</span>
          </h2>
        </div>

        <div className="space-y-8">
          {articles.map((article, index) => (
            <div 
              key={index} 
              className="flex flex-col md:flex-row md:items-center justify-between py-6 border-b border-gray-700 group hover:border-purple-500 transition-all duration-300 px-4 rounded-lg hover:bg-gradient-to-r hover:from-purple-600/10 hover:to-blue-600/10 cursor-pointer animate-on-scroll"
              data-cursor-hover
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8 mb-4 md:mb-0">
                <span className="text-purple-400 group-hover:text-purple-300 text-sm font-medium min-w-[100px] transition-colors duration-300">
                  {article.category}
                </span>
                <div>
                  <h3 className="text-white group-hover:text-purple-300 text-lg lg:text-xl font-medium mb-2 transition-colors duration-300">
                    {article.award}
                  </h3>
                  <p className="text-gray-400 group-hover:text-gray-300 text-sm transition-colors duration-300">
                    {article.year}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-gray-500 text-sm">{article.readTime}</span>
                <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white text-sm">→</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 animate-on-scroll">
          <button 
            className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 font-medium hover:from-purple-700 hover:to-blue-700 transition-all duration-300 rounded-lg transform hover:scale-105"
            data-cursor-hover
          >
            View All Articles
          </button>
        </div>
      </div>
    </section>
  )
}

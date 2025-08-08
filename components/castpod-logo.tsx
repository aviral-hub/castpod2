'use client'

import { useState, useEffect } from 'react'

interface CastPodLogoProps {
  size?: number
  animated?: boolean
  className?: string
  variant?: 'full' | 'icon' | 'minimal'
}

export function CastPodLogo({ size = 50, animated = true, className = "", variant = 'minimal' }: CastPodLogoProps) {
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    if (animated) {
      const interval = setInterval(() => {
        setIsAnimating(prev => !prev)
      }, 3000)
      return () => clearInterval(interval)
    }
  }, [animated])

  if (variant === 'minimal') {
    return (
      <div className={`relative ${className}`} style={{ width: size, height: size }}>
        <svg
          width={size}
          height={size}
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="drop-shadow-lg"
        >
          <defs>
            {/* Main brand gradient matching the image */}
            <linearGradient id="brandGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#4C1D95" />
              <stop offset="50%" stopColor="#3B2F9F" />
              <stop offset="100%" stopColor="#1E40AF" />
            </linearGradient>
            
            {/* Subtle glow for premium feel */}
            <filter id="subtleGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="1" result="coloredBlur"/>
              <feMerge> 
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
            
            {/* Animation glow */}
            <filter id="animationGlow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
              <feMerge> 
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>

          {/* Background subtle glow when animated */}
          {animated && (
            <g opacity="0.3" className="animate-pulse">
              <circle cx="35" cy="35" r="22" fill="url(#brandGradient)" filter="url(#animationGlow)" />
              <circle cx="65" cy="65" r="22" fill="url(#brandGradient)" filter="url(#animationGlow)" />
            </g>
          )}

          {/* Main interlocking circles */}
          <g className={isAnimating && animated ? "animate-pulse" : ""}>
            {/* First circle (top-left) */}
            <circle
              cx="35"
              cy="35"
              r="20"
              fill="url(#brandGradient)"
              filter="url(#subtleGlow)"
            />
            
            {/* Inner hole of first circle */}
            <circle
              cx="35"
              cy="35"
              r="8"
              fill="white"
            />
            
            {/* Second circle (bottom-right) */}
            <circle
              cx="65"
              cy="65"
              r="20"
              fill="url(#brandGradient)"
              filter="url(#subtleGlow)"
            />
            
            {/* Inner hole of second circle */}
            <circle
              cx="65"
              cy="65"
              r="8"
              fill="white"
            />
          </g>

          {/* Subtle connection highlight */}
          {animated && (
            <circle
              cx="50"
              cy="50"
              r="2"
              fill="url(#brandGradient)"
              opacity="0.6"
              className="animate-ping"
            />
          )}
        </svg>
      </div>
    )
  }

  // Full version with text
  return (
    <div className={`relative flex items-center ${className}`} style={{ height: size }}>
      <svg
        width={size * 2.5}
        height={size}
        viewBox="0 0 250 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="drop-shadow-2xl"
      >
        <defs>
          <linearGradient id="fullBrandGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4C1D95" />
            <stop offset="50%" stopColor="#3B2F9F" />
            <stop offset="100%" stopColor="#1E40AF" />
          </linearGradient>
          
          <linearGradient id="textGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#4C1D95" />
            <stop offset="50%" stopColor="#3B2F9F" />
            <stop offset="100%" stopColor="#1E40AF" />
          </linearGradient>
          
          <filter id="logoGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {/* Logo icon */}
        <g transform="translate(50, 50)">
          {/* Background glow */}
          {animated && (
            <g opacity="0.2" className="animate-pulse">
              <circle cx="-15" cy="-15" r="22" fill="url(#fullBrandGradient)" filter="url(#logoGlow)" />
              <circle cx="15" cy="15" r="22" fill="url(#fullBrandGradient)" filter="url(#logoGlow)" />
            </g>
          )}

          {/* Main circles */}
          <g className={isAnimating && animated ? "animate-pulse" : ""}>
            <circle cx="-15" cy="-15" r="18" fill="url(#fullBrandGradient)" filter="url(#logoGlow)" />
            <circle cx="-15" cy="-15" r="7" fill="white" />
            <circle cx="15" cy="15" r="18" fill="url(#fullBrandGradient)" filter="url(#logoGlow)" />
            <circle cx="15" cy="15" r="7" fill="white" />
          </g>

          {/* Connection point */}
          {animated && (
            <circle cx="0" cy="0" r="1.5" fill="url(#fullBrandGradient)" opacity="0.8" className="animate-ping" />
          )}
        </g>

        {/* Text */}
        <g transform="translate(110, 50)">
          <text
            x="0"
            y="-8"
            fontSize="20"
            fontFamily="system-ui, -apple-system, sans-serif"
            fontWeight="700"
            fill="url(#textGradient)"
          >
            CastPod
          </text>
          
          <text
            x="0"
            y="12"
            fontSize="16"
            fontFamily="system-ui, -apple-system, sans-serif"
            fontWeight="500"
            fill="url(#textGradient)"
            opacity="0.8"
          >
            Connect
          </text>
          
          <text
            x="0"
            y="28"
            fontSize="9"
            fontFamily="system-ui, -apple-system, sans-serif"
            fontWeight="400"
            fill="url(#fullBrandGradient)"
            opacity="0.6"
          >
            Real Voices • Real Brands
          </text>
        </g>
      </svg>
    </div>
  )
}

'use client'

import React, { useCallback, useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight, Play } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface CarouselSlide {
  id: string
  title: string
  subtitle?: string
  image: string
  videoThumbnail?: boolean
}

interface StackedCarouselProps {
  slides: CarouselSlide[]
  className?: string
  autoplay?: boolean
  autoplayInterval?: number
}

export function StackedCarousel({ 
  slides, 
  className,
  autoplay = false,
  autoplayInterval = 5000 
}: StackedCarouselProps) {
  const [selectedIndex, setSelectedIndex] = useState(0)

  const scrollPrev = useCallback(() => {
    setSelectedIndex(prev => prev === 0 ? slides.length - 1 : prev - 1)
  }, [slides.length])

  const scrollNext = useCallback(() => {
    setSelectedIndex(prev => (prev + 1) % slides.length)
  }, [slides.length])

  const scrollTo = useCallback((index: number) => {
    setSelectedIndex(index)
  }, [])

  // Autoplay functionality
  useEffect(() => {
    if (!autoplay) return

    const interval = setInterval(() => {
      scrollNext()
    }, autoplayInterval)

    return () => clearInterval(interval)
  }, [autoplay, autoplayInterval, scrollNext])

  // Calculate slide position and styling for stacked effect - UPDATED with no opacity effects
  const getSlideStyles = (index: number) => {
    const distance = index - selectedIndex
    const totalSlides = slides.length
    
    // Handle circular distance calculation
    let adjustedDistance = distance
    if (Math.abs(distance) > totalSlides / 2) {
      adjustedDistance = distance > 0 ? distance - totalSlides : distance + totalSlides
    }
    
    const absDistance = Math.abs(adjustedDistance)
    
    if (absDistance === 0) {
      // Active slide - center position
      return {
        transform: 'translateX(0%) translateZ(0px) scale(1) rotateY(0deg)',
        zIndex: 30,
        opacity: 1,
        // filter: 'brightness(1)', // Removed brightness filter
      }
    } else if (absDistance === 1) {
      // Adjacent slides - reduced spread to prevent cutting
      const translateX = adjustedDistance > 0 ? '25%' : '-25%'
      const translateZ = '-80px'
      const rotateY = adjustedDistance > 0 ? '-10deg' : '10deg'
      return {
        transform: `translateX(${translateX}) translateZ(${translateZ}) scale(0.88) rotateY(${rotateY})`,
        zIndex: 20,
        opacity: 1, // Full opacity instead of 0.75
        // filter: 'brightness(0.75)', // Removed brightness filter
      }
    } else if (absDistance === 2) {
      // Second layer behind - moderate spread
      const translateX = adjustedDistance > 0 ? '40%' : '-40%'
      const translateZ = '-160px'
      const rotateY = adjustedDistance > 0 ? '-18deg' : '18deg'
      return {
        transform: `translateX(${translateX}) translateZ(${translateZ}) scale(0.75) rotateY(${rotateY})`,
        zIndex: 10,
        opacity: 1, // Full opacity instead of 0.55
        // filter: 'brightness(0.55)', // Removed brightness filter
      }
    } else {
      // Hidden slides - controlled spread
      const translateX = adjustedDistance > 0 ? '50%' : '-50%'
      return {
        transform: `translateX(${translateX}) translateZ(-200px) scale(0.65)`,
        zIndex: 0,
        opacity: 1, // Full opacity instead of 0.3
        // filter: 'brightness(0.35)', // Removed brightness filter
      }
    }
  }

  return (
    <div className={cn("relative w-full", className)}>
      {/* Main Carousel Container with 3D perspective - UPDATED height and padding */}
      <div 
        className="relative w-full flex items-center justify-center px-8 md:px-16 aspect-video"
        style={{ 
          perspective: '1200px', 
          perspectiveOrigin: 'center center',
          height: '420px', // Increased height
          overflow: 'visible' // Allow cards to extend beyond container
        }}
      >
        {/* Slides Container - UPDATED max-width for better proportions */}
        <div className="relative w-full max-w-3xl h-full">
          {slides.map((slide, index) => {
            const slideStyles = getSlideStyles(index)
            
            return (
              <div
                key={slide.id}
                className="absolute inset-0 w-full h-full transition-all duration-700 ease-out cursor-pointer"
                style={{
                  ...slideStyles,
                  transformStyle: 'preserve-3d',
                  isolation: 'isolate', // Prevent transform from affecting children
                }}
                onClick={() => scrollTo(index)}
              >
                {/* Masking container to ensure proper clipping */}
                <div 
                  className="w-full h-full rounded-3xl"
                  style={{ 
                    mask: 'radial-gradient(ellipse at center, black 99%, transparent 100%)',
                    WebkitMask: 'radial-gradient(ellipse at center, black 99%, transparent 100%)',
                    contain: 'layout style paint',
                  }}
                >
                  {/* Slide Content */}
                  <div className="relative w-full h-full rounded-3xl overflow-hidden bg-gradient-to-br from-slate-900 to-slate-800 shadow-2xl">
                    {/* Background Image - Same technique as before but without overlay */}
                    <div 
                      className="absolute inset-0 bg-cover bg-center"
                      style={{ backgroundImage: `url(${slide.image})` }}
                    >
                      {/* Commented out dark overlay */}
                      {/* <div className="absolute inset-0 bg-black/40" /> */}
                    </div>

                    {/* Content Overlay - COMMENTED OUT */}
                    {/* <div className="relative z-10 flex flex-col justify-center items-center h-full text-white p-6 md:p-8">
                      <h2 className="text-3xl md:text-5xl font-bold mb-2 text-center tracking-wider">
                        {slide.title}
                      </h2>
                      {slide.subtitle && (
                        <>
                          <div className="text-sm md:text-lg text-center mb-2 opacity-90">
                            PRESENTS:
                          </div>
                          <p className="text-lg md:text-2xl lg:text-3xl text-center mb-6 font-bold tracking-wide">
                            {slide.subtitle}
                          </p>
                        </>
                      )}
                      
                      // Play Button for Video Thumbnails
                      {slide.videoThumbnail && (
                        <div className="flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 hover:bg-white/30 transition-all cursor-pointer">
                          <Play className="w-6 h-6 md:w-8 md:h-8 ml-1" fill="currentColor" />
                        </div>
                      )}
                    </div> */}

                    {/* Play Button for Video Thumbnails - Keep only this */}
                    {slide.videoThumbnail && (
                      <div className="absolute inset-0 flex items-center justify-center z-10">
                        <div className="flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-full bg-black/30 backdrop-blur-sm border border-white/30 hover:bg-black/50 transition-all cursor-pointer">
                          <Play className="w-6 h-6 md:w-8 md:h-8 ml-1 text-white" fill="currentColor" />
                        </div>
                      </div>
                    )}

                    {/* Decorative Elements - COMMENTED OUT */}
                    {/* <div className="absolute top-4 left-4 right-4 z-10">
                      <div className="h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent" />
                    </div>
                    <div className="absolute bottom-4 left-4 right-4 z-10">
                      <div className="h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent" />
                    </div> */}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Navigation Arrows */}
      <Button
        variant="outline"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 z-40 bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20"
        onClick={scrollPrev}
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>
      
      <Button
        variant="outline"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 z-40 bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20"
        onClick={scrollNext}
      >
        <ChevronRight className="h-4 w-4" />
      </Button>

      {/* Dot Navigation */}
      <div className="flex justify-center mt-8 gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={cn(
              "w-3 h-3 rounded-full transition-all duration-300",
              selectedIndex === index
                ? "bg-blue-500 scale-125"
                : "bg-gray-400 hover:bg-gray-300"
            )}
            onClick={() => scrollTo(index)}
          />
        ))}
      </div>

      {/* CTA Button */}
      {/* <div className="flex justify-center mt-8">
        <Button 
          size="lg" 
          className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg"
        >
          Schedule a Demo
        </Button>
      </div> */}
    </div>
  )
}

// Example usage component - Updated for image-only display
export function CarouselExample() {
  const slides: CarouselSlide[] = [
    {
      id: '1',
      title: 'BOB DOYLE', // These are kept for data but won't display
      subtitle: 'PRESENTS: MAY MACHINA - MOBILE GAMING TOURNAMENT',
      image: '/api/placeholder/800/450',
      videoThumbnail: true,
    },
    {
      id: '2',
      title: 'GAMING REVOLUTION',
      subtitle: 'NEXT GENERATION MOBILE EXPERIENCE',
      image: '/api/placeholder/800/450',
      videoThumbnail: true,
    },
    {
      id: '3',
      title: 'ESPORTS ARENA',
      subtitle: 'COMPETITIVE GAMING PLATFORM',
      image: '/api/placeholder/800/450',
      videoThumbnail: true,
    },
    {
      id: '4',
      title: 'VIRTUAL TOURNAMENTS',
      subtitle: 'GLOBAL COMPETITIONS AWAIT',
      image: '/api/placeholder/800/450',
      videoThumbnail: true,
    },
    {
      id: '5',
      title: 'MOBILE LEGENDS',
      subtitle: 'BECOME THE CHAMPION',
      image: '/api/placeholder/800/450',
      videoThumbnail: true,
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12">
      <div className="container mx-auto px-4">
        {/* Now displays only images with play buttons - no text overlays */}
        <StackedCarousel 
          slides={slides} 
          autoplay={true}
          autoplayInterval={4000}
          className="max-w-6xl mx-auto"
        />
      </div>
    </div>
  )
}
'use client'

import React, { useCallback, useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
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

  // Calculate slide position and styling for stacked effect
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
        filter: 'brightness(1)',
      }
    } else if (absDistance === 1) {
      // Adjacent slides - first layer behind
      const translateX = adjustedDistance > 0 ? '15%' : '-15%'
      const translateZ = '-50px'
      const rotateY = adjustedDistance > 0 ? '-8deg' : '8deg'
      return {
        transform: `translateX(${translateX}) translateZ(${translateZ}) scale(0.9) rotateY(${rotateY})`,
        zIndex: 20,
        opacity: 0.8,
        filter: 'brightness(0.8)',
      }
    } else if (absDistance === 2) {
      // Second layer behind
      const translateX = adjustedDistance > 0 ? '25%' : '-25%'
      const translateZ = '-100px'
      const rotateY = adjustedDistance > 0 ? '-15deg' : '15deg'
      return {
        transform: `translateX(${translateX}) translateZ(${translateZ}) scale(0.8) rotateY(${rotateY})`,
        zIndex: 10,
        opacity: 0.6,
        filter: 'brightness(0.6)',
      }
    } else {
      // Hidden slides
      return {
        transform: 'translateX(0%) translateZ(-150px) scale(0.7)',
        zIndex: 0,
        opacity: 0,
        filter: 'brightness(0.4)',
      }
    }
  }

  return (
    <div className={cn("relative w-full", className)}>
      {/* Main Carousel Container with 3D perspective */}
      <div 
        className="relative h-96 md:h-[500px] flex items-center justify-center overflow-hidden"
        style={{ perspective: '1000px', perspectiveOrigin: 'center center' }}
      >
        {/* Slides Container - All slides in same position, styled differently */}
        <div className="relative w-full max-w-2xl h-full">
          {slides.map((slide, index) => {
            const slideStyles = getSlideStyles(index)
            
            return (
              <div
                key={slide.id}
                className="absolute inset-0 w-full h-full transition-all duration-700 ease-out cursor-pointer"
                style={{
                  ...slideStyles,
                  transformStyle: 'preserve-3d',
                }}
                onClick={() => scrollTo(index)}
              >
                {/* Slide Content */}
                <div className="relative w-full h-full aspect-video rounded-3xl overflow-hidden bg-gradient-to-br from-slate-900 to-slate-800 shadow-2xl">
                  {/* Background Image */}
                  <div 
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${slide.image})` }}
                  >
                    <div className="absolute inset-0 bg-black/40" />
                  </div>

                  {/* Content Overlay */}
                  <div className="relative z-10 flex flex-col justify-center items-center h-full text-white p-6 md:p-8">
                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-2 text-center tracking-wider">
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
                    
                    {/* Play Button for Video Thumbnails */}
                    {slide.videoThumbnail && (
                      <div className="flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 hover:bg-white/30 transition-all cursor-pointer">
                        <Play className="w-6 h-6 md:w-8 md:h-8 ml-1" fill="currentColor" />
                      </div>
                    )}
                  </div>

                  {/* Decorative Elements */}
                  <div className="absolute top-4 left-4 right-4">
                    <div className="h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent" />
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent" />
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

// Alternative: Pure CSS Stacked Carousel (without Embla)
export function PureStackedCarousel({ 
  slides, 
  className,
  autoplay = false,
  autoplayInterval = 5000 
}: StackedCarouselProps) {
  const [selectedIndex, setSelectedIndex] = useState(0)

  const scrollPrev = () => {
    setSelectedIndex(prev => prev === 0 ? slides.length - 1 : prev - 1)
  }

  const scrollNext = () => {
    setSelectedIndex(prev => (prev + 1) % slides.length)
  }

  // Autoplay
  useEffect(() => {
    if (!autoplay) return
    const interval = setInterval(scrollNext, autoplayInterval)
    return () => clearInterval(interval)
  }, [autoplay, autoplayInterval])

  return (
    <div className={cn("relative w-full", className)}>
      {/* Stacked Cards Container */}
      <div 
        className="relative h-96 md:h-[500px] flex items-center justify-center"
        style={{ perspective: '1200px' }}
      >
        <div className="relative w-full max-w-2xl h-full">
          {slides.map((slide, index) => {
            const distance = (index - selectedIndex + slides.length) % slides.length
            const isActive = distance === 0
            const isNext = distance === 1
            const isPrev = distance === slides.length - 1
            
            let transform = 'translateX(0%) scale(0.8) rotateY(0deg)'
            let zIndex = 1
            let opacity = 0.3
            
            if (isActive) {
              transform = 'translateX(0%) scale(1) rotateY(0deg)'
              zIndex = 30
              opacity = 1
            } else if (isNext) {
              transform = 'translateX(20%) scale(0.85) rotateY(-15deg)'
              zIndex = 20
              opacity = 0.7
            } else if (isPrev) {
              transform = 'translateX(-20%) scale(0.85) rotateY(15deg)'
              zIndex = 20
              opacity = 0.7
            }
            
            return (
              <div
                key={slide.id}
                className="absolute inset-0 transition-all duration-700 ease-out cursor-pointer"
                style={{
                  transform,
                  zIndex,
                  opacity,
                  transformStyle: 'preserve-3d',
                }}
                onClick={() => setSelectedIndex(index)}
              >
                <div className="relative w-full h-full rounded-3xl overflow-hidden bg-gradient-to-br from-slate-900 to-slate-800 shadow-2xl">
                  <div 
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${slide.image})` }}
                  >
                    <div className="absolute inset-0 bg-black/40" />
                  </div>

                  <div className="relative z-10 flex flex-col justify-center items-center h-full text-white p-6 md:p-8">
                    <h2 className="text-3xl md:text-5xl font-bold mb-2 text-center tracking-wider">
                      {slide.title}
                    </h2>
                    {slide.subtitle && (
                      <p className="text-lg md:text-xl text-center mb-6 text-blue-200">
                        {slide.subtitle}
                      </p>
                    )}
                    
                    {slide.videoThumbnail && (
                      <div className="flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 hover:bg-white/30 transition-all">
                        <Play className="w-6 h-6 md:w-8 md:h-8 ml-1" fill="currentColor" />
                      </div>
                    )}
                  </div>

                  <div className="absolute top-4 left-4 right-4">
                    <div className="h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent" />
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent" />
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Navigation */}
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

      {/* Dots */}
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
            onClick={() => setSelectedIndex(index)}
          />
        ))}
      </div>

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

// Example usage component
export function CarouselExample() {
  const slides: CarouselSlide[] = [
    {
      id: '1',
      title: 'BOB DOYLE',
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
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12">
      <div className="container mx-auto px-4">
        {/* Use PureStackedCarousel for true stacking */}
        <PureStackedCarousel 
          slides={slides} 
          autoplay={true}
          autoplayInterval={4000}
          className="max-w-6xl mx-auto"
        />
      </div>
    </div>
  )
}
"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Play } from "lucide-react"
import Image from "next/image"

interface CarouselSlide {
  id: number
  type: "image" | "video"
  src: string
  alt: string
  videoThumbnail?: string
}

const slides: CarouselSlide[] = [
  {
    id: 1,
    type: "video",
    src: "/carousel/slide-1.png",
    alt: "Bob Boyte Gaming Tournament",
    videoThumbnail: "/carousel/slide-1.png",
  },
  {
    id: 2,
    type: "image",
    src: "/carousel/slide-2.png",
    alt: "Analytics Dashboard",
  },
  {
    id: 3,
    type: "image",
    src: "/carousel/slide-3.png",
    alt: "Mobile App Features",
  },
  {
    id: 4,
    type: "image",
    src: "/carousel/slide-4.png",
    alt: "Customer Portal",
  },
  {
    id: 5,
    type: "image",
    src: "/carousel/slide-5.png",
    alt: "Dealer Dashboard",
  },
]

export function EngagementCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
    setIsAutoPlaying(false)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
    setIsAutoPlaying(false)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
    setIsAutoPlaying(false)
  }

  return (
    <div className="relative w-full max-w-5xl mx-auto">
      {/* Carousel Container */}
      <div className="relative h-[500px] overflow-hidden rounded-2xl bg-white shadow-lg">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -300 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <div className="relative w-full h-full">
              <Image
                src={slides[currentSlide].src || "/placeholder.svg"}
                alt={slides[currentSlide].alt}
                fill
                className="object-cover"
                priority={currentSlide === 0}
              />

              {/* Video Play Button Overlay */}
              {slides[currentSlide].type === "video" && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.button
                    className="w-20 h-20 bg-white bg-opacity-90 rounded-full flex items-center justify-center shadow-lg hover:bg-opacity-100 transition-all"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Play className="w-8 h-8 text-gray-800 ml-1" fill="currentColor" />
                  </motion.button>
                </div>
              )}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white bg-opacity-80 rounded-full flex items-center justify-center shadow-md hover:bg-opacity-100 transition-all"
        >
          <ChevronLeft className="w-6 h-6 text-gray-600" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white bg-opacity-80 rounded-full flex items-center justify-center shadow-md hover:bg-opacity-100 transition-all"
        >
          <ChevronRight className="w-6 h-6 text-gray-600" />
        </button>
      </div>

      {/* Dots Navigation */}
      <div className="flex justify-center mt-6 space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? "bg-cyan-500 scale-125" : "bg-gray-300 hover:bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  )
}

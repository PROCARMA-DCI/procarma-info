"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"

interface Logo {
  src: string
  alt: string
}

export function LogoCarousel({ logos }: { logos: Logo[] }) {
  const [width, setWidth] = useState(0)
  const carouselRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Calculate the width for animation
    const calculateWidth = () => {
      if (carouselRef.current) {
        // Get the total width of all logos plus gaps
        const scrollWidth = carouselRef.current.scrollWidth
        const offsetWidth = carouselRef.current.offsetWidth
        setWidth(scrollWidth - offsetWidth)
      }
    }

    calculateWidth()

    // Recalculate on window resize
    window.addEventListener("resize", calculateWidth)

    return () => {
      window.removeEventListener("resize", calculateWidth)
    }
  }, [logos])

  // Duplicate logos to create infinite effect
  const duplicatedLogos = [...logos, ...logos, ...logos]

  return (
    <div className="overflow-hidden">
      <motion.div ref={carouselRef} className="flex cursor-grab" whileTap={{ cursor: "grabbing" }}>
        <motion.div
          className="flex items-center gap-16"
          animate={{
            x: [-width / 2, -width],
          }}
          transition={{
            x: {
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "loop",
              duration: 20,
              ease: "linear",
            },
          }}
        >
          {duplicatedLogos.map((logo, index) => (
            <div
              key={index}
              className="min-w-[180px] flex items-center justify-center opacity-80 hover:opacity-100 transition-opacity"
            >
              <Image
                src={logo.src || "/placeholder.svg"}
                alt={logo.alt}
                width={180}
                height={80}
                className="object-contain h-16 grayscale dark:invert"
              />
            </div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  )
}

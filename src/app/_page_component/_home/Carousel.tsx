"use client";
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { EnhancedStackedCarousel } from "@/components/carousel/EnhancedStackedCarousel";

const carouselSlides = [
  {
    id: "1",
    title: "BOB DOYLE",
    subtitle: "PRESENTS: MAY MACHINA - MOBILE GAMING TOURNAMENT",
    image: "/carousel/banner-4.png", // Replace with your image
    videoThumbnail: false,
  },
  {
    id: "2",
    title: "GAMING REVOLUTION",
    subtitle: "NEXT GENERATION MOBILE EXPERIENCE",
    image: "/carousel/banner-1.png",
  },
  {
    id: "3",
    title: "ESPORTS ARENA",
    subtitle: "COMPETITIVE GAMING PLATFORM",
    image: "/carousel/banner-2.png",
  },
  {
    id: "4",
    title: "ESPORTS ARENA",
    subtitle: "COMPETITIVE GAMING PLATFORM",
    image: "/carousel/banner-3.png",
  },

  {
    id: "5",
    title: "BOB DOYLE",
    subtitle: "PRESENTS: MAY MACHINA - MOBILE GAMING TOURNAMENT",
    videoUrl: "https://player.vimeo.com/video/347119375",
    videoType: "vimeo" as const,
    // image: "/placeholder.svg?height=450&width=800", // Thumbnail for video
  },
  // Add more slides as needed
];
const Carousel = ({ sectionVariants, itemVariants }: any) => {
  return (
    <div className="overflow-hidden">
      <motion.section
        className="py-20"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Section Header */}
        <motion.div className="text-center mb-8" variants={itemVariants}>
          <h2 className="md:text-5xl px-2 text-3xl font-light text-muted-foreground tracking-wide">
            Engagement Evolved
          </h2>
          <p className="mt-4 text-lg mx-4 text-muted-foreground max-w-4xl ">
            From gaming tournaments referral programs, we help dealers reach
            their customers in new and innovative ways. This is not your average
            CRM. We will tailor a retention program to meet your
            dealership&apos;s needs and customer&apos;s wants.
          </p>
        </motion.div>

        {/* Carousel */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {/* <EngagementCarousel />
           */}

          <EnhancedStackedCarousel
            slides={carouselSlides}
            autoplay={true}
            autoplayInterval={3000}
            className="max-w-6xl mx-auto"
          />
        </motion.div>

        {/* CTA Button */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <Button className="px-8 py-3 ">Schedule a Demo</Button>
        </motion.div>
      </motion.section>
    </div>
  );
};

export default Carousel;

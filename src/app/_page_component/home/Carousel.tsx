"use client";
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { EnhancedStackedCarousel } from "@/components/carousel/EnhancedStackedCarousel";
import { Heading, Paragraph, Title } from "@/components/typography/Typography";
import { BookingModal } from "@/common/BookingModal";

const carouselSlides = [
  {
    id: "1",
    title: "BOB DOYLE",
    subtitle: "PRESENTS: MAY MACHINA - MOBILE GAMING TOURNAMENT",
    image: "/carousel/bb-gaming.png",
    videoUrl: "https://vimeo.com/822752527",
    videoThumbnail: false,
  },
  {
    id: "2",
    title: "GAMING REVOLUTION",
    subtitle: "NEXT GENERATION MOBILE EXPERIENCE",
    videoUrl: "https://vimeo.com/1092135627/44fd4b829b",
    image: "/carousel/everest.png",
  },
  {
    id: "3",
    title: "ESPORTS ARENA",
    subtitle: "COMPETITIVE GAMING PLATFORM",
    videoUrl: "https://vimeo.com/988654855?share=copy",
    image: "/carousel/greenbrier.png",
  },
  {
    id: "4",
    title: "CUSTOMER LOYALTY",
    subtitle: "INNOVATIVE RETENTION PROGRAMS",
    videoUrl: "https://vimeo.com/938373099",
    image: "/carousel/loyalty-cutter.png",
  },
  {
    id: "5",
    title: "DEALERSHIP PORTAL",
    subtitle: "COMPREHENSIVE CRM SOLUTION",
    image: "/carousel/pcpportal.png",
    videoUrl: "https://vimeo.com/1067148917",
  },
  {
    id: "6",
    title: "ENGAGEMENT PLATFORM",
    subtitle: "CONNECTING DEALERS WITH CUSTOMERS",
    image:
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=1200&h=675&fit=crop&crop=center",
  },
  // Add more slides as needed
];
const Carousel = ({ sectionVariants, itemVariants }: any) => {
  const validSlides = carouselSlides.filter(
    (slide: any) =>
      slide &&
      slide.id &&
      slide.title &&
      slide.subtitle &&
      (slide.image || slide.videoUrl)
  );

  return (
    <div className="overflow-hidden">
      <motion.section
        className=""
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Section Header */}
        <motion.div className="text-center mb-8" variants={itemVariants}>
          <Title className="">Engagement Evolved</Title>
          <Paragraph className="text-center  max-w-2xl mx-auto mt-4 lg:text-lg px-4  lg:px-0  ">
            From gaming tournaments referral programs, we help dealers reach
            their customers in new and innovative ways. This is not your average
            CRM. We will tailor a retention program to meet your
            dealership&apos;s needs and customer&apos;s wants.
          </Paragraph>
        </motion.div>

        {/* Carousel */}
        <motion.div
          className="lg:mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {/* <EngagementCarousel />
           */}
          {/* 16:9 images only */}
          <EnhancedStackedCarousel
            slides={validSlides}
            autoplay={true}
            autoplayInterval={3000}
            className="max-w-[1200px] mx-auto w-full"
          />
        </motion.div>

        {/* CTA Button */}
        <motion.div
          className="text-center lg:mt-12 mt-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <BookingModal className="w-36 md:w-52" />
        </motion.div>
      </motion.section>
    </div>
  );
};

export default Carousel;

"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ThemeToggle } from "@/components/theme-toggle";
import Image from "next/image";
import { motion } from "framer-motion";
import { LogoCarousel } from "@/components/logo-carousel";
import { MileageSlider } from "@/components/mileage-slider";
import { EngagementCarousel } from "@/components/engagement-carousel";
import { Footer } from "@/components/footer";
import { StackedCarousel } from "@/components/peek_carousel";
import LottiePlayer from "@/components/LottiePlayer";
//component
import Header from "./Header";
import FeatureCard from "./FeatureCard";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const liveActivityVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      delay: 0.3,
    },
  },
};

const activityItemVariants = {
  hidden: { opacity: 0, x: 20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.4,
    },
  },
};

const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: 0.2,
    },
  },
};
const carouselSlides = [
  {
    id: "1",
    title: "BOB DOYLE",
    subtitle: "PRESENTS: MAY MACHINA - MOBILE GAMING TOURNAMENT",
    image: "/banner-4.png", // Replace with your image
    videoThumbnail: false,
  },
  {
    id: "2",
    title: "GAMING REVOLUTION",
    subtitle: "NEXT GENERATION MOBILE EXPERIENCE",
    image: "/banner-1.png",
    videoThumbnail: false,
  },
  {
    id: "3",
    title: "ESPORTS ARENA",
    subtitle: "COMPETITIVE GAMING PLATFORM",
    image: "/banner-2.png",
    videoThumbnail: false,
  },
  {
    id: "4",
    title: "ESPORTS ARENA",
    subtitle: "COMPETITIVE GAMING PLATFORM",
    image: "/banner-3.png",
    videoThumbnail: false,
  },
  {
    id: "5",
    title: "ESPORTS ARENA",
    subtitle: "COMPETITIVE GAMING PLATFORM",
    image: "/arena.jpg",
    videoThumbnail: false,
  },
  // Add more slides as needed
];
const partnerLogos = [
  {
    src: "/logos/slider-safeguard.png",
    alt: "Safe-Guard Products International",
  },
  { src: "/logos/slider-wise.png", alt: "WiseF&I" },
  { src: "/logos/slider-swds.png", alt: "SWDS" },
  { src: "/logos/slider-roadvant.png", alt: "RoadVantage F&I Programs" },
  { src: "/logos/slider-amynta.png", alt: "Amynta Group" },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background transition-colors">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main>
        {/* Feature Cards Row */}
        <FeatureCard
          containerVariants={containerVariants}
          itemVariants={itemVariants}
          liveActivityVariants={liveActivityVariants}
          activityItemVariants={activityItemVariants}
        />

        {/* Product / Training Ecosystem Section */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.section
            className=""
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {/* Section Header */}
            <motion.div className="text-center" variants={itemVariants}>
              <h2 className="text-4xl md:text-5xl font-light text-muted-foreground tracking-wide">
                PRODUCT / TRAINING ECOSYSTEM
              </h2>
            </motion.div>

            {/* Content Grid */}
            <div className="flex flex-col lg:flex-row gap-16 items-center">
              {/* Left Content */}
              <motion.div
                className="space-y-12 lg:flex-[35] "
                variants={containerVariants}
              >
                {/* Products Section */}
                <motion.div variants={itemVariants}>
                  <h3 className="text-4xl font-bold text-foreground mb-6">
                    Products
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    We partner with the best F&I product providers in the nation
                    that are integrated with our customer life cycle and dealer
                    ecosystem.
                  </p>
                </motion.div>

                {/* Training Section */}
                <motion.div variants={itemVariants}>
                  <h3 className="text-4xl font-bold text-foreground mb-6">
                    Training
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Using the best talent and tools to keep your team shipshape
                    and in Bristol fashion!
                  </p>
                </motion.div>
              </motion.div>

              {/* Right Illustration */}
              <motion.div
                className="flex justify-start items-start lg:flex-[65]"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <div className="relative w-full  ">
                  <LottiePlayer
                    sourceFile={"/second-new.json"}
                    style={{ height: "650px", width: "650px" }}
                  />
                </div>
              </motion.div>
            </div>
          </motion.section>
        </div>

        {/* Partners Logo Carousel Section - Full Width */}
        <motion.section
          className="py-16 border-t border-border"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Section Header */}
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div className="text-center mb-16" variants={itemVariants}>
              <h2 className="text-4xl font-bold text-foreground tracking-wide">
                PARTNERED WITH THE BEST
              </h2>
            </motion.div>
          </div>

          {/* Logo Carousel - Full Width */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="py-8"
          >
            <LogoCarousel logos={partnerLogos} />
          </motion.div>
        </motion.section>

        {/* Life Cycle Management Section */}
        <div className="mx-auto flex w-full justify-center pt-10">
          <motion.section
            className="w-full flex flex-col"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {/* Section Header */}
            <motion.div className="text-center " variants={itemVariants}>
              <h2 className="text-5xl md:text-6xl font-light text-muted-foreground tracking-wide">
                LIFE CYCLE MANAGEMENT
              </h2>
            </motion.div>

            {/* Content Grid */}
            <div className="flex w-full mx-auto justify-center items-center">
              {/* Left Content */}
              {/* <motion.div className="space-y-8" variants={containerVariants}>
                <motion.div variants={itemVariants}>
                  <p className="text-sm text-muted-foreground mb-2">
                    Theft Prevention
                  </p>
                  <h3 className="text-3xl font-bold text-foreground mb-4">
                    Engagement
                  </h3>
                  <p className="text-sm text-muted-foreground">Referrals</p>
                </motion.div>
              </motion.div> */}

              {/* Center Illustration */}
              <motion.div
                className="flex justify-center items-center "
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <div className="relative w-full">
                  <LottiePlayer
                    sourceFile={"/third-new.json"}
                    style={{ height: "700px", width: "1200px" }}
                  />
                </div>
              </motion.div>
            </div>

            {/* Mileage Slider */}
            {/* <motion.div
                className="mt-16"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <MileageSlider />
              </motion.div> */}
          </motion.section>
        </div>

        {/* Customer Engagement Section */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.section
            className="py-20"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {/* Section Header */}
            <motion.div className="text-center mb-20" variants={itemVariants}>
              <h2 className="text-4xl md:text-5xl font-light text-muted-foreground tracking-wide">
                CUSTOMER ENGAGEMENT
              </h2>
            </motion.div>

            {/* Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-4 items-center">
              {/* Left Illustration */}
              <motion.div
                className="flex justify-center items-center lg:col-span-3"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <div className="relative w-full max-w-3xl">
                  <Image
                    src="/customer-engagement-illustration.png"
                    alt="Customer Engagement Illustration"
                    width={900}
                    height={600}
                    className="w-full h-auto object-contain"
                  />
                </div>
              </motion.div>

              {/* Right Content */}
              <motion.div
                className="space-y-12 lg:col-span-1"
                variants={containerVariants}
              >
                {/* Products Section */}
                <motion.div variants={itemVariants}>
                  <h3 className="text-4xl font-bold text-foreground mb-6">
                    Products
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    We partner with the best F&I product providers in the nation
                    that are integrated with our customer life cycle and dealer
                    ecosystem.
                  </p>
                </motion.div>

                {/* Training Section */}
                <motion.div variants={itemVariants}>
                  <h3 className="text-4xl font-bold text-foreground mb-6">
                    Training
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Using the best talent and tools to keep your team shipshape
                    and in Bristol fashion!
                  </p>
                </motion.div>
              </motion.div>
            </div>
          </motion.section>
        </div>

        {/* ONE PLATFORM FOR EVERYTHING */}
        <div className=" mx-auto px-4 sm:px-6 lg:px-8">
          <motion.section
            className="py-20"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {/* Section Header */}
            <motion.div className="text-center mb-20" variants={itemVariants}>
              <h2 className="text-4xl md:text-5xl font-light text-muted-foreground tracking-wide">
                ONE PLATFORM FOR EVERYTHING
              </h2>
            </motion.div>

            {/* Content Grid */}
            <div className="grid grid-cols-1 items-center ">
              {/* Left Content */}
              {/* <motion.div className="space-y-8" variants={containerVariants}>
                <motion.div variants={itemVariants}>
                  <p className="text-sm text-muted-foreground mb-2">
                    Theft Prevention
                  </p>
                  <h3 className="text-3xl font-bold text-foreground mb-4">
                    Engagement
                  </h3>
                  <p className="text-sm text-muted-foreground">Referrals</p>
                </motion.div>
              </motion.div> */}

              {/* Center Illustration */}
              <motion.div
                className="flex justify-center items-center"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <div className="relative w-full max-w-6xl">
                  <Image
                    src="/platform.png"
                    alt="One Platform for Everything Illustration"
                    width={1200}
                    height={1000}
                    className="w-full h-auto object-contain"
                  />
                </div>
              </motion.div>
            </div>

            {/* Mileage Slider */}
            {/* <motion.div
                className="mt-16"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <MileageSlider />
              </motion.div> */}
          </motion.section>
        </div>

        {/* Engagement Evolved Section */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.section
            className="py-20"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {/* Section Header */}
            <motion.div className="text-center mb-8" variants={itemVariants}>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Engagement Evolved
              </h2>
              <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                From gaming tournaments referral programs, we help dealers reach
                their customers in new and innovative ways. This is not your
                average CRM. We will tailor a retention program to meet your
                dealership's needs and customer's wants.
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
              {/* Carousel */}
              <StackedCarousel
                slides={carouselSlides}
                autoplay={true}
                autoplayInterval={5000}
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
              <Button className="bg-siteBlueColor hover:bg-siteBlueColor/80 text-white px-8 py-3 text-lg rounded-md">
                Schedule a Demo
              </Button>
            </motion.div>
          </motion.section>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

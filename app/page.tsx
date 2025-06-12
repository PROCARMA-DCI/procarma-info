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
import LottiePlayer from '@/components/LottiePlayer';

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

const liveActivityData = [
  {
    vehicle: "FORD F150 2023",
    mileage: "56,232",
    warranty: "OEM WARRANTY",
    services: ["MAINTENANCE", "GPS", "VSC", "LOYALTY", "GAP"],
    scheduledMaint: "60,000 mi",
    tradeOps: "6 MONTHS",
    warrantyColor: "text-orange-500",
  },
  {
    vehicle: "TOYOTA TUNDRA 2021",
    mileage: "79,365",
    warranty: "OEM WARRANTY",
    services: ["MAINTENANCE", "VSC", "LOYALTY"],
    scheduledMaint: "100,000 mi",
    tradeOps: "3 MONTHS",
    warrantyColor: "text-orange-500",
  },
  {
    vehicle: "CHEVY SILVERADO 2023",
    mileage: "8,156",
    warranty: "OEM WARRANTY",
    services: ["MAINTENANCE", "GPS", "VSC", "LOYALTY"],
    scheduledMaint: "60,000 K",
    tradeOps: "6 MONTHS",
    warrantyColor: "text-cyan-500",
  },
  {
    vehicle: "CHEVY TAHOE 2024",
    mileage: "2,330",
    warranty: "OEM WARRANTY",
    services: ["MAINTENANCE", "VSC", "LOYALTY"],
    scheduledMaint: "10,000 K",
    tradeOps: "6 MONTHS",
    warrantyColor: "text-cyan-500",
  },
  {
    vehicle: "GMC YUKON 2017",
    mileage: "86,156",
    warranty: "OEM WARRANTY",
    services: ["MAINTENANCE", "VSC", "LOYALTY"],
    scheduledMaint: "100,000 K",
    tradeOps: "6 MONTHS",
    warrantyColor: "text-orange-500",
  },
  {
    vehicle: "CHEVY SILVERADO 2023",
    mileage: "1,985",
    warranty: "OEM WARRANTY",
    services: ["MAINTENANCE", "GPS", "VSC", "LOYALTY"],
    scheduledMaint: "60,000 K",
    tradeOps: "6 MONTHS",
    warrantyColor: "text-cyan-500",
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background transition-colors">
      {/* Header */}
      <motion.header
        className="bg-background border-b border-border"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              {/* <h1 className="text-2xl font-bold text-foreground">
                PRO<span className="text-cyan-500">CARMA</span>
              </h1> */}
              <Image
                src="/procarma-logo.png"
                alt="PROCARMA Logo"
                width={200}
                height={50}
              />
            </div>
            <div className="flex items-center gap-4">
              <ThemeToggle />
              <Button className="bg-siteBlueColor hover:bg-siteBlueColor/80 text-white px-6 py-2 rounded-md">
                Schedule a Demo
              </Button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Main Content */}
      <main>
        {/* Feature Cards Row */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* AI.LCM Card */}
            <motion.div variants={itemVariants} className="space-y-4">
              <Card className="bg-card border-border p-6 shadow-sm">
                <CardContent className="p-0">
                  <h3 className="text-xl font-bold text-card-foreground">
                    AI.LCM
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    AI Agent Life Cycle Management
                  </p>
                </CardContent>
              </Card>
              <p className="text-sm text-muted-foreground leading-relaxed px-1">
                AI Agents analyze each customer's life cycle and enhances their
                life time transactional and experiential value.
              </p>
            </motion.div>

            {/* CONNECTED Card */}
            <motion.div variants={itemVariants} className="space-y-4">
              <Card className="bg-card border-border p-6 shadow-sm">
                <CardContent className="p-0">
                  <h3 className="text-xl font-bold text-card-foreground">
                    CONNECTED
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Dealer Branded App Ecosystem
                  </p>
                </CardContent>
              </Card>
              <p className="text-sm text-muted-foreground leading-relaxed px-1">
                Dealer / Cutomer centric approach to product visibility and
                engagement touch points.
              </p>
            </motion.div>

            {/* AGNOSTIC Card */}
            <motion.div variants={itemVariants} className="space-y-4">
              <Card className="bg-card border-border p-6 shadow-sm">
                <CardContent className="p-0">
                  <h3 className="text-xl font-bold text-card-foreground">
                    AGNOSTIC
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Open platform architecture - no gateway fees
                  </p>
                </CardContent>
              </Card>
              <p className="text-sm text-muted-foreground leading-relaxed px-1">
                Partnered with top tier administrators and agencies nationwide
                to display your information across our platform.
              </p>
            </motion.div>
          </motion.div>

          {/* Hero Section with Image and Live Activity Side by Side */}
          <div className="flex gap-8 mb-16">
            {/* Hero Illustration - 65% */}
            <motion.div
              className="flex-[65] flex justify-center items-center min-h-[500px]"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="relative w-full max-w-3xl">
                <Image
                  src="/hero-illustration.png"
                  alt="Customer Retention Platform Illustration"
                  width={900}
                  height={500}
                  className="w-full h-auto object-contain"
                  priority
                />
              </div>
            </motion.div>

            {/* Live Activity - 35% */}
            <motion.div
              className="flex-[35] min-h-[500px]"
              variants={liveActivityVariants}
              initial="hidden"
              animate="visible"
            >
              <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-lg font-bold text-foreground">
                    LIVE ACTIVITY
                  </h3>
                  <span className="text-xs text-muted-foreground">72 hrs</span>
                </div>

                <motion.div
                  className="space-y-4"
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                >
                  {liveActivityData.map((item, index) => (
                    <motion.div
                      key={index}
                      className="group cursor-pointer border-b border-border pb-4"
                      variants={activityItemVariants}
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.2, ease: "easeInOut" }}
                    >
                      <div className="p-3 rounded-lg hover:bg-muted/30 transition-all duration-200">
                        {/* 3-Column Layout */}
                        <div className="grid grid-cols-3 gap-4 text-xs">
                          {/* Column 1: Vehicle Info */}
                          <div>
                            <h4 className="text-sm font-bold text-foreground group-hover:text-cyan-600 transition-colors mb-2">
                              {item.vehicle}
                            </h4>
                            <div className="mb-2">
                              <span className="text-2xl font-bold text-foreground group-hover:text-cyan-600 transition-colors">
                                {item.mileage}
                              </span>
                              <span className="text-xs text-muted-foreground ml-1">
                                mi
                              </span>
                            </div>
                            <div>
                              <span
                                className={`text-xs font-semibold ${item.warrantyColor}`}
                              >
                                {item.warranty}
                              </span>
                            </div>
                          </div>

                          {/* Column 2: Services */}
                          <div>
                            <div className="space-y-1">
                              {item.services.map((service, serviceIndex) => (
                                <div
                                  key={serviceIndex}
                                  className="text-xs font-semibold text-foreground"
                                >
                                  {service}
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Column 3: Maintenance & Trade Ops */}
                          <div>
                            <div className="mb-3">
                              <div className="text-xs font-semibold text-foreground mb-1">
                                SCHEDULED MAINT
                              </div>
                              <div className="text-xs text-muted-foreground">
                                {item.scheduledMaint}
                              </div>
                            </div>
                            <div>
                              <div className="text-xs font-semibold text-foreground mb-1">
                                TRADE OPS
                              </div>
                              <div className="text-xs text-muted-foreground">
                                {item.tradeOps}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Product / Training Ecosystem Section */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.section
            className="py-16"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {/* Section Header */}
            <motion.div className="text-center mb-16" variants={itemVariants}>
              <h2 className="text-4xl md:text-5xl font-light text-muted-foreground tracking-wide">
                PRODUCT / TRAINING ECOSYSTEM
              </h2>
            </motion.div>

            {/* Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Left Content */}
              <motion.div className="space-y-12" variants={containerVariants}>
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
                className="flex justify-start items-start"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <div className="relative w-full max-w-2xl">
                  <LottiePlayer
                    sourceFile={"/third-lottie.json"}
                    boxSize={{ height: "550px", width: "650px" }}
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
                    sourceFile={"/second-lottie-2.json"}
                    boxSize={{ height: "1000px", width: "1600px" }}
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
              <motion.div className="space-y-12 lg:col-span-1" variants={containerVariants}>
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

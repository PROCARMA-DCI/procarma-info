import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import LottiePlayer from "@/components/LottiePlayer";
const FeatureCard = ({
  containerVariants,
  itemVariants,
  liveActivityVariants,
  activityItemVariants,
}: any) => {
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

  interface CardProps {
    title: string;
    subTitle: string;
    description: string;
    file: string;
  }
  const CARD = ({ title, subTitle, description, file }: CardProps) => {
    return (
      <motion.div variants={itemVariants} className="space-y-2">
        <Card className="bg-card border-border p-2 shadow-sm h-[80px]">
          <CardContent className="p-0 flex justify-between items-center h-full">
            <div className="flex flex-col justify-center flex-1">
              <h3 className="text-xl font-bold text-card-foreground">
                {title}
              </h3>
              <p className="text-sm text-muted-foreground">{subTitle}</p>
            </div>
            <div className="flex items-center justify-center w-[80px] h-[80px] flex-shrink-0">
              <LottiePlayer sourceFile={file} className="w-full h-full" />
            </div>
          </CardContent>
        </Card>
        <p className="text-xs text-muted-foreground leading-relaxed px-1">
          {description}
        </p>
      </motion.div>
    );
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* AI.LCM Card */}

        <CARD
          title="AI.LCM"
          subTitle="AI Agent Life Cycle Management"
          description="AI Agents analyze each customer's life cycle and enhances their life time transactional and experiential value."
          file="/AI.json"
        />
        {/* CONNECTED Card */}
        <CARD
          title="CONNECTED"
          subTitle="Dealer Branded App Ecosystem"
          description=" Dealer / Cutomer centric approach to product visibility and
            engagement touch points."
          file="/connected.json"
        />

        {/* AGNOSTIC Card */}
        <CARD
          title="AGNOSTIC"
          subTitle="Open platform architecture - no gateway fees"
          description="Partnered with top tier administrators and agencies nationwide to
            display your information across our platform."
          file="/connected.json"
        />
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
            <LottiePlayer
              sourceFile={"/hero.json"}
              style={{ height: "750px", width: "750px" }}
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
  );
};

export default FeatureCard;

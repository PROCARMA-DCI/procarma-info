import { Heading } from "@/components/typography/Typography";
import React from "react";
import { motion } from "framer-motion";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
const Partnered = ({ containerVariants }: any) => {
  const plugin = React.useRef(
    Autoplay({ delay: 1000, stopOnInteraction: true })
  );

  return (
    <section className="w-full">
      <div className="text-center mb-16">
        <Heading className="md:text-5xl px-2 text-3xl font-bold  tracking-wide">
          PARTNERED WITH THE BEST
        </Heading>
      </div>
      <div className="w-full">
        <motion.div
          className="w-full"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <Carousel
            opts={{
              align: "start",
            }}
            className="w-full"
            plugins={[plugin.current]}
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
            onTouchStart={plugin.current.stop} // 👈 Stops on mobile touch
            onTouchEnd={plugin.current.reset}
          >
            <CarouselContent className="">
              {Array.from({ length: 5 }).map((_, index) => (
                <CarouselItem key={index} className="basis-1/5 ml-20">
                  <Image
                    src={`/partners/${index + 1}.png`}
                    alt={`partners ${index + 1}`}
                    width={2000}
                    height={2000}
                    className="w-full rounded-lg grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </motion.div>
      </div>
    </section>
  );
};

export default Partnered;

import { Heading, Title } from "@/components/typography/Typography";
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
    Autoplay({ delay: 2000, stopOnInteraction: false })
  );

  return (
    <section className="w-full ">
      <div className="text-center mb-16">
        <Title className=" lg:font-bold   tracking-wide text-[#294559]">
          PARTNERED WITH THE BEST
        </Title>
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
            // onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
            // onTouchStart={plugin.current.stop} // 👈 Stops on mobile touch
            onTouchEnd={plugin.current.reset}
          >
            <CarouselContent className="">
              {Array.from({ length: 5 }).map((_, index) => (
                <CarouselItem
                  key={index}
                  className="basis-1/5 ml-20 select-none"
                >
                  <Image
                    src={`/partners/${index + 1}.png`}
                    alt={`partners ${index + 1}`}
                    width={2000}
                    height={2000}
                    className="w-full rounded-lg grayscale opacity-70 hover:grayscale-0 transition-all duration-300 scale-75"
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

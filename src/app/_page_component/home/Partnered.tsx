import { Title } from "@/components/typography/Typography";
import { motion } from "framer-motion";

import Image from "next/image";
import Marquee from "react-fast-marquee";
const Partnered = ({ containerVariants }: any) => {
  return (
    <section className="w-full  ">
      <div className="text-center lg:mb-8 mb-2 ">
        <Title className=" lg:font-bold lg:!text-2xl md:!text-2xl  lg:tracking-[0.3em] tracking-[0.2em] lg:text-[#294559] text-[#607A94]">
          PARTNERED WITH THE BEST
        </Title>
      </div>

      <div className="w-full">
        <motion.div
          className="w-full "
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="overflow-hidden">
            <div className="flex  whitespace-nowrap">
              <Marquee
                speed={40} // Adjust speed (default: 50)
                gradient={false} // Disable gradient overlay
                pauseOnHover={true} // Pause when mouse hovers
                pauseOnClick={true} // Pause on click (optional)
              >
                {Array.from({ length: 14 }).map((_, index) => (
                  <div
                    key={index}
                    className="lg:basis-1/5 w-full mx-4 select-none   "
                  >
                    <Image
                      src={`/partners/PARTNERED-WITH-${index + 1}.png`}
                      alt={`partner ${index + 1}`}
                      width={1000}
                      height={1000}
                      className="w-28 lg:w-64 rounded-lg grayscale opacity-70 hover:grayscale-0 transition-all duration-300"
                    />
                  </div>
                ))}
              </Marquee>
            </div>

            {/* <div className="flex animate-scroll-medium whitespace-nowrap">
              {[...Array(2)].flatMap(() =>
                Array.from({ length: 14 }).map((_, index) => (
                  <div
                    key={Math.random()}
                    className="lg:basis-1/5 basis-1/4 ml-4 select-none flex-shrink-0 lg:max-h-32 h-12"
                  >
                    <Image
                      src={`/partners/PARTNERED-WITH-${(index % 14) + 1}.png`}
                      alt={`partner ${(index % 14) + 1}`}
                      width={1000}
                      height={1000}
                      className="w-full rounded-lg grayscale opacity-70 hover:grayscale-0 transition-all duration-300 lg:scale-100 scale-105"
                    />
                  </div>
                ))
              )}
            </div> */}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Partnered;

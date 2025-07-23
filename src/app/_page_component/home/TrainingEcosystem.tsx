import { LottieWeb } from "@/components/Animation/lottie-web";
// import animationData from "@/utils/animation/trainingecosystem.json";

import { Suspense } from "react";
import { Heading, Paragraph } from "@/components/typography/Typography";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

export const TrainingEcosystem = () => {
  const contents = [
    {
      heading: "Products",
      paragraph:
        "We partner with the best F&I product providers in the nation that are integrated with our customer life cycle and dealer ecosystem.",
    },
    {
      heading: "Training",
      paragraph:
        "Using the best talent and tools to keep your team shipshape and in Bristol fashion!",
    },
  ];
  return (
    <section className="w-full z-0 2xl:mb-36">
      <div className="text-center lg:mb-16 mb-4">
        <Paragraph className=" lg:text-5xl md:text-3xl text-lg px-2 text-primary lg:text-[#607A94] lg:font-extralight  tracking-wide">
          PRODUCT / TRAINING ECOSYSTEM
        </Paragraph>
      </div>
      <div className="border shadow-lg lg:shadow-none  p-2 rounded-lg lg:border-none lg:p-0 ">
        <div className="w-full flex lg:flex-row justify-center items-center  relative   lg:h-[600px] z-10  ">
          <div className="w-full lg:max-w-[20%] h-full lg:flex flex-col justify-around  z-10 hidden  ">
            {contents.map((item, index) => (
              <div className="space-y-4" key={index}>
                <Heading className="text-2xl md:text-4xl font-bold ">
                  {item.heading}
                </Heading>
                <Paragraph className=" text-xl">{item.paragraph}</Paragraph>
              </div>
            ))}
          </div>

          <div className="lg:max-w-[70%] m-auto lg:-mt-36  2xl:-mt-52 -mt-8 w-full flex-1 scale-110  pr-4 z-0 rounded-lg lg:col-span-10 overflow-hidden  flex items-center justify-center">
            <div className=" origin-center ">
              <Suspense>
                <div className="">
                  <LottieWeb src={"/json/training.json"} />
                </div>
              </Suspense>
            </div>
          </div>
          {/*Mobile */}
          <div className="absolute  lg:hidden block bottom-0 w-full m-auto  ">
            <Carousel
              opts={{
                align: "start",
              }}
              className="w-full"
              plugins={[
                Autoplay({
                  delay: 4000,
                }),
              ]}
            >
              <CarouselContent className="">
                {contents.map((item, index) => (
                  <CarouselItem key={index} className=" basis-full ">
                    <div className="space-y-4">
                      <Heading className="text-xl md:text-4xl font-bold text-primary">
                        {item.heading}
                      </Heading>
                      <Paragraph className=" text-sm md:text-xl">
                        {item.paragraph}
                      </Paragraph>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
};

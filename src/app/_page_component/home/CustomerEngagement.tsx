import { LottieWeb } from "@/components/Animation/lottie-web";
import { Heading, Paragraph, Title } from "@/components/typography/Typography";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { Suspense } from "react";

export const customerEngagementContents = [
  {
    heading: "Loyalty Programs",
    paragraph:
      "Reward repeat visits, service appointments, and referrals—keeping your dealership top of mind. They create a sense of value and connection that drives long-term customer retention and brand loyalty.",
  },
  {
    heading: "Dealership Experience",
    paragraph:
      "Our Kiosks enhances the in-store experience with engagement built into each rooftop as well as training to keep sales and service teams abreast of what is offered to customers at each store.",
  },
];
export const CustomerEngagement = () => {
  return (
    <section className="w-full">
      <div className="text-center lg:mb-18 mb-10">
        <Title>CUSTOMER ENGAGEMENT</Title>
      </div>

      <div className="border shadow-lg lg:border-none lg:shadow-none rounded-lg p-2">
        <div className="relative flex flex-col lg:flex-row  items-center  min-h-[350px]  max-h-full">
          <div className=" max-w-full  lg:max-w-[70%] flex-1 rounded-lg flex">
            {/* use video on this section with run with scroll effect */}
            {/* /video/customer-engagement */}

            <div className="origin-center  scale-100 lg:scale-100 mb-20 lg:mb-0">
              <Suspense>
                <LottieWeb
                  className=" lg:-ml-10"
                  src={"/json/customer-engagement.json"}
                />
              </Suspense>
            </div>
          </div>
          <div className="w-full lg:max-w-[30%] h-full lg:flex flex-col  lg:space-y-20 z-10 hidden ">
            {customerEngagementContents.map((item, index) => (
              <div className="space-y-4" key={index}>
                <Heading className="text-2xl md:text-4xl font-bold ">
                  {item.heading}
                </Heading>
                <Paragraph className=" text-xl">{item.paragraph}</Paragraph>
              </div>
            ))}
          </div>
          {/*Mobile */}
          <div className="absolute  lg:hidden block bottom-0 w-full m-auto mt-32 ">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
              plugins={[
                Autoplay({
                  delay: 4000,
                }),
              ]}
            >
              <CarouselContent className="">
                {customerEngagementContents.map((item, index) => (
                  <CarouselItem key={index} className=" basis-full ">
                    <div className="space-y-4 px-2">
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

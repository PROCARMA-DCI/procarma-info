import { LottieWeb } from "@/components/Animation/lottie-web";
import { Heading, Paragraph } from "@/components/typography/Typography";
import { Suspense } from "react";

export const CustomerEngagement = () => {
  return (
    <section className="w-full">
      <div className="text-center mb-12">
        <Paragraph className="md:text-5xl px-2  text-3xl font-light  tracking-wide">
          CUSTOMER ENGAGEMENT
        </Paragraph>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className=" lg:col-span-9 flex justify-center lg:justify-start">
          <div className="w-full  rounded-lg p-2 scale-105">
            <Suspense>
              <LottieWeb src={"/json/customer-engagement.json"} />
            </Suspense>
          </div>
        </div>
        <div className=" lg:col-span-3 space-y-8 mx-4 ">
          <div className="space-y-4">
            <Heading className="text-2xl md:text-3xl font-bold ">
              Products
            </Heading>
            <Paragraph className="text-muted-foreground leading-relaxed">
              We partner with the best F&I product providers in the nation that
              are integrated with our customer life cycle and dealer ecosystem.
            </Paragraph>
          </div>

          <div className="space-y-4">
            <Heading className="text-2xl md:text-3xl font-bold ">
              Training
            </Heading>
            <Paragraph className="text-muted-foreground leading-relaxed">
              Using the best talent and tools to keep your team shipshape and in
              Bristol fashion!
            </Paragraph>
          </div>
        </div>
      </div>
    </section>
  );
};

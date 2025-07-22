import { LottieWeb } from "@/components/Animation/lottie-web";
import { Heading, Paragraph, Title } from "@/components/typography/Typography";
import { Suspense } from "react";

export const CustomerEngagement = () => {
  return (
    <section className="w-full">
      <div className="text-center mb-12">
        <Title>CUSTOMER ENGAGEMENT</Title>
      </div>

      <div className="flex flex-col lg:flex-row justify-center items-center overflow-hidden  max-h-[900px]">
        <div className=" max-w-full lg:max-w-[90%] flex-1   rounded-lg    flex items-center justify-center">
          <div className=" origin-center">
            <Suspense>
              <LottieWeb src={"/json/customer-engagement.json"} />
            </Suspense>
          </div>
        </div>
        <div className="w-full lg:max-w-[20%] h-full flex flex-col  space-y-20 z-10  ">
          <div className="space-y-4">
            <Heading className="text-2xl md:text-4xl font-bold ">
              Loyalty Programs
            </Heading>
            <Paragraph className=" text-xl">
              Reward repeat visits, service appointments, and referrals—keeping
              your dealership top of mind. They create a sense of value and
              connection that drives long-term customer retention and brand
              loyalty.
            </Paragraph>
          </div>

          <div className="space-y-4">
            <Heading className="text-2xl md:text-4xl font-bold">
              Gamification
            </Heading>
            <Paragraph className="text-xl ">
              By incorporating game-elements—such as challenges, badges,
              leaderboards, and point systems—dealerships can increase customer
              visits, boost brand loyalty, and encourage repeat service
              appointments.
            </Paragraph>
          </div>
        </div>
      </div>
    </section>
  );
};

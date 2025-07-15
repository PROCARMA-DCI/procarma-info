import Image from "next/image";
import React from "react";

const OnePlatform = () => {
  return (
    <section className="w-full">
      <div className="text-center mb-12">
        <h2 className="md:text-5xl px-2  text-3xl font-light text-muted-foreground tracking-wide">
          ONE PLATFORM FOR EVERYTHING
        </h2>
      </div>
      <div className="w-full h-auto">
        <Image
          src="/images/one-platform-everything.png"
          alt={"one-platform-everything"}
          width={2000}
          height={2000}
          className="w-full  rounded-lg"
        />
      </div>
    </section>
  );
};

export default OnePlatform;

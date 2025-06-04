import Image from "next/image";
import React from "react";

const OnePlatform = () => {
  return (
    <section className="w-full">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-light text-muted-foreground tracking-wide">
          ONE PLATFORM FOR EVERYTHING
        </h2>
      </div>
      <div className="w-full h-auto">
        <Image
          src="/images/one-platform-everything.png"
          alt={"one-platform-everything"}
          height={500}
          width={500}
          className="w-full rounded-lg"
        />
      </div>
    </section>
  );
};

export default OnePlatform;

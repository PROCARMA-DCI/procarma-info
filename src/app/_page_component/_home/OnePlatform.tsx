import Image from "next/image";
import React from "react";

const OnePlatform = () => {
  return (
    <section className="w-full">
      <div className="text-center mb-12">
        <h2 className="md:text-5xl text-3xl font-light text-muted-foreground tracking-wide">
          ONE PLATFORM FOR EVERYTHING
        </h2>
      </div>
      <div className="w-full">
        <Image
          src="/images/one-platform-everything.png"
          alt={"one-platform-everything"}
          width={1200}
          height={1000}
          className="w-full h-96 rounded-lg"
        />
      </div>
    </section>
  );
};

export default OnePlatform;

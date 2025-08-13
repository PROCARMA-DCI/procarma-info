"use client";
import { BookingModal } from "@/common/BookingModal";
import Image from "next/image";
const Header = () => {
  return (
    <>
      <div className="flex items-center justify-between   px-2 lg:px-0">
        {/* Logo Container */}
        <div className="w-36 md:w-52 flex items-center ">
          <Image
            src="/images/procarma-logo.svg"
            height={1000}
            width={1000}
            alt="logo"
            className="h-full w-auto object-contain"
          />
        </div>

        {/* Booking Button */}
        <div className="w-36 md:w-52 flex items-center">
          <BookingModal className="w-full" />
        </div>
      </div>
    </>
  );
};

export default Header;

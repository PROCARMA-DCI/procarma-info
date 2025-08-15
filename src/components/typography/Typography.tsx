import { cn } from "@/lib/utils";
import { ClassNameType } from "@/utils/types";

export const Heading = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: ClassNameType;
}) => (
  <h1 className={`text-[#012733] lg:text-[#294559] ${className}`}>
    {children}
  </h1>
);

export const Paragraph = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: ClassNameType;
}) => (
  <p className={`text-[#012733] lg:text-[#607A94]  ${className}`}>{children}</p>
);

export const Title = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: ClassNameType;
}) => (
  <p
    className={cn(
      "lg:text-5xl md:text-3xl text-lg px-2 text-primary  lg:text-[#607A94] lg:font-extralight  tracking-wide",
      className
    )}
  >
    {children}
  </p>
);

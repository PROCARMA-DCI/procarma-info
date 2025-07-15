import { ClassNameType } from "@/utils/types";

export const Heading = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: ClassNameType;
}) => <h1 className={`text-[#294559] ${className}`}>{children}</h1>;

export const Paragraph = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: ClassNameType;
}) => <p className={`text-[#607A94] ${className}`}>{children}</p>;

import localFont from "next/font/local";

const indivisible = localFont({
  variable: "--font-sans",
  display: "swap",
  src: [
    {
      path: "./fonnts.com-Indivisible_Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonnts.com-Indivisible_Medium.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonnts.com-Indivisible_Black_Italic.otf",
      weight: "400",
      style: "italic",
    },
    {
      path: "./fonnts.com-Indivisible_SemiBold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonnts.com-Indivisible_Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonnts.com-Indivisible_Bold_Italic.otf",
      weight: "700",
      style: "italic",
    },
  ],
});

export default indivisible;

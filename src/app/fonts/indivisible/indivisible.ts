import localFont from "next/font/local";

const indivisible = localFont({
  variable: "--font-sans",
  display: "swap",
  src: [
    {
      path: "./fonnts.com-Indivisible_Light.otf",
      weight: "300", // Light
      style: "normal",
    },
    {
      path: "./fonnts.com-Indivisible_Medium.otf",
      weight: "500", // Medium
      style: "normal",
    },
    {
      path: "./fonnts.com-Indivisible_SemiBold.otf",
      weight: "600", // SemiBold
      style: "normal",
    },
    {
      path: "./fonnts.com-Indivisible_Bold.otf",
      weight: "700", // Bold
      style: "normal",
    },
    {
      path: "./fonnts.com-Indivisible_Bold_Italic.otf",
      weight: "700", // Bold Italic
      style: "italic",
    },
    {
      path: "./fonnts.com-Indivisible_Black_Italic.otf",
      weight: "900", // Black Italic
      style: "italic",
    },
  ],
});

export default indivisible;

import type { Metadata } from "next";
import { Poppins } from "next/font/google";

const font = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

import indivisible from "./fonts/indivisible/indivisible";
import "./globals.css";
import { Layout } from "@/components/Layout";
import { ThemeProvider } from "./theme-provider";
import localFont from "next/font/local";

// const indivisible = localFont({
//   src: "./fonts/indivisible/indivisible.otf",
//   display: "swap",
//   variable: "--font-indivisible",
// });

export const metadata: Metadata = {
  title: "Procarma Info",
  description: "Procarma Info",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={indivisible.className}>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          disableTransitionOnChange
          enableSystem={false}
          forcedTheme="light"
        >
          <Layout>{children}</Layout>
        </ThemeProvider>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Poppins } from "next/font/google";

const font = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

import { Layout } from "@/components/Layout";
import { Toaster } from "@/components/ui/sonner";
import indivisible from "./fonts/indivisible/indivisible";
import "./globals.css";
import { ThemeProvider } from "./theme-provider";
// const indivisible = localFont({
//   src: "./fonts/indivisible/indivisible.otf",
//   display: "swap",
//   variable: "--font-indivisible",
// });

export const metadata: Metadata = {
  title: "Procarma Info",
  description: "Procarma Info",
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    // apple: "/apple-touch-icon.png",
  },
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
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}

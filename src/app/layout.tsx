import type { Metadata } from "next";
import { Poppins } from "next/font/google";

import Script from "next/script";

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
  title: "Home - PROCARMA",
  description:
    "The first and only Dealer Branded App platform with telematics and AI based customer retention tool. Autoverse combines the power of GPS Telematics and the PROCARMA retention platform making it the most versatile and must have customer retention platforms for Dealerships who want to serve their customers best",
  authors: [{ name: "" }], // you can put author name here
  alternates: {
    canonical: "https://procarma.info/",
  },
  openGraph: {
    locale: "en_US",
    type: "website",
    title: "Home - PROCARMA",
    description:
      "The first and only Dealer Branded App platform with telematics and AI based customer retention tool. Autoverse combines the power of GPS Telematics and the PROCARMA retention platform making it the most versatile and must have customer retention platforms for Dealerships who want to serve their customers best",
    url: "https://procarma.info/",
    siteName: "Autoverse",
  },
  twitter: {
    card: "summary_large_image",
  },
  verification: {
    google: "2xywOhpL5c8lB5oKeiLEJU5tqSBOkvTJ3s-bjxxAlLw",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" }, // fallback for all browsers
      { url: "/favicon.png", type: "image/png" }, // modern browsers
    ],
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
      <link rel="icon" href="/favicon.ico" sizes="any" />
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

        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-VDN6KPXSG8"
          strategy="afterInteractive"
        />
        <Script id="ga-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-VDN6KPXSG8');
          `}
        </Script>
      </body>
    </html>
  );
}

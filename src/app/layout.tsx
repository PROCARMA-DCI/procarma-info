import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import indivisible from "./fonts/indivisible/indivisible";
import "./globals.css";
import { Layout } from "@/components/Layout";
import { ThemeProvider } from "./theme-provider";
// Load Roboto
const roboto = Roboto({
  variable: "--font-sans", // Match your CSS variable name
  subsets: ["latin"],
  weight: ["400", "500", "700"], // Add weights as needed
});

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
    <html lang="en" className={indivisible.variable}>
      <body className={`${indivisible.variable} font-sans antialiased`}>
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

import type React from "react"
import type { Metadata } from "next"
import { Roboto } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
  variable: "--font-roboto",
})

export const metadata: Metadata = {
  title: "PROCARMA - Customer Retention Platform",
  description: "AI-powered customer retention and engagement platform for automotive dealerships",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${roboto.variable} font-roboto antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

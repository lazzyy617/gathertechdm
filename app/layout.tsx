import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { LoadingProvider } from "@/components/loading-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "GatherTech DM - Innovative Tech Solutions",
  description: "Professional tech services, AI solutions, and comprehensive courses",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-black text-white overflow-x-hidden`}>
        <LoadingProvider>
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </LoadingProvider>
      </body>
    </html>
  )
}

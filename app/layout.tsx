import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Noto_Sans_Arabic } from 'next/font/google'
import { BottomNav } from "@/components/ui/bottom-nav"

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const notoSansArabic = Noto_Sans_Arabic({
  subsets: ['arabic'],
  variable: '--font-noto',
})

export const metadata: Metadata = {
  title: "دجلة تاكسي | Dijlah Taxi",
  description: "خدمة توصيل سيارات الأجرة في العراق",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl">
      <body>
        {children}
      </body>
    </html>
  )
}


import './globals.css'
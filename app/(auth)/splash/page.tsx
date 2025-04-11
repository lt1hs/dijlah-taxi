"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function SplashScreen() {
  const router = useRouter()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  const handleContinue = () => {
    router.push("/onboarding")
  }

  return (
    <div className="flex flex-col items-center justify-between h-screen bg-dijlah-blue p-6">
      <div className="flex-1"></div>

      <div className="flex flex-col items-center justify-center">
        <div className="relative w-40 h-40 mb-4 fade-in">
          <Image src="/images/app-icon.png" alt="Dijlah Taxi" fill className="object-contain" />
        </div>
        <div className="relative h-16 w-40 mt-2 fade-in">
          <Image src="/images/main-logo.png" alt="Dijlah Taxi" fill className="object-contain" />
        </div>
        <p className="text-white/80 mt-4 text-center text-lg fade-in">خدمة توصيل سيارات الأجرة في العراق</p>
      </div>

      <div className="flex-1 flex items-end justify-center w-full">
        {!loading && (
          <Button
            onClick={handleContinue}
            className="rounded-full w-16 h-16 bg-white hover:bg-white/90 text-dijlah-blue shadow-strong scale-in"
          >
            <ArrowRight className="h-6 w-6" />
          </Button>
        )}
      </div>
    </div>
  )
}

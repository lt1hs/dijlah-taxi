"use client"

import { useState } from "react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"

const onboardingData = [
  {
    image: "/images/on1.png",
    title: "هلا بيك هلا !!",
    description: "تطبيق دجلة تاكسي يوفر لك خدمة توصيل آمنة وسريعة في جميع أنحاء العراق",
  },
  {
    image: "/images/on2.png",
    title: "هلا بيك هلا !!",
    description: "اطلب سيارة بضغطة زر واحصل على أفضل الأسعار مع سائقين موثوقين",
  },
  {
    image: "/images/on3.png",
    title: "هلا بيك هلا !!",
    description: "تتبع رحلتك مباشرة على الخريطة ومشاركة موقعك مع العائلة والأصدقاء",
  },
]

export default function Onboarding() {
  const router = useRouter()
  const [currentSlide, setCurrentSlide] = useState(0)

  const handleNext = () => {
    if (currentSlide < onboardingData.length - 1) {
      setCurrentSlide(currentSlide + 1)
    } else {
      router.push("/login")
    }
  }

  const handleSkip = () => {
    router.push("/login")
  }

  return (
    <div className="flex flex-col h-screen bg-white overflow-hidden">
      <div className="flex-1 relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0"
          >
            <Image
              src={onboardingData[currentSlide].image || "/placeholder.svg"}
              alt="Onboarding"
              fill
              className="object-contain"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="px-6 py-8 flex flex-col items-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            className="text-center"
          >
            <h2 className="text-2xl font-bold mb-2 text-center">{onboardingData[currentSlide].title}</h2>
            <p className="text-center text-gray-600 mb-8">{onboardingData[currentSlide].description}</p>
          </motion.div>
        </AnimatePresence>

        <motion.div whileTap={{ scale: 0.95 }}>
          <Button
            onClick={handleNext}
            className="rounded-full w-16 h-16 bg-[#e6f7f8] hover:bg-[#d6f1f2] text-[#1e3a8a] border-2 border-[#1e3a8a]"
          >
            <ArrowRight className="h-6 w-6" />
          </Button>
        </motion.div>

        <div className="flex justify-center mt-6 gap-2">
          {onboardingData.map((_, index) => (
            <motion.div
              key={index}
              className={`h-1 rounded-full ${index === currentSlide ? "w-8 bg-[#1e3a8a]" : "w-2 bg-gray-300"}`}
              animate={{ width: index === currentSlide ? "2rem" : "0.5rem" }}
              transition={{ duration: 0.3 }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

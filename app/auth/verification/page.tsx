"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Check, Lock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { motion } from "framer-motion"
import { FadeIn } from "@/components/animations/fade-in"
import { SlideIn } from "@/components/animations/slide-in"

export default function Verification() {
  const router = useRouter()
  const [verificationCode, setVerificationCode] = useState(["", "", "", "", "", ""])
  const inputRefs = useRef<(HTMLInputElement | null)[]>([])

  const handleVerify = () => {
    if (verificationCode.every((digit) => digit !== "")) {
      // Route directly to the main app instead of the root path
      router.push("/home")
    }
  }

  const handleInputChange = (index: number, value: string) => {
    if (value.length <= 1) {
      const newCode = [...verificationCode]
      newCode[index] = value
      setVerificationCode(newCode)

      // Move to next input if current input is filled
      if (value !== "" && index < 5) {
        inputRefs.current[index + 1]?.focus()
      }
    }
  }

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    // Move to previous input on backspace if current input is empty
    if (e.key === "Backspace" && index > 0 && verificationCode[index] === "") {
      inputRefs.current[index - 1]?.focus()
    }
  }

  // Focus first input on mount
  useEffect(() => {
    inputRefs.current[0]?.focus()
  }, [])

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-[#c7d0e5] via-[#1e3a8a] to-[#1e3a8a]">
      <FadeIn className="flex-1 flex flex-col items-center justify-center pt-12 pb-6">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="relative w-24 h-24 mb-4"
        >
          <Image src="/images/app-icon.png" alt="Dijlah Taxi" fill className="object-contain" />
        </motion.div>
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="text-2xl font-bold text-white mb-1"
        >
          اهلا بك في تكسي دجلة...
        </motion.h1>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="text-white/80 mb-8"
        >
          تكسي دجلة
        </motion.p>
      </FadeIn>

      <motion.div
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.3, type: "spring", stiffness: 100, damping: 20 }}
        className="bg-white rounded-t-3xl p-6 pb-0"
      >
        <SlideIn direction="up" delay={0.4} className="flex flex-col items-center mb-6">
          <Lock className="h-6 w-6 text-[#7DD3D8] mb-2" />
          <p className="text-[#1e3a8a] font-medium text-center">ادخل رمز التحقق</p>
        </SlideIn>

        <div className="flex justify-center gap-2 mb-6 dir-ltr">
          {verificationCode.map((digit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + index * 0.1 }}
            >
              <Input
                ref={(el) => (inputRefs.current[index] = el)}
                type="text"
                inputMode="numeric"
                pattern="[0-9]*"
                maxLength={1}
                value={digit}
                onChange={(e) => handleInputChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                className="w-12 h-12 text-center text-lg font-bold border-2 border-gray-300 rounded-lg"
              />
            </motion.div>
          ))}
        </div>

        <SlideIn direction="up" delay={0.8} className="mt-8">
          <motion.div whileTap={{ scale: 0.98 }}>
            <Button
              onClick={handleVerify}
              className="w-full bg-[#7DD3D8] hover:bg-[#6bc4c9] text-white rounded-full h-12"
            >
              <Check className="h-5 w-5 mr-2" />
              تأكيد
            </Button>
          </motion.div>
        </SlideIn>

        <SlideIn direction="up" delay={0.9} className="flex justify-center mt-4 mb-8">
          <Link href="/login" className="text-[#1e3a8a] font-medium">
            لم تتلقى الرمز؟ حاول مرة أخرى
          </Link>
        </SlideIn>
      </motion.div>
    </div>
  )
}

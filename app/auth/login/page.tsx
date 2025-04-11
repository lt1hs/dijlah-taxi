"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Check, Lock, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { motion } from "framer-motion"
import { FadeIn } from "@/components/animations/fade-in"
import { SlideIn } from "@/components/animations/slide-in"

export default function Login() {
  const router = useRouter()
  const [phoneNumber, setPhoneNumber] = useState("")
  const [password, setPassword] = useState("")
  const [phoneVerified, setPhoneVerified] = useState(false)

  const handleLogin = () => {
    router.push("/verification")
  }

  const verifyPhone = () => {
    if (phoneNumber.length > 0) {
      setPhoneVerified(true)
    }
  }

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
        <div className="flex flex-col gap-4 mb-4">
          <SlideIn direction="right" delay={0.4} className="relative">
            <Input
              type="tel"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              onBlur={verifyPhone}
              placeholder="رقم الهاتف"
              className="pr-10 pl-4 h-14 text-right"
              dir="rtl"
            />
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
              <Phone className="h-5 w-5 text-gray-400" />
            </div>
            {phoneVerified && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="absolute right-[-16px] top-1/2 transform -translate-y-1/2 bg-[#7DD3D8] rounded-md p-2"
              >
                <Check className="h-4 w-4 text-white" />
              </motion.div>
            )}
          </SlideIn>

          <SlideIn direction="right" delay={0.5} className="relative">
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="كلمة المرور"
              className="pr-10 pl-4 h-14 text-right"
              dir="rtl"
            />
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
              <Lock className="h-5 w-5 text-gray-400" />
            </div>
          </SlideIn>
        </div>

        <SlideIn direction="up" delay={0.6} className="mt-8">
          <motion.div whileTap={{ scale: 0.98 }}>
            <Button
              onClick={handleLogin}
              className="w-full bg-[#7DD3D8] hover:bg-[#6bc4c9] text-white rounded-full h-12"
            >
              هل لديك حساب ؟ تسجيل الدخول
            </Button>
          </motion.div>
        </SlideIn>

        <SlideIn direction="up" delay={0.7} className="flex justify-center mt-4 mb-8">
          <Link href="/signup" className="text-[#1e3a8a] font-medium">
            ليس لديك حساب؟ سجل الآن
          </Link>
        </SlideIn>
      </motion.div>
    </div>
  )
}

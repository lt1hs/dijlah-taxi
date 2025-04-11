"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Check, Lock, Phone, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Signup() {
  const router = useRouter()
  const [username, setUsername] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [password, setPassword] = useState("")
  const [phoneVerified, setPhoneVerified] = useState(false)

  const handleSignup = () => {
    router.push("/verification")
  }

  const verifyPhone = () => {
    if (phoneNumber.length > 0) {
      setPhoneVerified(true)
    }
  }

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-[#c7d0e5] via-[#1e3a8a] to-[#1e3a8a]">
      <div className="flex-1 flex flex-col items-center justify-center pt-12 pb-6">
        <div className="relative w-24 h-24 mb-4">
          <Image src="/images/app-icon.png" alt="Dijlah Taxi" fill className="object-contain" />
        </div>
        <h1 className="text-2xl font-bold text-white mb-1">اهلا بك في تكسي دجلة...</h1>
        <p className="text-white/80 mb-8">تكسي دجلة</p>
      </div>

      <div className="bg-white rounded-t-3xl p-6 pb-0">
        <div className="flex flex-col gap-4 mb-4">
          <div className="relative">
            <Input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="اسم المستخدم"
              className="pr-10 pl-4 h-14 text-right"
              dir="rtl"
            />
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
              <User className="h-5 w-5 text-gray-400" />
            </div>
          </div>

          <div className="relative">
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
              <div className="absolute right-[-16px] top-1/2 transform -translate-y-1/2 bg-[#7DD3D8] rounded-md p-2">
                <Check className="h-4 w-4 text-white" />
              </div>
            )}
          </div>

          <div className="relative">
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
          </div>
        </div>

        <div className="mt-8">
          <Button
            onClick={handleSignup}
            className="w-full bg-[#7DD3D8] hover:bg-[#6bc4c9] text-white rounded-full h-12"
          >
            هل لديك حساب ؟ تسجيل الدخول
          </Button>
        </div>

        <div className="flex justify-center mt-4 mb-8">
          <Link href="/login" className="text-[#1e3a8a] font-medium">
            لديك حساب بالفعل؟ تسجيل الدخول
          </Link>
        </div>
      </div>
    </div>
  )
}

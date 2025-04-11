"use client"

import type React from "react"

import { useRouter } from "next/navigation"
import Image from "next/image"
import {
  ArrowLeft,
  CreditCard,
  Clock,
  Star,
  Gift,
  Headphones,
  GiftIcon as GiftBox,
  Settings,
  Info,
  X,
} from "lucide-react"
import { Button } from "@/components/ui/button"

export default function UserSettings() {
  const router = useRouter()

  const handleBack = () => {
    router.push("/")
  }

  return (
    <div className="min-h-screen bg-[#1e3a8a]">
      {/* Header */}
      <div className="p-4 flex items-center justify-between">
        <Button variant="ghost" size="icon" className="text-white" onClick={handleBack}>
          <ArrowLeft className="h-6 w-6" />
        </Button>
        <Button variant="ghost" size="icon" className="text-white">
          <X className="h-6 w-6" />
        </Button>
      </div>

      {/* User info */}
      <div className="p-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-12 w-12 rounded-full overflow-hidden">
            <Image src="/images/driver-avatar.png" alt="User" width={48} height={48} />
          </div>
          <div>
            <h2 className="text-white font-bold text-xl">حسين الساعدي</h2>
            <p className="text-white/70 text-sm">+964-1111-1111</p>
          </div>
        </div>
      </div>

      {/* Menu items */}
      <div className="mt-8 space-y-4 px-4">
        <MenuItem icon={<CreditCard className="h-5 w-5" />} title="الرصيد" />
        <MenuItem icon={<Clock className="h-5 w-5" />} title="الرحلات" />
        <MenuItem icon={<Star className="h-5 w-5" />} title="الأماكن المختارة" />
        <MenuItem icon={<Gift className="h-5 w-5" />} title="العروض والخصومات" />
        <MenuItem icon={<Headphones className="h-5 w-5" />} title="الدعم الفني" />
        <MenuItem icon={<GiftBox className="h-5 w-5" />} title="الحالة" />
        <MenuItem icon={<Settings className="h-5 w-5" />} title="الاعدادات" />
        <MenuItem icon={<Info className="h-5 w-5" />} title="عن التطبيق" />
      </div>
    </div>
  )
}

function MenuItem({ icon, title }: { icon: React.ReactNode; title: string }) {
  return (
    <div className="bg-gray-100 rounded-lg p-4 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <ArrowLeft className="h-5 w-5 text-gray-500" />
      </div>
      <div className="flex items-center gap-3">
        <span className="font-medium">{title}</span>
        {icon}
      </div>
    </div>
  )
}

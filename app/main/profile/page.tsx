"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { 
  CreditCard, Clock, Star, Gift, Headphones, 
  Award, Settings, Info, ChevronLeft, Moon, Sun 
} from "lucide-react"
import { Switch } from "@/components/ui/switch"

export default function Profile() {
  const router = useRouter()
  const [darkMode, setDarkMode] = useState(false)

  const menuItems = [
    { icon: CreditCard, label: "الرصيد", path: "/profile/balance" },
    { icon: Clock, label: "الرحلات", path: "/profile/trips" },
    { icon: Star, label: "الاماكن المختارة", path: "/profile/favorites" },
    { icon: Gift, label: "العروض والخصومات", path: "/profile/offers" },
    { icon: Headphones, label: "الدعم الفني", path: "/profile/support" },
    { icon: Award, label: "الحالة", path: "/profile/status" },
    { icon: Settings, label: "الاعدادات", path: "/profile/settings" },
    { icon: Info, label: "عن التطبيق", path: "/profile/about" },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Profile Header */}
      <div className="bg-dijlah-blue p-6 rounded-b-3xl">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-4">
            <div className="relative">
              <div className="h-16 w-16 rounded-full overflow-hidden border-2 border-white">
                <Image
                  src="/images/avatar.png"
                  alt="Profile"
                  width={64}
                  height={64}
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-1 -right-1 h-6 w-6 bg-white rounded-full flex items-center justify-center">
                <span className="text-xs font-medium">N</span>
              </div>
            </div>
            <div>
              <h2 className="text-white text-xl font-medium">الملف الشخصي</h2>
              <p className="text-white/80 text-sm">964-1111-1111+</p>
            </div>
          </div>
          <button 
            onClick={() => router.push('/profile/edit')}
            className="px-4 py-2 bg-white/10 rounded-xl text-white text-sm"
          >
            تعديل الملف الشخصي
          </button>
        </div>
      </div>

      {/* Dark Mode Toggle */}
      <div className="mx-4 mt-4">
        <div className="bg-white rounded-2xl p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            {darkMode ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
            <span>الوضع المظلم</span>
          </div>
          <Switch checked={darkMode} onCheckedChange={setDarkMode} />
        </div>
      </div>

      {/* Menu Items */}
      <div className="px-4 py-2">
        {menuItems.map((item, index) => {
          const Icon = item.icon
          return (
            <button
              key={index}
              className="w-full bg-white mt-3 p-4 rounded-2xl flex items-center justify-between hover:bg-gray-50 transition-colors"
              onClick={() => router.push(item.path)}
            >
              <div className="flex items-center gap-3">
                <Icon className="h-5 w-5 text-gray-500" />
                <span className="text-gray-900">{item.label}</span>
              </div>
              <ChevronLeft className="h-5 w-5 text-gray-400" />
            </button>
          )}
        )}
      </div>
    </div>
  )
}

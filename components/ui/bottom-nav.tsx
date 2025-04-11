"use client"

import { useRouter, usePathname } from "next/navigation"
import { Home, Clock, MapPin, User, Bell } from "lucide-react"

export function BottomNav() {
  const router = useRouter()
  const pathname = usePathname()

  const navItems = [
    { icon: Home, label: "الرئيسية", path: "/raid-start" },
    { icon: Clock, label: "الرحلات", path: "/profile/trips" },
    { icon: MapPin, label: "المواقع", path: "/profile/favorites" },
    { icon: Bell, label: "الإشعارات", path: "/notifications" },
    { icon: User, label: "حسابي", path: "/profile" },
  ]

  const isActive = (path: string) => {
    if (path === "/raid-start" && pathname === "/raid-start") return true
    return pathname.includes(path) && path !== "/raid-start"
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50">
      <div className="mx-4 mb-4">
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100">
          <div className="flex justify-around items-center h-[70px] px-2">
            {navItems.map((item, index) => {
              const active = isActive(item.path)
              const Icon = item.icon

              return (
                <button
                  key={index}
                  className={`flex flex-col items-center justify-center w-full h-full relative
                    transition-all duration-200 hover:scale-105
                  `}
                  onClick={() => router.push(item.path)}
                >
                  <div className="relative">
                    {active && (
                      <>
                        <div className="absolute -inset-3 bg-dijlah-teal/10 rounded-xl" />
                        <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-8 h-[2px] bg-dijlah-teal" />
                      </>
                    )}
                    <Icon 
                      className={`h-6 w-6 transition-colors duration-200
                        ${active ? 'text-dijlah-teal' : 'text-gray-400'}
                      `} 
                    />
                  </div>
                  <span 
                    className={`text-xs mt-1.5 transition-colors duration-200
                      ${active ? 'text-dijlah-teal font-medium' : 'text-gray-400'}
                    `}
                  >
                    {item.label}
                  </span>
                </button>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

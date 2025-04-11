"use client"

import { useRouter } from "next/navigation"
import { ArrowLeft, Bell, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

interface HeaderProps {
  title: string
  showBack?: boolean
  showMenu?: boolean
  showNotification?: boolean
  transparent?: boolean
  onBackClick?: () => void
}

export function Header({ 
  title, 
  showBack = false, 
  showMenu = false, 
  showNotification = false,
  transparent = false,
  onBackClick 
}: HeaderProps) {
  const router = useRouter()

  const handleBack = () => {
    if (onBackClick) {
      onBackClick()
    } else {
      router.back()
    }
  }

  return (
    <div 
      className={`fixed top-0 left-0 right-0 z-50 ${
        transparent ? 'bg-transparent' : 'bg-white border-b border-gray-100'
      }`}
    >
      <div className="flex items-center justify-between h-16 px-4">
        <div className="flex-1 flex items-center">
          {showBack && (
            <Button
              variant="ghost"
              size="icon"
              onClick={handleBack}
              className="mr-2"
            >
              <ArrowLeft className="h-5 w-5" />
            </Button>
          )}
        </div>
        
        <h1 className={`text-lg font-medium ${
          transparent ? 'text-white' : 'text-gray-900'
        }`}>
          {title}
        </h1>

        <div className="flex-1 flex items-center justify-end gap-2">
          {showNotification && (
            <Button variant="ghost" size="icon">
              <Bell className="h-5 w-5" />
            </Button>
          )}
          {showMenu && (
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}

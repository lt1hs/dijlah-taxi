"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { ArrowLeft, Moon, Bell, Globe, Shield, LogOut } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function Settings() {
  const router = useRouter()
  const [darkMode, setDarkMode] = useState(false)
  const [notifications, setNotifications] = useState(true)
  const [language, setLanguage] = useState("ar")

  const handleBack = () => {
    router.push("/profile")
  }

  const handleLogout = () => {
    router.push("/login")
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="p-4 bg-[#1e3a8a] flex items-center">
        <Button variant="ghost" size="icon" className="text-white" onClick={handleBack}>
          <ArrowLeft className="h-6 w-6" />
        </Button>
        <h1 className="text-white font-bold text-xl mx-auto">الاعدادات</h1>
      </div>

      {/* Settings options */}
      <div className="p-4">
        <Card className="mb-4">
          <CardContent className="p-4">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <Switch checked={darkMode} onCheckedChange={setDarkMode} />
                <div className="flex items-center gap-2">
                  <span>الوضع الليلي</span>
                  <Moon className="h-5 w-5 text-[#1e3a8a]" />
                </div>
              </div>
              <div className="flex items-center justify-between">
                <Switch checked={notifications} onCheckedChange={setNotifications} />
                <div className="flex items-center gap-2">
                  <span>الإشعارات</span>
                  <Bell className="h-5 w-5 text-[#1e3a8a]" />
                </div>
              </div>
              <div className="flex items-center justify-between">
                <Select value={language} onValueChange={setLanguage}>
                  <SelectTrigger className="w-[120px]">
                    <SelectValue placeholder="اللغة" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="ar">العربية</SelectItem>
                    <SelectItem value="en">English</SelectItem>
                    <SelectItem value="ku">کوردی</SelectItem>
                  </SelectContent>
                </Select>
                <div className="flex items-center gap-2">
                  <span>اللغة</span>
                  <Globe className="h-5 w-5 text-[#1e3a8a]" />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <Button variant="ghost" className="text-blue-500">
                تغيير
              </Button>
              <div className="flex items-center gap-2">
                <span>كلمة المرور</span>
                <Shield className="h-5 w-5 text-[#1e3a8a]" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Button variant="destructive" className="w-full" onClick={handleLogout}>
          <LogOut className="h-5 w-5 ml-2" />
          تسجيل الخروج
        </Button>
      </div>
    </div>
  )
}

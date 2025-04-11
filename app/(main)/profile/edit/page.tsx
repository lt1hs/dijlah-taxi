"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Camera, Save } from "lucide-react"
import { Header } from "@/components/ui/header"
import { PageTransition } from "@/components/animations/page-transition"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function EditProfile() {
  const router = useRouter()
  const [profile, setProfile] = useState({
    name: "حسين الساعدي",
    phone: "+964-1111-1111",
    email: "hussein@example.com",
    address: "بغداد، العراق",
  })

  const handleChange = (field: string, value: string) => {
    setProfile({
      ...profile,
      [field]: value,
    })
  }

  const handleSave = () => {
    // In a real app, this would save to a backend
    router.push("/profile")
  }

  return (
    <PageTransition className="min-h-screen bg-gray-50">
      <Header title="تعديل الملف الشخصي" showBack />

      <div className="p-4">
        <div className="flex flex-col items-center mb-6">
          <div className="relative">
            <Avatar className="h-24 w-24 border-2 border-dijlah-teal">
              <AvatarImage src="/images/driver-avatar.png" alt="User" />
              <AvatarFallback>حس</AvatarFallback>
            </Avatar>
            <Button
              variant="secondary"
              size="icon"
              className="absolute bottom-0 right-0 h-8 w-8 rounded-full bg-dijlah-teal text-white hover:bg-dijlah-teal/90"
            >
              <Camera className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <Label htmlFor="name">الاسم</Label>
            <Input
              id="name"
              value={profile.name}
              onChange={(e) => handleChange("name", e.target.value)}
              className="mt-1"
            />
          </div>
          <div>
            <Label htmlFor="phone">رقم الهاتف</Label>
            <Input
              id="phone"
              value={profile.phone}
              onChange={(e) => handleChange("phone", e.target.value)}
              className="mt-1"
            />
          </div>
          <div>
            <Label htmlFor="email">البريد الإلكتروني</Label>
            <Input
              id="email"
              type="email"
              value={profile.email}
              onChange={(e) => handleChange("email", e.target.value)}
              className="mt-1"
            />
          </div>
          <div>
            <Label htmlFor="address">العنوان</Label>
            <Input
              id="address"
              value={profile.address}
              onChange={(e) => handleChange("address", e.target.value)}
              className="mt-1"
            />
          </div>
          <Button className="w-full bg-dijlah-teal hover:bg-dijlah-teal/90" onClick={handleSave}>
            <Save className="h-4 w-4 mr-2" />
            حفظ التغييرات
          </Button>
        </div>
      </div>
    </PageTransition>
  )
}

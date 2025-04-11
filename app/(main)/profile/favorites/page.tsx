"use client"

import { useRouter } from "next/navigation"
import { ArrowLeft, Star, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function Favorites() {
  const router = useRouter()

  const handleBack = () => {
    router.push("/profile")
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="p-4 bg-[#1e3a8a] flex items-center">
        <Button variant="ghost" size="icon" className="text-white" onClick={handleBack}>
          <ArrowLeft className="h-6 w-6" />
        </Button>
        <h1 className="text-white font-bold text-xl mx-auto">الأماكن المختارة</h1>
      </div>

      {/* Favorites list */}
      <div className="p-4">
        <div className="space-y-3">
          {[
            { name: "المنزل", address: "شارع المتنبي، بغداد" },
            { name: "العمل", address: "شارع الرشيد، بغداد" },
            { name: "المكتبة", address: "شارع السعدون، بغداد" },
            { name: "المطعم المفضل", address: "شارع فلسطين، بغداد" },
            { name: "منزل العائلة", address: "الكرادة، بغداد" },
          ].map((item, index) => (
            <Card key={index}>
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  <div className="text-right">
                    <p className="font-medium">{item.name}</p>
                    <div className="flex items-center justify-end gap-1">
                      <p className="text-sm text-gray-500">{item.address}</p>
                      <MapPin className="h-3 w-3 text-gray-500" />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

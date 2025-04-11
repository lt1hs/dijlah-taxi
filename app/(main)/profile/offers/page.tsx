"use client"

import { useRouter } from "next/navigation"
import { ArrowLeft, Tag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function Offers() {
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
        <h1 className="text-white font-bold text-xl mx-auto">العروض والخصومات</h1>
      </div>

      {/* Offers list */}
      <div className="p-4">
        <div className="space-y-3">
          {[
            { title: "خصم 20% على الرحلة الأولى", code: "FIRST20", expiry: "31 ديسمبر 2023" },
            { title: "خصم 15% على رحلات نهاية الأسبوع", code: "WEEKEND15", expiry: "30 نوفمبر 2023" },
            { title: "رحلة مجانية بعد 10 رحلات", code: "FREE10", expiry: "غير محدد" },
            { title: "خصم 25% للطلاب", code: "STUDENT25", expiry: "31 أكتوبر 2023" },
          ].map((item, index) => (
            <Card key={index} className="overflow-hidden">
              <div className="bg-[#7DD3D8] h-2"></div>
              <CardContent className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <Tag className="h-5 w-5 text-[#7DD3D8]" />
                  <h3 className="font-bold text-lg">{item.title}</h3>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-sm text-gray-500">ينتهي: {item.expiry}</p>
                  <div className="bg-gray-100 px-3 py-1 rounded-lg">
                    <p className="font-medium">{item.code}</p>
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

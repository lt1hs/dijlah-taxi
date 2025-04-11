"use client"

import { useRouter } from "next/navigation"
import { ArrowLeft, Package, Gift, Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export default function Status() {
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
        <h1 className="text-white font-bold text-xl mx-auto">الحالة</h1>
      </div>

      {/* Status content */}
      <div className="p-4">
        <Card className="mb-4">
          <CardContent className="p-4">
            <div className="flex items-center justify-between mb-3">
              <Award className="h-8 w-8 text-[#F5B841]" />
              <div className="text-right">
                <h3 className="font-bold text-lg">المستوى الذهبي</h3>
                <p className="text-sm text-gray-500">عميل مميز</p>
              </div>
            </div>
            <Progress value={75} className="h-2 mb-2" />
            <div className="flex justify-between text-sm text-gray-500">
              <span>المستوى البلاتيني</span>
              <span>75/100 نقطة</span>
            </div>
          </CardContent>
        </Card>

        <h3 className="font-bold text-lg mb-3 text-right">المزايا الحالية</h3>
        <div className="space-y-3 mb-6">
          {[
            { title: "خصم 10% على جميع الرحلات", icon: <Gift className="h-5 w-5 text-[#7DD3D8]" /> },
            { title: "أولوية في ساعات الذروة", icon: <Award className="h-5 w-5 text-[#7DD3D8]" /> },
            { title: "دعم فني مميز", icon: <Package className="h-5 w-5 text-[#7DD3D8]" /> },
          ].map((item, index) => (
            <Card key={index}>
              <CardContent className="p-4 flex items-center justify-between">
                {item.icon}
                <span className="font-medium">{item.title}</span>
              </CardContent>
            </Card>
          ))}
        </div>

        <h3 className="font-bold text-lg mb-3 text-right">المزايا القادمة</h3>
        <div className="space-y-3">
          {[
            { title: "خصم 15% على جميع الرحلات", icon: <Gift className="h-5 w-5 text-gray-400" /> },
            { title: "رحلة مجانية شهرياً", icon: <Award className="h-5 w-5 text-gray-400" /> },
            { title: "خدمة كبار الشخصيات", icon: <Package className="h-5 w-5 text-gray-400" /> },
          ].map((item, index) => (
            <Card key={index} className="bg-gray-50">
              <CardContent className="p-4 flex items-center justify-between">
                {item.icon}
                <span className="font-medium text-gray-500">{item.title}</span>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

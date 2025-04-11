"use client"

import { useRouter } from "next/navigation"
import { ArrowLeft, CreditCard, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function Balance() {
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
        <h1 className="text-white font-bold text-xl mx-auto">الرصيد</h1>
      </div>

      {/* Balance info */}
      <div className="p-4">
        <Card className="mb-4">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <CreditCard className="h-8 w-8 text-[#7DD3D8]" />
              <div className="text-right">
                <p className="text-gray-500">رصيدك الحالي</p>
                <h2 className="text-3xl font-bold">25,000 د.ع</h2>
              </div>
            </div>
            <Button className="w-full bg-[#7DD3D8] hover:bg-[#6bc4c9]">
              <Plus className="h-5 w-5 mr-2" />
              إضافة رصيد
            </Button>
          </CardContent>
        </Card>

        <h3 className="font-bold text-lg mb-3">سجل المعاملات</h3>
        <div className="space-y-3">
          {[1, 2, 3, 4, 5].map((item) => (
            <Card key={item}>
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div className="text-right">
                    <p className="font-medium">رحلة من شارع المتنبي إلى شارع الرشيد</p>
                    <p className="text-sm text-gray-500">12 مايو 2023 - 14:30</p>
                  </div>
                  <p className="text-red-500 font-bold">-5,000 د.ع</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

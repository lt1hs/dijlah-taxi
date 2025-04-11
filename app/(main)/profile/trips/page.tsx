"use client"

import { useRouter } from "next/navigation"
import { ArrowLeft, Clock, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Trips() {
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
        <h1 className="text-white font-bold text-xl mx-auto">الرحلات</h1>
      </div>

      {/* Trips tabs */}
      <div className="p-4">
        <Tabs defaultValue="completed" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-4">
            <TabsTrigger value="completed">المكتملة</TabsTrigger>
            <TabsTrigger value="scheduled">المجدولة</TabsTrigger>
            <TabsTrigger value="canceled">الملغاة</TabsTrigger>
          </TabsList>
          <TabsContent value="completed">
            <div className="space-y-3">
              {[1, 2, 3, 4, 5].map((item) => (
                <Card key={item}>
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <p className="text-sm text-gray-500">12 مايو 2023 - 14:30</p>
                      <p className="font-bold text-[#7DD3D8]">5,000 د.ع</p>
                    </div>
                    <div className="flex items-center gap-2 mb-1">
                      <MapPin className="h-4 w-4 text-green-500" />
                      <p>شارع المتنبي</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-blue-500" />
                      <p>شارع الرشيد</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="scheduled">
            <div className="flex flex-col items-center justify-center py-8">
              <Clock className="h-16 w-16 text-gray-300 mb-4" />
              <p className="text-gray-500">لا توجد رحلات مجدولة</p>
            </div>
          </TabsContent>
          <TabsContent value="canceled">
            <div className="flex flex-col items-center justify-center py-8">
              <Clock className="h-16 w-16 text-gray-300 mb-4" />
              <p className="text-gray-500">لا توجد رحلات ملغاة</p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

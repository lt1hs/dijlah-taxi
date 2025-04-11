"use client"

import { useRouter } from "next/navigation"
import Image from "next/image"
import { ArrowLeft, Star, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function About() {
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
        <h1 className="text-white font-bold text-xl mx-auto">عن التطبيق</h1>
      </div>

      {/* About content */}
      <div className="p-4">
        <div className="flex flex-col items-center justify-center mb-6">
          <div className="relative w-24 h-24 mb-2">
            <Image src="/images/app-icon.png" alt="Dijlah Taxi" fill className="object-contain" />
          </div>
          <h2 className="text-xl font-bold">دجلة تاكسي</h2>
          <p className="text-gray-500">الإصدار 1.0.0</p>
        </div>

        <Card className="mb-4">
          <CardContent className="p-4 text-right">
            <h3 className="font-bold text-lg mb-2">عن دجلة تاكسي</h3>
            <p className="text-gray-700 mb-4">
              دجلة تاكسي هو تطبيق عراقي لخدمة توصيل سيارات الأجرة، يهدف إلى توفير وسيلة نقل آمنة وموثوقة وبأسعار معقولة
              لجميع المواطنين في العراق.
            </p>
            <p className="text-gray-700">
              تأسست الشركة في عام 2023 وتسعى لتقديم أفضل خدمة في مجال النقل باستخدام التكنولوجيا الحديثة وتوفير فرص عمل
              للسائقين العراقيين.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="p-4 text-right">
            <h3 className="font-bold text-lg mb-2">تواصل معنا</h3>
            <p className="text-gray-700 mb-1">البريد الإلكتروني: info@dijlah-taxi.com</p>
            <p className="text-gray-700 mb-1">الهاتف: +964-1111-1111</p>
            <p className="text-gray-700">العنوان: بغداد، العراق</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4 flex flex-col items-center justify-center">
            <p className="text-gray-700 mb-2">هل أعجبك التطبيق؟</p>
            <Button className="bg-[#7DD3D8] hover:bg-[#6bc4c9] mb-2">
              <Star className="h-5 w-5 mr-2 fill-yellow-400" />
              قيّم التطبيق
            </Button>
            <p className="text-gray-500 text-sm text-center">
              صنع بكل <Heart className="h-4 w-4 inline fill-red-500 text-red-500" /> في العراق
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

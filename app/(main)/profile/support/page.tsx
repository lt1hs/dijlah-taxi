"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { ArrowLeft, Send, MessageSquare, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"

export default function Support() {
  const router = useRouter()
  const [message, setMessage] = useState("")

  const handleBack = () => {
    router.push("/profile")
  }

  const sendMessage = () => {
    if (message.trim()) {
      // In a real app, this would send the message to a backend
      alert("تم إرسال رسالتك بنجاح")
      setMessage("")
    }
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="p-4 bg-[#1e3a8a] flex items-center">
        <Button variant="ghost" size="icon" className="text-white" onClick={handleBack}>
          <ArrowLeft className="h-6 w-6" />
        </Button>
        <h1 className="text-white font-bold text-xl mx-auto">الدعم الفني</h1>
      </div>

      {/* Support options */}
      <div className="p-4">
        <div className="flex gap-3 mb-6">
          <Card className="flex-1">
            <CardContent className="p-4 flex flex-col items-center justify-center">
              <Phone className="h-8 w-8 text-[#7DD3D8] mb-2" />
              <p className="font-medium">اتصل بنا</p>
              <p className="text-sm text-gray-500">+964-1111-1111</p>
            </CardContent>
          </Card>
          <Card className="flex-1">
            <CardContent className="p-4 flex flex-col items-center justify-center">
              <MessageSquare className="h-8 w-8 text-[#7DD3D8] mb-2" />
              <p className="font-medium">راسلنا</p>
              <p className="text-sm text-gray-500">support@dijlah.com</p>
            </CardContent>
          </Card>
        </div>

        <Card className="mb-4">
          <CardContent className="p-4">
            <h3 className="font-bold text-lg mb-3 text-right">أرسل رسالة</h3>
            <Textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="اكتب رسالتك هنا..."
              className="mb-3 min-h-[120px] text-right"
              dir="rtl"
            />
            <Button className="w-full bg-[#7DD3D8] hover:bg-[#6bc4c9]" onClick={sendMessage}>
              <Send className="h-5 w-5 ml-2" />
              إرسال
            </Button>
          </CardContent>
        </Card>

        <h3 className="font-bold text-lg mb-3 text-right">الأسئلة الشائعة</h3>
        <div className="space-y-3">
          {[
            {
              question: "كيف يمكنني إلغاء رحلة؟",
              answer: "يمكنك إلغاء الرحلة من خلال الضغط على زر الإلغاء في صفحة تفاصيل الرحلة.",
            },
            {
              question: "كيف يمكنني إضافة رصيد؟",
              answer: "يمكنك إضافة رصيد من خلال صفحة الرصيد واختيار طريقة الدفع المناسبة.",
            },
            {
              question: "هل يمكنني تغيير وجهتي أثناء الرحلة؟",
              answer: "نعم، يمكنك تغيير وجهتك أثناء الرحلة من خلال التواصل مع السائق.",
            },
          ].map((item, index) => (
            <Card key={index}>
              <CardContent className="p-4">
                <h4 className="font-medium text-right mb-2">{item.question}</h4>
                <p className="text-sm text-gray-500 text-right">{item.answer}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

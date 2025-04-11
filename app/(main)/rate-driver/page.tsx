"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { Star, Send } from "lucide-react"
import { Header } from "@/components/ui/header"
import { PageTransition } from "@/components/animations/page-transition"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function RateDriver() {
  const router = useRouter()
  const [rating, setRating] = useState(0)
  const [hoveredRating, setHoveredRating] = useState(0)
  const [feedback, setFeedback] = useState("")
  const [selectedTags, setSelectedTags] = useState<string[]>([])

  const handleRatingChange = (value: number) => {
    setRating(value)
  }

  const handleTagToggle = (tag: string) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter((t) => t !== tag))
    } else {
      setSelectedTags([...selectedTags, tag])
    }
  }

  const handleSubmit = () => {
    // In a real app, this would submit to a backend
    router.push("/raid-start")
  }

  const positiveTags = ["سائق لطيف", "قيادة آمنة", "سيارة نظيفة", "وصول سريع", "معرفة جيدة بالطرق"]
  const negativeTags = ["سائق غير لطيف", "قيادة غير آمنة", "سيارة غير نظيفة", "تأخر في الوصول", "لا يعرف الطرق"]

  return (
    <PageTransition className="min-h-screen bg-gray-50">
      <Header title="تقييم السائق" showBack />

      <div className="p-4">
        <div className="bg-white rounded-lg p-4 shadow-soft mb-6">
          <div className="flex items-center gap-4">
            <Avatar className="h-16 w-16">
              <AvatarImage src="/images/driver-avatar.png" alt="Driver" />
              <AvatarFallback>سائق</AvatarFallback>
            </Avatar>
            <div>
              <h2 className="font-bold text-xl">أحمد محمد</h2>
              <p className="text-gray-500">Toyota Camry - 22 D 70000</p>
              <div className="flex items-center mt-1">
                <div className="bg-gray-100 px-2 py-1 rounded-full text-xs flex items-center">
                  <Star className="h-3 w-3 fill-dijlah-yellow text-dijlah-yellow mr-1" />
                  4.8
                </div>
                <span className="text-xs text-gray-500 mr-2">500+ رحلة</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg p-4 shadow-soft mb-6">
          <h3 className="font-bold text-lg mb-4">كيف كانت رحلتك؟</h3>
          <div className="flex justify-center gap-2 mb-6">
            {[1, 2, 3, 4, 5].map((value) => (
              <motion.div
                key={value}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => handleRatingChange(value)}
                onMouseEnter={() => setHoveredRating(value)}
                onMouseLeave={() => setHoveredRating(0)}
              >
                <Star
                  className={`h-10 w-10 cursor-pointer ${
                    value <= (hoveredRating || rating) ? "fill-dijlah-yellow text-dijlah-yellow" : "text-gray-300"
                  }`}
                />
              </motion.div>
            ))}
          </div>
          <p className="text-center font-medium mb-4">
            {rating === 0
              ? "اختر تقييمك"
              : rating === 1
                ? "سيء جداً"
                : rating === 2
                  ? "سيء"
                  : rating === 3
                    ? "متوسط"
                    : rating === 4
                      ? "جيد"
                      : "ممتاز"}
          </p>
        </div>

        {rating > 0 && (
          <>
            <div className="bg-white rounded-lg p-4 shadow-soft mb-6">
              <h3 className="font-bold text-lg mb-4">
                {rating > 3 ? "ما الذي أعجبك في الرحلة؟" : "ما الذي لم يعجبك في الرحلة؟"}
              </h3>
              <div className="flex flex-wrap gap-2">
                {(rating > 3 ? positiveTags : negativeTags).map((tag, index) => (
                  <Button
                    key={index}
                    variant={selectedTags.includes(tag) ? "default" : "outline"}
                    className={
                      selectedTags.includes(tag)
                        ? "bg-dijlah-teal hover:bg-dijlah-teal/90"
                        : "hover:bg-dijlah-teal/10 hover:text-dijlah-teal hover:border-dijlah-teal"
                    }
                    onClick={() => handleTagToggle(tag)}
                  >
                    {tag}
                  </Button>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-lg p-4 shadow-soft mb-6">
              <h3 className="font-bold text-lg mb-4">أضف تعليقاً (اختياري)</h3>
              <Textarea
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                placeholder="اكتب تعليقك هنا..."
                className="min-h-[100px]"
              />
            </div>
          </>
        )}

        <Button
          className="w-full bg-dijlah-teal hover:bg-dijlah-teal/90"
          disabled={rating === 0}
          onClick={handleSubmit}
        >
          <Send className="h-4 w-4 mr-2" />
          إرسال التقييم
        </Button>
      </div>
    </PageTransition>
  )
}

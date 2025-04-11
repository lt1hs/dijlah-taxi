"use client"

import { useState } from "react"
import { Star, Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"

interface DestinationSearchProps {
  onFocus?: () => void
}

export function DestinationSearch({ onFocus }: DestinationSearchProps) {
  const [isFavorite, setIsFavorite] = useState(true)

  return (
    <div className="slide-up">
      <Card className="mx-4 mb-4 mt-2 rounded-xl shadow-strong pb-[23px]">
        <CardContent className="p-4">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <div onClick={() => setIsFavorite(!isFavorite)}>
                <Star className={`h-5 w-5 ${isFavorite ? "fill-dijlah-yellow text-dijlah-yellow" : "text-gray-400"}`} />
              </div>
              <span className="mr-2 font-medium">المنزل</span>
            </div>
            <div className="h-4 w-4 rounded-full bg-green-500 border-2 border-white animate-pulse"></div>
          </div>

          <div>
            <div className="relative">
              <Input
                className="text-right border-2 rounded-xl h-12 text-base pr-10"
                placeholder="الى اين تذهب؟"
                onFocus={onFocus}
                readOnly
              />
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

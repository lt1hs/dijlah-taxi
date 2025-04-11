"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { ChevronDown, MapPin, Building, Home } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const recentLocations = [
  {
    id: 1,
    name: "شارع المتنبي زقاق 12",
    description: "بغداد، الرصافة، شارع المتنبي",
    distance: "5.0",
  },
  {
    id: 2,
    name: "شارع المتنبي زقاق 12",
    description: "بغداد، الرصافة، شارع المتنبي",
    distance: "5.0",
  },
  {
    id: 3,
    name: "شارع المتنبي زقاق 12",
    description: "بغداد، الرصافة، شارع المتنبي",
    distance: "5.0",
  },
]

export default function SearchLocations() {
  const router = useRouter()
  const [searchQuery, setSearchQuery] = useState("")

  const handleLocationSelect = (locationId: number) => {
    router.push("/select-start")
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Search header */}
      <div className="p-4 bg-gray-100 flex items-center gap-2">
        <div className="flex-1 relative">
          <Input
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="الى اين تذهب؟"
            className="pr-10 pl-4 h-12 text-right rounded-full"
            dir="rtl"
          />
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
            <MapPin className="h-5 w-5 text-gray-400" />
          </div>
        </div>
        <Button variant="ghost" className="h-12 px-3 flex items-center gap-1">
          <span>المدينة</span>
          <ChevronDown className="h-4 w-4" />
        </Button>
      </div>

      {/* Saved locations */}
      <div className="flex justify-center gap-2 px-4 py-2 border-b">
        <Button
          variant="outline"
          className="flex-1 bg-[#f8c4b4] text-black border-[#f8c4b4] hover:bg-[#f8c4b4]/90 hover:text-black"
        >
          <Building className="mr-2 h-4 w-4" />
          <span>العمل</span>
          <span className="text-xs block">شارع الرشيد</span>
        </Button>

        <Button
          variant="outline"
          className="flex-1 bg-[#f8d57e] text-black border-[#f8d57e] hover:bg-[#f8d57e]/90 hover:text-black"
        >
          <Building className="mr-2 h-4 w-4" />
          <span>العمل</span>
          <span className="text-xs block">شارع الرشيد</span>
        </Button>

        <Button
          variant="outline"
          className="flex-1 bg-[#7dd3d8] text-black border-[#7dd3d8] hover:bg-[#7dd3d8]/90 hover:text-black"
        >
          <Home className="mr-2 h-4 w-4" />
          <span>المنزل</span>
          <span className="text-xs block">شارع المتنبي</span>
        </Button>
      </div>

      {/* Recent locations */}
      <div className="px-4 py-2">
        <div className="flex items-center justify-between mb-2">
          <h3 className="font-medium text-lg">الأماكن المقترحة</h3>
          <Button variant="ghost" size="sm" className="text-gray-500">
            <MapPin className="h-4 w-4 mr-1" />
          </Button>
        </div>

        <div className="space-y-4">
          {recentLocations.map((location) => (
            <div
              key={location.id}
              className="flex items-center gap-3 cursor-pointer"
              onClick={() => handleLocationSelect(location.id)}
            >
              <div className="flex items-center gap-1">
                <Star className="h-4 w-4 text-gray-400" />
                <span className="text-sm text-gray-500">{location.distance} KM</span>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-[#7DD3D8]" />
                  <div>
                    <h4 className="font-medium">{location.name}</h4>
                    <p className="text-sm text-gray-500">{location.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function Star(props: any) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  )
}

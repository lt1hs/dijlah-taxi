"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { MapPin, Navigation, Search, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function SelectDestinationLocation() {
  const router = useRouter()
  const [location, setLocation] = useState("شارع المتنبي")

  const handleConfirm = () => {
    router.push("/select-vehicle")
  }

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Map View */}
      <div className="h-full w-full bg-[#f2f2f2]">
        {/* Simulated map with streets */}
        <div className="h-full w-full relative">
          <div className="absolute inset-0 grid grid-cols-8 grid-rows-8">
            {Array.from({ length: 8 }).map((_, rowIndex) =>
              Array.from({ length: 8 }).map((_, colIndex) => (
                <div key={`${rowIndex}-${colIndex}`} className="border-[0.5px] border-gray-200" />
              )),
            )}
          </div>

          {/* Horizontal main roads */}
          <div className="absolute top-1/4 left-0 right-0 h-2 bg-white"></div>
          <div className="absolute top-3/4 left-0 right-0 h-3 bg-white"></div>

          {/* Vertical main roads */}
          <div className="absolute top-0 bottom-0 left-1/3 w-2 bg-white"></div>
          <div className="absolute top-0 bottom-0 right-1/4 w-2 bg-white"></div>

          {/* River */}
          <div className="absolute top-2/3 left-0 right-0 h-4 bg-[#a8dadc] opacity-50 transform -rotate-3"></div>

          {/* Cars on the map */}
          <div className="absolute top-1/4 left-1/4 w-6 h-3 bg-[#1e3a8a] rounded-sm transform rotate-45"></div>
          <div className="absolute top-1/4 right-1/4 w-6 h-3 bg-[#1e3a8a] rounded-sm transform -rotate-45"></div>
          <div className="absolute bottom-1/4 right-1/5 w-6 h-3 bg-[#1e3a8a] rounded-sm transform rotate-12"></div>
        </div>
      </div>

      {/* Location marker with pulse effect */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
        <div className="relative">
          <div className="absolute -top-1/2 -left-1/2 w-24 h-24 bg-blue-500 rounded-full opacity-10 animate-pulse"></div>
          <div className="absolute -top-1/2 -left-1/2 w-16 h-16 bg-blue-500 rounded-full opacity-20"></div>
          <div className="absolute -top-1/2 -left-1/2 w-8 h-8 bg-blue-600 rounded-full opacity-30"></div>
          <div className="relative w-4 h-4 bg-white rounded-full border-2 border-blue-600 flex items-center justify-center">
            <div className="w-1 h-1 bg-blue-600 rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Destination marker */}
      <div className="absolute top-[40%] left-[60%] z-10">
        <div className="w-6 h-6 bg-[#7DD3D8] rounded-full flex items-center justify-center">
          <div className="w-1 h-4 bg-[#1e3a8a] absolute top-6"></div>
        </div>
      </div>

      {/* Top navigation buttons */}
      <div className="absolute top-4 left-4 z-20">
        <Button variant="secondary" size="icon" className="h-10 w-10 rounded-md shadow-md">
          <Search className="h-5 w-5" />
        </Button>
      </div>

      <div className="absolute top-4 right-4 z-20">
        <Button variant="secondary" size="icon" className="h-10 w-10 rounded-md shadow-md">
          <Menu className="h-5 w-5" />
        </Button>
      </div>

      {/* Current location button */}
      <div className="absolute bottom-32 left-4 z-20">
        <Button variant="secondary" size="icon" className="h-10 w-10 rounded-md shadow-md">
          <Navigation className="h-5 w-5" />
        </Button>
      </div>

      {/* Bottom panel */}
      <div className="absolute bottom-[90px] left-0 right-0 z-30">
        <div className="mx-4 mb-4">
          <div className="bg-white p-4 pb-[23px] rounded-2xl shadow-lg">
            <div className="relative mb-4">
              <Input
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="pr-10 pl-4 h-12 text-right rounded-full"
                dir="rtl"
              />
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                <div className="h-4 w-4 rounded-full bg-green-500"></div>
              </div>
            </div>

            <Button
              onClick={handleConfirm}
              className="w-full bg-[#1e3a8a] hover:bg-[#1e3a8a]/90 text-white rounded-xl h-12 flex items-center justify-between px-4"
            >
              <div className="flex items-center">
                <MapPin className="h-5 w-5 mr-2" />
                <span>١٠ د.ع</span>
              </div>
              <span>تأكيد مقصد الرحلة</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

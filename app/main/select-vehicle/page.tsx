"use client"

import { useState } from "react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { ArrowLeft, Navigation, Plus, Search, Menu, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const vehicleOptions = [
  {
    id: 1,
    name: "اقتصادي",
    price: "10",
    image: "/images/car-economy-1.png",
  },
  {
    id: 2,
    name: "اقتصادي",
    price: "10",
    image: "/images/car-economy-2.png",
  },
  {
    id: 3,
    name: "اقتصادي",
    price: "10",
    image: "/images/car-economy-3.png",
  },
]

export default function SelectVehicle() {
  const router = useRouter()
  const [selectedVehicle, setSelectedVehicle] = useState(3)

  const handleConfirm = () => {
    router.push("/ride-details")
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
      <div className="absolute bottom-64 left-4 z-20">
        <Button variant="secondary" size="icon" className="h-10 w-10 rounded-md shadow-md">
          <Navigation className="h-5 w-5" />
        </Button>
      </div>

      {/* Bottom panel */}
      <div className="absolute bottom-[70px] left-0 right-0 z-30">
        <div className="bg-white p-4 rounded-t-xl shadow-lg mb-2">
          {/* Vehicle options */}
          <div className="flex gap-2 mb-4 overflow-x-auto pb-2">
            {vehicleOptions.map((vehicle) => (
              <Card
                key={vehicle.id}
                className={`flex-1 min-w-[100px] cursor-pointer ${
                  selectedVehicle === vehicle.id ? "bg-[#7DD3D8]" : "bg-white"
                }`}
                onClick={() => setSelectedVehicle(vehicle.id)}
              >
                <CardContent className="p-3 flex flex-col items-center">
                  <div className="w-16 h-10 relative mb-2">
                    <Image
                      src={vehicle.image || "/placeholder.svg"}
                      alt={vehicle.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <p className="text-center font-medium">{vehicle.name}</p>
                  <p className="text-center text-sm">
                    ${vehicle.price} <span className="text-xs">د.ع</span>
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Route information */}
          <div className="flex items-center mb-4">
            <div className="flex-1 flex items-center justify-end">
              <div className="flex items-center gap-2">
                <span className="text-right">شارع المتنبي</span>
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              </div>
            </div>
            <div className="mx-2 h-6 border-r border-gray-300"></div>
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-green-500"></div>
                <span>الى</span>
              </div>
            </div>
          </div>

          <div className="flex items-center mb-4">
            <div className="flex-1 text-right">
              <span>شارع الرشيد، الرصافة</span>
              <span className="text-xs text-gray-500 block">٢٢ دقيقة</span>
            </div>
            <div className="mx-2 h-6 border-r border-gray-300"></div>
            <div className="flex-1">
              <Button variant="outline" size="icon" className="h-8 w-8 rounded-md">
                <Plus className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Confirm button */}
          <Button
            onClick={handleConfirm}
            className="w-full bg-[#1e3a8a] hover:bg-[#1e3a8a]/90 text-white rounded-xl h-12 flex items-center justify-between px-4"
          >
            <div className="flex items-center">
              <span>${vehicleOptions[selectedVehicle - 1].price} د.ع</span>
            </div>
            <span>اسحب للطلب</span>
            <ArrowLeft className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  )
}

"use client"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { MessageSquare, Navigation, Search, Menu, Settings, Star, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function RideDetails() {
  const router = useRouter()

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
      <div className="absolute bottom-[90px] left-0 right-0 z-30">
        <div className="mx-4 mb-4">
          <div className="bg-white p-4 pb-[23px] rounded-2xl shadow-lg">
            {/* Driver and car info */}
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center gap-2">
                <div className="flex flex-col">
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 text-green-500 mr-1" />
                    <span className="text-sm text-green-500">في طريقة اليك</span>
                  </div>
                  <span className="text-sm text-gray-500">على بعد ٨ دقائق</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex flex-col items-end">
                  <span className="font-medium">اسم السائق</span>
                  <div className="flex items-center">
                    <span className="text-sm mr-1">5.0</span>
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  </div>
                </div>
                <div className="h-10 w-10 rounded-full overflow-hidden">
                  <Image src="/images/driver-avatar.png" alt="Driver" width={40} height={40} />
                </div>
              </div>
            </div>

            {/* Car details */}
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center gap-2">
                <div className="h-12 w-20 relative">
                  <Image src="/images/car-economy-1.png" alt="Car" fill className="object-contain" />
                </div>
                <div className="flex flex-col">
                  <span className="font-medium">نوع المركبة</span>
                  <span className="text-sm text-gray-500">اللون</span>
                </div>
              </div>
              <div className="flex flex-col items-end">
                <div className="bg-gray-100 px-3 py-1 rounded-lg">
                  <span className="font-medium">22 D 70000</span>
                </div>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex gap-3 mb-4">
              <Button 
                variant="outline" 
                className="h-12 rounded-xl flex-1 flex items-center justify-center gap-2 border-gray-200 hover:bg-gray-50"
              >
                <MessageSquare className="h-5 w-5" />
                <span>مراسلة</span>
              </Button>
              <Button 
                variant="outline" 
                className="h-12 rounded-xl flex-1 flex items-center justify-center gap-2 border-gray-200 hover:bg-gray-50"
              >
                <Settings className="h-5 w-5" />
                <span>اعدادات الرحلة</span>
              </Button>
            </div>

            {/* Route information */}
            <div className="bg-gray-50 p-4 rounded-xl">
              <div className="flex items-center mb-2">
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
                    <span>من</span>
                  </div>
                </div>
              </div>

              <div className="border-b border-dashed border-gray-300 my-2"></div>

              <div className="flex items-center">
                <div className="flex-1 text-right">
                  <span>شارع الرشيد، الرصافة</span>
                  <span className="text-xs text-gray-500 block">٢٢ دقيقة</span>
                </div>
                <div className="mx-2 h-6 border-r border-gray-300"></div>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <div className="h-3 w-3 rounded-full bg-blue-500"></div>
                    <span>الى</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Locate } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useMobile } from "@/hooks/use-mobile"

export function MapView() {
  const router = useRouter()
  const isMobile = useMobile()
  const [mapLoaded, setMapLoaded] = useState(false)

  useEffect(() => {
    // Simulate map loading
    const timer = setTimeout(() => {
      setMapLoaded(true)
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="relative h-full w-full bg-gray-100">
      {/* Map background */}
      {mapLoaded ? (
        <div className="h-full w-full bg-[#f2f2f2] fade-in">
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
      ) : (
        <div className="h-full w-full bg-gray-200 animate-pulse"></div>
      )}

      {/* Location marker with pulse effect */}
      {mapLoaded && (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 scale-in">
          <div className="relative">
            <div className="absolute -top-1/2 -left-1/2 w-24 h-24 bg-dijlah-teal rounded-full opacity-10 animate-pulse"></div>
            <div className="absolute -top-1/2 -left-1/2 w-16 h-16 bg-dijlah-teal rounded-full opacity-20"></div>
            <div className="absolute -top-1/2 -left-1/2 w-8 h-8 bg-dijlah-teal rounded-full opacity-30"></div>
            <div className="relative w-4 h-4 bg-white rounded-full border-2 border-dijlah-teal flex items-center justify-center">
              <div className="w-1 h-1 bg-dijlah-teal rounded-full"></div>
            </div>
          </div>
        </div>
      )}

      {/* Current location button */}
      <div className="absolute bottom-[280px] left-4 z-20 slide-right">
        <Button variant="secondary" size="icon" className="h-12 w-12 rounded-full shadow-soft">
          <Locate className="h-5 w-5" />
        </Button>
      </div>
    </div>
  )
}

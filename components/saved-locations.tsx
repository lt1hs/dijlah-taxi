"use client"

import { Building, Home, Briefcase } from "lucide-react"
import { Button } from "@/components/ui/button"

export function SavedLocations() {
  return (
    <div className="flex justify-center gap-2 px-4 py-2 slide-up">
      <div className="flex-1">
        <Button
          variant="outline"
          className="w-full bg-[#f8c4b4] text-black border-[#f8c4b4] hover:bg-[#f8c4b4]/90 hover:text-black shadow-soft"
        >
          <Building className="mr-2 h-4 w-4" />
          <div className="flex flex-col items-start">
            <span className="text-sm font-medium">العمل</span>
            <span className="text-xs">شارع الرشيد</span>
          </div>
        </Button>
      </div>

      <div className="flex-1">
        <Button
          variant="outline"
          className="w-full bg-dijlah-yellow text-black border-dijlah-yellow hover:bg-dijlah-yellow/90 hover:text-black shadow-soft"
        >
          <Briefcase className="mr-2 h-4 w-4" />
          <div className="flex flex-col items-start">
            <span className="text-sm font-medium">المكتب</span>
            <span className="text-xs">شارع الرشيد</span>
          </div>
        </Button>
      </div>

      <div className="flex-1">
        <Button
          variant="outline"
          className="w-full bg-dijlah-teal text-black border-dijlah-teal hover:bg-dijlah-teal/90 hover:text-black shadow-soft"
        >
          <Home className="mr-2 h-4 w-4" />
          <div className="flex flex-col items-start">
            <span className="text-sm font-medium">المنزل</span>
            <span className="text-xs">شارع المتنبي</span>
          </div>
        </Button>
      </div>
    </div>
  )
}

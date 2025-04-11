"use client"
import { useRouter } from "next/navigation"
import { MapView } from "@/components/map-view"
import { DestinationSearch } from "@/components/destination-search"
import { SavedLocations } from "@/components/saved-locations"

export default function RaidStart() {
  const router = useRouter()

  const handleSearch = () => {
    router.push("/search")
  }

  return (
    <div className="relative h-[100dvh] w-full overflow-hidden">
      <MapView />
      <div className="absolute bottom-[60px] left-0 right-0 z-10">
        <SavedLocations />
        <DestinationSearch onFocus={handleSearch} />
      </div>
    </div>
  )
}

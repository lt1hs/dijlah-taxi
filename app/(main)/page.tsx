"use client"

import { useRouter } from "next/navigation"
import { MapView } from "@/components/map-view"
import { DestinationSearch } from "@/components/destination-search"
import { SavedLocations } from "@/components/saved-locations"

export default function Home() {
  const router = useRouter()

  const handleSearch = () => {
    router.push("/search")
  }

  const handleMenu = () => {
    router.push("/settings")
  }

  return (
    <main className="relative h-screen w-full overflow-hidden">
      <MapView onSearchClick={handleSearch} onMenuClick={handleMenu} />
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <SavedLocations />
        <DestinationSearch onFocus={handleSearch} />
      </div>
    </main>
  )
}

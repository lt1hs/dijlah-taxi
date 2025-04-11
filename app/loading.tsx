import Image from "next/image"

export default function Loading() {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center bg-white">
      <div className="relative w-24 h-24 mb-4">
        <Image src="/images/logo-small.png" alt="Dijlah Taxi" fill className="object-contain animate-pulse" />
      </div>
      <p className="text-lg font-medium text-gray-700">جاري التحميل...</p>
    </div>
  )
}

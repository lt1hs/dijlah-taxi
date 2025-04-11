import type { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "دجلة تاكسي | Dijlah Taxi",
    short_name: "دجلة تاكسي",
    description: "خدمة توصيل سيارات الأجرة في العراق",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#F5B841",
    icons: [
      {
        src: "/images/app-icon.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/images/app-icon.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  }
}

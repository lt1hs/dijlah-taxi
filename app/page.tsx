import { redirect } from "next/navigation"

export default function RootPage() {
  // For new users, redirect to splash screen
  redirect("/splash")
}

import { redirect } from "next/navigation"

export default function NewsRedirect() {
  // Redirect top-level /news to default locale (en) news page
  redirect("/en/news")
}

"use client"
import * as React from "react"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
export function LanguageSelect() {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const router = useRouter()
  const current = (() => {
    const parts = pathname?.split("/") || [""]
    return parts[1] === "ru" ? "ru" : "en"
  })()
  const handle = (lang: string) => {
    const parts = pathname?.split("/") || [""]
    let rest = ""
    if (parts.length > 2) rest = parts.slice(2).join("/")
    const search = searchParams ? `?${searchParams.toString()}` : ""
    const newPath = `/${lang}${rest ? `/${rest}` : ""}${search}`
    router.push(newPath)
  }
  return (
    <select
      value={current}
      onChange={(e) => handle(e.target.value)}
      className="rounded-md text-gray-600 dark:text-white border px-3 py-2 text-sm"
      aria-label="Select language"
    >
      <option value="en">EN</option>
      <option value="ru">RU</option>
    </select>
  )
}
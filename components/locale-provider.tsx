"use client"
import * as React from "react"
import en from "@/locales/en.json"
import ru from "@/locales/ru.json"

type Locale = "en" | "ru"

const messages: Record<Locale, Record<string, string>> = {
  en,
  ru,
}

const LocaleContext = React.createContext<{
  locale: Locale
  setLocale: (l: Locale) => void
  t: (key: string) => string
} | null>(null)

export function LocaleProvider({ children, initialLocale }: { children: React.ReactNode; initialLocale?: Locale }) {
  const [locale, setLocale] = React.useState<Locale>(() => {
    if (initialLocale) return initialLocale
    if (typeof window === "undefined") return "en"
    const saved = localStorage.getItem("locale")
    if (saved === "ru") return "ru"
    const nav = navigator.language || "en"
    return nav.startsWith("ru") ? "ru" : "en"
  })

  React.useEffect(() => {
    try {
      localStorage.setItem("locale", locale)
    } catch {}
    if (typeof document !== "undefined") document.documentElement.lang = locale
  }, [locale])

  const t = (key: string) => {
    return messages[locale][key] ?? key
  }

  return (
    <LocaleContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LocaleContext.Provider>
  )
}

export function useLocale() {
  const ctx = React.useContext(LocaleContext)
  if (!ctx) throw new Error("useLocale must be used within LocaleProvider")
  return ctx
}

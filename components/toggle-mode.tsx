"use client"
import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
export function ModeToggle() {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)
  React.useEffect(() => {
    setMounted(true)
  }, [])
  const isDark = mounted && resolvedTheme === "dark"
  const toggle = () => setTheme(isDark ? "light" : "dark")
  return (
    <button
      onClick={toggle}
      {...(mounted ? { "aria-pressed": isDark } : {})}
      title="Toggle theme"
      className="relative inline-flex h-10 w-18 items-center rounded-full border px-1 transition-colors"
    >
      <span className={`absolute left-2 ${mounted && isDark ? "text-zinc-200" : "text-zinc-200"}`}>
        <Sun className="h-4 w-4" />
      </span>
      <span className={`absolute right-1 ${mounted && isDark ? "text-zinc-50" : "text-zinc-400"}`}>
        <Moon className="h-4 w-4" />
      </span>
      <span
        className={`relative inline-block h-8 w-8 transform rounded-full bg-gray-500 transition-transform ${mounted && isDark ? "translate-x-8 bg-black" : "translate-x-0 bg-black"}`}
      />
    </button>
  )
}
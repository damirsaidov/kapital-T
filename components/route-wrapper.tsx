"use client"
import * as React from "react"
import { ThemeProvider } from "./theme-provider"
import { LocaleProvider } from "./locale-provider"
import NavBar from "./navbar"

export default function RouteWrapper({ children, locale }: { children: React.ReactNode; locale: "en" | "ru" }) {
  return (
    <ThemeProvider>
      <LocaleProvider initialLocale={locale}>
        <NavBar />
        {children}
      </LocaleProvider>
    </ThemeProvider>
  )
}

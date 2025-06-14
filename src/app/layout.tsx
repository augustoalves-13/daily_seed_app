import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "next-themes"
import AppContextProvider from "@/context/AppContext"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Daily Seed - Versículos Diários",
  description: "Plante uma semente de fé todos os dias com versículos bíblicos inspiradores",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={inter.className}>
        <AppContextProvider>
          <ThemeProvider attribute="data-theme" defaultTheme="light" enableSystem disableTransitionOnChange>
            {children}
          </ThemeProvider>
        </AppContextProvider>
      </body>
    </html>
  )
}

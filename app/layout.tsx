import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'FridgeBuddy',
  description: 'Your smart kitchen companion',
}

// Client wrapper component
function Providers({ children }: { children: React.ReactNode }) {
  "use client"
  
  const { LanguageProvider } = require('@/lib/languageContext')
  const { SettingsProvider } = require("@/lib/settingsContext")
  const { InventoryProvider } = require("@/lib/inventoryContext")
  const { MealPlanProvider } = require("@/lib/mealPlanContext")

  return (
    <SettingsProvider>
      <LanguageProvider>
        <InventoryProvider>
          <MealPlanProvider>
            {children}
          </MealPlanProvider>
        </InventoryProvider>
      </LanguageProvider>
    </SettingsProvider>
  )
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}

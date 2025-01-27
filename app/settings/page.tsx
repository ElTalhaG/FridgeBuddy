"use client"

import { Layout } from "@/components/layout"
import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { useState, useEffect } from "react"
import { Bell, Moon, Globe, LogOut } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface Settings {
  notifications: boolean
  darkMode: boolean
  language: "da" | "en"
}

const translations = {
  da: {
    settings: "Indstillinger",
    notifications: "Notifikationer",
    notificationsDesc: "Få påmindelser om udløbsdatoer",
    darkMode: "Mørk tilstand",
    darkModeDesc: "Skift mellem lys og mørk tilstand",
    language: "Sprog",
    languageDesc: "Vælg dit foretrukne sprog",
    statistics: "Statistik",
    reducedWaste: "Reduceret Madspild",
    savedDishes: "Gemte Retter",
    logout: "Log Ud",
  },
  en: {
    settings: "Settings",
    notifications: "Notifications",
    notificationsDesc: "Get reminders about expiry dates",
    darkMode: "Dark Mode",
    darkModeDesc: "Switch between light and dark mode",
    language: "Language",
    languageDesc: "Choose your preferred language",
    statistics: "Statistics",
    reducedWaste: "Reduced Food Waste",
    savedDishes: "Saved Dishes",
    logout: "Log Out",
  },
}

export default function SettingsPage() {
  const [settings, setSettings] = useState<Settings>({
    notifications: true,
    darkMode: false,
    language: "da",
  })

  useEffect(() => {
    const root = window.document.documentElement
    if (settings.darkMode) {
      root.classList.add("dark")
    } else {
      root.classList.remove("dark")
    }
  }, [settings.darkMode])

  const t = translations[settings.language]

  const toggleDarkMode = () => {
    setSettings((prev) => ({ ...prev, darkMode: !prev.darkMode }))
  }

  const handleLanguageChange = (value: "da" | "en") => {
    setSettings((prev) => ({ ...prev, language: value }))
  }

  const handleLogout = () => {
    // Implement logout logic here
    console.log("Logging out...")
  }

  return (
    <Layout activeTab="settings">
      <Header title={t.settings} />

      <div className="p-4 space-y-6">
        <Card className="p-4 space-y-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Bell className="text-gray-500" />
              <div>
                <p className="font-medium">{t.notifications}</p>
                <p className="text-sm text-gray-500">{t.notificationsDesc}</p>
              </div>
            </div>
            <Switch
              checked={settings.notifications}
              onCheckedChange={(checked) => setSettings((prev) => ({ ...prev, notifications: checked }))}
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Moon className="text-gray-500" />
              <div>
                <p className="font-medium">{t.darkMode}</p>
                <p className="text-sm text-gray-500">{t.darkModeDesc}</p>
              </div>
            </div>
            <Switch checked={settings.darkMode} onCheckedChange={toggleDarkMode} />
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Globe className="text-gray-500" />
              <div>
                <p className="font-medium">{t.language}</p>
                <p className="text-sm text-gray-500">{t.languageDesc}</p>
              </div>
            </div>
            <Select value={settings.language} onValueChange={handleLanguageChange}>
              <SelectTrigger className="w-32">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="da">Dansk</SelectItem>
                <SelectItem value="en">English</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </Card>

        <Card className="p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">{t.statistics}</p>
              <div className="flex gap-8 mt-2">
                <div>
                  <p className="text-2xl font-bold">25%</p>
                  <p className="text-sm text-gray-500">{t.reducedWaste}</p>
                </div>
                <div>
                  <p className="text-2xl font-bold">150</p>
                  <p className="text-sm text-gray-500">{t.savedDishes}</p>
                </div>
              </div>
            </div>
          </div>
        </Card>

        <Button variant="destructive" className="w-full" onClick={handleLogout}>
          <LogOut className="mr-2 h-4 w-4" />
          {t.logout}
        </Button>
      </div>
    </Layout>
  )
}


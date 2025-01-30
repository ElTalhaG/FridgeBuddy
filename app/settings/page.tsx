"use client"

import { Layout } from "@/components/layout"
import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { useState, useEffect } from "react"
import { Bell, Moon, Globe, LogOut } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useLanguage } from "@/lib/languageContext"

interface Settings {
  notifications: boolean
  darkMode: boolean
}

export default function SettingsPage() {
  const { t, language, setLanguage } = useLanguage()
  const [settings, setSettings] = useState<Settings>({
    notifications: true,
    darkMode: false,
  })

  useEffect(() => {
    const root = window.document.documentElement
    if (settings.darkMode) {
      root.classList.add("dark")
    } else {
      root.classList.remove("dark")
    }
  }, [settings.darkMode])

  const toggleDarkMode = () => {
    setSettings((prev) => ({ ...prev, darkMode: !prev.darkMode }))
  }

  const handleLanguageChange = (value: "da" | "en") => {
    setLanguage(value)
  }

  const handleLogout = () => {
    // Implement logout logic here
    console.log("Logging out...")
  }

  return (
    <Layout activeTab="settings">
      <Header title={t('settings.title')} />

      <div className="p-4 space-y-6">
        <Card className="p-4 space-y-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Bell className="text-gray-500" />
              <div>
                <p className="font-medium">{t('settings.notifications')}</p>
                <p className="text-sm text-gray-500">{t('settings.notificationsDesc')}</p>
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
                <p className="font-medium">{t('settings.darkMode')}</p>
                <p className="text-sm text-gray-500">{t('settings.darkModeDesc')}</p>
              </div>
            </div>
            <Switch checked={settings.darkMode} onCheckedChange={toggleDarkMode} />
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Globe className="text-gray-500" />
              <div>
                <p className="font-medium">{t('settings.language')}</p>
                <p className="text-sm text-gray-500">{t('settings.languageDesc')}</p>
              </div>
            </div>
            <Select value={language} onValueChange={handleLanguageChange}>
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
              <p className="font-medium">{t('settings.statistics')}</p>
              <div className="flex gap-8 mt-2">
                <div>
                  <p className="text-2xl font-bold">25%</p>
                  <p className="text-sm text-gray-500">{t('settings.reducedWaste')}</p>
                </div>
                <div>
                  <p className="text-2xl font-bold">150</p>
                  <p className="text-sm text-gray-500">{t('settings.savedDishes')}</p>
                </div>
              </div>
            </div>
          </div>
        </Card>

        <Button variant="destructive" className="w-full" onClick={handleLogout}>
          <LogOut className="mr-2 h-4 w-4" />
          {t('settings.logout')}
        </Button>
      </div>
    </Layout>
  )
}


"use client"

import { createContext, useContext, useEffect, useState } from 'react'

interface Settings {
  darkMode: boolean
  notifications: boolean
  language: 'da' | 'en'
}

interface SettingsContextType {
  settings: Settings
  updateSettings: (key: keyof Settings, value: any) => void
}

const defaultSettings: Settings = {
  darkMode: false,
  notifications: true,
  language: 'da'
}

const STORAGE_KEY = 'fridgebuddy_settings'

const SettingsContext = createContext<SettingsContextType | undefined>(undefined)

export function SettingsProvider({ children }: { children: React.ReactNode }) {
  const [settings, setSettings] = useState<Settings>(defaultSettings)
  const [isInitialized, setIsInitialized] = useState(false)

  // Load settings on mount
  useEffect(() => {
    const savedSettings = localStorage.getItem(STORAGE_KEY)
    if (savedSettings) {
      try {
        const parsed = JSON.parse(savedSettings)
        setSettings(parsed)
        // Apply dark mode
        if (parsed.darkMode) {
          document.documentElement.classList.add('dark')
        } else {
          document.documentElement.classList.remove('dark')
        }
      } catch (error) {
        console.error('Error loading settings:', error)
      }
    }
    setIsInitialized(true)
  }, [])

  // Save settings whenever they change
  useEffect(() => {
    if (isInitialized) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(settings))
      // Apply dark mode
      if (settings.darkMode) {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }
    }
  }, [settings, isInitialized])

  const updateSettings = (key: keyof Settings, value: any) => {
    setSettings(prev => ({ ...prev, [key]: value }))
  }

  return (
    <SettingsContext.Provider value={{ settings, updateSettings }}>
      {children}
    </SettingsContext.Provider>
  )
}

export function useSettings() {
  const context = useContext(SettingsContext)
  if (context === undefined) {
    throw new Error('useSettings must be used within a SettingsProvider')
  }
  return context
} 
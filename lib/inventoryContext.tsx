"use client"

import { createContext, useContext, useEffect, useState } from 'react'

interface Item {
  id: string
  nameDA: string
  nameEN: string
  emoji: string
  quantity: string
  category: "fresh" | "frozen"
  expiryDate?: string
}

interface InventoryContextType {
  items: Item[]
  addItem: (item: Omit<Item, 'id'>) => void
  deleteItem: (id: string) => void
  updateItem: (id: string, updates: Partial<Item>) => void
}

const STORAGE_KEY = 'fridgebuddy_inventory'

const InventoryContext = createContext<InventoryContextType | undefined>(undefined)

export function InventoryProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<Item[]>([])
  const [isInitialized, setIsInitialized] = useState(false)

  // Load items on mount
  useEffect(() => {
    const savedItems = localStorage.getItem(STORAGE_KEY)
    if (savedItems) {
      try {
        setItems(JSON.parse(savedItems))
      } catch (error) {
        console.error('Error loading inventory items:', error)
      }
    }
    setIsInitialized(true)
  }, [])

  // Save items whenever they change
  useEffect(() => {
    if (isInitialized) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
    }
  }, [items, isInitialized])

  const addItem = (item: Omit<Item, 'id'>) => {
    const newItem = {
      ...item,
      id: Math.random().toString(),
    }
    setItems(prev => [...prev, newItem])
  }

  const deleteItem = (id: string) => {
    setItems(prev => prev.filter(item => item.id !== id))
  }

  const updateItem = (id: string, updates: Partial<Item>) => {
    setItems(prev => prev.map(item => 
      item.id === id ? { ...item, ...updates } : item
    ))
  }

  return (
    <InventoryContext.Provider value={{ items, addItem, deleteItem, updateItem }}>
      {children}
    </InventoryContext.Provider>
  )
}

export function useInventory() {
  const context = useContext(InventoryContext)
  if (context === undefined) {
    throw new Error('useInventory must be used within an InventoryProvider')
  }
  return context
} 
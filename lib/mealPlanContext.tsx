"use client"

import { createContext, useContext, useEffect, useState } from 'react'

interface MealPlan {
  id: string
  date: string
  type: "breakfast" | "lunch" | "snack" | "dinner"
  time: string
  title: string
  completed: boolean
}

interface MealPlanContextType {
  meals: MealPlan[]
  addMeal: (meal: Omit<MealPlan, 'id'>) => void
  deleteMeal: (id: string) => void
  updateMeal: (id: string, updates: Partial<MealPlan>) => void
  toggleMealCompleted: (id: string) => void
}

const STORAGE_KEY = 'fridgebuddy_mealplans'

const MealPlanContext = createContext<MealPlanContextType | undefined>(undefined)

export function MealPlanProvider({ children }: { children: React.ReactNode }) {
  const [meals, setMeals] = useState<MealPlan[]>([])
  const [isInitialized, setIsInitialized] = useState(false)

  // Load meals on mount
  useEffect(() => {
    const savedMeals = localStorage.getItem(STORAGE_KEY)
    if (savedMeals) {
      try {
        setMeals(JSON.parse(savedMeals))
      } catch (error) {
        console.error('Error loading meal plans:', error)
      }
    }
    setIsInitialized(true)
  }, [])

  // Save meals whenever they change
  useEffect(() => {
    if (isInitialized) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(meals))
    }
  }, [meals, isInitialized])

  const addMeal = (meal: Omit<MealPlan, 'id'>) => {
    const newMeal = {
      ...meal,
      id: Math.random().toString(),
    }
    setMeals(prev => [...prev, newMeal])
  }

  const deleteMeal = (id: string) => {
    setMeals(prev => prev.filter(meal => meal.id !== id))
  }

  const updateMeal = (id: string, updates: Partial<MealPlan>) => {
    setMeals(prev => prev.map(meal => 
      meal.id === id ? { ...meal, ...updates } : meal
    ))
  }

  const toggleMealCompleted = (id: string) => {
    setMeals(prev => prev.map(meal => 
      meal.id === id ? { ...meal, completed: !meal.completed } : meal
    ))
  }

  return (
    <MealPlanContext.Provider value={{ meals, addMeal, deleteMeal, updateMeal, toggleMealCompleted }}>
      {children}
    </MealPlanContext.Provider>
  )
}

export function useMealPlan() {
  const context = useContext(MealPlanContext)
  if (context === undefined) {
    throw new Error('useMealPlan must be used within a MealPlanProvider')
  }
  return context
} 
"use client"

import { Layout } from "@/components/layout"
import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { useState } from "react"
import { Plus, Trash, ChevronLeft, ChevronRight } from "lucide-react"
import { format, addDays, subDays } from "date-fns"
import { da } from "date-fns/locale"
import type { MealPlan } from "@/types"

export default function PlannerPage() {
  const [date, setDate] = useState(new Date())
  const [mealPlans, setMealPlans] = useState<MealPlan[]>([])
  const [newMealTitle, setNewMealTitle] = useState("")

  const handlePreviousDay = () => {
    setDate((prevDate) => subDays(prevDate, 1))
  }

  const handleNextDay = () => {
    setDate((prevDate) => addDays(prevDate, 1))
  }

  const handleAddMeal = () => {
    if (newMealTitle.trim()) {
      const newMeal: MealPlan = {
        id: Math.random().toString(),
        date: format(date, "yyyy-MM-dd"),
        recipe: {
          id: Math.random().toString(),
          title: newMealTitle,
          ingredients: [],
          instructions: [],
          servings: 4,
        },
        completed: false,
      }
      setMealPlans((prev) => [...prev, newMeal])
      setNewMealTitle("")
    }
  }

  const handleDeleteMeal = (mealId: string) => {
    setMealPlans((prev) => prev.filter((meal) => meal.id !== mealId))
  }

  const toggleMealCompleted = (mealId: string) => {
    setMealPlans((prev) => prev.map((meal) => (meal.id === mealId ? { ...meal, completed: !meal.completed } : meal)))
  }

  return (
    <Layout activeTab="planner">
      <Header title="Planlæg Måltid" />

      <div className="p-4 space-y-6">
        <Card className="p-4">
          <div className="flex justify-between items-center mb-6">
            <Button variant="outline" size="icon" onClick={handlePreviousDay}>
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <h2 className="text-lg font-semibold">{format(date, "EEEE d. MMMM yyyy", { locale: da })}</h2>
            <Button variant="outline" size="icon" onClick={handleNextDay}>
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>

          <div className="space-y-4 mb-6">
            {mealPlans
              .filter((meal) => meal.date === format(date, "yyyy-MM-dd"))
              .map((meal) => (
                <Card
                  key={meal.id}
                  className={`p-4 flex items-center justify-between transition-colors ${
                    meal.completed ? "bg-green-50 dark:bg-green-900" : ""
                  }`}
                >
                  <div className="flex-1 cursor-pointer" onClick={() => toggleMealCompleted(meal.id)}>
                    <p className="font-medium">{meal.recipe.title}</p>
                    {meal.completed && <span className="text-green-600 dark:text-green-400 text-sm">✓ Færdig</span>}
                  </div>
                  <Button variant="ghost" size="icon" onClick={() => handleDeleteMeal(meal.id)}>
                    <Trash className="h-4 w-4" />
                  </Button>
                </Card>
              ))}
          </div>

          <div className="flex gap-2">
            <Input
              placeholder="Tilføj nyt måltid"
              value={newMealTitle}
              onChange={(e) => setNewMealTitle(e.target.value)}
              className="flex-1"
            />
            <Button onClick={handleAddMeal}>
              <Plus className="h-4 w-4 mr-2" />
              Tilføj
            </Button>
          </div>
        </Card>
      </div>
    </Layout>
  )
}


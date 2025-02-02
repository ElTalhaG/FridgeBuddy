"use client"

import { Layout } from "@/components/layout"
import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useState } from "react"
import { Plus, Trash, ChevronLeft, ChevronRight, Clock } from "lucide-react"
import { format, addDays, subDays } from "date-fns"
import { da, enUS } from "date-fns/locale"
import { useLanguage } from "@/lib/languageContext"
import { useMealPlan } from "@/lib/mealPlanContext"
import { suggestEmoji } from "@/lib/emojiUtils"

export default function PlannerPage() {
  const { t, language } = useLanguage()
  const { meals, addMeal, deleteMeal, toggleMealCompleted } = useMealPlan()
  const [date, setDate] = useState(new Date())
  const [newMealTitle, setNewMealTitle] = useState("")
  const [selectedMealType, setSelectedMealType] = useState<"breakfast" | "lunch" | "snack" | "dinner">("breakfast")
  const [selectedTime, setSelectedTime] = useState("08:00")

  const handlePreviousDay = () => {
    setDate((prevDate) => subDays(prevDate, 1))
  }

  const handleNextDay = () => {
    setDate((prevDate) => addDays(prevDate, 1))
  }

  const handleAddMeal = () => {
    if (newMealTitle.trim()) {
      addMeal({
        date: format(date, "yyyy-MM-dd"),
        type: selectedMealType,
        time: selectedTime,
        title: newMealTitle,
        completed: false,
      })
      setNewMealTitle("")
    }
  }

  const handleDeleteMeal = (mealId: string) => {
    if (window.confirm(t('planner.confirmDelete'))) {
      deleteMeal(mealId)
    }
  }

  const getDefaultTimeForMealType = (type: "breakfast" | "lunch" | "snack" | "dinner") => {
    switch (type) {
      case "breakfast": return "08:00"
      case "lunch": return "12:00"
      case "snack": return "15:00"
      case "dinner": return "18:00"
    }
  }

  const handleMealTypeChange = (value: "breakfast" | "lunch" | "snack" | "dinner") => {
    setSelectedMealType(value)
    setSelectedTime(getDefaultTimeForMealType(value))
  }

  const filteredAndSortedMeals = meals
    .filter((meal) => meal.date === format(date, "yyyy-MM-dd"))
    .sort((a, b) => a.time.localeCompare(b.time))

  return (
    <Layout activeTab="planner">
      <Header title={t('planner.title')} />

      <div className="p-4 space-y-6">
        <Card className="p-4">
          <div className="flex justify-between items-center mb-6">
            <Button variant="outline" size="icon" onClick={handlePreviousDay}>
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <h2 className="text-lg font-semibold">
              {format(date, "EEEE d. MMMM yyyy", { locale: language === 'da' ? da : enUS })}
            </h2>
            <Button variant="outline" size="icon" onClick={handleNextDay}>
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>

          <div className="space-y-6 mb-6">
            {["breakfast", "lunch", "snack", "dinner"].map((type) => (
              <div key={type} className="space-y-2">
                <h3 className="font-medium capitalize">{t(`planner.mealTypes.${type}`)}</h3>
                <div className="space-y-2">
                  {filteredAndSortedMeals
                    .filter((meal) => meal.type === type)
                    .map((meal) => (
                      <Card
                        key={meal.id}
                        className={`p-4 flex items-center justify-between transition-colors ${
                          meal.completed ? "bg-green-50 dark:bg-green-900" : ""
                        }`}
                      >
                        <div className="flex-1 cursor-pointer" onClick={() => toggleMealCompleted(meal.id)}>
                          <div className="flex items-center gap-2">
                            <Clock className="h-4 w-4 text-gray-400" />
                            <span className="text-sm text-gray-500">{meal.time}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-xl">{suggestEmoji(meal.title, language)}</span>
                            <p className="font-medium">{meal.title}</p>
                          </div>
                          {meal.completed && (
                            <span className="text-green-600 dark:text-green-400 text-sm">
                              ✓ {t('planner.completed')}
                            </span>
                          )}
                        </div>
                        <Button variant="ghost" size="icon" onClick={() => handleDeleteMeal(meal.id)}>
                          <Trash className="h-4 w-4" />
                        </Button>
                      </Card>
                    ))}
                </div>
              </div>
            ))}
          </div>

          <div className="space-y-4">
            <div className="flex gap-4">
              <Select
                value={selectedMealType}
                onValueChange={(value: "breakfast" | "lunch" | "snack" | "dinner") => handleMealTypeChange(value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder={t('planner.selectMealType')} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="breakfast">{t('planner.mealTypes.breakfast')}</SelectItem>
                  <SelectItem value="lunch">{t('planner.mealTypes.lunch')}</SelectItem>
                  <SelectItem value="snack">{t('planner.mealTypes.snack')}</SelectItem>
                  <SelectItem value="dinner">{t('planner.mealTypes.dinner')}</SelectItem>
                </SelectContent>
              </Select>
              <Input
                type="time"
                value={selectedTime}
                onChange={(e) => setSelectedTime(e.target.value)}
                className="w-32"
              />
            </div>
            <div className="flex gap-2">
              <div className="flex-1 relative">
                <Input
                  placeholder={t('planner.addMeal')}
                  value={newMealTitle}
                  onChange={(e) => setNewMealTitle(e.target.value)}
                  className="pl-10"
                />
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-lg">
                  {suggestEmoji(newMealTitle, language)}
                </span>
              </div>
              <Button onClick={handleAddMeal}>
                <Plus className="h-4 w-4 mr-2" />
                {t('planner.addMeal')}
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </Layout>
  )
}


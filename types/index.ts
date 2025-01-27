export interface Recipe {
  id: string
  title: string
  ingredients: string[]
  instructions: string[]
  servings: number
}

export interface Settings {
  notifications: boolean
  darkMode: boolean
  language: string
  email: string
}

export interface MealPlan {
  id: string
  date: string
  recipe: Recipe
  completed: boolean
}


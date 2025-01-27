"use client"

import { useState } from "react"
import { Layout } from "@/components/layout"
import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Loader2 } from "lucide-react"

const dummyRecipes = [
  { id: 1, name: "Pasta Carbonara", ingredients: ["Pasta", "Æg", "Bacon", "Parmesan"] },
  { id: 2, name: "Kylling Curry", ingredients: ["Kylling", "Kokosmælk", "Karry", "Ris"] },
  { id: 3, name: "Vegetar Lasagne", ingredients: ["Lasagneplader", "Spinat", "Ricotta", "Tomatsauce"] },
  { id: 4, name: "Laksefrikadeller", ingredients: ["Laks", "Dild", "Citron", "Kartofler"] },
]

export default function MealWheelPage() {
  const [spinning, setSpinning] = useState(false)
  const [selectedRecipe, setSelectedRecipe] = useState<(typeof dummyRecipes)[0] | null>(null)

  const spinWheel = () => {
    setSpinning(true)
    setSelectedRecipe(null)
    setTimeout(() => {
      const randomRecipe = dummyRecipes[Math.floor(Math.random() * dummyRecipes.length)]
      setSelectedRecipe(randomRecipe)
      setSpinning(false)
    }, 2000)
  }

  return (
    <Layout>
      <Header title="Måltids-hjulet" />
      <div className="p-4 space-y-4">
        <Card className="p-4 flex flex-col items-center">
          <div className="w-64 h-64 rounded-full bg-gradient-to-r from-blue-500 to-green-500 flex items-center justify-center mb-4">
            {spinning ? (
              <Loader2 className="w-16 h-16 text-white animate-spin" />
            ) : (
              <span className="text-white text-2xl font-bold">Spin!</span>
            )}
          </div>
          <Button onClick={spinWheel} disabled={spinning}>
            {spinning ? "Spinner..." : "Drej Hjulet"}
          </Button>
        </Card>
        {selectedRecipe && (
          <Card className="p-4">
            <h2 className="font-bold text-xl mb-2">{selectedRecipe.name}</h2>
            <h3 className="font-semibold mb-1">Ingredienser:</h3>
            <ul className="list-disc pl-5">
              {selectedRecipe.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
          </Card>
        )}
      </div>
    </Layout>
  )
}


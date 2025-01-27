"use client"

import { Layout } from "@/components/layout"
import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Snowflake, Leaf, Camera, Share2, RefreshCw, Tag, Heart } from "lucide-react"
import { useRouter } from "next/navigation"
import { useState } from "react"

interface Item {
  id: string
  name: string
  emoji: string
  expiryDate: string
  category: "fresh" | "frozen"
}

const initialItems: Item[] = [
  { id: "1", name: "Tomater", emoji: "🍅", expiryDate: "15/01/25", category: "fresh" },
  { id: "2", name: "Brød", emoji: "🍞", expiryDate: "15/01/25", category: "fresh" },
  { id: "3", name: "Kylling", emoji: "🍗", expiryDate: "20/01/25", category: "frozen" },
  { id: "4", name: "Gulerødder", emoji: "🥕", expiryDate: "18/01/25", category: "fresh" },
  { id: "5", name: "Is", emoji: "🍦", expiryDate: "30/03/25", category: "frozen" },
]

export default function HomePage() {
  const router = useRouter()
  const [activeCategory, setActiveCategory] = useState<"fresh" | "frozen" | null>(null)
  const [items, setItems] = useState<Item[]>(initialItems)

  const handleCategoryClick = (category: "fresh" | "frozen") => {
    setActiveCategory(category === activeCategory ? null : category)
  }

  const filteredItems = activeCategory ? items.filter((item) => item.category === activeCategory) : items

  return (
    <Layout activeTab="home">
      <Header title="Køleskabskammeraten" />

      <div className="p-4 space-y-6">
        <div className="space-y-4">
          <h2 className="font-medium">Kategorier</h2>
          <div className="flex gap-4">
            <Button
              variant={activeCategory === "fresh" ? "default" : "outline"}
              className="flex-1 justify-start gap-2"
              onClick={() => handleCategoryClick("fresh")}
            >
              <Leaf className="text-green-600" />
              Friskvarer
            </Button>
            <Button
              variant={activeCategory === "frozen" ? "default" : "outline"}
              className="flex-1 justify-start gap-2"
              onClick={() => handleCategoryClick("frozen")}
            >
              <Snowflake className="text-blue-400" />
              Fryser
            </Button>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="font-medium">Ingredienser</h2>
          <div className="space-y-3">
            {filteredItems.map((item) => (
              <Card key={item.id} className="p-3 flex items-center gap-3">
                <div
                  className={`w-10 h-10 ${item.category === "fresh" ? "bg-green-100" : "bg-blue-100"} rounded-full flex items-center justify-center`}
                >
                  {item.emoji}
                </div>
                <div className="flex-1">
                  <p className="font-medium">{item.name}</p>
                  <p className="text-sm text-gray-500">Holder til {item.expiryDate}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="font-medium">Funktioner</h2>
          <div className="grid grid-cols-2 gap-4">
            <Button variant="outline" onClick={() => router.push("/scanner")}>
              <Camera className="mr-2 h-4 w-4" />
              Smart Scanner
            </Button>
            <Button variant="outline" onClick={() => router.push("/share")}>
              <Share2 className="mr-2 h-4 w-4" />
              Del Køleskab
            </Button>
            <Button variant="outline" onClick={() => router.push("/meal-wheel")}>
              <RefreshCw className="mr-2 h-4 w-4" />
              Måltids-hjulet
            </Button>
            <Button variant="outline" onClick={() => router.push("/deals")}>
              <Tag className="mr-2 h-4 w-4" />
              Tilbud
            </Button>
            <Button variant="outline" onClick={() => router.push("/donate")}>
              <Heart className="mr-2 h-4 w-4" />
              Donér Mad
            </Button>
          </div>
        </div>

        <div className="space-y-3">
          <Button className="w-full" variant="outline" onClick={() => router.push("/planner")}>
            Planlæg måltid
          </Button>
          <Button className="w-full" variant="outline" onClick={() => router.push("/challenges")}>
            Start challenge
          </Button>
          <Button className="w-full bg-black text-white hover:bg-black/90" onClick={() => router.push("/inventory")}>
            Tilføj varer
          </Button>
        </div>
      </div>
    </Layout>
  )
}


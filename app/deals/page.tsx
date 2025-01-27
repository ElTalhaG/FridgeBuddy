"use client"

import { useState, useEffect } from "react"
import { Layout } from "@/components/layout"
import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ShoppingBag } from "lucide-react"

interface Deal {
  id: number
  store: string
  item: string
  price: number
  discount: number
}

const dummyDeals: Deal[] = [
  { id: 1, store: "SuperBrugsen", item: "Kyllingebryst", price: 39.95, discount: 20 },
  { id: 2, store: "Netto", item: "Pasta", price: 12.95, discount: 15 },
  { id: 3, store: "Rema 1000", item: "Tomater", price: 15.95, discount: 25 },
  { id: 4, store: "Føtex", item: "Mælk", price: 9.95, discount: 10 },
]

export default function DealsPage() {
  const [deals, setDeals] = useState<Deal[]>([])

  useEffect(() => {
    // Simulate fetching deals from an API
    setTimeout(() => {
      setDeals(dummyDeals)
    }, 1000)
  }, [])

  return (
    <Layout>
      <Header title="Tilbud på Manglende Ingredienser" />
      <div className="p-4 space-y-4">
        {deals.map((deal) => (
          <Card key={deal.id} className="p-4">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="font-bold">{deal.item}</h3>
                <p className="text-sm text-gray-500">{deal.store}</p>
              </div>
              <div className="text-right">
                <p className="font-bold">{deal.price.toFixed(2)} kr</p>
                <p className="text-sm text-green-500">-{deal.discount}%</p>
              </div>
            </div>
            <Button className="w-full mt-2">
              <ShoppingBag className="mr-2 h-4 w-4" />
              Tilføj til Indkøbsliste
            </Button>
          </Card>
        ))}
      </div>
    </Layout>
  )
}


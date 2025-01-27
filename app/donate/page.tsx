"use client"

import { useState } from "react"
import { Layout } from "@/components/layout"
import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Heart } from "lucide-react"

interface DonationItem {
  id: number
  name: string
  quantity: string
}

export default function DonatePage() {
  const [items, setItems] = useState<DonationItem[]>([])
  const [newItem, setNewItem] = useState({ name: "", quantity: "" })

  const addItem = () => {
    if (newItem.name && newItem.quantity) {
      setItems([...items, { id: Date.now(), ...newItem }])
      setNewItem({ name: "", quantity: "" })
    }
  }

  const removeItem = (id: number) => {
    setItems(items.filter((item) => item.id !== id))
  }

  const handleDonate = () => {
    // Here you would typically send the donation data to your backend
    console.log("Donating items:", items)
    alert("Tak for din donation! En organisation vil kontakte dig snart.")
    setItems([])
  }

  return (
    <Layout>
      <Header title="Donér Overskudsmad" />
      <div className="p-4 space-y-4">
        <Card className="p-4">
          <h2 className="font-bold mb-2">Tilføj varer til donation</h2>
          <div className="flex space-x-2 mb-4">
            <Input
              placeholder="Varenavn"
              value={newItem.name}
              onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
            />
            <Input
              placeholder="Mængde"
              value={newItem.quantity}
              onChange={(e) => setNewItem({ ...newItem, quantity: e.target.value })}
            />
            <Button onClick={addItem}>Tilføj</Button>
          </div>
          {items.map((item) => (
            <div key={item.id} className="flex justify-between items-center bg-gray-100 p-2 rounded mb-2">
              <span>
                {item.name} - {item.quantity}
              </span>
              <Button variant="ghost" size="sm" onClick={() => removeItem(item.id)}>
                Fjern
              </Button>
            </div>
          ))}
        </Card>
        <Button className="w-full" onClick={handleDonate} disabled={items.length === 0}>
          <Heart className="mr-2 h-4 w-4" />
          Donér Varer
        </Button>
      </div>
    </Layout>
  )
}


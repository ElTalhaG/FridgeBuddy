"use client"

import { useState } from "react"
import { Layout } from "@/components/layout"
import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Camera } from "lucide-react"

const mockRecognizedItems = ["Æbler", "Bananer", "Mælk", "Brød", "Tomater", "Agurk", "Kylling", "Ost"]

export default function ScannerPage() {
  const [image, setImage] = useState<string | null>(null)
  const [recognizedItems, setRecognizedItems] = useState<string[]>([])

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setImage(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleScan = () => {
    // Simulate image recognition with random items from the mock data
    const numberOfItems = Math.floor(Math.random() * 5) + 1 // Recognize 1 to 5 items
    const recognizedItems = []
    for (let i = 0; i < numberOfItems; i++) {
      const randomIndex = Math.floor(Math.random() * mockRecognizedItems.length)
      recognizedItems.push(mockRecognizedItems[randomIndex])
    }
    setRecognizedItems(recognizedItems)
  }

  return (
    <Layout>
      <Header title="Smart Scanner" />
      <div className="p-4 space-y-4">
        <Card className="p-4">
          <div className="space-y-4">
            <div className="flex items-center justify-center bg-gray-100 h-64 rounded-lg">
              {image ? (
                <img src={image || "/placeholder.svg"} alt="Uploaded" className="max-h-full" />
              ) : (
                <Camera size={48} className="text-gray-400" />
              )}
            </div>
            <Input type="file" accept="image/*" onChange={handleImageUpload} className="hidden" id="image-upload" />
            <label htmlFor="image-upload" className="block">
              <Button type="button" variant="outline" className="w-full">
                Upload Billede
              </Button>
            </label>
            <Button onClick={handleScan} className="w-full" disabled={!image}>
              Scan Billede
            </Button>
          </div>
        </Card>
        {recognizedItems.length > 0 && (
          <Card className="p-4">
            <h2 className="font-bold mb-2">Genkendte varer:</h2>
            <ul className="list-disc pl-5">
              {recognizedItems.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </Card>
        )}
      </div>
    </Layout>
  )
}


"use client"

import { Layout } from "@/components/layout"
import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Search, Leaf, Snowflake, Plus, Trash } from "lucide-react"
import { useState } from "react"
import { useLanguage } from "@/lib/languageContext"

interface Item {
  id: string
  name: string
  emoji: string
  quantity: string
  category: "fresh" | "frozen"
}

const initialItems: Item[] = [
  { id: "1", name: "Broccoli", emoji: "🥦", quantity: "500g", category: "fresh" },
  { id: "2", name: "Kylling", emoji: "🍗", quantity: "1 kg", category: "frozen" },
  { id: "3", name: "Æg", emoji: "🥚", quantity: "12 stk", category: "fresh" },
]

const emojiMap: { [key: string]: string } = {
  // Fruits
  æble: "🍎",
  pære: "🍐",
  appelsin: "🍊",
  citron: "🍋",
  banan: "🍌",
  vindrue: "🍇",
  vandmelon: "🍉",
  jordbær: "🍓",
  kirsebær: "🍒",
  fersken: "🍑",
  mango: "🥭",
  ananas: "🍍",
  kokosnød: "🥥",
  kiwi: "🥝",
  tomat: "🍅",
  oliven: "🫒",
  blåbær: "🫐",

  // Vegetables
  majs: "🌽",
  broccoli: "🥦",
  agurk: "🥒",
  peberfrugt: "🫑",
  gulerod: "🥕",
  kartoffel: "🥔",
  "søde kartofler": "🍠",
  aubergine: "🍆",
  salat: "🥬",
  spinat: "🥬",
  svampe: "🍄",
  hvidløg: "🧄",
  løg: "🧅",
  ærter: "🫛",

  // Meat & Seafood
  kylling: "🍗",
  kød: "🥩",
  bacon: "🥓",
  pølse: "🌭",
  hamburger: "🍔",
  fisk: "🐟",
  rejer: "🦐",
  blæksprutte: "🦑",
  krabbe: "🦀",

  // Dairy & Eggs
  æg: "🥚",
  mælk: "🥛",
  ost: "🧀",
  smør: "🧈",

  // Bread & Grains
  brød: "🍞",
  croissant: "🥐",
  bagel: "🥯",
  pandekager: "🥞",
  vaffel: "🧇",
  bolle: "🥖",
  pretzel: "🥨",
  ris: "🍚",
  spaghetti: "🍝",

  // Sweets & Desserts
  is: "🍦",
  kage: "🍰",
  småkage: "🍪",
  chokolade: "🍫",
  slik: "🍬",
  slikkepind: "🍭",
  donut: "🍩",
  muffin: "🧁",
  tærte: "🥧",

  // Drinks
  kaffe: "☕",
  te: "🍵",
  juice: "🧃",
  smoothie: "🥤",
  vin: "🍷",
  øl: "🍺",
  cocktail: "🍸",
  vand: "💧",

  // Prepared Foods
  pizza: "🍕",
  sandwich: "🥪",
  taco: "🌮",
  burrito: "🌯",
  dumplings: "🥟",
  suppe: "🥣",
  salat: "🥗",
  popcorn: "🍿",

  // Condiments & Spices
  salt: "🧂",
  peber: "🌶️",
  olie: "🫗",
  eddike: "🧉",
  "soya sauce": "🍶",

  // Other
  madpakke: "🍱",
  gryde: "🍲",
  "skål med mad": "🥘",
}

function suggestEmoji(itemName: string): string {
  const lowercaseName = itemName.toLowerCase()
  for (const [key, emoji] of Object.entries(emojiMap)) {
    if (lowercaseName.includes(key) || key.includes(lowercaseName)) {
      return emoji
    }
  }
  return "🍽️" // Default emoji if no match is found
}

export default function InventoryPage() {
  const { t } = useLanguage()
  const [items, setItems] = useState<Item[]>(initialItems)
  const [searchTerm, setSearchTerm] = useState("")
  const [activeCategory, setActiveCategory] = useState<"fresh" | "frozen" | null>(null)
  const [newItemName, setNewItemName] = useState("")
  const [newItemQuantity, setNewItemQuantity] = useState("")

  const handleCategoryClick = (category: "fresh" | "frozen") => {
    setActiveCategory(category === activeCategory ? null : category)
  }

  const filteredItems = items.filter(
    (item) =>
      (activeCategory ? item.category === activeCategory : true) &&
      item.name.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const handleAddItem = () => {
    if (newItemName.trim() && newItemQuantity.trim()) {
      const newItem: Item = {
        id: Math.random().toString(),
        name: newItemName,
        emoji: suggestEmoji(newItemName),
        quantity: newItemQuantity,
        category: activeCategory || "fresh",
      }
      setItems((prev) => [...prev, newItem])
      setNewItemName("")
      setNewItemQuantity("")
    }
  }

  const handleDeleteItem = (id: string) => {
    setItems((prev) => prev.filter((item) => item.id !== id))
  }

  return (
    <Layout activeTab="inventory">
      <Header title={t('inventory.title')} backUrl="/" />

      <div className="p-4 space-y-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <Input
            className="pl-10"
            placeholder={t('inventory.search')}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="space-y-4">
          <h2 className="font-medium">{t('inventory.categories.all')}</h2>
          <div className="flex gap-4">
            <Button
              variant={activeCategory === "fresh" ? "default" : "outline"}
              className="flex-1 justify-start gap-2"
              onClick={() => handleCategoryClick("fresh")}
            >
              <Leaf className="text-green-600" />
              {t('inventory.categories.fresh')}
            </Button>
            <Button
              variant={activeCategory === "frozen" ? "default" : "outline"}
              className="flex-1 justify-start gap-2"
              onClick={() => handleCategoryClick("frozen")}
            >
              <Snowflake className="text-blue-400" />
              {t('inventory.categories.frozen')}
            </Button>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="font-medium">{t('home.ingredients')}</h2>
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
                  <p className="text-sm text-gray-500">{item.quantity}</p>
                </div>
                <Button variant="ghost" size="icon" onClick={() => handleDeleteItem(item.id)}>
                  <Trash className="h-4 w-4" />
                </Button>
              </Card>
            ))}
          </div>
        </div>

        <div className="space-y-2">
          <Input 
            placeholder={t('inventory.addNew')} 
            value={newItemName} 
            onChange={(e) => setNewItemName(e.target.value)} 
          />
          <Input
            placeholder="200g, 1l, 5 stk"
            value={newItemQuantity}
            onChange={(e) => setNewItemQuantity(e.target.value)}
          />
          <Button className="w-full" onClick={handleAddItem}>
            <Plus className="h-4 w-4 mr-2" />
            {t('inventory.addNew')}
          </Button>
        </div>
      </div>
    </Layout>
  )
}


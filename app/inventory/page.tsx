"use client"

import { Layout } from "@/components/layout"
import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Search, Leaf, Snowflake, Plus, Trash, Calendar } from "lucide-react"
import { useState } from "react"
import { useLanguage } from "@/lib/languageContext"
import { useInventory } from "@/lib/inventoryContext"
import { suggestEmoji } from "@/lib/emojiUtils"
import { format } from "date-fns"
import { da, enUS } from "date-fns/locale"

export default function InventoryPage() {
  const { t, language } = useLanguage()
  const { items, addItem, deleteItem } = useInventory()
  const [searchTerm, setSearchTerm] = useState("")
  const [activeCategory, setActiveCategory] = useState<"fresh" | "frozen" | null>(null)
  const [newItemName, setNewItemName] = useState("")
  const [newItemQuantity, setNewItemQuantity] = useState("")
  const [newItemExpiryDate, setNewItemExpiryDate] = useState("")

  const handleCategoryClick = (category: "fresh" | "frozen") => {
    setActiveCategory(category === activeCategory ? null : category)
  }

  const filteredItems = items.filter((item) => {
    const matchesCategory = activeCategory ? item.category === activeCategory : true;
    const itemName = language === 'da' ? item.nameDA : item.nameEN;
    const matchesSearch = itemName.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleAddItem = () => {
    if (newItemName.trim() && newItemQuantity.trim()) {
      addItem({
        nameDA: newItemName,
        nameEN: newItemName, // You might want to add translation functionality here
        emoji: suggestEmoji(newItemName, language),
        quantity: newItemQuantity,
        category: activeCategory || "fresh",
        expiryDate: newItemExpiryDate || undefined
      })
      setNewItemName("")
      setNewItemQuantity("")
      setNewItemExpiryDate("")
    }
  }

  const handleDeleteItem = (id: string) => {
    if (window.confirm(t('inventory.confirmDelete'))) {
      deleteItem(id)
    }
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
                  <p className="font-medium">{language === 'da' ? item.nameDA : item.nameEN}</p>
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <span>{item.quantity}</span>
                    {item.expiryDate && (
                      <span className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {format(new Date(item.expiryDate), "d. MMM yyyy", { locale: language === 'da' ? da : enUS })}
                      </span>
                    )}
                  </div>
                </div>
                <Button variant="ghost" size="icon" onClick={() => handleDeleteItem(item.id)}>
                  <Trash className="h-4 w-4" />
                </Button>
              </Card>
            ))}
          </div>
        </div>

        <Card className="p-4">
          <div className="space-y-3">
            <div className="relative">
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-lg">
                {suggestEmoji(newItemName, language)}
              </span>
              <Input
                placeholder={t('inventory.addNew')}
                value={newItemName}
                onChange={(e) => setNewItemName(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="relative">
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2">
                <Plus className="h-4 w-4 text-gray-400" />
              </span>
              <Input
                placeholder={t('inventory.quantity')}
                value={newItemQuantity}
                onChange={(e) => setNewItemQuantity(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="relative">
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2">
                <Calendar className="h-4 w-4 text-gray-400" />
              </span>
              <Input
                type="date"
                placeholder={t('inventory.expiryDate')}
                value={newItemExpiryDate}
                onChange={(e) => setNewItemExpiryDate(e.target.value)}
                className="pl-10"
              />
            </div>
            <Button className="w-full" onClick={handleAddItem}>
              <Plus className="h-4 w-4 mr-2" />
              {t('inventory.addNew')}
            </Button>
          </div>
        </Card>
      </div>
    </Layout>
  )
}


"use client"

import { useState } from "react"
import { Layout } from "@/components/layout"
import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Share2, UserPlus, X } from "lucide-react"
import { toast } from "@/components/ui/use-toast"

export default function SharePage() {
  const [sharedUsers, setSharedUsers] = useState<string[]>([])
  const [newUser, setNewUser] = useState("")

  const handleAddUser = () => {
    if (newUser && !sharedUsers.includes(newUser)) {
      setSharedUsers([...sharedUsers, newUser])
      setNewUser("")
    }
  }

  const handleRemoveUser = (user: string) => {
    setSharedUsers(sharedUsers.filter((u) => u !== user))
  }

  const handleShare = () => {
    toast({
      title: "Køleskab delt!",
      description: `Dit køleskab er nu delt med ${sharedUsers.length} bruger(e).`,
    })
  }

  return (
    <Layout>
      <Header title="Del Køleskab" />
      <div className="p-4 space-y-4">
        <Card className="p-4">
          <h2 className="font-bold mb-2">Del med roomies eller familie</h2>
          <div className="flex space-x-2 mb-4">
            <Input placeholder="Email adresse" value={newUser} onChange={(e) => setNewUser(e.target.value)} />
            <Button onClick={handleAddUser}>
              <UserPlus className="mr-2 h-4 w-4" />
              Tilføj
            </Button>
          </div>
          {sharedUsers.map((user) => (
            <div key={user} className="flex items-center justify-between bg-gray-100 p-2 rounded mb-2">
              <span>{user}</span>
              <Button variant="ghost" size="sm" onClick={() => handleRemoveUser(user)}>
                <X className="h-4 w-4" />
              </Button>
            </div>
          ))}
        </Card>
        <Button className="w-full" onClick={handleShare}>
          <Share2 className="mr-2 h-4 w-4" />
          Del Køleskab
        </Button>
      </div>
    </Layout>
  )
}


"use client"

import { Layout } from "@/components/layout"
import { Header } from "@/components/header"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Trophy, Medal } from "lucide-react"
import { useState } from "react"
import { useLanguage } from "@/lib/languageContext"

interface Challenge {
  id: string
  titleKey: string
  descriptionKey: string
  points: number
  completed: boolean
}

export default function ChallengesPage() {
  const { t } = useLanguage()
  const [challenges, setChallenges] = useState<Challenge[]>([
    {
      id: "1",
      titleKey: "challenges.freezerChallenge.title",
      descriptionKey: "challenges.freezerChallenge.description",
      points: 10,
      completed: false,
    },
    {
      id: "2",
      titleKey: "challenges.vegetableChallenge.title",
      descriptionKey: "challenges.vegetableChallenge.description",
      points: 15,
      completed: false,
    },
  ])
  const [totalPoints, setTotalPoints] = useState(0)

  const completeChallenge = (id: string) => {
    setChallenges((prevChallenges) =>
      prevChallenges.map((challenge) => (challenge.id === id ? { ...challenge, completed: true } : challenge)),
    )
    const completedChallenge = challenges.find((c) => c.id === id)
    if (completedChallenge) {
      setTotalPoints((prev) => prev + completedChallenge.points)
    }
  }

  return (
    <Layout activeTab="challenges">
      <Header title={t('challenges.title')} backUrl="/" />

      <div className="p-4 space-y-6">
        <h2 className="font-medium">{t('challenges.listTitle')}</h2>

        <div className="space-y-4">
          {challenges.map((challenge) => (
            <Card key={challenge.id} className="p-4 space-y-3">
              <div className="flex items-center gap-3">
                <Trophy className="text-yellow-500" />
                <div className="flex-1">
                  <h3 className="font-medium">{t(challenge.titleKey)}</h3>
                  <p className="text-sm text-gray-500">{t(challenge.descriptionKey)}</p>
                </div>
                <span className="text-sm font-medium">{challenge.points} {t('challenges.points')}</span>
              </div>
              {!challenge.completed && (
                <Button className="w-full" onClick={() => completeChallenge(challenge.id)}>
                  {t('challenges.completeButton')}
                </Button>
              )}
              {challenge.completed && <p className="text-green-500 text-sm font-medium">{t('challenges.completed')}</p>}
            </Card>
          ))}
        </div>

        <div className="space-y-4">
          <h2 className="font-medium">{t('challenges.pointsOverview')}</h2>
          <Card className="p-4">
            <div className="flex items-center gap-3 mb-4">
              <Medal className="text-yellow-500" size={24} />
              <div>
                <p className="font-medium">{t('challenges.earnedPoints')}</p>
                <p className="text-2xl font-bold">{totalPoints}</p>
              </div>
            </div>
            <div>
              <p className="font-medium mb-2">{t('challenges.badgesEarned')}</p>
              <p className="text-lg">{Math.floor(totalPoints / 20)}</p>
            </div>
          </Card>
        </div>
      </div>
    </Layout>
  )
}


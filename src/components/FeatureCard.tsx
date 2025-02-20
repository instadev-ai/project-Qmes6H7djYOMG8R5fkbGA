import { Badge } from "./ui/badge"
import { Button } from "./ui/button"
import { Card } from "./ui/card"
import { ArrowBigUp, MessageSquare } from "lucide-react"
import { useState } from "react"

interface Feature {
  id: number
  title: string
  description: string
  votes: number
  status: string
  category: string
}

interface FeatureCardProps {
  feature: Feature
}

export function FeatureCard({ feature }: FeatureCardProps) {
  const [votes, setVotes] = useState(feature.votes)
  const [hasVoted, setHasVoted] = useState(false)

  const handleVote = () => {
    if (hasVoted) {
      setVotes(votes - 1)
    } else {
      setVotes(votes + 1)
    }
    setHasVoted(!hasVoted)
  }

  return (
    <Card className="bg-slate-800 border-slate-700 p-6">
      <div className="flex gap-4">
        <Button
          variant="ghost"
          className={`flex flex-col items-center p-3 h-auto hover:bg-slate-700 ${
            hasVoted ? "text-purple-400" : "text-slate-400"
          }`}
          onClick={handleVote}
        >
          <ArrowBigUp className="h-6 w-6" />
          <span className="text-sm font-medium">{votes}</span>
        </Button>
        <div className="flex-1 space-y-3">
          <div className="flex items-start justify-between">
            <h3 className="font-semibold text-lg text-slate-100">{feature.title}</h3>
            <div className="flex items-center gap-2">
              <Badge
                variant="secondary"
                className="bg-slate-700 hover:bg-slate-700 text-slate-300"
              >
                {feature.category}
              </Badge>
              <Badge
                variant="secondary"
                className={`${
                  feature.status === "in-progress"
                    ? "bg-blue-500/20 text-blue-400"
                    : "bg-purple-500/20 text-purple-400"
                }`}
              >
                {feature.status}
              </Badge>
            </div>
          </div>
          <p className="text-slate-400">{feature.description}</p>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" className="text-slate-400 hover:text-slate-100">
              <MessageSquare className="mr-2 h-4 w-4" />
              Comment
            </Button>
          </div>
        </div>
      </div>
    </Card>
  )
}
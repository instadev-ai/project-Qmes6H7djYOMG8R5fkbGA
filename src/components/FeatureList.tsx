import { FeatureCard } from "./FeatureCard"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select"

const MOCK_FEATURES = [
  {
    id: 1,
    title: "Dark Mode Support",
    description: "Add dark mode support across the entire platform for better night-time viewing.",
    votes: 234,
    status: "planned",
    category: "UI/UX",
  },
  {
    id: 2,
    title: "Mobile App",
    description: "Create native mobile apps for iOS and Android platforms.",
    votes: 189,
    status: "in-progress",
    category: "Platform",
  },
  {
    id: 3,
    title: "API Integration",
    description: "Provide REST API endpoints for third-party integrations.",
    votes: 156,
    status: "planned",
    category: "Development",
  },
]

export function FeatureList() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold text-slate-100">Feature Requests</h2>
        <Select defaultValue="votes">
          <SelectTrigger className="w-[180px] bg-slate-800 border-slate-700">
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent className="bg-slate-800 border-slate-700">
            <SelectItem value="votes">Most Voted</SelectItem>
            <SelectItem value="recent">Most Recent</SelectItem>
            <SelectItem value="status">By Status</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="grid gap-4">
        {MOCK_FEATURES.map((feature) => (
          <FeatureCard key={feature.id} feature={feature} />
        ))}
      </div>
    </div>
  )
}
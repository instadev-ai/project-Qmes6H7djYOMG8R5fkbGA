import { Header } from "./Header"
import { FeatureList } from "./FeatureList"

export function MainLayout() {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-100">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <FeatureList />
      </main>
    </div>
  )
}
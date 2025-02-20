import { Button } from "./ui/button"
import { PlusCircle } from "lucide-react"

export function Header() {
  return (
    <header className="border-b border-slate-800 bg-slate-900/95 backdrop-blur supports-[backdrop-filter]:bg-slate-900/75">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-6">
            <h1 className="text-xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Community Features
            </h1>
            <nav className="hidden md:block">
              <ul className="flex items-center gap-6">
                <li>
                  <a href="#" className="text-slate-300 hover:text-white transition-colors">
                    All Features
                  </a>
                </li>
                <li>
                  <a href="#" className="text-slate-300 hover:text-white transition-colors">
                    Top Voted
                  </a>
                </li>
                <li>
                  <a href="#" className="text-slate-300 hover:text-white transition-colors">
                    Recent
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <Button className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600">
            <PlusCircle className="mr-2 h-4 w-4" />
            New Feature
          </Button>
        </div>
      </div>
    </header>
  )
}
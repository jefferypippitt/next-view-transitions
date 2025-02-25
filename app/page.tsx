import { BrowserSupport } from "@/components/browser-support"
import { Navigation } from "@/components/navigation"

export default function Home() {
  return (
    <div className="py-8 space-y-4">
        <BrowserSupport />
      <div className="space-y-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Next.js View Transitions Demo</h1>
        </div>
      </div >
      <div className="flex items-center justify-between">
        <Navigation />
      </div>
    </div>
  )
}

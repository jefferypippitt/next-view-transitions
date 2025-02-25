'use client'

import { useRouter } from "next/navigation"
import { ArrowLeft } from "lucide-react"

export default function DemoPage() {
  const router = useRouter()

  const handleBack = () => {
    if (!document.startViewTransition) {
      return router.push('/')
    }

    document.documentElement.classList.add('demo-transition')
    const transition = document.startViewTransition(() => {
      router.push('/')
    })

    transition.finished.then(() => {
      document.documentElement.classList.remove('demo-transition')
    })
  }

  return (
    <div className="py-8 space-y-8">
      <div className="space-y-4">
        <button
          onClick={handleBack}
          className="group mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
          Back
        </button>
        
        <h1 className="text-4xl font-bold tracking-tight">Rotate & Scale</h1>
        <p className="text-lg text-muted-foreground">
          This page demonstrates a dramatic rotation and scale transition.
          Content spins 180 degrees while scaling down/up for a dynamic effect.
        </p>
      </div>
    </div>
  )
} 
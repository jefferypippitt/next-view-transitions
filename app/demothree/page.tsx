'use client'

import { useRouter } from "next/navigation"
import { ArrowLeft } from "lucide-react"

export default function DemoThreePage() {
  const router = useRouter()

  const handleBack = () => {
    if (!document.startViewTransition) {
      return router.push('/')
    }

    document.documentElement.classList.add('demo-three-transition')
    const transition = document.startViewTransition(() => {
      router.push('/')
    })

    transition.finished.then(() => {
      document.documentElement.classList.remove('demo-three-transition')
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
        
        <h1 className="text-4xl font-bold tracking-tight">3D Bounce Flip</h1>
        <p className="text-lg text-muted-foreground">
          This page demonstrates a bouncy 3D flip transition.
          Content flips in 3D space with a playful bouncing effect.
        </p>
      </div>
    </div>
  )
} 
'use client'

import { useRouter } from "next/navigation"

export function Navigation() {
  const router = useRouter()

  const handleNavigate = (path: string, transitionClass: string) => {
    if (!document.startViewTransition) {
      return router.push(path)
    }

    document.documentElement.classList.add(transitionClass)
    const transition = document.startViewTransition(() => {
      router.push(path)
    })

    transition.finished.then(() => {
      document.documentElement.classList.remove(transitionClass)
    })
  }

  return (
    <div className="flex flex-col gap-4">
      <button
        onClick={() => handleNavigate('/demo', 'demo-transition')}
        className="text-sm text-muted-foreground hover:text-foreground hover:underline"
      >
        Rotate & Scale Demo
      </button>
      <button
        onClick={() => handleNavigate('/demotwo', 'demo-two-transition')}
        className="text-sm text-muted-foreground hover:text-foreground hover:underline"
      >
        Diagonal Split Demo
      </button>
      <button
        onClick={() => handleNavigate('/demothree', 'demo-three-transition')}
        className="text-sm text-muted-foreground hover:text-foreground hover:underline"
      >
        3D Bounce Flip Demo
      </button>
      <button
        onClick={() => handleNavigate('/demofour', 'demo-four-transition')}
        className="text-sm text-muted-foreground hover:text-foreground hover:underline"
      >
        Carousel Slide Demo
      </button>
    </div>
  )
} 
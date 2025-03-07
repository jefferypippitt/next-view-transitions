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
    <div className="flex flex-col w-full">
      <button
        onClick={() => handleNavigate('/demo', 'demo-transition')}
        className="text-sm text-muted-foreground hover:text-foreground hover:underline py-2 px-4 text-left"
      >
        Rotate & Scale Demo
      </button>
      <button
        onClick={() => handleNavigate('/demotwo', 'demo-two-transition')}
        className="text-sm text-muted-foreground hover:text-foreground hover:underline py-2 px-4 text-left"
      >
        Diagonal Split Demo
      </button>
      <button
        onClick={() => handleNavigate('/demothree', 'demo-three-transition')}
        className="text-sm text-muted-foreground hover:text-foreground hover:underline py-2 px-4 text-left"
      >
        3D Bounce Flip Demo
      </button>
      <button
        onClick={() => handleNavigate('/demofour', 'demo-four-transition')}
        className="text-sm text-muted-foreground hover:text-foreground hover:underline py-2 px-4 text-left"
      >
        Carousel Slide Demo
      </button>
      <button
        onClick={() => handleNavigate('/demofive', 'demo-five-transition')}
        className="text-sm text-muted-foreground hover:text-foreground hover:underline py-2 px-4 text-left"
      >
        Zoom Blur Demo
      </button>
    </div>
  )
} 
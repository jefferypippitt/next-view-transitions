'use client'

import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { CheckCircle2, XCircle } from 'lucide-react'
import { useEffect, useState } from 'react'

export function BrowserSupport() {
  const [supportsViewTransitions, setSupportsViewTransitions] = useState(false)

  useEffect(() => {
    setSupportsViewTransitions('startViewTransition' in document)
  }, [])

  return (
    <div className="space-y-2">
      {!supportsViewTransitions ? (
        <Alert variant="destructive">
          <div className="flex items-center gap-2">
            <XCircle className="h-4 w-4" />
            <AlertTitle>Browser Support</AlertTitle>
          </div>
          <AlertDescription>
            Your browser doesn&apos;t support View Transitions
          </AlertDescription>
        </Alert>
      ) : (
        <Alert className="border-green-600 bg-green-50 text-green-600">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="h-4 w-4" />
            <AlertTitle>Browser Support</AlertTitle>
          </div>
          <AlertDescription>
            Your browser supports View Transitions
          </AlertDescription>
        </Alert>
      )}
    </div>
  )
} 
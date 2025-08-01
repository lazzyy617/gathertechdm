"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Loader } from "@/components/loader"

export function LoadingProvider({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return <Loader />
  }

  return <>{children}</>
}

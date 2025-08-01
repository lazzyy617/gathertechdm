"use client"

import { useEffect, useState } from "react"
import { Zap, ArrowRight, ArrowLeft, ArrowUp, ArrowDown } from "lucide-react"

export function Loader() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 100
        return prev + 2
      })
    }, 50)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center gradient-bg">
      <div className="text-center">
        <div className="relative mb-8">
          <div className="loading-spinner w-24 h-24 border-4 border-gray-600 border-t-orange-400 rounded-full mx-auto"></div>
          <Zap className="absolute inset-0 m-auto w-8 h-8 text-orange-400" />

          {/* Floating arrows */}
          <ArrowRight className="absolute top-0 right-0 w-6 h-6 text-orange-400 animate-pulse" />
          <ArrowLeft className="absolute top-0 left-0 w-6 h-6 text-orange-400 animate-pulse" />
          <ArrowUp className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-6 h-6 text-orange-400 animate-pulse" />
          <ArrowDown className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-6 h-6 text-orange-400 animate-pulse" />
        </div>

        <h1 className="text-4xl font-bold gradient-text mb-4">GatherTech DM</h1>
        <p className="text-gray-400 mb-6">Innovating the Future of Technology</p>

        <div className="w-64 bg-gray-800 rounded-full h-2 mx-auto">
          <div
            className="bg-gradient-to-r from-yellow-400 to-orange-400 h-2 rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <p className="text-sm text-gray-500 mt-2">{progress}%</p>
      </div>
    </div>
  )
}

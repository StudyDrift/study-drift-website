"use client"
import { useEffect, useRef, useState } from "react"

const PROMPTS = [
  "Build me a 14 week course on an introduction to javascript in the browser.",
]

export const PromptSection = () => {
  const [prompt, setPrompt] = useState("")
  const promptSpot = useRef(0)
  const typingTimeoutRef = useRef<NodeJS.Timeout | null>(null)
  const spot = useRef(0)

  useEffect(() => {
    const fullPromptText = PROMPTS[promptSpot.current]
    const startSpeed = 20
    const endSpeed = 60

    // Create a typing effect ending with the entire fullPromptText
    const createDelay = (speed: number) => {
      typingTimeoutRef.current = setTimeout(() => {
        setPrompt((prev) => fullPromptText.slice(0, ++spot.current))

        if (spot.current < fullPromptText.length) {
          createDelay(Math.random() * (endSpeed - startSpeed) + startSpeed)
        }
      }, speed)
    }

    // Start the typing effect
    createDelay(Math.random() * (endSpeed - startSpeed) + startSpeed)

    // Clean up on component unmount
    return () => {
      if (typingTimeoutRef.current) {
        clearTimeout(typingTimeoutRef.current)
      }
    }
  }, [prompt])

  return (
    <div className="mt-10 w-full flex justify-center items-center h-[40vh]">
      <div className="bg-white shadow w-[50%] h-14 rounded-full flex items-center px-6">
        {prompt}
        <div className="bg-gray-800 h-6 w-1 ml-0.5 rounded animate-pulse duration-100"></div>
      </div>
    </div>
  )
}

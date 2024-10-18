"use client"
import { useEffect, useRef, useState } from "react"

const PROMPTS = [
  {
    prompt:
      "Build me a 14 week course on an introduction to javascript in the browser.",
    name: "structure",
  },
]

interface Props {
  onComplete: (whichComplete: string) => void
}

export const PromptSection = ({ onComplete }: Props) => {
  const [prompt, setPrompt] = useState("")
  const promptSpot = useRef(0)
  const typingTimeoutRef = useRef<NodeJS.Timeout | null>(null)
  const spot = useRef(0)

  useEffect(() => {
    const fullPromptText = PROMPTS[promptSpot.current].prompt
    const startSpeed = 20
    const endSpeed = 70

    // Create a typing effect ending with the entire fullPromptText
    const createDelay = (speed: number) => {
      typingTimeoutRef.current = setTimeout(() => {
        setPrompt(() => fullPromptText.slice(0, ++spot.current))

        if (spot.current < fullPromptText.length) {
          createDelay(Math.random() * (endSpeed - startSpeed) + startSpeed)
        } else {
          setTimeout(() => onComplete(PROMPTS[promptSpot.current].name), 1000)
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
  }, [prompt, onComplete])

  return (
    <div className="mt-10 w-full flex justify-center items-center">
      <div className="bg-white shadow w-[800px] sm:w-[600px] md:w-[700px] lg:w-[800px] h-fit py-4 rounded-full flex items-center px-6">
        {prompt}
        <div className="bg-gray-800 h-6 w-1 ml-0.5 rounded animate-pulse duration-100"></div>
      </div>
    </div>
  )
}

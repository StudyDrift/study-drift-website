"use client"
import { useState } from "react"
import { PromptSection } from "./prompt"

export const PromptAnimation = () => {
  const [promptCompletion, setPromptCompletion] = useState("")

  return (
    <div className="flex flex-col items-center w-full px-8">
      <div className="mt-8">
        <PromptSection onComplete={setPromptCompletion} />
      </div>
      <div className="mt-16 w-full lg:w-[900px] md:w-[700px] sm:w-full flex justify-center">
        <Structure show={promptCompletion === "structure"} />
      </div>
    </div>
  )
}

const Structure = ({ show }: { show: boolean }) => {
  const mods = [
    {
      name: "Overview of JavaScript, its history, and its role in web development.",
      delay: "delay-0",
    },
    {
      name: "Development Tools",
      delay: "delay-500",
    },
    {
      name: "Environment Setup Quiz",
      delay: "delay-1000",
    },
    {
      name: "Installing a code editor and setting up a browser for development.",
      delay: "delay-[1500ms]",
    },
  ]

  return (
    <div className="flex flex-col gap-4">
      {mods.map((mod, i) => (
        <div
          className={`w-full lg:w-[900px] md:w-[700px] sm:w-full py-4 bg-white rounded-md shadow flex items-center pl-4 transition duration-800 ${
            mod.delay
          } ${show ? "opacity-70 mt-0 shadow-lg" : "opacity-0 translate-y-3"}`}
          key={i}
        >
          <span className="text-lg">{mod.name}</span>
        </div>
      ))}

      <div
        className={`mt-8 flex flex-col items-center transition-opacity duration-500 delay-[2000ms] ${
          show ? "opacity-100" : "opacity-0"
        }`}
      >
        <button className="bg-slate-800 hover:bg-slate-700 text-white px-7 py-4 rounded-xl transition-colors text-lg">
          Get Started
        </button>
      </div>
    </div>
  )
}

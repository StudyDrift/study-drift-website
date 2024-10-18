"use client"
import { useState } from "react"
import { PromptSection } from "./prompt"

export const PromptAnimation = () => {
  const [promptCompletion, setPromptCompletion] = useState("")

  return (
    <div className="flex flex-col items-center w-full">
      <div className="mt-8">
        <PromptSection onComplete={setPromptCompletion} />
      </div>
      <div className="h-72 mt-16">
        <Structure show={promptCompletion === "structure"} />
      </div>
    </div>
  )
}

const Structure = ({ show }: { show: boolean }) => {
  return (
    <div className="flex flex-col gap-4">
      <div
        className={`w-[900px] h-12 bg-white rounded-md shadow flex items-center pl-4 transition-all duration-900 ${
          show ? "opacity-70 mt-0 shadow-lg" : "opacity-0 mt-10"
        }`}
      >
        <span className="text-lg">
          Overview of JavaScript, its history, and its role in web development.
        </span>
      </div>
      <div
        className={`w-[900px] h-12 bg-white rounded-md shadow flex items-center pl-4 transition-all duration-800 delay-500 ${
          show ? "opacity-70 mt-0 shadow-lg" : "opacity-0 mt-10"
        }`}
      >
        <span className="text-lg">Development Tools</span>
      </div>
      <div
        className={`w-[900px] h-12 bg-white rounded-md shadow flex items-center pl-4 transition-all duration-800 delay-1000 ${
          show ? "opacity-70 mt-0 shadow-lg" : "opacity-0 mt-10"
        }`}
      >
        <span className="text-lg">Environment Setup Quiz</span>
      </div>
      <div
        className={`w-[900px] h-12 bg-white rounded-md shadow flex items-center pl-4 transition-all duration-800 delay-[1500ms] ${
          show ? "opacity-70 mt-0 shadow-lg" : "opacity-0 mt-10"
        }`}
      >
        <span className="text-lg">
          Installing a code editor and setting up a browser for development.
        </span>
      </div>

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

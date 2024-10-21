"use client"
import { Bars3Icon } from "@heroicons/react/24/solid"
import Image from "next/image"
import { useState } from "react"

export const Nav = () => {
  const [open, setOpen] = useState(false)

  return (
    <div className="flex flex-col">
      <nav className="flex items-center justify-between p-4 mt-4 mx-8">
        <div className="flex items-center justify-between">
          <Image
            src="./logo-trimmed.svg"
            alt="Study Drift Logo"
            width={60}
            height={60}
          />
          <div className="ml-10 flex gap-8 hidden lg:flex md:flex sm:hidden">
            <a href="#" className="group text-black transition duration-300">
              K-12
              <span className="block max-w-0 group-hover:max-w-full transition-all duration-200 h-0.5 bg-sky-600"></span>
            </a>
            <a href="#" className="group text-black transition duration-300">
              Higher Ed
              <span className="block max-w-0 group-hover:max-w-full transition-all duration-200 h-0.5 bg-sky-600"></span>
            </a>
            <a href="#" className="group text-black transition duration-300">
              Corporate
              <span className="block max-w-0 group-hover:max-w-full transition-all duration-200 h-0.5 bg-sky-600"></span>
            </a>
            <a href="#" className="group text-black transition duration-300">
              About Us
              <span className="block max-w-0 group-hover:max-w-full transition-all duration-200 h-0.5 bg-sky-600"></span>
            </a>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button className="px-4 py-2 rounded-md hover:bg-gray-300 transition-colors hidden lg:flex md:flex sm:hidden">
            Sign in
          </button>
          <button className="bg-slate-800 hover:bg-slate-700 text-white px-4 py-2 rounded-md transition-colors hidden lg:flex md:flex sm:hidden">
            Create Free Account
          </button>
          <button
            className="lg:hidden md:hidden sm:flex items-center justify-center flex ml-3 rounded-md hover:bg-gray-300 transition-colors px-4 py-2"
            onClick={() => setOpen(!open)}
          >
            <Bars3Icon className="w-6 h-6" />
          </button>
        </div>
      </nav>
      {open && (
        <div className="px-8 flex gap-5 flex-col justify-center items-center">
          <a href="#" className="group text-black transition duration-300">
            K-12
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-200 h-0.5 bg-sky-600"></span>
          </a>
          <a href="#" className="group text-black transition duration-300">
            Higher Ed
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-200 h-0.5 bg-sky-600"></span>
          </a>
          <a href="#" className="group text-black transition duration-300">
            Corporate
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-200 h-0.5 bg-sky-600"></span>
          </a>
          <a href="#" className="group text-black transition duration-300">
            About Us
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-200 h-0.5 bg-sky-600"></span>
          </a>
          <button className="border-slate-800 hover:border-slate-700 border-2 text-black px-4 py-2 rounded-md transition-colors w-full">
            Sign in
          </button>
          <button className="bg-slate-800 hover:bg-slate-700 text-white px-4 py-2 rounded-md transition-colors w-full">
            Create Free Account
          </button>
        </div>
      )}
    </div>
  )
}

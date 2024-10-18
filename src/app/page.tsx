import { Nav } from "@/components/nav"
import { PromptAnimation } from "@/components/prompt-animation"

export default function Home() {
  return (
    <div className="h-screen w-screen">
      <div className="w-[800px] h-[800px] rounded-full bg-blue-200 absolute z-1 -top-10 -left-10"></div>
      <div className="w-[800px] h-[800px] rounded-full bg-purple-400 absolute z-1 right-10 top-10"></div>
      <div className="w-[1000px] h-[1000px] rounded-full bg-blue-400 absolute z-1 right-20 top-56"></div>
      <div className="w-[80%] h-[300px] rounded-full bg-gray-400 absolute z-1 -top-20 left-[10%]"></div>
      <div className="w-[800px] h-[800px] rounded-full bg-teal-200 absolute z-1 -left-[10%] -bottom-[20%]"></div>
      <div className="fixed z-10 top-0 left-0 right-0 bottom-0 bg-white backdrop-blur-3xl bg-white/80 overflow-y-auto">
        <Nav />

        <section className="flex flex-col items-center justify-center mt-16">
          <span className="text-gray-600">
            Learn by Learning & Teach by Teaching
          </span>
          <h1 className="text-[5rem] font-thin -mt-3 sm:text-[5rem] md:text-[7rem] lg:text-[8rem]">
            <span className="font-normal">Study</span> Drift
          </h1>

          <PromptAnimation />
        </section>
      </div>
    </div>
  )
}

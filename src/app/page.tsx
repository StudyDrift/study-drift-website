import Image from "next/image"

export default function Home() {
  return (
    <div className="h-screen w-screen">
      <div className="w-[800px] h-[800px] rounded-full bg-blue-200 absolute z-1 -top-10 -left-10"></div>
      <div className="w-[800px] h-[800px] rounded-full bg-purple-400 absolute z-1 right-10 top-10"></div>
      <div className="w-[1000px] h-[1000px] rounded-full bg-blue-400 absolute z-1 right-20 top-56"></div>
      <div className="w-[80%] h-[300px] rounded-full bg-gray-400 absolute z-1 -top-20 left-[10%]"></div>
      <div className="w-[800px] h-[800px] rounded-full bg-teal-200 absolute z-1 -left-[10%] -bottom-[20%]"></div>
      <div className="fixed z-10 top-0 left-0 right-0 bottom-0 bg-white backdrop-blur-3xl bg-white/80 overflow-y-auto">
        <nav className="flex items-center justify-between p-4 mt-4 mx-8">
          <div className="flex items-center justify-between">
            <Image
              src="/logo-trimmed.svg"
              alt="Study Drift Logo"
              width={60}
              height={60}
            />
            <div className="ml-10 flex gap-8">
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
            <button className="px-4 py-2 rounded-md hover:bg-gray-300 transition-colors">
              Sign in
            </button>
            <button className="bg-slate-800 hover:bg-slate-700 text-white px-4 py-2 rounded-md transition-colors">
              Create Free Account
            </button>
          </div>
        </nav>

        <section className="flex flex-col items-center justify-center mt-16">
          <span className="text-gray-600">
            Learn by Learning & Teach by Teaching
          </span>
          <h1 className="text-[9rem] font-thin -mt-8">
            <span className="font-normal">Study</span> Drift
          </h1>
        </section>
      </div>
    </div>
  )
}

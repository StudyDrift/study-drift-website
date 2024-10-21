import { Background } from "@/components/background"
import { Nav } from "@/components/nav"
import { PromptAnimation } from "@/components/prompt-animation"

export default function Home() {
  return (
    <div className="h-screen w-screen">
      <Background />
      <div className="fixed z-10 top-0 left-0 right-0 bottom-0 backdrop-blur-3xl bg-white/80 overflow-y-auto">
        <Nav />

        <section className="flex flex-col items-center justify-center mt-16">
          <span className="text-gray-600">
            Learn by Learning & Teach by Teaching
          </span>
          <h1 className="text-[5rem] font-thin -mt-3 sm:text-[5rem] md:text-[7rem] lg:text-[8rem] text-center">
            <span className="font-normal">Study</span> Drift
          </h1>

          <PromptAnimation />
        </section>

        <section className="mt-16 py-36">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800">
                Why Study Drift?
              </h2>
              <p className="text-lg text-gray-600">
                Explore the powerful features designed to revolutionize online
                learning and teaching.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="p-6 bg-white rounded-lg shadow">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  AI-Driven Course Creation
                </h3>
                <p className="text-gray-600">
                  Automatically generate courses and quizzes using our
                  AI-powered tools, saving educators hours of manual work.
                </p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  Customizable Content Management
                </h3>
                <p className="text-gray-600">
                  Easily manage lessons, modules, and resources to create a
                  seamless learning experience for students.
                </p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  Analytics and Reporting
                </h3>
                <p className="text-gray-600">
                  Track student progress, identify trends, and improve your
                  curriculum with our in-depth analytics tools.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

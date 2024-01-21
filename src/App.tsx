import About from "./components/About"
import Education from "./components/Education"
import Index from "./components/Index"
import Projects from "./components/Projects"

function App() {
  return (
    <main className="bg-zinc-900 text-zinc-400">
      <div className="min-h-screen px-4 md:px-6 lg:px-12 xl:max-w-7xl xl:mx-auto py-12 lg:py-0 lg:grid lg:grid-cols-2 lg:gap-x-2">
        <Index />
        <div className="overflow-auto">
          <About />
          <Projects />
          <Education />
        </div>
      </div>
    </main>
  )
}

export default App

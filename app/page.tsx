import About from "@/components/sections/About"
import Hero from "@/components/sections/Hero"
import Navbar from "@/components/sections/Navbar"
import Projects from "@/components/sections/Projects"


function Home() {
  return (
    <main className="max-w-7xl mx-auto relative">
      <Navbar />
      <Hero />
      <About />
      <Projects />
    </main>
  )
}

export default Home
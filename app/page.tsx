import About from "@/components/sections/About"
import Contact from "@/components/sections/Contact"
import Hero from "@/components/sections/Hero"
import Navbar from "@/components/sections/Navbar"
import Projects from "@/components/sections/Projects"
import WorkExperience from "@/components/sections/WorkExperience"


function Home() {
  return (
    <main className="max-w-7xl mx-auto relative">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <WorkExperience />
      <Contact />
    </main>
  )
}

export default Home
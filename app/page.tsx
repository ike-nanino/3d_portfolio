import About from "@/components/sections/About"
import Hero from "@/components/sections/Hero"
import Navbar from "@/components/sections/Navbar"


function Home() {
  return (
    <main className="max-w-7xl mx-auto relative">
      <Navbar />
      <Hero />
      <About />


    </main>
  )
}

export default Home
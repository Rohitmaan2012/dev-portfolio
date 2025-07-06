import Hero from "@/components/ui/hero";
import Navbar from "@/components/ui/Navbar";
import About from "@/components/ui/About";
import Experience from "@/components/ui/Experience";
import Skills from "@/components/ui/Skills";
import Projects from "@/components/ui/Projects";
import Contact from "@/components/ui/Contact";
import Footer from "@/components/ui/Footer";

export default function Home() {
  return (
    <>
      <Navbar/>
      <main className="min-h-screen bg-gradient-to-br from-[#0f0f0f] via-[#111827] to-[#0f172a] text-white overflow-hidden">
        <Hero/>
        <About/>
        <Skills/>
        <Projects/>
        <Experience/>
        <Contact/>
        <Footer />
      </main>
    </> 
  );
}

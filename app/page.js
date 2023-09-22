import About from "@/components/About";
import Contact from "@/components/Contact";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <div className="page-content">
      <About />
      <Projects />
      <Contact />
    </div>
  )
}

import { useContext } from "react";
import Herosection from "./components/Herosection";
import About from "./components/About";
import Header from "./header_footer/Header";
import { ContextApi } from "./contextAPI/ContextApi";
import Projects from "./components/Projects";
import Footer from "./header_footer/Footer";
import Contact from "./components/Contact";


export default function App(){

  const {isDark} = useContext(ContextApi);

  return (
    <section className={isDark ? "bg-black/90 text-white" : "bg-white text-black"}>
      <div className="max-w-[1240px] mx-auto px-3 relative">
        <Header />
        <Herosection />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </section>
  )
}


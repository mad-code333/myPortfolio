import Navbar from "@/components/Navbar";
import About from "@/components/About";
import TechStack from "@/components/TechStack";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects"
import Blog from "@/components/Blog"
import Reveal from "@/components/Reveal";
export default function Home(){

return (

    <main className="bg-black text-white">

        <Navbar/>

        <div className="pt-20">
            <Hero/>

            <About/>

            <Experience/>

            <Projects/>

            <TechStack/>
            <Blog />

            <Contact/>

        </div>

    </main>

)

}
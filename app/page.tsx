import Achievements from "@/components/Achievements";
import HeroSection from "@/components/HeroSection"
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import sq from "@/public/images/sq1.png";
import Image from "next/image";
import Contact from "@/components/Contact";

function Home() {
  return (
    <div className="w-full flex flex-col items-center">
      <Image 
        src={sq}
        alt="square"
        width={91}
        height={91}
        className="absolute top-[80%] right-0 hidden lg:block"
      />
      
      <HeroSection />
      <Projects />
      <Skills />
      <Achievements />
      <Contact />
    </div>
  )
}

export default Home
import HeroSection from "@/components/HeroSection"
import Projects from "@/components/Projects";
import sq from "@/public/images/sq1.png";
import Image from "next/image";

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
    </div>
  )
}

export default Home
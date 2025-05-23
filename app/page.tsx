import HeroSection from "@/components/HeroSection"
import sq from "@/public/images/sq1.png";
import Image from "next/image";

function Home() {
  return (
    <div>
      <div className="w-full flex justify-center">
        <HeroSection />
      </div>
      
      <Image 
        src={sq}
        alt="square"
        width={91}
        height={91}
        className="absolute top-[80%] right-0"
      />

      <div className="min-h-screen">

      </div>
    </div>
  )
}

export default Home
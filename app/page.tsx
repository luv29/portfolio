import HeroSection from "@/components/HeroSection"
import NavBar from "@/components/NavBar"
import TopSocial from "@/components/TopSocial"
import sq from "@/public/images/sq1.png";
import Image from "next/image";

function Home() {
  return (
    <div>
      <div className="absolute top-0 left-[17px]">
        <TopSocial />
      </div>

      <NavBar />

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
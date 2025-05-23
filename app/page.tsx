'use client';
import { useEffect } from "react";
import HeroSection from "@/components/HeroSection";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Achievements from "@/components/Achievements";
import Contact from "@/components/Contact";
import Image from "next/image";
import sq from "@/public/images/sq1.png";

function Home() {
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const el = document.getElementById(hash.substring(1));
      if (el) {
        setTimeout(() => {
          window.scrollTo({
            top: el.offsetTop - 80,
            behavior: "smooth",
          });
        }, 100); // Give time for the DOM to be ready
      }
    }
  }, []);

  return (
    <div className="w-full flex flex-col items-center">
      <Image 
        src={sq}
        alt="square"
        width={91}
        height={91}
        className="absolute top-[80%] right-0 hidden lg:block"
      />

      <section id="hero"><HeroSection /></section>
      <Projects />
      <section id="skills"><Skills /></section>
      <section id="achievements"><Achievements /></section>
      <section id="contact"><Contact /></section>
    </div>
  );
}

export default Home;

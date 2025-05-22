"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import hero from "@/public/images/hero.png";
import heroDot from "@/public/images/hero-dots.png";
import heroBox from "@/public/images/hero-box.png";
import iv from "@/public/images/inverted-comma.png";

function HeroSection() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-[80vw] h-[80vh] flex flex-col justify-center items-center gap-[100px]"
        >
            <div className="flex items-center justify-center gap-8">
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    className="flex-3 space-y-4"
                >
                    <p className="text-[#C778DD] text-lg"> Meet </p>
                    <h1 className="text-5xl font-bold"> Luv Kansal </h1>
                    <div className="h-5"></div>
                    <div className="text-[#ABB2BF] text-md">
                        He is a third-year student at IIIT Pune. With a sharp focus on backend systems, he excels at building scalable and robust applications. He’s highly skilled in AWS, Gen AI, and Agentic AI, and has a strong track record in competitive programming. Passionate about innovation, Luv is continuously pushing boundaries and making waves in the tech world.
                    </div>
                    <p className="text-[#AB22BF] text-md text-right"> ~ChatGPT </p>
                    
                    <a
                        href="https://drive.google.com/file/d/1COJeSfpw6erzNGL2JEaQfMHVtL8Hxvaa/view?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-transparent border-white border-2 w-[148px] h-[37px] flex items-center justify-center hover:bg-neutral-700 cursor-pointer transition-colors duration-300"
                        >
                            View Resume
                        </motion.div>
                    </a>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="flex-2 flex justify-center relative"
                >
                    <Image
                        src={hero}
                        alt="Hero Image"
                        width={457}
                        height={386}
                        className="z-10"
                    />
                    <motion.div
                        initial={{ rotate: 0 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.6, duration: 0.6 }}
                        className="absolute top-[67%] left-[77%] z-20"
                    >
                        <Image src={heroDot} alt="dots" width={84} height={84} />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.6, duration: 0.6 }}
                        className="absolute top-[20%] left-0"
                    >
                        <Image src={heroBox} alt="box" width={155} height={155} />
                    </motion.div>
                </motion.div>
            </div>

            <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.6 }}
                className="bg-transparent border-[#ABB2BF] border-2 w-[712px] h-[95px] flex items-center justify-center text-3xl relative"
            >
                Turning Challenges into Triumphs
                <Image
                    src={iv}
                    alt=","
                    width={30}
                    height={24}
                    className="absolute top-[-12%] left-[3%] z-10 bg-[#282C33]"
                />
            </motion.div>
        </motion.div>
    );
}

export default HeroSection;

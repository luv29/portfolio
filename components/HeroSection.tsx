"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import hero from "@/public/images/image.png";
import iv from "@/public/images/inverted-comma.png";
import { JSX } from "react";

function HeroSection(): JSX.Element {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-[90vw] max-w-[1200px] mx-auto min-h-screen md:min-h-[80vh] flex flex-col justify-center items-center gap-16 px-4"
        >
            <div className="flex flex-col-reverse lg:flex-row items-center justify-between w-full gap-12">
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    className="md:flex-3/5 space-y-5"
                >
                    <p className="text-[#C778DD] text-lg"> Meet </p>
                    <h1 className="text-4xl md:text-5xl font-bold text-white"> Luv Kansal </h1>

                    <p className="text-[#ABB2BF] text-sm md:text-base leading-relaxed">
                        He is a third-year student at IIIT Pune. With a sharp focus on backend systems,
                        he excels at building scalable and robust applications. He’s highly skilled in AWS,
                        Gen AI, and Agentic AI, and has a strong track record in competitive programming.
                        Passionate about innovation, Luv is continuously pushing boundaries and making waves in the tech world.
                    </p>
                    
                    <p className="text-[#AB22BF] text-right text-sm"> ~ChatGPT </p>

                    <a
                        href="https://drive.google.com/file/d/1COJeSfpw6erzNGL2JEaQfMHVtL8Hxvaa/view?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-transparent border-[#ABB2BF] border w-fit px-6 py-2 text-sm hover:bg-neutral-400 transition-colors duration-300 cursor-pointer rounded-sm"
                        >
                            View Resume
                        </motion.div>
                    </a>
                </motion.div>

                {/* Image Section */}
                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className=" flex justify-center"
                >
                    <Image
                        src={hero}
                        alt="Hero Image"
                        width={400}
                        height={350}
                        className="z-10 max-w-full h-auto"
                        priority
                    />
                </motion.div>
            </div>

            {/* Quote */}
            <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.6 }}
                className="relative border-2 border-[#ABB2BF] w-full max-w-[700px] p-5 md:p-6 text-xl md:text-2xl text-white text-center"
            >
                Turning Challenges into Triumphs
                <Image
                    src={iv}
                    alt="quote"
                    width={30}
                    height={24}
                    className="absolute top-[-15px] left-4 bg-[#282C33] p-1"
                />
            </motion.div>
        </motion.div>
    );
}

export default HeroSection;

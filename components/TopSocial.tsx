'use client';

import { motion } from "framer-motion";
import Image from "next/image";
import line from "@/public/images/top-line.png";
import github from "@/public/images/github.png";
import linkedin from "@/public/images/linkedin.png";
import instagram from "@/public/images/instagram.png";

function TopSocial() {
    return (
        <motion.div
            className="flex flex-col justify-center items-center gap-3"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            <Image src={line} alt="Decorative line" />

            <motion.a
                href="https://github.com/luv29"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
            >
                <Image
                    src={github}
                    alt="GitHub Logo"
                    width={32}
                    height={32}
                    className="invert opacity-50 hover:opacity-100 transition-opacity"
                />
            </motion.a>

            <motion.a
                href="https://www.linkedin.com/in/luv-kansal/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
            >
                <Image
                    src={linkedin}
                    alt="LinkedIn Logo"
                    width={32}
                    height={32}
                    className="invert opacity-50 hover:opacity-100 transition-opacity"
                />
            </motion.a>

            <motion.a
                href="https://www.instagram.com/luv_295"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
            >
                <Image
                    src={instagram}
                    alt="Instagram Logo"
                    width={32}
                    height={32}
                    className="invert opacity-50 hover:opacity-100 transition-opacity"
                />
            </motion.a>
        </motion.div>
    );
}

export default TopSocial;

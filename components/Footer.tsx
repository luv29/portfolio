"use client";

import Link from 'next/link';
import Image from 'next/image';
import { motion } from "framer-motion";
import icon from '@/public/images/icon.png';
import github from "@/public/images/github.png";
import linkedin from "@/public/images/linkedin.png";
import instagram from "@/public/images/instagram.png";

const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const logoHover = {
    scale: 1.15,
    transition: { type: "spring", stiffness: 300 }
};

function Footer() {
    return (
        <motion.footer
            className="bg-[#282C33] text-white py-12 px-6 md:px-12 select-none" // Increased padding y from 8 to 12
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
        >
            {/* Divider */}
            <div className="border-t border-[#ABB2BF] opacity-30 mb-6"></div>

            <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-center gap-8 md:gap-0">
                {/* Left Section */}
                <motion.div
                    className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-12"
                    variants={containerVariants}
                >
                    <Link href='/' className="flex items-center gap-3 group">
                        <motion.div whileHover={{ rotate: 12 }} className="inline-block">
                            <Image
                                src={icon}
                                alt="logo"
                                width={24}
                                height={24}
                                className="transition-transform duration-300"
                            />
                        </motion.div>
                        <motion.span
                            className="font-semibold text-xl hover:text-[#61dafb] transition-colors"
                            whileHover={{ scale: 1.05 }}
                        >
                            Luv Kansal
                        </motion.span>
                    </Link>

                    <div className="text-center md:text-left">
                        <p className="text-[#ABB2BF] text-base md:text-lg font-mono mb-1 select-text">
                            luvkansal29@gmail.com
                        </p>
                        <p className="text-lg font-light select-text">Software Engineer</p>
                    </div>
                </motion.div>

                {/* Right Section */}
                <motion.div
                    className="text-center md:text-right"
                    variants={containerVariants}
                >
                    <p className="text-2xl font-semibold mb-3">Profiles</p>
                    <div className="flex justify-center md:justify-end gap-5">
                        {[{
                            href: "https://github.com/luv29",
                            alt: "GitHub Logo",
                            icon: github
                        }, {
                            href: "https://www.linkedin.com/in/luv-kansal/",
                            alt: "LinkedIn Logo",
                            icon: linkedin
                        }, {
                            href: "https://www.instagram.com/luv_295",
                            alt: "Instagram Logo",
                            icon: instagram
                        }].map(({ href, alt, icon }, idx) => (
                            <motion.a
                                key={idx}
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={alt}
                                whileHover={logoHover}
                                className="group"
                            >
                                <Image
                                    src={icon}
                                    alt={alt}
                                    width={24}   // Smaller size
                                    height={24}
                                    className="invert opacity-50 group-hover:opacity-100 transition-opacity duration-300"
                                />
                            </motion.a>
                        ))}
                    </div>
                </motion.div>
            </div>

            {/* Footer Bottom */}
            <motion.p
                className="text-center text-[#ABB2BF] mt-8 text-sm select-text"
                variants={containerVariants}
            >
                © Copyright 2025. Made by Luv Kansal
            </motion.p>
        </motion.footer>
    );
}

export default Footer;

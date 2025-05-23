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
    visible: { 
        opacity: 1, 
        y: 0, 
        transition: { 
            duration: 0.8, 
            ease: "easeOut",
            staggerChildren: 0.2
        } 
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
        opacity: 1, 
        y: 0, 
        transition: { duration: 0.6, ease: "easeOut" } 
    }
};

const logoHover = {
    scale: 1.2,
    rotate: 360,
    transition: { type: "spring", stiffness: 300, damping: 15 }
};

const socialHover = {
    scale: 1.15,
    y: -5,
    transition: { type: "spring", stiffness: 400, damping: 10 }
};

const glowVariants = {
    animate: {
        boxShadow: [
            "0 0 20px rgba(255, 107, 53, 0.3)",
            "0 0 40px rgba(255, 107, 53, 0.5)",
            "0 0 20px rgba(255, 107, 53, 0.3)"
        ],
        transition: {
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
        }
    }
};

function Footer() {
    const currentYear = new Date().getFullYear();
    
    return (
        <motion.footer
            className="bg-gradient-to-br from-[#1a1d23] via-[#282C33] to-[#2a2f37] text-white relative overflow-hidden"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
        >
            {/* Animated Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-10 left-10 w-32 h-32 border border-[#FF6B35] rounded-full animate-pulse"></div>
                <div className="absolute bottom-20 right-20 w-24 h-24 border border-[#61dafb] rounded-full animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-[#ABB2BF] rounded-full animate-pulse delay-500"></div>
            </div>

            {/* Glowing Top Border */}
            <motion.div 
                className="h-1 bg-gradient-to-r from-transparent via-[#FF6B35] to-transparent"
                variants={glowVariants}
                animate="animate"
            />

            <div className="max-w-[1200px] mx-auto px-6 md:px-12 py-16">
                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-12">
                    
                    {/* Brand Section */}
                    <motion.div 
                        className="lg:col-span-1 text-center lg:text-left"
                        variants={itemVariants}
                    >
                        <Link href='/' className="inline-flex items-center gap-4 group mb-6">
                            <motion.div 
                                whileHover={{ rotate: 360, scale: 1.2 }} 
                                className="relative"
                                transition={{ duration: 0.6, ease: "easeInOut" }}
                            >
                                <div className="absolute inset-0 bg-[#FF6B35] opacity-20 rounded-full blur-md"></div>
                                <Image
                                    src={icon}
                                    alt="logo"
                                    width={40}
                                    height={40}
                                    className="relative z-10 transition-all duration-300"
                                />
                            </motion.div>
                            <motion.div className="text-left">
                                <motion.h3
                                    className="font-bold text-2xl bg-gradient-to-r from-white to-[#ABB2BF] bg-clip-text text-transparent group-hover:from-[#FF6B35] group-hover:to-[#61dafb] transition-all duration-500"
                                    whileHover={{ scale: 1.05 }}
                                >
                                    Luv Kansal
                                </motion.h3>
                                <p className="text-[#ABB2BF] text-sm font-mono">Software Engineer</p>
                            </motion.div>
                        </Link>
                        
                        <motion.div 
                            className="space-y-2 mb-6"
                            variants={itemVariants}
                        >
                            <p className="text-[#ABB2BF] font-mono text-sm">
                                <span className="text-[#FF6B35]">&gt;</span> Building digital experiences
                            </p>
                            <p className="text-[#ABB2BF] font-mono text-sm">
                                <span className="text-[#FF6B35]">&gt;</span> One line of code at a time
                            </p>
                        </motion.div>

                        {/* Contact Info with Style */}
                        <motion.div 
                            className="p-4 bg-gradient-to-r from-[#1a1d23] to-[#2a2f37] rounded-lg border border-[#ABB2BF]/20 hover:border-[#FF6B35]/50 transition-all duration-300"
                            whileHover={{ scale: 1.02 }}
                            variants={itemVariants}
                        >
                            <p className="text-[#61dafb] font-mono text-sm mb-1">
                                📧 luvkansal29@gmail.com
                            </p>
                            <p className="text-[#ABB2BF] text-xs">
                                Available for exciting opportunities
                            </p>
                        </motion.div>
                    </motion.div>

                    {/* Navigation/Links Section */}
                    <motion.div 
                        className="lg:col-span-1 text-center"
                        variants={itemVariants}
                    >
                        <h4 className="text-lg font-semibold mb-6 text-[#FF6B35]">Quick Links</h4>
                        <div className="flex flex-col gap-4">
                            {[
                                { label: "Home", href: "/" },
                                { label: "Projects", href: "/projects" }
                            ].map((link, idx) => (
                                <motion.a
                                    key={idx}
                                    href={link.href}
                                    className="text-[#ABB2BF] hover:text-[#61dafb] transition-colors duration-300 font-mono text-sm py-3 px-4 rounded-lg hover:bg-[#ABB2BF]/10 border border-transparent hover:border-[#FF6B35]/30"
                                    whileHover={{ scale: 1.05, x: 5 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <span className="text-[#FF6B35]">/</span>{link.label}
                                </motion.a>
                            ))}
                        </div>

                        {/* Code Block Decoration */}
                        <motion.div 
                            className="mt-8 bg-[#1a1d23] rounded-lg p-4 border border-[#ABB2BF]/20"
                            variants={itemVariants}
                            whileHover={{ scale: 1.02 }}
                        >
                            <div className="flex items-center gap-2 mb-2">
                                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                            </div>
                            <div className="text-left font-mono text-xs space-y-1">
                                <div className="text-purple-400">const <span className="text-blue-400">status</span> = {`{`}</div>
                                <div className="ml-4 text-gray-300">coffee: <span className="text-orange-400">true</span>,</div>
                                <div className="ml-4 text-gray-300">coding: <span className="text-green-400">"24/7"</span></div>
                                <div className="text-purple-400">{`}`}</div>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Social Section */}
                    <motion.div 
                        className="lg:col-span-1 text-center lg:text-right"
                        variants={itemVariants}
                    >
                        <h4 className="text-lg font-semibold mb-6 text-[#FF6B35]">Connect With Me</h4>
                        
                        <div className="flex justify-center lg:justify-end gap-6 mb-8">
                            {[
                                {
                                    href: "https://github.com/luv29",
                                    alt: "GitHub",
                                    icon: github,
                                    color: "hover:bg-gray-700"
                                },
                                {
                                    href: "https://www.linkedin.com/in/luv-kansal/",
                                    alt: "LinkedIn",
                                    icon: linkedin,
                                    color: "hover:bg-blue-600"
                                },
                                {
                                    href: "https://www.instagram.com/luv_295",
                                    alt: "Instagram",
                                    icon: instagram,
                                    color: "hover:bg-pink-600"
                                }
                            ].map(({ href, alt, icon, color }, idx) => (
                                <motion.a
                                    key={idx}
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={alt}
                                    className={`p-3 rounded-full bg-[#ABB2BF]/10 border border-[#ABB2BF]/20 ${color} transition-all duration-300 group`}
                                    variants={socialHover}
                                    whileHover="hover"
                                    whileTap={{ scale: 0.9 }}
                                >
                                    <Image
                                        src={icon}
                                        alt={alt}
                                        width={24}
                                        height={24}
                                        className="invert opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                                    />
                                </motion.a>
                            ))}
                        </div>

                        {/* Fun Stats */}
                        <motion.div 
                            className="grid grid-cols-2 gap-4 text-center"
                            variants={itemVariants}
                        >
                            <div className="bg-gradient-to-br from-[#FF6B35]/20 to-transparent p-3 rounded-lg border border-[#FF6B35]/30">
                                <div className="text-2xl font-bold text-[#FF6B35]">100+</div>
                                <div className="text-xs text-[#ABB2BF]">Commits</div>
                            </div>
                            <div className="bg-gradient-to-br from-[#61dafb]/20 to-transparent p-3 rounded-lg border border-[#61dafb]/30">
                                <div className="text-2xl font-bold text-[#61dafb]">24/7</div>
                                <div className="text-xs text-[#ABB2BF]">Learning</div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>

                {/* Bottom Section */}
                <motion.div 
                    className="border-t border-[#ABB2BF]/20 pt-8"
                    variants={itemVariants}
                >
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <motion.p
                            className="text-[#ABB2BF] text-sm font-mono"
                            variants={itemVariants}
                        >
                            <span className="text-[#FF6B35]">©</span> {currentYear} Luv Kansal. 
                            <span className="text-[#61dafb]"> Crafted with ❤️ and lots of ☕</span>
                        </motion.p>
                        
                        <motion.div 
                            className="flex items-center gap-2 text-sm text-[#ABB2BF] font-mono"
                            variants={itemVariants}
                        >
                            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                            Currently available for work
                        </motion.div>
                    </div>
                </motion.div>
            </div>

            {/* Bottom Glow Effect */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/2 h-1 bg-gradient-to-r from-transparent via-[#FF6B35] to-transparent opacity-50"></div>
        </motion.footer>
    );
}

export default Footer;
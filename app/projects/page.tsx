"use client"

import Image from "next/image"
import qwikaid from "@/public/images/qwikaid.png"
import lockout from "@/public/images/lockout.png"
import dns from "@/public/images/dns.png"
import insted from "@/public/images/insted.png"
import github from "@/public/images/github.png"
import www from "@/public/images/www.png"
import youtube from "@/public/images/youtube.png"
import { motion } from "framer-motion"
import sideDots from "@/public/images/side-dots.png"
import sq from "@/public/images/sq2.png"
import lsq from "@/public/images/sq3.png"
import sideDot2 from '@/public/images/side-dot2.png'
import { JSX } from "react"

function Projects(): JSX.Element {
    const cards = [
        {
            title: "QwikAid",
            subtitle: "Agentic AI–Powered Roadside Assistance App",
            image: qwikaid,
            gradient: "from-cyan-500/20 via-blue-500/20 to-purple-600/20",
            accentColor: "text-cyan-400",
            borderGlow: "border-cyan-500/30",
            features: [
                "<b>Autonomous Agentic AI:</b> LangGraph-powered orchestration for dynamic tool invocation.",
                "<b>Model Context Protocol (MCP):</b> Seamless backend–LLM communication for tool execution.",
                "<b>Persistent Chat:</b> Session storage with SQLite and FastAPI for multi-session support.",
                "<b>Dynamic UI:</b> React Native app with adaptive components based on agent tool state.",
                "<b>Tech Stack:</b> MCP, LangGraph, FastAPI, NestJS, Prisma, React Native, Tailwind CSS, SQLite, MongoDB"
            ],
            links: [
                { label: "Github", icon: github, href: "https://github.com/luv29/QuickAid" },
                { label: "Video", icon: youtube, href: "https://www.youtube.com/watch?v=UXwAH9RPpto" }
            ]
        },
        {
            title: "Lockout",
            subtitle: "1v1 Competitive Programming Platform",
            image: lockout,
            gradient: "from-emerald-500/20 via-green-500/20 to-teal-600/20",
            accentColor: "text-emerald-400",
            borderGlow: "border-emerald-500/30",
            features: [
                "<b>End-to-End Automation:</b> Automated the complete tournament flow — from user registration and Codeforces handle verification to fixture generation, real-time match tracking, and winner advancement.",
                "<b>Stateless Authentication:</b> Secured user access with JWT-based authentication using access/refresh tokens, along with Google/GitHub OAuth for flexible, session-less login and role-based access control.",
                "<b>Real-Time Match Handling:</b> Used WebSockets to monitor Codeforces submissions, auto-scoring every 1.5 minutes.",
                "<b>Tech Stack:</b> Express.js, TypeScript, MongoDB (with Aggregation Pipeline), Socket.IO, React.js, Tailwind CSS, Codeforces API, JWT, OAuth 2.0"
            ],
            links: [
                { label: "Github", icon: github, href: "https://github.com/luv29/Lockout" },
                { label: "Website", icon: www, href: "https://lockout-one.vercel.app/" }
            ]
        },
        {
            title: "DNS Server",
            subtitle: "High-Performance UDP-Based DNS Server",
            image: dns,
            gradient: "from-orange-500/20 via-red-500/20 to-pink-600/20",
            accentColor: "text-orange-400",
            borderGlow: "border-orange-500/30",
            features: [
                "<b>Full Protocol Implementation:</b> Raw UDP parsing and construction (RFC 1035 compliant).",
                "<b>Compression Optimization:</b> Domain name compression & pointer-based name referencing.",
                "<b>Performance Logging:</b> Integrated Winston logger for detailed event tracking.",
                "<b>Tech Stack:</b> Node.js (dgram), TypeScript, MongoDB, Mongoose, Winston Logger"
            ],
            links: [
                { label: "Github", icon: github, href: "https://github.com/luv29/DNS" }
            ]
        },
        {
            title: "InstED",
            subtitle: "AI-Powered Doubt-Solving Social Media Platform",
            image: insted,
            gradient: "from-violet-500/20 via-purple-500/20 to-indigo-600/20",
            accentColor: "text-violet-400",
            borderGlow: "border-violet-500/30",
            features: [
                "<b>Doubt Exchange Platform:</b> Social platform where students can post academic doubts and solve others' queries in a collaborative feed.",
                "<b>AI-Powered Recommendation Engine:</b> Collaborative filtering model implemented with PyTorch, pandas, and FastAPI to personalize doubt feed based on user interest and interaction history.",
                "<b>Stateless Authentication:</b> Uses JWT-based authentication with access/refresh tokens, along with Google OAuth for secure, role-based, session-less login.",
                "<b>Tech Stack:</b> React.js, Tailwind CSS, Node.js, MongoDB, PyTorch, FastAPI, pandas, JWT, OAuth 2.0"
            ],
            links: [
                { label: "Github", icon: github, href: "#" },
            ]
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3
            }
        }
    };

    const cardVariants = {
        hidden: { 
            opacity: 0, 
            y: 100,
            scale: 0.8
        },
        visible: { 
            opacity: 1, 
            y: 0,
            scale: 1,
            transition: {
                duration: 0.8,
                ease: [0.25, 0.46, 0.45, 0.94],
                type: "spring",
                stiffness: 100
            }
        }
    };

    return (
        <div className='w-full flex justify-center py-20 bg-[#282C33] text-white relative overflow-hidden'>
            {/* Background decorative elements */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/5 via-transparent to-purple-900/5" />
            
            {/* Floating orbs */}
            <motion.div 
                className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl"
                animate={{
                    x: [0, 50, 0],
                    y: [0, -30, 0],
                    scale: [1, 1.2, 1],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />
            <motion.div 
                className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-l from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"
                animate={{
                    x: [0, -40, 0],
                    y: [0, 40, 0],
                    scale: [1.2, 1, 1.2],
                }}
                transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />

            {/* Original decorative images */}
            <Image
                src={sideDots}
                alt="."
                className="absolute left-0 top-[50%] hidden md:block opacity-30"
            />
            <Image 
                src={sq}
                alt="sq"
                className="absolute right-0 top-[20%] hidden md:block opacity-30"
            />
            <Image 
                src={lsq}
                alt="sq"
                className="absolute left-0 top-[130%] hidden md:block opacity-30"
            />
            <Image
                src={sideDot2}
                alt="."
                className="absolute right-0 top-[170%] hidden md:block opacity-30"
            />
            <Image
                src={sideDot2}
                alt="."
                className="absolute left-0 top-[250%] hidden md:block opacity-30"
            />

            <div className='w-[90vw] max-w-[1400px] relative z-10'>
                {/* Header Section */}
                <motion.div 
                    className='mb-20 text-center'
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                >
                    <motion.div
                        className="inline-block mb-4"
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <span className="px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 rounded-full text-sm font-mono text-cyan-400">
                            // Featured Projects
                        </span>
                    </motion.div>
                    <h2 className='text-6xl md:text-7xl font-bold mb-6 text-white'>
                        <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
                            My Projects
                        </span>
                    </h2>
                    <p className='text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed'>
                        Innovative solutions built with cutting-edge technologies. 
                        Each project represents a unique challenge solved with passion and precision.
                    </p>
                </motion.div>

                {/* Projects Grid */}
                <motion.div 
                    className="space-y-32"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {cards.map((card, index) => {
                        const isReversed = index % 2 !== 0;
                        return (
                            <motion.div
                                key={index}
                                variants={cardVariants}
                                className="group relative"
                            >
                                {/* Glow effect */}
                                <div className={`absolute -inset-1 bg-gradient-to-r ${card.gradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700`} />
                                
                                <div className={`relative w-full flex flex-col xl:flex-row ${isReversed ? "xl:flex-row-reverse" : ""} items-center gap-12 bg-gradient-to-br from-[#2F343F] via-[#2A2F3A] to-[#252A35] p-10 rounded-3xl border ${card.borderGlow} shadow-2xl backdrop-blur-sm`}>
                                    
                                    {/* Content Section */}
                                    <motion.div
                                        className="w-full xl:w-1/2 space-y-6"
                                        initial={{ x: isReversed ? 60 : -60, opacity: 0 }}
                                        whileInView={{ x: 0, opacity: 1 }}
                                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
                                        viewport={{ once: true }}
                                    >
                                        <div className="space-y-4">
                                            <motion.div
                                                className="flex items-center gap-3"
                                                whileHover={{ x: 5 }}
                                                transition={{ type: "spring", stiffness: 300 }}
                                            >
                                                <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${card.gradient.replace(/\/20/g, '')}`} />
                                                <h4 className="text-3xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 group-hover:bg-clip-text transition-all duration-500">
                                                    {card.title}
                                                </h4>
                                            </motion.div>
                                            <h3 className={`text-xl font-semibold ${card.accentColor} font-mono`}>
                                                {card.subtitle}
                                            </h3>
                                        </div>

                                        <div className="space-y-4">
                                            {card.features.map((feature, idx) => (
                                                <motion.div
                                                    key={idx}
                                                    className="flex items-start gap-3 group/item"
                                                    initial={{ opacity: 0, x: -20 }}
                                                    whileInView={{ opacity: 1, x: 0 }}
                                                    transition={{ duration: 0.5, delay: 0.5 + idx * 0.1 }}
                                                    viewport={{ once: true }}
                                                >
                                                    <div className={`w-1.5 h-1.5 rounded-full ${card.accentColor.replace('text-', 'bg-')} mt-2 flex-shrink-0 group-hover/item:scale-150 transition-transform duration-300`} />
                                                    <p
                                                        className="text-gray-300 leading-relaxed group-hover/item:text-white transition-colors duration-300"
                                                        dangerouslySetInnerHTML={{ __html: feature }}
                                                    />
                                                </motion.div>
                                            ))}
                                        </div>

                                        <motion.div 
                                            className="flex flex-wrap gap-4 pt-4"
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.6, delay: 0.8 }}
                                            viewport={{ once: true }}
                                        >
                                            {card.links.map((link, linkIdx) => (
                                                <motion.a
                                                    key={linkIdx}
                                                    href={link.href}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    whileHover={{ 
                                                        scale: 1.05,
                                                        y: -2
                                                    }}
                                                    whileTap={{ scale: 0.95 }}
                                                    className={`group/link relative overflow-hidden bg-gradient-to-r from-[#353B45] to-[#404752] hover:from-[#4A505C] hover:to-[#525865] text-white border border-[#444C56] hover:${card.borderGlow} px-6 py-3 rounded-xl flex items-center gap-3 transition-all duration-300 font-mono`}
                                                >
                                                    <div className={`absolute inset-0 bg-gradient-to-r ${card.gradient} opacity-0 group-hover/link:opacity-100 transition-opacity duration-300`} />
                                                    <Image
                                                        src={link.icon}
                                                        alt={`${link.label} Logo`}
                                                        width={18}
                                                        height={18}
                                                        className="invert relative z-10 group-hover/link:scale-110 transition-transform duration-300"
                                                    />
                                                    <span className="relative z-10 font-semibold">{link.label}</span>
                                                </motion.a>
                                            ))}
                                        </motion.div>
                                    </motion.div>

                                    {/* Image Section */}
                                    <motion.div
                                        className="w-full xl:w-1/2 relative group/image"
                                        initial={{ x: isReversed ? -60 : 60, opacity: 0 }}
                                        whileInView={{ x: 0, opacity: 1 }}
                                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                                        viewport={{ once: true }}
                                    >
                                        <div className="relative overflow-hidden rounded-2xl">
                                            {/* Image glow effect */}
                                            <div className={`absolute -inset-0.5 bg-gradient-to-r ${card.gradient.replace(/\/20/g, '/40')} rounded-2xl blur opacity-0 group-hover/image:opacity-100 transition-opacity duration-500`} />
                                            
                                            <motion.div
                                                className="relative"
                                                whileHover={{ scale: 1.02 }}
                                                transition={{ duration: 0.4, ease: "easeOut" }}
                                            >
                                                <Image
                                                    src={card.image}
                                                    alt={`${card.title} image`}
                                                    className="rounded-2xl border border-gray-700/50 shadow-2xl w-full h-auto group-hover/image:border-gray-600 transition-colors duration-300"
                                                />
                                                
                                                {/* Overlay gradient */}
                                                <div className={`absolute inset-0 bg-gradient-to-t ${card.gradient} opacity-0 group-hover/image:opacity-30 transition-opacity duration-500 rounded-2xl`} />
                                            </motion.div>
                                        </div>

                                        {/* Floating tech badges */}
                                        <motion.div
                                            className="absolute -top-4 -right-4 px-3 py-1 bg-[#1a1f28] border border-gray-700 rounded-full text-xs text-gray-400 font-mono opacity-0 group-hover/image:opacity-100 transition-all duration-500"
                                            initial={{ scale: 0, rotate: -15 }}
                                            whileInView={{ scale: 1, rotate: 0 }}
                                            transition={{ duration: 0.5, delay: 1 }}
                                            viewport={{ once: true }}
                                        >
                                            Featured
                                        </motion.div>
                                    </motion.div>
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>

                {/* Bottom CTA Section */}
                <motion.div
                    className="mt-32 text-center"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                >
                    <div className="inline-block p-8 bg-gradient-to-br from-[#2F343F] to-[#252A35] rounded-3xl border border-gray-700/30">
                        <h3 className="text-2xl font-bold text-white mb-4">Interested in collaborating?</h3>
                        <p className="text-gray-400 font-mono">Let's build something amazing together.</p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}

export default Projects;
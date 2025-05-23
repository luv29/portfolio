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

function Projects() {
    const cards = [
        {
            title: "QwikAid",
            subtitle: "Agentic AI–Powered Roadside Assistance App",
            image: qwikaid,
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
            features: [
                "<b>Doubt Exchange Platform:</b> Social platform where students can post academic doubts and solve others’ queries in a collaborative feed.",
                "<b>AI-Powered Recommendation Engine:</b> Collaborative filtering model implemented with PyTorch, pandas, and FastAPI to personalize doubt feed based on user interest and interaction history.",
                "<b>Stateless Authentication:</b> Uses JWT-based authentication with access/refresh tokens, along with Google OAuth for secure, role-based, session-less login.",
                "<b>Tech Stack:</b> React.js, Tailwind CSS, Node.js, MongoDB, PyTorch, FastAPI, pandas, JWT, OAuth 2.0"
            ],
            links: [
                { label: "Github", icon: github, href: "#" },
            ]
        }
    ];

    return (
        <div className='w-full flex justify-center py-16 bg-[#282C33] text-white'>
            <Image
                src={sideDots}
                alt="."
                className="absolute left-0 top-[50%] hidden md:block"
            />

            <Image 
                src={sq}
                alt="sq"
                className="absolute right-0 top-[20%] hidden md:block"
            />

            <Image 
                src={lsq}
                alt="sq"
                className="absolute left-0 top-[130%] hidden md:block"
            />

            <Image
                src={sideDot2}
                alt="."
                className="absolute right-0 top-[170%] hidden md:block"
            />

            <Image
                src={sideDot2}
                alt="."
                className="absolute left-0 top-[250%] hidden md:block"
            />

            <div className='w-[90vw] max-w-[1200px]'>
                <div className='mb-12'>
                    <h2 className='text-5xl font-bold mb-2 text-white'>Projects</h2>
                    <p className='text-lg text-gray-400'>Here are some of the most exciting things I've built.</p>
                </div>

                <div className="flex flex-col gap-20">
                    {cards.map((card, index) => {
                        const isReversed = index % 2 !== 0;
                        return (
                            <motion.div
                                key={index}
                                className={`w-full flex flex-col-reverse lg:flex-row ${isReversed ? "lg:flex-row-reverse" : ""} items-center gap-10 bg-[#2F343F] p-8 rounded-2xl shadow-lg`}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, ease: "easeOut" }}
                                viewport={{ once: true }}
                            >
                                <motion.div
                                    className="w-full lg:w-1/2"
                                    initial={{ x: isReversed ? 40 : -40, opacity: 0 }}
                                    whileInView={{ x: 0, opacity: 1 }}
                                    transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
                                    viewport={{ once: true }}
                                >
                                    <h3 className="text-xl font-semibold mb-3 text-[#61dafb]">{card.subtitle}</h3>
                                    <ul className="list-disc ml-5 space-y-2 text-gray-300">
                                        {card.features.map((feature, idx) => (
                                            <li
                                                key={idx}
                                                className="leading-relaxed"
                                                dangerouslySetInnerHTML={{ __html: feature }}
                                            />
                                        ))}
                                    </ul>
                                </motion.div>

                                <motion.div
                                    className="w-full lg:w-1/2"
                                    initial={{ x: isReversed ? -40 : 40, opacity: 0 }}
                                    whileInView={{ x: 0, opacity: 1 }}
                                    transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
                                    viewport={{ once: true }}
                                >
                                    <Image
                                        src={card.image}
                                        alt={`${card.title} image`}
                                        className="rounded-xl border border-gray-700 shadow-md"
                                    />
                                    <div className="flex justify-between items-center mt-5">
                                        <h4 className="text-2xl font-bold text-white">{card.title}</h4>
                                        <div className="flex items-center gap-3">
                                            {card.links.map((link, linkIdx) => (
                                                <a
                                                    key={linkIdx}
                                                    href={link.href}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    <motion.div
                                                        whileHover={{ scale: 1.05 }}
                                                        whileTap={{ scale: 0.95 }}
                                                        className="bg-[#353B45] hover:bg-[#4A505C] text-white border border-[#444C56] px-4 py-2 rounded-lg flex items-center gap-2 transition"
                                                    >
                                                        <Image
                                                            src={link.icon}
                                                            alt={`${link.label} Logo`}
                                                            width={16}
                                                            height={16}
                                                            className="invert"
                                                        />
                                                        {link.label}
                                                    </motion.div>
                                                </a>
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default Projects;

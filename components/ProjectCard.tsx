"use client"

import Image from "next/image"
import lockout from "@/public/images/lockout.png"
// import qwikaid from "@/public/images/qwikaid.png"
// import dns from "@/public/images/dns.png"
import github from "@/public/images/github.png"
import www from "@/public/images/www.png"
import { motion } from "framer-motion"

function ProjectCards() {
    const cards = [
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
                { label: "Github", icon: github, href: "#" },
                { label: "Website", icon: www, href: "#" }
            ]
        },
        {
            title: "QwikAid",
            subtitle: "Agentic AI–Powered Roadside Assistance App",
            image: lockout,
            features: [
                "<b>Autonomous Agentic AI:</b> LangGraph-powered orchestration for dynamic tool invocation.",
                "<b>Model Context Protocol (MCP):</b> Seamless backend–LLM communication for tool execution.",
                "<b>Persistent Chat:</b> Session storage with SQLite and FastAPI for multi-session support.",
                "<b>Dynamic UI:</b> React Native app with adaptive components based on agent tool state.",
                "<b>Tech Stack:</b> MCP, LangGraph, FastAPI, NestJS, Prisma, React Native, Tailwind CSS, SQLite, MongoDB"
            ],
            links: [
                { label: "Github", icon: github, href: "#" },
                { label: "Video", icon: www, href: "#" }
            ]
        },
        {
            title: "DNS Server",
            subtitle: "High-Performance UDP-Based DNS Resolver",
            image: lockout,
            features: [
                "<b>Full Protocol Implementation:</b> Raw UDP parsing and construction (RFC 1035 compliant).",
                "<b>Compression Optimization:</b> Domain name compression & pointer-based name referencing.",
                "<b>Performance Logging:</b> Integrated Winston logger for detailed event tracking.",
                "<b>Tech Stack:</b> Node.js (dgram), TypeScript, MongoDB, Mongoose, Winston Logger"
            ],
            links: [
                { label: "Github", icon: github, href: "#" }
            ]
        }
    ];

    return (
        <div className="flex flex-col gap-12">
            {cards.map((card, index) => {
                const isReversed = index % 2 !== 0;

                return (
                    <motion.div
                        key={index}
                        className={`w-full flex flex-col lg:flex-row ${isReversed ? "lg:flex-row-reverse" : ""} justify-center items-center px-8 py-8 rounded-xl`}
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
                            <div className="text-xl mb-2">{card.subtitle}</div>
                            <ul className="text-[#ABB2BF] list-disc">
                                {card.features.map((feature, idx) => (
                                    <li key={idx} className="p-2" dangerouslySetInnerHTML={{ __html: feature }} />
                                ))}
                            </ul>
                        </motion.div>

                        <motion.div
                            className="w-full lg:w-1/2 mt-6 lg:mt-0 lg:px-8"
                            initial={{ x: isReversed ? -40 : 40, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
                            viewport={{ once: true }}
                        >
                            <Image
                                src={card.image}
                                alt={`${card.title} image`}
                                className="rounded-lg"
                            />
                            <div className="flex justify-between items-center mt-5">
                                <div className="text-2xl">{card.title}</div>
                                <div className="flex items-center gap-3">
                                    {card.links.map((link, linkIdx) => (
                                        <a key={linkIdx} href={link.href} target="_blank" rel="noopener noreferrer">
                                            <motion.div
                                                whileHover={{ scale: 1.05 }}
                                                whileTap={{ scale: 0.95 }}
                                                className="bg-transparent border-white border-1 hover:bg-neutral-600 cursor-pointer transition-colors duration-300 py-2 px-5 rounded-xl flex items-center gap-2"
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
    );
}

export default ProjectCards;

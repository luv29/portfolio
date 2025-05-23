"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import qwikaid from "@/public/images/qwikaid.png";
import lockout from "@/public/images/lockout.png";
import dns from "@/public/images/dns.png";

const projects = [
    {
        image: qwikaid,
        title: "QwikAid",
        tech: ["LangGraph", "MCP", "FastAPI", "SQLite", "OpenAI", "React Native", "Tailwind CSS"],
        description: "Agentic AI–Powered Roadside Assistance App",
        href: "/projects"
    },
    {
        image: lockout,
        title: "Lockout",
        tech: ["Express.js", "TypeScript", "OAuth 2.0", "MonogoDB", "React.js", "Tailwind CSS"],
        description: "1v1 Competitive Programming Platform",
        href: "/projects"
    },
    {
        image: dns,
        title: "DNS Server",
        tech: ["Node.js (dgram)", "TypeScript", "MongoDB", "Winston Logger"],
        description: "High-Performance UDP-Based DNS Server",
        href: "/projects"
    }
];

export default function Projects() {
    return (
        <div className='w-[90vw] max-w-[1200px] mx-auto mt-[100px]'>
            <div className='flex flex-col sm:flex-row items-center justify-between gap-6 mb-10'>
                <div className='flex items-center gap-4 w-full sm:w-auto'>
                    <p className='text-3xl whitespace-nowrap'>Projects</p>
                    <div className='h-[1px] bg-[#C778DD] flex-1'></div>
                </div>

                <Link href="/projects" className="text-lg text-[#C778DD] hover:underline">
                    {"View all ~~>"}
                </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        className="border border-[#ABB2BF] p-4 flex flex-col hover:shadow-xl hover:scale-[1.01] transition-transform rounded-lg"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                    >
                        <Image
                            src={project.image}
                            alt={project.title}
                            className="rounded-md object-cover h-[180px] w-full mb-4"
                        />

                        <div className="border-t border-[#ABB2BF] my-2"></div>

                        <div className="flex flex-wrap gap-2 text-sm text-[#ABB2BF] mb-2">
                            {project.tech.map((tech, idx) => (
                                <span
                                    key={idx}
                                    className="px-2 py-0.5 border border-[#ABB2BF] rounded-full"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>

                        <div className="border-t border-[#ABB2BF] my-2"></div>

                        <p className="text-xl font-semibold mb-1">{project.title}</p>
                        <p className="text-sm text-[#ABB2BF] mb-4">{project.description}</p>

                        <Link
                            href={project.href}
                            className="self-start mt-auto border border-[#C778DD] px-4 py-1 text-sm text-[#C778DD] hover:bg-[#C778DD] hover:text-black transition-colors rounded"
                        >
                            See More {"<~>"}
                        </Link>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}

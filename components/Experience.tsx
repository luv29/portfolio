"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { JSX } from "react"
import bfhlImage from "@/public/images/experience/bfhl.jpeg"

function Experience(): JSX.Element {
    const experiences = [
        {
            company: "Bajaj Finserv Health Limited",
            role: "SDE Intern",
            duration: "Jan 2026 - Feb 2026",
            location: "Pune, Maharashtra",
            description: [
                "Built <b>Cause AI</b>, an AI-powered Root Cause Analysis (RCA) platform using a <b>multi-agent master–slave architecture</b>, reducing investigation time <b>from hours to minutes</b> and enabling <b>90% of Level-1 issues</b> to be resolved directly.",
                "Designed and implemented a <b>Master Orchestrator Agent</b> that autonomously investigates production incidents by coordinating <b>4 specialized observability agents</b> (ELK, ClickHouse, Prometheus, and Azure Log Analytics), each integrated via dedicated <b>MCP servers</b> for tool execution.",
                "Led end-to-end cloud deployment on <b>Azure Kubernetes Service (AKS)</b> with CI/CD using <b>ArgoCD</b>, enabling scalable, reliable, and automated production releases."
            ],
            image: bfhlImage,
            link: {
                url: "https://drive.google.com/file/d/1w16JCn4HkDM27gbLLpZCqL3IrOz_VSkW/view",
                label: "View Internship Letter"
            }
        }
    ];

    return (
        <div id="experience" className='w-full flex justify-center py-20 bg-[#282C33] text-white relative overflow-hidden'>
            <div className='w-[90vw] max-w-[1400px] relative z-10'>
                {/* Header Section */}
                <motion.div 
                    className='mb-16 text-center'
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                >
                    <motion.div
                        className="inline-block mb-6"
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <span className="px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-full text-sm font-mono text-purple-400">
                            // Professional Journey
                        </span>
                    </motion.div>
                    
                    <h2 className='text-6xl md:text-7xl font-bold mb-6'>
                        <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
                            Experience
                        </span>
                    </h2>
                </motion.div>

                {/* Experience Cards */}
                <div className="space-y-16">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            className="group relative"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-red-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700" style={{ willChange: "opacity" }} />
                            
                            <div className="relative w-full flex flex-col xl:flex-row items-center gap-12 bg-gradient-to-br from-[#2F343F] via-[#2A2F3A] to-[#252A35] p-10 rounded-3xl border border-purple-500/30 shadow-2xl">
                                
                                {/* Content Section */}
                                <div className="w-full xl:w-1/2 space-y-6">
                                    <div>
                                        <h3 className="text-3xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 group-hover:bg-clip-text transition-all duration-300">{exp.company}</h3>
                                        <div className="text-xl font-semibold text-purple-400 font-mono mb-2">{exp.role}</div>
                                        <div className="flex gap-4 text-sm text-gray-400 font-mono">
                                            <span>{exp.duration}</span>
                                            <span>|</span>
                                            <span>{exp.location}</span>
                                        </div>
                                    </div>
                                    
                                    <div className="space-y-4">
                                        {exp.description.map((item, idx) => (
                                            <div key={idx} className="flex items-start gap-3 group/item">
                                                <div className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2 flex-shrink-0 group-hover/item:scale-150 transition-transform duration-300" />
                                                <p className="text-gray-300 leading-relaxed group-hover/item:text-white transition-colors duration-300" dangerouslySetInnerHTML={{ __html: item }} />
                                            </div>
                                        ))}
                                    </div>

                                    {/* Action Button */}
                                    {exp.link && (
                                        <motion.a
                                            href={exp.link.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 mt-6 px-6 py-3 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 text-white font-semibold rounded-xl hover:bg-purple-500/30 transition-all duration-300 group/btn"
                                            whileHover={{ scale: 1.05, y: -2 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            <span>{exp.link.label}</span>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover/btn:translate-x-1 transition-transform duration-200"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                                        </motion.a>
                                    )}
                                </div>

                                {/* Image Section */}
                                <div className="w-full xl:w-1/2 relative group/image">
                                    <div className="relative overflow-hidden rounded-2xl aspect-video bg-[#1a1f28] border border-gray-700/50 flex items-center justify-center shadow-2xl group-hover/image:border-gray-600 transition-colors duration-300">
                                        {exp.image && (
                                            <Image src={exp.image} alt={exp.company} className="object-cover w-full h-full" />
                                        )}
                                        <div className="absolute inset-0 bg-gradient-to-t from-purple-500/20 via-pink-500/20 to-red-600/20 opacity-0 group-hover/image:opacity-30 transition-opacity duration-500 rounded-2xl" />
                                    </div>
                                </div>
                                
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Experience;

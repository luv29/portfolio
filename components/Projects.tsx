"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { JSX } from "react";

interface IProject {
    image: string;
    title: string;
    tech: string[];
    description: string;
    category: string;
    href: string;
    featured: boolean;
}

const projects: IProject[] = [
    {
        image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&h=400&fit=crop",
        title: "QwikAid",
        tech: ["LangGraph", "MCP", "FastAPI", "SQLite", "OpenAI", "React Native", "Tailwind CSS"],
        description: "Agentic AI–Powered Roadside Assistance App",
        category: "AI/Mobile",
        href: "/projects",
        featured: true
    },
    {
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop",
        title: "Lockout",
        tech: ["Express.js", "TypeScript", "OAuth 2.0", "MongoDB", "React.js", "Tailwind CSS"],
        description: "1v1 Competitive Programming Platform",
        category: "Web Platform",
        href: "/projects",
        featured: false
    }
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.1
        }
    }
};

const cardVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.9 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1]
        }
    }
};

const ProjectCard: React.FC<{
    project: IProject
}> = ({ project }) => {
    const router = useRouter();
    const { image, title, tech, description, category, featured } = project;

    return (
        <motion.div
            variants={cardVariants}
            className={`group relative overflow-hidden rounded-2xl bg-[#1e1e24] border border-[#3a3f4b] hover:border-[#C778DD]/50 transition-all duration-700 ${
                featured ? 'lg:col-span-2 lg:row-span-1' : ''
            }`}
            whileHover={{
                y: -8,
                transition: { duration: 0.3, ease: "easeOut" }
            }}
        >
            {/* Background Image */}
            <div className="absolute inset-0 overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center scale-110 group-hover:scale-105 transition-transform duration-700"
                    style={{ backgroundImage: `url(${image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#282C33]/95 via-[#282C33]/80 to-[#282C33]/60" />
                <div className="absolute inset-0 bg-gradient-to-br from-[#C778DD]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>

            {/* Content */}
            <div className={`relative z-10 p-8 h-full flex flex-col justify-between ${featured ? 'lg:p-10' : ''}`}>
                {/* Category Badge */}
                <div className="flex items-center justify-between mb-6">
                    <span className="px-3 py-1 text-xs font-medium text-[#C778DD] bg-[#C778DD]/10 rounded-full border border-[#C778DD]/20">
                        {category}
                    </span>
                    {featured && (
                        <span className="px-3 py-1 text-xs font-medium text-emerald-400 bg-emerald-400/10 rounded-full border border-emerald-400/20">
                            Featured
                        </span>
                    )}
                </div>

                {/* Info */}
                <div className="flex-1">
                    <h3 className={`font-bold text-white mb-3 group-hover:text-[#C778DD] transition-colors duration-300 ${
                        featured ? 'text-3xl lg:text-4xl' : 'text-xl'
                    }`}>
                        {title}
                    </h3>
                    <p className={`text-slate-300 leading-relaxed mb-6 ${featured ? 'text-lg' : 'text-sm'}`}>
                        {description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-8">
                        {tech.slice(0, featured ? tech.length : 4).map((techItem, idx) => (
                            <span
                                key={idx}
                                className="px-3 py-1 text-xs font-medium text-slate-300 bg-slate-800/50 rounded-lg border border-slate-600/30 hover:border-[#C778DD]/50 hover:text-[#C778DD] transition-colors duration-300"
                            >
                                {techItem}
                            </span>
                        ))}
                        {!featured && tech.length > 4 && (
                            <span className="px-3 py-1 text-xs font-medium text-slate-400 bg-slate-800/30 rounded-lg border border-slate-600/20">
                                +{tech.length - 4} more
                            </span>
                        )}
                    </div>
                </div>

                {/* Only View Project Button */}
                <div>
                    <button className="flex items-center gap-2 px-6 py-3 bg-[#C778DD] text-black font-medium rounded-xl hover:bg-[#C778DD]/90 hover:scale-105 transition-all duration-300 group/btn" onClick={() => router.push('/projects')}>
                        <span>View Project</span>
                        <ArrowUpRight className="w-4 h-4 group-hover/btn:rotate-45 transition-transform duration-300" />
                    </button>
                </div>
            </div>
        </motion.div>
    );
};

export default function Projects(): JSX.Element {
    const router = useRouter();

    return (
        <section className="relative py-24 px-4 overflow-hidden bg-[#282C33] text-white">
            {/* Blurred Gradient Circles */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#C778DD]/5 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />

            <div className="relative z-10 max-w-7xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    className="text-center mb-20"
                >
                    <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
                        Projects
                    </h2>

                    <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
                        A showcase of my latest work, featuring innovative solutions and cutting-edge technologies.
                    </p>
                </motion.div>

                {/* Projects Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16"
                >
                    {projects.map((project, index) => (
                        <ProjectCard key={index} project={project} />
                    ))}
                </motion.div>

                {/* CTA Button */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-center"
                >
                    <button className="group relative px-8 py-4 text-lg font-semibold text-white border-2 border-[#C778DD] rounded-2xl hover:bg-[#C778DD] hover:text-black transition-all duration-500 overflow-hidden" onClick={() => router.push('/projects')}>
                        <span className="relative z-10 flex items-center gap-3">
                            View All Projects
                            <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform duration-300" />
                        </span>
                        <div className="absolute inset-0 bg-[#C778DD] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                    </button>
                </motion.div>
            </div>
        </section>
    );
}

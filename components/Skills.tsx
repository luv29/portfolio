'use client';
import { useState, useEffect } from "react";

const skills = [
    {
        category: "Languages",
        items: ["C", "C++", "Java", "Python", "JavaScript", "TypeScript", "Bash", "SQL"],
        gradient: "from-purple-400 via-pink-400 to-red-400",
        icon: "💻",
        bgGlow: "bg-purple-400/10"
    },
    {
        category: "Frameworks",
        items: ["Next.js", "FastAPI", "LangChain", "LangGraph", "React.js", "Express.js"],
        gradient: "from-blue-400 via-cyan-400 to-teal-400",
        icon: "⚡",
        bgGlow: "bg-cyan-400/10"
    },
    {
        category: "Databases",
        items: ["MongoDB", "SQLite", "PostgreSQL"],
        gradient: "from-green-400 via-emerald-400 to-lime-400",
        icon: "🗄️",
        bgGlow: "bg-green-400/10"
    },
    {
        category: "Cloud & DevOps",
        items: ["AWS", "Docker", "Kubernetes", "Git", "Nginx"],
        gradient: "from-yellow-400 via-orange-400 to-red-400",
        icon: "☁️",
        bgGlow: "bg-yellow-400/10"
    },
];

const FloatingOrb = ({ delay, size, position }) => (
    <div
        className={`absolute ${position} ${size} rounded-full opacity-20 animate-pulse pointer-events-none`}
        style={{
            background: `radial-gradient(circle, rgba(199, 120, 221, 0.2) 0%, transparent 70%)`,
            animationDelay: `${delay}s`,
            animationDuration: '4s'
        }}
    />
);

const SkillCard = ({ skill, index, isHovered, setHoveredCard }) => {
    const [animatedItems, setAnimatedItems] = useState([]);

    useEffect(() => {
        if (isHovered) {
            skill.items.forEach((_, i) => {
                setTimeout(() => {
                    setAnimatedItems(prev => [...prev, i]);
                }, i * 100);
            });
        } else {
            setAnimatedItems([]);
        }
    }, [isHovered, skill.items]);

    return (
        <div
            className="relative group cursor-pointer"
            onMouseEnter={() => setHoveredCard(index)}
            onMouseLeave={() => setHoveredCard(null)}
            style={{
                transform: isHovered ? 'translateY(-10px) scale(1.02)' : 'translateY(0) scale(1)',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
            }}
        >
            <div className={`absolute -inset-1 rounded-3xl ${skill.bgGlow} blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500`} />

            <div className="relative overflow-hidden rounded-3xl bg-[#1e1e24] border border-[#3a3f4b] group-hover:border-[#5a5f6b] transition-all duration-500 backdrop-blur-md">
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 bg-gradient-to-br ${skill.gradient} transition-all duration-700`} />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                    <div className="absolute top-0 -left-full h-full w-1/2 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 animate-[shimmer_2s_ease-in-out_infinite]" />
                </div>

                <div className="relative p-8 text-white">
                    <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center space-x-4">
                            <div className={`text-4xl transition-transform duration-500 ${isHovered ? 'scale-110 rotate-12' : ''}`}>
                                {skill.icon}
                            </div>
                            <div>
                                <h3 className={`text-2xl font-bold bg-gradient-to-r ${skill.gradient} bg-clip-text text-transparent`}>
                                    {skill.category}
                                </h3>
                                <div className={`h-1 bg-gradient-to-r ${skill.gradient} rounded-full ${isHovered ? 'w-24' : 'w-12'} transition-all duration-700`} />
                            </div>
                        </div>
                        <div className={`text-gray-400 font-mono text-sm ${isHovered ? 'opacity-100 translate-x-0' : 'opacity-60 translate-x-2'} transition-all duration-500`}>
                            {skill.items.length} skills
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                        {skill.items.map((item, i) => (
                            <div
                                key={i}
                                className="relative group/item"
                                style={{
                                    opacity: animatedItems.includes(i) ? 1 : 0.7,
                                    transform: animatedItems.includes(i) ? 'translateX(0)' : 'translateX(-10px)',
                                    transition: `all 0.3s ease-out ${i * 0.1}s`
                                }}
                            >
                                <div className="relative overflow-hidden rounded-xl bg-[#2e2e38] p-3 border border-[#444857] group-hover/item:border-[#62666f] transition-all duration-300">
                                    <div className={`absolute inset-0 opacity-0 group-hover/item:opacity-20 bg-gradient-to-r ${skill.gradient} transition-opacity duration-300`} />
                                    <div className="relative flex items-center space-x-2">
                                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${skill.gradient} opacity-60 group-hover/item:opacity-100`} />
                                        <span className="text-gray-300 font-medium text-sm group-hover/item:text-white transition-colors duration-300">
                                            {item}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-6 flex justify-center">
                        <div className="flex space-x-1">
                            {skill.items.map((_, i) => (
                                <div
                                    key={i}
                                    className={`w-1.5 h-1.5 rounded-full ${
                                        animatedItems.includes(i)
                                            ? `bg-gradient-to-r ${skill.gradient}`
                                            : 'bg-gray-600'
                                    } transition-all duration-300`}
                                    style={{ transitionDelay: `${i * 100}ms` }}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default function SkillsSection() {
    const [hoveredCard, setHoveredCard] = useState(null);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <section className="relative min-h-screen overflow-hidden py-24 px-6 bg-[#282C33] text-white font-mono">
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px]" />
                <FloatingOrb delay={0} size="w-96 h-96" position="top-10 -left-48" />
                <FloatingOrb delay={2} size="w-64 h-64" position="top-1/2 -right-32" />
                <FloatingOrb delay={4} size="w-80 h-80" position="bottom-10 left-1/4" />
                <div
                    className="absolute w-96 h-96 rounded-full opacity-5 pointer-events-none transition-all duration-1000 ease-out"
                    style={{
                        background: 'radial-gradient(circle, rgba(199, 120, 221, 0.6) 0%, transparent 70%)',
                        left: mousePosition.x - 192,
                        top: mousePosition.y - 192,
                    }}
                />
            </div>

            <div className="relative max-w-7xl mx-auto">
                <div className="text-center mb-20">
                    <div className="inline-block">
                        <h2 className="text-6xl md:text-7xl font-black text-transparent bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text mb-4 tracking-tight">
                            <span className="text-purple-400">#</span> My Skills
                        </h2>
                        <div className="h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent rounded-full animate-pulse" />
                    </div>
                    <p className="text-gray-400 text-xl mt-8 max-w-2xl mx-auto leading-relaxed">
                        Crafting digital experiences with cutting-edge technologies and creative solutions
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                    {skills.map((skill, index) => (
                        <SkillCard
                            key={index}
                            skill={skill}
                            index={index}
                            isHovered={hoveredCard === index}
                            setHoveredCard={setHoveredCard}
                        />
                    ))}
                </div>

                <div className="flex justify-center mt-20">
                    <div className="flex space-x-2">
                        {[...Array(5)].map((_, i) => (
                            <div
                                key={i}
                                className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 animate-pulse"
                                style={{ animationDelay: `${i * 0.2}s` }}
                            />
                        ))}
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes shimmer {
                    0% { transform: translateX(-100%) skewX(12deg); }
                    100% { transform: translateX(200%) skewX(12deg); }
                }
            `}</style>
        </section>
    );
}

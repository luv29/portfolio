"use client"

import { motion } from "framer-motion"
import { Trophy, Star, Medal, Target, Code, Award, Zap, Crown, ExternalLink, Users } from "lucide-react"
import React, { JSX } from "react";

function Achievements(): JSX.Element {
    const achievements = [
        {
            icon: Code,
            title: "Codeforces Expert",
            subtitle: "1773 Rating",
            description: "Achieved a max rating of 1773 (Expert) on Codeforces - Top 5% in the country.",
            gradient: "from-blue-400 via-blue-500 to-blue-600",
            bgGradient: "from-blue-500/10 via-blue-500/10 to-blue-600/10",
            borderColor: "border-blue-500/30",
            glowColor: "shadow-blue-500/20",
            category: "Competitive Programming",
            link: {
                url: "https://codeforces.com/profile/luv29",
                label: "View Profile"
            }
        },
        {
            icon: Star,
            title: "CodeChef 5-Star",
            subtitle: "2070 Rating",
            description: "Achieved a max rating of 2070 (5-star) on CodeChef - Top 0.5% globally.",
            gradient: "from-purple-400 via-purple-500 to-indigo-600",
            bgGradient: "from-purple-500/10 via-purple-500/10 to-indigo-600/10",
            borderColor: "border-purple-500/30",
            glowColor: "shadow-purple-500/20",
            category: "Competitive Programming",
            link: {
                url: "https://codechef.com/users/luvkansal29",
                label: "View Profile"
            }
        },
        {
            icon: Crown,
            title: "LeetCode Knight",
            subtitle: "2080 Rating",
            description: "Achieved a max rating of 2080 (Knight) on LeetCode - Top 2% globally.",
            gradient: "from-emerald-400 via-green-500 to-teal-600",
            bgGradient: "from-emerald-500/10 via-green-500/10 to-teal-600/10",
            borderColor: "border-emerald-500/30",
            glowColor: "shadow-emerald-500/20",
            category: "Competitive Programming",
            link: {
                url: "https://leetcode.com/luvkansal29",
                label: "View Profile"
            }
        },
        {
            icon: Trophy,
            title: "OPTIGO Inter-IIIT Contest",
            subtitle: "5th Rank",
            description: "Secured 5th rank in OPTIGO, the inter-IIIT coding contest hosted by CODAME, IIIT Bhopal.",
            gradient: "from-yellow-400 via-orange-500 to-red-500",
            bgGradient: "from-yellow-500/10 via-orange-500/10 to-red-500/10",
            borderColor: "border-yellow-500/30",
            glowColor: "shadow-yellow-500/20",
            category: "Contest",
            link: {
                url: "https://drive.google.com/file/d/1VtQjLaCHEK8UGNFVrAiFpzrK9DN8jHxe/view?usp=drive_link",
                label: "View Certificate"
            }
        },
        {
            icon: Users,
            title: "GDG Solution Challenge",
            subtitle: "Top 105 Teams",
            description: "Shortlisted among the top 105 teams in the Google Developer Groups Solution Challenge.",
            gradient: "from-red-400 via-red-500 to-orange-600",
            bgGradient: "from-red-500/10 via-red-500/10 to-orange-600/10",
            borderColor: "border-red-500/30",
            glowColor: "shadow-red-500/20",
            category: "Competition",
            link: {
                url: "https://drive.google.com/file/d/1n-XVrTzf59fsXAh6sKXvtXbTrP5jH8RK/view?usp=drive_link",
                label: "View Badge"
            }
        },
        {
            icon: Zap,
            title: "Odoo x Mindbend Hackathon",
            subtitle: "Finalist",
            description: "Finalist of Odoo x Mindbend Hackathon (top 50 out of 1200+ teams).",
            gradient: "from-pink-400 via-rose-500 to-red-500",
            bgGradient: "from-pink-500/10 via-rose-500/10 to-red-500/10",
            borderColor: "border-pink-500/30",
            glowColor: "shadow-pink-500/20",
            category: "Hackathon",
            link: {
                url: "https://drive.google.com/file/d/1Tv77mfnyDxCLAxLtM_BNvXVUsaZCprqR/view?usp=drive_link",
                label: "View Certificate"
            }
        },
        {
            icon: Target,
            title: "JEE Advanced & Mains",
            subtitle: "AIR 9960 & 98.6%ile",
            description: "Secured All India Rank 9960 in JEE Advanced and 98.6 percentile in JEE Mains.",
            gradient: "from-cyan-400 via-sky-500 to-blue-600",
            bgGradient: "from-cyan-500/10 via-sky-500/10 to-blue-600/10",
            borderColor: "border-cyan-500/30",
            glowColor: "shadow-cyan-500/20",
            category: "Academic",
            link: {
                url: "#",
                label: "View Scorecard"
            }
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2
            }
        }
    };

    const cardVariants = {
        hidden: { 
            opacity: 0, 
            y: 50,
            scale: 0.9
        },
        visible: { 
            opacity: 1, 
            y: 0,
            scale: 1,
            transition: {
                duration: 0.6,
                ease: [0.25, 0.46, 0.45, 0.94]
            }
        }
    };

    const iconVariants = {
        hidden: { scale: 0, rotate: -180 },
        visible: { 
            scale: 1, 
            rotate: 0,
            transition: {
                type: "spring",
                stiffness: 200,
                damping: 15,
                delay: 0.3
            }
        }
    };

    return (
        <div className='w-full flex justify-center py-20 bg-gradient-to-b from-[#282C33] via-[#252A35] to-[#282C33] text-white relative overflow-hidden'>
            {/* Animated Background Elements */}
            <motion.div 
                className="absolute top-10 left-20 w-64 h-64 bg-gradient-to-r from-yellow-500/5 to-orange-500/5 rounded-full blur-3xl"
                animate={{
                    x: [0, 40, 0],
                    y: [0, -20, 0],
                    scale: [1, 1.1, 1],
                }}
                transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />
            <motion.div 
                className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-l from-purple-500/5 to-blue-500/5 rounded-full blur-3xl"
                animate={{
                    x: [0, -30, 0],
                    y: [0, 30, 0],
                    scale: [1.1, 1, 1.1],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />

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
                        <span className="px-4 py-2 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-500/30 rounded-full text-sm font-mono text-yellow-400">
                            // Milestones & Recognition
                        </span>
                    </motion.div>
                    
                    <h2 className='text-6xl md:text-7xl font-bold mb-6'>
                        <span className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
                            Achievements
                        </span>
                    </h2>
                    
                    <p className='text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed'>
                        Recognition and milestones that reflect dedication, skill, and continuous growth in competitive programming and software development.
                    </p>
                </motion.div>

                {/* Stats Overview */}
                <motion.div
                    className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    viewport={{ once: true }}
                >
                    {[
                        { label: "Contest Ranks", value: "Top 5%" },
                        { label: "Global Rating", value: "2000+" },
                        { label: "Competitions", value: "8+" },
                        { label: "JEE Advance AIR", value: "9960" }
                    ].map((stat, index) => (
                        <motion.div
                            key={index}
                            className="bg-gradient-to-br from-[#2F343F] to-[#252A35] p-6 rounded-2xl border border-gray-700/30 text-center group hover:border-yellow-500/30 transition-all duration-300"
                            whileHover={{ scale: 1.05, y: -5 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <div className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent mb-2">
                                {stat.value}
                            </div>
                            <div className="text-sm text-gray-400 font-mono">
                                {stat.label}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Achievements Grid */}
                <motion.div 
                    className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {achievements.map((achievement, index) => {
                        const IconComponent = achievement.icon;
                        
                        return (
                            <motion.div
                                key={index}
                                variants={cardVariants}
                                className="group relative"
                                whileHover={{ y: -10, scale: 1.02 }}
                                transition={{ duration: 0.3 }}
                            >
                                {/* Glow Effect */}
                                <div className={`absolute -inset-0.5 bg-gradient-to-r ${achievement.gradient} rounded-3xl blur opacity-0 group-hover:opacity-30 transition-all duration-500`} />
                                
                                <div className={`relative h-full bg-gradient-to-br from-[#2F343F] via-[#2A2F3A] to-[#252A35] p-8 rounded-3xl border ${achievement.borderColor} shadow-xl ${achievement.glowColor} group-hover:shadow-2xl transition-all duration-500`}>
                                    
                                    {/* Category Badge */}
                                    <motion.div
                                        className="absolute -top-3 -right-3 px-3 py-1 bg-[#1a1f28] border border-gray-700 rounded-full text-xs text-gray-400 font-mono opacity-0 group-hover:opacity-100 transition-all duration-300"
                                        initial={{ scale: 0, rotate: 15 }}
                                        whileInView={{ scale: 1, rotate: 0 }}
                                        transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                                        viewport={{ once: true }}
                                    >
                                        {achievement.category}
                                    </motion.div>

                                    {/* Icon */}
                                    <motion.div
                                        className="relative mb-6"
                                        variants={iconVariants}
                                    >
                                        <div className={`absolute inset-0 bg-gradient-to-r ${achievement.bgGradient} rounded-2xl blur-sm`} />
                                        <div className={`relative w-16 h-16 bg-gradient-to-r ${achievement.gradient} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                                            <IconComponent size={28} className="text-white" />
                                        </div>
                                    </motion.div>

                                    {/* Content */}
                                    <motion.div
                                        className="space-y-4"
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                                        viewport={{ once: true }}
                                    >
                                        <div>
                                            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 group-hover:bg-clip-text transition-all duration-300">
                                                {achievement.title}
                                            </h3>
                                            <div className={`text-lg font-semibold bg-gradient-to-r ${achievement.gradient} bg-clip-text text-transparent font-mono`}>
                                                {achievement.subtitle}
                                            </div>
                                        </div>
                                        
                                        <p className="text-gray-400 leading-relaxed text-sm group-hover:text-gray-300 transition-colors duration-300">
                                            {achievement.description}
                                        </p>

                                        {/* Action Button */}
                                        <motion.a
                                            href={achievement.link.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`inline-flex items-center gap-2 mt-4 px-4 py-2 bg-gradient-to-r ${achievement.gradient} text-white text-sm font-semibold rounded-lg hover:shadow-lg transition-all duration-300 group/btn`}
                                            whileHover={{ scale: 1.05, y: -2 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            <span>{achievement.link.label}</span>
                                            <ExternalLink size={14} className="group-hover/btn:translate-x-1 transition-transform duration-200" />
                                        </motion.a>
                                    </motion.div>

                                    {/* Decorative Element */}
                                    <motion.div
                                        className={`absolute bottom-4 right-4 w-8 h-8 bg-gradient-to-r ${achievement.gradient} rounded-full opacity-10 group-hover:opacity-20 transition-opacity duration-300`}
                                        animate={{
                                            scale: [1, 1.2, 1],
                                            rotate: [0, 180, 360]
                                        }}
                                        transition={{
                                            duration: 4,
                                            repeat: Infinity,
                                            ease: "easeInOut"
                                        }}
                                    />
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>

                {/* Bottom Recognition Section */}
                <motion.div
                    className="mt-20 text-center"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                >
                    <div className="inline-block p-8 bg-gradient-to-br from-[#2F343F] to-[#252A35] rounded-3xl border border-gray-700/30 relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/5 via-orange-500/5 to-red-500/5" />
                        <div className="relative">
                            <motion.div
                                className="flex justify-center mb-4"
                                whileHover={{ rotate: 360 }}
                                transition={{ duration: 0.6 }}
                            >
                                <Trophy className="w-8 h-8 text-yellow-400" />
                            </motion.div>
                            <h3 className="text-2xl font-bold text-white mb-4">Continuous Excellence</h3>
                            <p className="text-gray-400 font-mono max-w-md">
                                Each achievement represents countless hours of dedication, 
                                problem-solving, and the pursuit of excellence in technology.
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}

export default Achievements;
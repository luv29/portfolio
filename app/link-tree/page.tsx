'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Github, Code, Trophy, Award, ExternalLink, Terminal, Zap } from 'lucide-react';

export default function LinkTreePage() {
  const codingProfiles = [
    {
      name: 'Codeforces',
      icon: <Code className="w-5 h-5" />,
      url: 'https://codeforces.com/profile/luv29',
      color: 'from-blue-500 to-blue-600',
      description: 'Competitive Programming',
      handle: '@luv29'
    },
    {
      name: 'CodeChef',
      icon: <Code className="w-5 h-5" />,
      url: 'https://www.codechef.com/users/luvkansal29',
      color: 'from-orange-500 to-red-500',
      description: 'Algorithmic Challenges',
      handle: '@luvkansal29'
    },
    {
      name: 'LeetCode',
      icon: <Code className="w-5 h-5" />,
      url: 'https://leetcode.com/u/luvkansal29/',
      color: 'from-yellow-500 to-orange-500',
      description: 'Technical Interviews',
      handle: '@luvkansal29'
    },
    {
      name: 'GitHub',
      icon: <Github className="w-5 h-5" />,
      url: 'https://github.com/luv29',
      color: 'from-gray-600 to-gray-700',
      description: 'Open Source Projects',
      handle: '@luv29'
    }
  ];

  const achievements = [
    {
      title: '5th Rank - Inter-IIIT Coding Contest Optigo',
      icon: <Trophy className="w-5 h-5" />,
      type: 'Achievement',
      color: 'from-yellow-400 to-yellow-500',
      year: '2024',
      description: 'Among top performers in prestigious inter-college competition',
      url: "https://drive.google.com/file/d/1VtQjLaCHEK8UGNFVrAiFpzrK9DN8jHxe/view?usp=drive_link"
    },
    {
      title: 'Finalist - Odoo x Mindbend Hackathon',
      icon: <Award className="w-5 h-5" />,
      type: 'Hackathon',
      color: 'from-purple-500 to-purple-600',
      year: '2024',
      description: 'Selected as finalist in national-level hackathon',
      url: "https://drive.google.com/file/d/1Tv77mfnyDxCLAxLtM_BNvXVUsaZCprqR/view?usp=drive_link"
    },
    {
      title: 'Machine Learning Specialization Course',
      icon: <Award className="w-5 h-5" />,
      type: 'Certification',
      color: 'from-blue-500 to-indigo-600',
      year: '2024',
      description: 'Completed comprehensive ML specialization program',
      url: "https://drive.google.com/file/d/1iQSHacI_DNs5yrF_NOnJ3tLyUsLp7X3n/view?usp=drive_link"
    },
    {
      title: 'GDG Solution Challenge - Finalist',
      icon: <Award className="w-5 h-5" />,
      type: 'Competition',
      color: 'from-green-500 to-green-600',
      year: '2024',
      description: 'Invited to the Google office for the finals; ranked top 14',
      url: "https://drive.google.com/file/d/1ftX8XoEhhCvvvVlbzy21x6aNxZ2Tipvo/view?usp=sharing"
    },
    {
      title: 'JEE Advanced & Mains',
      icon: <Award className="w-5 h-5" />,
      type: 'Academic',
      color: 'from-cyan-500 to-cyan-600',
      year: '2022',
      description: 'Secured AIR 9960 in JEE Advanced and 98.6%ile in JEE Mains',
      url: "https://drive.google.com/file/d/1-GD4KYoTtz6LX2jWfNzFXOyY6gS0tcs2/view?usp=sharing"
    },
    {
      title: 'Bajaj HackRX 6.0 - Winner',
      icon: <Trophy className="w-5 h-5" />,
      type: 'Hackathon',
      color: 'from-pink-500 to-pink-600',
      year: '2025',
      description: 'Winner of the Pitcher Perfect Award',
      url: "https://drive.google.com/file/d/177V_RN2n8jNh6I3LOLi7EzMnv03_5LIF/view?usp=sharing"
    },
    {
      title: 'ICPC Kanpur Regionalist',
      icon: <Trophy className="w-5 h-5" />,
      type: 'Competitive Programming',
      color: 'from-blue-500 to-blue-600',
      year: '2025',
      description: 'Secured Rank 48 at ICPC Kanpur Regionals',
      url: "https://drive.google.com/file/d/1ivlzpnp-NfnYrvcbyxwiEJEWPO7RlEb8/view?usp=sharing"
    },
    {
      title: 'DTCC India AI Hackathon - Winner',
      icon: <Trophy className="w-5 h-5" />,
      type: 'Hackathon',
      color: 'from-purple-500 to-purple-600',
      year: '2025',
      description: 'Academic Institution Team Award for Investica',
      url: "https://drive.google.com/file/d/1cCYXs4RtL-pCmEf31XMzItwV_YJEKz57/view?usp=sharing"
    },
    {
      title: 'Bajaj Finserv Health - SDE Internship',
      icon: <Award className="w-5 h-5" />,
      type: 'Experience',
      color: 'from-red-500 to-orange-500',
      year: '2026',
      description: 'Software Development Engineer Internship Offer Letter',
      url: "https://drive.google.com/file/d/1w16JCn4HkDM27gbLLpZCqL3IrOz_VSkW/view"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#282C33] text-white font-mono">
      <div className="container mx-auto px-6 py-20 max-w-3xl">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative mb-8">
            <motion.div 
              className="w-24 h-24 bg-gradient-to-r from-[#FF6B35] to-[#FF8E53] rounded-full mx-auto flex items-center justify-center relative"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              <Terminal className="w-12 h-12 text-white" />
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-[#FF6B35] opacity-30"
                animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.1, 0.3] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />
            </motion.div>
          </div>
          
          <h1 className="text-4xl font-bold mb-4">
            <span className="text-[#FF6B35]">&lt;</span>
            <span className="bg-gradient-to-r from-white to-[#ABB2BF] bg-clip-text text-transparent">
              Dev Connect
            </span>
            <span className="text-[#FF6B35]">/&gt;</span>
          </h1>
          
          <div className="flex items-center justify-center gap-2 text-sm text-[#ABB2BF]">
            <Zap className="w-4 h-4 text-[#FF6B35]" />
            <span className="font-mono">Status: Available for work</span>
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          </div>
        </motion.div>

        {/* Coding Profiles Section */}
        <motion.div 
          className="mb-16"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h2 
            className="text-2xl font-bold mb-8 flex items-center text-white"
            variants={itemVariants}
          >
            <Code className="w-6 h-6 mr-3 text-[#FF6B35]" />
            <span className="text-[#FF6B35]">01.</span> Coding Profiles
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {codingProfiles.map((profile, index) => (
              <motion.div key={index} variants={itemVariants}>
                <motion.a
                  href={profile.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="bg-[#1E2328] rounded-xl p-6 transition-all duration-300 hover:bg-[#21262D] border border-[#ABB2BF]/10 hover:border-[#FF6B35]/30 hover:shadow-lg hover:shadow-[#FF6B35]/10">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center">
                        <div className={`p-3 rounded-lg bg-gradient-to-r ${profile.color} mr-4`}>
                          {profile.icon}
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg text-white">{profile.name}</h3>
                          <p className="text-[#ABB2BF] text-sm">{profile.handle}</p>
                        </div>
                      </div>
                      <ExternalLink className="w-5 h-5 text-[#ABB2BF] group-hover:text-[#FF6B35] transition-colors" />
                    </div>
                    <p className="text-[#ABB2BF] text-sm">{profile.description}</p>
                  </div>
                </motion.a>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Achievements Section */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h2 
            className="text-2xl font-bold mb-8 flex items-center text-white"
            variants={itemVariants}
          >
            <Trophy className="w-6 h-6 mr-3 text-[#FF6B35]" />
            <span className="text-[#FF6B35]">02.</span> Achievements & Certifications
          </motion.h2>
          
          <div className="space-y-4">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <a 
                    href={achievement.url}
                    className='cursor-pointer'
                    target="_blank"
                    rel="noopener noreferrer"
                >

                    <div className="bg-[#1E2328] rounded-xl p-6 transition-all duration-300 hover:bg-[#21262D] border border-[#ABB2BF]/10 hover:border-[#FF6B35]/30 hover:shadow-lg hover:shadow-[#FF6B35]/10 group">
                    <div className="flex items-start">
                        <div className={`p-3 rounded-lg bg-gradient-to-r ${achievement.color} mr-4 flex-shrink-0`}>
                        {achievement.icon}
                        </div>
                        <div className="flex-grow">
                        <div className="flex items-start justify-between mb-3">
                            <h3 className="font-semibold text-lg leading-tight text-white group-hover:text-[#FF6B35] transition-colors">
                            {achievement.title}
                            </h3>
                            <span className="text-xs bg-[#ABB2BF]/20 px-3 py-1 rounded-full text-[#ABB2BF] ml-2 flex-shrink-0">
                            {achievement.year}
                            </span>
                        </div>
                        <div className="flex items-center justify-between">
                            <span className={`text-xs px-3 py-1 rounded-full bg-gradient-to-r ${achievement.color} text-white font-medium`}>
                            {achievement.type}
                            </span>
                        </div>
                        <p className="text-[#ABB2BF] text-sm mt-2">{achievement.description}</p>
                        </div>
                    </div>
                    </div>
                
                </a>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div 
          className="text-center mt-16 pt-8 border-t border-[#ABB2BF]/20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <p className="text-[#ABB2BF] text-sm font-mono">
            <span className="text-[#FF6B35]">console.log(</span>
            <span className="text-white">"Thanks for checking out my profiles!"</span>
            <span className="text-[#FF6B35]">);</span>
          </p>
        </motion.div>
      </div>
    </div>
  );
}
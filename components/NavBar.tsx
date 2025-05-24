'use client';
import { usePathname } from 'next/navigation';
import { useState, useEffect, JSX } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Code, Home, FolderOpen, Award, Mail, Zap } from 'lucide-react';
import icon from '@/public/images/icon.png';

function NavBar():JSX.Element {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '/', icon: <Home className="w-4 h-4" /> },
    { name: 'Projects', href: '/projects', icon: <FolderOpen className="w-4 h-4" /> },
    { name: 'Skills', href: '/#skills', icon: <Code className="w-4 h-4" /> },
    { name: 'Achievements', href: '/#achievements', icon: <Award className="w-4 h-4" /> },
    { name: 'Contact', href: '/#contact', icon: <Mail className="w-4 h-4" /> },
  ];

  const navbarVariants = {
    top: {
      background: 'rgba(40, 44, 51, 0.8)',
      backdropFilter: 'blur(0px)',
      borderBottom: '1px solid transparent',
    },
    scrolled: {
      background: 'rgba(40, 44, 51, 0.95)',
      backdropFilter: 'blur(20px)',
      borderBottom: '1px solid rgba(171, 178, 191, 0.1)',
    },
  };

  return (
    <>
      <motion.div 
        className="w-full py-4 px-6 sticky top-0 z-50 transition-all duration-300"
        initial="top"
        animate={isScrolled ? "scrolled" : "top"}
        variants={navbarVariants}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <motion.div className="relative" whileHover={{ scale: 1.1 }}>
              <div className="absolute inset-0 bg-[#FF6B35] opacity-20 rounded-full blur-sm group-hover:opacity-40 transition-opacity duration-300"></div>
              <Image src={icon} alt="logo" width={24} height={24} className="relative z-10" />
            </motion.div>
            <motion.span 
              className="font-bold text-lg text-white group-hover:text-[#FF6B35] transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
            >
              Luv Kansal
            </motion.span>
            <motion.div
              className="hidden sm:block w-2 h-2 bg-[#FF6B35] rounded-full"
              animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:block">
            <ul className="flex items-center gap-1">
              {navItems.map(item => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    onClick={(e) => {
                      if (item.href === '/' && pathname === '/') {
                        e.preventDefault();
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }
                      setIsMobileMenuOpen(false);
                    }}
                    className="flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all text-[#ABB2BF] hover:text-white hover:bg-white/5"
                  >
                    <span className="text-[#FF6B35]">{item.icon}</span>
                    <span className="font-mono">
                      <span className="text-[#FF6B35]">/</span>{item.name.toLowerCase()}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Menu Toggle */}
          <motion.button
            className="md:hidden p-2 text-[#ABB2BF] hover:text-white transition-colors duration-300"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileTap={{ scale: 0.95 }}
          >
            <AnimatePresence mode="wait">
              {isMobileMenuOpen ? (
                <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
                  <X className="w-6 h-6" />
                </motion.div>
              ) : (
                <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }}>
                  <Menu className="w-6 h-6" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </motion.div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed top-[72px] left-0 w-full bg-[#282C33]/95 backdrop-blur-lg border-b border-[#ABB2BF]/10 z-40 md:hidden"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <div className="px-6 py-4">
              <nav>
                <ul className="space-y-2">
                  {navItems.map(item => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="flex items-center gap-3 px-4 py-3 rounded-lg font-medium text-[#ABB2BF] hover:text-white hover:bg-white/5"
                      >
                        <span className="text-[#FF6B35]">{item.icon}</span>
                        <span className="font-mono">
                          <span className="text-[#FF6B35]">/</span>{item.name.toLowerCase()}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>

              {/* Status */}
              <div className="mt-4 pt-4 border-t border-[#ABB2BF]/20 flex items-center gap-2 text-sm text-[#ABB2BF]">
                <Zap className="w-4 h-4 text-[#FF6B35]" />
                <span className="font-mono">Status: Available for work</span>
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse ml-auto"></div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default NavBar;

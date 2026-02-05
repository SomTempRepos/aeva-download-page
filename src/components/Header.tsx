import React from 'react';
import { motion } from 'motion/react';

interface HeaderProps {
  scrolled: boolean;
}

export function Header({ scrolled }: HeaderProps) {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/80 backdrop-blur-lg shadow-md' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 py-5">
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <h1 className="text-2xl font-medium bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent tracking-tight">
              AEVA
            </h1>
            <p className="text-sm text-slate-500 mt-0.5">
              Alpha v1.0.0 – Internal Distribution Only
            </p>
          </div>
          
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="hidden md:flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-100"
          >
            <motion.div 
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [1, 0.8, 1]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="w-2 h-2 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500"
            ></motion.div>
            <span className="text-sm font-medium bg-gradient-to-r from-indigo-900 to-purple-900 bg-clip-text text-transparent">Internal Alpha</span>
          </motion.div>
        </div>
      </div>
    </motion.header>
  );
}
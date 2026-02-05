import React from 'react';
import { motion } from 'motion/react';

export function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 1 }}
      className="py-8 mt-20 border-t border-slate-200"
    >
      <div className="container mx-auto px-6">
        <p className="text-center text-slate-500 text-sm">
          © {new Date().getFullYear()} AEVA – Internal Distribution Only
        </p>
      </div>
    </motion.footer>
  );
}

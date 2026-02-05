import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { InstallationSteps } from './components/InstallationSteps';
import { QRDownloadCard } from './components/QRDownloadCard';
import { Footer } from './components/Footer';
import { motion } from 'motion/react';

export default function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-emerald-50 relative overflow-hidden">
      {/* Animated background blobs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-indigo-200/30 to-purple-200/30 rounded-full blur-3xl"
        ></motion.div>
        <motion.div
          animate={{
            x: [0, -100, 0],
            y: [0, 100, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-emerald-200/30 to-teal-200/30 rounded-full blur-3xl"
        ></motion.div>
        <motion.div
          animate={{
            x: [0, 50, 0],
            y: [0, -50, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-purple-200/20 to-pink-200/20 rounded-full blur-3xl"
        ></motion.div>
      </div>

      <Header scrolled={scrolled} />
      
      {/* Main Hero Section */}
      <main className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-7xl mx-auto"
        >
          {/* Two Column Layout */}
          <div className="grid lg:grid-cols-2 gap-12 items-stretch">
            {/* Left Column - Installation Steps */}
            <InstallationSteps />
            
            {/* Right Column - QR Download Card */}
            <div className="lg:sticky lg:top-32 lg:self-start">
              <QRDownloadCard />
            </div>
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}
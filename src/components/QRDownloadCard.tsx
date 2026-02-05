import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Download, Smartphone, Loader2 } from 'lucide-react';
import { QRCodeSVG } from 'qrcode.react';

export function QRDownloadCard() {
  const [isHovered, setIsHovered] = useState(false);
  const [downloadUrl, setDownloadUrl] = useState('');
  const [isGenerating, setIsGenerating] = useState(true);

  useEffect(() => {
    const APK_PATH = '/downloads/AEVA.apk';
    setDownloadUrl(`${window.location.origin}${APK_PATH}`);

    setTimeout(() => {
      setIsGenerating(false);
    }, 2000);
  }, []);


  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/downloads/AEVA.apk'; // served from public/
    link.download = 'AEVA.apk';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };


  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.5 }}
      className="relative h-full flex flex-col"
    >
      {/* Animated Glow effect */}
      <motion.div 
        animate={{
          opacity: [0.15, 0.25, 0.15],
          scale: [1, 1.02, 1],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute -inset-1 bg-gradient-to-br from-indigo-500 via-purple-500 to-emerald-500 rounded-3xl blur-2xl"
      ></motion.div>
      
      <div className="relative bg-white rounded-2xl shadow-2xl p-10 border border-slate-100 flex-1 flex flex-col">
        {/* QR Code Section */}
        <div className="text-center mb-8 flex-1 flex flex-col justify-center">
          <motion.div
            animate={{ 
              boxShadow: isHovered 
                ? '0 0 40px rgba(99, 102, 241, 0.3)' 
                : '0 0 20px rgba(99, 102, 241, 0.1)'
            }}
            transition={{ duration: 0.3 }}
            className="inline-block p-8 bg-gradient-to-br from-white to-slate-50 rounded-3xl border-2 border-slate-200 mb-6 relative overflow-hidden mx-auto"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Background gradient animation */}
            <motion.div
              animate={{
                background: [
                  'linear-gradient(45deg, rgba(99, 102, 241, 0.05), rgba(16, 185, 129, 0.05))',
                  'linear-gradient(135deg, rgba(16, 185, 129, 0.05), rgba(99, 102, 241, 0.05))',
                  'linear-gradient(225deg, rgba(168, 85, 247, 0.05), rgba(99, 102, 241, 0.05))',
                  'linear-gradient(315deg, rgba(99, 102, 241, 0.05), rgba(16, 185, 129, 0.05))',
                  'linear-gradient(45deg, rgba(99, 102, 241, 0.05), rgba(16, 185, 129, 0.05))',
                ]
              }}
              transition={{ duration: 8, repeat: Infinity }}
              className="absolute inset-0 rounded-2xl"
            ></motion.div>

            {/* QR Code or Loading State */}
            <div className="relative">
              <AnimatePresence mode="wait">
                {isGenerating ? (
                  <motion.div
                    key="loading"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    className="w-64 h-64 flex flex-col items-center justify-center"
                  >
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                      className="relative"
                    >
                      <div className="w-16 h-16 border-4 border-indigo-200 border-t-indigo-600 rounded-full"></div>
                    </motion.div>
                    <motion.p 
                      animate={{ opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                      className="text-sm text-slate-600 mt-6 font-medium"
                    >
                      Generating QR Code...
                    </motion.p>
                    <div className="flex gap-1 mt-2">
                      {[0, 1, 2].map((i) => (
                        <motion.div
                          key={i}
                          animate={{ 
                            scale: [1, 1.5, 1],
                            backgroundColor: ['#6366f1', '#a855f7', '#10b981', '#6366f1']
                          }}
                          transition={{ 
                            duration: 1.5, 
                            repeat: Infinity,
                            delay: i * 0.2 
                          }}
                          className="w-2 h-2 rounded-full bg-indigo-600"
                        ></motion.div>
                      ))}
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="qrcode"
                    initial={{ opacity: 0, scale: 0.3, rotate: -180 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ 
                      type: "spring",
                      stiffness: 150,
                      damping: 15,
                      duration: 0.8
                    }}
                  >
                    {downloadUrl && (
                      <div className="relative qr-code-container">
                        {/* Decorative corner accents */}
                        <div className="absolute -top-2 -left-2 w-6 h-6 border-t-4 border-l-4 border-indigo-500 rounded-tl-lg"></div>
                        <div className="absolute -top-2 -right-2 w-6 h-6 border-t-4 border-r-4 border-purple-500 rounded-tr-lg"></div>
                        <div className="absolute -bottom-2 -left-2 w-6 h-6 border-b-4 border-l-4 border-emerald-500 rounded-bl-lg"></div>
                        <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-4 border-r-4 border-teal-500 rounded-br-lg"></div>
                        
                        {/* Custom styled QR code */}
                        <style>{`
                          .qr-code-container svg path {
                            rx: 2;
                            ry: 2;
                          }
                          .qr-code-container svg rect {
                            rx: 2;
                            ry: 2;
                          }
                        `}</style>
                        <div className="qr-code-wrapper p-2 bg-white rounded-2xl">
                          <QRCodeSVG
                            value={downloadUrl}
                            size={256}
                            level="H"
                            includeMargin={true}
                            marginSize={2}
                            fgColor="url(#qr-gradient)"
                            style={{
                              borderRadius: '16px',
                            }}
                            imageSettings={{
                              src: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' fill='none'%3E%3Crect width='32' height='32' rx='8' fill='url(%23grad1)'/%3E%3Cdefs%3E%3ClinearGradient id='grad1' x1='0' y1='0' x2='32' y2='32'%3E%3Cstop offset='0%25' stop-color='%234F46E5'/%3E%3Cstop offset='50%25' stop-color='%237C3AED'/%3E%3Cstop offset='100%25' stop-color='%2310B981'/%3E%3C/linearGradient%3E%3C/defs%3E%3Cpath d='M22 4H10C8.89 4 8 4.89 8 6v20c0 1.11.89 2 2 2h12c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 18H10V8h12v14z' fill='white'/%3E%3C/svg%3E",
                              height: 56,
                              width: 56,
                              excavate: true,
                            }}
                          />
                          {/* SVG Gradient Definition */}
                          <svg width="0" height="0" style={{ position: 'absolute' }}>
                            <defs>
                              <linearGradient id="qr-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor="#4F46E5" />
                                <stop offset="40%" stopColor="#7C3AED" />
                                <stop offset="70%" stopColor="#A855F7" />
                                <stop offset="100%" stopColor="#10B981" />
                              </linearGradient>
                            </defs>
                          </svg>
                        </div>
                      </div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

          <h3 className="text-2xl font-medium bg-gradient-to-r from-indigo-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent mb-2">
            Scan to Download APK
          </h3>
          <p className="text-slate-600">
            Point your camera at the QR code
          </p>
        </div>

        {/* Divider */}
        <div className="relative mb-8">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-slate-200"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-4 bg-white text-slate-500">or</span>
          </div>
        </div>

        {/* Direct Download Button */}
        <motion.button
          onClick={handleDownload}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-700 hover:from-indigo-700 hover:via-purple-700 hover:to-indigo-800 text-white rounded-xl py-4 px-6 font-medium text-lg shadow-lg shadow-indigo-300/50 hover:shadow-xl hover:shadow-purple-400/50 transition-all duration-300 flex items-center justify-center gap-3 group relative overflow-hidden"
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0"
            animate={{
              x: ['-100%', '100%'],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          ></motion.div>
          <Download className="w-6 h-6 group-hover:animate-bounce relative z-10" />
          <span className="relative z-10">Direct Download APK</span>
        </motion.button>

        {/* Info Cards */}
        <div className="mt-8 grid grid-cols-2 gap-4">
          <motion.div 
            whileHover={{ scale: 1.02, y: -2 }}
            className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-4 border border-indigo-100"
          >
            <p className="text-xs text-indigo-600 mb-1">Version</p>
            <p className="font-medium text-indigo-900">Alpha 1.0.0</p>
          </motion.div>
          <motion.div 
            whileHover={{ scale: 1.02, y: -2 }}
            className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl p-4 border border-emerald-100"
          >
            <p className="text-xs text-emerald-600 mb-1">Size</p>
            <p className="font-medium text-emerald-900">12.4 MB</p>
          </motion.div>
        </div>

        {/* Security Notice */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-6 p-4 bg-emerald-50 border border-emerald-200 rounded-xl"
        >
          <div className="flex gap-3">
            <div className="flex-shrink-0 w-5 h-5 bg-emerald-500 rounded-full flex items-center justify-center mt-0.5">
              <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div>
              <p className="text-sm font-medium text-emerald-900 mb-1">
                Verified Internal Build
              </p>
              <p className="text-xs text-emerald-700">
                This APK is signed and verified for internal distribution
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
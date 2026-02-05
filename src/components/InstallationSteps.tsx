import React from 'react';
import { motion } from 'motion/react';
import { Download, ShieldCheck, Package, Rocket } from 'lucide-react';

const steps = [
  {
    number: 1,
    icon: Download,
    title: 'Download the APK',
    color: 'from-indigo-500 to-indigo-600',
    bgColor: 'bg-indigo-50',
    iconColor: 'text-indigo-600',
    bullets: [
      'Click the download button or scan the QR code',
      'Save the AEVA.apk file to your device',
      'Wait for download to complete'
    ]
  },
  {
    number: 2,
    icon: ShieldCheck,
    title: 'Allow Unknown Sources',
    color: 'from-purple-500 to-purple-600',
    bgColor: 'bg-purple-50',
    iconColor: 'text-purple-600',
    bullets: [
      'Go to Settings > Security',
      'Enable "Install from Unknown Sources"',
      'Grant permission for your browser or file manager'
    ]
  },
  {
    number: 3,
    icon: Package,
    title: 'Install the APK',
    color: 'from-emerald-500 to-emerald-600',
    bgColor: 'bg-emerald-50',
    iconColor: 'text-emerald-600',
    bullets: [
      'Open your Downloads folder',
      'Tap on AEVA.apk file',
      'Follow the installation prompts'
    ]
  },
  {
    number: 4,
    icon: Rocket,
    title: 'Open the App',
    color: 'from-teal-500 to-teal-600',
    bgColor: 'bg-teal-50',
    iconColor: 'text-teal-600',
    bullets: [
      'Find AEVA in your app drawer',
      'Launch the application',
      'Sign in with your credentials'
    ]
  }
];

export function InstallationSteps() {
  return (
    <div className="flex flex-col h-full">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mb-8"
      >
        <h2 className="text-4xl font-medium bg-gradient-to-r from-indigo-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent mb-3">
          How to Download & Install AEVA
        </h2>
        
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-8 border border-slate-100 flex-1"
      >
        <div className="space-y-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
            >
              <div className="flex gap-6 group">
                {/* Step Number Badge */}
                <div className="flex-shrink-0">
                  <motion.div 
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`w-12 h-12 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300`}
                  >
                    <span className="text-white font-medium text-lg">
                      {step.number}
                    </span>
                  </motion.div>
                </div>

                {/* Step Content */}
                <div className="flex-1">
                  <div className="flex items-start gap-3 mb-3">
                    <motion.div 
                      whileHover={{ scale: 1.1, rotate: -5 }}
                      className={`p-2 ${step.bgColor} rounded-lg group-hover:shadow-md transition-all duration-300`}
                    >
                      <step.icon className={`w-5 h-5 ${step.iconColor}`} />
                    </motion.div>
                    <h3 className="text-xl font-medium text-slate-900 mt-1">
                      {step.title}
                    </h3>
                  </div>

                  <ul className="space-y-2 ml-14">
                    {step.bullets.map((bullet, bulletIndex) => (
                      <motion.li 
                        key={bulletIndex}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.7 + index * 0.1 + bulletIndex * 0.05 }}
                        className="flex items-start gap-2 text-slate-600"
                      >
                        <span className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${step.color} mt-2 flex-shrink-0`}></span>
                        <span>{bullet}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Divider */}
              {index < steps.length - 1 && (
                <div className="ml-6 mt-8 border-b border-slate-100"></div>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
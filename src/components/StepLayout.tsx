import React from 'react';
import { motion } from 'framer-motion';

interface StepLayoutProps {
  children: React.ReactNode;
  step: number;
  totalSteps: number;
}

const StepLayout: React.FC<StepLayoutProps> = ({ children, step, totalSteps }) => (
  <motion.div
    className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-b from-purple-200 via-indigo-100 to-blue-200"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.6 }}
  >
    <div className="w-full max-w-sm bg-white/20 backdrop-blur-lg border border-white/30 rounded-3xl p-6 shadow-2xl">
      {/* Прогресс-бар */}
      <div className="flex mb-6 space-x-2">
        {Array.from({ length: totalSteps }).map((_, idx) => (
          <div
            key={idx}
            className={`flex-1 h-1 rounded-full transition-colors ${
              idx + 1 <= step ? 'bg-primary' : 'bg-white/40'
            }`}
          />
        ))}
      </div>
      {children}
    </div>
  </motion.div>
);

export default StepLayout;
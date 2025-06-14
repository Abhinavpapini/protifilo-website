
import React from 'react';
import { motion } from 'framer-motion';

interface SignatureAnimationProps {
  onComplete: () => void;
}

export default function SignatureAnimation({ onComplete }: SignatureAnimationProps) {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, y: -100 }}
      transition={{ duration: 1, delay: 0.5 }}
      onAnimationComplete={onComplete}
    >
      <div className="text-center">
        {/* Signature animation */}
        <motion.div
          className="relative"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.svg
            width="400"
            height="200"
            viewBox="0 0 400 200"
            className="text-cyan-400"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
          >
            <motion.path
              d="M50 150 Q100 50 150 100 T250 80 Q300 60 350 120"
              stroke="currentColor"
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
              strokeDasharray="0 1"
              animate={{
                strokeDasharray: ["0 1", "1 0", "0 1"],
              }}
              transition={{
                duration: 2,
                ease: "easeInOut",
              }}
            />
          </motion.svg>
          
          <motion.h1
            className="absolute inset-0 flex items-center justify-center text-6xl md:text-8xl font-greatVibes text-cyan-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
          >
            Abhinav
          </motion.h1>
        </motion.div>
        
        <motion.div
          className="mt-8"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 2, duration: 0.5 }}
        >
          <div className="w-16 h-16 mx-auto border-4 border-cyan-500/30 border-t-cyan-500 rounded-full animate-spin"></div>
        </motion.div>
      </div>
    </motion.div>
  );
}

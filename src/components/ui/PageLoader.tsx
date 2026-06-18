'use client'

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function PageLoader({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setDone(true);
      setTimeout(onComplete, 700);
    }, 1800);

    // Progress animation
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + Math.random() * 8 + 2;
      });
    }, 80);

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-[#030d1a] overflow-hidden"
        >
          {/* Background aurora */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="aurora-orb-1 absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-[#1288D9]/15 blur-[120px]" />
            <div className="aurora-orb-2 absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-[#38b6ff]/10 blur-[100px]" />
          </div>

          {/* Grid overlay */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `linear-gradient(rgba(18,136,217,0.5) 1px, transparent 1px),
                                linear-gradient(90deg, rgba(18,136,217,0.5) 1px, transparent 1px)`,
              backgroundSize: '60px 60px',
            }}
          />

          {/* Logo area */}
          <motion.div
            initial={{ scale: 0.6, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative mb-10 flex items-center justify-center"
          >
            {/* Outer spinning ring */}
            <div className="absolute w-28 h-28 rounded-full border border-[#1288D9]/20 border-t-[#1288D9] animate-spin" style={{ animationDuration: '2s' }} />
            {/* Inner pulsing ring */}
            <div className="absolute w-20 h-20 rounded-full border border-[#38b6ff]/30 animate-pulse" />
            {/* Logo */}
            <motion.img
              src="/logo.png"
              alt="DM+"
              className="w-12 h-12 object-contain relative z-10"
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>

          {/* Brand name */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-center mb-8"
          >
            <p className="text-white/40 text-xs font-bold uppercase tracking-[0.3em] mb-1">
              DM+ Technologies
            </p>
            <p className="text-white/20 text-[11px] tracking-widest">
              Chargement en cours...
            </p>
          </motion.div>

          {/* Progress bar */}
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: 200 }}
            transition={{ delay: 0.5, duration: 0.4 }}
            className="relative"
          >
            <div className="w-[200px] h-[2px] rounded-full bg-white/5 overflow-hidden">
              <motion.div
                className="h-full rounded-full"
                style={{
                  background: 'linear-gradient(90deg, #1288D9, #38b6ff)',
                  boxShadow: '0 0 10px rgba(18,136,217,0.8)',
                }}
                initial={{ width: '0%' }}
                animate={{ width: `${Math.min(progress, 100)}%` }}
                transition={{ ease: [0.22, 1, 0.36, 1] }}
              />
            </div>
            <motion.p
              className="text-center text-white/20 text-[10px] mt-3 font-mono"
            >
              {Math.min(Math.round(progress), 100)}%
            </motion.p>
          </motion.div>

          {/* Floating particles */}
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="particle"
              style={{
                left: `${10 + Math.random() * 80}%`,
                bottom: 0,
                animationDelay: `${i * 0.3}s`,
                animationDuration: `${2 + Math.random() * 2}s`,
              }}
            />
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

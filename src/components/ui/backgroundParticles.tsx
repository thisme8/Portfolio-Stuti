"use client";
import { motion } from "framer-motion";
import { useMemo } from "react";

export default function BackgroundParticles() {
  const particles = useMemo(
    () =>
      Array.from({ length: 15 }, (_, i) => ({
        key: i,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        duration: 4 + Math.random() * 2,
        delay: Math.random() * 2,
      })),
    []
  );

  return (
    <div className="fixed inset-0 z-0 pointer-events-none select-none">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />
      {particles.map((p) => (
        <motion.div
          key={p.key}
          className="absolute w-8 h-6 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 rounded border border-yellow-500/20"
          style={{
            left: p.left,
            top: p.top,
          }}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, -5, 0],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
          }}
        />
      ))}
    </div>
  );
}

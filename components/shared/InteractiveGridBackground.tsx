// src/components/shared/InteractiveGridBackground.tsx
import { motion, useMotionValue, useMotionTemplate, Variants } from "framer-motion";
import React, { useRef, useState } from "react";

const GRID_SIZE = 10; // Jumlah titik per baris/kolom (10x10 = 100 titik)

const itemAnimation: Variants = {
  initial: { opacity: 0, scale: 0 },
  animate: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: i * 0.05,
      duration: 0.5,
    },
  }),
};

export function InteractiveGridBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left; // Posisi X relatif terhadap container
    const y = e.clientY - rect.top;  // Posisi Y relatif terhadap container

    // Perbarui MotionValue
    mouseX.set(x);
    mouseY.set(y);
  };

  const dots = Array.from({ length: GRID_SIZE * GRID_SIZE }, (_, i) => i);

  return (
    <div 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="absolute inset-0 w-full h-full overflow-hidden z-0"
    >
      {dots.map((i) => {
        // Hitung posisi grid
        const row = Math.floor(i / GRID_SIZE);
        const col = i % GRID_SIZE;
        
        // Jarak dari tepi dalam persentase
        const xPercent = (col / (GRID_SIZE - 1)) * 100;
        const yPercent = (row / (GRID_SIZE - 1)) * 100;

        return (
          <motion.div
            key={i}
            className="absolute h-1 w-1 rounded-full bg-blue-500/70"
            variants={itemAnimation}
            initial="initial"
            animate="animate"
            custom={i}
            
            // Terapkan efek Interaksi Kursor:
            style={{
              // Atur posisi dasar grid
              left: `${xPercent}%`,
              top: `${yPercent}%`,
              
              // Gerakkan titik berdasarkan kursor dengan jarak yang dimodifikasi
              // Ini menciptakan efek "repulsion" atau "mental-mental" yang sederhana
              x: useMotionTemplate`calc(${mouseX}px / 5 - ${xPercent/2}px)`,
              y: useMotionTemplate`calc(${mouseY}px / 5 - ${yPercent/2}px)`,
            }}
          />
        );
      })}
    </div>
  );
}
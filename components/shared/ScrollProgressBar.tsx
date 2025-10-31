// src/components/shared/ScrollProgressBar.tsx
import { motion, useScroll } from "framer-motion";

export function ScrollProgressBar() {
  // 1. Panggil hook `useScroll` untuk mendapatkan `scrollYProgress`.
  // `scrollYProgress` adalah MotionValue yang akan bernilai 0 (paling atas) hingga 1 (paling bawah).
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-2 bg-blue-600 origin-left"
      // 2. Hubungkan `scaleX` dengan `scrollYProgress`.
      // Saat `scrollYProgress` berubah dari 0 ke 1, `scaleX` div ini juga akan
      // berubah dari 0 ke 1, menciptakan efek bar yang terisi.
      // `origin-left` di className memastikan bar memanjang dari kiri ke kanan.
      style={{ scaleX: scrollYProgress }}
    />
  );
}
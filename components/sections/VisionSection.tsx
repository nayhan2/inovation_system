/* eslint-disable react/no-unescaped-entities */
// src/components/sections/VisionSection.tsx (VERSI DENGAN PARALLAX)

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react"; // <-- 1. Import hook yang diperlukan
import { containerVariants, itemVariants } from "../types";

export function VisionSection() {
  // 2. Buat ref untuk menargetkan elemen section
  const ref = useRef(null);

  // 3. Lacak progress scroll dari section ini
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"], // Lacak saat elemen masuk & keluar viewport
  });

  // 4. Ubah nilai scroll (0-1) menjadi pergerakan vertikal (-20% hingga 20%)
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

  return (
    <section
      ref={ref}
      // UBAH: Hapus `style` dan tambahkan `relative overflow-hidden`
      className="relative py-24 px-6 text-center text-white bg-gray-900 overflow-hidden"
    >
      {/* 5. BUAT ELEMEN BARU UNTUK BACKGROUND YANG BERGERAK */}
      <motion.div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(17, 24, 39, 0.8), rgba(17, 24, 39, 0.8)), url(https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1200&q=80)",
          y: backgroundY, // Terapkan animasi parallax di sini
        }}
      />

      {/* 6. BUNGKUS KONTEN DENGAN DIV AGAR TETAP DI ATAS BACKGROUND */}
      <div className="relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={containerVariants}
        >
          {/* Konten lainnya tetap sama */}
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Participate in Born of the Future
          </motion.h2>
          <motion.blockquote
            variants={itemVariants}
            className="italic text-lg max-w-4xl mx-auto text-gray-300 mb-12 font-light"
          >
            "Misi kami bukan hanya membangun platform, tapi melahirkan masa
            depan. Meta Tourism Tele Presence akan membawa Indonesia ke panggung
            dunia sebagai pemimpin revolusi tele-presence, mendefinisikan ulang
            cara kita terhubung, berwisata, dan merasakan empati."
          </motion.blockquote>
          <motion.div
            variants={itemVariants}
            className="flex justify-center items-center gap-10 text-gray-400"
          >
            <div className="text-center">
              <p className="text-3xl">🤖</p>
              <p className="mt-2 text-sm font-semibold">TELE-ROBOTICS</p>
            </div>
            <div className="text-center">
              <p className="text-3xl">🥽</p>
              <p className="mt-2 text-sm font-semibold">
                EXTENDED REALITY (XR)
              </p>
            </div>
            <div className="text-center">
              <p className="text-3xl">📡</p>
              <p className="mt-2 text-sm font-semibold">
                NEXT-GEN CONNECTIVITY
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
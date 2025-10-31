// src/components/sections/HeroSection.tsx
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { containerVariants, itemVariants } from "../types";
import { ParticleNetworkBackground } from "../shared/ParticleNetworkBackground";

export function HeroSection() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // UBAH: Transformasi untuk efek paralaks dan sensitivitas yang lebih rendah
  
  // 1. BACKGROUND (yBg)
  // Gerakan dari 0% hingga 20% (Lebih pelan dari 50% sebelumnya)
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  // 2. KONTEN (yText & opacityText)
  // yText: Gerakan dari 0% hingga -50% (Lebih pelan dari -200% sebelumnya)
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);
  
  // opacityText: Fade dari 1 (penuh) menjadi 0 (hilang).
  // [0, 0.8] adalah rentang input: Konten akan mulai hilang di awal scroll dan
  // benar-benar hilang saat progres scroll mencapai 80% (0.8), membuatnya tidak terlalu sensitif.
  const opacityText = useTransform(scrollYProgress, [0, 0.8], [1, 0]); 

  return (
    <header
      ref={ref}
      className="relative flex flex-col items-center justify-center text-center py-24 px-6 bg-gray-950 text-gray-900 overflow-hidden min-h-[70vh] md:min-h-screen"
    >
      {/* 1. Komponen Particle Network (Z-index 0) */}
      {/* Terapkan yBg untuk gerakan yang lebih lambat */}
      <motion.div className="absolute inset-0 z-0" style={{ y: yBg }}>
        <ParticleNetworkBackground />
      </motion.div>

      {/* Konten Hero Section (Z-index 20) */}
      {/* Terapkan yText DAN opacityText untuk paralaks dan fade-out */}
      <motion.div
        className="relative z-20 max-w-3xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        style={{ y: yText, opacity: opacityText }} // UBAH: Tambahkan opacity
      >
        <motion.h1
          variants={itemVariants}
          className="text-4xl md:text-5xl font-bold mb-4 text-white"
        >
          Jelajahi Dunia Nyata, Langsung dari Genggaman Anda.
        </motion.h1>
        <motion.p
          variants={itemVariants}
          className="text-lg text-gray-400 mb-8"
        >
          Lelah dengan rutinitas?{" "}
          <span className="font-semibold text-blue-600">
            Meta Tourism Tele Presence by Kühl
          </span>{" "}
          adalah gerbang Anda untuk merasakan deburan ombak, puncak gunung, dan
          hiruk pikuk kota secara <i>real-time</i>. Kami hadir untuk memberi
          Anda jeda dan ketenangan, kapan pun Anda butuh.
        </motion.p>
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row justify-center gap-4"
        >
          {/* TOMBOL UTAMA */}
          <motion.a
            href="#how-it-works"
            className="
              relative
              bg-blue-600 text-white
              px-8 py-3 rounded-xl
              font-semibold
              overflow-hidden
              transition-colors duration-300
              shadow-lg shadow-blue-600/50
              group
            "
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <span
              className="
                absolute inset-0
                bg-blue-700
                transform -translate-x-full
                group-hover:translate-x-0
                transition-transform duration-500 ease-out
                z-0
              "
            ></span>
            <span className="relative z-10">Lihat Cara Kerjanya</span>
          </motion.a>

          {/* TOMBOL KEDUA */}
          <motion.a
            href="#destinations"
            className="
              relative
              border-2 border-blue-500
              text-blue-400
              px-8 py-3 rounded-xl
              font-semibold
              overflow-hidden
              hover:text-white
              transition-colors duration-300
              group
            "
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 25px rgba(59, 130, 246, 0.5)",
            }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <span
              className="
                absolute inset-0
                bg-blue-900/50
                opacity-0
                group-hover:opacity-100
                transition-opacity duration-300 ease-in
              "
            ></span>
            <span className="relative z-10">Jelajahi Masa Depan</span>
          </motion.a>
        </motion.div>
      </motion.div>
    </header>
  );
}
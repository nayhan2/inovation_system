// src/components/sections/HeroSection.tsx
import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "../types";
import { ParticleNetworkBackground } from "../shared/ParticleNetworkBackground";

export function HeroSection() {
  return (
    // UBAH: min-h-[70vh] menjadi min-h-[70vh] md:min-h-screen
    // Ini berarti: 70% tinggi layar di mobile, dan 100% tinggi layar di desktop (md ke atas)
    <header className="relative flex flex-col items-center justify-center text-center py-24 px-6 bg-gray-950 text-gray-900 overflow-hidden min-h-[70vh] md:min-h-screen">
      {/* 1. Komponen Particle Network (Z-index 0) */}
      <ParticleNetworkBackground />

      {/* 2. Light/Dark Overlay (Dihapus sesuai permintaan sebelumnya) */}

      {/* Konten Hero Section (Z-index 20) */}
      <motion.div
        className="relative z-20 max-w-3xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
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
          <span className="font-semibold text-blue-600">Meta Tourism Tele Presence</span> adalah
          gerbang Anda untuk merasakan deburan ombak, puncak gunung, dan hiruk
          pikuk kota secara <i>real-time</i>. Kami hadir untuk memberi Anda jeda
          dan ketenangan, kapan pun Anda butuh.
        </motion.p>
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row justify-center gap-4"
        >
          <motion.a
            href="#how-it-works"
            className="bg-blue-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-blue-700 transition shadow-lg hover:shadow-blue-300"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Lihat Cara Kerjanya
          </motion.a>
          <motion.a
            href="#destinations"
            className="border border-blue-400 text-blue-400 px-8 py-3 rounded-xl font-semibold hover:bg-blue-900 transition"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Jelajahi Masa Depan
          </motion.a>
        </motion.div>
      </motion.div>
    </header>
  );
}

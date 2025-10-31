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
          <span className="font-semibold text-blue-600">Meta Tourism Tele Presence by Kühl</span> adalah
          gerbang Anda untuk merasakan deburan ombak, puncak gunung, dan hiruk
          pikuk kota secara <i>real-time</i>. Kami hadir untuk memberi Anda jeda
          dan ketenangan, kapan pun Anda butuh.
        </motion.p>
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row justify-center gap-4"
        >
          {/* TOMBOL UTAMA (EFEK SHADOW PULSE & BACKGROUND SLIDE) */}
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
              group /* Menambahkan group untuk hover pada child */
            "
            whileHover={{ scale: 1.05 }} // Sedikit scale-up
            transition={{ type: "spring", stiffness: 300 }}
          >
            {/* Overlay untuk efek background slide-in */}
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
            {/* Teks Tombol (Pastikan di atas overlay dengan z-index) */}
            <span className="relative z-10">
              Lihat Cara Kerjanya
            </span>
            {/* Efek Shadow Pulse pada hover - Tailwind JIT membuat ini otomatis */}
          </motion.a>

          {/* TOMBOL KEDUA (EFEK BORDER GLOW & TEXT HIGHLIGHT) */}
          <motion.a
            href="#destinations"
            // UBAH: Tambahkan relative, hover:text-white, group, dan border-2
            className="
              relative 
              border-2 border-blue-500 
              text-blue-400 
              px-8 py-3 rounded-xl 
              font-semibold 
              overflow-hidden
              hover:text-white /* Perubahan warna teks pada hover */
              transition-colors duration-300 
              group /* Menambahkan group untuk hover pada child */
            "
            whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(59, 130, 246, 0.5)" }} // Border Glow
            transition={{ type: "spring", stiffness: 300 }}
          >
            {/* Overlay untuk efek background fill/fade dari border */}
             <span 
              className="
                absolute inset-0 
                bg-blue-900/50 /* Sedikit transparansi */
                opacity-0 
                group-hover:opacity-100 
                transition-opacity duration-300 ease-in
              "
            ></span>
            {/* Teks Tombol */}
            <span className="relative z-10">
              Jelajahi Masa Depan
            </span>
          </motion.a>
        </motion.div>
      </motion.div>
    </header>
  );
}
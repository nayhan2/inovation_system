// src/components/sections/HeroSection.tsx
import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "../types";

export function HeroSection() {
  return (
    <header className="relative flex flex-col items-center justify-center text-center py-24 px-6 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <motion.div
        className="relative z-10 max-w-3xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          variants={itemVariants}
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          Jelajahi Dunia Nyata, Langsung dari Genggaman Anda.
        </motion.h1>
        <motion.p
          variants={itemVariants}
          className="text-lg text-gray-600 mb-8"
        >
          Lelah dengan rutinitas?{" "}
          <span className="font-semibold text-blue-600">Intelecta</span> adalah
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
            className="border border-blue-600 text-blue-600 px-8 py-3 rounded-xl font-semibold hover:bg-blue-50 transition"
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
/* eslint-disable react/no-unescaped-entities */
// src/components/sections/VisionSection.tsx
import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "../types";

export function VisionSection() {
  return (
    <section
      className="py-24 px-6 text-center text-white bg-gray-900 bg-cover bg-center"
      style={{
        backgroundImage:
          "linear-gradient(rgba(17, 24, 39, 0.8), rgba(17, 24, 39, 0.8)), url(https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1200&q=80)",
      }}
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={containerVariants}
      >
        <motion.h2
          variants={itemVariants}
          className="text-3xl md:text-4xl font-bold mb-6"
        >
          Memetakan Masa Depan Interaksi Manusia.
        </motion.h2>
        <motion.blockquote
          variants={itemVariants}
          className="italic text-lg max-w-4xl mx-auto text-gray-300 mb-12 font-light"
        >
          "Misi kami bukan hanya membangun platform, tapi melahirkan masa depan.
          Intelecta akan membawa Indonesia ke panggung dunia sebagai pemimpin
          revolusi tele-presence, mendefinisikan ulang cara kita terhubung,
          berwisata, dan merasakan empati."
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
    </section>
  );
}
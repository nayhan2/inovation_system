// src/components/sections/ProblemSection.tsx
import { motion } from "framer-motion";
import { ProblemItem, containerVariants, itemVariants } from "../types";

interface Props {
  data: ProblemItem[];
}

export function ProblemSection({ data }: Props) {
  return (
    // TAMBAHKAN: md:h-screen, flex, flex-col, justify-center
    // UBAH: py-20 menjadi py-20 md:py-0
    <section className="py-20 md:py-0 px-6 bg-gray-50 md:h-screen flex flex-col justify-center">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 max-w-3xl mx-auto">
        Dunia Terasa Jauh, Ketenangan Sulit Dicari.
      </h2>
      <motion.div
        className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {data.map((item) => (
          <motion.div
            key={item.title}
            variants={itemVariants}
            // UBAH: shadow-md -> shadow-lg, rounded-xl -> rounded-2xl
            // TAMBAH: border border-gray-100
            className="bg-white shadow-lg p-6 rounded-2xl hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-gray-100"
          >
            {/* TAMBAH: text-blue-500 (opsional, untuk konsistensi) */}
            <div className="text-4xl mb-4 text-blue-500">{item.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p className="text-gray-600">{item.text}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
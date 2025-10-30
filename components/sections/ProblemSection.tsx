// src/components/sections/ProblemSection.tsx
import { motion } from "framer-motion";
import { ProblemItem, containerVariants, itemVariants } from "../types";

interface Props {
  data: ProblemItem[];
}

export function ProblemSection({ data }: Props) {
  return (
    <section className="py-20 px-6 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-12">
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
            className="bg-white shadow-md p-6 rounded-xl hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
          >
            <div className="text-4xl mb-4">{item.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p className="text-gray-600">{item.text}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
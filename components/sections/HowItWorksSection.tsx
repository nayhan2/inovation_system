// src/components/sections/HowItWorksSection.tsx
import { motion } from "framer-motion";
import { HowItWorksStep, containerVariants, itemVariants } from "../types";

interface Props {
  steps: HowItWorksStep[];
}

export function HowItWorksSection({ steps }: Props) {
  return (
    <section id="how-it-works" className="py-20 px-6 bg-white text-center">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        <motion.h2
          variants={itemVariants}
          className="text-3xl font-bold mb-4"
        >
          Sangat Mudah. Hanya 3 Langkah untuk Mencapai Ketenangan.
        </motion.h2>
        <motion.p
          variants={itemVariants}
          className="max-w-3xl mx-auto text-gray-600 mb-16"
        >
          Rasakan keajaiban tele-presence murni, tanpa aplikasi rumit, hanya
          melalui browser Anda.
        </motion.p>

        <div className="flex flex-col md:flex-row items-center justify-center max-w-6xl mx-auto relative">
          {/* Animasi Garis Penghubung (Hanya untuk tampilan desktop) */}
          <motion.div
            className="hidden md:block absolute top-10 w-full h-1"
            style={{ padding: "0 10rem" }}
          >
            <motion.svg
              width="100%"
              height="8"
              viewBox="0 0 100 8"
              preserveAspectRatio="none"
              className="stroke-blue-200"
            >
              <motion.line
                x1="0"
                y1="4"
                x2="100"
                y2="4"
                strokeWidth="2"
                strokeDasharray="4 4"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
              />
            </motion.svg>
          </motion.div>

          {/* Steps */}
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="flex flex-col items-center text-center p-6 md:w-1/3 z-10 bg-white"
            >
              <div className="bg-blue-100 p-6 rounded-full shadow-lg border-4 border-white mb-4">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.text}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
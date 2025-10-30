// src/components/sections/BenefitSection.tsx
import { motion } from "framer-motion";

export function BenefitSection() {
  return (
    <section className="grid md:grid-cols-2 text-white">
      {/* Ketenangan Instan */}
      <div
        className="relative min-h-[400px] p-12 md:p-40 px-12 flex flex-col justify-center bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?auto=format&fit=crop&w=1200&q=80)",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <motion.div
          className="relative z-10"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7 }}
        >
          <h3 className="text-3xl font-bold mb-3">
            Ketenangan Instan, Tanpa Batas.
          </h3>
          <p className="text-lg text-gray-200 max-w-lg">
            Lawan burnout dengan mengakses pemandangan alam paling menenangkan di
            dunia, langsung dari layar Anda.
          </p>
        </motion.div>
      </div>

      {/* Tanpa Halangan */}
      <div
        className="relative min-h-[400px] p-12 flex flex-col justify-center bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1522448723933-10871d143586?auto=format&fit=crop&w=1200&q=80)",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-10 "></div>
        <motion.div
          className="relative z-10"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <h3 className="text-3xl font-bold mb-3 text-black">
            Rasakan Dunia Tanpa Halangan.
          </h3>
          <p className="text-lg text-black max-w-lg">
            Teknologi kami membuka pintu bagi siapa saja dengan keterbatasan
            mobilitas untuk menjelajahi dunia sebebas impian mereka.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
// src/components/sections/DestinationSection.tsx
import { motion } from "framer-motion";
import { FiMapPin } from "react-icons/fi";
import { Destination, containerVariants, itemVariants } from "../types";

interface Props {
  destinations: Destination[];
}

export function DestinationSection({ destinations }: Props) {
  return (
    <section id="destinations" className="py-20 px-6 bg-white text-center">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        <motion.h2 variants={itemVariants} className="text-3xl font-bold mb-4">
          Rasakan Ketenangan dari Destinasi Pilihan Dunia.
        </motion.h2>
        <motion.p
          variants={itemVariants}
          className="max-w-3xl mx-auto text-gray-600 mb-12"
        >
          Pemandangan alam yang paling menenangkan dan lokasi urban paling
          eksotis, siap Anda kendalikan saat ini juga.
        </motion.p>

        <motion.div
          className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto"
          variants={containerVariants}
        >
          {destinations.map((destin) => (
            <motion.div
              key={destin.id}
              variants={itemVariants}
              className="bg-gray-50 rounded-xl overflow-hidden shadow-lg"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 20px rgba(0, 0, 0, 0.15)",
                transition: { type: "spring", stiffness: 300 },
              }}
            >
              <div className="relative h-48 overflow-hidden">
                <motion.img
                  src={destin.image}
                  alt={destin.name}
                  className="w-full h-full object-cover"
                  variants={{
                    rest: { scale: 1 },
                    hover: { scale: 1.1, transition: { duration: 0.8 } },
                  }}
                  initial="rest"
                  whileHover="hover"
                />
           
                <div className="absolute inset-0 bg-opacity-30 flex items-end p-4">
                  <span className="bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {destin.type}
                  </span>
                </div>
              </div>
              <div className="p-6 text-left">
                <h3 className="text-xl font-bold mb-2 flex items-center">
                  <FiMapPin className="text-blue-500 mr-2" /> {destin.name}
                </h3>
                <p className="text-gray-600 mb-4">{destin.description}</p>
                <a
                  href="#"
                  className="text-blue-600 font-semibold hover:text-blue-800 transition-colors"
                >
                  Jelajahi Sekarang &rarr;
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}

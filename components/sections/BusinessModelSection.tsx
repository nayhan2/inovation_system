// src/components/sections/BusinessModelSection.tsx (VERSI PERBAIKAN)

import { motion } from "framer-motion";
import { FiUploadCloud, FiCpu, FiUsers, FiDollarSign } from "react-icons/fi";
import { containerVariants, itemVariants } from "../types";

export function BusinessModelSection() {
  const steps = [
    { icon: <FiUploadCloud className="text-3xl text-blue-600" />, label: "Host Mendaftar" },
    { icon: <FiCpu className="text-3xl text-blue-600" />, label: "Platform Intelecta" },
    { icon: <FiUsers className="text-3xl text-blue-600" />, label: "User Memesan" },
    { icon: <FiDollarSign className="text-3xl text-green-500" />, label: "Host Mendapat Profit" },
  ];

  return (
    <section className="py-24 px-6 bg-gray-50 text-center">
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
          Ekonomi Baru Telah Lahir. Jadilah Bagian Darinya.
        </motion.h2>
        <motion.p
          variants={itemVariants}
          className="max-w-3xl mx-auto text-gray-600 mb-16"
        >
          Jangan biarkan drone atau robot Anda menganggur. Ubah aset Anda
          menjadi sumber penghasilan pasif dengan memberdayakan ribuan orang
          untuk melihat dunia melalui mata perangkat Anda.
        </motion.p>

        <motion.div
          variants={containerVariants}
          // Menggunakan `flex justify-center` dan menghilangkan `gap-x` 
          // karena spasi akan dikontrol oleh separator
          className="flex flex-col md:flex-row items-center justify-center text-gray-700 max-w-6xl mx-auto"
        >
          {steps.map((step, index) => (
            <>
              {/* 1. KONTEN LANGKAH */}
              <motion.div
                key={step.label}
                variants={itemVariants}
                className="flex flex-col items-center p-4" // Tambahkan p-4 untuk spasi internal
              >
                <div className="bg-white p-4 rounded-full shadow-lg border">
                  {step.icon}
                </div>
                {/* Hapus border-b untuk mengembalikannya ke tampilan awal */}
                <p className="mt-2 font-semibold">
                  {step.label}
                </p>
              </motion.div>

              {/* 2. GARIS PENGHUBUNG (SEPARATOR) */}
              {/* Tampilkan hanya jika bukan item terakhir */}
              {index < steps.length - 1 && (
                <motion.div
                  key={`separator-${index}`}
                  variants={itemVariants}
                  // Garis abu-abu: h-1 (tinggi), w-16 (lebar), bg-gray-300
                  className="h-1 w-16 mb-6 bg-gray-300 hidden md:block" 
                ></motion.div>
              )}
            </>
          ))}
        </motion.div>

        <motion.a
          href="#"
          className="mt-16 inline-block bg-blue-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-blue-700 transition shadow-lg hover:shadow-blue-300"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
          variants={itemVariants}
        >
          Jadi Host & Hasilkan Uang
        </motion.a>
      </motion.div>
    </section>
  );
}
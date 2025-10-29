/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/no-unescaped-entities */
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
// Anda mungkin perlu menginstal react-icons: npm install react-icons
import { FiCpu, FiUsers, FiDollarSign, FiUploadCloud } from "react-icons/fi";

// [FIX] Definisi tipe yang hilang ditambahkan kembali di sini
type SolutionKey = "drone" | "robot" | "humanoid";

interface Solution {
  title: string;
  text: string;
  image: string;
}

export default function HomePage() {
  const [activeTab, setActiveTab] = useState<SolutionKey>("drone");

  const solutions: Record<SolutionKey, Solution> = {
    drone: {
      title: "Jelajahi Langit",
      text: "Ambil alih kemudi drone dan saksikan keindahan dunia dari perspektif mata burung yang memukau. Rasakan kebebasan terbang di atas pegunungan dan kota-kota ikonik.",
      image:
        "https://images.unsplash.com/photo-1516924962500-2b4b3b99ea02?auto=format&fit=crop&w=1200&q=80",
    },
    robot: {
      title: "Susuri Jalanan Dunia",
      text: "Jadilah penjelajah urban. Kendalikan robot kami yang lincah untuk menyusuri jalanan kota bersejarah, taman yang asri, atau pantai yang eksotis secara langsung.",
      image:
        "https://images.unsplash.com/photo-1678452301918-7b4d375a9d22?auto=format&fit=crop&w=1200&q=80",
    },
    humanoid: {
      title: "Sentuh Dunia Nyata (Visi)",
      text: "Inilah puncak pengalaman tele-presence. Rasakan sensasi berinteraksi dengan lingkungan melalui mata dan tangan avatar humanoid kami.",
      image:
        "https://images.unsplash.com/photo-1554117972-4e2a87c10b2a?auto=format&fit=crop&w=1200&q=80",
    },
  };

  const current = solutions[activeTab];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <main className="bg-white text-gray-800">
      {/* HERO SECTION */}
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
            <span className="font-semibold text-blue-600">Intelecta</span>{" "}
            adalah gerbang Anda untuk merasakan deburan ombak, puncak gunung,
            dan hiruk pikuk kota secara <i>real-time</i>. Kami hadir untuk
            memberi Anda jeda dan ketenangan, kapan pun Anda butuh.
          </motion.p>
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <motion.a
              href="#"
              className="bg-blue-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-blue-700 transition shadow-lg hover:shadow-blue-300"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Lihat Cara Kerjanya
            </motion.a>
            <motion.a
              href="#"
              className="border border-blue-600 text-blue-600 px-8 py-3 rounded-xl font-semibold hover:bg-blue-50 transition"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Jelajahi Masa Depan
            </motion.a>
          </motion.div>
        </motion.div>
      </header>

      {/* PROBLEM SECTION */}
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
          {[
            {
              icon: "🤯",
              title: "Krisis Burnout Global",
              text: "Di tengah tekanan modern, ketenangan sejati terasa seperti sebuah kemewahan yang sulit dijangkau.",
            },
            {
              icon: "💰",
              title: "Liburan Tak Terjangkau",
              text: "Liburan yang diimpikan seringkali terhalang oleh biaya, waktu, dan energi yang terkuras.",
            },
            {
              icon: "♿",
              title: "Keterbatasan Mobilitas",
              text: "Bagi sebagian orang, keinginan untuk menjelajahi dunia terhalang oleh tantangan fisik, membatasi impian mereka.",
            },
          ].map((item) => (
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

      {/* SOLUTION SECTION */}
      <section className="py-20 px-6 bg-white text-center">
        <h2 className="text-3xl font-bold mb-4">
          Teknologi yang Menyatukan Dunia Anda.
        </h2>
        <p className="max-w-3xl mx-auto text-gray-600 mb-12">
          Platform kami bukan simulasi. Anda mengontrol aset fisik di dunia
          nyata secara langsung untuk pengalaman yang otentik.
        </p>

        <div className="flex justify-center gap-3 mb-8">
          {[
            { id: "drone", label: "Drone ✈️" },
            { id: "robot", label: "Robot Roda 🤖" },
            { id: "humanoid", label: "Humanoid 🦾" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as SolutionKey)}
              className={`px-5 py-2 rounded-full font-medium transition-colors duration-300 ${
                activeTab === tab.id
                  ? "bg-blue-600 text-white shadow-md"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center md:gap-4 gap-6 max-w-5xl mx-auto min-h-[320px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="flex flex-col md:flex-row items-center justify-center md:gap-12 gap-8 w-full"
            >
              <div className="flex-1 max-w-md">
                <img
                  src={current.image}
                  alt={current.title}
                  className="rounded-xl shadow-lg w-full h-[280px] object-cover object-center"
                />
              </div>
              <div className="text-left flex-1 max-w-md">
                <h3 className="text-2xl font-bold mb-3 text-blue-700">
                  {current.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {current.text}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* BENEFIT SECTION */}
      <section className="grid md:grid-cols-2 text-white">
        <div
          className="relative min-h-[400px] p-12 md:p-40 px-20 flex flex-col justify-center bg-cover bg-center"
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
              Lawan burnout dengan mengakses pemandangan alam paling
              menenangkan di dunia, langsung dari layar Anda.
            </p>
          </motion.div>
        </div>
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

      {/* BUSINESS MODEL SECTION */}
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
            className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-0 text-gray-700"
          >
            <motion.div
              variants={itemVariants}
              className="flex flex-col items-center"
            >
              <div className="bg-white p-4 rounded-full shadow-lg border">
                <FiUploadCloud className="text-3xl text-blue-600" />
              </div>
              <p className="mt-2 font-semibold">Host Mendaftar</p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="h-1 w-16 bg-gray-300 mx-4 hidden md:block"
            ></motion.div>

            <motion.div
              variants={itemVariants}
              className="flex flex-col items-center"
            >
              <div className="bg-white p-4 rounded-full shadow-lg border">
                <FiCpu className="text-3xl text-blue-600" />
              </div>
              <p className="mt-2 font-semibold">Platform Intelecta</p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="h-1 w-16 bg-gray-300 mx-4 hidden md:block"
            ></motion.div>

            <motion.div
              variants={itemVariants}
              className="flex flex-col items-center"
            >
              <div className="bg-white p-4 rounded-full shadow-lg border">
                <FiUsers className="text-3xl text-blue-600" />
              </div>
              <p className="mt-2 font-semibold">User Memesan</p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="h-1 w-16 bg-gray-300 mx-4 hidden md:block"
            ></motion.div>

            <motion.div
              variants={itemVariants}
              className="flex flex-col items-center"
            >
              <div className="bg-white p-4 rounded-full shadow-lg border">
                <FiDollarSign className="text-3xl text-green-500" />
              </div>
              <p className="mt-2 font-semibold">Host Mendapat Profit</p>
            </motion.div>
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

      {/* VISION SECTION */}
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
            "Misi kami bukan hanya membangun platform, tapi melahirkan masa
            depan. Intelecta akan membawa Indonesia ke panggung dunia sebagai
            pemimpin revolusi tele-presence, mendefinisikan ulang cara kita
            terhubung, berwisata, dan merasakan empati."
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
              <p className="mt-2 text-sm font-semibold">EXTENDED REALITY (XR)</p>
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

      {/* FOOTER */}
      <footer className="bg-gray-900 border-t border-gray-800 text-gray-400 py-10 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <a
            href="#"
            className="text-2xl font-bold text-white mb-6 inline-block"
          >
            Intelecta
          </a>
          <p className="italic mb-8 text-gray-500">
            "We were born in this world, so why don't we enjoy this world."
          </p>
          <div className="flex justify-center flex-wrap gap-x-6 gap-y-2 text-sm mb-8">
            <a href="#" className="hover:text-white transition-colors">
              Tentang
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Visi
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Teknologi
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Menjadi Host
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Kontak
            </a>
          </div>
          <p className="text-xs text-gray-600">
            © {new Date().getFullYear()} Intelecta Global. All Rights Reserved.
          </p>
        </motion.div>
      </footer>
    </main>
  );
}
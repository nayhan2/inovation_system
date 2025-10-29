/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/no-unescaped-entities */
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
      // Gambar yang lebih sinematik: Pemandangan dari drone
      image:
        "https://images.unsplash.com/photo-1516924962500-2b4b3b99ea02?auto=format&fit=crop&w=1200&q=80",
    },
    robot: {
      title: "Susuri Jalanan Dunia",
      text: "Jadilah penjelajah urban. Kendalikan robot kami yang lincah untuk menyusuri jalanan kota bersejarah, taman yang asri, atau pantai yang eksotis secara langsung.",
      // Gambar yang lebih kontekstual: Robot di lingkungan nyata
      image:
        "https://images.unsplash.com/photo-1516924962500-2b4b3b99ea02?auto=format&fit=crop&w=1200&q=80",
    },
    humanoid: {
      title: "Sentuh Dunia Nyata (Visi)",
      text: "Inilah puncak pengalaman tele-presence. Rasakan sensasi berinteraksi dengan lingkungan melalui mata dan tangan avatar humanoid kami.",
      // Gambar yang lebih futuristik & humanis
      image:
        "https://images.unsplash.com/photo-1516924962500-2b4b3b99ea02?auto=format&fit=crop&w=1200&q=80",
    },
  };

  const current = solutions[activeTab];

  // Varian animasi untuk efek stagger
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Jeda antar elemen anak
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <main className="bg-white text-gray-800">
      {/* HERO SECTION */}
      <header className="relative flex flex-col items-center justify-center text-center py-24 px-6 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
        {/* Saran: Gunakan video background loop di sini jika memungkinkan */}
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
          whileInView="visible" // Animasi aktif saat di-scroll
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

        {/* Tabs */}
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

        {/* Animated Content */}
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
                {/*  */}
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

      {/* ... Sisa kode Anda bisa disesuaikan dengan gaya copywriting di atas ... */}
      
      {/* FOOTER */}
      <footer className="bg-gray-900 text-gray-400 py-10 text-center">
        <p className="italic mb-6">
          "The world is a book and those who do not travel read only one page."
        </p>
        <div className="flex justify-center flex-wrap gap-4 text-sm">
          <a href="#" className="hover:text-white transition-colors">
            Tentang Kami
          </a>
          <span>•</span>
          <a href="#" className="hover:text-white transition-colors">
            Visi
          </a>
          <span>•</span>
          <a href="#" className="hover:text-white transition-colors">
            Teknologi
          </a>
          <span>•</span>
          <a href="#" className="hover:text-white transition-colors">
            Menjadi Host
          </a>
          <span>•</span>
          <a href="#" className="hover:text-white transition-colors">
            Kontak
          </a>
        </div>
        <p className="text-xs text-gray-600 mt-8">© 2025 Intelecta. All Rights Reserved.</p>
      </footer>
    </main>
  );
}
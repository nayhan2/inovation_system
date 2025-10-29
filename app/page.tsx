/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/no-unescaped-entities */
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
// Tambahan ikon untuk FAQ dan Cara Kerjanya
import {
  FiCpu,
  FiUsers,
  FiDollarSign,
  FiUploadCloud,
  FiMapPin, // Ikon untuk Destinasi Unggulan
  FiZap, // Ikon untuk Kecepatan / Kontrol
  FiGlobe, // Ikon untuk Pilih Destinasi
  FiChevronDown, // Ikon untuk FAQ
} from "react-icons/fi";

// [FIX] Definisi tipe yang hilang ditambahkan kembali di sini
type SolutionKey = "drone" | "robot" | "humanoid";

interface Solution {
  title: string;
  text: string;
  image: string;
}

// Data Destinasi Unggulan
const featuredDestinations = [
  {
    id: 1,
    name: "Puncak Gunung Rinjani",
    type: "Drone 4K",
    description:
      "Rasakan kebebasan terbang di atas kaldera paling ikonik di Indonesia.",
    image:
      "https://images.unsplash.com/photo-1542456381-8079a40954b9?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 2,
    name: "Jalanan Kota Tua Jakarta",
    type: "Robot Roda Interaktif",
    description:
      "Susuri arsitektur bersejarah dan hiruk pikuk kota tanpa harus berada di sana.",
    image:
      "https://images.unsplash.com/photo-1581451000632-132d43e597c5?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 3,
    name: "Pantai Raja Ampat",
    type: "Drone Bawah Air",
    description:
      "Jelajahi keindahan biota laut dan terumbu karang yang menakjubkan secara langsung.",
    image:
      "https://images.unsplash.com/photo-1620023671295-886f4a2108b5?auto=format&fit=crop&w=600&q=80",
  },
];

// Data FAQ
const faqData = [
  {
    question: "Apakah ini real-time atau rekaman video?",
    answer:
      "Ini adalah pengalaman **real-time** sepenuhnya. Anda mengirimkan perintah kontrol (misalnya: maju, belok) ke perangkat fisik di lokasi, dan menerima umpan balik video serta kontrol latensi rendah secara langsung.",
  },
  {
    question: "Koneksi internet seperti apa yang saya butuhkan?",
    answer:
      "Untuk pengalaman terbaik, kami merekomendasikan koneksi broadband minimal **10 Mbps** dengan latensi rendah (di bawah 100ms). Latensi sangat penting untuk kontrol yang responsif.",
  },
  {
    question: "Bagaimana cara mendaftar sebagai Host (pemilik drone/robot)?",
    answer:
      "Cukup klik tombol **'Jadi Host & Hasilkan Uang'** dan ikuti proses verifikasi aset Anda. Kami akan menyediakan perangkat lunak yang diperlukan untuk menghubungkan perangkat Anda ke platform Intelecta.",
  },
];

export default function HomePage() {
  const [activeTab, setActiveTab] = useState<SolutionKey>("drone");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

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

  // =========================================================================
  // ANIMATION VARIANTS
  // =========================================================================

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

  const cardHoverEffect = {
    scale: 1.05,
    boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)",
    transition: { type: "spring", stiffness: 300 },
  };

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <main className="bg-white text-gray-800">
      {/* HERO SECTION */}
      {/* (Tidak ada perubahan pada Hero Section) */}
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

      {/* PROBLEM SECTION */}
      {/* (Tidak ada perubahan pada Problem Section) */}
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

      {/* --- SEKSI BARU: CARA KERJANYA (HOW IT WORKS) --- */}
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
              style={{ padding: "0 10rem" }} // Jarak padding untuk memulai/mengakhiri garis
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
            {[
              {
                icon: <FiGlobe className="text-4xl text-blue-600" />,
                title: "Pilih Destinasi",
                text: "Jelajahi galeri kami dan pilih pemandangan yang Anda impikan, dari pegunungan hingga dasar laut.",
              },
              {
                icon: <FiCpu className="text-4xl text-blue-600" />,
                title: "Ambil Kendali",
                text: "Segera terhubung dengan robot atau drone. Antarmuka kontrol yang intuitif siap di ujung jari Anda.",
              },
              {
                icon: <FiZap className="text-4xl text-blue-600" />,
                title: "Rasakan Real-Time",
                text: "Nikmati streaming latensi rendah dan rasakan ketenangan sejati, seolah-olah Anda berada di sana.",
              },
            ].map((step, index) => (
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

      {/* SOLUTION SECTION */}
      {/* (Tetap di sini, karena Cara Kerjanya membantu menjelaskan Solusi) */}
      <section className="py-20 px-6 bg-gray-50 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Teknologi yang Menyatukan Dunia Anda.
        </h2>
        <p className="max-w-3xl mx-auto text-gray-600 mb-12">
          Platform kami bukan simulasi. Anda mengontrol aset fisik di dunia
          nyata secara langsung untuk pengalaman yang otentik.
        </p>

        <div className="flex justify-center gap-2 md:gap-3 mb-8">
          {["drone", "robot", "humanoid"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab as SolutionKey)}
              className={`px-5 py-2 rounded-full font-medium transition-colors duration-300 md:text-lg text-sm ${
                activeTab === tab
                  ? "bg-blue-600 text-white shadow-md"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {tab === "drone" && "Drone ✈️"}
              {tab === "robot" && "Robot Roda 🤖"}
              {tab === "humanoid" && "Humanoid 🦾"}
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
              <div className="text-left flex-1 max-w-md md:px-0 px-4">
                <h3 className="text-2xl font-bold mb-3 text-blue-700">
                  {current.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{current.text}</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* --- SEKSI BARU: DESTINASI UNGGULAN --- */}
      <section id="destinations" className="py-20 px-6 bg-white text-center">
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
            {featuredDestinations.map((destin, index) => (
              <motion.div
                key={destin.id}
                variants={itemVariants}
                className="bg-gray-50 rounded-xl overflow-hidden shadow-lg"
                whileHover={{
                    scale: 1.05,
                    boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)",
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
                  <div className="absolute inset-0 bg-black bg-opacity-30 flex items-end p-4">
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

      {/* BENEFIT SECTION */}
      {/* (Tidak ada perubahan pada Benefit Section) */}
      <section className="grid md:grid-cols-2 text-white">
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
              Lawan burnout dengan mengakses pemandangan alam paling menenangkan
              di dunia, langsung dari layar Anda.
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
      {/* (Tidak ada perubahan pada Business Model Section) */}
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

      {/* --- SEKSI BARU: FAQ (TANYA JAWAB) --- */}
      <section id="faq" className="py-20 px-6 bg-white">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="max-w-4xl mx-auto"
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl font-bold text-center mb-12"
          >
            Pertanyaan yang Sering Diajukan
          </motion.h2>

          <div className="space-y-4">
            {faqData.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-gray-50 border border-gray-200 rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="flex justify-between items-center w-full p-5 text-lg font-semibold text-left text-gray-800 hover:bg-gray-100 transition-colors"
                >
                  {item.question}
                  <motion.span
                    animate={{ rotate: openFaq === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <FiChevronDown className="w-6 h-6 text-blue-600" />
                  </motion.span>
                </button>
                <AnimatePresence>
                  {openFaq === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="px-5 pb-5 text-gray-600"
                    >
                      <p>{item.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* VISION SECTION */}
      {/* (Tidak ada perubahan pada Vision Section) */}
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

      {/* FOOTER */}
      {/* (Tidak ada perubahan pada Footer) */}
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

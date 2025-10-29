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
      title: "Drone",
      text: "Kendalikan drone untuk panorama udara dan cityscape yang mustahil diakses manusia.",
      image:
        "https://images.unsplash.com/photo-1508615039623-a25605d2b022?auto=format&fit=crop&w=1200&q=80",
    },
    robot: {
      title: "Robot Roda",
      text: "Eksplorasi area wisata dan lingkungan urban melalui robot roda yang dikendalikan jarak jauh secara real-time.",
      image:
        "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&w=1200&q=80",
    },
    humanoid: {
      title: "Humanoid (Visi)",
      text: "Menghadirkan pengalaman paling imersif—mengontrol humanoid nyata untuk berinteraksi dengan dunia sekitar.",
      image:
        "https://images.unsplash.com/photo-1581092334641-15e81b50c9b4?auto=format&fit=crop&w=1200&q=80",
    },
  };

  const current = solutions[activeTab];

  return (
    <main className="bg-white text-gray-800">
      {/* HERO SECTION */}
      <header className="relative flex flex-col items-center justify-center text-center py-24 px-6 bg-gradient-to-b from-gray-100 to-white">
        <div className="absolute inset-0 opacity-10 flex items-center justify-center">
          <p className="text-sm text-gray-500">
            [Visual: Video drone cityscape & robot di pantai]
          </p>
        </div>

        <div className="relative z-10 max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Rasakan Dunia Nyata. Kapan Saja. Dari Mana Saja.
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Memperkenalkan <span className="font-semibold">Intelecta</span>:
            Platform Meta-Tourism Real-Time pertama di dunia. Kami mengatasi
            krisis burnout global dengan memberi Anda akses tele-presence instan
            untuk <i>healing</i>.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="#"
              className="bg-blue-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-blue-700 transition"
            >
              [ Tonton Demo (1 Menit) ]
            </a>
            <a
              href="#"
              className="border border-blue-600 text-blue-600 px-6 py-3 rounded-xl font-medium hover:bg-blue-50 transition"
            >
              [ Pelajari Visi Kami ]
            </a>
          </div>
        </div>
      </header>

      {/* PROBLEM SECTION */}
      <section className="py-20 px-6 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-12">
          Kesenjangan Akses Terapeutik
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              icon: "💆‍♀️",
              title: "Krisis Burnout Global",
              text: "WHO mengakui burnout sebagai fenomena pekerjaan global. Kebutuhan akan ketenangan jiwa sangat tinggi.",
            },
            {
              icon: "💸",
              title: "Liburan Tidak Terjangkau",
              text: "Solusi tradisional seperti liburan fisik terhalang oleh biaya, waktu, dan logistik yang rumit.",
            },
            {
              icon: "♿",
              title: "Keterbatasan Mobilitas",
              text: "Jutaan lansia dan penyandang disabilitas mendambakan eksplorasi dunia namun terhalang secara fisik.",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white shadow-md p-6 rounded-xl hover:shadow-lg transition"
            >
              <div className="text-3xl mb-3">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SOLUTION SECTION */}
      <section className="py-20 px-6 bg-white text-center">
        <h2 className="text-3xl font-bold mb-4">
          Solusi Kami: Tele-Presence as a Service (TaaS)
        </h2>
        <p className="max-w-3xl mx-auto text-gray-600 mb-8">
          Platform kami mengintegrasikan XR dengan robotika dunia nyata. Bukan
          simulasi. Anda mengontrol aset fisik secara real-time.
        </p>

        {/* Tabs */}
        <div className="flex justify-center gap-3 mb-8">
          {[
            { id: "drone", label: "Drone" },
            { id: "robot", label: "Robot Roda" },
            { id: "humanoid", label: "Humanoid (Visi)" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as SolutionKey)}
              className={`px-4 py-2  rounded-lg font-medium transition ${
                activeTab === tab.id
                  ? "bg-blue-600 text-white"
                  : "border border-gray-300 hover:bg-gray-100"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Animated Content */}
        <div className="flex flex-col md:flex-row items-center justify-center md:gap-4 gap-6 max-w-5xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="flex flex-col md:flex-row items-center justify-center md:gap-12 gap-8 w-full"
            >
              <div className="flex-1 max-w-md">
                <img
                  src={current.image}
                  alt={current.title}
                  className="rounded-xl shadow-md w-full h-[280px] object-cover object-center"
                />
              </div>
              <div className="text-left flex-1 max-w-md">
                <h3 className="text-2xl font-semibold mb-2">{current.title}</h3>
                <p className="text-gray-600 leading-relaxed">{current.text}</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* BENEFIT SECTION */}
      <section className="grid md:grid-cols-2">
        <div className="relative bg-blue-600 text-white p-16 flex items-center">
          <div>
            <h3 className="text-2xl font-bold mb-2">Demokratisasi Healing</h3>
            <p className="text-blue-100">
              Dapatkan solusi healing instan dan efektif untuk mengurangi stres
              dan burnout, kapanpun Anda butuhkan.
            </p>
          </div>
        </div>
        <div className="relative bg-gray-800 text-white p-16 flex items-center">
          <div>
            <h3 className="text-2xl font-bold mb-2">Inklusivitas Penuh</h3>
            <p className="text-gray-300">
              Memberikan kebebasan eksplorasi penuh bagi individu dengan
              keterbatasan fisik melalui Tele-Presence Humanoid.
            </p>
          </div>
        </div>
      </section>

      {/* BUSINESS MODEL */}
      <section className="py-20 px-6 bg-gray-50 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Menciptakan Tele-Economy Baru
        </h2>
        <p className="max-w-3xl mx-auto text-gray-600 mb-8">
          Kami menggunakan Model Crowdsourcing Aset (mirip Airbnb). Jutaan aset
          drone dan robot yang menganggur kini dapat menjadi sumber pendapatan
          pasif baru bagi Host.
        </p>
        <div className="text-lg text-gray-500 mb-6">
          [Host Daftar Aset] → [Platform Intelecta] → [User Memesan] → [Host
          Dapat Profit]
        </div>
        <a
          href="#"
          className="bg-blue-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-blue-700 transition"
        >
          [ Tertarik Menjadi Host Aset? ]
        </a>
      </section>

      {/* VISION SECTION */}
      <section className="py-20 px-6 text-center bg-white">
        <h2 className="text-3xl font-bold mb-4">Visi $1 Triliun Kami</h2>
        <blockquote className="italic max-w-3xl mx-auto text-gray-600 mb-8">
          "Misi kami adalah 'Participate in the Birth of the Future'. Kami akan
          menempatkan Indonesia sebagai pemimpin di teknologi XR dan
          Tele-Humanoid, mendefinisikan ulang batas-batas pariwisata, healing,
          dan tele-presence global."
        </blockquote>
        <div className="flex justify-center gap-6 text-gray-500">
          <span>[Logo Apple/Meta]</span>
          <span>[Logo Robotika]</span>
          <span>[Logo 5G]</span>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-gray-300 py-8 text-center">
        <p className="italic mb-4">
          "We were born in this world, so why don't we enjoy this world."
        </p>
        <div className="flex justify-center flex-wrap gap-3 text-sm">
          <a href="#" className="hover:text-white">
            Tentang Kami
          </a>
          <span>|</span>
          <a href="#" className="hover:text-white">
            Visi
          </a>
          <span>|</span>
          <a href="#" className="hover:text-white">
            Teknologi
          </a>
          <span>|</span>
          <a href="#" className="hover:text-white">
            Menjadi Host
          </a>
          <span>|</span>
          <a href="#" className="hover:text-white">
            Kontak
          </a>
        </div>
      </footer>
    </main>
  );
}

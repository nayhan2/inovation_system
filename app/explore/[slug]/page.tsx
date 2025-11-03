// src/app/explore/[slug]/page.tsx
"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { FiArrowLeft } from "react-icons/fi";
import { motion } from "framer-motion";

// 1. IMPOR KOMPONEN BACKGROUND
// (Sesuaikan path jika diperlukan, asumsi @/ menunjuk ke src/)
import { ParticleNetworkBackground } from "@/components/shared/ParticleNetworkBackground";

// Definisikan data untuk demo video
// ... (data explorationData tetap sama)
const explorationData: Record<string, { name: string; videoUrl: string }> = {
  "gunung-rinjani": {
    name: "Gunung Rinjani",
    videoUrl: "https://www.youtube.com/embed/6i3r2H7yG5M",
  },
  "kota-tua-jakarta": {
    name: "Kota Tua Jakarta",
    videoUrl: "https://www.youtube.com/embed/a-s01i-c-E8",
  },
  "raja-ampat": {
    name: "Raja Ampat",
    videoUrl: "https://www.youtube.com/embed/N-a-2a-NHeQ",
  },
};

export default function ExplorePage() {
  const params = useParams();
  const slug = params.slug as string;
  const data = explorationData[slug];

  if (!data) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800">
               {" "}
        <h2 className="text-2xl font-bold mb-4">Destinasi Tidak Ditemukan</h2> 
             {" "}
        <Link
          href="/"
          className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
                    <FiArrowLeft className="mr-2" />          Kembali ke Beranda
                 {" "}
        </Link>
             {" "}
      </div>
    );
  }

  return (
    <motion.main // 2. TAMBAHKAN 'relative' AGAR BACKGROUND 'absolute' BERFUNGSI
      className="relative min-h-screen bg-black text-white p-4 md:p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
                  {/* 3. TAMBAHKAN KOMPONEN BACKGROUND DI SINI */}
            <ParticleNetworkBackground />     {" "}
      {/* 4. TAMBAHKAN 'relative' dan 'z-10' PADA KONTEN WRAPPER */}     {" "}
      <div className="relative z-10 max-w-6xl mx-auto">
                {/* Tombol Kembali */}       {" "}
        <motion.div
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2, type: "spring" }}
        >
                   {" "}
          <Link
            href="/#destinations"
            scroll={false}
            className="inline-flex items-center text-gray-300 hover:text-white transition-colors mb-6 group"
          >
                       {" "}
            <FiArrowLeft className="mr-2 transform group-hover:-translate-x-1 transition-transform" />
                        Kembali          {" "}
          </Link>
                 {" "}
        </motion.div>
                {/* Judul */}       {" "}
        <motion.h1
          className="text-3xl md:text-5xl font-bold mb-6 text-center"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, type: "spring" }}
        >
                    Demo Eksplorasi:{" "}
          <span className="text-blue-400">{data.name}</span>       {" "}
        </motion.h1>
                {/* Kontainer Video (Embed YouTube) */}       {" "}
        <motion.div
          className="relative w-full aspect-video rounded-xl overflow-hidden shadow-2xl shadow-blue-500/20"
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
                   {" "}
          <iframe
            src={data.videoUrl}
            title={`Demo Eksplorasi ${data.name}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="absolute top-0 left-0 w-full h-full"
          ></iframe>
                 {" "}
        </motion.div>
                {/* Deskripsi/Placeholder */}       {" "}
        <motion.div
          className="text-center mt-6 text-gray-400"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, type: "spring" }}
        >
                    <p>Ini adalah tampilan demo aplikasi MetaTourism.</p>       
            <p>Gunakan kontrol video untuk memulai penjelajahan.</p>       {" "}
        </motion.div>
             {" "}
      </div>
         {" "}
    </motion.main>
  );
}

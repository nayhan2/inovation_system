// src/components/sections/SolutionSection.tsx (DENGAN ANIMASI GAMBAR)
import { motion, AnimatePresence } from "framer-motion";
import { Solution, SolutionKey } from "../types";

interface Props {
  solutions: Record<SolutionKey, Solution>;
  activeTab: SolutionKey;
  setActiveTab: (key: SolutionKey) => void;
}

export function SolutionSection({ solutions, activeTab, setActiveTab }: Props) {
  const current = solutions[activeTab];

  return (
    <section className="py-20 px-6 bg-gray-50 text-center">
      <h2 className="text-3xl font-bold mb-4">
        Teknologi yang Menyatukan Dunia Anda.
      </h2>
      <p className="max-w-3xl mx-auto text-gray-600 mb-12">
        Platform kami bukan simulasi. Anda mengontrol aset fisik di dunia nyata
        secara langsung untuk pengalaman yang otentik.
      </p>

      <div className="flex justify-center gap-2 md:gap-3 mb-8">
        {Object.keys(solutions).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab as SolutionKey)}
            className={`px-5 py-2 rounded-full font-medium transition-colors duration-300 md:text-lg text-sm ${
              activeTab === tab
                ? "bg-blue-600 text-white shadow-md"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            {tab === "vr" && "Visual Pro 🥽"}
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
            {/* TAMBAHKAN ANIMASI KHUSUS UNTUK GAMBAR */}
            <motion.div
              className="flex-1 max-w-md"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <img
                src={current.image}
                alt={current.title}
                className="rounded-xl shadow-lg w-full h-[280px] object-cover object-center"
              />
            </motion.div>
            {/* AKHIR ANIMASI GAMBAR */}
            
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
  );
}
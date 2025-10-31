/* eslint-disable react/no-unescaped-entities */
// src/components/shared/Footer.tsx
import { motion } from "framer-motion";

export function Footer() {
  return (
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
          Meta Tourism Tele Presence
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
  );
}
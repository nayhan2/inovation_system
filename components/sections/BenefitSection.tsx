import { motion, Variants } from "framer-motion";

// Varian animasi untuk gambar
const imageVariants: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

// Varian animasi untuk teks (muncul dari samping)
// TAMBAHKAN TIPE ': Variants' UNTUK MEMPERBAIKI ERROR
const textVariants = (isLeft: boolean): Variants => ({
  hidden: { opacity: 0, x: isLeft ? -30 : 30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
});

export function BenefitSection() {
  return (
    // Mengganti layout grid menjadi layout tumpuk (stacking) biasa
    // Kita akan atur grid di dalam masing-masing blok
    <section className="bg-white">
      {/* BLOK 1: Ketenangan Instan
        (Gambar di Kiri, Teks di Kanan)
      */}
      <div className="max-w-6xl mx-auto px-6 py-20 md:py-24 grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        {/* KOLOM GAMBAR 1 */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={imageVariants}
        >
          <img
            src="https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?auto=format&fit=crop&w=1200&q=80=80"
            alt="Pemandangan malam berbintang"
            className="rounded-2xl shadow-xl w-full h-full max-h-[400px] object-cover"
          />
        </motion.div>

        {/* KOLOM TEKS 1 */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={textVariants(false)} // Muncul dari kanan (false)
        >
          <h3 className="text-3xl font-bold mb-4 text-gray-900">
            Ketenangan Instan, Tanpa Batas.
          </h3>
          <p className="text-lg text-gray-600 max-w-lg leading-relaxed">
            Lawan burnout dengan mengakses pemandangan alam paling menenangkan di
            dunia, langsung dari layar Anda. Teknologi imersif kami membawa
            ketenangan langsung ke hadapan Anda, kapanpun Anda butuh.
          </p>
        </motion.div>
      </div>

      {/* BLOK 2: Tanpa Halangan
        (Teks di Kiri, Gambar di Kanan) - SESUAI PERMINTAAN
      */}
      <div className="">
        <div className="max-w-6xl mx-auto px-6 py-20 md:py-24 grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* KOLOM TEKS 2 */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={textVariants(true)} // Muncul dari kiri (true)
          >
            <h3 className="text-3xl font-bold mb-4 text-gray-900">
              Rasakan Dunia Tanpa Halangan.
            </h3>
            <p className="text-lg text-gray-600 max-w-lg leading-relaxed">
              Teknologi kami membuka pintu bagi siapa saja dengan keterbatasan
              mobilitas untuk menjelajahi dunia sebebas impian mereka. Meruntuhkan
              batasan fisik untuk pengalaman yang setara.
            </p>
          </motion.div>

          {/* KOLOM GAMBAR 2 */}
          {/* KELAS 'md:order-first' DIHAPUS AGAR GAMBAR DI KANAN */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={imageVariants}
          >
            <img
              // MENGGANTI GAMBAR DAN ALT
              src="https://adriana-maria.com/wp-content/uploads/2025/03/St-John-church-Val-di-Funes-Dolomites-Italy.jpg"
              alt="Gereja St. John di Val di Funes, Dolomites"
              className="rounded-2xl shadow-xl w-full h-full max-h-[400px] object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* eslint-disable react-hooks/rules-of-hooks */
// src/components/sections/DestinationSection.tsx
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"; // UBAH: Tambahkan useMotionValue, useSpring, useTransform
import { FiMapPin } from "react-icons/fi";
import { Destination, containerVariants, itemVariants } from "../types";

interface Props {
  destinations: Destination[];
}

// ------------------- FUNGSI TAMBAHAN UNTUK 3D TILT -------------------
// Lihat dokumentasi Framer Motion untuk Mouse-based spring
const useTilt = (isHovering: boolean) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Ubah nilai x/y (piksel) menjadi rotasi (-10 hingga 10 derajat)
  const rotateX = useTransform(y, [-50, 50], [10, -10]);
  const rotateY = useTransform(x, [-50, 50], [-10, 10]);

  // Spring untuk transisi yang mulus
  const springConfig = { damping: 20, stiffness: 200, mass: 1 };
  const springRotateX = useSpring(rotateX, springConfig);
  const springRotateY = useSpring(rotateY, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!isHovering) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    // Nilai -50 hingga 50 untuk transformasi
    x.set((mouseX - width / 2) / 2);
    y.set((mouseY - height / 2) / 2);
  };
  
  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return { springRotateX, springRotateY, handleMouseMove, handleMouseLeave };
};
// ---------------------------------------------------------------------

export function DestinationSection({ destinations }: Props) {
  // ... (kode lainnya tetap sama)

  return (
    <section
      id="destinations"
      className="py-20 md:py-0 px-6 bg-white text-center md:h-screen flex flex-col justify-center"
    >
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
          {destinations.map((destin) => {
            // Panggil hook di dalam map loop
            const { springRotateX, springRotateY, handleMouseMove, handleMouseLeave } = useTilt(true); 

            return (
              <motion.div
                key={destin.id}
                variants={itemVariants}
                className="bg-gray-50 rounded-xl overflow-hidden shadow-lg relative" // TAMBAHKAN relative
                onMouseMove={handleMouseMove} // TAMBAHKAN handler mouse move
                onMouseLeave={handleMouseLeave} // TAMBAHKAN handler mouse leave
                style={{ 
                    rotateX: springRotateX, // Terapkan rotasi X
                    rotateY: springRotateY, // Terapkan rotasi Y
                    transformStyle: "preserve-3d" // PENTING untuk 3D
                }} 
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 25px rgba(0, 0, 0, 0.15)", // Sedikit besarkan shadow
                  transition: { type: "spring", stiffness: 300 },
                }}
              >
                <div className="relative h-48 overflow-hidden">
                  <motion.img
                    src={destin.image}
                    alt={destin.name}
                    className="w-full h-full object-cover"
                    // Efek Scale untuk gambar tetap dipertahankan
                    variants={{
                      rest: { scale: 1 },
                      hover: { scale: 1.1, transition: { duration: 0.8 } },
                    }}
                    initial="rest"
                    whileHover="hover"
                    // Tambahkan properti untuk mencegah gambar bergeser saat tilt
                    style={{ transformStyle: "preserve-3d" }} 
                  />
           
                  <div className="absolute inset-0 flex items-end p-4">
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
            );
          })}
        </motion.div>
      </motion.div>
    </section>
  );
}
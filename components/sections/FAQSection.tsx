// src/components/sections/FAQSection.tsx
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronDown } from "react-icons/fi";
import { FAQItem, containerVariants, itemVariants } from "../types";

interface Props {
  data: FAQItem[];
  openFaq: number | null;
  toggleFaq: (index: number) => void;
}

// --- FUNGSI BARU UNTUK MENGUBAH TEKS MENJADI BOLD ---
/**
 * Mengganti semua kemunculan **teks** menjadi <strong>teks</strong>.
 * @param text String jawaban FAQ
 * @returns String HTML yang sudah diolah
 */
const formatAnswer = (text: string): string => {
  // Regex: mencari pola **...** (tanda ** di awal dan akhir)
  // g = global (mencari semua kemunculan)
  // $1 merujuk pada teks yang ada di dalam kurung (...)
  return text.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
};
// ----------------------------------------------------

export function FAQSection({ data, openFaq, toggleFaq }: Props) {
  return (
    <section
      id="faq"
      className="py-20 md:py-0 px-6 bg-white md:h-screen flex flex-col justify-center"
    >
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
          {data.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-gray-50 border border-gray-200 rounded-xl overflow-hidden"
            >
              {/* Button tetap sama */}
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

              <AnimatePresence initial={false}>
                {openFaq === index && (
                  <motion.div
                    // Menganimasikan hanya opacity dan properti y (translasi)
                    initial="collapsed"
                    animate="open"
                    exit="collapsed"
                    variants={{
                      open: { opacity: 1, height: "auto" },
                      collapsed: { opacity: 0, height: 0 },
                    }}
                    transition={{
                      duration: 0.4,
                      ease: [0.04, 0.62, 0.23, 0.98],
                    }} // Easing khas Framer Motion untuk Accordion
                    className="overflow-hidden" // PENTING: Untuk menyembunyikan konten saat height 0
                  >
                    {/* ELEMEN P WRAPPER - INI YANG KITA ANIMASIKAN POSISINYA */}
                    <motion.p
                      // Mengatur posisi konten agar muncul dari atas saat dibuka
                      initial={{ y: -20 }}
                      animate={{ y: 0 }}
                      exit={{ y: -20 }}
                      transition={{
                        duration: 0.4,
                        ease: [0.04, 0.62, 0.23, 0.98],
                      }}
                      className="px-5 pb-5 pt-0 text-gray-600"
                      dangerouslySetInnerHTML={{
                        __html: formatAnswer(item.answer),
                      }}
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

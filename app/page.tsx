// src/app/HomePage.tsx
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/no-unescaped-entities */
"use client";

import { useState } from "react";
import { FiCpu, FiGlobe, FiZap } from "react-icons/fi";
import {
  Solution,
  SolutionKey,
  Destination,
  FAQItem,
  ProblemItem,
  HowItWorksStep,
} from "@/components/types"; // Import Tipe

// Import Komponen Sections
import { HeroSection } from "@/components/sections/HeroSection";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";
import { SolutionSection } from "@/components/sections/SolutionSection";
import { DestinationSection } from "@/components/sections/DestinationSection";
import { BenefitSection } from "@/components/sections/BenefitSection";
import { BusinessModelSection } from "@/components/sections/BusinessModelSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { VisionSection } from "@/components/sections/VisionSection";
import { Footer } from "@/components/shared/Footer";

// =========================================================================
// DATA
// =========================================================================

const solutionsData: Record<SolutionKey, Solution> = {
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

const featuredDestinationsData: Destination[] = [
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

const faqData: FAQItem[] = [
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

const problemData: ProblemItem[] = [
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
];

const howItWorksSteps: HowItWorksStep[] = [
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
];

export default function HomePage() {
  const [activeTab, setActiveTab] = useState<SolutionKey>("drone");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <main className="bg-white text-gray-800">
      <HeroSection />
      <ProblemSection data={problemData} />
      <HowItWorksSection steps={howItWorksSteps} />
      <SolutionSection
        solutions={solutionsData}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <DestinationSection destinations={featuredDestinationsData} />
      <BenefitSection />
      <BusinessModelSection />
      <FAQSection data={faqData} openFaq={openFaq} toggleFaq={toggleFaq} />
      <VisionSection />
      <Footer />
    </main>
  );
}
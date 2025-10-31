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
  vr: {
    title: "Rasakan Dunia Virtual",
    text: "Masuki dunia virtual yang memukau dengan teknologi VR canggih kami. Jelajahi lingkungan 3D yang dirancang dengan detail tinggi, berinteraksi dengan objek, dan alami sensasi kehadiran seolah-olah Anda benar-benar ada di sana.",
    image:
      "https://images.unsplash.com/photo-1706990769341-d450bb0c52b7?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1974",
  },  
  drone: {
    title: "Jelajahi Langit",
    text: "Ambil alih kemudi drone dan saksikan keindahan dunia dari perspektif mata burung yang memukau. Rasakan kebebasan terbang di atas pegunungan dan kota-kota ikonik.",
    image:
      "https://images.unsplash.com/photo-1646578310211-2b43b1196995?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
  },
  robot: {
    title: "Susuri Jalanan Dunia",
    text: "Jadilah penjelajah urban. Kendalikan robot kami yang lincah untuk menyusuri jalanan kota bersejarah, taman yang asri, atau pantai yang eksotis secara langsung.",
    image:
      "https://images.unsplash.com/photo-1641309623097-c305ba71ec7d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1171",
  },
  humanoid: {
    title: "Sentuh Dunia Nyata (Visi)",
    text: "Inilah puncak pengalaman tele-presence. Rasakan sensasi berinteraksi dengan lingkungan melalui mata dan tangan avatar humanoid kami.",
    image:
      "https://www.1x.tech/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fqka6yvsc%2Fproduction%2F8353aa0348b725209afd88990b7d51ca050176e2-4096x2730.jpg&w=1080&q=90 ",
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
      "https://i.pinimg.com/736x/a2/0b/5c/a20b5c00ac7e0e128350aa4380a976d8.jpg",
  },
  {
    id: 2,
    name: "Jalanan Kota Tua Jakarta",
    type: "Robot Roda Interaktif",
    description:
      "Susuri arsitektur bersejarah dan hiruk pikuk kota tanpa harus berada di sana.",
    image:
      "https://asset.kompas.com/crops/21QAQQA2r75BSzFFzJpwNHeIVe0=/43x0:895x568/750x500/data/photo/2023/09/27/6513a179e3201.jpg",
  },
  {
    id: 3,
    name: "Pantai Raja Ampat",
    type: "Drone Bawah Air",
    description:
      "Jelajahi keindahan biota laut dan terumbu karang yang menakjubkan secara langsung.",
    image:
      "https://i.pinimg.com/1200x/ec/6c/44/ec6c44dddc98ad1bc6b199c1c6331720.jpg",
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
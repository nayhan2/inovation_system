// src/components/types.ts

import { JSX } from "react";

export type SolutionKey = "drone" | "robot" | "humanoid";

export interface Solution {
  title: string;
  text: string;
  image: string;
}

export interface Destination {
  id: number;
  name: string;
  type: string;
  description: string;
  image: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ProblemItem {
  icon: string;
  title: string;
  text: string;
}

export interface HowItWorksStep {
  icon: JSX.Element;
  title: string;
  text: string;
}

// Tambahkan definisi untuk variants agar bisa diimpor
export const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

// src/components/types.ts

import { Variants } from "framer-motion";
import { JSX } from "react";

export type SolutionKey = "drone" | "robot" | "humanoid" | "vr";

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
export const fadeInVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1, 
    transition: { 
      duration: 0.8, 
      ease: [0.4, 0.0, 0.2, 1] 
    } 
  },
};
export const containerVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

export const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export interface HowItWorksStep {
  icon: JSX.Element;
  title: string;
  text: string;
}

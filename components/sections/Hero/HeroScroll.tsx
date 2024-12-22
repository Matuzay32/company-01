"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function HeroScroll() {
  const scrollToNext = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth"
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1 }}
      className="absolute bottom-10 left-1/2 -translate-x-1/2 cursor-pointer"
      onClick={scrollToNext}
    >
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <ChevronDown className="w-10 h-10 text-white/50" />
      </motion.div>
    </motion.div>
  );
}
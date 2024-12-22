"use client";

import { motion } from "framer-motion";

interface ColorCardProps {
  color: string;
  name: string;
  hex: string;
  delay: number;
}

export default function ColorCard({ color, name, hex, delay }: ColorCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
      viewport={{ once: true }}
      className="group cursor-pointer"
    >
      <div 
        className={`h-40 rounded-2xl mb-4 transition-transform duration-300 group-hover:scale-105 ${color}`}
      />
      <h3 className="text-lg font-medium text-white">{name}</h3>
      <p className="text-white/60">{hex}</p>
    </motion.div>
  );
}
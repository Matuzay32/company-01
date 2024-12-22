"use client";

import { motion } from "framer-motion";

interface PrincipleCardProps {
  number: string;
  title: string;
  description: string;
  delay: number;
}

export default function PrincipleCard({ number, title, description, delay }: PrincipleCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
      viewport={{ once: true }}
      className="relative group"
    >
      <div className="absolute -inset-0.5 bg-gradient-to-r from-white/20 to-white/0 rounded-3xl blur opacity-0 group-hover:opacity-100 transition duration-500" />
      <div className="relative p-8 bg-white/5 rounded-3xl">
        <span className="text-6xl font-bold text-white/10">{number}</span>
        <h3 className="text-2xl font-bold mt-4 mb-2">{title}</h3>
        <p className="text-white/60">{description}</p>
      </div>
    </motion.div>
  );
}
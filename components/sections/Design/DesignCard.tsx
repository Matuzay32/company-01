"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface DesignCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay: number;
}

export default function DesignCard({ icon: Icon, title, description, delay }: DesignCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
      viewport={{ once: true }}
      className="group relative p-8 rounded-3xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg border border-white/10 hover:border-white/20 transition-all duration-300"
    >
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
      
      <div className="relative z-10">
        <div className="w-16 h-16 bg-gradient-to-br from-white to-white/50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
          <Icon className="w-8 h-8 text-black" />
        </div>
        
        <h3 className="text-2xl font-bold mb-4 group-hover:text-white transition-colors duration-300">
          {title}
        </h3>
        
        <p className="text-white/60 group-hover:text-white/70 transition-colors duration-300">
          {description}
        </p>
      </div>
    </motion.div>
  );
}
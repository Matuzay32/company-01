'use client';

import { motion } from 'framer-motion';
import ColorCard from './ColorCard';
import CustomSection from '@/components/ui/Others/CustomSection';

const colors = [
  { name: 'Midnight', hex: '#000000', color: 'bg-black' },
  { name: 'Starlight', hex: '#F5F5F7', color: 'bg-[#F5F5F7]' },
  { name: 'Space Gray', hex: '#86868B', color: 'bg-[#86868B]' },
  { name: 'Silver', hex: '#E3E3E3', color: 'bg-[#E3E3E3]' },
  { name: 'Pacific Blue', hex: '#0066CC', color: 'bg-[#0066CC]' },
  { name: 'Gold', hex: '#FAD7BD', color: 'bg-[#FAD7BD]' },
];

export default function ColorPalette() {
  return (
    <section className="py-32 bg-black">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-6">
            Colors that
            <br />
            <span className="bg-gradient-to-r from-white to-white/40 bg-clip-text text-transparent">
              inspire
            </span>
          </h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            Our carefully curated color palette brings harmony and emotion to
            every design
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {colors.map((color, index) => (
            <ColorCard
              key={index}
              name={color.name}
              hex={color.hex}
              color={color.color}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

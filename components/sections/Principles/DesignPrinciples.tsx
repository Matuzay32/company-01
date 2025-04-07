'use client';

import { motion } from 'framer-motion';
import PrincipleCard from './PrincipleCard';
import CustomSection from '@/components/ui/Others/CustomSection';

const principles = [
  {
    number: '01',
    title: 'Simplicity',
    description:
      'Less is more. We remove the unnecessary to focus on what matters.',
  },
  {
    number: '02',
    title: 'Consistency',
    description: 'Unified experience across all touchpoints and platforms.',
  },
  {
    number: '03',
    title: 'Detail',
    description: 'Every pixel, every interaction is crafted with purpose.',
  },
  {
    number: '04',
    title: 'Innovation',
    description: 'Pushing boundaries while maintaining usability and elegance.',
  },
];

export default function DesignPrinciples() {
  return (
    // <CustomSection height="h-2">
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/videos/particles_video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-6">
            Our Design
            <br />
            <span className="bg-gradient-to-r from-white to-white/40 bg-clip-text text-transparent">
              Principles
            </span>
          </h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            Guiding philosophies that shape every project we undertake
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {principles.map((principle, index) => (
            <PrincipleCard
              key={index}
              number={principle.number}
              title={principle.title}
              description={principle.description}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
    // </CustomSection>
  );
}

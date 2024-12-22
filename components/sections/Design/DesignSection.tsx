"use client";

import { motion } from "framer-motion";
import { Palette, Wand2, Laptop, Layers, Code, Monitor } from "lucide-react";
import DesignCard from "./DesignCard";

const services = [
  {
    icon: Palette,
    title: "Visual Design",
    description: "Creating stunning visuals that capture attention and communicate your brand's story effectively."
  },
  {
    icon: Wand2,
    title: "User Experience",
    description: "Crafting intuitive interfaces that delight users and drive meaningful engagement."
  },
  {
    icon: Laptop,
    title: "Development",
    description: "Building robust, scalable solutions with cutting-edge technology and best practices."
  },
  {
    icon: Layers,
    title: "Brand Identity",
    description: "Developing cohesive brand identities that resonate with your target audience."
  },
  {
    icon: Code,
    title: "Clean Code",
    description: "Writing maintainable, efficient code that scales with your business needs."
  },
  {
    icon: Monitor,
    title: "Responsive Design",
    description: "Ensuring your digital presence looks and works perfectly across all devices."
  }
];

export default function DesignSection() {
  return (
    <section className="py-32 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-6">
            Designed for
            <br />
            <span className="bg-gradient-to-r from-white to-white/40 bg-clip-text text-transparent">
              excellence
            </span>
          </h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            Our approach combines cutting-edge technology with timeless design principles
            to create experiences that resonate and inspire.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <DesignCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
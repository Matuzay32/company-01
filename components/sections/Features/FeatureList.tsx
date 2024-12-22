"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

const features = [
  "Responsive across all devices",
  "Optimized for performance",
  "Accessibility-first approach",
  "Future-proof architecture",
  "SEO optimization built-in",
  "Blazing fast load times"
];

export default function FeatureList() {
  return (
    <div className="space-y-6">
      {features.map((feature, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: index * 0.1 }}
          viewport={{ once: true }}
          className="flex items-center gap-4"
        >
          <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center">
            <Check className="w-4 h-4 text-white" />
          </div>
          <p className="text-lg">{feature}</p>
        </motion.div>
      ))}
    </div>
  );
}
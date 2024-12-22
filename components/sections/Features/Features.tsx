"use client";

import { motion } from "framer-motion";
import FeatureList from "./FeatureList";

export default function Features() {
  return (
    <section className="py-32 bg-gradient-to-b from-black to-background">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-6xl font-bold">
              Designed for the
              <br />
              <span className="bg-gradient-to-r from-white to-white/40 bg-clip-text text-transparent">
                future
              </span>
            </h2>
            <p className="text-xl text-white/60">
              Our designs are built to last, combining timeless aesthetics with
              forward-thinking functionality.
            </p>
            <FeatureList />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative aspect-square rounded-3xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1618788372246-79faff0c3742?auto=format&fit=crop&q=80"
                alt="Design showcase"
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>
            <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-primary/20 rounded-full blur-3xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
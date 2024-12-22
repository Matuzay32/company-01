"use client";

import { motion } from "framer-motion";

const products = [
  {
    title: "Web Design",
    description: "Create stunning websites that leave a lasting impression",
    video: "https://www.apple.com/105/media/us/macbook-pro-14-and-16/2021/a1c5c147-6e09-4f99-8233-da7a1f9c789c/anim/hero/large.mp4"
  },
  {
    title: "Mobile First",
    description: "Optimized experiences for every device",
    image: "https://images.unsplash.com/photo-1556656793-08538906a9f8?auto=format&fit=crop&q=80"
  }
];

export default function ProductShowcase() {
  return (
    <section className="bg-black">
      {products.map((product, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="relative h-screen"
        >
          {product.video ? (
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            >
              <source src={product.video} type="video/mp4" />
            </video>
          ) : (
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-full object-cover"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-6xl md:text-8xl font-bold mb-6"
              >
                {product.title}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-xl md:text-2xl text-white/80"
              >
                {product.description}
              </motion.p>
            </div>
          </div>
        </motion.div>
      ))}
    </section>
  );
}
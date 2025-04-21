'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Carousel, CarouselItem } from '../../ui/carousel';

const showcaseItems = [
  {
    title: 'Immersive Design',
    image: '',
    description:
      'Create stunning visual experiences that captivate your audience',
    video: '/smoke.mp4',
  },
  {
    image: '',
    title: 'Transform Your Ideas',
    description:
      'Color brings every detail to life. We create experiences you can feel as much as see.',
    video: '/smoke-2.mp4',
  },
  {
    image: '',
    title: 'Future Ready',
    description: "Built with tomorrow's technology for today's challenges",
    video: '/adn.mp4',
  },
];

export default function ShowcaseCarousel() {
  return (
    <Carousel>
      {showcaseItems.map((item, index) => (
        <CarouselItem key={index}>
          <div className="relative min-h-[100vh] w-full">
            {item.video ? (
              <video
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                className="absolute inset-0 w-full h-full object-cover"
              >
                <source src={item.video} type="video/mp4" />
              </video>
            ) : (
              <Image
                src={item.image || '/fallback.jpg'} // fallback image if `item.image` is undefined
                alt={item.title}
                fill
                className="object-cover"
                priority
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
            <div className="absolute inset-0 flex items-center justify-center px-4 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8 }}
                className="text-white"
              >
                <h2 className="text-5xl md:text-7xl font-bold mb-6">
                  {item.title}
                </h2>
                <p className="text-lg md:text-2xl text-white/80">
                  {item.description}
                </p>
              </motion.div>
            </div>
          </div>
        </CarouselItem>
      ))}
    </Carousel>
  );
}

"use client";

import { Carousel, CarouselItem } from "../../ui/carousel";

import Image from "next/image";
import ImmersiveDesignImg from "@/public/services-webdesign/immersive-design.jpeg";
import { motion } from "framer-motion";

const showcaseItems = [
  {
    title: "Immersive Design",
    description:
      "Create stunning visual experiences that captivate your audience",
    image: ImmersiveDesignImg.src ? ImmersiveDesignImg.src : "", //"https://images.unsplash.com/photo-1618788372246-79faff0c3742?auto=format&fit=crop&q=80",
    video:
      "https://www.apple.com/105/media/us/mac-pro/2019/58a54c8c-ad92-40b5-8dc2-1f45671d6493/anim/hero/large.mp4",
  },
  {
    title: "Pixel Perfect",
    description: "Every detail matters in creating the perfect user experience",
    image: "../../../public/services-webdesign/pixel_perfect.jpeg",
  },
  {
    title: "Future Ready",
    description: "Built with tomorrow's technology for today's challenges",
    image:
      "https://images.unsplash.com/photo-1618788372246-79faff0c3742?auto=format&fit=crop&q=80",
  },
];

export default function ShowcaseCarousel() {
  return (
    <Carousel>
      {showcaseItems.map((item, index) => (
        <CarouselItem key={index}>
          <div className="relative h-screen w-full">
            {item.video ? (
              <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
              >
                <source src={item.video} type="video/mp4" />
              </video>
            ) : (
              <Image
                width={100}
                height={100}
                src={item.image}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center text-white"
              >
                <h2 className="text-6xl md:text-8xl font-bold mb-6">
                  {item.title}
                </h2>
                <p className="text-xl md:text-2xl text-white/80">
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

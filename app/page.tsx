'use client';

import {
  FaBeer,
  FaLightbulb,
  FaRegClock,
  FaRegHandshake,
  FaStar,
  FaUsers,
} from 'react-icons/fa';

import AndresImg from '@/assets/andres.jpeg';
import CarlosImg from '@/assets/carlos.jpeg';
import LauraImg from '@/assets/laura.jpeg';
import SofiaImg from '@/assets/sofia.jpeg';

import Card from '@/components/ui/Cards/Card'; // Componente de tarjeta
import CardInfo from '@/components/ui/Cards/CardInfo'; // Componente de tarjeta con información
import CustomSection from '@/components/ui/Others/CustomSection';
import { FaMicrochip } from 'react-icons/fa6';
import Hero from '@/components/Heros/Hero'; // Componente Hero
import Hero2 from '@/components/Heros/Hero2';
import Hero3 from '@/components/Heros/Hero3';
import PricingHero from '@/components/Pricing/PricingHero';
import { RiCustomerServiceFill } from 'react-icons/ri';
import Testimonials from '@/components/ui/Testimonials/Testimonials';
import LoadingBar from '@/components/Loadding/LoadingBar';
import Scene from '@/components/3d/Scene';
import MetalCube from '@/components/3d/MetalCube';
import CreditCard3D from '@/components/3d/CreditCard3D';
import Image from 'next/image';
import TestimonialCarousel from '@/components/testimonial-carousel';
import { useRef } from 'react';

export default function Home() {
  const cardData = [
    {
      icon: FaStar,
      title: 'Landing pages',
      href: '/services/landing-pages',
      color: '#fff',
    },
    {
      icon: FaLightbulb,
      title: 'Web Development',
      href: '/services/web-development',
      color: '#FEFCBF',
    },
    {
      icon: FaMicrochip,
      title: 'Software development',
      href: '/services/software-development',
      color: '#46ffe0',
    },

    {
      icon: FaRegClock,
      title: 'Web Design',
      href: '/services/web-desing',
      color: '#E9D8FD',
    },
    {
      icon: FaUsers,
      title: 'Staff Augmentation',
      href: '/services/staff-augmentation',
      color: '#FBB6CE',
    },

    {
      icon: FaUsers,
      title: 'Services',
      href: '/services',
      color: '#22d3ee',
    },
  ];

  const cardInfoData = [
    {
      icon: FaStar,
      title: 'Compromise with Quality',
      description:
        "Our team's mission is to turn your projects real and with high quality",
      buttonText: 'More info',
      buttonLink: '/about',
    },
    {
      icon: FaLightbulb,
      title: 'Continuous Innovation',
      description:
        'We are always looking for new solutions and approaches to improve our services.',
      buttonText: 'Find out more',
      buttonLink: '/innovation',
    },
    {
      icon: RiCustomerServiceFill,
      title: 'Custom support',
      description:
        'We offer custom support to each of our clients to dig deep into their needs.',
      buttonText: 'Contact us',
      buttonLink: '/contact',
    },
  ];

  return (
    <main className="flex min-h-screen flex-col bg-black text-white">
      <Hero3></Hero3>
      {/* Sección Hero 1 */}
      <CustomSection height="h-2" gradientColor="#86efac">
        <Hero
          title="Welcome to our platform"
          subtitle="Bring your vision to life with expert design and development—let's build something extraordinary together!"
          buttonText="Start now"
          buttonHref="#pricing"
          gradientStart="#46ffe0" // Color de inicio del gradiente
          gradientEnd="#03abff" // Color final del gradiente
        />
      </CustomSection>
      {/* Cards */}
      <section className="text-center mt-24 sm:mt-16 mb-20 px-4">
        <CustomSection height="h-2" gradientColor="#D6BCFA">
          <h2 className="font-book font-display mb-8 text-[2rem] md:text-[2.5rem] tracking-tight leading-[120%] text-white">
            Our Services
          </h2>
          <p className="mb-12 text-lg text-gray-400 max-w-3xl mx-auto">
            Your project deserves the best in digital innovation. Browse our
            featured services here, and check Services for even more tailored
            solutions!
          </p>
          <MetalCube></MetalCube>

          <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-12">
            {cardData.map((card, index) => (
              <Card
                key={index}
                icon={card.icon}
                title={card.title}
                href={card.href}
                color={card.color}
              />
            ))}
          </div>
        </CustomSection>
      </section>

      <section className="text-center sm:mt-24 sm:mb-20 px-4" id="pricing">
        <CustomSection height="h-2" gradientColor="#46ffe0">
          <PricingHero></PricingHero>
        </CustomSection>
      </section>

      {/* Sección de Testimonios */}
      <section className="text-center mt-24 mb-20 px-4">
        <CustomSection height="h-2" gradientColor="#86efac" mt="mt-1">
          <h2 className="font-book font-display mb-8 text-3xl sm:text-4xl md:text-[2.5rem] tracking-tight leading-[120%] text-white text-center">
            Testimonials
          </h2>
          <p className="mb-12 text-base sm:text-lg text-gray-400 max-w-3xl mx-auto text-center">
            Our customers choose us because we exceed expectations, we help
            build trust between our customers and us.
          </p>
          <TestimonialCarousel
            testimonials={[
              {
                text: "Working with this agency was amazing. They developed a modern and functional website that exceeded our expectations and enhanced our clients' experience!",
                author: 'Sofía R.',
                position: 'Marketing Manager',
                image: SofiaImg,
                rating: 5,
              },
              {
                text: 'We needed a customized solution, and their team really captured our vision. Thanks to them, we launched an optimized landing page that doubled our conversions in just one month.',
                author: 'Carlos M.',
                position: 'Entrepreneur and Founder',
                image: CarlosImg,
                rating: 5,
              },
              {
                text: 'From design to development, the experience was flawless. Your team not only met our deadlines, but offered ideas that improved our final product. We will definitely continue to collaborate!',
                author: 'Laura G.',
                position: 'Product Manager',
                image: LauraImg,
                rating: 5,
              },
              {
                text: 'We decided to delegate software development to this agency, and it was the best decision. We got an experienced team that integrated perfectly with our business and delivered solid results.',
                author: 'Andres T.',
                position: 'CTO',
                image: AndresImg,
                rating: 5,
              },
            ]}
          ></TestimonialCarousel>
        </CustomSection>
      </section>
    </main>
  );
}

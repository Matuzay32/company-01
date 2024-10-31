'use client';

import {
  FaBeer,
  FaStar,
  FaLightbulb,
  FaRegHandshake,
  FaRegClock,
  FaUsers,
} from 'react-icons/fa';
import { RiCustomerServiceFill } from 'react-icons/ri';

import { FaMicrochip } from 'react-icons/fa6';
import Card from '@/components/ui/Cards/Card'; // Componente de tarjeta
import CardInfo from '@/components/ui/Cards/CardInfo'; // Componente de tarjeta con información
import Hero from '@/components/Heros/Hero'; // Componente Hero
import Hero2 from '@/components/Heros/Hero2';
import CustomSection from '@/components/ui/Others/CustomSection';
import Hero3 from '@/components/Heros/Hero3';
import Testimonials from '@/components/ui/Testimonials/Testimonials';

export default function Home() {
  const cardData = [
    {
      icon: FaStar,
      title: 'Análisis de Datos',
      href: '/data-analysis',
      color: '#fff',
    },
    {
      icon: FaLightbulb,
      title: 'Consultoría Estratégica',
      href: '/consulting',
      color: '#FEFCBF',
    },
    {
      icon: FaMicrochip,
      title: 'Desarrollo de Software',
      href: '/software-development',
      color: '#46ffe0',
    },

    {
      icon: FaRegClock,
      title: 'Gestión de Proyectos',
      href: '/project-management',
      color: '#E9D8FD',
    },
    {
      icon: FaUsers,
      title: 'Formación y Capacitación',
      href: '/training',
      color: '#FBB6CE',
    },

    {
      icon: FaUsers,
      title: 'Other services',
      href: '/other-services',
      color: '#22d3ee',
    },
  ];

  const cardInfoData = [
    {
      icon: FaStar,
      title: 'Compromiso con la Calidad',
      description:
        'Nuestro equipo está dedicado a ofrecer servicios de alta calidad para asegurar tu satisfacción.',
      buttonText: 'Más Información',
      buttonLink: '/about',
    },
    {
      icon: FaLightbulb,
      title: 'Innovación Constante',
      description:
        'Estamos siempre en búsqueda de nuevas soluciones y enfoques para mejorar nuestros servicios.',
      buttonText: 'Descubre Más',
      buttonLink: '/innovation',
    },
    {
      icon: RiCustomerServiceFill,
      title: 'Atención Personalizada',
      description:
        'Ofrecemos atención individualizada a cada uno de nuestros clientes para entender sus necesidades.',
      buttonText: 'Contáctanos',
      buttonLink: '/contact',
    },
  ];

  return (
    <main className="flex min-h-screen flex-col bg-black text-white">
      <Hero3></Hero3>
      {/* Sección Hero 1 */}
      <CustomSection height="h-2" gradientColor="#86efac">
        <Hero
          title="Bienvenido a Nuestra Plataforma"
          subtitle="Descubre cómo podemos ayudarte a mejorar tu experiencia."
          buttonText="Comienza Ahora"
          buttonHref="/start"
          gradientStart="#46ffe0" // Color de inicio del gradiente
          gradientEnd="#03abff" // Color final del gradiente
        />
      </CustomSection>
      {/* Cards */}
      <section className="text-center mt-24 mb-20 px-4">
        <CustomSection height="h-2" gradientColor="#86efac">
          <h2 className="font-book font-display mb-8 text-[2rem] md:text-[2.5rem] tracking-tight leading-[120%] text-white">
            Nuestros Servicios
          </h2>
          <p className="mb-12 text-lg text-gray-400 max-w-3xl mx-auto">
            Cada uno de nuestros servicios está diseñado para atender tus
            necesidades específicas. Explora cómo podemos ayudarte a alcanzar
            tus objetivos.
          </p>
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

      <section className="text-center mt-24 mb-20 px-4">
        <CustomSection height="h-2" gradientColor="#86efac">
          <h2 className="font-book font-display mb-8 text-[2.5rem] tracking-tight leading-[120%] text-white">
            Nuestros Servicios
          </h2>
          <p className="mb-12 text-lg text-gray-400 max-w-3xl mx-auto">
            Cada uno de nuestros servicios está diseñado para atender tus
            necesidades específicas. Explora cómo podemos ayudarte a alcanzar
            tus objetivos.
          </p>
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

      {/* Sección de CardInfo */}

      <section className="text-center mt-24 mb-20 px-4">
        <CustomSection height="h-2" gradientColor="#86efac">
          <h2 className="font-book font-display mb-8 text-[2.5rem] tracking-tight leading-[120%] text-white">
            ¿Por Qué Elegirnos?
          </h2>
          <p className="mb-12 text-lg text-gray-400 max-w-3xl mx-auto">
            Nuestra experiencia y dedicación nos distinguen. Conoce los valores
            que nos motivan a brindar un servicio excepcional.
          </p>
          <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-12">
            {cardInfoData.map((info, index) => (
              <CardInfo
                key={index}
                icon={info.icon}
                title={info.title}
                description={info.description}
                buttonText={info.buttonText}
                buttonLink={info.buttonLink}
              />
            ))}
          </div>
        </CustomSection>
      </section>
      {/* Sección de Testimonios */}
      <section className="text-center mt-24 mb-20 px-4 w-scree">
        <CustomSection height="h-2" gradientColor="#86efac">
          <Testimonials></Testimonials>
        </CustomSection>
      </section>
    </main>
  );
}

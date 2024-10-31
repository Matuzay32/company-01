"use client";

import {
  FaBeer,
  FaLightbulb,
  FaRegClock,
  FaRegHandshake,
  FaStar,
  FaUsers,
} from "react-icons/fa";

import Card from "@/components/ui/Cards/Card"; // Componente de tarjeta
import CardInfo from "@/components/ui/Cards/CardInfo"; // Componente de tarjeta con información
import CustomSection from "@/components/ui/Others/CustomSection";
import { FaMicrochip } from "react-icons/fa6";
import Hero from "@/components/Heros/Hero"; // Componente Hero
import Hero2 from "@/components/Heros/Hero2";
import Hero3 from "@/components/Heros/Hero3";
import { RiCustomerServiceFill } from "react-icons/ri";
import Testimonials from "@/components/ui/Testimonials/Testimonials";

export default function Home() {
  const cardData = [
    {
      icon: FaStar,
      title: "Landing pages",
      href: "/services/landing-pages",
      color: "#fff",
    },
    {
      icon: FaLightbulb,
      title: "Web Development",
      href: "/services/web-development",
      color: "#FEFCBF",
    },
    {
      icon: FaMicrochip,
      title: "Software development",
      href: "/services/software-development",
      color: "#46ffe0",
    },

    {
      icon: FaRegClock,
      title: "Web Design",
      href: "/services/web-desing",
      color: "#E9D8FD",
    },
    {
      icon: FaUsers,
      title: "Staff Augmentation",
      href: "/services/staff-augmentation",
      color: "#FBB6CE",
    },

    {
      icon: FaUsers,
      title: "Other services",
      href: "/services/other-services",
      color: "#22d3ee",
    },
  ];

  const cardInfoData = [
    {
      icon: FaStar,
      title: "Compromise with Quality",
      description:
        "Our team's mission is to turn your projects real and with high quality",
      buttonText: "More info",
      buttonLink: "/about",
    },
    {
      icon: FaLightbulb,
      title: "Innovación Constante",
      description:
        "Estamos siempre en búsqueda de nuevas soluciones y enfoques para mejorar nuestros servicios.",
      buttonText: "Descubre Más",
      buttonLink: "/innovation",
    },
    {
      icon: RiCustomerServiceFill,
      title: "Atención Personalizada",
      description:
        "Ofrecemos atención individualizada a cada uno de nuestros clientes para entender sus necesidades.",
      buttonText: "Contáctanos",
      buttonLink: "/contact",
    },
  ];

  return (
    <main className="flex min-h-screen flex-col bg-black text-white">
      <Hero3></Hero3>
      {/* Sección Hero 1 */}
      <CustomSection height="h-2" gradientColor="#86efac">
        <Hero
          title="Welcome to our platform"
          subtitle="Start your poject's vision with us"
          buttonText="Start now"
          buttonHref="/pricing"
          gradientStart="#46ffe0" // Color de inicio del gradiente
          gradientEnd="#03abff" // Color final del gradiente
        />
      </CustomSection>
      {/* Cards */}
      <section className="text-center mt-24 mb-20 px-4">
        <CustomSection height="h-2" gradientColor="#86efac">
          <h2 className="font-book font-display mb-8 text-[2rem] md:text-[2.5rem] tracking-tight leading-[120%] text-white">
            Our Services
          </h2>
          <p className="mb-12 text-lg text-gray-400 max-w-3xl mx-auto">
            To find out more services than the ones you can see here go to
            "Other services"
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
            A C M 1 P T
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
            Why us?
          </h2>
          <p className="mb-12 text-lg text-gray-400 max-w-3xl mx-auto">
            Because we give a personalized service to every need our customer
            has
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

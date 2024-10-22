'use client';

import {
  FaBeer,
  FaStar,
  FaLightbulb,
  FaRegHandshake,
  FaRegClock,
  FaUsers,
} from 'react-icons/fa'; // Iconos de react-icons
import Card from '@/components/ui/Cards/Card'; // Componente de tarjeta
import CardInfo from '@/components/ui/Cards/CardInfo'; // Componente de tarjeta con información
import Hero from '@/components/Heros/Hero'; // Componente Hero
import Hero2 from '@/components/Heros/Hero2';
import CustomSection from '@/components/ui/Others/CustomSection';
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-black text-white">
      {/* Sección Hero 1 */}
      <Hero2
        title="Transform Your Digital Presence"
        description="Elevate your business with our cutting-edge web technologies. From stunning websites to powerful applications, we create solutions that drive growth and engagement."
        primaryButtonText="Discover Our Services"
        primaryButtonLink="/services"
        secondaryButtonText="Get In Touch"
        secondaryButtonLink="/contact"
        imageUrl="https://images.unsplash.com/photo-1673235966910-f2a443bdbaaf?q=80&w=2160&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <Hero
        title="Bienvenido a Nuestra Plataforma"
        subtitle="Descubre cómo podemos ayudarte a mejorar tu experiencia."
        buttonText="Comienza Ahora"
        buttonHref="/start"
        gradientStart="#46ffe0" // Color de inicio del gradiente
        gradientEnd="#03abff" // Color final del gradiente
      />
      {/* Sección Hero 2 */}
      {/* Separador */}
      <div className="my-16"></div> {/* Espacio entre secciones */}
      {/* Sección de Cards */}
      <section className="text-center mt-24 mb-20 px-4">
        <h2 className="font-book font-display mb-8 text-[2.5rem] tracking-tight leading-[120%] text-white">
          Nuestros Servicios
        </h2>
        <p className="mb-12 text-lg text-gray-400 max-w-3xl mx-auto">
          Cada uno de nuestros servicios está diseñado para atender tus
          necesidades específicas. Explora cómo podemos ayudarte a alcanzar tus
          objetivos.
        </p>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
          <Card icon={FaStar} title="Análisis de Datos" href="/data-analysis" />
          <Card
            color="#FEFCBF"
            icon={FaLightbulb}
            title="Consultoría Estratégica"
            href="/consulting"
          />
          <Card
            color="#46ffe0"
            icon={FaBeer}
            title="Desarrollo de Software"
            href="/software-development"
          />
          <Card icon={FaRegHandshake} title="Soporte Técnico" href="/support" />
          <Card
            color="#E9D8FD"
            icon={FaRegClock}
            title="Gestión de Proyectos"
            href="/project-management"
          />
          <Card
            color="#48B"
            icon={FaUsers}
            title="Formación y Capacitación"
            href="/training"
          />

          <Card
            color="#FBB6CE"
            icon={FaUsers}
            title="Formación y Capacitación"
            href="/training"
          />
        </div>
      </section>
      <CustomSection>
        <section className="text-center mt-24 mb-20 px-4">
          <h2 className="font-book font-display mb-8 text-[2.5rem] tracking-tight leading-[120%] text-white">
            Nuestros Servicios
          </h2>
          <p className="mb-12 text-lg text-gray-400 max-w-3xl mx-auto">
            Cada uno de nuestros servicios está diseñado para atender tus
            necesidades específicas. Explora cómo podemos ayudarte a alcanzar
            tus objetivos.
          </p>
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
            <Card
              icon={FaStar}
              title="Análisis de Datos"
              href="/data-analysis"
            />
            <Card
              color="#FEFCBF"
              icon={FaLightbulb}
              title="Consultoría Estratégica"
              href="/consulting"
            />
            <Card
              color="#46ffe0"
              icon={FaBeer}
              title="Desarrollo de Software"
              href="/software-development"
            />
            <Card
              icon={FaRegHandshake}
              title="Soporte Técnico"
              href="/support"
            />
            <Card
              color="#E9D8FD"
              icon={FaRegClock}
              title="Gestión de Proyectos"
              href="/project-management"
            />
            <Card
              color="#48B"
              icon={FaUsers}
              title="Formación y Capacitación"
              href="/training"
            />

            <Card
              color="#FBB6CE"
              icon={FaUsers}
              title="Formación y Capacitación"
              href="/training"
            />
          </div>
        </section>
      </CustomSection>
      {/* Separador */}
      <div className="my-16"></div> {/* Espacio entre secciones */}
      {/* Sección de CardInfo */}
      <section className="text-center mt-24 mb-20 px-4">
        <h2 className="font-book font-display mb-8 text-[2.5rem] tracking-tight leading-[120%]  text-white">
          ¿Por Qué Elegirnos?
        </h2>
        <p className="mb-12 text-lg text-gray-4x  00 max-w-3xl mx-auto">
          Nuestra experiencia y dedicación nos distinguen. Conoce los valores
          que nos motivan a brindar un servicio excepcional.
        </p>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
          <CardInfo
            icon={FaStar}
            title="Compromiso con la Calidad"
            description="Nuestro equipo está dedicado a ofrecer servicios de alta calidad para asegurar tu satisfacción."
            buttonText="Más Información"
            buttonLink="/about"
          />
          <CardInfo
            icon={FaLightbulb}
            title="Innovación Constante"
            description="Estamos siempre en búsqueda de nuevas soluciones y enfoques para mejorar nuestros servicios."
            buttonText="Descubre Más"
            buttonLink="/innovation"
          />
          <CardInfo
            icon={FaBeer}
            title="Atención Personalizada"
            description="Ofrecemos atención individualizada a cada uno de nuestros clientes para entender sus necesidades."
            buttonText="Contáctanos"
            buttonLink="/contact"
          />
        </div>
      </section>
      {/* Separador */}
      <div className="my-16"></div> {/* Espacio entre secciones */}
      {/* Sección de Testimonios */}
      <section className="text-center mt-24 mb-20 px-4 bg-gray-100 py-10 rounded-lg">
        <h2 className="font-book font-display mb-8 text-[2.5rem] tracking-tight leading-[120%] text-gray-800">
          Testimonios
        </h2>
        <p className="mb-12 text-lg text-gray-600 max-w-2xl mx-auto">
          "La atención y el servicio que recibimos fue excepcional. Nos ayudaron
          a optimizar nuestros procesos de manera efectiva."
        </p>
        <p className="text-lg font-bold text-gray-800">— Cliente Satisfecho</p>
      </section>
    </main>
  );
}

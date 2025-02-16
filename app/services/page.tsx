'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Code,
  ArrowRight,
  BrainCircuit,
  Settings,
  FileText,
  PenLine,
  Cloud,
  Server,
  Database,
  Smartphone,
  Lock,
  Rocket,
} from 'lucide-react';
import { Button } from '@/components/ui/Buttons/v2/button';
import CustomSection from '@/components/ui/Others/CustomSection';
import Pattern from '@/components/ui/Patterns/Pattern';

const CustomCard = ({
  children,
  gradientColor,
}: {
  children: React.ReactNode;
  gradientColor: string;
}) => {
  return (
    <div className="relative px-6 py-12 rounded-3xl border-t border-zinc-600 overflow-hidden">
      <Pattern />
      <div
        aria-hidden="true"
        className="left-1/2 top-0 w-[300px] h-2 absolute max-w-full -translate-x-1/2 -translate-y-1/2 "
        style={{
          background: `linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgba(255, 255, 255, 0) 0%, ${gradientColor} 50%, rgba(0, 0, 0, 0) 100%)`,
        }}
      />
      <div
        aria-hidden="true"
        className="-top-1 left-1/2 h-[200px] w-full max-w-[200px] md:max-w-[400px] absolute -translate-x-1/2 -translate-y-1/2"
        style={{
          background:
            'conic-gradient(from 90deg at 50% 50%, rgba(0, 0, 0, 0) 50%, rgb(0, 0, 0) 50%), radial-gradient(rgba(200, 200, 200, 0.1) 0%, transparent 80%)',
        }}
      />
      {children}
    </div>
  );
};

const services = [
  {
    icon: Code,
    title: 'Desarrollo Full Stack',
    description:
      'Aplicaciones web completas con tecnologías modernas y escalables',
    gradient: '#46ffe0',
    url: '/services/full-stack',
  },
  {
    icon: Settings,
    title: 'Sistemas de Gestión',
    description:
      'Soluciones personalizadas para automatizar procesos empresariales',
    gradient: '#ff6b6b',
    url: '/services/sistemas-gestion',
  },
  {
    icon: FileText,
    title: 'Sistemas de Facturación',
    description: 'Plataformas integradas para gestión financiera y contable',
    gradient: '#4dabf7',
    url: '/services/facturacion',
  },
  {
    icon: BrainCircuit,
    title: 'Integración de AI',
    description:
      'Implementación de modelos de inteligencia artificial en tus procesos',
    gradient: '#94d82d',
    url: '/services/ai-integration',
  },
  {
    icon: PenLine,
    title: 'Generación de Contenido con AI',
    description: 'Creación automatizada de contenido relevante y optimizado',
    gradient: '#f783ac',
    url: '/services/ai-content',
  },
  {
    icon: Cloud,
    title: 'Soluciones Cloud',
    description: 'Infraestructura escalable y segura en la nube',
    gradient: '#ff922b',
    url: '/services/cloud',
  },
];

const techStack = [
  { name: 'Frontend', techs: ['React', 'Angular', 'Vue', 'Next.js'] },
  { name: 'Backend', techs: ['Node.js', 'Python', 'Java', '.NET'] },
  {
    name: 'Bases de Datos',
    techs: ['PostgreSQL', 'MongoDB', 'MySQL', 'Redis'],
  },
  { name: 'Cloud', techs: ['AWS', 'Google Cloud', 'Azure', 'Docker'] },
  { name: 'AI/ML', techs: ['TensorFlow', 'PyTorch', 'OpenAI', 'LangChain'] },
];

export default function ServicesComponent() {
  const [currentTech, setCurrentTech] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTech((prev) => (prev + 1) % techStack.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full bg-black min-h-screen text-gray-300">
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="relative min-h-screen flex items-center justify-center pt-16">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-zinc-900 via-black to-black"></div>
          <div className="relative z-10 container px-4 md:px-6">
            <p className="text-sm uppercase tracking-widest text-zinc-400 text-center mb-8">
              Transformación Digital con
            </p>
            <h1 className="font-serif text-center text-6xl md:text-5xl lg:text-9xl tracking-tight mb-8">
              Soluciones Tecnológicas
            </h1>
            <p className="mt-8 text-lg text-zinc-400 max-w-2xl mx-auto text-center leading-relaxed">
              Desarrollamos software a medida que potencia tu negocio mediante
              innovación tecnológica y estrategias digitales avanzadas.
            </p>
          </div>
        </div>

        {/* Tech Stack Animation */}
        <CustomSection>
          <div className="mb-8 flex justify-center">
            <span className="inline-flex items-center rounded-full border border-zinc-700 px-12 py-6 text-3xl font-bold">
              Tecnologías que utilizamos
            </span>
          </div>

          <motion.div
            className="relative flex flex-col gap-4 rounded-3xl overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative z-10 h-[400px] overflow-hidden p-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentTech}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5 }}
                  className="flex flex-col items-center justify-center h-full"
                >
                  <h3 className="text-4xl font-bold mb-6">
                    {techStack[currentTech].name}
                  </h3>
                  <div className="flex flex-wrap gap-4 justify-center">
                    {techStack[currentTech].techs.map((tech) => (
                      <div
                        key={tech}
                        className="px-6 py-3 rounded-full border border-zinc-700 bg-zinc-900/50 text-lg"
                      >
                        {tech}
                      </div>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        </CustomSection>

        {/* Services Section */}
        <div>
          <h2 className="text-4xl font-bold text-center mb-8">
            Nuestros Servicios
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <CustomCard key={service.title} gradientColor={service.gradient}>
                <motion.div
                  initial={{ opacity: 0, y: 200 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: index * 0.5 }}
                  className="p-6 rounded-lg"
                >
                  <service.icon className="w-12 h-12 mb-4 text-white" />
                  <h3 className="text-2xl font-semibold mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 mb-4">{service.description}</p>
                  <Button variant="outline" asChild>
                    <a href={service.url}>
                      Ver detalles <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </motion.div>
              </CustomCard>
            ))}
          </div>
        </div>

        {/* Process Section */}
        <CustomSection>
          <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-8">
            <motion.div
              className="p-8 rounded-3xl border border-zinc-700"
              whileHover={{ scale: 1.05 }}
            >
              <Rocket className="w-12 h-12 mb-4 text-purple-400" />
              <h3 className="text-2xl font-bold mb-4">Metodología Ágil</h3>
              <p className="text-zinc-400">
                Desarrollo iterativo con sprints semanales y entregables
                constantes
              </p>
            </motion.div>

            <motion.div
              className="p-8 rounded-3xl border border-zinc-700"
              whileHover={{ scale: 1.05 }}
            >
              <Lock className="w-12 h-12 mb-4 text-green-400" />
              <h3 className="text-2xl font-bold mb-4">Seguridad Integral</h3>
              <p className="text-zinc-400">
                Implementación de protocolos de seguridad y cifrado de última
                generación
              </p>
            </motion.div>

            <motion.div
              className="p-8 rounded-3xl border border-zinc-700"
              whileHover={{ scale: 1.05 }}
            >
              <Smartphone className="w-12 h-12 mb-4 text-blue-400" />
              <h3 className="text-2xl font-bold mb-4">Multiplataforma</h3>
              <p className="text-zinc-400">
                Soluciones responsive y adaptables a todos los dispositivos
              </p>
            </motion.div>
          </div>
        </CustomSection>
      </main>
    </div>
  );
}

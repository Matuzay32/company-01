'use client';
//changes

import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

import { Button } from '../ui/Buttons/v2/button';

export default function About() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-4">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_50%_50%,#ffffff0d,transparent)]" />

        {/* 3D Icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative w-32 h-32 mb-12"
        >
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/10 shadow-2xl transform -rotate-6" />
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/10 shadow-2xl transform rotate-6" />
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/10 shadow-2xl" />
        </motion.div>

        {/* Hero Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative text-center max-w-4xl mx-auto space-y-6"
        >
          <h1 className="text-4xl md:text-7xl font-bold tracking-tight">
            Transforma el crecimiento de tu equipo con Vortex Pulse
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
            En un mundo donde la tecnología avanza sin descanso, ¿por qué la
            contratación sigue atrapada en métodos anticuados? En Vortex Pulse,
            estamos aquí para cambiar eso.
          </p>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
            Conectamos a las empresas con el talento que necesitan para escalar
            sus proyectos, sin fricciones, sin retrasos. Ya sea para proyectos
            pequeños o grandes iniciativas, nuestro enfoque moderno y
            personalizado asegura que encuentres al experto adecuado, cuando y
            donde lo necesites.
          </p>
        </motion.div>
      </section>

      {/* Our Story Section */}
      <section className="relative py-32">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">
              Nuestra historia
            </h2>
            <div className="space-y-6 text-lg text-gray-400">
              <p>
                Fundamos Vortex Pulse con una misión sencilla: proporcionar a
                las empresas el equipo completo y especializado que necesitan
                para llevar a cabo sus proyectos, adaptándonos a sus necesidades
                y prioridades. En un entorno tecnológico en constante cambio,
                entendemos que cada cliente requiere soluciones rápidas,
                eficientes y hechas a la medida.
              </p>
              <p>
                En Vortex Pulse, combinamos tecnología avanzada con un equipo de
                expertos que se dedica a conseguir y coordinar el talento
                adecuado para cada proyecto. Nos ocupamos de cada detalle, desde
                la selección del equipo hasta el seguimiento continuo,
                asegurando que nuestros clientes puedan confiar en un servicio
                realmente moderno y completo.
              </p>
              <p>
                Hoy, nos enorgullece ser el aliado de empresas de todos los
                tamaños, ayudándolas a convertir sus ideas en realidad. Nuestro
                objetivo es que nuestros clientes puedan concentrarse en lo que
                realmente importa: crear productos y servicios extraordinarios,
                mientras nosotros nos ocupamos del resto.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-32 border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { number: '500+', label: 'Successful placements' },
              { number: '98%', label: 'Client satisfaction' },
              { number: '24/7', label: 'Support available' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 border-t border-white/10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto text-center space-y-8"
          >
            <h2 className="text-3xl md:text-5xl font-bold">
              ¿Listo para construir el equipo ideal para tu proyecto?
            </h2>
            <p className="text-lg text-gray-400">
              Únete a las empresas que ya confían en nuestro enfoque
              personalizado y eficaz para crear equipos a la medida de sus
              necesidades.
            </p>
            <Button size="lg" className="bg-white text-black hover:bg-gray-100">
              Comienza ahora
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

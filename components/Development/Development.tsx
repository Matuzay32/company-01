'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Mail,
  ArrowRight,
  Clock,
  Terminal,
  Code,
  GitBranch,
  ChevronDown,
  Bell,
  User,
  Search,
  XCircle,
} from 'lucide-react';
import { Button } from '../ui/Buttons/v2/button';
import { Input } from '@/components/ui/input';
import CustomSection from '../ui/Others/CustomSection';
import Pattern from '../ui/Patterns/Pattern';
import EnhancedDevelopmentServices from './EnhancedDevelopmentServices';

const responses = [
  {
    id: 'aws123',
    name: 'AWS Elastic Beanstalk',
    status: 'Active',
    timestamp: '2024-11-06T07:26:20Z',
  },
  {
    id: 'azure456',
    name: 'Microsoft Azure',
    status: 'Active',
    timestamp: '2024-11-06T07:26:18Z',
  },
  {
    id: 'heroku789',
    name: 'Heroku',
    status: 'Active',
    timestamp: '2024-11-06T07:26:15Z',
  },
  {
    id: 'gcp012',
    name: 'Google Cloud Platform',
    status: 'Active',
    timestamp: '2024-11-06T07:25:50Z',
  },
  {
    id: 'netlify345',
    name: 'Netlify',
    status: 'Active',
    timestamp: '2024-11-06T07:25:35Z',
  },
  {
    id: 'vercel678',
    name: 'Vercel',
    status: 'Active',
    timestamp: '2024-11-06T07:25:20Z',
  },
  {
    id: 'docker890',
    name: 'Docker',
    status: 'Active',
    timestamp: '2024-11-06T07:24:55Z',
  },
];

const events = [
  {
    id: 1,
    type: 'clicked',
    status: 'info',
    title: 'Reunión agendada',
    description: 'Cliente hace clic en el enlace para agendar reunión',
    time: '5 minutos atrás',
    agent: 'Email',
    platform: 'Whatsapp',
  },
  {
    id: 2,
    type: 'clicked',
    status: 'info',
    title: 'Reunión agendada',
    description: 'Cliente hace clic en el enlace para agendar reunión',
    time: '5 minutos atrás',
    agent: 'Email',
    platform: 'Whatsapp',
  },
  {
    id: 3,
    type: 'delivered',
    status: 'success',
    title: 'Propuesta enviada',
    description: 'Propuesta enviada al cliente para revisión',
    time: '10 minutos atrás',
    agent: 'Email',
    platform: 'Whatsapp',
  },
  {
    id: 4,
    type: 'opened',
    status: 'success',
    title: 'Revisión de propuesta',
    description: 'Cliente abre y revisa la propuesta enviada',
    time: '15 minutos atrás',
    agent: 'Email',
    platform: 'Whatsapp',
  },
  {
    id: 5,
    type: 'bounced',
    status: 'error',
    title: 'Propuesta no aceptada',
    description: 'Cliente decide no avanzar con la propuesta',
    time: '20 minutos atrás',
    agent: 'Email',
    platform: 'Whatsapp',
  },
  {
    id: 6,
    type: 'delivered',
    status: 'success',
    title: 'Nueva propuesta enviada',
    description: 'Se envía una nueva propuesta con ajustes',
    time: '30 minutos atrás',
    agent: 'Email',
    platform: 'Whatsapp',
  },
  {
    id: 7,
    type: 'opened',
    status: 'success',
    title: 'Propuesta aceptada',
    description: 'Cliente abre y acepta la propuesta final',
    time: '45 minutos atrás',
    agent: 'Email',
    platform: 'Whatsapp',
  },
  {
    id: 8,
    type: 'delivered',
    status: 'success',
    title: 'Contrato firmado',
    description: 'Cliente firma contrato y se procede con el proyecto',
    time: '1 hora atrás',
    agent: 'Email',
    platform: 'Whatsapp',
  },
];

const iconMap = {
  delivered: Mail, // Representa consulta o propuesta enviada
  clicked: GitBranch, // Representa acción de clic (reunión agendada)
  opened: Mail, // Representa propuesta abierta y revisada
  bounced: XCircle, // Representa rechazo de propuesta
};

export default function Development() {
  const [activeEvent, setActiveEvent] = useState(0);
  const [showNotifications, setShowNotifications] = useState(false);
  const [testMode, setTestMode] = useState('delivered');

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveEvent((prev) => (prev + 1) % events.length);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full bg-black min-h-screen text-gray-300">
      <main className="container mx-auto px-4 py-8">
        <div className="relative min-h-screen flex items-center justify-center pt-16">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-zinc-900 via-black to-black"></div>
          <div className="relative z-10 container px-4 md:px-6">
            <p className="text-sm uppercase tracking-widest text-zinc-400 text-center mb-8">
              Impulsa tu negocio con
            </p>
            <h1 className="font-serif text-center text-7xl md:text-8xl lg:text-9xl tracking-tight mb-8">
              Desarrollo Web de Alto Impacto
            </h1>
            <p className="mt-8 text-lg text-zinc-400 max-w-2xl mx-auto text-center leading-relaxed">
              Somos expertos en crear soluciones digitales innovadoras que
              transforman tu presencia online, acelerando el crecimiento de tu
              empresa con las mejores herramientas del mercado.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Tools List Panel */}
          <CustomSection>
            <motion.div
              className="relative flex flex-col gap-4 rounded-3xl overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="relative z-10 h-[400px] overflow-hiden bg-gradient-to-b from-black to-black p-8">
                <div className="mb-8">
                  <span className="inline-flex items-center rounded-full border border-to-black p-8 px-3 py-1 text-xs">
                    Tools List
                  </span>
                </div>
                <div className="relative mb-8"></div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Our Tools</h3>
                  <div className="overflow-y-auto max-h-[300px]">
                    <AnimatePresence>
                      {responses.map((tool, index) => (
                        <motion.div
                          key={tool.id}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -20 }}
                          transition={{ duration: 0.3, delay: index * 0.1 }}
                          className="flex items-center justify-between rounded-lg border border-gray-800 bg-black/30 p-3"
                        >
                          <div className="flex items-center gap-4 text-sm">
                            <span
                              className={`px-2 py-1 rounded-md ${
                                String(tool.status) === 'Active'
                                  ? 'bg-green-900 text-green-300'
                                  : 'bg-red-900 text-red-300'
                              }`}
                            >
                              {String(tool.status) === 'active'
                                ? 'Active'
                                : 'Inactive'}
                            </span>
                            <div className="flex flex-col text-sm">
                              <span className="font-semibold">{tool.name}</span>
                              <span className="text-xs text-gray-500">{`ID: ${tool.id}`}</span>
                            </div>
                          </div>
                          <span className="text-xs text-gray-400">
                            {tool.timestamp}
                          </span>
                        </motion.div>
                      ))}
                    </AnimatePresence>
                  </div>
                </div>
              </div>
              <div className="z-10 p-8">
                <h2 className="text-xl font-semibold">Tool Environment</h2>
                <p className="mt-2 text-sm text-gray-400">
                  Safely test and monitor your development tools in a controlled
                  environment.
                </p>
                <a
                  href="#"
                  className="mt-4 inline-flex items-center text-sm text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Learn more <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            </motion.div>
          </CustomSection>

          {/* Modular Webhooks Panel */}
          <CustomSection>
            <motion.div
              className="relative flex flex-col gap-4 rounded-3xl overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="relative z-10 h-[400px] overflow-hidden bg-gradient-to-b from-black to-black p-8">
                <div className="absolute left-12 top-12 h-4/5 w-px bg-gray-800" />
                <div className="relative space-y-8">
                  <AnimatePresence>
                    {events
                      .slice(activeEvent, activeEvent + 3) // Solo muestra 3 eventos
                      .map((event, index) => {
                        const Icon =
                          iconMap[event.type as keyof typeof iconMap];

                        // Asegúrate de que cada evento tiene su propio índice de brillo correcto
                        const isSelected =
                          activeEvent % events.length === index + activeEvent;

                        return (
                          <motion.div
                            key={event.id}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{
                              opacity: isSelected ? 1 : 0.5,
                              x: 0,
                              scale: isSelected ? 1.05 : 1,
                            }}
                            exit={{ opacity: 0, x: 20 }}
                            transition={{ duration: 0.3 }}
                            className="flex gap-8"
                          >
                            <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg border border-gray-800 bg-black">
                              <Icon className="h-5 w-5" />
                            </div>
                            <div>
                              <div className="flex items-center gap-4">
                                <span
                                  className={`inline-flex items-center rounded-md px-2 py-1 text-xs ${
                                    event.status === 'success'
                                      ? 'bg-green-900 text-green-300'
                                      : event.status === 'error'
                                      ? 'bg-red-900 text-red-300'
                                      : 'bg-yellow-900 text-yellow-300'
                                  }`}
                                >
                                  {event.type}
                                </span>
                                <span className="flex items-center gap-1 text-xs text-gray-400">
                                  <Clock className="h-4 w-4" />
                                  {event.time}
                                </span>
                              </div>
                              <div className="mt-2 text-sm">
                                <div className="font-medium">{event.title}</div>
                                <div className="text-gray-400">
                                  {event.description}
                                </div>
                                <div className="mt-1 flex items-center gap-2">
                                  <span className="rounded-md border border-gray-800 bg-gray-900/50 px-2 py-1 text-xs">
                                    {event.agent}
                                  </span>
                                  <span className="rounded-md border border-gray-800 bg-gray-900/50 px-2 py-1 text-xs">
                                    {event.platform}
                                  </span>
                                </div>
                              </div>
                            </div>
                          </motion.div>
                        );
                      })}
                  </AnimatePresence>
                </div>
              </div>
              <div className="z-10 p-8">
                <h2 className="text-xl font-semibold">Modular Webhooks</h2>
                <p className="mt-2 text-sm text-gray-400">
                  Receive real-time notifications directly to your server. Every
                  time an email is delivered, opened, bounces, or a link is
                  clicked.
                </p>
                <a
                  href="#"
                  className="mt-4 inline-flex items-center text-sm text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Learn more <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            </motion.div>
          </CustomSection>
        </div>
      </main>

      {/* Notifications Dropdown */}
      <AnimatePresence>
        {showNotifications && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="absolute right-4 top-16 w-80 bg-gray-900 border border-gray-800 rounded-lg shadow-lg p-4 text-gray-300"
          >
            <h3 className="text-lg font-semibold mb-2">Notifications</h3>
            <ul className="space-y-2">
              <li className="text-sm">New comment on your pull request</li>
              <li className="text-sm">Deployment completed successfully</li>
              <li className="text-sm">3 new issues assigned to you</li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      <EnhancedDevelopmentServices></EnhancedDevelopmentServices>
    </div>
  );
}

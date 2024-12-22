'use client';

import { AnimatePresence, motion } from 'framer-motion';
import {
  ArrowRight,
  Bell,
  ChevronDown,
  Clock,
  Code,
  GitBranch,
  Mail,
  Search,
  Terminal,
  User,
  XCircle,
  Cloud,
  Database,
  Package,
} from 'lucide-react';
import React, { useEffect, useState } from 'react';

import { Button } from '../ui/Buttons/v2/button';
import CustomSection from '../ui/Others/CustomSection';
import EnhancedDevelopmentServices from './EnhancedDevelopmentServices';
import { Input } from '@/components/ui/input';
import Pattern from '../ui/Patterns/Pattern';

const responses = [
  {
    id: 1,
    name: 'AWS services',
    status: 'Active',
    timestamp: '',
  },
  {
    id: 2,
    name: 'Heroku',
    status: 'Active',
    timestamp: '',
  },
  {
    id: 4,
    name: 'Google Cloud Platform',
    status: 'Active',
    timestamp: '',
  },
  {
    id: 5,
    name: 'Netlify',
    status: 'Active',
    timestamp: '',
  },
  {
    id: 6,
    name: 'Vercel',
    status: 'Active',
    timestamp: '',
  },
  {
    id: 7,
    name: 'EC2 elastic Search',
    status: 'Active',
    timestamp: '',
  },
  {
    id: 8,
    name: 'Docker',
    status: 'Active',
    timestamp: '',
  },
  {
    id: 9,
    name: 'Kubernetes',
    status: 'Active',
    timestamp: '',
  },
];

const events = [
  {
    id: 1,
    type: 'clicked',
    status: 'info',
    title: 'Scheduled deployment',
    description: 'The team initiated the deployment process to production.',
    time: '5 minutes ago',
    agent: 'CI/CD Pipeline',
    platform: 'Jenkins',
  },
  {
    id: 2,
    type: 'clicked',
    status: 'info',
    title: 'Deployment in progress',
    description: 'Deployment is running smoothly and is almost complete.',
    time: '5 minutes ago',
    agent: 'CI/CD Pipeline',
    platform: 'Jenkins',
  },
  {
    id: 3,
    type: 'delivered',
    status: 'success',
    title: 'Production deployment completed',
    description: 'The new version was successfully deployed to production.',
    time: '1 hour ago',
    agent: 'CI/CD Pipeline',
    platform: 'GitHub Actions',
  },
  {
    id: 4,
    type: 'opened',
    status: 'success',
    title: 'Deployment rollback',
    description:
      'The previous deployment failed, and the system is being rolled back.',
    time: '1 day ago',
    agent: 'CI/CD Pipeline',
    platform: 'GitHub Actions',
  },
  {
    id: 5,
    type: 'bounced',
    status: 'error',
    title: 'Deployment failed',
    description: 'Deployment failed due to server errors during the process.',
    time: '20 minutes ago',
    agent: 'CI/CD Pipeline',
    platform: 'GitLab CI',
  },
  {
    id: 6,
    type: 'delivered',
    status: 'success',
    title: 'Hotfix deployed',
    description:
      'A critical hotfix was deployed to address an urgent issue in production.',
    time: '30 minutes ago',
    agent: 'CI/CD Pipeline',
    platform: 'CircleCI',
  },
  {
    id: 7,
    type: 'opened',
    status: 'success',
    title: 'Deployment verification',
    description:
      'The team has verified that the deployment was successful and systems are stable.',
    time: '45 minutes ago',
    agent: 'Deployment Monitor',
    platform: 'New Relic',
  },
  {
    id: 8,
    type: 'delivered',
    status: 'success',
    title: 'Server scaling',
    description:
      'Auto-scaling triggered due to increased traffic to the application.',
    time: '1 hour ago',
    agent: 'Cloud Infrastructure',
    platform: 'AWS EC2',
  },
];

const iconMap = {
  delivered: Mail, // Representa consulta o propuesta enviada
  clicked: GitBranch, // Representa acción de clic (reunión agendada)
  opened: Mail, // Representa propuesta abierta y revisada
  bounced: XCircle, // Representa rechazo de propuesta
  success: Cloud, // Representa implementación exitosa
  error: XCircle, // Representa error en la implementación
  deploy: Package, // Representa despliegue realizado
  kubernetes: Database, // Represent
};

export default function Development() {
  const [activeEvent, setActiveEvent] = useState(0);
  const [showNotifications, setShowNotifications] = useState(false);
  const [testMode, setTestMode] = useState('delivered');

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveEvent((prev) => (prev + 1) % events.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full bg-black min-h-screen text-gray-300">
      <main className="container mx-auto px-4 py-8">
        <div className="relative min-h-screen flex items-center justify-center pt-16">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-zinc-900 via-black to-black"></div>
          <div className="relative z-10 container px-4 md:px-6">
            <p className="text-sm uppercase tracking-widest text-zinc-400 text-center mb-8">
              Boost your business with
            </p>
            <h1 className="font-serif text-center text-7xl md:text-8xl lg:text-9xl tracking-tight mb-8">
              High Impact Web Development
            </h1>
            <p className="mt-8 text-lg text-zinc-400 max-w-2xl mx-auto text-center leading-relaxed">
              We are experts in creating innovative digital solutions that
              transform your online presence, accelerating the growth of your
              company with the best tools on the market.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Tools List Panel */}
          <CustomSection>
            <motion.div
              className="relative flex flex-col gap-4 rounded-3xl overflow-hidden z-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="relative z-10 h-[400px] overflow-hidden  p-8">
                <div className="relative mb-8"></div>

                <div className="space-y-4">
                  <div className="overflow-y-auto max-h-[200px] scrollbar-hide">
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
              <div className="relative z-10 h-[400px] overflow-hidden  p-8">
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

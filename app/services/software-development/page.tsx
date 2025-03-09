'use client';

import React, { useState, useEffect } from 'react';
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from 'framer-motion';
import {
  Cloud,
  Server,
  Lock,
  GitBranch,
  Wrench,
  Network,
  Rocket,
  ShieldCheck,
  Database,
  Zap,
  Clock,
  Code,
  ArrowRight,
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

const deploymentServices = [
  {
    icon: Cloud,
    title: 'Despliegue en la Nube',
    description:
      'Implementación multi-cloud con auto-escalado y alta disponibilidad',
    gradient: '#46ffe0',
    url: '/deployment/cloud',
    button: false,
  },
  {
    icon: GitBranch,
    title: 'CI/CD Automatizado',
    description:
      'Pipelines de entrega continua con testing y rollback automático',
    gradient: '#ff6b6b',
    url: '/deployment/cicd',
    button: false,
  },
  {
    icon: Server,
    title: 'Orquestación de Servidores',
    description: 'Gestión centralizada de clusters y configuraciones',
    gradient: '#4dabf7',
    url: '/deployment/servers',
    button: false,
  },
  {
    icon: Lock,
    title: 'Seguridad en Producción',
    description: 'Hardening de servidores y políticas de acceso Zero Trust',
    gradient: '#94d82d',
    url: '/deployment/security',
    button: false,
  },
  {
    icon: Wrench,
    title: 'Mantenimiento Continuo',
    description: 'Actualizaciones sin downtime y monitoreo 24/7',
    gradient: '#f783ac',
    url: '/deployment/maintenance',
    button: false,
  },
  {
    icon: Network,
    title: 'Balanceo de Carga',
    description: 'Distribución inteligente de tráfico global',
    gradient: '#ff922b',
    url: '/deployment/load-balancing',
    button: false,
  },
];

const deploymentStack = [
  {
    name: 'CI/CD Tools',
    techs: [
      'Jenkins',
      'GitLab CI',
      'CircleCI',
      'ArgoCD',
      'Tekton',
      'Spinnaker',
    ],
  },
  {
    name: 'Cloud Providers',
    techs: ['AWS', 'Google Cloud', 'Azure', 'DigitalOcean', 'Linode', 'OVH'],
  },
  {
    name: 'Containerization',
    techs: ['Docker', 'Kubernetes', 'Podman', 'Rancher', 'Nomad', 'OpenShift'],
  },
  {
    name: 'Monitoring',
    techs: [
      'Prometheus',
      'Grafana',
      'New Relic',
      'Datadog',
      'Sentry',
      'Zabbix',
    ],
  },
  {
    name: 'Security',
    techs: ['Vault', 'Cert-Manager', 'OPA', 'Trivy', 'Falco', 'Anchore'],
  },
];

const deploymentSteps = [
  {
    title: 'Planificación',
    description: 'Diseño de arquitectura y estrategia de despliegue',
    icon: Code,
    color: '#46ffe0',
  },
  {
    title: 'Preparación de Ambiente',
    description: 'Configuración de infraestructura y redes',
    icon: Wrench,
    color: '#ff6b6b',
  },
  {
    title: 'Implementación CI/CD',
    description: 'Configuración de pipelines automatizados',
    icon: GitBranch,
    color: '#4dabf7',
  },
  {
    title: 'Monitoreo Continuo',
    description: 'Implementación de sistemas de observabilidad',
    icon: Network,
    color: '#94d82d',
  },
];

const FloatingServer = ({ Icon, position }: { Icon: any; position: any }) => {
  return (
    <motion.div
      className="absolute"
      style={position}
      animate={{
        y: [0, -20, 0],
        rotate: [0, 5, -5, 0],
      }}
      transition={{
        duration: 4 + Math.random() * 4,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    >
      <Icon className="w-16 h-16 text-zinc-400 opacity-50" />
    </motion.div>
  );
};

// const DeploymentProcessStep = ({
//   step,
//   active,
// }: {
//   step: any;
//   active: boolean;
// }) => {
//   return (
//     <motion.div
//       className="relative flex flex-col items-center"
//       initial={{ opacity: 0, y: 50 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true, margin: '0px 0px -200px 0px' }}
//     >
//       <motion.div
//         className="w-24 h-24 rounded-full mb-6 flex items-center justify-center relative"
//         style={{ backgroundColor: step.color }}
//         whileHover={{ scale: 1.1 }}
//       >
//         <step.icon className="w-12 h-12 text-black" />
//         {active && (
//           <motion.div
//             className="absolute inset-0 rounded-full border-2 border-white/30"
//             animate={{
//               scale: [1, 1.5],
//               opacity: [1, 0],
//             }}
//             transition={{
//               duration: 2,
//               repeat: Infinity,
//             }}
//           />
//         )}
//       </motion.div>
//       <h3 className="text-3xl font-bold mb-4">{step.title}</h3>
//       <p className="text-xl text-zinc-400 max-w-2xl text-center">
//         {step.description}
//       </p>
//     </motion.div>
//   );
// };

export default function DeploymentComponent() {
  const [currentTech, setCurrentTech] = useState(0);
  const [activeStep, setActiveStep] = useState(0);
  const [mounted, setMounted] = useState(false);
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1.2]);

  useEffect(() => {
    setMounted(true);
    const techInterval = setInterval(() => {
      setCurrentTech((prev) => (prev + 1) % deploymentStack.length);
    }, 3000);

    const stepInterval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % deploymentSteps.length);
    }, 5000);

    return () => {
      clearInterval(techInterval);
      clearInterval(stepInterval);
    };
  }, []);

  return (
    <div className="w-full bg-black min-h-screen text-gray-300">
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="relative min-h-[100vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-zinc-900 via-black to-black" />

          <div className="relative z-10 text-center px-4">
            <AnimatePresence>
              {mounted && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                >
                  <motion.h1
                    className="font-serif text-6xl md:text-8xl lg:text-9xl tracking-tight mb-8"
                    style={{ scale }}
                  >
                    <motion.span
                      className="block bg-gradient-to-r from-green-400 to-blue-600 bg-clip-text text-transparent"
                      animate={{
                        textShadow: [
                          '0 0 10px rgba(72,187,120,0.5)',
                          '0 0 20px rgba(72,187,120,0.8)',
                          '0 0 10px rgba(72,187,120,0.5)',
                        ],
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      DEPLOYMENT
                    </motion.span>
                    <motion.span
                      className="block text-zinc-200 mt-4"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5 }}
                    >
                      Enterprise-Level
                    </motion.span>
                  </motion.h1>

                  <motion.div
                    className="mt-8 max-w-2xl mx-auto"
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.8 }}
                  >
                    <motion.div
                      className="text-xl text-zinc-400 leading-relaxed bg-black/30 backdrop-blur-sm p-6 rounded-xl border border-zinc-800 relative overflow-hidden"
                      whileHover={{ scale: 1.02 }}
                    >
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-blue-600/10"
                        animate={{
                          x: ['-100%', '100%'],
                        }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                        }}
                      />
                      Despliegue continuo con zero-downtime y seguridad
                      enterprise-level
                    </motion.div>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Tecnologías */}
        <CustomSection>
          <div className="my-20">
            <h2 className="text-4xl font-bold text-center mb-16">
              Ecosistema Tecnológico
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 relative">
              {deploymentStack
                .flatMap((stack) => stack.techs)
                .map((tech, index) => (
                  <motion.div
                    key={tech}
                    className="p-4 text-center border border-zinc-700 rounded-xl bg-zinc-900/50 relative overflow-hidden"
                    whileHover={{
                      scale: 1.1,
                      backgroundColor: 'rgba(63, 63, 70, 0.5)',
                      transition: { duration: 0.3 },
                    }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '0px 0px -100px 0px' }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-blue-600/10 opacity-0 hover:opacity-100 transition-opacity" />
                    {tech}
                  </motion.div>
                ))}
            </div>
          </div>
        </CustomSection>

        {/* Servicios */}
        <div className="mt-16">
          <h2 className="text-4xl font-bold text-center mb-8">
            Servicios Especializados
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {deploymentServices.map((service, index) => (
              <CustomCard key={service.title} gradientColor={service.gradient}>
                <motion.div
                  className="p-6 rounded-lg relative z-10"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                >
                  <service.icon className="w-12 h-12 mb-4 text-white" />
                  <h3 className="text-2xl font-semibold mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 mb-4">{service.description}</p>
                  {service.button && (
                    <Button variant="outline" asChild>
                      <a href={service.url}>
                        More details <ArrowRight className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  )}
                </motion.div>
              </CustomCard>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

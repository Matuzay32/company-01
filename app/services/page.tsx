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
  Rocket,
  Lock,
  Smartphone,
  Star,
  Trophy,
  ShieldCheck,
  Globe,
  BarChart,
  Users,
  ClipboardCheck,
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
    title: 'Full Stack Development',
    description:
      'Complete web applications with modern and scalable technologies',
    gradient: '#46ffe0',
    url: '/services/full-stack',
    button: false,
  },
  {
    icon: Settings,
    title: 'Management Systems',
    description: 'Custom solutions to automate business processes',
    gradient: '#ff6b6b',
    url: '/services/management-systems',
    button: false,
  },
  {
    icon: FileText,
    title: 'Billing Systems',
    description: 'Integrated platforms for financial and accounting management',
    gradient: '#4dabf7',
    url: '/services/billing',
    button: false,
  },
  {
    icon: BrainCircuit,
    title: 'AI Integration',
    description:
      'Implementation of artificial intelligence models in your processes',
    gradient: '#94d82d',
    url: '/services/ai-integration',
    button: false,
  },
  {
    icon: PenLine,
    title: 'AI Content Generation',
    description: 'Automated creation of relevant and optimized content',
    gradient: '#f783ac',
    url: '/services/ai-content',
    button: false,
  },
  {
    icon: Cloud,
    title: 'Cloud Solutions',
    description: 'Scalable and secure cloud infrastructure',
    gradient: '#ff922b',
    url: '/services/cloud',
    button: false,
  },
];

const techStack = [
  {
    name: 'Frontend',
    techs: ['React', 'Angular', 'Vue', 'Next.js', 'TypeScript', 'Tailwind CSS'],
  },
  {
    name: 'Backend',
    techs: ['Node.js', 'Python', 'Java', '.NET', 'Ruby on Rails', 'Go'],
  },
  {
    name: 'Databases',
    techs: [
      'PostgreSQL',
      'MongoDB',
      'MySQL',
      'Redis',
      'Cassandra',
      'Elasticsearch',
    ],
  },
  {
    name: 'Cloud',
    techs: [
      'AWS',
      'Google Cloud',
      'Azure',
      'Docker',
      'Kubernetes',
      'Terraform',
    ],
  },
  {
    name: 'AI/ML',
    techs: [
      'TensorFlow',
      'PyTorch',
      'OpenAI',
      'LangChain',
      'Hugging Face',
      'DeepSeek',
      'Keras',
    ],
  },
];

const workflowSteps = [
  {
    title: 'Initial Consultation',
    description: 'Needs and goals analysis',
    icon: ClipboardCheck,
    color: '#46ffe0',
  },
  {
    title: 'Solution Design',
    description: 'Technical proposal and architecture',
    icon: BarChart,
    color: '#ff6b6b',
  },
  {
    title: 'Agile Development',
    description: 'Implementation with Scrum methodology',
    icon: Code,
    color: '#4dabf7',
  },
  {
    title: 'Delivery and Support',
    description: 'Deploy and continuous maintenance',
    icon: Users,
    color: '#94d82d',
  },
];

const CountUp = ({ value }: { value: number }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 2000;
    const start = Date.now();
    const increment = Math.ceil(value / (duration / 100));

    const animate = () => {
      const elapsed = Date.now() - start;
      const progress = Math.min(elapsed / duration, 1);
      const current = Math.floor(progress * value);

      setCount(current);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(value);
      }
    };

    requestAnimationFrame(animate);
  }, [value]);

  return <motion.span>{count}</motion.span>;
};

export default function ServicesComponent() {
  const [currentTech, setCurrentTech] = useState(0);
  const [activeStep, setActiveStep] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const techInterval = setInterval(() => {
      setCurrentTech((prev) => (prev + 1) % techStack.length);
    }, 3000);

    const stepInterval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % workflowSteps.length);
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

          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.2 }}
            transition={{ duration: 2, delay: 0.5 }}
            className="absolute inset-0"
          >
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600 rounded-full mix-blend-screen opacity-30 blur-3xl" />
            <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-blue-600 rounded-full mix-blend-screen opacity-30 blur-3xl" />
          </motion.div>

          <div className="relative z-10 text-center px-4">
            <AnimatePresence>
              {mounted && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <motion.p
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="text-lg uppercase tracking-widest text-zinc-400 mb-6"
                  >
                    Technological Innovation at Your Reach
                  </motion.p>

                  <motion.h1
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.6, type: 'spring' }}
                    className="font-serif text-6xl md:text-8xl lg:text-9xl tracking-tight mb-8"
                  >
                    <span>Solutions</span>
                    <motion.span
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 1 }}
                      className="text-zinc-200 block mt-4"
                    >
                      that Drive Your Business
                    </motion.span>
                  </motion.h1>

                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1.2 }}
                    className="mt-8 max-w-2xl mx-auto"
                  >
                    <motion.p
                      whileHover={{ scale: 1.02 }}
                      className="text-xl text-zinc-400 leading-relaxed bg-black/30 backdrop-blur-sm p-6 rounded-xl border border-zinc-800"
                    >
                      We develop custom software that empowers your business
                      through technological innovation and advanced digital
                      strategies.
                    </motion.p>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Stats Section */}
        <CustomSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 my-20">
            {[
              {
                value: 98,
                label: 'Satisfaction',
                icon: Star,
                suffix: '%',
                color: '#46ffe0',
              },
              {
                value: 250,
                label: 'Projects',
                icon: Trophy,
                suffix: '+',
                color: '#ff6b6b',
              },
              {
                value: 24,
                label: 'Support',
                icon: ShieldCheck,
                suffix: '/7',
                color: '#4dabf7',
              },
              {
                value: 40,
                label: 'Technologies',
                icon: Globe,
                suffix: '+',
                color: '#94d82d',
              },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8, rotateX: -90 }}
                whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1 + 0.3,
                  type: 'spring',
                }}
                className="p-8 rounded-3xl border border-zinc-700 bg-gradient-to-br from-zinc-900/50 to-black/50 relative overflow-hidden"
              >
                <div
                  className="absolute inset-0 opacity-20 pointer-events-none"
                  style={{
                    background: `radial-gradient(600px at 50% 50%, ${stat.color} 0%, transparent 100%)`,
                  }}
                />

                <stat.icon
                  className="w-12 h-12 mb-4"
                  style={{ color: stat.color }}
                />
                <motion.div
                  className="text-5xl font-bold mb-2 flex items-end gap-2"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 + 0.5 }}
                >
                  <CountUp value={stat.value} />
                  <span className="text-2xl" style={{ color: stat.color }}>
                    {stat.suffix}
                  </span>
                </motion.div>
                <motion.div
                  className="text-zinc-400 text-lg"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.7 }}
                >
                  {stat.label}
                </motion.div>
              </motion.div>
            ))}
          </div>
        </CustomSection>

        {/* WORK FLOW */}
        <CustomSection>
          <h2 className="text-3xl font-bold text-center mb-8">
            <span className="text-[#46ffe0]">Nuestro</span> Flujo de Trabajo
          </h2>
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
            {workflowSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="text-center"
              >
                <step.icon
                  size={48}
                  color={step.color}
                  className="mx-auto mb-6"
                />
                <h3 className="text-2xl text-white font-bold mb-4">
                  {step.title}
                </h3>
                <p className="text-white">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </CustomSection>

        <CustomSection>
          <div className="my-20">
            <h1 className="text-3xl font-bold text-center mb-8">
              <span className="text-[#46ffe0]">Tecnologías</span> Dominadas
            </h1>

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
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {techStack
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

        {/* Services Section */}
        <div className="mt-16">
          <h1 className="text-3xl font-bold text-center mb-8">
            <span className="text-[#94d82d]">Nuestros</span> Servicios
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <CustomCard key={service.title} gradientColor={service.gradient}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-6 rounded-lg"
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

'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Search,
  Users,
  FileCheck,
  Code,
  ArrowRight,
  Clock,
  Mail,
  GitBranch,
  XCircle,
  Layout,
  Globe,
  Paintbrush,
  CheckCircle,
} from 'lucide-react';
import { Button } from '../ui/Buttons/v2/button';
import { Input } from '@/components/ui/input';
import CustomSection from '../ui/Others/CustomSection';
import Pattern from '../ui/Patterns/Pattern';

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
    icon: Layout,
    title: 'Landing Pages',
    description:
      'Create high-converting landing pages that drive results and engage your audience.',
    url: '/services/landing-pages',
  },
  {
    icon: Globe,
    title: 'Web Development',
    description:
      'Build robust, scalable web applications using cutting-edge technologies and best practices.',
    url: '/services/web-development',
  },
  {
    icon: Code,
    title: 'Software Development',
    description:
      'Develop custom software solutions tailored to your specific business needs and challenges.',
    url: '/services/software-development',
  },
  {
    icon: Paintbrush,
    title: 'Web Design',
    description:
      'Create visually stunning and user-friendly designs that elevate your brand and user experience.',
    url: '/services/web-desing',
  },
];

const hiringProcesses = [
  {
    id: 'requirements',
    name: 'Requirements Analysis',
    status: 'Active',
    timestamp: '',
  },
  {
    id: 'sourcing',
    name: 'Talent Sourcing',
    status: 'Active',
    timestamp: '',
  },
  {
    id: 'screening',
    name: 'Candidate Screening',
    status: 'Active',
    timestamp: '',
  },
  {
    id: 'interviews',
    name: 'Technical Interviews',
    status: 'Active',
    timestamp: '',
  },
  {
    id: 'selection',
    name: 'Final Selection',
    status: 'Active',
    timestamp: '',
  },
  {
    id: 'onboarding',
    name: 'Onboarding',
    status: 'Active',
    timestamp: '',
  },
  {
    id: 'integration',
    name: 'Team Integration',
    status: 'Active',
    timestamp: '',
  },
];

const hiringEvents = [
  {
    id: 1,
    type: 'requirements',
    status: 'success',
    title: 'Project Requirements Defined',
    description: 'Client outlines project needs and required skills',
    time: '1 day ago',
    agent: 'Project Manager',
    platform: 'Zoom Meeting',
  },
  {
    id: 2,
    type: 'sourcing',
    status: 'info',
    title: 'Talent Search Initiated',
    description: 'Recruitment team begins sourcing candidates',
    time: '23 hours ago',
    agent: 'Recruiter',
    platform: 'Job Boards',
  },
  {
    id: 3,
    type: 'screening',
    status: 'success',
    title: 'Initial Screenings Completed',
    description: 'First round of candidate screenings finished',
    time: '12 hours ago',
    agent: 'HR Manager',
    platform: 'Phone Interviews',
  },
  {
    id: 4,
    type: 'interviews',
    status: 'info',
    title: 'Technical Interviews Scheduled',
    description: 'Qualified candidates invited for technical assessment',
    time: '6 hours ago',
    agent: 'Tech Lead',
    platform: 'Coding Platform',
  },
  {
    id: 5,
    type: 'selection',
    status: 'success',
    title: 'Final Candidates Selected',
    description: 'Top candidates chosen for client review',
    time: '2 hours ago',
    agent: 'Hiring Manager',
    platform: 'Internal Meeting',
  },
  {
    id: 6,
    type: 'onboarding',
    status: 'info',
    title: 'Onboarding Process Initiated',
    description: 'Selected candidate begins onboarding process',
    time: '1 hour ago',
    agent: 'HR Coordinator',
    platform: 'Onboarding System',
  },
  {
    id: 7,
    type: 'integration',
    status: 'success',
    title: 'Team Integration Completed',
    description: 'New hire successfully integrated into project team',
    time: '30 minutes ago',
    agent: 'Project Manager',
    platform: 'Team Collaboration Tool',
  },
];

const iconMap = {
  requirements: Search,
  sourcing: Users,
  screening: FileCheck,
  interviews: Code,
  selection: CheckCircle,
  onboarding: Mail,
  integration: GitBranch,
};

export default function EnhancedStaffAugmentation() {
  const [activeEvent, setActiveEvent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveEvent((prev) => (prev + 1) % hiringEvents.length);
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
              Empower Your Projects with
            </p>
            <h1 className="font-serif text-center text-6xl md:text-5xl lg:text-9xl tracking-tight mb-8">
              Expert IT Talent On Demand
            </h1>
            <p className="mt-8 text-lg text-zinc-400 max-w-2xl mx-auto text-center leading-relaxed">
              We specialize in providing top-tier IT professionals to augment
              your team, accelerating project delivery and driving innovation in
              your organization.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Hiring Process Panel */}
          <CustomSection>
            <div className="mb-8 flex justify-center">
              <span className="inline-flex items-center rounded-full border border-zinc-700 px-12 py-6 text-3xl font-bold">
                Hiring Process
              </span>
            </div>

            <motion.div
              className="relative flex flex-col gap-4 rounded-3xl overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="relative z-10 h-[400px] overflow-hidden p-8">
                <div className="relative mb-8"></div>

                <div className="space-y-4">
                  <div className="overflow-y-auto max-h-[300px]">
                    <AnimatePresence>
                      {hiringProcesses.map((process, index) => (
                        <motion.div
                          key={process.id}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -20 }}
                          transition={{ duration: 0.3, delay: index * 0.1 }}
                          className="flex items-center justify-between rounded-lg border border-gray-800 bg-black/30 p-3 mb-2"
                        >
                          <div className="flex items-center gap-4 text-sm">
                            <span className="px-2 py-1 rounded-md bg-green-900 text-green-300">
                              {process.status}
                            </span>
                            <div className="flex flex-col text-sm">
                              <span className="font-semibold">
                                {process.name}
                              </span>
                              <span className="text-xs text-gray-500">{`ID: ${process.id}`}</span>
                            </div>
                          </div>
                          <span className="text-xs text-gray-400">
                            {process.timestamp}
                          </span>
                        </motion.div>
                      ))}
                    </AnimatePresence>
                  </div>
                </div>
              </div>
              <div className="z-10 p-8">
                <h2 className="text-xl font-semibold">Our Hiring Process</h2>
                <p className="mt-2 text-sm text-gray-400">
                  We follow a rigorous and efficient process to ensure we find
                  the perfect match for your project needs.
                </p>
              </div>
            </motion.div>
          </CustomSection>

          {/* Hiring Events Panel */}
          <CustomSection>
            <div className="mb-8 flex justify-center">
              <span className="inline-flex items-center rounded-full border border-zinc-700 px-12 py-6 text-3xl font-bold">
                Hiring Timeline
              </span>
            </div>
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
                    {hiringEvents
                      .slice(activeEvent, activeEvent + 3)
                      .map((event, index) => {
                        const Icon =
                          iconMap[event.type as keyof typeof iconMap];

                        const isSelected =
                          activeEvent % hiringEvents.length ===
                          index + activeEvent;

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
                                      : 'bg-blue-900 text-blue-300'
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
                <h2 className="text-xl font-semibold">Hiring Timeline</h2>
                <p className="mt-2 text-sm text-gray-400">
                  Track the progress of our hiring process in real-time. From
                  initial requirements to team integration, we keep you informed
                  every step of the way.
                </p>
              </div>
            </motion.div>
          </CustomSection>
        </div>

        {/* Services Section */}
        <div className="mt-16">
          <h2 className="text-4xl font-bold text-center mb-8">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <CustomCard gradientColor="#46ffe0" key={service.title}>
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className=" p-6 rounded-lg "
                >
                  <service.icon className="w-12 h-12 mb-4 text-white" />
                  <h3 className="text-xl font-semibold mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 mb-4">{service.description}</p>
                  <Button variant="outline" asChild>
                    <a href={service.url}>
                      Learn more <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </motion.div>
              </CustomCard>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

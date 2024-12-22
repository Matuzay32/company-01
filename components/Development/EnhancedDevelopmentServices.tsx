'use client';

import {
  ArrowRight,
  Cloud,
  Code,
  Database,
  GitBranch,
  Globe,
  Package,
  Send,
  Server,
  Terminal,
  Zap,
} from 'lucide-react';
import React, { useState } from 'react';

import { Button } from '../ui/Buttons/v2/button';
import { Input } from '@/components/ui/input';
import Pattern from '../ui/Patterns/Pattern';
import { Textarea } from '@/components/ui/textarea';
import { motion } from 'framer-motion';

const services = [
  {
    icon: GitBranch,
    title: 'CI/CD Pipeline Integration',
    description:
      'Automate your deployment pipeline with continuous integration and continuous deployment solutions, ensuring fast and reliable delivery to production.',
    url: 'https://www.jenkins.io/doc/', // Ejemplo de documentación de Jenkins
    buttonLabel: 'Learn more about CI/CD Pipeline',
  },
  {
    icon: Cloud,
    title: 'Cloud Infrastructure Management',
    description:
      'Leverage cloud platforms like AWS, Google Cloud, and Azure to scale your applications and manage your infrastructure with ease.',
    url: 'https://aws.amazon.com/documentation/', // Documentación de AWS
    buttonLabel: 'Explore Cloud Management Services',
  },
  {
    icon: Package,
    title: 'Containerization & Orchestration',
    description:
      'Containerize your applications with Docker and orchestrate with Kubernetes for easy deployment and scalability across environments.',
    url: 'https://docs.docker.com/', // Documentación de Docker
    buttonLabel: 'Learn about Docker & Kubernetes',
  },
  {
    icon: Database,
    title: 'Database Management & Scaling',
    description:
      'Manage and scale your databases with automated backups, real-time monitoring, and high availability to ensure performance and reliability.',
    url: 'https://www.postgresql.org/docs/', // Documentación de PostgreSQL
    buttonLabel: 'Discover Database Management Solutions',
  },
  {
    icon: Terminal,
    title: 'Automated Server Management',
    description:
      'Automate server provisioning, configuration, and scaling to ensure seamless operation of your applications across multiple environments.',
    url: 'https://www.ansible.com/resources/get-started', // Documentación de Ansible
    buttonLabel: 'See Server Management Options',
  },
  {
    icon: ArrowRight,
    title: 'Deployment Monitoring & Alerts',
    description:
      'Monitor your deployments in real-time, receive instant alerts on failures or successes, and ensure everything runs smoothly post-deployment.',
    url: 'https://prometheus.io/docs/introduction/overview/', // Documentación de Prometheus
    buttonLabel: 'Explore Deployment Monitoring Tools',
  },
  {
    icon: Code,
    title: 'Version Control & Deployment Tools',
    description:
      'Implement best practices for version control with Git and automate deployments with tools like GitHub Actions, Jenkins, and CircleCI.',
    url: 'https://docs.github.com/en/actions', // Documentación de GitHub Actions
    buttonLabel: 'Learn about Version Control & Deployment',
  },
];

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

export default function EnhancedDevelopmentServices() {
  return (
    <div className="w-full bg-black text-gray-300 py-16">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-5xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Transforming Ideas into Digital Reality
        </motion.h2>
        <p className="text-lg text-center text-gray-400 mb-8">
          We specialize in turning your innovative ideas into scalable digital
          solutions using cutting-edge technologies. From cloud infrastructure
          to deployment automation, we ensure that your projects reach new
          heights of performance, security, and reliability.
        </p>

        <div className="mt-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <CustomCard gradientColor="#46ffe0" key={service.title}>
                <motion.div
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
                      {service.buttonLabel}{' '}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </motion.div>
              </CustomCard>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

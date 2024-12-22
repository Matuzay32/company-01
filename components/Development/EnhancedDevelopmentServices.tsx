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
    url: '/services/cicd-pipeline',
  },
  {
    icon: Cloud,
    title: 'Cloud Infrastructure Management',
    description:
      'Leverage cloud platforms like AWS, Google Cloud, and Azure to scale your applications and manage your infrastructure with ease.',
    url: '/services/cloud-infrastructure',
  },
  {
    icon: Package,
    title: 'Containerization & Orchestration',
    description:
      'Containerize your applications with Docker and orchestrate with Kubernetes for easy deployment and scalability across environments.',
    url: '/services/containerization-orchestration',
  },
  {
    icon: Database,
    title: 'Database Management & Scaling',
    description:
      'Manage and scale your databases with automated backups, real-time monitoring, and high availability to ensure performance and reliability.',
    url: '/services/database-management',
  },
  {
    icon: Terminal,
    title: 'Automated Server Management',
    description:
      'Automate server provisioning, configuration, and scaling to ensure seamless operation of your applications across multiple environments.',
    url: '/services/server-management',
  },
  {
    icon: ArrowRight,
    title: 'Deployment Monitoring & Alerts',
    description:
      'Monitor your deployments in real-time, receive instant alerts on failures or successes, and ensure everything runs smoothly post-deployment.',
    url: '/services/deployment-monitoring',
  },
  {
    icon: Code,
    title: 'Version Control & Deployment Tools',
    description:
      'Implement best practices for version control with Git and automate deployments with tools like GitHub Actions, Jenkins, and CircleCI.',
    url: '/services/version-control-deployment',
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
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert("Thanks for your message! We'll get back to you soon.");
    setFormData({ name: '', email: '', message: '' });
  };

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

        <div className="mt-16">
          <h2 className="text-4xl font-bold text-center mb-8">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <CustomCard gradientColor="#46ffe0">
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
      </div>
    </div>
  );
}

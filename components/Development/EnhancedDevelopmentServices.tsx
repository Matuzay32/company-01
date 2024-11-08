'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Code, Server, Globe, Zap, ArrowRight, Send } from 'lucide-react';
import { Button } from '../ui/Buttons/v2/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Pattern from '../ui/Patterns/Pattern';

const services = [
  {
    icon: Code,
    title: 'Frontend Development',
    description:
      'Create responsive and interactive user interfaces using modern frameworks.',
    technologies: ['React', 'Vue.js', 'Next.js', 'Tailwind CSS'],
    color: 'from-blue-600 to-cyan-500',
  },
  {
    icon: Server,
    title: 'Backend Development',
    description:
      'Build robust server-side applications and APIs for scalable solutions.',
    technologies: ['Node.js', 'Python', 'Java', 'GraphQL'],
    color: 'from-green-600 to-emerald-500',
  },
  {
    icon: Globe,
    title: 'Full Stack Solutions',
    description:
      'End-to-end web application development, from database to UI implementation.',
    technologies: ['MERN Stack', 'Django', 'Ruby on Rails', 'PostgreSQL'],
    color: 'from-purple-600 to-pink-500',
  },
  {
    icon: Zap,
    title: 'Performance Optimization',
    description:
      "Improve your web application's speed and efficiency for better UX and SEO.",
    technologies: [
      'Webpack',
      'Lazy Loading',
      'CDN Integration',
      'Caching Strategies',
    ],
    color: 'from-yellow-500 to-orange-500',
  },
];

const CustomCard = ({
  children,
  gradientColor,
  borderColor = 'border-zinc-300',
}: {
  children: React.ReactNode;
  gradientColor: string;
  borderColor?: string;
}) => {
  return (
    <div
      className={`relative px-6 py-12 rounded-3xl border-t ${borderColor} overflow-hidden`}
    >
      <Pattern />
      <div
        aria-hidden="true"
        className="left-1/2 top-0 w-[300px] h-px absolute max-w-full -translate-x-1/2 -translate-y-1/2"
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <CustomCard
                gradientColor={service.color.split(' ')[1]}
                borderColor="border-zinc-600"
              >
                <div className="relative z-10">
                  <service.icon className="w-12 h-12 mb-4 text-white" />
                  <h3 className="text-2xl font-semibold mb-2 text-white">
                    {service.title}
                  </h3>
                  <p className="text-gray-100 mb-4">{service.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {service.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-black bg-opacity-30 rounded text-sm text-white"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <Button variant="secondary" className="mt-2">
                    Learn more <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </CustomCard>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

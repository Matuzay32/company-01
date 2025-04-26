'use client';

import {
  ArrowRight
} from 'lucide-react';
import React, { useState } from 'react';

import { Button } from '../ui/Buttons/v2/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { motion } from 'framer-motion';
import CustomCard from '../Cards/CustomCards';
import { services } from './data';

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

        <div className="mt-8">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {services.map((service, index) => (
              <CustomCard gradientColor="#46ffe0" key={service.title}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className=" p-6 rounded-lg flex flex-col items-center justify-center"
                >
                  <service.icon className="w-12 h-12 mb-4 text-white" />
                  <h3 className="text-xl font-semibold mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 mb-4">{service.description}</p>
                  <Button variant="outline" asChild size={'sm'}>
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

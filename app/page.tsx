'use client';

import Image from 'next/image';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { ArrowRight, ChevronRight, Menu, X } from 'lucide-react';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-gray-900 text-white">
      <section className="text-center mt-24 mb-20 px-4">
        <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">
          Elevate Your Digital Presence
        </h1>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          We craft stunning websites and powerful applications that drive your
          business forward
        </p>
        <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-3 rounded-full text-lg transition-all transform hover:scale-105">
          Get Started <ChevronRight className="ml-2 h-5 w-5" />
        </Button>
      </section>

      <section className="w-full max-w-6xl mx-auto my-20 px-4">
        <h2 className="text-3xl font-semibold text-center mb-12">
          Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: 'Web Development',
              description: 'Custom websites tailored to your brand and goals.',
            },
            {
              title: 'App Development',
              description:
                'Powerful mobile apps for iOS and Android platforms.',
            },
            {
              title: 'UI/UX Design',
              description:
                'Intuitive and beautiful interfaces that users love.',
            },
          ].map((service, index) => (
            <Card
              key={index}
              className="bg-gray-800 border-gray-700 hover:border-purple-500 transition-all"
            >
              <CardHeader>
                <CardTitle className="text-xl font-bold">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">{service.description}</p>
              </CardContent>
              <CardFooter>
                <Button
                  variant="ghost"
                  className="text-purple-400 hover:text-purple-300"
                >
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      <section className="w-full bg-gradient-to-r from-purple-800 to-pink-800 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Transform Your Digital Presence?
          </h2>
          <p className="text-xl mb-8">
            Let's create something amazing together.
          </p>
          <Button className="bg-white text-purple-800 hover:bg-gray-100 px-8 py-3 rounded-full text-lg transition-all transform hover:scale-105">
            Contact Us Now
          </Button>
        </div>
      </section>

      <footer className="w-full bg-gray-800 text-gray-300 py-12 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {['About Us', 'Team', 'Careers', 'Contact'].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {[
                'Web Development',
                'App Development',
                'UI/UX Design',
                'Consulting',
              ].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              {['Blog', 'Documentation', 'FAQs', 'Support'].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              {['Terms of Service', 'Privacy Policy', 'Cookie Policy'].map(
                (item) => (
                  <li key={item}>
                    <a href="#" className="hover:text-white transition-colors">
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </footer>
    </main>
  );
}

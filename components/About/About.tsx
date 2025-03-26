'use client';
//changes

import { ArrowRight } from 'lucide-react';
import { Button } from '../ui/Buttons/v2/button';
import Component3d from './Component3d';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import CustomSection from '../ui/Others/CustomSection';
import Scene from '../3d/Scene';

export default function About() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-4">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
        {/* este color es mas oscuro #ffffff0d */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_50%_50%,#ffffff21,transparent)]" />

        <Scene></Scene>

        {/* Hero Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative text-center max-w-4xl mx-auto space-y-6"
        >
          <h1 className="text-4xl md:text-7xl font-bold tracking-tight">
            Transform your team growth with Vortex Pulse
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
            In a world where technology is relentlessly advancing, why is
            recruiting still stuck in antiquated methods? At Vortex Pulse, we're
            here to change that.
          </p>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
            We connect companies with the talent they need to scale their
            projects, without friction, without delays. Whether for small
            projects or large initiatives, our modern, customized approach
            ensures you find the right expert, when and where you need them.
          </p>
        </motion.div>
      </section>

      {/* Our Story Section */}
      <CustomSection mt="mt-40">
        <section className="relative py-32">
          <div className="w-[90%] mx-auto miniEditor">
            <div
              className="relative mt-16 rounded-2xl border-slate-6 border h-auto pb-10"
              style={{
                background:
                  'radial-gradient(41.07% 8.33% at 50% 0%, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0) 100%), linear-gradient(rgb(16, 16, 16) 0%, rgba(0, 0, 0, 0.8) 100%)',
                maskImage:
                  'linear-gradient(rgb(0, 0, 0) 40%, rgba(0, 0, 0, 0) 100%)',
                maskSize: '100% 100%',
                maskPosition: 'center bottom',
              }}
            >
              {/* Decorative lines */}
              <div
                aria-hidden="true"
                className="absolute top-0 w-[300px] md:w-[600px] h-[1px] left-1/2 -translate-x-1/2 pointer-events-none blur-[3px]"
                style={{
                  background:
                    'linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, rgb(255, 255, 255) 50%, rgba(255, 255, 255, 0) 100%)',
                }}
              />
              <div
                aria-hidden="true"
                className="absolute top-0 w-[300px] md:w-[600px] h-[1px] left-1/2 -translate-x-1/2 pointer-events-none blur-[10px]"
                style={{
                  background:
                    'linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, rgb(255, 255, 255) 50%, rgba(255, 255, 255, 0) 100%)',
                }}
              />
              <div
                aria-hidden="true"
                className="absolute top-0 w-[300px] md:w-[600px] h-[1px] left-1/2 -translate-x-1/2 pointer-events-none opacity-100"
                style={{
                  background:
                    'linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, rgb(155, 124, 255) 50%, rgba(255, 255, 255, 0) 100%)',
                }}
              />

              {/* Header */}
              <div className="text-sm relative flex items-center justify-between h-16 w-full px-6 py-4 border-b border-slate-4">
                <div className="hidden md:block absolute left-1/2 -translate-x-1/2 opacity-60">
                  What defines Us
                </div>
              </div>

              {/* Mission & Vision Section */}
              <div className="mt-10 px-8 md:w-[60%] mx-auto text-white text-sm leading-relaxed space-y-8">
                <div>
                  <h3 className="text-xl font-bold mb-4">Mission</h3>
                  <p className="text-slate-4">
                    To provide companies with the complete and specialized team
                    they need to carry out their projects, adapting to their
                    needs and priorities. In an ever-changing technological
                    environment, we understand that each client requires fast,
                    efficient, and tailor-made solutions.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-4">Vision</h3>
                  <p className="text-slate-4">
                    To be the trusted partner of companies of all sizes, helping
                    them turn their ideas into reality. We aim to enable our
                    clients to focus on creating extraordinary products and
                    services, while we take care of the rest.
                  </p>
                </div>

                <div>
                  <p className="text-slate-4">
                    At Vortex Pulse, we combine advanced technology with a team
                    of experts dedicated to sourcing and coordinating the right
                    talent for each project. We take care of every detail, from
                    team selection to ongoing monitoring, ensuring that our
                    clients can rely on a truly modern and comprehensive
                    service.
                  </p>
                  <p className="mt-4 text-slate-4">
                    Today, we are proud to help companies achieve their goals
                    and stay ahead in the competitive tech landscape. Together,
                    we create a future where innovation and efficiency go hand
                    in hand.
                  </p>
                </div>
              </div>

              {/* Our History Section */}
              <div className="mt-10 px-8 md:w-[60%] mx-auto text-white text-sm leading-relaxed space-y-8">
                <h3 className="text-xl font-bold mb-4">Our History</h3>
                <p className="text-slate-4">
                  We founded Vortex Pulse with a simple mission: to provide
                  companies with the complete and specialized team they need to
                  carry out their projects, adapting to their needs and
                  priorities. In an ever-changing technological environment, we
                  understand that each client requires fast, efficient, and
                  tailor-made solutions.
                </p>

                <p className="text-slate-4">
                  At Vortex Pulse, we combine advanced technology with a team of
                  experts dedicated to sourcing and coordinating the right
                  talent for each project. We take care of every detail, from
                  team selection to ongoing monitoring, ensuring that our
                  clients can rely on a truly modern and comprehensive service.
                </p>

                <p className="mt-4 text-slate-4">
                  Today, we are proud to be the partner of companies of all
                  sizes, helping them turn their ideas into reality. Our goal is
                  to enable our clients to focus on what really matters:
                  creating extraordinary products and services, while we take
                  care of the rest.
                </p>
              </div>
            </div>
          </div>
        </section>
      </CustomSection>

      {/* Stats Section */}
      <section className="relative py-32 border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { number: '50+', label: 'Successful placements' },
              { number: '100%', label: 'Client satisfaction' },
              { number: '24/7', label: 'Support available' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 border-t border-white/10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto text-center space-y-8"
          >
            <h2 className="text-3xl md:text-5xl font-bold">
              Ready to build your best project team?
            </h2>
            <p className="text-lg text-gray-400">
              Join the companies that already rely on our customized and
              effective approach to create teams tailored to their needs.
            </p>
            <Link className="ml-2 h-4 w-4" href="/pricing">
              <Button
                size="lg"
                className="bg-white text-black hover:bg-gray-100"
              >
                Start now
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

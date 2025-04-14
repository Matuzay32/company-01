'use client';

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
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_50%_50%,#ffffff21,transparent)]" />

        <Scene />

        {/* Hero Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative text-center max-w-4xl mx-auto space-y-6"
        >
          <h1 className="text-4xl md:text-7xl font-bold tracking-tight">
            We drive your dreams, we transform projects
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
            At Vortex Pulse, we turn every idea into a success story. From small
            startups to large-scale developments, we work with passion and
            excellence to bring your projects to life.
          </p>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
            Our commitment is to support you every step of the way: selecting
            the ideal talent, managing timelines, and optimizing processes to
            achieve extraordinary results.
          </p>
        </motion.div>
      </section>

      {/* Our Story Section */}
      <CustomSection mt="mt-40" bgColor="bg-gray-900">
        <section className="relative py-32">
          <div className="w-[90%] mx-auto miniEditor">
            <div
              className="relative mt-16 rounded-2xl border-slate-6 border h-auto pb-10"
              style={{
                background:
                  'radial-gradient(41.07% 8.33% at 50% 0%, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0) 100%), linear-gradient(rgb(16, 16, 16) 0%, rgba(0, 0, 0, 0.8) 100%)',
                maskImage:
                  'linear-gradient(rgb(0, 0, 0) 90%, rgba(0, 0, 0, 0) 100%)',
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
                  Our Essence
                </div>
              </div>

              {/* Mission & Vision Section */}
              <div className="mt-10 px-8 md:w-[60%] mx-auto text-white text-sm leading-relaxed space-y-8">
                <div>
                  <h3 className="text-xl font-bold mb-4">Mission</h3>
                  <p className="text-slate-4">
                    To inspire and empower businesses and entrepreneurs to
                    transform their ideas into high-impact projects, combining
                    technology, talent, and personalized strategies.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-4">Vision</h3>
                  <p className="text-slate-4">
                    To be the benchmark in project creation and management,
                    making a difference with innovation and commitment, and
                    becoming the strategic partner that drives growth and
                    transformation.
                  </p>
                </div>

                <div>
                  <p className="text-slate-4">
                    With a unique blend of experience, creativity, and
                    technology, at Vortex Pulse we take care of every detail,
                    from selecting the ideal team to implementing tailored
                    solutions.
                  </p>
                  <p className="mt-4 text-slate-4">
                    Our inspiration comes from the belief that, with passion and
                    determination, any challenge can become an opportunity for
                    success.
                  </p>
                </div>
              </div>

              {/* Our History Section */}
              <div className="mt-10 px-8 md:w-[60%] mx-auto text-white text-sm leading-relaxed space-y-8">
                <h3 className="text-xl font-bold mb-4">Our History</h3>
                <p className="text-slate-4">
                  We were born with the conviction that every idea has the
                  potential to revolutionize the market. Since our beginnings,
                  we have worked tirelessly to forge a path of innovation and
                  excellence.
                </p>

                <p className="text-slate-4">
                  Each project has allowed us to learn, grow, and perfect our
                  approach, combining talent, technology, and a clear vision of
                  the future.
                </p>

                <p className="mt-4 text-slate-4">
                  Today, Vortex Pulse is synonymous with commitment, quality,
                  and results that exceed expectations. We are driven by the
                  passion to turn challenges into success stories.
                </p>
              </div>
            </div>
          </div>
        </section>
      </CustomSection>

      {/* Our Core Values Section */}
      <CustomSection
        mt="mt-40"
        bgColor="bg-gray-900"
        gradientColor={['rgba(0, 128, 128, 0.67)', 'rgba(0, 200, 200, 0.67)']}
        height={['h-1']}
      >
        <section className="relative py-32">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl md:text-5xl font-bold">Our Values</h2>
              <p className="text-lg text-gray-400 mt-4">
                At Vortex Pulse, each value is the foundation of our commitment:
                innovation, excellence, and passion in every project.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              {[
                {
                  title: 'Innovation',
                  description:
                    'We reinvent processes and explore new ideas to turn every challenge into a unique opportunity.',
                },
                {
                  title: 'Excellence',
                  description:
                    'We strive to exceed expectations, ensuring quality and exceptional results in every project.',
                },
                {
                  title: 'Passion',
                  description:
                    'The energy and commitment of our team drive the transformation of ideas into impactful realities.',
                },
              ].map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-6 rounded-lg border border-white/10 bg-black/20"
                >
                  <h3 className="text-xl font-bold">{value.title}</h3>
                  <p className="text-gray-400 mt-2">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </CustomSection>

      {/* Our Expertise Section */}
      <CustomSection mt="mt-40" bgColor="bg-gray-900">
        <section className="relative py-32">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl md:text-5xl font-bold">Our Specialty</h2>
              <p className="text-lg text-gray-400 mt-4">
                We combine experience, technology, and creativity to offer
                comprehensive solutions that drive success.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              {[
                {
                  title: 'Software Development',
                  description:
                    'We create custom systems and applications that enhance the digital transformation of your business.',
                },
                {
                  title: 'Data Analysis',
                  description:
                    'We turn large volumes of data into strategic insights to drive smart decisions.',
                },
                {
                  title: 'UX/UI Design',
                  description:
                    'We design intuitive and engaging digital experiences that emotionally connect with users.',
                },
              ].map((expertise, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-6 rounded-lg border border-white/10 bg-black/20"
                >
                  <h3 className="text-xl font-bold">{expertise.title}</h3>
                  <p className="text-gray-400 mt-2">{expertise.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </CustomSection>

      {/* Why Choose Us Section */}
      <CustomSection mt="mt-40" bgColor="bg-gray-900">
        <section className="relative py-32">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl md:text-5xl font-bold">Why Choose Us?</h2>
              <p className="text-lg text-gray-400 mt-4">
                With Vortex Pulse, every challenge becomes an opportunity to
                innovate and grow. Our experience and commitment are the keys to
                success.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              {[
                {
                  title: 'Tailored Solutions',
                  description:
                    'We design personalized strategies that meet the unique needs of each client and project.',
                },
                {
                  title: 'Elite Team',
                  description:
                    'Our team of highly skilled professionals is ready to tackle any challenge with creativity and precision.',
                },
                {
                  title: 'Comprehensive Support',
                  description:
                    'We guide you every step of the way, ensuring constant follow-up and solutions that evolve alongside your business.',
                },
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-6 rounded-lg border border-white/10 bg-black/20"
                >
                  <h3 className="text-xl font-bold">{benefit.title}</h3>
                  <p className="text-gray-400 mt-2">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </CustomSection>

      {/* New Gallery Section */}
      <CustomSection mt="mt-40" bgColor="bg-gray-900">
        <section className="relative py-32">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl md:text-5xl font-bold">Our Technology</h2>
              <p className="text-lg text-gray-400 mt-4">
                Technology is the pillar that supports our innovative approach.
                With cutting-edge tools, we drive transformation and efficiency
                in every project.
              </p>
            </div>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {[
                {
                  image:
                    'https://images.unsplash.com/photo-1741174648069-4af442ef5238?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3',
                  title: 'Cloud Infrastructure',
                  description:
                    'Cloud-based solutions using services like AWS, ensuring stable and secure environments for your projects.',
                },
                {
                  image:
                    'https://images.unsplash.com/photo-1709625862607-8df400370d17?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3',
                  title: 'Smart Automation',
                  description:
                    'We integrate tools like ChatGPT and custom scripts to automate tasks and support better decision-making.',
                },
                {
                  image:
                    'https://plus.unsplash.com/premium_photo-1671829480432-9b0f10d869ef?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.0.3',
                  title: 'Custom Development',
                  description:
                    'Tailored tools and services built specifically to adapt to your needs and overcome technical challenges.',
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="rounded-lg overflow-hidden shadow-md"
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={800}
                    height={600}
                    className="object-cover w-full h-48 rounded-t-lg"
                  />

                  <div className="p-6 rounded-lg border border-white/10 bg-black/20">
                    <h3 className="text-xl font-semibold text-white">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-gray-400 text-sm">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </CustomSection>

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
              Ready to transform your vision into reality?
            </h2>
            <p className="text-lg text-gray-400">
              Take the leap towards innovation and growth. At Vortex Pulse, we
              support you every step of the way, building high-performance teams
              that take your projects to the next level.
            </p>
            <Link className="ml-2 h-4 w-4" href="/pricing">
              <Button
                size="lg"
                className="bg-white text-black hover:bg-gray-100"
              >
                Get Started Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

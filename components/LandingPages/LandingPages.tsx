import { Button } from '../ui/Buttons/v2/button';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function LandingPages() {
  const landingPageTypes = [
    {
      title: 'SaaS',
      description:
        'Showcase your software as a service with a clean, professional design.',
      examples: ['Feature overview', 'Pricing plans', 'User testimonials'],
    },
    {
      title: 'E-commerce',
      description:
        'Convert visitors into customers with optimized product layouts.',
      examples: ['Product catalog', 'Shopping cart', 'Checkout process'],
    },
    {
      title: 'Portfolio',
      description:
        'Display your work and skills with an elegant, minimal design.',
      examples: ['Project showcase', 'About me', 'Contact form'],
    },
    {
      title: 'Event',
      description: 'Promote your upcoming event and drive registrations.',
      examples: ['Event details', 'Speaker lineup', 'Registration form'],
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white selection:bg-white selection:text-black">
      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center justify-center pt-16">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-zinc-900 via-black to-black"></div>
        <div className="relative z-10 container px-4 md:px-6">
          <p className="text-sm uppercase tracking-widest text-zinc-400 text-center mb-8">
            The complete guide to
          </p>
          <h1 className="font-serif text-center text-7xl md:text-8xl lg:text-9xl tracking-tight mb-8">
            Landing Pages
          </h1>
          <p className="mt-8 text-lg text-zinc-400 max-w-2xl mx-auto text-center leading-relaxed">
            A comprehensive handbook for creating effective and beautiful
            landing pages for modern web applications.
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="container px-4 md:px-6 py-24">
        <h2 className="text-3xl md:text-4xl font-serif mb-12">
          Types of Landing Pages
        </h2>
        <div className="grid gap-8 md:grid-cols-2">
          {landingPageTypes.map((type, index) => (
            <div
              key={index}
              className="group border border-zinc-800 rounded-lg p-6 transition-all hover:border-zinc-700"
            >
              <h3 className="text-xl font-semibold mb-2">{type.title}</h3>
              <p className="text-zinc-400 mb-4">{type.description}</p>
              <ul className="space-y-2">
                {type.examples.map((example, i) => (
                  <li
                    key={i}
                    className="flex items-center text-sm text-zinc-500"
                  >
                    <ArrowRight className="h-4 w-4 mr-2 text-zinc-700" />
                    {example}
                  </li>
                ))}
              </ul>
              <Button
                variant="link"
                className="mt-4 p-0 h-auto text-white hover:text-zinc-300 transition-colors"
              >
                Learn more
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="border-t border-zinc-800">
        <div className="container px-4 md:px-6 py-24">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <h2 className="text-3xl md:text-4xl font-serif">
              Ready to create your landing page?
            </h2>
            <p className="text-zinc-400 max-w-[42rem] leading-normal sm:text-lg sm:leading-7">
              Explore our comprehensive guide and start building effective
              landing pages that convert.
            </p>
            <Button className="mt-4" size="lg">
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

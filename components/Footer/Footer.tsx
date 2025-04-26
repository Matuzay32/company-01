'use client';
import React, { useState } from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react';
import {
  FooterDropdownMenuItem,
  type FooterMenuItem,
} from './FooterDropdownMenuItem';

type MenuSection = {
  title: string;
  items: FooterMenuItem[];
};

const menus: Record<string, MenuSection> = {
  services: {
    title: 'Services',
    items: [
      { label: 'Landing Pages', href: '/services/landing-pages' },
      { label: 'Web Design', href: '/services/web-design' },
      { label: 'Web Development', href: '/services/web-development' },
      { label: 'Software Development', href: '/services/software-development' },
    ],
  },
  company: {
    title: 'Company',
    items: [
      { label: 'About', href: '/about' },
      { label: 'Staff Augmentation', href: '/services/staff-augmentation' },
      { label: 'Contact', href: '/contact' },
      { label: 'Pricing', href: '/pricing' },
    ],
  },
};

const socialLinks = [
  { Icon: Github, href: 'https://github.com/vortexpulse' },
  { Icon: Linkedin, href: 'https://linkedin.com/company/vortexpulse' },
  { Icon: Twitter, href: 'https://twitter.com/vortexpulse' },
];

export const Footer = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const currentYear = new Date().getFullYear();

  const toggleDropdown = (menu: string) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };

  const closeDropdowns = () => {
    setActiveDropdown(null);
  };

  return (
    <footer className="w-full bg-black text-white border-t border-gray-800 relative overflow-hidden">
      {/* SVG Grid Pattern */}
      <svg
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="grid"
            width="20"
            height="20"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 20 0 L 0 0 0 20"
              fill="none"
              stroke="rgba(255,255,255,0.05)"
              strokeWidth="1"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>

      {/* Footer content with backdrop filter */}
      <div className="relative backdrop-blur-sm bg-black bg-opacity-70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-wrap gap-8 justify-between">
            {/* Column 1 and 2 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full md:w-3/4">
              {/* Column 1: Logo and description */}
              <div className="space-y-4">
                <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                  VortexPulse
                </h2>
                <p className="text-sm text-gray-300">
                  Driving digital innovation with cutting-edge solutions. We
                  transform ideas into extraordinary technological realities.
                </p>
              </div>

              {/* Column 2: Quick Links with Dropdowns */}
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-cyan-300">
                  Quick Links
                </h3>
                <div className="space-y-4">
                  {Object.entries(menus).map(([key, { title, items }]) => (
                    <FooterDropdownMenuItem
                      key={key}
                      label={title}
                      menuKey={key}
                      items={items}
                      activeDropdown={activeDropdown}
                      toggleDropdown={toggleDropdown}
                      closeDropdowns={closeDropdowns}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Column 3: Social Links */}
            {/* <div className="w-full md:w-auto">
              <h3 className="text-lg font-semibold mb-4 text-cyan-300">
                Connect with us
              </h3>
              <div className="flex space-x-4">
                {socialLinks.map(({ Icon, href }, index) => (
                  <a
                    key={index}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transform hover:scale-110 transition-transform"
                  >
                    <Icon className="h-6 w-6 text-gray-300 hover:text-cyan-300 transition-colors" />
                  </a>
                ))}
              </div>
            </div> */}
          </div>

          {/* Copyright */}
          <div className="mt-8 pt-8 border-t border-gray-700 text-center">
            <p className="text-sm text-gray-400">
              © {currentYear} VortexPulse. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

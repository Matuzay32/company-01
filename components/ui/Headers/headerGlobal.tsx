'use client';
import Link from 'next/link';

import {
  CardItem,
  DesktopDropdownMenuItem,
} from '../Dropdowns/DesktopDropdownManuItem';
import React, { useState, useEffect } from 'react';

import { ChevronDown } from 'lucide-react';
import { MenuItem } from '../Dropdowns/MobileDropdownMenuItem';

type MenuSection = {
  title?: string;
  items: MenuItem[];
};

type DropdownMenu = {
  sections: MenuSection[];
  cards?: CardItem[];
};

const menus: Record<string, DropdownMenu> = {
  services: {
    sections: [
      {
        items: [
          { label: 'Landing Pages', href: '/services/landing-pages' },
          { label: 'Web Desing', href: '/services/web-desing' },
          { label: 'Web Development', href: '/services/web-development' },
          {
            label: 'Software Development',
            href: '/services/software-development',
          },
        ],
      },
    ],
    cards: [
      {
        title: 'Transactional Emails',
        description: 'Send with confidence',
        href: '#',
        icon: '',
      },
      {
        title: 'Marketing Emails',
        description: 'Reach your audience',
        href: '#',
        icon: '',
      },
    ],
  },
  company: {
    sections: [
      {
        items: [
          { label: 'About', href: '/about' },
          { label: 'Staff Augmentation', href: '/services/staff-augmentation' },
        ],
      },
    ],
    cards: [
      {
        title: 'Handbook',
        description: 'How we work',
        href: '#',
        icon: '',
      },
      {
        title: 'Philosophy',
        description: 'What we value',
        href: '#',
        icon: '',
      },
    ],
  },
};

const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

function HeaderGlobal() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [activeMobileDropdown, setActiveMobileDropdown] = useState<
    string | null
  >(null);

  const toggleDropdown = (menu: string) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };

  const toggleMobileDropdown = (menu: string) => {
    setActiveMobileDropdown(activeMobileDropdown === menu ? null : menu);
  };

  const closeDropdowns = () => {
    setActiveDropdown(null);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setActiveMobileDropdown(null);
    setActiveDropdown(null);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('[data-dropdown]')) {
        closeDropdowns();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="fixed w-full bg-black/30 backdrop-blur-md z-50 border-b border-gray-600/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-white font-bold text-xl">
              Vortex Pulse
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {Object.entries(menus).map(([key, { sections, cards }]) => (
              <DesktopDropdownMenuItem
                key={key}
                label={capitalize(key)}
                menuKey={key}
                items={sections[0].items}
                cards={cards}
                activeDropdown={activeDropdown}
                toggleDropdown={toggleDropdown}
                closeDropdowns={closeDropdowns}
              />
            ))}
            <a
              href="/pricing"
              className="px-3 py-2 rounded-md text-sm text-gray-300 hover:text-white"
            >
              Pricing
            </a>
          </nav>

          {/* Desktop Authentication Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="/contact"
              className="bg-white text-black px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-100 transition-colors flex items-center gap-1"
            >
              Get in Touch
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M6 12L10 8L6 4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-black"
              aria-controls="mobile-menu"
              aria-expanded={mobileMenuOpen}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div
          className="md:hidden bg-black border-t border-gray-800"
          id="mobile-menu"
        >
          <div className="container mx-auto px-4 py-3 space-y-1">
            {Object.entries(menus).map(([key, { sections }]) => (
              <div key={key} className="space-y-1">
                <button
                  onClick={() => toggleMobileDropdown(key)}
                  className="w-full flex items-center justify-between px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-gray-800 hover:text-white"
                >
                  <span>{capitalize(key)}</span>
                  <ChevronDown
                    size={16}
                    className={`transition-transform ${
                      activeMobileDropdown === key ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {activeMobileDropdown === key && (
                  <div className="pl-4 space-y-1 border-l-2 border-gray-800 ml-3">
                    {sections[0].items.map((item, idx) => (
                      <a
                        key={idx}
                        href={item.href}
                        className="block px-3 py-2 rounded-md text-sm text-gray-400 hover:bg-gray-800 hover:text-white"
                        onClick={closeMobileMenu}
                      >
                        {item.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <a
              href="/pricing"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-gray-800 hover:text-white"
              onClick={closeMobileMenu}
            >
              Pricing
            </a>
            {/* Mobile Authentication Buttons */}
            <div className="mt-3 space-y-1">
              <a
                href="/contact"
                className="block px-3 py-2 bg-white text-black rounded-md text-base font-medium hover:bg-gray-100 transition-colors"
                onClick={closeMobileMenu}
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default HeaderGlobal;

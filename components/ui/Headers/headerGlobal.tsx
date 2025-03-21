'use client';

import type React from 'react';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';

// Tipos para el menú
type MenuItem = {
  label: string;
  href: string;
};

type CardItem = {
  title: string;
  description: string;
  href: string;
  icon: React.ReactNode;
};

type MenuSection = {
  title?: string;
  items: MenuItem[];
};

type DropdownMenu = {
  sections: MenuSection[];
  cards?: CardItem[];
};

// Contenido de los menús
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
          { label: 'Contact', href: '/contact' },
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
  resources: {
    sections: [
      {
        items: [
          { label: 'Changelog', href: '#' },
          { label: 'Status', href: '#' },
          { label: 'Support', href: '#' },
          { label: 'Security', href: '#' },
        ],
      },
    ],
    cards: [
      {
        title: 'Resource Center',
        description: 'Guides & tutorials',
        href: '#',
        icon: '',
      },
    ],
  },
  docs: {
    sections: [
      {
        items: [
          { label: 'Getting Started', href: '#' },
          { label: 'API Reference', href: '#' },
          { label: 'SDKs', href: '#' },
          { label: 'Guides', href: '#' },
        ],
      },
    ],
    cards: [
      {
        title: 'Documentation',
        description: 'Learn how to integrate',
        href: '#',
        icon: '',
      },
    ],
  },
};

// Componente para renderizar la tarjeta (card) de cada menú
const MenuCard = ({ card }: { card: CardItem }) => {
  return (
    <Link
      href={card.href}
      className="flex items-start space-x-3 p-3 rounded-md hover:bg-gray-800/50 transition-colors"
    >
      <div className="flex-shrink-0 p-2 bg-gray-800 rounded-md">
        {card.icon}
      </div>
      <div>
        <h3 className="font-medium text-white">{card.title}</h3>
        <p className="text-sm text-gray-400">{card.description}</p>
      </div>
    </Link>
  );
};

// Componente genérico para el dropdown en escritorio
type DesktopDropdownProps = {
  label: string;
  menuKey: string;
  items: MenuItem[];
  cards?: CardItem[];
  activeDropdown: string | null;
  toggleDropdown: (menu: string) => void;
  closeDropdowns: () => void;
};

const DesktopDropdownMenuItem = ({
  label,
  menuKey,
  items,
  cards,
  activeDropdown,
  toggleDropdown,
  closeDropdowns,
}: DesktopDropdownProps) => {
  return (
    <div className="relative group" data-dropdown>
      <button
        className="px-3 py-2 rounded-md text-sm text-gray-300 hover:text-white flex items-center gap-1"
        onClick={() => toggleDropdown(menuKey)}
        onMouseEnter={() => toggleDropdown(menuKey)}
      >
        {label}
        <ChevronDown
          size={16}
          className={`transition-transform ${
            activeDropdown === menuKey ? 'rotate-180' : ''
          }`}
        />
      </button>
      {activeDropdown === menuKey && (
        <div
          className="absolute left-0 mt-2 w-[480px] rounded-md shadow-lg bg-black border border-gray-700 ring-1 ring-black ring-opacity-5 focus:outline-none overflow-hidden"
          onMouseLeave={closeDropdowns}
        >
          <div className="flex">
            <div className="w-1/2 py-4 px-4 border-r border-gray-600/50">
              <div className="space-y-1">
                {items.map((item, idx) => (
                  <Link
                    key={idx}
                    href={item.href}
                    className="block px-3 py-2 rounded-md text-sm text-gray-300 hover:bg-gray-800 hover:text-white"
                    onClick={closeDropdowns}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
            {cards && (
              <div className="w-1/2 py-4 px-4 space-y-2">
                {cards.map((card, idx) => (
                  <MenuCard key={idx} card={card} />
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

// Componente genérico para el dropdown en móvil
type MobileDropdownProps = {
  label: string;
  menuKey: string;
  items: MenuItem[];
  activeDropdown: string | null;
  toggleDropdown: (menu: string) => void;
  closeMobileMenu: () => void;
};

const MobileDropdownMenuItem = ({
  label,
  menuKey,
  items,
  activeDropdown,
  toggleDropdown,
  closeMobileMenu,
}: MobileDropdownProps) => {
  return (
    <div>
      <button
        className="w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-gray-800 hover:text-white flex items-center justify-between"
        onClick={(e) => {
          toggleDropdown(menuKey);
        }}
      >
        {label}
        <ChevronDown
          size={16}
          className={`transition-transform ${
            activeDropdown === menuKey ? 'rotate-180' : ''
          }`}
        />
      </button>
      {activeDropdown === menuKey && (
        <div className="pl-4 pr-2 py-2 space-y-1">
          {items.map((item, idx) => (
            <Link
              key={idx}
              href={item.href}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:bg-gray-800 hover:text-white"
              onClick={(e) => {
                closeMobileMenu();
              }}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

// Función de utilidad para capitalizar la primera letra
const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleDropdown = (menu: string) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };

  const closeDropdowns = () => {
    setActiveDropdown(null);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  };

  // Cerrar dropdowns al hacer clic fuera
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

          {/* Navegación de escritorio */}
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
            <Link
              href="/pricing"
              className="px-3 py-2 rounded-md text-sm text-gray-300 hover:text-white"
            >
              Pricing
            </Link>
          </nav>

          {/* Botones de autenticación en escritorio */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="#" className="text-sm text-gray-300 hover:text-white">
              Sign in
            </Link>
            <Link
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
            </Link>
          </div>

          {/* Botón para menú móvil */}
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

      {/* Menú móvil */}
      {mobileMenuOpen && (
        <div
          className="md:hidden bg-black border-t border-gray-800"
          id="mobile-menu"
        >
          <div className="container mx-auto px-4 py-3 space-y-1">
            {Object.entries(menus).map(([key, { sections }]) => (
              <MobileDropdownMenuItem
                key={key}
                label={capitalize(key)}
                menuKey={key}
                items={sections[0].items}
                activeDropdown={activeDropdown}
                toggleDropdown={toggleDropdown}
                closeMobileMenu={closeMobileMenu}
              />
            ))}
            <Link
              href="/pricing"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-gray-800 hover:text-white"
              onClick={closeMobileMenu}
            >
              Pricing
            </Link>
            {/* Botones de autenticación en móvil */}
            <div className="mt-3 space-y-1">
              <Link
                href="#"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-gray-800 hover:text-white"
                onClick={closeMobileMenu}
              >
                Sign in
              </Link>
              <Link
                href="/contact"
                className="block px-3 py-2 bg-white text-black rounded-md text-base font-medium hover:bg-gray-100 transition-colors"
                onClick={closeMobileMenu}
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

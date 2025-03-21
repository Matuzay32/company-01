'use client';

import type React from 'react';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';

// Define dropdown menu types
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

// SVG Icons for cards
const CubeIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 2L2 7L12 12L22 7L12 2Z"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M2 17L12 22L22 17"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M2 12L12 17L22 12"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const DiceIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="3"
      y="3"
      width="18"
      height="18"
      rx="2"
      stroke="white"
      strokeWidth="1.5"
    />
    <circle cx="8" cy="8" r="1" fill="white" />
    <circle cx="16" cy="16" r="1" fill="white" />
    <circle cx="16" cy="8" r="1" fill="white" />
    <circle cx="8" cy="16" r="1" fill="white" />
    <circle cx="12" cy="12" r="1" fill="white" />
  </svg>
);

const EmailIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="2"
      y="4"
      width="20"
      height="16"
      rx="2"
      stroke="white"
      strokeWidth="1.5"
    />
    <path
      d="M2 8L10.2 14.4C11.2667 15.2 12.7333 15.2 13.8 14.4L22 8"
      stroke="white"
      strokeWidth="1.5"
    />
  </svg>
);

const MarketingIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M16 8H8V16H16V8Z"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M3 16L3 8"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M21 12L21 16"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M21 8L21 9"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 3L8 3"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M16 3L15 3"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 21L16 21"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8 21L9 21"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const DocsIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M14 2V8H20"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M16 13H8"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M16 17H8"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10 9H9H8"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ResourceIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 6V12L16 14"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="1.5" />
  </svg>
);

// Define dropdown menus content
const menus: Record<string, DropdownMenu> = {
  services: {
    sections: [
      {
        items: [
          { label: 'Landing Pages', href: '/services/landing-pages' },
          { label: 'Web Desing ', href: '/services/web-desing' },
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
        icon: <EmailIcon />,
      },
      {
        title: 'Marketing Emails',
        description: 'Reach your audience',
        href: '#',
        icon: <MarketingIcon />,
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
          // { label: 'Customers', href: '#' },
        ],
      },
    ],
    cards: [
      {
        title: 'Handbook',
        description: 'How we work',
        href: '#',
        icon: <CubeIcon />,
      },
      {
        title: 'Philosophy',
        description: 'What we value',
        href: '#',
        icon: <DiceIcon />,
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
        icon: <ResourceIcon />,
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
        icon: <DocsIcon />,
      },
    ],
  },
};

// Card component for dropdown menus
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

// Logo component
const ResendLogo = () => (
  <svg
    width="100"
    height="24"
    viewBox="0 0 100 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M11.5 4H20.5C21.3284 4 22 4.67157 22 5.5V18.5C22 19.3284 21.3284 20 20.5 20H3.5C2.67157 20 2 19.3284 2 18.5V5.5C2 4.67157 2.67157 4 3.5 4H7.5"
      stroke="white"
      strokeWidth="2"
    />
    <path d="M7 12H17" stroke="white" strokeWidth="2" />
    <path d="M12 7L12 17" stroke="white" strokeWidth="2" />
    <path
      d="M35.048 17V7.4H38.584C39.4 7.4 40.104 7.552 40.696 7.856C41.288 8.16 41.744 8.584 42.064 9.128C42.384 9.672 42.544 10.304 42.544 11.024C42.544 11.744 42.384 12.376 42.064 12.92C41.744 13.464 41.288 13.888 40.696 14.192C40.104 14.496 39.4 14.648 38.584 14.648H36.232L37.24 13.64V17H35.048ZM37.24 14.072L36.232 13.016H38.44C39.064 13.016 39.536 12.864 39.856 12.56C40.176 12.256 40.336 11.808 40.336 11.216C40.336 10.624 40.176 10.176 39.856 9.872C39.536 9.568 39.064 9.416 38.44 9.416H36.232L37.24 8.36V14.072Z"
      fill="white"
    />
    <path
      d="M48.8148 17.144C47.8708 17.144 47.0308 16.936 46.2948 16.52C45.5588 16.104 44.9748 15.528 44.5428 14.792C44.1108 14.056 43.8948 13.216 43.8948 12.272C43.8948 11.328 44.1108 10.488 44.5428 9.752C44.9748 9.016 45.5588 8.44 46.2948 8.024C47.0308 7.608 47.8708 7.4 48.8148 7.4C49.7588 7.4 50.5988 7.608 51.3348 8.024C52.0708 8.44 52.6548 9.016 53.0868 9.752C53.5188 10.488 53.7348 11.328 53.7348 12.272C53.7348 13.216 53.5188 14.056 53.0868 14.792C52.6548 15.528 52.0708 16.104 51.3348 16.52C50.5988 16.936 49.7588 17.144 48.8148 17.144ZM48.8148 15.128C49.3908 15.128 49.8948 14.992 50.3268 14.72C50.7588 14.448 51.0948 14.072 51.3348 13.592C51.5748 13.112 51.6948 12.544 51.6948 11.888C51.6948 11.232 51.5748 10.664 51.3348 10.184C51.0948 9.704 50.7588 9.328 50.3268 9.056C49.8948 8.784 49.3908 8.648 48.8148 8.648C48.2388 8.648 47.7348 8.784 47.3028 9.056C46.8708 9.328 46.5348 9.704 46.2948 10.184C46.0548 10.664 45.9348 11.232 45.9348 11.888C45.9348 12.544 46.0548 13.112 46.2948 13.592C46.5348 14.072 46.8708 14.448 47.3028 14.72C47.7348 14.992 48.2388 15.128 48.8148 15.128Z"
      fill="white"
    />
    <path
      d="M60.4018 17.144C59.4578 17.144 58.6178 16.936 57.8818 16.52C57.1458 16.104 56.5618 15.528 56.1298 14.792C55.6978 14.056 55.4818 13.216 55.4818 12.272C55.4818 11.328 55.6978 10.488 56.1298 9.752C56.5618 9.016 57.1458 8.44 57.8818 8.024C58.6178 7.608 59.4578 7.4 60.4018 7.4C61.3458 7.4 62.1858 7.608 62.9218 8.024C63.6578 8.44 64.2418 9.016 64.6738 9.752C65.1058 10.488 65.3218 11.328 65.3218 12.272C65.3218 13.216 65.1058 14.056 64.6738 14.792C64.2418 15.528 63.6578 16.104 62.9218 16.52C62.1858 16.936 61.3458 17.144 60.4018 17.144ZM60.4018 15.128C60.9778 15.128 61.4818 14.992 61.9138 14.72C62.3458 14.448 62.6818 14.072 62.9218 13.592C63.1618 13.112 63.2818 12.544 63.2818 11.888C63.2818 11.232 63.1618 10.664 62.9218 10.184C62.6818 9.704 62.3458 9.328 61.9138 9.056C61.4818 8.784 60.9778 8.648 60.4018 8.648C59.8258 8.648 59.3218 8.784 58.8898 9.056C58.4578 9.328 58.1218 9.704 57.8818 10.184C57.6418 10.664 57.5218 11.232 57.5218 11.888C57.5218 12.544 57.6418 13.112 57.8818 13.592C58.1218 14.072 58.4578 14.448 58.8898 14.72C59.3218 14.992 59.8258 15.128 60.4018 15.128Z"
      fill="white"
    />
    <path
      d="M67.0688 17V7.4H69.2608V11.36H69.0688L73.0288 7.4H75.7088L71.5328 11.6L75.9968 17H73.2208L69.7408 12.68H69.2608V17H67.0688Z"
      fill="white"
    />
    <path
      d="M77.3788 17V7.4H84.9548V9.416H79.5708V11.12H84.4268V13.136H79.5708V14.984H84.9548V17H77.3788Z"
      fill="white"
    />
    <path d="M91.3748 17V7.4H93.5668V14.984H98.5988V17H91.3748Z" fill="white" />
  </svg>
);

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleDropdown = (menu: string) => {
    if (activeDropdown === menu) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(menu);
    }
  };

  const closeDropdowns = () => {
    setActiveDropdown(null);
  };

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('[data-dropdown]')) {
        closeDropdowns();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header className="fixed w-full bg-black/30 backdrop-blur-md z-50 border-b border-gray-600/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-white font-bold text-xl">
              <div>Vortex Pulse</div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {/* Features Dropdown */}
            <div className="relative group" data-dropdown>
              <button
                className="px-3 py-2 rounded-md text-sm text-gray-300 hover:text-white flex items-center gap-1"
                onClick={() => toggleDropdown('services')}
                onMouseEnter={() => setActiveDropdown('services')}
              >
                Services
                <ChevronDown
                  size={16}
                  className={`transition-transform ${
                    activeDropdown === 'services' ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {activeDropdown === 'services' && (
                <div
                  className="absolute left-0 mt-2 w-[480px] rounded-md shadow-lg bg-black border border-gray-700 ring-1 ring-black ring-opacity-5 focus:outline-none overflow-hidden"
                  onMouseLeave={closeDropdowns}
                >
                  <div className="flex">
                    <div className="w-1/2 py-4 px-4 border-r border-gray-600/50">
                      <div className="space-y-1">
                        {menus.services.sections[0].items.map(
                          (item, itemIdx) => (
                            <Link
                              key={itemIdx}
                              href={item.href}
                              className="block px-3 py-2 rounded-md text-sm text-gray-300 hover:bg-gray-800 hover:text-white"
                              onClick={closeDropdowns}
                            >
                              {item.label}
                            </Link>
                          )
                        )}
                      </div>
                    </div>
                    <div className="w-1/2 py-4 px-4 space-y-2">
                      {menus.services.cards?.map((card, idx) => (
                        <MenuCard key={idx} card={card} />
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Company Dropdown */}
            <div className="relative group" data-dropdown>
              <button
                className="px-3 py-2 rounded-md text-sm text-gray-300 hover:text-white flex items-center gap-1"
                onClick={() => toggleDropdown('company')}
                onMouseEnter={() => setActiveDropdown('company')}
              >
                Company
                <ChevronDown
                  size={16}
                  className={`transition-transform ${
                    activeDropdown === 'company' ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {activeDropdown === 'company' && (
                <div
                  className="absolute left-0 mt-2 w-[480px] rounded-md shadow-lg bg-black border border-gray-700 ring-1 ring-black ring-opacity-5 focus:outline-none overflow-hidden"
                  onMouseLeave={closeDropdowns}
                >
                  <div className="flex">
                    <div className="w-1/2 py-4 px-4 border-r border-gray-800">
                      <div className="space-y-1">
                        {menus.company.sections[0].items.map(
                          (item, itemIdx) => (
                            <Link
                              key={itemIdx}
                              href={item.href}
                              className="block px-3 py-2 rounded-md text-sm text-gray-300 hover:bg-gray-800 hover:text-white"
                              onClick={closeDropdowns}
                            >
                              {item.label}
                            </Link>
                          )
                        )}
                      </div>
                    </div>
                    <div className="w-1/2 py-4 px-4 space-y-2">
                      {menus.company.cards?.map((card, idx) => (
                        <MenuCard key={idx} card={card} />
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Resources Dropdown */}
            <div className="relative group" data-dropdown>
              <button
                className="px-3 py-2 rounded-md text-sm text-gray-300 hover:text-white flex items-center gap-1"
                onClick={() => toggleDropdown('resources')}
                onMouseEnter={() => setActiveDropdown('resources')}
              >
                Resources
                <ChevronDown
                  size={16}
                  className={`transition-transform ${
                    activeDropdown === 'resources' ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {activeDropdown === 'resources' && (
                <div
                  className="absolute left-0 mt-2 w-[480px] rounded-md shadow-lg bg-black border border-gray-700 ring-1 ring-black ring-opacity-5 focus:outline-none overflow-hidden"
                  onMouseLeave={closeDropdowns}
                >
                  <div className="flex">
                    <div className="w-1/2 py-4 px-4 border-r border-gray-800">
                      <div className="space-y-1">
                        {menus.resources.sections[0].items.map(
                          (item, itemIdx) => (
                            <Link
                              key={itemIdx}
                              href={item.href}
                              className="block px-3 py-2 rounded-md text-sm text-gray-300 hover:bg-gray-800 hover:text-white"
                              onClick={closeDropdowns}
                            >
                              {item.label}
                            </Link>
                          )
                        )}
                      </div>
                    </div>
                    <div className="w-1/2 py-4 px-4 space-y-2">
                      {menus.resources.cards?.map((card, idx) => (
                        <MenuCard key={idx} card={card} />
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Docs Dropdown */}
            <div className="relative group" data-dropdown>
              <button
                className="px-3 py-2 rounded-md text-sm text-gray-300 hover:text-white flex items-center gap-1"
                onClick={() => toggleDropdown('docs')}
                onMouseEnter={() => setActiveDropdown('docs')}
              >
                Docs
                <ChevronDown
                  size={16}
                  className={`transition-transform ${
                    activeDropdown === 'docs' ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {activeDropdown === 'docs' && (
                <div
                  className="absolute left-0 mt-2 w-[480px] rounded-md shadow-lg bg-black border border-gray-700 ring-1 ring-black ring-opacity-5 focus:outline-none overflow-hidden"
                  onMouseLeave={closeDropdowns}
                >
                  <div className="flex">
                    <div className="w-1/2 py-4 px-4 border-r border-gray-800">
                      <div className="space-y-1">
                        {menus.docs.sections[0].items.map((item, itemIdx) => (
                          <Link
                            key={itemIdx}
                            href={item.href}
                            className="block px-3 py-2 rounded-md text-sm text-gray-300 hover:bg-gray-800 hover:text-white"
                            onClick={closeDropdowns}
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                    <div className="w-1/2 py-4 px-4 space-y-2">
                      {menus.docs.cards?.map((card, idx) => (
                        <MenuCard key={idx} card={card} />
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Pricing */}
            <Link
              href="/pricing"
              className="px-3 py-2 rounded-md text-sm text-gray-300 hover:text-white"
            >
              Pricing
            </Link>
          </nav>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="#" className="text-sm text-gray-300 hover:text-white">
              Sign in
            </Link>
            <Link
              href="#"
              className="bg-white text-black px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-100 transition-colors flex items-center gap-1"
            >
              Get Started
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
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

          {/* Mobile menu button */}
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
                  aria-hidden="true"
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
                  aria-hidden="true"
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

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div
          className="md:hidden bg-black border-t border-gray-800"
          id="mobile-menu"
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            {/* Features */}
            <div>
              <button
                className="w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-gray-800 hover:text-white flex items-center justify-between"
                onClick={() => toggleDropdown('services')}
              >
                Services
                <ChevronDown
                  size={16}
                  className={`transition-transform ${
                    activeDropdown === 'services' ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {activeDropdown === 'services' && (
                <div className="pl-4 pr-2 py-2 space-y-1">
                  {/* Regular menu items */}
                  {menus.services.sections[0].items.map((item, idx) => (
                    <Link
                      key={idx}
                      href={item.href}
                      className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:bg-gray-800 hover:text-white"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}

                  {/* Card items for mobile */}
                  <div className="mt-4 space-y-3">
                    {menus.services.cards?.map((card, idx) => (
                      <Link
                        key={idx}
                        href={card.href}
                        className="flex items-start space-x-3 p-3 rounded-md bg-gray-800/30 hover:bg-gray-800/50 transition-colors"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <div className="flex-shrink-0 p-2 bg-gray-800 rounded-md">
                          {card.icon}
                        </div>
                        <div>
                          <h3 className="font-medium text-white">
                            {card.title}
                          </h3>
                          <p className="text-sm text-gray-400">
                            {card.description}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Company */}
            <div>
              <button
                className="w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-gray-800 hover:text-white flex items-center justify-between"
                onClick={() => toggleDropdown('company')}
              >
                Company
                <ChevronDown
                  size={16}
                  className={`transition-transform ${
                    activeDropdown === 'company' ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {activeDropdown === 'company' && (
                <div className="pl-4 pr-2 py-2 space-y-1">
                  {/* Regular menu items */}
                  {menus.company.sections[0].items.map((item, idx) => (
                    <Link
                      key={idx}
                      href={item.href}
                      className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:bg-gray-800 hover:text-white"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}

                  {/* Card items for mobile */}
                  <div className="mt-4 space-y-3">
                    {menus.company.cards?.map((card, idx) => (
                      <Link
                        key={idx}
                        href={card.href}
                        className="flex items-start space-x-3 p-3 rounded-md bg-gray-800/30 hover:bg-gray-800/50 transition-colors"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <div className="flex-shrink-0 p-2 bg-gray-800 rounded-md">
                          {card.icon}
                        </div>
                        <div>
                          <h3 className="font-medium text-white">
                            {card.title}
                          </h3>
                          <p className="text-sm text-gray-400">
                            {card.description}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Resources */}
            <div>
              <button
                className="w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-gray-800 hover:text-white flex items-center justify-between"
                onClick={() => toggleDropdown('resources')}
              >
                Resources
                <ChevronDown
                  size={16}
                  className={`transition-transform ${
                    activeDropdown === 'resources' ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {activeDropdown === 'resources' && (
                <div className="pl-4 pr-2 py-2 space-y-1">
                  {/* Regular menu items */}
                  {menus.resources.sections[0].items.map((item, idx) => (
                    <Link
                      key={idx}
                      href={item.href}
                      className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:bg-gray-800 hover:text-white"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}

                  {/* Card items for mobile */}
                  <div className="mt-4 space-y-3">
                    {menus.resources.cards?.map((card, idx) => (
                      <Link
                        key={idx}
                        href={card.href}
                        className="flex items-start space-x-3 p-3 rounded-md bg-gray-800/30 hover:bg-gray-800/50 transition-colors"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <div className="flex-shrink-0 p-2 bg-gray-800 rounded-md">
                          {card.icon}
                        </div>
                        <div>
                          <h3 className="font-medium text-white">
                            {card.title}
                          </h3>
                          <p className="text-sm text-gray-400">
                            {card.description}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Docs */}
            <div>
              <button
                className="w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-gray-800 hover:text-white flex items-center justify-between"
                onClick={() => toggleDropdown('docs')}
              >
                Docs
                <ChevronDown
                  size={16}
                  className={`transition-transform ${
                    activeDropdown === 'docs' ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {activeDropdown === 'docs' && (
                <div className="pl-4 pr-2 py-2 space-y-1">
                  {/* Regular menu items */}
                  {menus.docs.sections[0].items.map((item, idx) => (
                    <Link
                      key={idx}
                      href={item.href}
                      className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:bg-gray-800 hover:text-white"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}

                  {/* Card items for mobile */}
                  <div className="mt-4 space-y-3">
                    {menus.docs.cards?.map((card, idx) => (
                      <Link
                        key={idx}
                        href={card.href}
                        className="flex items-start space-x-3 p-3 rounded-md bg-gray-800/30 hover:bg-gray-800/50 transition-colors"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <div className="flex-shrink-0 p-2 bg-gray-800 rounded-md">
                          {card.icon}
                        </div>
                        <div>
                          <h3 className="font-medium text-white">
                            {card.title}
                          </h3>
                          <p className="text-sm text-gray-400">
                            {card.description}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Pricing */}
            <Link
              href="#"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-gray-800 hover:text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              Pricing
            </Link>

            {/* Auth Buttons */}
            <div className="pt-4 pb-3 border-t border-gray-800">
              <div className="px-3 space-y-3">
                <Link
                  href="#"
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-gray-800 hover:text-white"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Sign in
                </Link>
                <Link
                  href="#"
                  className="block w-full bg-white text-black px-4 py-2 rounded-full text-base font-medium text-center hover:bg-gray-100 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

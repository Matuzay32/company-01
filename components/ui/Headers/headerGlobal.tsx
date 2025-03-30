"use client";

import {
  CardItem,
  DesktopDropdownMenuItem,
} from "../Dropdowns/DesktopDropdownManuItem";
import { useEffect, useState } from "react";

import Link from "next/link";
import { MenuItem } from "../Dropdowns/MobileDropdownMenuItem";
import type React from "react";

// Tipos para el menú
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
          { label: "Landing Pages", href: "/services/landing-pages" },
          { label: "Web Desing", href: "/services/web-desing" },
          { label: "Web Development", href: "/services/web-development" },
          {
            label: "Software Development",
            href: "/services/software-development",
          },
        ],
      },
    ],
    cards: [
      {
        title: "Transactional Emails",
        description: "Send with confidence",
        href: "#",
        icon: "",
      },
      {
        title: "Marketing Emails",
        description: "Reach your audience",
        href: "#",
        icon: "",
      },
    ],
  },
  company: {
    sections: [
      {
        items: [
          { label: "About", href: "/about" },
          { label: "Staff Augmentation", href: "/services/staff-augmentation" },
        ],
      },
    ],
    cards: [
      {
        title: "Handbook",
        description: "How we work",
        href: "#",
        icon: "",
      },
      {
        title: "Philosophy",
        description: "What we value",
        href: "#",
        icon: "",
      },
    ],
  },
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
    //setMobileMenuOpen(false);
    setActiveDropdown(null);
  };

  // Cerrar dropdowns al hacer clic fuera
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest("[data-dropdown]")) {
        closeDropdowns();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
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
            <Link
              href="/services/landing-pages"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-gray-800 hover:text-white"
              onClick={closeMobileMenu}
            >
              Landing pages
            </Link>
            <Link
              href="/services/web-desing"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-gray-800 hover:text-white"
              onClick={closeMobileMenu}
            >
              Web Design
            </Link>
            <Link
              href="/services/web-development"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-gray-800 hover:text-white"
              onClick={closeMobileMenu}
            >
              Web Development
            </Link>
            <Link
              href="/services/software-development"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-gray-800 hover:text-white"
              onClick={closeMobileMenu}
            >
              Software Development
            </Link>
            <Link
              href="/about"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-gray-800 hover:text-white"
              onClick={closeMobileMenu}
            >
              About
            </Link>
            <Link
              href="/services/staff-augmentation"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-gray-800 hover:text-white"
              onClick={closeMobileMenu}
            >
              Staff Augmentation
            </Link>
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

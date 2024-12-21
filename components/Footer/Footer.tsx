"use client";

import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from "react-icons/ai";

import Link from "next/link";
import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { name: "Inicio", href: "/" },
    { name: "Servicios", href: "/services" },
    { name: "Sobre Nosotros", href: "/about" },
    { name: "Contacto", href: "/contact" },
    { name: "Pricing", href: "/pricing" },
  ];

  const socialLinks = [
    { Icon: AiFillGithub, href: "https://github.com/vortexpulse" },
    { Icon: AiFillLinkedin, href: "https://linkedin.com/company/vortexpulse" },
    { Icon: AiFillTwitterCircle, href: "https://twitter.com/vortexpulse" },
  ];

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

      {/* Contenido del footer con backdrop-filter */}
      <div className="relative backdrop-blur-sm bg-black bg-opacity-70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex justify-between">
            {/**Column 1 and 2 container */}
            <div className="grid grid-cols-2 w-3/4 gap-10">
              {/* Columna 1: Logo y descripción */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-4"
              >
                <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                  VortexPulse
                </h2>
                <p className="text-sm text-gray-300">
                  Driving digital innovation with cutting-edge solutions. We
                  transform ideas into extraordinary technological realities.
                </p>
              </motion.div>

              {/* Columna 2: Enlaces rápidos */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h3 className="text-lg font-semibold mb-4 text-cyan-300">
                  Quick Links
                </h3>
                <ul className="space-y-2">
                  {footerLinks.map((link, index) => (
                    <motion.li
                      key={link.name}
                      whileHover={{ scale: 1.05, x: 10 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Link
                        href={link.href}
                        className="hover:text-cyan-300 transition-colors"
                      >
                        {link.name}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>
            {/* Columna 3: Redes sociales */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h3 className="text-lg font-semibold mb-4 text-cyan-300">
                Connect with us{" "}
              </h3>
              <div className="flex space-x-4">
                {socialLinks.map(({ Icon, href }, index) => (
                  <motion.a
                    key={index}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Icon className="h-6 w-6 text-gray-300 hover:text-cyan-300 transition-colors" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Copyright */}
          <motion.div
            className="mt-8 pt-8 border-t border-gray-700 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <p className="text-sm text-gray-400">
              © {currentYear} VortexPulse. All rights reserved.
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

'use client';
import { useState, useEffect } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiFillHome } from 'react-icons/ai';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function HeaderGlobal() {
  const [isOpen, setIsOpen] = useState(false);
  const { ref, inView } = useInView();
  const animacion = useAnimation();

  const [links, setLinks] = useState([{ nombre: 'About', href: '/about' }]);

  useEffect(() => {
    if (inView) {
      animacion.start({
        x: [0, 0],
        opacity: [0, 1],
        transition: { duration: 0.5 },
      });
    } else {
      animacion.start({ x: '-100%', opacity: 0 });
    }
  }, [inView, animacion]);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="fixed w-full z-50">
      {/* Botón de menú hamburguesa */}
      {!isOpen && (
        <motion.div
          className="absolute right-5 top-4 z-50"
          whileHover={{
            scale: 1.7,
            borderRadius: '60px',
            backgroundColor: 'transparent',
            boxShadow: `1px 1px 40px white, 1px 1px 31px white inset `,
          }}
          whileTap={{ scale: 2 }}
        >
          <motion.button
            onClick={toggleMenu}
            className="text-white bg-transparent m-4"
          >
            <GiHamburgerMenu />
          </motion.button>
        </motion.div>
      )}

      {/* Menu Drawer */}
      <motion.div
        animate={isOpen ? { x: 0, opacity: 1 } : { x: '-100%', opacity: 0 }} // Controlar visibilidad según isOpen
        className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 backdrop-blur-lg p-4 text-white`}
        initial={{ x: '-100%', opacity: 0 }} // Estado inicial del menú
      >
        <motion.button
          className="absolute top-4 right-4 text-white"
          onClick={toggleMenu}
        >
          X
        </motion.button>

        <div className="flex flex-col items-center justify-center h-full">
          {links.map(({ nombre, href }, i) => (
            <motion.div
              key={i}
              whileHover={{
                scale: 1.5,
                rotate: [0, 15, -35, 0],
                textShadow: '0 1px 4px white',
              }}
              className="text-2xl my-4"
            >
              <a href={href} className="hover:no-underline">
                {nombre}
              </a>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Botón Home */}
      {!isOpen && (
        <motion.div
          className="absolute left-5 top-4 z-50"
          whileHover={{
            scale: 1.7,
            borderRadius: '60px',
            backgroundColor: 'transparent',
            boxShadow: `1px 1px 40px white, 1px 1px 31px white inset`,
          }}
          whileTap={{ scale: 2 }}
        >
          <motion.a
            href="/"
            className="text-white bg-transparent m-4 flex items-center justify-center" // Ajusta según tus necesidades
          >
            <AiFillHome />
          </motion.a>
        </motion.div>
      )}
    </div>
  );
}

'use client';
import { useState, useEffect } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiFillHome } from 'react-icons/ai';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useRouter } from 'next/router';

export default function HeaderGlobal() {
  const [isOpen, setIsOpen] = useState(false);
  const [size, setSize] = useState('full');
  const { ref, inView } = useInView();
  const animacion = useAnimation();
  const animacion2 = useAnimation();
  const animacion3 = useAnimation();
  const animacion4 = useAnimation();
  const animacion5 = useAnimation();

  const [links, setLinks] = useState([
    { nombre: 'About', href: '/about' },
    { nombre: 'Contact', href: '/contact' },
    { nombre: 'About', href: '/about' },
  ]);

  useEffect(() => {
    if (inView) {
      animacion.start({
        x: [-200, 0],
        transition: { duration: 1, bounce: 0.3, delay: 0.1 },
      });
      animacion2.start({
        x: [-200, 0],
        transition: { type: 'spring', stiffness: 100 },
      });
      animacion3.start({ x: [-500, 0], transition: { duration: 3 } });
      animacion4.start({
        y: [-100, 0],
        opacity: [0, 1],
        transition: { duration: 1, bounce: 0.3, delay: 0.5 },
      });
      animacion5.start({ x: 0, transition: { type: 'spring', delay: 2 } });
    } else {
      animacion.start({ x: '-100vw' });
      animacion2.start({ x: '-100vw' });
      animacion3.start({ x: '-100vw' });
      animacion4.start({ y: '-100vh', opacity: 0 });
      animacion5.start({ x: -200 });
    }
  }, [inView]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed w-full z-50">
      {/* Botón de menú hamburguesa */}
      {!isOpen && (
        <motion.div
          className="absolute right-5 top-4 z-50"
          whileHover={{
            scale: 1.8,
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
        animate={isOpen ? { x: 0 } : { x: '-100%' }}
        className={`fixed top-0 left-0 w-${size} h-full bg-black bg-opacity-80 backdrop-blur-lg p-4 text-white`}
      >
        <motion.button
          whileInView={{ scale: [1, 3, 1], rotate: 360 }}
          className="absolute top-4 right-4 text-white"
          onClick={toggleMenu}
        >
          X
        </motion.button>

        <div className="flex flex-col items-center justify-center h-full">
          {links?.map(({ nombre, href }, i) => (
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
      {
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
      }
    </div>
  );
}

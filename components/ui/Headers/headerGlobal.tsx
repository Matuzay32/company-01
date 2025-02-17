"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";

import { AiFillHome } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import Link from "next/link";
import { useInView } from "react-intersection-observer";
import { useRouter } from "next/router";

export default function HeaderGlobal() {
  const [isOpen, setIsOpen] = useState(false);
  const [size, setSize] = useState("full");
  const { ref, inView } = useInView();
  const animacion = useAnimation();
  const animacion2 = useAnimation();
  const animacion3 = useAnimation();
  const animacion4 = useAnimation();
  const animacion5 = useAnimation();
  const [links, setLinks] = useState([
    { nombre: "About", href: "/about" },
    { nombre: "Contact", href: "/contact" },
    { nombre: "Pricing", href: "/pricing" },
    { nombre: "Services", href: "/services" },
  ]);

  useEffect(() => {
    if (inView) {
      animacion.start({
        x: [-200, 0],
        transition: { duration: 1, bounce: 0.3, delay: 0.1 },
      });
      animacion2.start({
        x: [-200, 0],
        transition: { type: "spring", stiffness: 100 },
      });
      animacion3.start({ x: [-500, 0], transition: { duration: 3 } });
      animacion4.start({
        y: [-100, 0],
        opacity: [0, 1],
        transition: { duration: 1, bounce: 0.3, delay: 0.5 },
      });
      animacion5.start({ x: 0, transition: { type: "spring", delay: 2 } });
    } else {
      animacion.start({ x: "-100vw" });
      animacion2.start({ x: "-100vw" });
      animacion3.start({ x: "-100vw" });
      animacion4.start({ y: "-100vh", opacity: 0 });
      animacion5.start({ x: -200 });
    }
  }, [inView]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const moveToHome = (e: any) => {
    setIsOpen(false);

    // Aquí puedes redirigir a la página de inicio, por ejemplo, usando el router
    window.location.href = "/"; // O usar el router de Next.js
  };

  return (
    <div className="fixed w-full z-50">
      <motion.div
        className="absolute left-5 top-4 z-50"
        whileHover={{
          scale: 1.8,
          borderRadius: "60px",
          backgroundColor: "transparent",
          boxShadow: `1px 1px 40px white, 1px 1px 31px white inset `,
        }}
        whileTap={{ scale: 2 }}
      >
        <motion.button
          onClick={moveToHome}
          className="text-white bg-transparent m-4"
        >
          <AiFillHome />
        </motion.button>
      </motion.div>

      {/* Botón de menú hamburguesa */}
      {!isOpen && (
        <motion.div
          className="absolute right-5 top-4 z-50"
          whileHover={{
            scale: 1.8,
            borderRadius: "60px",
            backgroundColor: "transparent",
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
        initial={{ x: "-100%" }} // Ensure it starts off-screen
        animate={isOpen ? { x: 0 } : { x: "-100%" }} // Animate to visible or off-screen
        transition={{ type: "spring", stiffness: 100 }} // Optional: smooth transition
        className={`fixed top-0 left-0 w-${size} h-full bg-black bg-opacity-30 backdrop-blur-lg p-4 text-white`}
      >
        <motion.button
          whileInView={{ scale: [1, 3, 2], rotate: 360 }}
          className="absolute top-4 right-4 text-white"
          onClick={toggleMenu}
        >
          X
        </motion.button>

        <div className="overflow-hidden h-auto flex flex-wrap w-full items-center">
          {links?.map(({ nombre, href }, i) => (
            <div
              className="flex justify-center w-full mt-10 mb-10"
              key={`${nombre}${i}`}
            >
              <motion.div
                whileHover={{
                  transition: {
                    duration: 0.5,
                  },
                  scale: 1.5,
                  rotate: [1, 15, -35, 1],
                  textShadow: ".1px 1px 2px white, 1px 1px 5px white",
                }}
                whileInView={{
                  y: [50, 0],
                  rotate: [1, 25, 1],
                }}
                className="text-4xl font-bold text-center"
              >
                <Link
                  href={href}
                  onClick={() => toggleMenu()}
                  className="hover:no-underline"
                >
                  {nombre}
                </Link>
              </motion.div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

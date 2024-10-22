import React from 'react';
import { IconType } from 'react-icons';

interface CardProps {
  icon: IconType; // Prop para recibir el icono
  title: string; // Prop para el título
  color?: string; // Prop opcional para el color
  href: string; // Prop para el enlace
}

const Card: React.FC<CardProps> = ({
  icon: Icon,
  title,
  color = 'green-11',
  href,
}) => {
  return (
    <a
      href={href} // Enlace al que se dirigirá el usuario
      role="tab"
      aria-selected="true"
      data-state="active"
      className="group relative w-[300px] min-h-[5rem] overflow-hidden rounded-2xl border border-slate-600 p-6 outline-none focus-visible:ring-2 focus-visible:ring-slate-600 data-[state='active']:border-slate-600"
      data-orientation="horizontal"
      data-radix-collection-item=""
    >
      <div className="absolute h-auto inset-px z-10 grid place-items-center rounded-2xl bg-black ">
        <div className="flex h-full w-full items-center gap-2 px-4 py-2 text-left md:gap-2 md:p-6">
          <div className="align-center flex h-10 w-10 justify-center rounded-xl border-slate-600 bg-gradient-to-bl from-green/[4%] p-2 text-slate-12 group-data-[state='active']:text-green-9 md:border">
            <Icon className="w-6 h-6" /> {/* Usar el icono como componente */}
          </div>
          <h4 className="font-book font-styling font-display text-base tracking-tight text-slate-12">
            {title} {/* Usar el título como prop */}
          </h4>
        </div>
      </div>
      <span
        aria-hidden="true"
        style={{ backgroundColor: color }} // Usar el color proporcionado
        className={`absolute inset-0 z-0 scale-[1] blur animate-spin-slow group-data-[state='active']:before:absolute group-data-[state='active']:before:inset-0 group-data-[state='active']:before:top-1/2 group-data-[state='active']:before:w-[600px] group-data-[state='active']:before:h-[100px] group-data-[state='active']:before:animate-disco-border group-data-[state='active']:before:bg-gradient-conic group-data-[state='active']:before:from-${color} group-data-[state='active']:before:via-transparent group-data-[state='active']:before:to-transparent`}
      ></span>
    </a>
  );
};

export default Card;

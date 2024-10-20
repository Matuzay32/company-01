import React from 'react';
import { IconType } from 'react-icons';

interface CardProps {
  icon: IconType; // Prop para recibir el icono
  title: string; // Prop para el título
  color?: string; // Prop opcional para el color
}

const Card: React.FC<CardProps> = ({
  icon: Icon,
  title,
  color = 'green-11',
}) => {
  return (
    <button
      type="button"
      role="tab"
      aria-selected="true"
      aria-controls="radix-:r90:-content-Intuitive analytics"
      data-state="active"
      id="radix-:r90:-trigger-Intuitive analytics"
      className="group relative h-[3.75rem] overflow-hidden rounded-2xl border border-slate-6 p-6 md:h-[5.625rem] outline-none focus-visible:ring-2 focus-visible:ring-slate-6 data-[state='active']:border-slate-6"
      data-orientation="horizontal"
      data-radix-collection-item=""
    >
      <span className="absolute inset-px z-10 grid place-items-center rounded-2xl group-data-[state='active']:bg-black group-data-[state='active']:bg-gradient-to-b group-data-[state='active']:from-grw/[3%] group-data-[state='active']:via-white/[1%] group-data-[state='active']:to-black">
        <div className="flex h-full w-full items-center gap-2 px-4 py-2 text-left md:gap-4 md:p-6">
          <div className="align-center flex h-10 w-10 justify-center rounded-xl border-slate-6 bg-gradient-to-bl from-green/[4%] p-2 text-slate-12 group-data-[state='active']:text-green-9 md:border">
            <Icon className="w-6 h-6" /> {/* Usar el icono como componente */}
          </div>
          <h4 className="font-book font-styling font-display text-base tracking-tight text-slate-12">
            {title} {/* Usar el título como prop */}
          </h4>
        </div>
      </span>
      <span
        aria-hidden="true"
        style={{ backgroundColor: color }} // Usar el color proporcionado
        className="absolute inset-0 z-0 scale-[1] blur animate-spin-slow group-data-[state='active']:before:absolute group-data-[state='active']:before:inset-0 group-data-[state='active']:before:top-1/2 group-data-[state='active']:before:w-[600px] group-data-[state='active']:before:h-[100px] group-data-[state='active']:before:animate-disco-border group-data-[state='active']:before:bg-gradient-conic group-data-[state='active']:before:from-green-11 group-data-[state='active']:before:via-transparent group-data-[state='active']:before:to-transparent"
      ></span>
    </button>
  );
};

export default Card;

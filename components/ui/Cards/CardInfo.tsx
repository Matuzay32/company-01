import React from 'react';
import { IconType } from 'react-icons';

interface CardInfoProps {
  icon: IconType; // Prop para recibir el icono
  title: string; // Prop para el título
  description?: string; // Prop opcional para la descripción
  buttonText: string; // Prop para el texto del botón
  buttonLink: string; // Prop para el enlace del botón
}

const CardInfo: React.FC<CardInfoProps> = ({
  icon: Icon,
  title,
  description,
  buttonText,
  buttonLink,
}) => {
  return (
    <div className="relative w-[300px] min-h-[5rem] overflow-hidden rounded-2xl border border-gray-600 p-6">
      <div className="flex h-full w-full items-center gap-2 text-left">
        <div className="flex h-10 w-10 justify-center rounded-xl border border-gray-600  p-2 text-white">
          <Icon className="w-6 h-6" />
        </div>
        <div className="flex flex-col">
          <h4 className="font-bold text-base text-white">{title}</h4>
          {description && (
            <p className="text-sm text-gray-300">{description}</p>
          )}
        </div>
      </div>
      <a
        href={buttonLink} // Enlace del botón
        className="outline-none transition duration-150 ease-in-out focus-visible:ring-2 focus-visible:ring-slate-700 text-sm h-10 pl-4 pr-2 gap-0 font-semibold bg-white text-black hover:bg-white/90 focus-visible:ring-4 focus-visible:ring-white/30 focus-visible:outline-none rounded-full inline-flex items-center justify-center mt-4"
      >
        {buttonText} {/* Texto del botón */}
        <span className="text-[#70757E] ml-2">
          <svg
            fill="none"
            height="24"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.75 8.75L14.25 12L10.75 15.25"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
            ></path>
          </svg>
        </span>
      </a>
    </div>
  );
};

export default CardInfo;

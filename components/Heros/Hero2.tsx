import React from 'react';
import CubeCanvas from '../3d/CubeCanvas'; // Asegúrate de que el nombre del archivo sea correcto

interface HeroProps {
  title: string;
  description: string;
  primaryButtonText: string;
  primaryButtonLink: string;
  secondaryButtonText: string;
  secondaryButtonLink: string;
  imageUrl: string;
}

const Hero2: React.FC<HeroProps> = ({
  title,
  description,
  primaryButtonText,
  primaryButtonLink,
  secondaryButtonText,
  secondaryButtonLink,
  imageUrl,
}) => {
  return (
    <section className="mx-auto max-w-5xl px-6 pb-8 md:h-screen md:max-h-[950px] md:max-w-7xl">
      <div className="flex h-full flex-col items-center justify-between md:flex-row md:pb-24">
        {/* Texto Columna */}
        <div className="origin-center-left order-2 max-w-xl animate-hero-text-slide-up-fade sm:shrink-0 md:order-1 lg:pl-16">
          <h1 className="font-book font-display text-center md:text-left text-3xl sm:text-4xl md:text-5xl lg:text-7xl leading-snug md:leading-[5rem] tracking-tight font-gradient">
            {title}
          </h1>
          <p className="sans mb-8 mt-4 max-w-[30rem] text-center leading-7 md:text-left text-sm md:text-base md:text-[1.125rem] md:leading-[1.5] text-slate-11 font-normal">
            {description}
          </p>
          <div className="flex flex-col justify-center gap-4 md:flex-row md:justify-start">
            <a
              className="text-base h-12 pl-5 pr-2 gap-0 font-semibold bg-white text-black hover:bg-white/90 focus-visible:ring-4 focus-visible:ring-white/30 focus-visible:outline-none focus-visible:bg-white/90 disabled:hover:bg-white inline-flex items-center border justify-center select-none rounded-full disabled:cursor-not-allowed disabled:opacity-70 transition ease-in-out duration-200"
              href={primaryButtonLink}
            >
              {primaryButtonText}
              <span className="text-[#70757E]">
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
            <a
              className="text-base h-12 pl-5 pr-2 gap-0 font-semibold bg-slate-1 border-slate-1 text-slate-11 hover:bg-slate-5 hover:text-slate-12 focus-visible:ring-4 focus-visible:ring-slate-7 focus-visible:outline-none focus-visible:bg-slate-6 disabled:hover:bg-slate-1 inline-flex items-center border justify-center select-none rounded-full disabled:cursor-not-allowed disabled:opacity-70 transition ease-in-out duration-200"
              href={secondaryButtonLink}
            >
              {secondaryButtonText}
              <span className="text-[#70757E]">
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
        </div>

        {/* Imagen Columna */}
        {/* <div className="relative order-1 w-full h-64 md:w-1/2 md:h-auto md:flex md:justify-center md:items-center">
          <CubeCanvas />
        </div> */}
      </div>
    </section>
  );
};

export default Hero2;

import React from 'react';
import { Button } from '../ui/Buttons/button';
import { ChevronRight } from 'lucide-react';

interface HeroProps {
  title: string;
  subtitle: string;
  buttonText: string;
  buttonHref: string;
  gradientStart?: string; // Opcional: para permitir personalización de los colores
  gradientEnd?: string; // Opcional: para permitir personalización de los colores
}

export default function Hero({
  title,
  subtitle,
  buttonText,
  buttonHref,
  gradientStart = '#FFFF92', // Valor predeterminado
  gradientEnd = '#EE8912', // Valor predeterminado
}: HeroProps) {
  return (
    <div>
      <section className="text-center mt-24 mb-20 px-4">
        <h2 className="font-book font-display mb-2 text-[3rem] md:text-[3.5rem] tracking-tight leading-[120%] font-gradient">
          {title}{' '}
          <span
            className="bg-gradient-to-br bg-clip-text text-transparent"
            style={{
              backgroundImage: `linear-gradient(to bottom right, ${gradientStart}, ${gradientEnd})`,
            }}
          >
            with us
          </span>
        </h2>

        <p className="sans mx-auto mb-12 max-w-5xl text-base md:text-[1.125rem] md:leading-[1.5] text-gray-400">
          {subtitle}
        </p>

        <Button
          href={buttonHref}
          title={buttonText}
          style={{
            background: `linear-gradient(to bottom right, ${gradientStart}, ${gradientEnd})`,
          }}
          className={`bg-gradient-to-br from-[${gradientStart}] to-[${gradientEnd}] hover:from-[${gradientStart}] hover:to-[${gradientEnd}] text-white px-8 py-3 rounded-full text-lg transition-all transform hover:scale-105`}
        >
          {buttonText} <ChevronRight className="ml-2 h-5 w-5" />
        </Button>
      </section>
    </div>
  );
}

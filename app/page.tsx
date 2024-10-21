'use client';

import { Button } from '@/components/ui/Buttons/button';
import Card from '@/components/ui/Cards/Card';
import { ChevronRight } from 'lucide-react';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-black text-white">
      {/* SECCION PRINCIPAL  */}
      <section className="text-center mt-24 mb-20 px-4">
        <h2 className="font-book font-styling font-display mb-2 text-center text-[3rem] md:text-[3.5rem] tracking-tight leading-[120%] font-gradient">
          Integrate{' '}
          <span className="inline leading-[0] bg-gradient-to-br bg-clip-text text-transparent from-[#FFFF92] to-[#EE8912]">
            with us
          </span>
        </h2>

        <p className=" sans mx-auto mb-12 max-w-5xl text-center text-base md:text-[1.125rem] md:leading-[1.5] text-gray-400 font-normal">
          <span
            data-br=":ra:"
            data-brr="1"
            style={{
              display: 'inline-block',
              verticalAlign: 'top',
              textDecoration: 'inherit',
            }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
            obcaecati quae saepe omnis tempore tenetur natus ad aut corrupti.
            Aperiam, aliquid. Odit autem veniam, culpa molestiae accusamus
            dignissimos quia dolorum.
          </span>
        </p>
        <Button className="bg-gradient-to-br from-[#FFFF92] to-[#EE8912] hover:from-[#FFF764] hover:to-[#D8730A] text-white px-8 py-3 rounded-full text-lg transition-all transform hover:scale-105">
          Get Started <ChevronRight className="ml-2 h-5 w-5" />
        </Button>
      </section>

      {/* SECCION DE PRUEBA DE CARDS */}
      <section className="text-center mt-24 mb-20 px-4">
        <h2 className="font-book font-styling font-display mb-2 text-center text-[3rem] md:text-[3.5rem] tracking-tight leading-[120%] font-gradient">
          Cards{' '}
          <span className="inline leading-[0] bg-gradient-to-br bg-clip-text text-transparent from-[#46ffe0] to-[#03abff]">
            Test{' '}
          </span>
        </h2>

        <p className=" sans mx-auto mb-12 max-w-5xl text-center text-base md:text-[1.125rem] md:leading-[1.5] text-gray-400 font-normal">
          <span
            data-br=":ra:"
            data-brr="1"
            style={{
              display: 'inline-block',
              verticalAlign: 'top',
              textDecoration: 'inherit',
            }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
            obcaecati quae saepe omnis tempore tenetur natus ad aut corrupti.
            Aperiam, aliquid. Odit autem veniam, culpa molestiae accusamus
            dignissimos quia dolorum.
          </span>
        </p>
        <Button className="bg-gradient-to-br from-[#46ffe0] to-[#03abff] hover:from-[#46ffe0] hover:to-[#03abff] text-white px-8 py-3 rounded-full text-lg transition-all transform hover:scale-105">
          Cards <ChevronRight className="ml-2 h-5 w-5" />
        </Button>

        <div className="grid grid-cols-1 gap-12 md:gap-8 lg:grid-cols-2">
          <Card></Card>
        </div>
      </section>
    </main>
  );
}

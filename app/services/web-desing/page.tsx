import Hero from '@/components/sections/Hero/Hero';
import ShowcaseCarousel from '@/components/sections/Showcase/ShowcaseCarousel';
import ProductShowcase from '@/components/sections/Products/ProductShowcase';
import ColorPalette from '@/components/sections/ColorPalette/ColorPalette';
import DesignPrinciples from '@/components/sections/Principles/DesignPrinciples';

export default function Page() {
  return (
    <main className="bg-black snap-y snap-mandatory h-screen overflow-y-scroll scroll-smooth">
      <section className="snap-start h-screen">
        <Hero />
      </section>
      <section className="snap-start h-screen">
        <ShowcaseCarousel />
      </section>
      <section className="snap-start h-screen">
        <ProductShowcase />
      </section>
      <section className="snap-start h-screen">
        <ColorPalette />
      </section>
      <section className="snap-start h-screen">
        <DesignPrinciples />
      </section>
    </main>
  );
}

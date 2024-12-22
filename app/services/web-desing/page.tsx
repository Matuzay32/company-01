import Hero from '@/components/sections/Hero/Hero';
import ShowcaseCarousel from '@/components/sections/Showcase/ShowcaseCarousel';
import ProductShowcase from '@/components/sections/Products/ProductShowcase';
import ColorPalette from '@/components/sections/ColorPalette/ColorPalette';
import DesignPrinciples from '@/components/sections/Principles/DesignPrinciples';

export default function Page() {
  return (
    <main className="bg-black">
      <Hero />
      <ShowcaseCarousel />
      <ProductShowcase />
      <ColorPalette />
      <DesignPrinciples />
    </main>
  );
}

'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useCart } from '../app/context/cart-context';
import { toast } from '@/hooks/use-toast';

const featuredItems = [
  {
    id: 1,
    name: 'Omakase Selection',
    description:
      "Chef's curated selection of premium seasonal fish and delicacies",
    price: 120,
    image: '/images/sushi-plate.png',
  },
  {
    id: 2,
    name: 'Black Marble Roll',
    description: 'Toro, caviar, gold flakes, and truffle with black rice',
    price: 85,
    image: '/images/sushi-black-plate.png',
  },
  {
    id: 3,
    name: 'Wagyu Nigiri',
    description: 'A5 Wagyu beef, lightly seared with truffle salt',
    price: 65,
    image: '/images/sushi-sauce.png',
  },
  {
    id: 4,
    name: 'Sakura Platter',
    description: 'Premium sashimi selection with cherry blossom infusion',
    price: 95,
    image: '/images/sushi-ceramic.png',
  },
];

export default function FeaturedItems() {
  const [activeIndex, setActiveIndex] = useState(0);
  const { addToCart } = useCart();

  const nextSlide = () => {
    setActiveIndex((current) => (current + 1) % featuredItems.length);
  };

  const prevSlide = () => {
    setActiveIndex(
      (current) => (current - 1 + featuredItems.length) % featuredItems.length
    );
  };

  const handleAddToCart = (item: (typeof featuredItems)[0]) => {
    addToCart(item);
    toast({
      title: 'Added to cart',
      description: `${item.name} has been added to your cart.`,
      duration: 3000,
    });
  };

  return (
    <div className="relative">
      <div className="flex justify-between absolute top-1/2 left-0 right-0 z-10 transform -translate-y-1/2 px-4">
        <Button
          variant="ghost"
          size="icon"
          onClick={prevSlide}
          className="bg-black/50 backdrop-blur-sm text-white hover:bg-black/70 h-12 w-12 rounded-full"
        >
          <ChevronLeft className="h-6 w-6" />
          <span className="sr-only">Previous</span>
        </Button>
        <Button
          variant="ghost"
          size="icon"
          onClick={nextSlide}
          className="bg-black/50 backdrop-blur-sm text-white hover:bg-black/70 h-12 w-12 rounded-full"
        >
          <ChevronRight className="h-6 w-6" />
          <span className="sr-only">Next</span>
        </Button>
      </div>

      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {featuredItems.map((item) => (
            <div key={item.id} className="min-w-full px-4">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="relative h-[400px] w-full overflow-hidden rounded-md group">
                  <Image
                    src={item.image || '/placeholder.svg'}
                    alt={item.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="flex flex-col justify-center backdrop-blur-sm bg-black/30 p-8 rounded-lg">
                  <h3 className="text-2xl md:text-3xl font-light tracking-wider mb-4">
                    {item.name}
                  </h3>
                  <p className="text-gray-300 mb-6">{item.description}</p>
                  <p className="text-xl mb-8">${item.price}</p>
                  <Button
                    className="self-start bg-white text-black hover:bg-gray-200"
                    onClick={() => handleAddToCart(item)}
                  >
                    <Plus className="mr-2 h-4 w-4" /> ADD TO CART
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center mt-8 space-x-2">
        {featuredItems.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={cn(
              'w-3 h-3 rounded-full transition-colors',
              activeIndex === index
                ? 'bg-white'
                : 'bg-white/30 hover:bg-white/50'
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

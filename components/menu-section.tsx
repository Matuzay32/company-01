'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { cn } from '@/lib/utils';
import { useCart } from '../app/context/cart-context';
import { toast } from '@/hooks/use-toast';

const combos = [
  {
    id: 'c1',
    name: 'KURO SIGNATURE',
    description:
      "Chef's selection of 10 premium nigiri, signature roll, and soup",
    price: 150,
    image: '/images/sushi-plate.png',
  },
  {
    id: 'c2',
    name: 'OMAKASE EXPERIENCE',
    description: "Multi-course chef's selection with seasonal specialties",
    price: 220,
    image: '/images/sushi-dark.png',
  },
  {
    id: 'c3',
    name: 'SASHIMI DELUXE',
    description: 'Premium selection of 15 pieces of sashimi with caviar',
    price: 130,
    image: '/images/sushi-sauce.png',
  },
  {
    id: 'c4',
    name: "COUPLE'S LUXURY",
    description: 'Curated selection for two with champagne pairing',
    price: 280,
    image: '/images/sushi-chopsticks.png',
  },
];

const categories = [
  {
    id: 'nigiri',
    name: 'NIGIRI',
    items: [
      {
        id: 'n1',
        name: 'Otoro',
        description: 'Fatty tuna belly',
        price: 18,
        image: '/images/sushi-ceramic.png',
      },
      {
        id: 'n2',
        name: 'A5 Wagyu',
        description: 'Seared Japanese beef with truffle',
        price: 24,
        image: '/images/sushi-sauce.png',
      },
      {
        id: 'n3',
        name: 'Uni',
        description: 'Sea urchin from Hokkaido',
        price: 22,
        image: '/images/sushi-black-plate.png',
      },
      {
        id: 'n4',
        name: 'Ikura',
        description: 'Salmon roe with gold flakes',
        price: 16,
        image: '/images/sushi-dark.png',
      },
    ],
  },
  {
    id: 'rolls',
    name: 'SIGNATURE ROLLS',
    items: [
      {
        id: 'r1',
        name: 'Black Diamond',
        description: 'Toro, caviar, truffle, gold leaf',
        price: 75,
        image: '/images/sushi-rolls.png',
      },
      {
        id: 'r2',
        name: 'Emperor',
        description: 'King crab, uni, ikura, wagyu',
        price: 65,
        image: '/images/sushi-black-plate.png',
      },
      {
        id: 'r3',
        name: 'Sakura',
        description: 'Salmon, cherry blossom, yuzu',
        price: 45,
        image: '/images/sushi-sauce.png',
      },
      {
        id: 'r4',
        name: 'Kuro Special',
        description: 'Black rice, eel, foie gras',
        price: 55,
        image: '/images/sushi-dark.png',
      },
    ],
  },
  {
    id: 'sashimi',
    name: 'SASHIMI',
    items: [
      {
        id: 's1',
        name: 'Premium Selection',
        description: "Chef's choice of 5 varieties",
        price: 85,
        image: '/images/sushi-plate.png',
      },
      {
        id: 's2',
        name: 'Hamachi',
        description: 'Yellowtail with yuzu kosho',
        price: 32,
        image: '/images/sushi-ceramic.png',
      },
      {
        id: 's3',
        name: 'Akami',
        description: 'Lean tuna with wasabi',
        price: 28,
        image: '/images/sushi-chopsticks.png',
      },
      {
        id: 's4',
        name: 'Hotate',
        description: 'Scallop with black salt',
        price: 30,
        image: '/images/sushi-sauce.png',
      },
    ],
  },
];

export default function MenuSection() {
  const [activeTab, setActiveTab] = useState('combos');
  const { addToCart } = useCart();

  const handleAddToCart = (item: {
    id: string | number;
    name: string;
    price: number;
    image: string;
  }) => {
    addToCart(item);
    toast({
      title: 'Added to cart',
      description: `${item.name} has been added to your cart.`,
      duration: 3000,
    });
  };

  return (
    <Tabs defaultValue="combos" className="w-full" onValueChange={setActiveTab}>
      <TabsList className="grid grid-cols-2 md:grid-cols-4 bg-black/50 backdrop-blur-md p-1 mb-12">
        <TabsTrigger
          value="combos"
          className={cn(
            'data-[state=active]:bg-white data-[state=active]:text-black',
            'text-white'
          )}
        >
          COMBOS
        </TabsTrigger>
        {categories.map((category) => (
          <TabsTrigger
            key={category.id}
            value={category.id}
            className={cn(
              'data-[state=active]:bg-white data-[state=active]:text-black',
              'text-white'
            )}
          >
            {category.name}
          </TabsTrigger>
        ))}
      </TabsList>

      <TabsContent value="combos" className="mt-0">
        <div className="grid md:grid-cols-2 gap-8">
          {combos.map((combo) => (
            <div
              key={combo.id}
              className="bg-black/70 backdrop-blur-sm p-6 rounded-md border border-white/10 hover:border-white/20 transition-colors group overflow-hidden relative"
            >
              <div className="absolute inset-0 -z-10 opacity-30">
                <Image
                  src={combo.image || '/placeholder.svg'}
                  alt={combo.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-light tracking-wider">
                  {combo.name}
                </h3>
                <span className="text-xl">${combo.price}</span>
              </div>
              <p className="text-gray-300 mb-6">{combo.description}</p>
              <Button
                className="bg-white text-black hover:bg-gray-200"
                onClick={() => handleAddToCart(combo)}
              >
                <Plus className="mr-2 h-4 w-4" /> ADD TO CART
              </Button>
            </div>
          ))}
        </div>
      </TabsContent>

      {categories.map((category) => (
        <TabsContent key={category.id} value={category.id} className="mt-0">
          <div className="grid md:grid-cols-2 gap-8">
            {category.items.map((item) => (
              <div
                key={item.id}
                className="bg-black/70 backdrop-blur-sm p-6 rounded-md border border-white/10 hover:border-white/20 transition-colors group overflow-hidden relative"
              >
                <div className="absolute inset-0 -z-10 opacity-30">
                  <Image
                    src={item.image || '/placeholder.svg'}
                    alt={item.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-light tracking-wider">
                    {item.name}
                  </h3>
                  <span className="text-xl">${item.price}</span>
                </div>
                <p className="text-gray-300 mb-6">{item.description}</p>
                <Button
                  className="bg-white text-black hover:bg-gray-200"
                  onClick={() => handleAddToCart(item)}
                >
                  <Plus className="mr-2 h-4 w-4" /> ADD TO CART
                </Button>
              </div>
            ))}
          </div>
        </TabsContent>
      ))}
    </Tabs>
  );
}

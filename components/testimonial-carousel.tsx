'use client';

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import type { StaticImageData } from 'next/image';

type Testimonial = {
  text: string;
  author: string;
  position: string;
  rating: number;
  image?: StaticImageData | string;
};

const defaultTestimonials: Testimonial[] = [
  {
    text: 'Kuro redefines luxury dining with its impeccable attention to detail and extraordinary flavor combinations. Each bite is a masterpiece.',
    author: 'Alexandra Chen',
    position: 'Food Critic',
    rating: 5,
  },
  {
    text: "The artistry behind Kuro's presentation is unmatched. Their commitment to quality and innovation places them among the elite.",
    author: 'James Wilson',
    position: 'Executive Chef',
    rating: 5,
  },
  {
    text: 'From the moment you enter, Kuro envelops you in an atmosphere of refined elegance. The black marble aesthetic creates the perfect backdrop for their culinary masterpieces.',
    author: 'Sophia Rodriguez',
    position: 'Luxury Lifestyle Blogger',
    rating: 5,
  },
];

export default function TestimonialCarousel({
  testimonials = defaultTestimonials,
}: {
  testimonials?: Testimonial[];
}) {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((current) => (current + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setActiveIndex(
      (current) => (current - 1 + testimonials.length) % testimonials.length
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 8000);

    return () => clearInterval(interval);
  }, [testimonials]);

  return (
    <div className="relative max-w-4xl mx-auto">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {testimonials.map((testimonial, index) => (
            <div key={index} className="min-w-full px-4">
              <div className="bg-zinc-900/50 backdrop-blur-md border border-white/10 rounded-lg p-8 md:p-12 text-center h-full flex flex-col justify-between items-center">
                {testimonial.rating && (
                  <div className="flex justify-center mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={cn(
                          'w-6 h-6 mx-1',
                          i < testimonial.rating
                            ? 'fill-white text-white'
                            : 'fill-gray-600 text-gray-600'
                        )}
                      />
                    ))}
                  </div>
                )}
                <blockquote className="text-xl md:text-2xl font-light italic mb-8">
                  "{testimonial.text}"
                </blockquote>
                <div className="flex flex-col items-center gap-2">
                  {testimonial.image && (
                    <img
                      src={
                        typeof testimonial.image === 'string'
                          ? testimonial.image
                          : testimonial.image.src
                      }
                      alt={testimonial.author}
                      className="w-12 h-12 rounded-full object-cover mb-2"
                    />
                  )}
                  <p className="text-lg font-medium">{testimonial.author}</p>
                  <p className="text-gray-400">{testimonial.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

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

      {/* <div className="flex justify-center mt-8 space-x-2">
        {testimonials.map((_, index) => (
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
      </div> */}
    </div>
  );
}

"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const testimonials = [
  {
    id: 1,
    name: "Alexandra Chen",
    role: "Food Critic",
    quote:
      "Kuro redefines luxury dining with its impeccable attention to detail and extraordinary flavor combinations. Each bite is a masterpiece.",
    rating: 5,
  },
  {
    id: 2,
    name: "James Wilson",
    role: "Executive Chef",
    quote:
      "The artistry behind Kuro's presentation is unmatched. Their commitment to quality and innovation places them among the elite.",
    rating: 5,
  },
  {
    id: 3,
    name: "Sophia Rodriguez",
    role: "Luxury Lifestyle Blogger",
    quote:
      "From the moment you enter, Kuro envelops you in an atmosphere of refined elegance. The black marble aesthetic creates the perfect backdrop for their culinary masterpieces.",
    rating: 5,
  },
]

export default function TestimonialCarousel() {
  const [activeIndex, setActiveIndex] = useState(0)

  const nextSlide = () => {
    setActiveIndex((current) => (current + 1) % testimonials.length)
  }

  const prevSlide = () => {
    setActiveIndex((current) => (current - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 8000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative max-w-4xl mx-auto">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="min-w-full px-4">
              <div className="bg-zinc-900/50 backdrop-blur-md border border-white/10 rounded-lg p-8 md:p-12 text-center">
                <div className="flex justify-center mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={cn(
                        "w-6 h-6 mx-1",
                        i < testimonial.rating ? "fill-white text-white" : "fill-gray-600 text-gray-600",
                      )}
                    />
                  ))}
                </div>
                <blockquote className="text-xl md:text-2xl font-light italic mb-8">"{testimonial.quote}"</blockquote>
                <div>
                  <p className="text-lg font-medium">{testimonial.name}</p>
                  <p className="text-gray-400">{testimonial.role}</p>
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

      <div className="flex justify-center mt-8 space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={cn(
              "w-3 h-3 rounded-full transition-colors",
              activeIndex === index ? "bg-white" : "bg-white/30 hover:bg-white/50",
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

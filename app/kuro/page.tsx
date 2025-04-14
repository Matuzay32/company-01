'use client';

import { useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight, ArrowDown } from 'lucide-react';

import { Button } from '@/components/ui/button';
import FeaturedItems from '@/components/featured-items';
import MenuSection from '@/components/menu-section';
import TestimonialCarousel from '@/components/testimonial-carousel';
import CartButton from '@/components/cart-button';

export default function Home() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRefs = {
    menu: useRef<HTMLElement>(null),
    experience: useRef<HTMLElement>(null),
    about: useRef<HTMLElement>(null),
    contact: useRef<HTMLElement>(null),
  };

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.error('Autoplay failed:', error);
      });
    }
  }, []);

  const scrollToSection = (sectionId: keyof typeof sectionRefs) => {
    sectionRefs[sectionId]?.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/40 backdrop-blur-md border-b border-white/10">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-xl font-light tracking-wider">KURO</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('menu')}
              className="text-sm tracking-wider hover:text-gray-300 transition-colors"
            >
              MENU
            </button>
            <button
              onClick={() => scrollToSection('experience')}
              className="text-sm tracking-wider hover:text-gray-300 transition-colors"
            >
              EXPERIENCE
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-sm tracking-wider hover:text-gray-300 transition-colors"
            >
              ABOUT
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-sm tracking-wider hover:text-gray-300 transition-colors"
            >
              CONTACT
            </button>
          </nav>
          <CartButton />
        </div>
      </header>

      {/* Hero Section with Image Background */}
      <section className="relative h-screen w-full overflow-hidden">
        {/* Image background */}
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <Image
          src="/images/hero-bg.avif"
          alt="Sushi background"
          fill
          className="object-cover"
          priority
        />

        {/* Content */}
        <div className="relative z-20 h-full flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-5xl md:text-7xl font-light tracking-widest mb-6">
            KURO
          </h1>
          <p className="text-xl md:text-2xl font-light tracking-wider mb-8 max-w-2xl">
            A MINIMALIST APPROACH TO LUXURY SUSHI
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              onClick={() => scrollToSection('menu')}
              className="bg-white text-black hover:bg-gray-200 px-8 py-6"
            >
              EXPLORE MENU
            </Button>
            <Button
              variant="outline"
              className="border-white/20 hover:bg-white/5 text-white px-8 py-6"
            >
              RESERVE A TABLE
            </Button>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => scrollToSection('menu')}
              className="text-white hover:bg-white/5"
            >
              <ArrowDown className="h-6 w-6" />
              <span className="sr-only">Scroll down</span>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Items */}
      <section className="py-24 bg-gradient-to-b from-black to-zinc-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-light tracking-wider text-center mb-16">
            SIGNATURE SELECTIONS
          </h2>
          <FeaturedItems />
          <div className="flex justify-center mt-12">
            <Button
              variant="outline"
              className="border-white/20 bg-white/5 hover:bg-white/10 text-white"
              onClick={() => scrollToSection('menu')}
            >
              VIEW ALL MENU <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section
        ref={sectionRefs.menu}
        id="menu"
        className="py-24 bg-zinc-900 relative"
      >
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/sushi-dark.png"
            alt="Background"
            fill
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-3xl md:text-4xl font-light tracking-wider text-center mb-16">
            OUR MENU
          </h2>
          <MenuSection />
        </div>
      </section>

      {/* Testimonials */}
      <section
        ref={sectionRefs.experience}
        id="experience"
        className="py-24 bg-black relative"
      >
        <div className="absolute inset-0 z-0 opacity-20">
          <Image
            src="/images/sushi-rolls.png"
            alt="Background"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-3xl md:text-4xl font-light tracking-wider text-center mb-16">
            GUEST EXPERIENCES
          </h2>
          <TestimonialCarousel />
        </div>
      </section>

      {/* About Section */}
      <section
        ref={sectionRefs.about}
        id="about"
        className="py-24 bg-zinc-900 relative"
      >
        <div className="absolute inset-0 z-0 opacity-20">
          <Image
            src="/images/sushi-plate.png"
            alt="Background"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/70 backdrop-blur-md"></div>
        </div>
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center relative z-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-light tracking-wider mb-8">
              THE KURO PHILOSOPHY
            </h2>
            <p className="text-gray-300 mb-6 leading-relaxed">
              At Kuro, we believe in the artistry of sushi. Our master chefs
              meticulously craft each piece with precision and passion, using
              only the finest ingredients sourced from sustainable suppliers
              around the world.
            </p>
            <p className="text-gray-300 leading-relaxed">
              The minimalist elegance of our presentation reflects our
              commitment to the authentic Japanese concept of finding beauty in
              simplicity and the space between elements.
            </p>
            <Button className="mt-8 bg-white text-black hover:bg-gray-200">
              LEARN MORE
            </Button>
          </div>
          <div className="relative h-[500px] w-full overflow-hidden rounded-lg">
            <Image
              src="/images/sushi-chopsticks.png"
              alt="Sushi Chef"
              fill
              className="object-cover rounded-md hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>
      </section>

      {/* Contact/Footer */}
      <footer
        ref={sectionRefs.contact}
        id="contact"
        className="py-16 bg-black border-t border-white/10 relative"
      >
        <div className="absolute inset-0 z-0 opacity-10">
          <Image
            src="/images/sushi-black-plate.png"
            alt="Background"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/90 backdrop-blur-sm"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <h3 className="text-xl font-light tracking-wider mb-6">KURO</h3>
              <p className="text-gray-400 mb-4">
                The pinnacle of sushi elegance.
              </p>
              <div className="flex space-x-4">
                <Link href="#" className="text-white hover:text-gray-300">
                  <span className="sr-only">Instagram</span>
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
                <Link href="#" className="text-white hover:text-gray-300">
                  <span className="sr-only">Twitter</span>
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </Link>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-light tracking-wider mb-6">HOURS</h3>
              <p className="text-gray-400 mb-2">
                Monday - Thursday: 5pm - 11pm
              </p>
              <p className="text-gray-400 mb-2">Friday - Saturday: 5pm - 1am</p>
              <p className="text-gray-400">Sunday: 5pm - 10pm</p>
            </div>
            <div>
              <h3 className="text-xl font-light tracking-wider mb-6">
                LOCATION
              </h3>
              <p className="text-gray-400 mb-2">123 Elegance Avenue</p>
              <p className="text-gray-400 mb-4">Luxury District, NY 10001</p>
              <p className="text-gray-400 mb-2">reservations@kurosushi.com</p>
              <p className="text-gray-400">+1 (212) 555-1234</p>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-white/10 text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} Kuro Sushi. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

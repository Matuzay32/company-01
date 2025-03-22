'use client';

import { useEffect, useState } from 'react';
import { Sun, Timer, Star } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

// Función que devuelve una fecha en base a la temporada
const getCountdownDate = (modelName: any) => {
  const currentYear = new Date().getFullYear();
  const lowerName = modelName.toLowerCase();
  if (lowerName.includes('summer')) {
    // Inicio del verano: 21 de junio
    return new Date(`${currentYear}-06-21T00:00:00`).toISOString();
  } else if (lowerName.includes('winter')) {
    // Inicio del invierno: 21 de diciembre
    return new Date(`${currentYear}-12-21T00:00:00`).toISOString();
  } else if (lowerName.includes('fashion week')) {
    // Para Fashion Week, se programa 30 días a partir de ahora
    return new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString();
  }
  // Fallback: 7 días a partir de ahora
  return new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString();
};

const cities = [
  {
    name: 'NEW YORK',
    offset: -4,
    image:
      'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&q=80&w=800',
    description: 'Fashion Capital',
    temperature: '18°C',
    highlight: 'Fashion Week HQ',
  },
  {
    name: 'PARIS',
    offset: 2,
    image:
      'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&q=80&w=800',
    description: 'Haute Couture',
    temperature: '22°C',
    highlight: 'Luxury Avenue',
  },
  {
    name: 'TOKYO',
    offset: 9,
    image:
      'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&q=80&w=800',
    description: 'Street Style',
    temperature: '25°C',
    highlight: 'Urban Trends',
  },
  {
    name: 'MILAN',
    offset: 2,
    image:
      'https://images.unsplash.com/photo-1513581166391-887a96ddeafd?auto=format&fit=crop&q=80&w=800',
    description: 'Design Hub',
    temperature: '20°C',
    highlight: 'Designer Paradise',
  },
];

const models = [
  {
    name: 'Summer Collection',
    image:
      'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&q=80&w=800',
    countdown: getCountdownDate('Summer Collection'),
    location: 'Paris',
    description: 'Ethereal designs meet bold statements',
    designer: 'Elena Rousseau',
  },
  {
    name: 'Winter Showcase',
    image:
      'https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&q=80&w=800',
    countdown: getCountdownDate('Winter Showcase'),
    location: 'New York',
    description: 'Avant-garde winter wear redefined',
    designer: 'Marcus Chen',
  },
  {
    name: 'Fashion Week',
    image:
      'https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&q=80&w=800',
    countdown: getCountdownDate('Fashion Week'),
    location: 'Milan',
    description: 'Where tradition meets innovation',
    designer: 'Sofia Bianchi',
  },
];

const gallery = [
  {
    image:
      'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&q=80&w=800',
    caption: 'Behind the Scenes',
    category: 'Backstage',
  },
  {
    image:
      'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    caption: 'Street Style',
    category: 'Urban',
  },
  {
    image:
      'https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&q=80&w=800',
    caption: 'Runway Moments',
    category: 'Show',
  },
  {
    image:
      'https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?auto=format&fit=crop&q=80&w=800',
    caption: 'Editorial',
    category: 'Print',
  },
  {
    image:
      'https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&q=80&w=800',
    caption: 'Fashion Week',
    category: 'Event',
  },
  {
    image:
      'https://images.unsplash.com/photo-1518049362265-d5b2a6467637?auto=format&fit=crop&q=80&w=800',
    caption: 'Backstage',
    category: 'Behind',
  },
];

interface CountdownData {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  progress: number;
}

export default function Home() {
  const [times, setTimes] = useState<string[]>(Array(cities.length).fill(''));
  const [countdowns, setCountdowns] = useState<CountdownData[]>(
    Array(models.length).fill({
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      progress: 0,
    })
  );
  const [initialDurations, setInitialDurations] = useState<number[]>([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [hoveredCity, setHoveredCity] = useState<number | null>(null);

  // Calcular la duración inicial para cada cuenta regresiva al cargar el componente
  useEffect(() => {
    const durations = models.map((model) => {
      const end = new Date(model.countdown).getTime();
      const now = Date.now();
      return Math.max(end - now, 0);
    });
    setInitialDurations(durations);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % models.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const updateTimes = () => {
      // Actualizar hora en cada ciudad
      const newTimes = cities.map((city) => {
        const date = new Date();
        const utc = date.getTime() + date.getTimezoneOffset() * 60000;
        const cityTime = new Date(utc + 3600000 * city.offset);
        return cityTime.toLocaleTimeString('en-US', {
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: false,
        });
      });
      setTimes(newTimes);

      // Actualizar cuenta regresiva para cada modelo
      const newCountdowns = models.map((model, index) => {
        const end = new Date(model.countdown).getTime();
        const now = Date.now();
        // Evitamos números negativos
        const distance = Math.max(end - now, 0);
        // Usamos la duración inicial para calcular el progreso (si no está definida, 0)
        const totalDuration = initialDurations[index] || 0;
        const progress =
          totalDuration > 0 ? 100 - (distance / totalDuration) * 100 : 100;

        return {
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          ),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
          progress: Math.min(Math.max(progress, 0), 100),
        };
      });
      setCountdowns(newCountdowns);
    };

    updateTimes();
    const interval = setInterval(updateTimes, 1000);
    return () => clearInterval(interval);
  }, [initialDurations]);

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <div className="h-screen relative overflow-hidden">
        {models.map((model, index) => (
          <div
            key={model.name}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={model.image}
              alt={model.name}
              className="w-full h-full object-cover"
              style={{ opacity: 0.5 }}
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center">
          <div className="text-center space-y-6">
            <div className="relative">
              <Star className="w-8 h-8 absolute -top-12 left-1/2 -translate-x-1/2 animate-pulse text-white/30" />
              <h1 className="text-6xl md:text-9xl font-bold tracking-wider mb-4 animate-fade-in">
                ELITE
              </h1>
            </div>
            <p className="text-xl md:text-3xl tracking-[0.3em] font-light">
              MODELING AGENCY
            </p>
            <div className="h-px w-40 mx-auto bg-gradient-to-r from-transparent via-white to-transparent" />
          </div>
        </div>
      </div>

      {/* World Cities */}
      <div className="py-20 px-4 bg-white/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent opacity-20" />
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {cities.map((city, index) => (
            <div
              key={city.name}
              className="group relative"
              onMouseEnter={() => setHoveredCity(index)}
              onMouseLeave={() => setHoveredCity(null)}
            >
              <div className="aspect-[16/9] overflow-hidden rounded-lg">
                <img
                  src={city.image}
                  alt={city.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
                <div className="absolute inset-0 p-6 flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-light tracking-[0.2em]">
                      {city.name}
                    </h3>
                    <p className="text-white/70 mt-1">{city.description}</p>
                    <div
                      className={`mt-2 transition-all duration-500 ${
                        hoveredCity === index
                          ? 'opacity-100 translate-y-0'
                          : 'opacity-0 translate-y-2'
                      }`}
                    >
                      <span className="text-xs uppercase tracking-wider bg-white/10 px-3 py-1 rounded-full">
                        {city.highlight}
                      </span>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <Sun className="w-5 h-5 text-white/80" />
                      <span className="text-white/80">{city.temperature}</span>
                    </div>
                    <div className="bg-black/30 backdrop-blur-md rounded-lg p-4 transform transition-transform duration-300 group-hover:scale-105">
                      <div className="font-mono text-3xl text-center tracking-[0.2em] text-white/90 tabular-nums">
                        {times[index]}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Upcoming Shows */}
      <div className="py-20 px-4">
        <h2 className="text-4xl text-center mb-16 tracking-[0.2em] font-light">
          UPCOMING SHOWS
        </h2>
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">
          {models.map((model, index) => (
            <div key={model.name} className="group relative">
              <div className="aspect-[3/4] overflow-hidden bg-gray-900 rounded-xl">
                <img
                  src={model.image}
                  alt={model.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-90 group-hover:opacity-70 transition-opacity duration-500" />
                <div className="absolute inset-x-0 bottom-0 p-8 space-y-6">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-2xl font-light tracking-wider">
                        {model.name}
                      </h3>
                      <div className="h-4 w-px bg-white/30" />
                      <span className="text-white/70 text-sm uppercase tracking-wider">
                        {model.designer}
                      </span>
                    </div>
                    <p className="text-lg text-white/70 mb-1">
                      {model.location}
                    </p>
                    <p className="text-sm text-white/50">{model.description}</p>
                  </div>
                  <div className="space-y-6">
                    <Progress
                      value={countdowns[index].progress}
                      className="h-1 bg-white/20"
                    />
                    <div className="grid grid-cols-4 gap-4">
                      {[
                        { value: countdowns[index].days, label: 'DAYS' },
                        { value: countdowns[index].hours, label: 'HRS' },
                        { value: countdowns[index].minutes, label: 'MIN' },
                        { value: countdowns[index].seconds, label: 'SEC' },
                      ].map((item, i) => (
                        <div
                          key={i}
                          className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center transform transition-transform duration-300 hover:scale-105"
                        >
                          <div className="text-3xl font-light tabular-nums">
                            {item.value}
                          </div>
                          <div className="text-xs text-white/60 mt-1">
                            {item.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Gallery */}
      <div className="py-20 px-4 bg-white/5">
        <h2 className="text-4xl text-center mb-16 tracking-[0.2em] font-light">
          GALLERY
        </h2>
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-4">
          {gallery.map((item, index) => (
            <div
              key={index}
              className="group relative aspect-square overflow-hidden rounded-lg"
            >
              <img
                src={item.image}
                alt={item.caption}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                <span className="text-xs uppercase tracking-wider bg-white/20 px-3 py-1 rounded-full w-fit mb-2">
                  {item.category}
                </span>
                <p className="text-lg font-light tracking-wider">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-white/10">
        <div className="max-w-7xl mx-auto flex flex-col items-center space-y-6">
          <div className="text-3xl tracking-[0.3em] font-light">ELITE</div>
          <div className="h-px w-20 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
          <p className="text-white/60 tracking-wider">
            &copy; 2024 ELITE MODELING AGENCY
          </p>
        </div>
      </footer>
    </main>
  );
}

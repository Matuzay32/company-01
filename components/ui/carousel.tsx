'use client';

import * as React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import useEmblaCarousel, {
  type UseEmblaCarouselType,
} from 'embla-carousel-react';

type CarouselApi = UseEmblaCarouselType[1];
type UseCarouselParameters = Parameters<typeof useEmblaCarousel>;
type CarouselOptions = UseCarouselParameters[0];

interface CarouselProps {
  opts?: CarouselOptions;
  plugins?: UseCarouselParameters[1];
  className?: string;
  children: React.ReactNode;
}

export function Carousel({
  opts,
  plugins,
  className,
  children,
}: CarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      ...opts,
    },
    plugins
  );

  const [prevBtnDisabled, setPrevBtnDisabled] = React.useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = React.useState(true);

  const scrollPrev = React.useCallback(
    () => emblaApi?.scrollPrev(),
    [emblaApi]
  );
  const scrollNext = React.useCallback(
    () => emblaApi?.scrollNext(),
    [emblaApi]
  );

  const onSelect = React.useCallback((api: CarouselApi) => {
    setPrevBtnDisabled(!api?.canScrollPrev());
    setNextBtnDisabled(!api?.canScrollNext());
  }, []);

  React.useEffect(() => {
    if (!emblaApi) return;
    onSelect(emblaApi);
    emblaApi.on('select', onSelect);
  }, [emblaApi, onSelect]);

  return (
    <div className="relative">
      <div ref={emblaRef} className="overflow-hidden">
        <div className="flex">{children}</div>
      </div>
      <button
        onClick={scrollPrev}
        disabled={prevBtnDisabled}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center backdrop-blur-lg transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={scrollNext}
        disabled={nextBtnDisabled}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center backdrop-blur-lg transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
    </div>
  );
}

export const CarouselItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    role="group"
    aria-roledescription="slide"
    className="min-w-0 shrink-0 grow-0 basis-full"
    {...props}
  />
));
CarouselItem.displayName = 'CarouselItem';

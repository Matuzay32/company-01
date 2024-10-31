"use client";

import React, { useEffect, useState } from "react";

import Image from "next/image";

const testimonialsData = [
  {
    text: "Our team loves Resend. It makes email sending so easy and reliable. After we switched to Dedicated IPs, our deliverability improved tremendously and we don't hear complaints about emails landing on spam anymore.",
    author: "Vlad Matsiiako",
    position: "Co-founder of Infisical",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    text: "The best experience I've ever had with an email service. Their support is top-notch and their features are incredibly useful!",
    author: "Jane Doe",
    position: "CEO of Awesome Company",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    text: "This service has changed the way we communicate with our clients. Highly recommend it!",
    author: "John Smith",
    position: "Marketing Director",
    image: "https://randomuser.me/api/portraits/men/65.jpg",
  },
  {
    text: "Fantastic support and incredible features. Our team is very happy with the service!",
    author: "Sara Lee",
    position: "Product Manager",
    image: "https://randomuser.me/api/portraits/women/29.jpg",
  },
  {
    text: "Resend has streamlined our email processes, making everything much more efficient.",
    author: "Michael Brown",
    position: "CTO",
    image: "https://randomuser.me/api/portraits/men/78.jpg",
  },
];

export default function Testimonials() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(3);
  const slidesCount = testimonialsData.length;
  const SLIDES_INTERVAL_TIME = 3000;

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsToShow(1);
      } else if (window.innerWidth < 1024) {
        setItemsToShow(2);
      } else if (window.innerWidth >= 1280) {
        setItemsToShow(3);
      } else {
        setItemsToShow(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const nextSlide = () => {
      setCurrentSlide((prevSlide) =>
        prevSlide >= slidesCount - itemsToShow ? 0 : prevSlide + 1
      );
    };
    const automatedSlide = setInterval(nextSlide, SLIDES_INTERVAL_TIME);
    return () => clearInterval(automatedSlide);
  }, [slidesCount, itemsToShow]);

  return (
    <section className="mx-auto px-4 sm:px-6 py-12 sm:py-24 overflow-hidden w-full">
      <h2 className="font-book font-display mb-8 text-3xl sm:text-4xl md:text-[2.5rem] tracking-tight leading-[120%] text-white text-center">
        Testimonials
      </h2>
      <p className="mb-12 text-base sm:text-lg text-gray-400 max-w-3xl mx-auto text-center">
        Our customers choose us because we exceed expectations, we help build
        trust between our customers and us.
      </p>
      <div className="relative overflow-hidden max-w-7xl mx-auto">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${(currentSlide * 100) / itemsToShow}%)`,
          }}
        >
          {testimonialsData.map((testimonial, index) => (
            <div
              key={index}
              className={`flex-shrink-0 px-2 sm:px-4 ${
                itemsToShow === 1
                  ? "w-full"
                  : itemsToShow === 2
                  ? "w-1/2"
                  : "w-1/3"
              }`}
            >
              <div className="relative rounded-2xl border border-slate-5 bg-gradient-to-b from-black to-black p-4 sm:p-6 h-full max-w-md mx-auto">
                <div
                  aria-hidden="true"
                  className="left-1/2 top-0 w-[300px] center pointer-events-none absolute h-1 max-w-full -translate-x-1/2 -translate-y-1/2"
                  style={{
                    background: `linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgba(255, 255, 255, 0) 0%, #fef9c3 50%, rgba(0, 0, 0, 0) 100%)`,
                  }}
                ></div>
                <div
                  aria-hidden="true"
                  className="left-1/2 bottom-0 w-[300px] center pointer-events-none absolute h-px max-w-full -translate-x-1/2 -translate-y-1/2"
                  style={{
                    background: `linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgba(255, 255, 255, 0) 0%, #D4D4D4 50%, rgba(0, 0, 0, 0) 100%)`,
                  }}
                ></div>

                <blockquote className="h-full flex flex-col justify-between">
                  <p className="sans text-sm leading-[1.6] text-slate-11 font-normal mb-4">
                    "{testimonial.text}"
                  </p>
                  <div className="relative mt-auto flex flex-row items-center">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.author}
                      width={40}
                      height={40}
                      className="rounded-full mr-4"
                    />
                    <div className="flex flex-col">
                      <span className="sans text-sm leading-[1.6] text-slate-12 font-normal">
                        {testimonial.author}
                      </span>
                      <span className="sans text-sm leading-[1.6] text-slate-11 font-normal">
                        {testimonial.position}
                      </span>
                    </div>
                  </div>
                </blockquote>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { ArrowRight } from "lucide-react";
import { Button } from "../ui/Buttons/v2/button";
import CustomSection from "../ui/Others/CustomSection";
import Image from "next/image";
import Link from "next/link";
import Pattern from "../ui/Patterns/Pattern";

export default function LandingPages() {
  const sections = [
    {
      title: "KleanPower",
      image: "/exampleLanding.jpeg",
      color: "#ffff", // Color distintivo para SaaS
      description:
        "KleanPower Solutions is a gateway to a world of clean, smart energy. With a design that evokes freshness and sustainability, each element guides the user into an experience of awareness and action. From environmental benefits to long-term savings, EcoPower inspires visitors to join the change at the click of a button - a KLEANER future starts here!",
      link: "/hola",
    },
    {
      title: "UrbanFit Studio",
      image: "/vortexPulseLogo.webp",
      color: "#33FF57",
      description:
        "UrbanFit Studio presents a dynamic and motivating proposal, ideal for those looking to transform their lifestyle. With striking graphics and a modern design, the page highlights personalized programs and irresistible promotions. The intuitive navigation and success stories inspire confidence and motivate you to take the first step towards a more active lifestyle. UrbanFit is the perfect combination of design and energy.",
      link: "",
    },
    {
      title: "Luxury Interiors",
      image: "/vortexPulseLogo.webp",
      color: "#3357FF",
      description:
        "Luxury Interiors' landing page redefines the concept of luxury in interior design. With a stunning visual display and sophisticated color palette, the site appeals to lovers of refined style and exceptional quality. Each section highlights exclusive and customizable pieces, with an attention to detail that conveys elegance. Elegance Interiors invites you to transform every space into a work of art, offering furniture that is synonymous with distinction and sophistication.",
      link: "",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white selection:bg-white selection:text-black">
      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center justify-center pt-16">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-zinc-900 via-black to-black"></div>
        <div className="relative z-10 container px-4 md:px-6">
          <p className="text-sm uppercase tracking-widest text-zinc-400 text-center mb-6 leading-none">
            Transform your business with creative solutions that accelerate
            growth and set your brand apart in a digital world
          </p>
          <p className="text-sm uppercase tracking-widest text-zinc-400 text-center mb-6">
            explore some of our best
          </p>
          <h1 className="font-serif text-center text-7xl md:text-8xl lg:text-9xl tracking-tight mt-5">
            Landing Pages
          </h1>
          {/* <p className="mt-8 text-lg text-zinc-400 max-w-2xl mx-auto text-center leading-relaxed">
            A comprehensive handbook for creating effective and beautiful
            landing pages for modern web applications.
          </p> */}
          <div className="flex flex-col items-center space-y-2 mt-16">
            <span className="text-2xl animate-pulse-arrow duration-700 delay-0">
              ▼
            </span>
            <span className="text-2xl animate-pulse-arrow duration-700 delay-150">
              ▼
            </span>
            <span className="text-2xl animate-pulse-arrow duration-700 delay-300">
              ▼
            </span>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="container px-4 md:px-6 py-24">
        {sections.map((section, index) => (
          <CustomSection
            height="h-px"
            gradientColor={section.color}
            key={index}
          >
            <section
              key={index}
              className="w-full relative rounded-xl bg-[linear-gradient(180deg,_#FFFFFF3D_0%,_#FFFFFF00_54%)] backdrop-filter backdrop-blur-[4px] p-[.0625rem] mt-24"
            >
              <div className="group flex flex-col md:flex-row gap-14 md:gap-24 w-full px-8 md:px-16 rounded-xl pt-8 pb-4 md:pb-6 bg-[linear-gradient(90deg,_#0000_0%,_#0000_100%),_radial-gradient(30%_36%_at_0%_60%,_#FFFFFF0D_0%,_#FFFFFF05_54%,_#FFFFFF00_100%),_linear-gradient(180deg,_#111_0%,_#00000080_100%)]">
                <div className="flex items-center justify-center md:block translate-x-2 -translate-y-16 md:translate-x-5">
                  <Link href={section.link}>
                    <div className="flex items-center justify-center [transform-style:preserve-3d] [perspective:1000px] [perspective-origin:center]">
                      <div
                        className="relative [box-shadow:20px_20px_20px_rgba(0,_0,_0,_0.2)] [transform-style:preserve-3d] [transform:rotateY(30deg)_rotateX(0deg)] transition-transform ease-in-out duration-500 group-hover:[transform:rotateY(0deg)] group-hover:[box-shadow:0_20px_20px_rgba(0,_0,_0,_0.2)]"
                        style={{ width: "214px", height: "314px" }}
                      >
                        <div className="content-[''] absolute w-[44px] h-full origin-left bg-center bg-[#2a2a2a] [transform:rotateY(90deg)] bg-[linear-gradient(180deg,_#2a2a2a,_#2a2a2a_50%,_#000000_100%)] [box-shadow:-1px_-1px_4px_3px_rgba(0,_0,_0,_0.25)_inset,_1px_1px_4px_0px_rgba(255,_255,_255,_0.1)_inset,_8px_-8px_16px_-8px_rgba(0,_0,_0,_0.08)_inset,_16px_-16px_16px_-16px_rgba(0,_0,_0,_0.25)_inset]"></div>

                        <div
                          className="content-[''] absolute top-0 left-0 w-full h-full bg-[rgba(0,_0,_0,_0.1)] bg-[radial-gradient(_184.29%_112.9%_at_46.2%_0%,_#ffffff80_0%,_rgba(255,_255,_255,_0)_10%_),_linear-gradient(_90deg,_rgba(255,_255,_255,_0)_0.46%,_rgba(255,_255,_255,_0.2)_0.82%,_rgba(255,_255,_255,_0)_2.18%,_rgba(255,_255,_255,_0)_4.43%,_rgba(0,_0,_0,_0)_4.79%,_rgba(0,_0,_0,_0.06)_5.18%,_rgba(0,_0,_0,_0.15)_5.44%,_rgba(0,_0,_0,_0.2)_5.74%,_rgba(255,_255,_255,_0.2)_5.78%,_rgba(255,_255,_255,_0.17)_6.03%,_rgba(255,_255,_255,_0.09)_6.29%,_rgba(255,_255,_255,_0)_6.56%_)] [box-shadow:-1px_-1px_4px_3px_rgba(0,_0,_0,_0.35)_inset,_1px_1px_4px_0px_rgba(255,_255,_255,_0.35)_inset,_8px_-8px_16px_-8px_rgba(0,_0,_0,_0.08)_inset,_16px_-16px_16px_-16px_rgba(0,_0,_0,_0.25)_inset]"
                          style={{ backgroundBlendMode: "soft-light" }}
                        >
                          <Image
                            src={section.image}
                            alt={section.title}
                            layout="fill"
                            objectFit="cover"
                            className="rounded-xl"
                          />
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="-mt-12 sm:mt-0 flex flex-col gap-5 shrink basis-0 grow">
                  <div
                    aria-hidden="true"
                    className="left-1/2 top-0 w-[300px] center pointer-events-none absolute h-px max-w-full -translate-x-1/2 -translate-y-1/2"
                    style={{
                      background: `linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgba(255, 255, 255, 0) 0%, #FBD38D 50%, rgba(0, 0, 0, 0) 100%)`,
                    }}
                  ></div>

                  <h2 className="capitalize text-5xl md:text-4xl font-domaine leading-normal">
                    {section.title}
                  </h2>
                  <p className="mt-8">{section.description}</p>
                </div>
              </div>
            </section>
          </CustomSection>
        ))}
      </div>

      {/* CTA Section */}
      <div className="border-t border-zinc-800">
        <div className="container px-4 md:px-6 py-24">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <h2 className="text-3xl md:text-4xl font-serif">
              Ready to create your landing page?
            </h2>
            <p className="text-zinc-400 max-w-[42rem] leading-normal sm:text-lg sm:leading-7">
              Explore our process to start building effective landing pages that
              convert.
            </p>
            <Button className="mt-4" size="lg">
              Start now!
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

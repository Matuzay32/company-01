"use client";

import { ArrowRight, Code, Globe, Send, Server, Zap } from "lucide-react";
import React, { useEffect, useState } from "react";

import { Button } from "../ui/Buttons/v2/button";
import CustomSection from "../ui/Others/CustomSection";
import { Input } from "@/components/ui/input";
import Pattern from "../ui/Patterns/Pattern";
import { Textarea } from "@/components/ui/textarea";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

const services = [
  {
    icon: Code,
    title: "Frontend Development",
    description:
      "Create responsive and interactive user interfaces using modern frameworks.",
    technologies: ["React", "Vue.js", "Next.js", "Tailwind CSS"],
    color: "from-blue-600 to-cyan-500",
  },
  {
    icon: Server,
    title: "Backend Development",
    description:
      "Build robust server-side applications and APIs for scalable solutions.",
    technologies: ["Node.js", "Python", "Java", "GraphQL"],
    color: "from-green-600 to-emerald-500",
  },
  {
    icon: Globe,
    title: "Full Stack Solutions",
    description:
      "End-to-end web application development, from database to UI implementation.",
    technologies: ["MERN Stack", "Django", "Ruby on Rails", "PostgreSQL"],
    color: "from-purple-600 to-pink-500",
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description:
      "Improve your web application's speed and efficiency for better UX and SEO.",
    technologies: [
      "Webpack",
      "Lazy Loading",
      "CDN Integration",
      "Caching Strategies",
    ],
    color: "from-yellow-500 to-orange-500",
  },
];

const defaultForm = {
  name: "",
  email: "",
  message: "",
};

const CustomCard = ({
  children,
  gradientColor,
  borderColor = "border-zinc-800",
}: {
  children: React.ReactNode;
  gradientColor: string;
  borderColor?: string;
}) => {
  return (
    <div
      className={`relative px-6 py-12 rounded-3xl border-t ${borderColor} overflow-hidden`}
    >
      <Pattern />
      <div
        aria-hidden="true"
        className="left-1/2 top-0 w-[300px] h-px absolute max-w-full -translate-x-1/2 -translate-y-1/2"
        style={{
          background: `linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgba(255, 255, 255, 0) 0%, ${gradientColor} 50%, rgba(0, 0, 0, 0) 100%)`,
        }}
      />
      <div
        aria-hidden="true"
        className="-top-1 left-1/2 h-[200px] w-full max-w-[200px] md:max-w-[400px] absolute -translate-x-1/2 -translate-y-1/2"
        style={{
          background:
            "conic-gradient(from 90deg at 50% 50%, rgba(0, 0, 0, 0) 50%, rgb(0, 0, 0) 50%), radial-gradient(rgba(200, 200, 200, 0.1) 0%, transparent 80%)",
        }}
      />
      {children}
    </div>
  );
};

export default function ContactForm() {
  const [formData, setFormData] = useState(defaultForm);
  const [status, setStatus] = useState<string>("");

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Sending...");

    const serviceId = "service_9vh83fd";
    const templateId = "template_qt8tc7v";
    const publicKey = "58423gevKIJBU8vwX";

    try {
      await emailjs.send(serviceId, templateId, formData, publicKey);
      console.log("Correo enviado correctamente");
      setStatus("");
      setFormData(defaultForm);
    } catch (error) {
      console.error("Error al enviar el correo:", error);
      setStatus("An error occurred. Please try again.");
    }
  };

  return (
    <div className="w-full bg-black text-gray-300 py-16 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="relative min-h-screen flex items-center justify-center pt-16">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-zinc-900 via-black to-black"></div>
          <div className="relative z-10 container px-4 md:px-6">
            <p className="text-sm uppercase tracking-widest text-zinc-400 text-center mb-8">
              Let us guide you in achieving your goals.{" "}
            </p>
            <h1 className="font-serif text-center text-7xl md:text-8xl lg:text-9xl tracking-tight mb-8">
              Get in touch with us
            </h1>
            <p className="text-sm uppercase tracking-widest text-zinc-400 text-center mb-8">
              {
                "Let's work together to discover your ideal project and help you achieve your business goals."
              }
            </p>
          </div>
        </div>
        <CustomSection height="h-2" gradientColor="#86efac">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-16"
          >
            <h3 className="text-3xl font-semibold text-center mb-8 relative z-10">
              Get in Touch
            </h3>
            <form
              onSubmit={handleSubmit}
              className="max-w-md mx-auto relative z-10"
            >
              <div className="space-y-4">
                <Input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="bg-zinc-800 border-zinc-700"
                />
                <Input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="bg-zinc-800 border-zinc-700"
                />
                <Textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  className="bg-zinc-800 border-zinc-700"
                />
                <Button type="submit" className="w-full">
                  Send Message <Send className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </form>
          </motion.div>
        </CustomSection>
      </div>
    </div>
  );
}

"use client"

import { useEffect, useRef } from "react"
import { ArrowDown } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function VideoHero() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.error("Autoplay failed:", error)
      })
    }
  }, [])

  const scrollToMenu = () => {
    document.getElementById("menu")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Video background */}
      <div className="absolute inset-0 bg-black/60 z-10"></div>
      <video ref={videoRef} className="absolute inset-0 w-full h-full object-cover" autoPlay muted loop playsInline>
        <source src="/placeholder.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Content */}
      <div className="relative z-20 h-full flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-5xl md:text-7xl font-light tracking-widest mb-6">KURO</h1>
        <p className="text-xl md:text-2xl font-light tracking-wider mb-8 max-w-2xl">
          A MINIMALIST APPROACH TO LUXURY SUSHI
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button onClick={scrollToMenu} className="bg-white text-black hover:bg-gray-200 px-8 py-6">
            EXPLORE MENU
          </Button>
          <Button variant="outline" className="border-white/20 hover:bg-white/5 text-white px-8 py-6">
            RESERVE A TABLE
          </Button>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <Button variant="ghost" size="icon" onClick={scrollToMenu} className="text-white hover:bg-white/5">
            <ArrowDown className="h-6 w-6" />
            <span className="sr-only">Scroll down</span>
          </Button>
        </div>
      </div>
    </section>
  )
}

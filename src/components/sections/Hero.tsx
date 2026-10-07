"use client";

import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { motion } from "framer-motion";
import { PhoneCall } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-[95vh] flex items-center pt-32 pb-40 overflow-hidden bg-slate-50">
      {/* Background Image & Overlays */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videos/laptop-video.mp4" type="video/mp4" />
        </video>
        {/* Removed heavy white gradients to display the video clearly as requested */}
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Massive Watermark Typography */}
      <div className="absolute top-1/4 -left-20 z-0 rotate-[-5deg] pointer-events-none">
        <h2 className="watermark-text text-white/10">MAHAKAL</h2>
      </div>

      <Container className="relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Text Content */}
          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", staggerChildren: 0.15 }}
              className="relative"
            >
              {/* Vibrant Glowing Orb behind text */}
              <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-orange-400/20 to-transparent rounded-full pointer-events-none" />

              <motion.span 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full sunset-card text-orange-600 text-xs md:text-sm font-bold tracking-widest uppercase mb-8"
              >
                <span className="w-2 h-2 rounded-full bg-orange-500 shadow-[0_0_8px_#f97316]" />
                Premium Travel Experience
              </motion.span>
              
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white leading-[1.05] mb-6 tracking-tight drop-shadow-lg"
              >
                Ride Smooth.<br />
                <span className="text-sunset drop-shadow-md">Travel Happy.</span>
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-base sm:text-lg md:text-2xl text-white mb-10 max-w-2xl leading-relaxed font-medium drop-shadow-md"
              >
                Reliable transportation for comfortable journeys, group travel, and memorable trips across West Bengal and beyond.
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex flex-col sm:flex-row gap-4 w-full"
              >
                <Button asChild size="lg" variant="primary" className="w-full sm:w-auto text-base sm:text-lg px-8 sm:px-10 py-6 rounded-2xl group relative overflow-hidden transform-gpu will-change-transform bg-sunset-gradient text-white border-none shadow-[0_10px_30px_rgba(255,126,95,0.3)] hover:shadow-[0_15px_40px_rgba(255,126,95,0.5)]">
                  <a href="https://wa.me/919733317971?text=Hello%20Mahakal%20Bus%20Services%2C%20I%20would%20like%20to%20enquire%20about%20your%20travel%20services." target="_blank" rel="noopener noreferrer">
                    <span className="relative z-10 font-bold">Book / Enquire Now</span>
                    <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline" className="w-full sm:w-auto text-base sm:text-lg px-6 sm:px-8 py-6 rounded-2xl bg-white text-slate-700 border-slate-200 hover:border-orange-200 hover:bg-orange-50 hover:text-orange-600 shadow-sm transform-gpu will-change-transform font-bold transition-all duration-300">
                  <a href="tel:+919733317971" className="flex items-center justify-center">
                    <PhoneCall className="w-5 h-5 mr-3 text-orange-400" />
                    +91 97333 17971
                  </a>
                </Button>
              </motion.div>
            </motion.div>
          </div>

        </div>
      </Container>
    </section>
  );
}

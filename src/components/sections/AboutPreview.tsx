"use client";

import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";

export function AboutPreview() {
  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Watermark */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-20 z-0 pointer-events-none opacity-40">
        <h2 className="watermark-text text-slate-200/50">ABOUT US</h2>
      </div>

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full sunset-card text-orange-600 text-sm font-bold uppercase tracking-widest">
              <span className="w-2 h-2 rounded-full bg-orange-500 shadow-[0_0_8px_#f97316]" />
              Our Story
            </div>
            
            <h2 className="text-4xl md:text-5xl font-black text-slate-800 leading-tight tracking-tight">
              Setting the Standard for <span className="text-sunset">Premium Travel</span>
            </h2>
            
            <p className="text-lg text-slate-600 leading-relaxed font-medium">
              For over a decade, Mahakal Bus Services has been the trusted name in West Bengal for reliable, comfortable, and safe transportation. We believe that the journey should be just as enjoyable as the destination.
            </p>
            
            <div className="grid grid-cols-2 gap-8 pt-4">
              <div className="border-l-4 border-orange-400 pl-4">
                <div className="text-4xl font-black text-slate-800 mb-1">10+</div>
                <div className="text-slate-500 font-bold text-sm uppercase tracking-wider">Years Experience</div>
              </div>
              <div className="border-l-4 border-rose-400 pl-4">
                <div className="text-4xl font-black text-slate-800 mb-1">50k+</div>
                <div className="text-slate-500 font-bold text-sm uppercase tracking-wider">Happy Passengers</div>
              </div>
            </div>

            <div className="pt-8">
              <Button asChild size="lg" variant="primary" className="rounded-2xl px-8 py-6 text-lg bg-sunset-gradient text-white border-none shadow-[0_10px_30px_rgba(255,126,95,0.3)] hover:shadow-[0_15px_40px_rgba(255,126,95,0.5)] transform-gpu transition-all duration-300 hover:scale-105 group font-bold">
                <Link href="/about">
                  Learn More About Us
                  <span className="ml-2 group-hover:translate-x-1 inline-block transition-transform">→</span>
                </Link>
              </Button>
            </div>
          </div>

          {/* Image Grid Layout */}
          <div className="relative h-[600px] w-full">
            {/* Ambient Background Glow */}
            <div className="absolute top-10 -left-10 w-full h-full bg-sunset-gradient rounded-[3rem] opacity-10 -z-10 blur-2xl" />
            
            <div className="relative h-full w-full rounded-[2.5rem] overflow-hidden shadow-2xl transform-gpu will-change-transform border-[6px] border-white">
              <Image
                src="/images/buses/bus-2.jpg"
                alt="Mahakal Bus Services Comfortable Travel"
                fill
                className="object-cover transition-transform duration-700 hover:scale-105 ease-out transform-gpu will-change-transform"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent pointer-events-none" />
            </div>
            
            {/* Floating Stats Badge */}
            <div className="absolute -bottom-8 -right-8 glass-card p-6 rounded-3xl z-20 flex items-center gap-4 max-w-xs animate-bounce" style={{ animationDuration: '3s' }}>
              <div className="w-14 h-14 bg-orange-50 rounded-2xl flex items-center justify-center shadow-inner">
                <ShieldCheck className="w-8 h-8 text-orange-500" />
              </div>
              <div>
                <div className="font-bold text-slate-800 text-lg">100% Safe</div>
                <div className="text-sm text-slate-500 font-medium">Certified Drivers</div>
              </div>
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}

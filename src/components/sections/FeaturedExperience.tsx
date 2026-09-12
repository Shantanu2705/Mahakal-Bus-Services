"use client";

import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";

export function FeaturedExperience() {
  return (
    <section className="relative py-24 bg-slate-50 overflow-hidden bg-fixed bg-center bg-cover" style={{ backgroundImage: 'url("/images/buses/bus-6.jpg")' }}>
      {/* Overlay - optimized */}
      <div className="absolute inset-0 bg-white/90" />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-50 via-transparent to-slate-50" />
      
      <Container className="relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="inline-block mb-6">
            <span className="sunset-card text-orange-600 font-bold tracking-widest uppercase text-sm px-6 py-2 rounded-full inline-flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-orange-500" />
              Why Choose Us
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-800 leading-tight mb-8">
            Experience the <span className="text-sunset">Gold Standard</span> in Road Travel
          </h2>
          
          <p className="text-xl text-gray-300 mb-10 leading-relaxed">
            From planning your trip to reaching your destination, make every journey more comfortable with Mahakal Bus Services.
          </p>
          
          <Button asChild size="lg" variant="secondary" className="px-10 text-lg">
            <a href="https://wa.me/919733317971?text=Hello%20Mahakal%20Bus%20Services%2C%20I%20would%20like%20to%20make%20an%20enquiry%20for%20an%20upcoming%20journey." target="_blank" rel="noopener noreferrer">
              Make an Enquiry
            </a>
          </Button>
        </motion.div>
      </Container>
    </section>
  );
}

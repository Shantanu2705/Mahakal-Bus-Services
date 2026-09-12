"use client";

import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { motion } from "framer-motion";
import { Map, Users, CalendarDays, BusFront } from "lucide-react";

const services = [
  {
    title: "Bus Travel",
    description: "Reliable daily and scheduled bus transportation services.",
    icon: BusFront,
  },
  {
    title: "Group Travel",
    description: "Comfortable coordination for large family or corporate groups.",
    icon: Users,
  },
  {
    title: "Outstation Travel",
    description: "Long-distance travel solutions with experienced drivers.",
    icon: Map,
  },
  {
    title: "Event Transport",
    description: "Dedicated transport for weddings, functions, and special events.",
    icon: CalendarDays,
  },
];

export function ServicesPreview() {
  return (
    <section className="py-24 bg-slate-50 text-slate-800 relative overflow-hidden">
      {/* Ambient Glows */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-orange-400/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-rose-400/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="absolute top-1/3 right-0 translate-x-1/4 z-0 pointer-events-none opacity-40">
        <h2 className="watermark-text text-slate-200/50 text-right">SERVICES</h2>
      </div>

      <Container className="relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="mb-6 inline-block">
            <span className="sunset-card text-orange-600 font-bold tracking-widest uppercase text-sm px-6 py-2 rounded-full inline-flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-orange-500 shadow-[0_0_8px_#f97316]" />
              What We Offer
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight">
            Tailored <span className="text-sunset">Travel Solutions</span>
          </h2>
          <p className="text-lg text-slate-500 font-medium max-w-2xl mx-auto">
            From daily commutes to special events, we offer a range of premium transportation services designed for your comfort and safety.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`bg-white rounded-[2rem] p-8 hover:-translate-y-2 shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(255,126,95,0.1)] border border-slate-100 hover:border-orange-200 transition-all duration-500 group ${index % 2 !== 0 ? 'lg:mt-12' : ''}`}
            >
              <div className="w-16 h-16 bg-orange-50 rounded-2xl flex items-center justify-center text-orange-500 mb-8 group-hover:bg-sunset-gradient group-hover:text-white transition-all duration-500 shadow-sm group-hover:scale-110 group-hover:shadow-[0_10px_20px_rgba(255,126,95,0.3)] transform-gpu">
                <service.icon className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">{service.title}</h3>
              <p className="text-slate-500 font-medium mb-8 flex-grow">
                {service.description}
              </p>
              <a 
                href={`https://wa.me/919733317971?text=Hello%20Mahakal%20Bus%20Services%2C%20I%20would%20like%20to%20enquire%20about%20your%20${encodeURIComponent(service.title)}%20services.`}
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm font-bold text-brand-gold group-hover:text-white transition-colors uppercase tracking-widest"
              >
                Enquire <span className="ml-2 group-hover:translate-x-2 transition-transform">→</span>
              </a>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}

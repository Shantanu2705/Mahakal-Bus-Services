"use client";

import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const fleet = [
  {
    id: 1,
    image: "/images/buses/bus-3.jpg",
    title: "Premium AC Coach",
    description: "Comfortable seating with air conditioning for long journeys.",
  },
  {
    id: 2,
    image: "/images/buses/bus-4.jpg",
    title: "Luxury Travel Bus",
    description: "Spacious interiors designed for maximum passenger comfort.",
  },
  {
    id: 3,
    image: "/images/buses/bus-5.jpg",
    title: "Group Tour Coach",
    description: "Ideal for large groups, outstation trips, and events.",
  }
];

export function FleetPreview() {
  return (
    <section className="py-24 bg-white">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <SectionHeading 
            title="Explore Our Fleet" 
            subtitle="Premium Vehicles"
            centered={false}
            className="mb-6 md:mb-0"
          />
          <Link 
            href="/fleet"
            className="hidden md:inline-flex items-center text-brand-navy font-semibold hover:text-brand-gold transition-colors"
          >
            View Full Fleet <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {fleet.map((bus, index) => (
            <motion.div
              key={bus.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group rounded-2xl bg-brand-gray border border-gray-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              <div className="relative h-64 w-full overflow-hidden">
                <div className="absolute inset-0 bg-brand-navy/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                <Image
                  src={bus.image}
                  alt={bus.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Gold Accent Line */}
                <div className="absolute bottom-0 left-0 h-1 w-0 bg-brand-gold group-hover:w-full transition-all duration-500 z-20" />
              </div>
              
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-bold text-brand-navy mb-2">{bus.title}</h3>
                <p className="text-gray-600 mb-6 flex-1">{bus.description}</p>
                <Button asChild variant="outline" className="w-full group-hover:bg-brand-navy group-hover:text-white transition-colors">
                  <a href={`https://wa.me/919733317971?text=Hello%20Mahakal%20Bus%20Services%2C%20I%20am%20interested%20in%20enquiring%20about%20the%20${encodeURIComponent(bus.title)}.`} target="_blank" rel="noopener noreferrer">
                    Enquire Now
                  </a>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 text-center md:hidden">
          <Button asChild variant="ghost" className="text-lg">
            <Link href="/fleet">
              View Full Fleet <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </Container>
    </section>
  );
}

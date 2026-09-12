import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PageHeader } from "@/components/ui/PageHeader";
import { CTASection } from "@/components/sections/CTASection";
import { Button } from "@/components/ui/Button";
import { Map, Users, CalendarDays, BusFront, HelpCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Services | Mahakal Bus Services",
  description: "Comprehensive travel and transportation services including group travel, outstation trips, and event transport.",
};

const allServices = [
  {
    title: "Bus Travel",
    description: "Experience comfortable and reliable bus transportation. Our standard travel services are designed with passenger comfort and punctuality in mind. With premium seating and a focus on safety, your journey with Mahakal Bus Services will always be smooth.",
    icon: BusFront,
    image: "/images/buses/bus-1.jpg"
  },
  {
    title: "Group Travel",
    description: "Planning a trip with family, friends, or a corporate team? Our group travel solutions make coordination easy. We provide spacious coaches that can accommodate large groups comfortably, ensuring everyone travels together and arrives happily.",
    icon: Users,
    image: "/images/buses/bus-2.jpg"
  },
  {
    title: "Outstation Travel",
    description: "For longer journeys across cities or states, our outstation travel service is the perfect choice. Our experienced drivers and well-maintained vehicles ensure that long-distance trips are safe, relaxing, and hassle-free.",
    icon: Map,
    image: "/images/buses/bus-3.jpg"
  },
  {
    title: "Event & Function Transport",
    description: "Ensure your guests arrive on time and in comfort for weddings, corporate functions, or special events. We offer dedicated transportation services for events, taking the stress out of logistics for the organizers.",
    icon: CalendarDays,
    image: "/images/buses/bus-5.jpg"
  },
  {
    title: "Custom Travel Enquiries",
    description: "Have a unique travel requirement? We are flexible and ready to accommodate your specific transportation needs. Get in touch with us to discuss your itinerary and let us provide a tailored travel solution.",
    icon: HelpCircle,
    image: "/images/buses/bus-6.jpg"
  }
];

export default function ServicesPage() {
  return (
    <>
      {/* Page Header */}
      <PageHeader title="Our Services" imageSrc="/images/buses/bus-7.jpg" />

      {/* Main Content */}
      <section className="py-24 bg-white">
        <Container>
          <SectionHeading 
            title="Comprehensive Travel Solutions" 
            subtitle="What We Offer" 
          />
          
          <div className="mt-16 space-y-24">
            {allServices.map((service, index) => (
              <div 
                key={service.title} 
                className={`flex flex-col ${index % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 lg:gap-20 items-center group`}
              >
                <div className="w-full lg:w-1/2">
                  <div className="relative h-[450px] w-full rounded-[2.5rem] overflow-hidden shadow-[0_20px_50px_rgba(7,26,43,0.15)] group-hover:shadow-[0_30px_60px_rgba(7,26,43,0.25)] transition-shadow duration-500 transform-gpu will-change-transform">
                    <div className="absolute inset-0 bg-brand-navy/5 z-10 group-hover:bg-transparent transition-colors duration-500" />
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110 ease-out transform-gpu will-change-transform"
                    />
                    <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brand-gold/20 to-transparent pointer-events-none z-0" />
                  </div>
                </div>
                
                <div className="w-full lg:w-1/2 space-y-8">
                  <div className="w-20 h-20 bg-orange-50 rounded-[2rem] flex items-center justify-center text-orange-500 mb-6 shadow-sm transform-gpu will-change-transform group-hover:scale-110 transition-transform duration-500 ease-out group-hover:bg-sunset-gradient group-hover:text-white">
                    <service.icon className="w-10 h-10" />
                  </div>
                  <h2 className="text-4xl font-black text-slate-800 tracking-tight">{service.title}</h2>
                  <p className="text-xl text-slate-500 leading-relaxed font-medium">
                    {service.description}
                  </p>
                  <div className="pt-6">
                    <Button asChild size="lg" variant="primary" className="px-10 py-6 rounded-2xl text-lg group/btn shadow-[0_10px_30px_rgba(255,126,95,0.3)] hover:shadow-[0_15px_40px_rgba(255,126,95,0.5)] transform-gpu will-change-transform bg-sunset-gradient text-white border-none font-bold transition-all hover:scale-105">
                      <a href={`https://wa.me/919733317971?text=Hello%20Mahakal%20Bus%20Services%2C%20I%20would%20like%20to%20enquire%20about%20your%20${encodeURIComponent(service.title)}%20service.`} target="_blank" rel="noopener noreferrer">
                        Enquire About This Service
                        <span className="ml-2 group-hover/btn:translate-x-1 inline-block transition-transform duration-300">→</span>
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}

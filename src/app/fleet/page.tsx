import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PageHeader } from "@/components/ui/PageHeader";
import { CTASection } from "@/components/sections/CTASection";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Our Fleet | Mahakal Bus Services",
  description: "Explore the modern and comfortable fleet of Mahakal Bus Services. Premium vehicles ready for your journey.",
};

const fullFleet = [
  { id: 1, image: "/images/buses/bus-1.jpg", name: "Premium Travel Coach" },
  { id: 2, image: "/images/buses/bus-2.jpg", name: "Luxury AC Bus" },
  { id: 3, image: "/images/buses/bus-3.jpg", name: "Group Excursion Coach" },
  { id: 4, image: "/images/buses/bus-4.jpg", name: "Executive Journey Bus" },
  { id: 5, image: "/images/buses/bus-5.jpg", name: "Comfort Travel Coach" },
  { id: 6, image: "/images/buses/bus-6.jpg", name: "Premium Group Bus" },
  { id: 7, image: "/images/buses/bus-7.jpg", name: "Modern Fleet Vehicle" },
  { id: 8, image: "/images/buses/bus-8.jpg", name: "Reliable Transit Coach" },
];

export default function FleetPage() {
  return (
    <>
      {/* Page Header */}
      <PageHeader title="Our Fleet" imageSrc="/images/buses/bus-4.jpg" />

      {/* Main Content */}
      <section className="py-24 bg-brand-gray min-h-screen">
        <Container>
          <SectionHeading 
            title="Vehicles Built For Comfort" 
            subtitle="Explore Our Fleet" 
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-12">
            {fullFleet.map((bus) => (
              <div 
                key={bus.id} 
                className="bg-white rounded-[2rem] overflow-hidden shadow-lg border border-gray-100 group hover:shadow-[0_20px_40px_rgba(7,26,43,0.1)] transition-transform duration-500 hover:-translate-y-2 transform-gpu will-change-transform flex flex-col"
              >
                <div className="relative h-64 w-full overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/60 via-transparent to-transparent z-10 opacity-60 group-hover:opacity-0 transition-opacity duration-500" />
                  <Image
                    src={bus.image}
                    alt={bus.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110 ease-out transform-gpu will-change-transform"
                  />
                </div>
                <div className="p-8 flex flex-col flex-1 bg-white relative">
                  <h3 className="text-xl font-bold text-brand-navy-dark mb-6 tracking-tight">{bus.name}</h3>
                  <div className="mt-auto">
                    <Button asChild variant="outline" className="w-full text-sm h-12 rounded-xl group-hover:bg-brand-navy group-hover:text-white group-hover:border-transparent shadow-[0_4px_10px_rgba(0,0,0,0.05)] transition-all duration-300">
                      <a href={`https://wa.me/919733317971?text=Hello%20Mahakal%20Bus%20Services%2C%20I%20am%20interested%20in%20enquiring%20about%20the%20${encodeURIComponent(bus.name)}.`} target="_blank" rel="noopener noreferrer">
                        Enquire Availability
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

import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PageHeader } from "@/components/ui/PageHeader";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Gallery | Mahakal Bus Services",
  description: "View the gallery of Mahakal Bus Services. See our premium fleet of comfortable travel buses.",
};

const galleryImages = [
  { id: 1, src: "/images/buses/bus-1.jpg", alt: "Premium Bus Exterior" },
  { id: 2, src: "/images/buses/bus-2.jpg", alt: "Comfortable Travel Coach" },
  { id: 3, src: "/images/buses/bus-3.jpg", alt: "Luxury AC Bus" },
  { id: 4, src: "/images/buses/bus-4.jpg", alt: "Group Tour Vehicle" },
  { id: 5, src: "/images/buses/bus-5.jpg", alt: "Outstation Travel Bus" },
  { id: 6, src: "/images/buses/bus-6.jpg", alt: "Modern Bus Fleet" },
  { id: 7, src: "/images/buses/bus-7.jpg", alt: "Reliable Transportation" },
  { id: 8, src: "/images/buses/bus-8.jpg", alt: "Event Transport Coach" },
];

export default function GalleryPage() {
  return (
    <>
      {/* Page Header */}
      <PageHeader title="Gallery" imageSrc="/images/buses/bus-8.jpg" />

      {/* Main Content */}
      <section className="py-24 bg-brand-gray">
        <Container>
          <SectionHeading 
            title="Our Vehicles in Action" 
            subtitle="Visual Journey" 
          />
          
          <div className="mt-12 columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
            {galleryImages.map((image) => (
              <div 
                key={image.id} 
                className="relative overflow-hidden rounded-[2rem] shadow-lg group break-inside-avoid border border-white/20 hover:shadow-[0_20px_40px_rgba(7,26,43,0.15)] hover:-translate-y-2 transition-transform duration-500 ease-out cursor-pointer transform-gpu will-change-transform bg-zinc-950"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110 ease-out transform-gpu will-change-transform"
                />
                <div className="absolute bottom-6 left-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-500 z-20 transform translate-y-4 group-hover:translate-y-0">
                  <div className="text-gold-metallic font-bold text-sm tracking-widest uppercase mb-1">Mahakal Bus Services</div>
                  <div className="text-white font-medium text-lg leading-snug">{image.alt}</div>
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

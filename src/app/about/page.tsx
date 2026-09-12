import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PageHeader } from "@/components/ui/PageHeader";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "About Us | Mahakal Bus Services",
  description: "Learn more about Mahakal Bus Services and our commitment to comfortable, reliable, and premium travel experiences.",
};

export default function AboutPage() {
  return (
    <>
      {/* Page Header */}
      <PageHeader title="About Us" imageSrc="/images/buses/bus-2.jpg" />

      {/* Main Content */}
      <section className="py-20 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeading 
                title="Our Commitment to Comfort" 
                subtitle="Travel With Confidence"
                centered={false} 
              />
              
              <div className="space-y-6 text-gray-700 text-lg leading-relaxed mt-8">
                <p>
                  At Mahakal Bus Services, we believe that the journey should be as enjoyable as the destination. We are committed to providing premium, comfortable, and highly dependable travel experiences for all our passengers.
                </p>
                <p>
                  Our goal is to redefine bus travel by focusing on quality service, well-maintained vehicles, and customer convenience. From seamless enquiry through WhatsApp to reaching your destination on time, every step with us is designed to be smooth.
                </p>
                <p>
                  Whether you are planning a group tour, an outstation trip, or require transportation for a special event, our modern fleet is ready to accommodate your needs. We take pride in our highly professional staff and our focus on passenger satisfaction.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4 pt-12">
                  <div className="relative h-64 rounded-xl overflow-hidden shadow-lg">
                    <Image src="/images/buses/bus-4.jpg" alt="Fleet 1" fill className="object-cover" />
                  </div>
                  <div className="relative h-48 rounded-xl overflow-hidden shadow-lg">
                    <Image src="/images/buses/bus-5.jpg" alt="Fleet 2" fill className="object-cover" />
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="relative h-48 rounded-xl overflow-hidden shadow-lg">
                    <Image src="/images/buses/bus-3.jpg" alt="Fleet 3" fill className="object-cover" />
                  </div>
                  <div className="relative h-64 rounded-xl overflow-hidden shadow-lg border-4 border-brand-gold">
                    <Image src="/images/buses/bus-6.jpg" alt="Fleet 4" fill className="object-cover" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}

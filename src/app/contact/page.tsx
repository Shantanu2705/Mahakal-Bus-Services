import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PageHeader } from "@/components/ui/PageHeader";
import { ContactForm } from "@/components/sections/ContactForm";
import { MapPin, Phone, Clock } from "lucide-react";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Contact Us | Mahakal Bus Services",
  description: "Get in touch with Mahakal Bus Services for premium bus travel enquiries, bookings, and group transportation.",
};

export default function ContactPage() {
  return (
    <>
      {/* Page Header */}
      <PageHeader title="Contact Us" imageSrc="/images/buses/bus-1.jpg" />

      {/* Main Content */}
      <section className="py-24 bg-brand-gray relative">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-8">
            
            {/* Contact Information */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <SectionHeading 
                  title="Get In Touch" 
                  subtitle="Reach Out"
                  centered={false} 
                  className="mb-8"
                />
                <p className="text-gray-600 mb-8 leading-relaxed">
                  We are here to help you plan the perfect journey. Whether you have a question about our fleet, pricing, or want to make a booking, feel free to contact us.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start p-6 bg-white rounded-xl shadow-sm border border-gray-100">
                  <div className="flex-shrink-0 w-12 h-12 bg-brand-gold/10 rounded-full flex items-center justify-center text-brand-gold mr-4">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-brand-navy-dark mb-1">Phone Number</h4>
                    <a href="tel:+919733317971" className="text-gray-600 hover:text-brand-gold transition-colors font-medium">
                      097333 17971
                    </a>
                  </div>
                </div>

                <div className="flex items-start p-6 bg-white rounded-xl shadow-sm border border-gray-100">
                  <div className="flex-shrink-0 w-12 h-12 bg-brand-gold/10 rounded-full flex items-center justify-center text-brand-gold mr-4">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-brand-navy-dark mb-1">Office Address</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Shiva Complex, P958+RJP, Medical Rd,<br />
                      Kadamtala, near Coffee 99,<br />
                      Bara Mohansingh, West Bengal 734011
                    </p>
                  </div>
                </div>

                <div className="flex items-start p-6 bg-white rounded-xl shadow-sm border border-gray-100">
                  <div className="flex-shrink-0 w-12 h-12 bg-brand-gold/10 rounded-full flex items-center justify-center text-brand-gold mr-4">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-brand-navy-dark mb-1">Business Hours</h4>
                    <p className="text-gray-600 text-sm">
                      Open for enquiries and bookings.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-4 flex flex-col gap-4">
                <Button asChild size="lg" className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white">
                  <a href="https://wa.me/919733317971?text=Hello%20Mahakal%20Bus%20Services%2C%20I%20would%20like%20to%20enquire%20about%20your%20travel%20services." target="_blank" rel="noopener noreferrer">
                    Chat on WhatsApp
                  </a>
                </Button>
                
                <Button asChild variant="outline" size="lg" className="w-full">
                  <a href="https://www.google.com/maps/search/?api=1&query=Shiva+Complex,+P958%2BRJP,+Medical+Rd,+Kadamtala,+near+Coffee+99,+Bara+Mohansingh,+West+Bengal+734011" target="_blank" rel="noopener noreferrer">
                    <MapPin className="w-5 h-5 mr-2" />
                    Get Directions
                  </a>
                </Button>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <ContactForm />
            </div>

          </div>
        </Container>
      </section>
      
      {/* Map Section */}
      <section className="h-[400px] w-full bg-gray-200 relative">
        <div className="absolute inset-0 flex items-center justify-center bg-zinc-950 text-white">
            {/* Fallback if iframe fails to load or as a placeholder for actual map embed */}
            <div className="text-center p-8">
              <MapPin className="w-12 h-12 text-brand-gold mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">Visit Our Office</h3>
              <p className="mb-6 max-w-md mx-auto text-gray-300">Shiva Complex, Medical Rd, Kadamtala, Bara Mohansingh, West Bengal 734011</p>
              <Button asChild variant="secondary">
                <a href="https://www.google.com/maps/search/?api=1&query=Shiva+Complex,+P958%2BRJP,+Medical+Rd,+Kadamtala,+near+Coffee+99,+Bara+Mohansingh,+West+Bengal+734011" target="_blank" rel="noopener noreferrer">
                  Open in Google Maps
                </a>
              </Button>
            </div>
        </div>
      </section>
    </>
  );
}

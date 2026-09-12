import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { MessageCircle, PhoneCall } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-24 bg-brand-cream relative overflow-hidden">
      {/* Abstract Design Elements */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-brand-gold rounded-full opacity-10 blur-3xl" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-brand-navy rounded-full opacity-5 blur-3xl" />
      
      <Container className="relative z-10">
        <div className="bg-white rounded-3xl p-8 md:p-16 shadow-xl border border-gray-100 max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-navy-dark mb-4">
            Ready For Your Next Journey?
          </h2>
          <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
            Get in touch with Mahakal Bus Services today and plan your travel with ease. We are just a message or call away.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Button asChild size="lg" variant="primary" className="w-full sm:w-auto h-14 px-8 text-lg bg-[#25D366] hover:bg-[#20bd5a] text-white border-none">
              <a href="https://wa.me/919733317971?text=Hello%20Mahakal%20Bus%20Services%2C%20I%20would%20like%20to%20enquire%20about%20your%20travel%20services." target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-6 h-6 mr-2 fill-current" />
                WhatsApp Us
              </a>
            </Button>
            
            <Button asChild size="lg" variant="outline" className="w-full sm:w-auto h-14 px-8 text-lg border-2">
              <a href="tel:+919733317971">
                <PhoneCall className="w-5 h-5 mr-2" />
                Call Now
              </a>
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}

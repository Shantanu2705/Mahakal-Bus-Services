"use client";

import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

const reasons = [
  "Comfort-Focused Journeys",
  "Professional Travel Experience",
  "Convenient WhatsApp Enquiry",
  "Travel-Ready Fleet",
  "Group Travel Support",
  "Customer-Friendly Service",
];

export function WhyChooseUs() {
  return (
    <section className="py-20 bg-brand-cream border-t border-brand-gold/20">
      <Container>
        <div className="max-w-4xl mx-auto">
          <SectionHeading 
            title="Why Choose Mahakal Bus Services?" 
            subtitle="The Mahakal Difference" 
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 mt-12">
            {reasons.map((reason, index) => (
              <motion.div 
                key={reason}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                className="flex items-center p-4 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="flex-shrink-0 mr-4 text-brand-gold">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <span className="text-lg font-medium text-brand-navy-dark">{reason}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

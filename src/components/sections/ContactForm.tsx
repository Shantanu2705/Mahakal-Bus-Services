"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Send } from "lucide-react";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    travelRequirement: "",
    preferredDate: "",
    passengers: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct WhatsApp message
    const message = `*Hello Mahakal Bus Services,*

I would like to make a travel enquiry.

*Name:* ${formData.name}
*Phone:* ${formData.phone}
*Travel Requirement:* ${formData.travelRequirement}
*Preferred Date:* ${formData.preferredDate}
*Passengers:* ${formData.passengers}

*Message:*
${formData.message}`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/919733317971?text=${encodedMessage}`;
    
    // Open WhatsApp
    window.open(whatsappUrl, '_blank');
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
      <h3 className="text-2xl font-bold text-brand-navy-dark mb-6">Send an Enquiry</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-gold focus:border-brand-gold outline-none transition-colors"
            placeholder="John Doe"
          />
        </div>
        
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-gold focus:border-brand-gold outline-none transition-colors"
            placeholder="+91 XXXXX XXXXX"
          />
        </div>
        
        <div>
          <label htmlFor="travelRequirement" className="block text-sm font-medium text-gray-700 mb-2">Travel Requirement *</label>
          <select
            id="travelRequirement"
            name="travelRequirement"
            required
            value={formData.travelRequirement}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-gold focus:border-brand-gold outline-none transition-colors bg-white"
          >
            <option value="">Select a service</option>
            <option value="Bus Travel">Bus Travel</option>
            <option value="Group Travel">Group Travel</option>
            <option value="Outstation Travel">Outstation Travel</option>
            <option value="Event Transport">Event Transport</option>
            <option value="Other">Other</option>
          </select>
        </div>
        
        <div>
          <label htmlFor="preferredDate" className="block text-sm font-medium text-gray-700 mb-2">Preferred Date *</label>
          <input
            type="date"
            id="preferredDate"
            name="preferredDate"
            required
            value={formData.preferredDate}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-gold focus:border-brand-gold outline-none transition-colors"
          />
        </div>
        
        <div className="md:col-span-2">
          <label htmlFor="passengers" className="block text-sm font-medium text-gray-700 mb-2">Number of Passengers *</label>
          <input
            type="number"
            id="passengers"
            name="passengers"
            min="1"
            required
            value={formData.passengers}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-gold focus:border-brand-gold outline-none transition-colors"
            placeholder="e.g., 20"
          />
        </div>
        
        <div className="md:col-span-2">
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Additional Message</label>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-gold focus:border-brand-gold outline-none transition-colors resize-none"
            placeholder="Any specific requirements or details..."
          />
        </div>
      </div>
      
      <Button type="submit" size="lg" className="w-full h-14 text-lg">
        <Send className="w-5 h-5 mr-2" />
        Send Enquiry via WhatsApp
      </Button>
    </form>
  );
}

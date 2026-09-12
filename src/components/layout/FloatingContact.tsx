"use client";

import { MessageCircle, PhoneCall } from "lucide-react";

export function FloatingContact() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
      {/* Call Button - Mobile Only or optional on Desktop */}
      <a
        href="tel:+919733317971"
        className="md:hidden flex h-14 w-14 items-center justify-center rounded-full bg-brand-navy-dark text-brand-gold shadow-lg transition-transform hover:scale-110 active:scale-95 border border-brand-gold/30"
        aria-label="Call Now"
      >
        <PhoneCall className="h-6 w-6" />
      </a>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/919733317971?text=Hello%20Mahakal%20Bus%20Services%2C%20I%20would%20like%20to%20enquire%20about%20your%20travel%20services."
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-14 w-14 md:h-16 md:w-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-110 active:scale-95"
        aria-label="WhatsApp Us"
      >
        <MessageCircle className="h-7 w-7 md:h-8 md:w-8" />
      </a>
    </div>
  );
}

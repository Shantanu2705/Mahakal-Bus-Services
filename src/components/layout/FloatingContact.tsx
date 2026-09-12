"use client";

import { MessageCircle, PhoneCall } from "lucide-react";

export function FloatingContact() {
  return (
    <>
      {/* Call Button (Bottom Left) */}
      <div className="fixed bottom-6 left-6 z-50 animate-[bounce_3s_infinite]">
        <a
          href="tel:+919733317971"
          className="group relative flex h-14 w-14 md:h-16 md:w-16 items-center justify-center rounded-full bg-sunset-gradient text-white shadow-lg transition-transform duration-300 hover:scale-110 active:scale-95"
          aria-label="Call Now"
        >
          {/* Glowing Aura */}
          <div className="absolute inset-0 bg-sunset-gradient opacity-40 blur-md rounded-full group-hover:opacity-70 transition-opacity duration-300" />
          
          <PhoneCall className="relative z-10 h-6 w-6 md:h-7 md:w-7" />
          
          {/* Notification Ping */}
          <span className="absolute -top-1 -right-1 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-300 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-white border-2 border-orange-500"></span>
          </span>
        </a>
      </div>

      {/* WhatsApp Button (Bottom Right) */}
      <div className="fixed bottom-6 right-6 z-50">
        <a
          href="https://wa.me/919733317971?text=Hello%20Mahakal%20Bus%20Services%2C%20I%20would%20like%20to%20enquire%20about%20your%20travel%20services."
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex h-14 w-14 md:h-16 md:w-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform duration-300 hover:scale-110 active:scale-95"
          aria-label="WhatsApp Us"
        >
          {/* Glowing Aura */}
          <div className="absolute inset-0 bg-[#25D366] opacity-40 blur-md rounded-full group-hover:opacity-70 transition-opacity duration-300" />
          
          <MessageCircle className="relative z-10 h-7 w-7 md:h-8 md:w-8" />
        </a>
      </div>
    </>
  );
}

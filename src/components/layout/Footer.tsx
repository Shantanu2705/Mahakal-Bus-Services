import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { MapPin, Phone, Mail } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Our Fleet', href: '/our-fleet' },
    { name: 'Services', href: '/services' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <footer className="bg-white text-slate-600 pt-16 pb-8 border-t border-slate-100">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-12">
          
          {/* Brand & About */}
          <div className="lg:col-span-1 space-y-6">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="relative w-14 h-14 md:w-16 md:h-16 bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 transition-all duration-300 group-hover:shadow-md group-hover:scale-105 shrink-0">
                <img
                  src="/images/logo.jpeg"
                  alt="Mahakal Bus Services Logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="font-black text-xl md:text-2xl tracking-tight text-slate-800 leading-tight">MAHAKAL<br/><span className="text-orange-500 text-sm md:text-base">BUS SERVICES</span></span>
            </Link>
            <p className="text-sm leading-relaxed text-slate-500 font-medium">
              Premium travel services across West Bengal. Reliable, comfortable, and always on time. Experience the joy of traveling with us.
            </p>
            <div className="flex space-x-4">
              <a href="https://wa.me/919733317971" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-orange-50 hover:text-orange-500 transition-all">
                <span className="sr-only">WhatsApp</span>
                <Phone className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-slate-800 text-lg mb-6 tracking-wide">Explore</h3>
            <ul className="space-y-4">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-slate-500 hover:text-orange-500 transition-colors flex items-center font-medium group">
                    <span className="text-orange-300 mr-2 opacity-0 -translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0">›</span>
                    <span className="group-hover:translate-x-1 transition-transform">{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-slate-800 text-lg mb-6 tracking-wide">Our Services</h3>
            <ul className="space-y-4 font-medium text-slate-500">
              <li><Link href="/services" className="hover:text-orange-500 transition-colors">Daily Bus Travel</Link></li>
              <li><Link href="/services" className="hover:text-orange-500 transition-colors">Group Tours</Link></li>
              <li><Link href="/services" className="hover:text-orange-500 transition-colors">Outstation Trips</Link></li>
              <li><Link href="/services" className="hover:text-orange-500 transition-colors">Event Transportation</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-slate-800 text-lg mb-6 tracking-wide">Contact Us</h3>
            <ul className="space-y-5">
              <li className="flex items-start">
                <MapPin className="h-6 w-6 text-orange-400 mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-sm leading-relaxed text-slate-500 font-medium">Shiva Complex, P958+RJP, Medical Rd, Kadamtala, near Coffee 99, Bara Mohansingh, West Bengal 734011</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-orange-400 mr-3 flex-shrink-0" />
                <a href="tel:+919733317971" className="text-slate-500 hover:text-orange-500 transition-colors font-medium">097333 17971</a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-orange-400 mr-3 flex-shrink-0" />
                <a href="mailto:info@mahakalbusservices.com" className="text-slate-500 hover:text-orange-500 transition-colors font-medium">info@mahakalbusservices.com</a>
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6 md:gap-4">
          <p className="text-sm text-slate-400 font-medium">
            &copy; {currentYear} Mahakal Bus Services. All rights reserved.
          </p>
          
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8 text-sm text-slate-400 font-medium">
            <Link href="/privacy-policy" className="hover:text-orange-500 transition-colors">Privacy Policy</Link>
            <Link href="/terms-of-service" className="hover:text-orange-500 transition-colors">Terms of Service</Link>

            {/* Designed By Credit - Pop Up Style */}
            <div className="relative group animate-[bounce_3s_infinite]">
              <a 
                href="https://www.digitaldictionary.in" 
                target="_blank" 
                rel="noopener noreferrer"
                className="relative inline-flex items-center gap-3 px-6 py-2 rounded-xl transform transition-all duration-300 hover:scale-110 z-20"
              >
                {/* Glowing 3D Base layer */}
                <div className="absolute inset-0 bg-sunset-gradient opacity-30 blur-lg group-hover:opacity-60 transition-opacity duration-300 rounded-xl" />
                
                {/* Main Pop-up Body */}
                <div className="absolute inset-0 bg-white border border-orange-200 rounded-xl shadow-[0_15px_30px_rgba(255,126,95,0.2)]" />
                
                {/* Pop-up Tail (Tooltip pointer) */}
                <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-4 h-4 bg-white border-l border-b border-orange-200 transform rotate-45 hidden md:block" />
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white border-t border-l border-orange-200 transform rotate-45 block md:hidden" />

                {/* Content */}
                <span className="relative z-10 text-xs font-bold text-slate-600 flex items-center">
                  Designed by 
                  <span className="ml-1.5 px-2.5 py-1 rounded-lg bg-sunset-gradient text-white shadow-sm font-black tracking-wide">
                    Digital Dictionary
                  </span>
                </span>

                {/* Notification Dot */}
                <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-orange-500 border-2 border-white"></span>
                </span>
              </a>
            </div>

          </div>
        </div>
      </Container>
    </footer>
  );
}

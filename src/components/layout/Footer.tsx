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
              <div className="relative w-16 h-16 bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 transition-all duration-300 group-hover:shadow-md group-hover:scale-105">
                <img
                  src="/images/logo.jpeg"
                  alt="Mahakal Bus Services Logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="font-black text-2xl tracking-tight text-slate-800">MAHAKAL</span>
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

        <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-400 font-medium">
            &copy; {currentYear} Mahakal Bus Services. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-slate-400 font-medium">
            <Link href="/about" className="hover:text-orange-500 transition-colors">Privacy Policy</Link>
            <Link href="/about" className="hover:text-orange-500 transition-colors">Terms of Service</Link>
          </div>
        </div>
        
        {/* Designed By Credit */}
        <div className="pt-6 pb-2 text-center flex justify-center w-full relative">
          <a 
            href="https://www.digitaldictionary.in" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-2 px-6 py-2 rounded-full overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(255,126,95,0.4)]"
          >
            {/* Animated Background */}
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 via-rose-500/10 to-orange-500/10 group-hover:from-orange-500 group-hover:via-rose-500 group-hover:to-orange-500 transition-colors duration-500 rounded-full" />
            
            {/* Border glow */}
            <div className="absolute inset-0 border border-orange-200/50 group-hover:border-transparent rounded-full" />

            <span className="relative z-10 text-xs md:text-sm font-bold text-slate-500 group-hover:text-white transition-colors duration-300 flex items-center">
              Designed by <span className="ml-1.5 text-orange-500 group-hover:text-white transition-colors tracking-wide">Digital Dictionary</span>
            </span>
            <span className="relative z-10 flex h-3 w-3 ml-1">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75 group-hover:bg-white"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-orange-500 group-hover:bg-white"></span>
            </span>
          </a>
        </div>
      </Container>
    </footer>
  );
}

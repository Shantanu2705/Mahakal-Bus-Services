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

        <div className="pt-8 border-t border-slate-100 flex flex-col gap-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-4">
            <p className="text-sm text-slate-400 font-medium">
              &copy; {currentYear} Mahakal Bus Services. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8 text-sm text-slate-400 font-medium">
              <Link href="/privacy-policy" className="hover:text-orange-500 transition-colors">Privacy Policy</Link>
              <Link href="/terms-of-service" className="hover:text-orange-500 transition-colors">Terms of Service</Link>
            </div>
          </div>
          
          {/* Digital Dictionary Banner */}
          <a 
            href="https://www.digitaldictionarysiliguri.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="block w-full bg-slate-50 hover:bg-slate-100 transition-colors duration-500 rounded-[2rem] overflow-hidden group mb-4"
          >
            <div className="flex flex-col md:flex-row items-center justify-between p-8 md:p-12 lg:px-16">
              {/* Left Side */}
              <div className="flex-1 w-full text-center md:text-left">
                <h4 className="text-2xl md:text-3xl font-black text-slate-800 mb-8 tracking-tight uppercase group-hover:text-slate-900 transition-colors">
                  Comprehensive Agency Solutions
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 mb-8 max-w-2xl mx-auto md:mx-0">
                  <ul className="space-y-4 text-left">
                    <li className="flex items-center text-slate-700 font-semibold text-lg md:text-xl"><span className="w-2 h-2 rounded-full bg-slate-800 mr-4 shrink-0" />Website Development</li>
                    <li className="flex items-center text-slate-700 font-semibold text-lg md:text-xl"><span className="w-2 h-2 rounded-full bg-slate-800 mr-4 shrink-0" />Performance Marketing</li>
                    <li className="flex items-center text-slate-700 font-semibold text-lg md:text-xl"><span className="w-2 h-2 rounded-full bg-slate-800 mr-4 shrink-0" />Software Development</li>
                    <li className="flex items-center text-slate-700 font-semibold text-lg md:text-xl"><span className="w-2 h-2 rounded-full bg-slate-800 mr-4 shrink-0" />SEO</li>
                  </ul>
                  <ul className="space-y-4 text-left">
                    <li className="flex items-center text-slate-700 font-semibold text-lg md:text-xl"><span className="w-2 h-2 rounded-full bg-slate-800 mr-4 shrink-0" />Digital Marketing</li>
                    <li className="flex items-center text-slate-700 font-semibold text-lg md:text-xl"><span className="w-2 h-2 rounded-full bg-slate-800 mr-4 shrink-0" />Google Ads</li>
                    <li className="flex items-center text-slate-700 font-semibold text-lg md:text-xl"><span className="w-2 h-2 rounded-full bg-slate-800 mr-4 shrink-0" />Mobile App</li>
                    <li className="flex items-center text-slate-700 font-semibold text-lg md:text-xl"><span className="w-2 h-2 rounded-full bg-slate-800 mr-4 shrink-0" />ORM</li>
                  </ul>
                </div>
                <div className="text-xl md:text-2xl font-medium text-slate-800 group-hover:text-orange-500 transition-colors duration-300">
                  www.digitaldictionarysiliguri.com
                </div>
              </div>
              
              {/* Right Side Logo */}
              <div className="mt-12 md:mt-0 flex flex-col items-center justify-center shrink-0 md:pl-16 relative">
                <div className="relative w-40 h-40 flex items-center justify-center mb-3">
                  {/* Outer Rings */}
                  <div className="absolute inset-0 rounded-full border-[10px] border-amber-400 border-t-amber-300 border-b-amber-600 shadow-md group-hover:rotate-12 transition-transform duration-700 ease-out" />
                  <div className="absolute inset-4 rounded-full border-[5px] border-amber-500 border-t-amber-400 border-b-amber-700 shadow-inner group-hover:-rotate-12 transition-transform duration-700 ease-out" />
                  {/* Stylized D */}
                  <span className="text-9xl font-black text-transparent bg-clip-text bg-gradient-to-br from-amber-300 via-amber-500 to-amber-700 italic pr-3 drop-shadow-lg transform -skew-x-6 z-10">D</span>
                </div>
                <div className="text-center mt-3 transform group-hover:scale-105 transition-transform duration-500">
                  <div className="text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 uppercase tracking-tighter drop-shadow-sm leading-none" style={{textShadow: "1px 2px 3px rgba(0,0,0,0.15)"}}>
                    Digital Dictionary
                  </div>
                  <div className="text-base font-black text-amber-700 tracking-[0.5em] uppercase mt-2">
                    Siliguri
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>
      </Container>
    </footer>
  );
}

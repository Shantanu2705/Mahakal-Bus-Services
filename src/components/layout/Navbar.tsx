"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Menu, X, PhoneCall } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Our Fleet", href: "/fleet" },
  { name: "Services", href: "/services" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isHome = pathname === "/";
  
  // Permanent floating glass pill design
  const navBackground = "glass-card top-4 max-w-7xl mx-auto rounded-[2rem] md:rounded-[2.5rem] py-2 px-4 shadow-[0_10px_40px_rgba(0,0,0,0.05)]";
  const textColor = "text-slate-800";

  return (
    <header
      className={cn(
        "fixed z-50 left-4 right-4 md:left-8 md:right-8 transition-all duration-500 ease-out",
        navBackground
      )}
    >
      <div className="w-full px-1 md:px-4">
        <nav className="flex items-center justify-between" aria-label="Global">
          <div className="flex lg:flex-1">
            <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-2 relative group">
              <span className="sr-only">Mahakal Bus Services</span>
              
              {/* Premium Glow Effect */}
              <div className="absolute inset-0 bg-brand-gold/20 blur-2xl rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative bg-white border border-slate-100 rounded-2xl p-2 md:p-3 shadow-sm transition-all duration-300 group-hover:shadow-md">
                <img 
                  src="/images/logo.jpeg" 
                  alt="Mahakal Bus Services Logo" 
                  className="h-10 md:h-14 w-auto object-contain rounded-xl"
                />
              </div>
            </Link>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className={cn("-m-2.5 inline-flex items-center justify-center rounded-md p-2.5", textColor)}
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Menu className="h-7 w-7" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "text-sm font-bold transition-all duration-300 hover:-translate-y-0.5",
                  pathname === item.href ? "text-orange-500" : "text-slate-600 hover:text-orange-500"
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <Button asChild variant="primary" className="rounded-full shadow-md bg-sunset-gradient text-white border-none hover:shadow-lg hover:shadow-orange-500/30 font-bold transition-all hover:scale-105">
              <a href="https://wa.me/919733317971?text=Hello%20Mahakal%20Bus%20Services%2C%20I%20would%20like%20to%20enquire%20about%20your%20travel%20services." target="_blank" rel="noopener noreferrer">
                Book Journey <span aria-hidden="true" className="ml-1">→</span>
              </a>
            </Button>
          </div>
        </nav>
      </div>

      {/* Mobile menu */}
      <div className={cn("lg:hidden", mobileMenuOpen ? "fixed inset-0 z-50" : "hidden")}>
        <div className="fixed inset-0 bg-brand-navy-dark/80 backdrop-blur-sm" onClick={() => setMobileMenuOpen(false)} />
        {/* Mobile menu panel */}
        <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white/95 backdrop-blur-xl px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-slate-900/10 shadow-2xl">
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-2" onClick={() => setMobileMenuOpen(false)}>
              <span className="sr-only">Mahakal Bus Services</span>
              <div className="relative w-12 h-12 bg-white rounded-full overflow-hidden shadow-sm border border-slate-200">
                <img
                  src="/images/logo.jpeg"
                  alt="Mahakal Bus Services Logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="font-bold text-xl tracking-tight text-slate-800">MAHAKAL</span>
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-slate-700 hover:bg-slate-100 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <X className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-slate-100">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={cn(
                      "-mx-3 block rounded-lg px-3 py-4 text-xl font-bold leading-7 hover:bg-orange-50 hover:text-orange-500 transition-colors",
                      pathname === item.href ? "text-orange-500 bg-orange-50/50" : "text-slate-700"
                    )}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="py-6">
                <Button asChild className="w-full rounded-xl py-6 text-lg bg-sunset-gradient text-white border-none shadow-md" size="lg">
                  <a href="https://wa.me/919733317971?text=Hello%20Mahakal%20Bus%20Services%2C%20I%20would%20like%20to%20enquire%20about%20your%20travel%20services." target="_blank" rel="noopener noreferrer">
                    Book Journey Now
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

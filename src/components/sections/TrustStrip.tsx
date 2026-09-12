import { Container } from "@/components/ui/Container";
import { ShieldCheck, Clock, Bus, HeadphonesIcon } from "lucide-react";

const features = [
  {
    name: "Comfortable Travel",
    description: "Premium seating and interiors",
    icon: Bus,
  },
  {
    name: "Reliable Service",
    description: "On-time departures and arrivals",
    icon: Clock,
  },
  {
    name: "Well-Maintained Fleet",
    description: "Regular safety and quality checks",
    icon: ShieldCheck,
  },
  {
    name: "Easy Enquiry",
    description: "Quick booking via WhatsApp",
    icon: HeadphonesIcon,
  },
];

export function TrustStrip() {
  return (
    <section className="relative z-20 -mt-20 px-4">
      <Container>
        <div className="bg-white/90 backdrop-blur-xl border border-white shadow-[0_20px_50px_rgba(0,0,0,0.05)] rounded-[2.5rem] p-8 md:p-12 overflow-hidden relative">
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-orange-400/20 to-transparent rounded-full pointer-events-none" />
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-rose-400/20 to-transparent rounded-full pointer-events-none" />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 relative z-10">
            {features.map((feature, idx) => (
              <div 
                key={idx}
                className={`flex flex-col items-center text-center p-4 rounded-3xl transition-all duration-300 hover:-translate-y-2 hover:bg-slate-50 group ${idx !== 3 ? 'lg:border-r border-slate-100' : ''}`}
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-50 text-orange-600 mb-6 group-hover:bg-sunset-gradient group-hover:text-white transition-all duration-500 shadow-sm group-hover:shadow-[0_10px_20px_rgba(255,126,95,0.3)] group-hover:scale-110">
                  <feature.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3 tracking-tight">{feature.name}</h3>
                <p className="text-slate-500 font-medium">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

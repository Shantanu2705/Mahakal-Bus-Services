import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
  light?: boolean;
}

export function SectionHeading({ title, subtitle, centered = true, className, light = false }: SectionHeadingProps) {
  return (
    <div className={cn("mb-12 max-w-3xl", centered ? "mx-auto text-center" : "", className)}>
      <div className={cn("inline-flex items-center gap-2 mb-3", centered ? "justify-center" : "justify-start")}>
        <div className={cn("h-[2px] w-8", light ? "bg-brand-gold/70" : "bg-brand-gold")} />
        <span className={cn("uppercase tracking-widest text-sm font-semibold", light ? "text-brand-gold-bright" : "text-brand-gold")}>
          {subtitle || "Mahakal Bus Services"}
        </span>
        <div className={cn("h-[2px] w-8", light ? "bg-brand-gold/70" : "bg-brand-gold")} />
      </div>
      <h2 className={cn("text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight", light ? "text-white" : "text-brand-navy")}>
        {title}
      </h2>
    </div>
  );
}

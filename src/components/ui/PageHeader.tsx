import Image from "next/image";

interface PageHeaderProps {
  title: string;
  imageSrc: string;
}

export function PageHeader({ title, imageSrc }: PageHeaderProps) {
  return (
    <section className="relative h-[40vh] min-h-[350px] flex items-center justify-center overflow-hidden bg-slate-50 pt-20">
      <div className="absolute inset-0 z-0">
        <Image
          src={imageSrc}
          alt={title}
          fill
          priority
          className="object-cover opacity-60 scale-105 transform-gpu will-change-transform transition-transform duration-700 ease-out hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-50 via-slate-50/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-rose-500/20 mix-blend-color" />
      </div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none w-full text-center overflow-hidden">
        <h2 className="watermark-text text-slate-200/50 whitespace-nowrap">{title.toUpperCase()}</h2>
      </div>

      <div className="relative z-10 text-center px-4 w-full mt-10">
        <h1 className="text-5xl md:text-7xl font-black text-slate-800 mb-6 tracking-tight drop-shadow-sm">
          {title}
        </h1>
        <div className="h-2 w-24 bg-sunset-gradient mx-auto rounded-full shadow-[0_0_15px_rgba(255,126,95,0.4)]" />
      </div>
    </section>
  );
}

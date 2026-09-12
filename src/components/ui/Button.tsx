import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "link";
  size?: "sm" | "default" | "lg" | "icon";
  isLoading?: boolean;
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "default", isLoading, asChild = false, children, disabled, ...props }, ref) => {
    const variants = {
      primary: "bg-brand-navy text-white hover:bg-brand-navy-dark shadow-[0_4px_14px_0_rgba(7,26,43,0.39)] hover:shadow-[0_6px_20px_rgba(7,26,43,0.23)] border border-transparent hover:-translate-y-0.5",
      secondary: "bg-gold-metallic text-brand-navy-dark shadow-[0_4px_14px_0_rgba(201,151,26,0.39)] hover:shadow-[0_6px_20px_rgba(201,151,26,0.23)] font-bold border border-transparent hover:-translate-y-0.5",
      outline: "border-[1.5px] border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white bg-transparent shadow-[0_0_0_0_transparent] hover:shadow-[0_4px_14px_0_rgba(7,26,43,0.39)] hover:-translate-y-0.5",
      ghost: "hover:bg-brand-navy/5 text-brand-navy bg-transparent border border-transparent",
      link: "text-brand-navy underline-offset-4 hover:underline bg-transparent border border-transparent",
    };

    const sizes = {
      default: "h-11 px-6 py-2",
      sm: "h-9 rounded-md px-3",
      lg: "h-14 rounded-md px-8 text-lg",
      icon: "h-11 w-11",
    };

    const Comp = asChild ? Slot : "button";

    if (asChild) {
      return (
        <Comp
          ref={ref}
          disabled={disabled || isLoading}
          className={cn(
            "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
            variants[variant],
            sizes[size],
            className
          )}
          {...props}
        >
          {children}
        </Comp>
      );
    }

    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        className={cn(
          "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      >
        {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";

export { Button };

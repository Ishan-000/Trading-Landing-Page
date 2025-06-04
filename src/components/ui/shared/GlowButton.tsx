import React from "react";
import { Button } from "@/components/ui/button";
import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface GlowButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  icon?: LucideIcon;
  glowColor?: string; // e.g., 'brand-purple'
  showGlow?: boolean;
  className?: string;
}

const GlowButton = React.forwardRef<HTMLButtonElement, GlowButtonProps>(
  ({ children, className, icon: Icon, glowColor = 'brand-purple-dark', showGlow = true, ...props }, ref) => {
    return (
      <div className="relative inline-block group">
        {showGlow && (
            <div
            className={cn(
                "absolute -inset-0.5 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt",
                `bg-gradient-to-r from-${glowColor} via-pink-500 to-purple-600` // Example gradient
            )}
            style={{ background: `conic-gradient(from 180deg at 50% 50%, #00000000 0deg, ${glowColor === 'brand-purple-dark' ? 'rgb(98, 66, 165)' : 'rgb(163, 92, 162)'} 180deg, #00000000 360deg)`}}
            />
        )}
        <Button
          ref={ref}
          className={cn(
            "relative px-7 py-4 bg-brand-purple-dark hover:bg-brand-purple text-white rounded-[15px] text-base font-manrope font-medium leading-6 tracking-[-0.02em]",
            "transition-all duration-200 ease-in-out group-hover:shadow-[0_0_20px_5px_rgba(var(--color-glow),0.5)]", // Use CSS var for glow
            className
          )}
          style={{ '--color-glow': glowColor === 'brand-purple-dark' ? '98, 66, 165' : '163, 92, 162' } as React.CSSProperties}
          {...props}
        >
          {children}
          {Icon && <Icon className="ml-2 h-4 w-4" />}
        </Button>
      </div>
    );
  }
);
GlowButton.displayName = "GlowButton";

export default GlowButton;
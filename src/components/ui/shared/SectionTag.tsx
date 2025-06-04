import React from "react";
import { cn } from "@/lib/utils";

interface SectionTagProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const SectionTag = ({ children, className, ...props }: SectionTagProps) => {
  return (
    <div
      className={cn(
        "inline-block py-2 px-5 rounded-full text-sm backdrop-blur-[10px] border border-white/25",
        // The gradient text from Framer is:
        // background-image:linear-gradient(91deg, rgb(200, 186, 232) 0%, rgb(177, 149, 240) 98.2475%)
        "font-manrope font-semibold",
        className
      )}
      {...props}
    >
      <span className="text-gradient-purple-pink">
        {children}
      </span>
    </div>
  );
};

export default SectionTag;
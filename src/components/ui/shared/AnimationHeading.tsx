"use client";
import { motion } from "framer-motion";
import React from "react";
import { cn } from "@/lib/utils";

interface AnimatedHeadingProps {
  text: string;
  highlightParts?: string[];
  className?: string;
  highlightClassName?: string;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  staggerDelay?: number;
}

const AnimatedHeading: React.FC<AnimatedHeadingProps> = ({
  text,
  highlightParts = [],
  className,
  highlightClassName = "text-brand-pink",
  as: Component = "h2",
  staggerDelay = 0.03,
}) => {
  const words = text.split(/(\s+)/).filter(word => word.trim().length > 0);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: staggerDelay,
      },
    },
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 20, filter: "blur(5px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 100,
      },
    },
  };

  return (
    <Component className={cn("font-manrope", className)}>
      <motion.span
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        className="inline-flex flex-wrap"
      >
        {words.map((word, index) => {
          const isHighlighted = highlightParts.includes(word);
          
          return (
            <motion.span
              key={index}
              variants={wordVariants}
              className={cn(
                "inline-block mr-1.5",
                isHighlighted && highlightClassName
              )}
            >
              {word}
            </motion.span>
          );
        })}
      </motion.span>
    </Component>
  );
};

export default AnimatedHeading;
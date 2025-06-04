"use client";
import { useEffect, useRef } from "react";
import { animate, motion, useInView } from "framer-motion";

interface AnimatedCounterProps {
  from?: number;
  to: number;
  duration?: number;
  className?: string;
  precision?: number;
  startSymbol?: string;
  endSymbol?: string;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  from = 0,
  to,
  duration = 2, // Duration of animation in seconds
  className,
  precision = 0, // Number of decimal places
  startSymbol = "",
  endSymbol = ""
}) => {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(nodeRef, { once: true, amount: 0.5 });

  useEffect(() => {
    if (isInView && nodeRef.current) {
      const node = nodeRef.current;
      const controls = animate(from, to, {
        duration: duration,
        onUpdate(value) {
          node.textContent = `${startSymbol}${value.toLocaleString(undefined, {
            minimumFractionDigits: precision,
            maximumFractionDigits: precision,
          })}${endSymbol}`;
        },
      });
      return () => controls.stop();
    }
  }, [from, to, duration, isInView, precision, startSymbol, endSymbol]);

  // Initial display before animation
  const initialDisplay = `${startSymbol}${from.toLocaleString(undefined, {
    minimumFractionDigits: precision,
    maximumFractionDigits: precision,
  })}${endSymbol}`;

  return <motion.span ref={nodeRef} className={className}>{initialDisplay}</motion.span>;
};

export default AnimatedCounter;
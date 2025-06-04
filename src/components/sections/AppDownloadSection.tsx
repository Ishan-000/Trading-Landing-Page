"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";

const AppDownloadSection = () => {
  const targetRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress: sectionScrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const textX = useTransform(sectionScrollYProgress, [0.25, 0.75], ["-10%", "10%"]);
  const textOpacity = useTransform(
    sectionScrollYProgress,
    [0.15, 0.3, 0.7, 0.85],
    [0, 1, 1, 0] 
  );
  const textScale = useTransform(
    sectionScrollYProgress,
    [0.15, 0.3, 0.7, 0.85],
    [0.95, 1, 1, 0.95]
  );


  // QR Code Animation
  const qrWrapperRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: qrScrollProgress } = useScroll({
    target: qrWrapperRef,
    offset: ["start 0.9", "end 0.1"],
  });
  const qrScale = useTransform(qrScrollProgress, [0, 0.5, 1], [0.8, 1, 0.8]);
  const qrRotateY = useTransform(qrScrollProgress, [0, 1], [-8, 8]);
  const qrOpacity = useTransform(qrScrollProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0]);

  const qrImageSrc = "https://framerusercontent.com/images/wPXXd95jZIk3zRQtU2enBhy2g8.png?scale-down-to=512";

  return (
    <section
      ref={targetRef}
      className={cn(
        "w-full flex flex-col items-center justify-center text-white relative overflow-hidden",
        "min-h-[85vh] md:min-h-[80vh] lg:min-h-screen",
        "pt-12 pb-20 md:pt-16 md:pb-24 bg-dark-bg-secondary"
      )}
    >
      <div className="relative z-10 flex flex-col items-center text-center w-full h-full justify-center">
        {/* "Trade Anytime, Anywhere" Text */}
        <motion.h2
          style={{
            x: textX,
            opacity: textOpacity,
            scale: textScale, 
          }}
          className={cn(
            "font-manrope font-medium text-white whitespace-nowrap",
            "text-4xl sm:text-5xl md:text-6xl lg:text-[70px] xl:text-[75px]",
            "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
            "pointer-events-none z-[5]"
          )}
        >
          Trade Anytime, <span className="text-brand-pink">Anywhere</span>
        </motion.h2>

        {/* Container for QR Code and its Localized Glow */}
        <motion.div
          ref={qrWrapperRef}
          style={{
            scale: qrScale,
            opacity: qrOpacity,
          }}
          className="relative z-20 flex flex-col items-center" // QR assembly on top
        >
          {/* Localized Glow BEHIND QR */}
          <div
            className={cn(
              "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
              "w-[200px] h-[200px] sm:w-[230px] sm:h-[230px] md:w-[260px] md:h-[260px]", // Glow area
              "rounded-full z-0",
              "transform-gpu"
            )}
          >
            <div
              className="w-full h-full rounded-full"
              style={{
                background: 'radial-gradient(ellipse at center, rgba(230,220,255,0.65) 0%, rgba(163,92,162,0.35) 35%, rgba(163,92,162,0.05) 55%, rgba(163,92,162,0) 70%)',
                filter: 'blur(35px)', 
              }}
            />
          </div>

          {/* QR Code itself */}
          <motion.div
            style={{
              rotateY: qrRotateY,
              perspective: "1000px",
            }}
            className={cn(
              "relative z-10 bg-[#181818]/75 backdrop-blur-[4px] rounded-[22px] shadow-xl border border-white/10 cursor-pointer group",
              "w-[120px] h-[120px] p-2 sm:w-[130px] sm:h-[130px] sm:p-2.5 md:w-[155px] md:h-[155px] md:p-3"
            )}
          >
            <div className="relative w-full h-full bg-black/60 rounded-[16px] overflow-hidden flex items-center justify-center">
              <Image
                src={qrImageSrc}
                alt="QR Code"
                width={155}
                height={155}
                className="filter invert group-hover:scale-105 transition-transform duration-300 object-contain"
              />
            </div>
            <motion.div/>
          </motion.div>
        </motion.div>

        {/* App Store Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="z-10 mt-40 md:mt-38"
        >
          <Image
            src="https://framerusercontent.com/images/VK7tmBzTRU7cEgNp1WcXO7kHYuA.png"
            alt="Download on App Store and Google Play"
            width={100}
            height={60}
            className="object-contain"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default AppDownloadSection;
"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import SectionTag from "../ui/shared/SectionTag";
import AnimatedCounter from "../ui/shared/AnimatedCounter";
import GlowButton from "../ui/shared/GlowButton";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const PayoutsSection = () => {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const { scrollYProgress: headingScrollYProgress } = useScroll({
    target: headingRef,
    offset: ["start 0.9", "end 0.1"],
  });

  const headingBlur = useTransform(
    headingScrollYProgress,
    [0, 0.2, 0.8, 1],
    ["blur(8px)", "blur(0px)", "blur(0px)", "blur(8px)"]
  );
  const headingOpacity = useTransform(
    headingScrollYProgress,
    [0, 0.2, 0.8, 1],
    [0.5, 1, 1, 0.5]
  );

  const videoSrc = "https://framerusercontent.com/assets/xECpz8zWZNwZhoPNVva63Z5xs.mp4";

  return (
    <section className="w-full min-h-[80vh] md:min-h-screen flex flex-col items-center justify-between pt-16 md:pt-24 pb-0 bg-dark-bg-secondary text-white relative">
      <div
        className="absolute bottom-0 left-0 w-full h-[70vh] md:h-[80vh] z-0 pointer-events-none"
      >
        <div className="absolute inset-0 overflow-hidden">
          {videoSrc ? (
            <video
              src={videoSrc}
              className="absolute transform-gpu"
              style={{
                width: '180%',
                height: '180%',
                left: '50%',
                top: '100%',
                transform: 'translateX(-50%) translateY(-50%) scale(1.1)',
                objectFit: 'cover',
                filter: 'hue-rotate(30deg) opacity(0.75)',
              }}
              autoPlay
              loop
              muted
              playsInline
            />
          ) : (
            <div className="w-full h-full bg-black" />
          )}
        </div>
        <div
          className="absolute inset-x-0 top-0 h-1/2 z-[1]"
          style={{
            background: 'linear-gradient(to bottom, var(--colors-dark-bg-secondary) 0%, rgba(2,6,19,0) 100%)',
          }}
        />
      </div>

      <div className="relative z-10 flex flex-col items-center text-center px-4 mt-auto mb-auto pt-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          <SectionTag className="mb-4 md:mb-5 py-[6px] px-4 text-[13px] md:text-sm">
            Payouts
          </SectionTag>
        </motion.div>

        <motion.h2
          ref={headingRef}
          style={{ filter: headingBlur, opacity: headingOpacity }}
          className="font-manrope text-3xl md:text-[56px] font-medium text-white mb-2 md:mb-3 max-w-2xl md:max-w-3xl leading-tight md:leading-extra-tight tracking-[-0.02em]"
        >
          {"We've Paid Out Over".split(" ").map((word, i) => (
            <motion.span key={i} className="inline-block mr-[0.2em]">{word}</motion.span>
          ))}
          <br className="hidden sm:block" />
          {"$1M to Traders".split(" ").map((word, i) => (
             <motion.span key={i} className="inline-block mr-[0.2em]">{word}</motion.span>
          ))}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-sm md:text-base text-text-muted-foreground-light font-manrope mb-10 md:mb-16"
        >
          Your Trust is Our Fuel—Power Up with Abcd
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-['Helvetica',_sans-serif] text-7xl sm:text-8xl md:text-[180px] lg:text-[240px] font-normal text-white relative"
          style={{
            WebkitMaskImage: 'linear-gradient(180deg, #000000 70%, rgba(0,0,0,0.1) 100%)',
            maskImage: 'linear-gradient(180deg, #000000 70%, rgba(0,0,0,0.1) 100%)',
          }}
        >
          <AnimatedCounter from={998000} to={999165} duration={2.5} startSymbol="$" />
          <span className="text-brand-purple ml-1 md:ml-2">+</span>
        </motion.div>
      </div>

      <motion.div
        className="relative z-10 mt-auto pb-10 md:pb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <GlowButton
          icon={ArrowRight}
          showGlow={true}
          glowColor="brand-purple"
          className="bg-dark-bg-secondary hover:bg-dark-bg-secondary/80 border border-brand-purple/30 hover:border-brand-purple/70 py-2.5 px-6 text-sm md:text-base rounded-[12px] md:rounded-[15px]"
        >
          Are you Next?
        </GlowButton>
      </motion.div>
    </section>
  );
};

export default PayoutsSection;
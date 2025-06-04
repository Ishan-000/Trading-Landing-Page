"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import SectionTag from "../ui/shared/SectionTag";
import AnimatedHeading from "../ui/shared/AnimationHeading";
import GlowButton from "../ui/shared/GlowButton";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface TimelineItemProps {
  stepNumber: string; 
  stepLabel: string; 
  title: string;
  isLast?: boolean;
  alignTextToLeft: boolean;
  barColorClass?: string;
}

const TimelineItem: React.FC<TimelineItemProps> = ({
  stepNumber,
  stepLabel,
  title,
  isLast,
  alignTextToLeft,
  barColorClass = 'bg-brand-purple',
}) => {
  const itemRef = useRef(null);
  const { scrollYProgress: itemScrollYProgress } = useScroll({
    target: itemRef,
    offset: ["start 0.8", "end 0.5"],
  });

  // Parallax and fade effect for the entire item content
  const contentY = useTransform(itemScrollYProgress, [0, 1], ["20px", "-20px"]);
  const contentOpacity = useTransform(itemScrollYProgress, [0, 0.3, 0.7, 1], [0.3, 1, 1, 0.3]);

  // For the progress bar fill
  const barContainerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: barScrollYProgress } = useScroll({
    target: barContainerRef,
    offset: ["start center", "end center"]
  });
  const barFillHeight = useTransform(barScrollYProgress, [0, 1], ["0%", "100%"]);

  const numberRef = useRef(null);
  const { scrollYProgress: numberScrollYProgress } = useScroll({
    target: numberRef,
    offset: ["start 0.7", "end 0.3"]
  });
  const numberOpacity = useTransform(numberScrollYProgress, [0, 0.4, 0.6, 1], [0.1, 1, 1, 0.1]);

  return (
    <motion.div
      ref={itemRef}
      style={{ opacity: contentOpacity }}
      className={cn(
        "relative flex items-start w-full justify-center",
        !isLast ? "mb-8 md:mb-[70px]" : "mb-0" 
      )}
    >
      {/* Text content block */}
      <motion.div
        style={{ y: contentY }} 
        className={cn(
          "flex flex-col pt-1 md:pt-2 w-[200px] shrink-0",
          alignTextToLeft ? "text-left items-start mr-5 md:mr-8" : "text-right items-end ml-5 md:ml-8",
          alignTextToLeft ? "order-2" : "order-1"
        )}
      >
        <p className="text-sm text-text-muted-foreground-lighter font-manrope mb-0.5">
          {stepLabel}
        </p>
        <h3 className="text-base md:text-lg font-manrope font-semibold text-white leading-tight tracking-tight">
          {title}
        </h3>
      </motion.div>

      {/* Central Number and Line */}
      <div
        ref={barContainerRef}
        className={cn(
          "flex flex-col items-center shrink-0 mx-2 md:mx-4 relative z-10",
          alignTextToLeft ? "order-1" : "order-2"
        )}
      >
        <motion.p
          ref={numberRef}
          style={{ opacity: numberOpacity }}
          className="text-3xl md:text-[42px] font-manrope font-bold text-white mb-2 md:mb-3 leading-none tracking-tighter"
        >
          {stepNumber}
        </motion.p>
        {!isLast && (
          <div className="w-[2.5px] h-[120px] md:h-[150px] bg-white/[0.08] relative overflow-hidden rounded-full">
            <motion.div
              className={cn("absolute top-0 left-0 w-full", barColorClass)}
              style={{ height: barFillHeight }}
            />
          </div>
        )}
      </div>
    </motion.div>
  );
};

const ProcessSection = () => {
  const timelineData = [
    { stepNumber: "01", stepLabel: "Step 1", title: "Register your account", alignTextToLeft: false, barColorClass: 'bg-brand-purple' }, // Text on right
    { stepNumber: "02", stepLabel: "Step 2", title: "Deposit your funds", alignTextToLeft: true, barColorClass: 'bg-brand-pink' },    // Text on left
    { stepNumber: "03", stepLabel: "Step 3", title: "KYC", alignTextToLeft: false, barColorClass: 'bg-blue-500' },               // Text on right (assuming a blue for 3rd bar)
    { stepNumber: "04", stepLabel: "Step 4", title: "Start Trading & Earn Profits", alignTextToLeft: true,barColorClass: 'bg-brand-purple', isLast: false }, // Text on left
  ];

  return (
    <section className="w-full py-16 md:py-[100px] bg-dark-bg text-white relative overflow-x-hidden">
      {/* Background Image Pattern - from Framer */}
      <div
        className="absolute inset-0 w-full h-full opacity-25 z-0 pointer-events-none"
      >
        <img
          src="https://framerusercontent.com/images/DluJryXGyTqDXiRnDpJdmkoSbOU.png"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-10 flex flex-col items-center">
        {/* Header Content */}
        <div className="flex flex-col items-center text-center mb-12 md:mb-[70px] px-4">
          <SectionTag className="mb-4 md:mb-5 py-[6px] px-4 text-[13px] md:text-sm">Our Process</SectionTag>
          <AnimatedHeading
            text="Become a Abcd Pro in sec..."
            highlightParts={["Abcd", "Pro"]}
            highlightClassName="text-brand-pink"
            className="text-[34px] leading-extra-tight md:text-[56px] md:leading-extra-tight font-medium text-white mb-2.5 md:mb-3 max-w-xs md:max-w-3xl tracking-[-0.05em]"
            staggerDelay={0.02}
          />
          <p className="text-xs md:text-sm text-text-muted-foreground-light font-manrope tracking-tight">
            🚀 Sign up. Fund. Trade.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="w-full max-w-lg md:max-w-xl px-4"> {/* Adjusted max-width for timeline */}
            {timelineData.map((item) => (
              <TimelineItem
                key={item.stepNumber}
                stepNumber={item.stepNumber}
                stepLabel={item.stepLabel}
                title={item.title}
                isLast={item.isLast}
                alignTextToLeft={item.alignTextToLeft}
                barColorClass={item.barColorClass}
              />
            ))}
        </div>

        <div className="mt-10 md:mt-[70px] text-center">
          <GlowButton
            icon={ArrowRight}
            showGlow={true}
            className="py-2.5 px-6 text-sm md:text-base rounded-[12px] md:rounded-[15px]"
          >
            Open FREE Account
          </GlowButton>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
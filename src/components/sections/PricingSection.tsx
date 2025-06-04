"use client";
import React from "react";
import { motion } from "framer-motion";
import SectionTag from "../ui/shared/SectionTag";
import AnimatedHeading from "../ui/shared/AnimationHeading"; 
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface PlanFeature {
  name: string;
  vintage: string | React.ReactNode;
  cent: string | React.ReactNode;
  pro: string | React.ReactNode;
}

const planFeatures: PlanFeature[] = [
  { name: "Who It’s For", vintage: "Perfect for balanced, all-level traders looking for consistency and solid growth.", cent: "Designed for beginners ready to step into the trading world with minimal risk.", pro: "Ideal for experienced traders seeking precision, speed, and high-stakes performance." },
  { name: "Initial Capital Requirement", vintage: "$10%", cent: "$10", pro: "$500" },
  { name: "Spread Advantage", vintage: "from 0.2 pips", cent: "from 0.3 pips", pro: "from 0.1 pips" },
  { name: "Trading Fees", vintage: "No Commission", cent: "Zero Commission", pro: "No Commission" },
  { name: "Leverage Capacity", vintage: "1:Unlimited", cent: "1:Unlimited", pro: "1:Unlimited" },
  { name: "Minimum Lot Size", vintage: "0.01", cent: "Same", pro: "Same" },
  { name: "Trade Execution Limit", vintage: "200 trades during peak hours", cent: "200 trades during peak hours", pro: "200 trades during peak hours" },
  { name: "Open Position Capacity", vintage: "Unlimited", cent: "Unlimited", pro: "Unlimited" },
  { name: "Stop Out Threshold", vintage: "0%", cent: "0%", pro: "0%" },
  { name: "Margin Call Activation", vintage: "30%", cent: "30%", pro: "30%" },
  { name: "Swap Policy", vintage: "0%", cent: "0%", pro: "0%" },
  { name: "Risk Exposure", vintage: "Moderate", cent: "Low", pro: "High" },
  { name: "Asset Options",
    vintage: <>Forex, Crypto, Stocks,<br />Commodities, Indices</>,
    cent: <>Forex, Crypto, Stocks,<br />Commodities, Indices</>,
    pro: <>Forex, Crypto, Stocks,<br />Commodities, Indices</>
  },
];

interface PricingCardProps {
  planName: string;
  description: string | React.ReactNode;
  features: (string | React.ReactNode)[];
  isHighlighted?: boolean;
  cardBgClass: string;
  buttonBgClass: string;
  buttonHoverBgClass: string;
}

const PricingCard: React.FC<PricingCardProps> = ({
  planName,
  description,
  features,
  isHighlighted,
  cardBgClass,
  buttonBgClass,
  buttonHoverBgClass
}) => {
  return (
    <div className={cn(
      "rounded-[15px] p-px relative flex-1 min-w-[280px] md:min-w-[320px] max-w-xs md:max-w-sm",
      "w-full sm:w-auto",
      isHighlighted ? "z-10" : "z-0"
    )}>
      {isHighlighted && (
        <div
          className={cn(
            "absolute -inset-0.5 rounded-[16px] z-[-1]",
            "bg-crawl-glow-gradient animate-border-glow-crawl-anim"
          )}
          style={{
            backgroundSize: '400% 400%',
          }}
        />
      )}
      <div
        className={cn(
          "h-full flex flex-col rounded-[15px] overflow-hidden pt-7 pb-6 px-5 md:px-6",
          cardBgClass,
          "relative z-[1]"
        )}
      >
        <h3 className="text-2xl md:text-[30px] font-manrope font-semibold text-white text-center mb-1.5 leading-tight">
          {planName}
        </h3>
        <p className="text-xs md:text-sm font-manrope font-medium text-white text-center min-h-[60px] md:min-h-[66px] mb-5 px-2 md:px-4 leading-snug">
          {description}
        </p>

        <div className="space-y-[18px] flex-grow">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <p className="text-xs md:text-sm font-manrope font-semibold text-white leading-tight">
                {feature}
              </p>
              {index < features.length -1 && (
                 <div className="w-[200px] h-px bg-gradient-divider from-transparent via-divider-line/40 to-transparent mx-auto mt-[18px]" />
              )}
            </div>
          ))}
        </div>

        <Button
          className={cn(
            "mt-7 w-full py-2.5 md:py-3 rounded-[12px] text-sm md:text-base font-manrope font-semibold text-white transition-colors duration-200",
            buttonBgClass,
            buttonHoverBgClass
          )}
        >
          Start Trading
        </Button>
      </div>
    </div>
  );
};


const PricingSection = () => {
  const containerVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
  };

  return (
    <section className="w-full py-16 md:py-[100px] bg-dark-bg text-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center mb-10 md:mb-14">
          <SectionTag className="mb-4 md:mb-5 py-[6px] px-4 text-[13px] md:text-sm">
            Compare Plans
          </SectionTag>
          <AnimatedHeading
            text="Compare your Abcd plan"
            highlightParts={["Abcd"]}
            highlightClassName="text-brand-pink"
            className="text-4xl leading-tight md:text-[56px] md:leading-extra-tight font-medium text-white mb-2.5 md:mb-3 max-w-3xl tracking-[-0.05em]"
          />
          <p className="text-sm md:text-base text-text-muted-foreground-light font-manrope font-medium">
            Flexible Deposits for Every Trader
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="flex flex-col items-center md:flex-row md:items-stretch justify-center gap-x-3 gap-y-6"
        >
          {/* Features Column - only on desktop */}
          <motion.div
            variants={itemVariants}
            className="hidden lg:flex flex-col justify-around pt-20 pb-10 pr-8 min-w-[225px] shrink-0"
          >
            {planFeatures.map((feature, index) => (
              <div key={feature.name} className={cn(
                "h-[60px] flex items-center",
                index === 0 ? "min-h-[80px]" : ""
              )}>
                <p className="text-xs font-manrope font-medium text-text-muted-foreground-light leading-tight">
                  {feature.name}
                </p>
              </div>
            ))}
             <div className="h-[52px]"></div>
          </motion.div>

          {/* Pricing Cards */}
          <motion.div variants={itemVariants}>
            <PricingCard
              planName="Abcd Vintage"
              description={planFeatures.find(f => f.name === "Who It's For")?.vintage || ""}
              features={planFeatures.slice(1).map(f => f.vintage)}
              cardBgClass="bg-gradient-pricing-vintage-pro"
              buttonBgClass="bg-brand-purple"
              buttonHoverBgClass="hover:bg-brand-purple/90"
            />
          </motion.div>
          <motion.div variants={itemVariants}>
            <PricingCard
              planName="Abcd Cent"
              description={planFeatures.find(f => f.name === "Who It's For")?.cent || ""}
              features={planFeatures.slice(1).map(f => f.cent)}
              isHighlighted
              cardBgClass="bg-gradient-pricing-cent"
              buttonBgClass="bg-brand-purple"
              buttonHoverBgClass="hover:bg-brand-purple/90"
            />
          </motion.div>
          <motion.div variants={itemVariants}>
            <PricingCard
              planName="Abcd Pro"
              description={planFeatures.find(f => f.name === "Who It's For")?.pro || ""}
              features={planFeatures.slice(1).map(f => f.pro)}
              cardBgClass="bg-gradient-pricing-vintage-pro"
              buttonBgClass="bg-brand-purple"
              buttonHoverBgClass="hover:bg-brand-purple/90"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;
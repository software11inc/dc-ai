"use client";

import { Plug, Monitor, Users, BarChart3, Workflow, ShieldCheck } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { FeatureCard } from "@/components/ui/grid-feature-cards";

const features = [
  {
    title: "Drop-In Plugin",
    icon: Plug,
    description: "Install in PowerPoint or Google Slides. Your designers work normally — capture runs in the background.",
  },
  {
    title: "Cross-Platform",
    icon: Monitor,
    description: "One plugin, both ecosystems. Full Office.js API access at runtime across PowerPoint and Slides.",
  },
  {
    title: "Forward-Deploy Teams",
    icon: Users,
    description: "Put your best designers on real projects. Every engagement is a training run that pays for itself.",
  },
  {
    title: "Compounding Dataset",
    icon: BarChart3,
    description: "Your dataset grows every day your team works. Last month's sessions train next month's model.",
  },
  {
    title: "Direct Pipeline",
    icon: Workflow,
    description: "Operations flow straight into your training infrastructure. No post-hoc labeling, no reconstruction.",
  },
  {
    title: "Your Data, Your Moat",
    icon: ShieldCheck,
    description: "Everything captured stays yours. Build a proprietary dataset no competitor can replicate.",
  },
];

export default function GridFeatureSection() {
  return (
    <div className="py-16 md:py-32">
      <div className="mx-auto w-full max-w-5xl space-y-8 px-4">
        <AnimatedContainer className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-wide text-balance md:text-4xl lg:text-5xl xl:font-extrabold">
            Your AI training infrastructure
          </h2>
          <p className="text-muted-foreground mt-4 text-sm tracking-wide text-balance md:text-base">
            Set up a Center of Excellence. Equip your team. Start generating structured training data on day one.
          </p>
        </AnimatedContainer>

        <AnimatedContainer
          delay={0.4}
          className="grid grid-cols-1 divide-x divide-y divide-dashed border border-dashed sm:grid-cols-2 md:grid-cols-3"
        >
          {features.map((feature, i) => (
            <FeatureCard key={i} feature={feature} />
          ))}
        </AnimatedContainer>
      </div>
    </div>
  );
}

type ViewAnimationProps = {
  delay?: number;
  className?: React.ComponentProps<typeof motion.div>["className"];
  children: React.ReactNode;
};

function AnimatedContainer({ className, delay = 0.1, children }: ViewAnimationProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return children;
  }

  return (
    <motion.div
      initial={{ filter: "blur(4px)", translateY: -8, opacity: 0 }}
      whileInView={{ filter: "blur(0px)", translateY: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.8 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

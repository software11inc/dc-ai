"use client"

import { cn } from "@/lib/utils"
import { Component, type Step } from "@/components/ui/feature-carousel"

const steps: readonly Step[] = [
  {
    id: "1",
    name: "Chat",
    title: "Natural language to slides",
    description: "Describe what you need in plain English. The AI interprets your brief, selects the right layout patterns, and builds a first draft — no templates, no drag-and-drop.",
  },
  {
    id: "2",
    name: "Components",
    title: "A system, not clip art",
    description: "3,000+ semantically tagged components — headlines, data callouts, icon grids, comparison tables. The AI composes from a structured library, not a blank canvas.",
  },
  {
    id: "3",
    name: "Slides",
    title: "Pull from what already works",
    description: "Reference slide retrieval across 500+ shipped decks. Find the pitch page that closed the deal, the data viz that landed — and adapt it to the current project in seconds.",
  },
  {
    id: "4",
    name: "Data",
    title: "Numbers that stay alive",
    description: "Bind shapes to live data sources. Revenue figures, KPIs, market sizing — update once, propagate everywhere. No more stale screenshots of last quarter's numbers.",
  },
] as const

export default function FeatureCarouselSection() {
  return (
    <div className="py-16 md:py-32 px-6">
      <div className="mx-auto max-w-5xl">
        <div className="text-center mb-12">
          <p className="text-xs uppercase tracking-[0.14em] text-[#a1a1aa] mb-4">Out of the box</p>
          <h2 className="text-4xl font-semibold lg:text-5xl mb-4">Presentation AI that ships today.</h2>
          <p className="text-[#a1a1aa] text-lg max-w-2xl mx-auto">Chat interface, component system, slide retrieval, and live data bindings — all running inside PowerPoint and Google Slides.</p>
        </div>
        <div className="rounded-[34px] bg-neutral-700 p-2">
          <div className="relative z-10 grid w-full gap-8 rounded-[28px] bg-neutral-950 p-2">
            <Component
              title="The Plugin"
              description="Capture and execution in one codebase"
              steps={steps}
              step1img1Class={cn(
                "pointer-events-none w-[50%] border border-stone-100/10 transition-all duration-500 dark:border-stone-700/50",
                "max-md:scale-[160%] max-md:rounded-[24px] rounded-[24px] left-[25%] top-[57%] md:left-[35px] md:top-[29%]",
                "md:group-hover:translate-y-2"
              )}
              step1img2Class={cn(
                "pointer-events-none w-[60%] border border-stone-100/10 dark:border-stone-700/50 transition-all duration-500 overflow-hidden",
                "max-md:scale-[160%] rounded-2xl max-md:rounded-[24px] left-[69%] top-[53%] md:top-[21%] md:left-[calc(50%+35px+1rem)]",
                "md:group-hover:-translate-y-6"
              )}
              step2img1Class={cn(
                "pointer-events-none w-[50%] rounded-t-[24px] overflow-hidden border border-stone-100/10 transition-all duration-500 dark:border-stone-700",
                "max-md:scale-[160%] left-[25%] top-[69%] md:left-[35px] md:top-[30%]",
                "md:group-hover:translate-y-2"
              )}
              step2img2Class={cn(
                "pointer-events-none w-[40%] rounded-t-[24px] border border-stone-100/10 dark:border-stone-700 transition-all duration-500 rounded-2xl overflow-hidden",
                "max-md:scale-[140%] left-[70%] top-[53%] md:top-[25%] md:left-[calc(50%+27px+1rem)]",
                "md:group-hover:-translate-y-6"
              )}
              step3imgClass={cn(
                "pointer-events-none w-[90%] border border-stone-100/10 dark:border-stone-700 rounded-t-[24px] transition-all duration-500 overflow-hidden",
                "left-[5%] top-[50%] md:top-[30%] md:left-[68px]"
              )}
              step4imgClass={cn(
                "pointer-events-none w-[90%] border border-stone-100/10 dark:border-stone-700 rounded-t-[24px] transition-all duration-500 overflow-hidden",
                "left-[5%] top-[50%] md:top-[30%] md:left-[68px]"
              )}
              image={{
                step1light1: "https://www.cult-ui.com/_next/image?url=%2Ffeature-1.png&w=3840&q=75",
                step1light2: "https://www.cult-ui.com/_next/image?url=%2Ffeature-2.png&w=3840&q=75",
                step2light1: "https://www.cult-ui.com/_next/image?url=%2Ffeature-3.png&w=3840&q=75",
                step2light2: "https://www.cult-ui.com/_next/image?url=%2Ffeature-4.png&w=3840&q=75",
                step3light: "https://www.cult-ui.com/_next/image?url=%2Ffeature-2.png&w=3840&q=75",
                step4light: "https://www.cult-ui.com/_next/image?url=%2Ffeature-1.png&w=3840&q=75",
                alt: "Plugin demonstration",
              }}
              bgClass="bg-gradient-to-tr from-neutral-900/90 to-neutral-800/90"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

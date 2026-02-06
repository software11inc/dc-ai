"use client";

import { Calendar, Code, FileText, User, Clock } from "lucide-react";
import RadialOrbitalTimeline from "@/components/ui/radial-orbital-timeline";

const timelineData = [
  {
    id: 1,
    title: "Planning",
    date: "Jan 2024",
    content: "Project planning and requirements gathering phase.",
    category: "Planning",
    icon: Calendar,
    relatedIds: [2],
    status: "completed" as const,
    energy: 100,
  },
  {
    id: 2,
    title: "Design",
    date: "Feb 2024",
    content: "UI/UX design and system architecture.",
    category: "Design",
    icon: FileText,
    relatedIds: [1, 3],
    status: "completed" as const,
    energy: 90,
  },
  {
    id: 3,
    title: "Development",
    date: "Mar 2024",
    content: "Core features implementation and testing.",
    category: "Development",
    icon: Code,
    relatedIds: [2, 4],
    status: "in-progress" as const,
    energy: 60,
  },
  {
    id: 4,
    title: "Testing",
    date: "Apr 2024",
    content: "User testing and bug fixes.",
    category: "Testing",
    icon: User,
    relatedIds: [3, 5],
    status: "pending" as const,
    energy: 30,
  },
  {
    id: 5,
    title: "Release",
    date: "May 2024",
    content: "Final deployment and release.",
    category: "Release",
    icon: Clock,
    relatedIds: [4],
    status: "pending" as const,
    energy: 10,
  },
];

export default function TimelineSection() {
  return (
    <div className="py-16 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-12 md:grid-cols-2 lg:gap-16">
          {/* Left column: Text */}
          <div>
            <p className="text-xs uppercase tracking-[0.14em] text-[#a1a1aa] mb-4">The process</p>
            <h2 className="text-4xl font-semibold lg:text-5xl">From raw data to trained model.</h2>
            <p className="mt-6 text-[#a1a1aa] text-lg">
              Seven years of professional design work, structured into a training pipeline. Tag the shapes, diff the versions, narrate the reasoning, train the AI.
            </p>
            <ul className="mt-8 space-y-4 text-sm text-[#a1a1aa]">
              <li className="flex items-start gap-3">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-white/50 shrink-0" />
                <span><strong className="text-white">Tag</strong> — Semantic shape ontology applied in 4 minutes per deck</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-white/50 shrink-0" />
                <span><strong className="text-white">Diff</strong> — Automated version comparison across 387 projects</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-white/50 shrink-0" />
                <span><strong className="text-white">Narrate</strong> — Expert reasoning captured with every operation</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-white/50 shrink-0" />
                <span><strong className="text-white">Train</strong> — 10M+ data points across intent, judgment, and execution</span>
              </li>
            </ul>
          </div>

          {/* Right column: Orbital Timeline */}
          <div className="flex items-center justify-center min-h-[500px]">
            <RadialOrbitalTimeline timelineData={timelineData} />
          </div>
        </div>
      </div>
    </div>
  );
}

import MinimalHero from "@/components/ui/hero-minimalism";
import DatabaseWithRestApi from "@/components/ui/database-with-rest-api";
import ParticleBackground from "@/components/ui/particle-background";
import { Features } from "@/components/blocks/features-5";
import { CallToAction } from "@/components/ui/cta-3";
import TimelineSection from "@/components/blocks/timeline-section";
import GridFeatureSection from "@/components/blocks/grid-feature-section";
import FooterSection from "@/components/blocks/footer-section";

export default function Home() {
  return (
    <div className="dark relative" style={{ background: "#0a0a0a", color: "#fafafa" }}>
      {/* Global particle background */}
      <ParticleBackground />

      {/* Section 1: Hero */}
      <section className="relative z-10">
        <MinimalHero />
      </section>

      {/* Section 2: Database / API visualization */}
      <section className="relative z-10 flex flex-col items-center py-24 px-6">
        <div className="mb-12 text-center max-w-2xl">
          <p className="text-xs uppercase tracking-[0.14em] text-[#a1a1aa] mb-4">Direct data pipeline</p>
          <h2 className="text-4xl font-semibold lg:text-5xl mb-4">Every operation. Every decision.</h2>
          <p className="text-[#a1a1aa] text-lg">Your designers work in PowerPoint or Google Slides. The plugin captures shape-level operations and routes them straight to your training infrastructure.</p>
        </div>
        <DatabaseWithRestApi
          badgeTexts={{ first: "MOVE", second: "STYLE", third: "TEXT", fourth: "RESIZE" }}
          title="Shape-level operations → training pipeline"
          buttonTexts={{ first: "Plugin", second: "Ontology" }}
          circleText="AI"
        />
      </section>

      {/* Section 3: Timeline (two-column) */}
      <section className="relative z-10">
        <TimelineSection />
      </section>

      {/* Section 4: Features */}
      <section className="relative z-10">
        <Features />
      </section>

      {/* Section 5: Grid Feature Cards */}
      <section className="relative z-10">
        <GridFeatureSection />
      </section>

      {/* Section 6: CTA */}
      <section className="relative z-10 flex items-center justify-center py-24 px-6">
        <CallToAction />
      </section>

      {/* Existing dataset callout */}
      <section className="relative z-10 py-16 px-6">
        <div className="mx-auto max-w-2xl text-center space-y-4">
          <p className="text-xs uppercase tracking-[0.14em] text-[#a1a1aa]">Head start available</p>
          <h3 className="text-2xl font-semibold">10M+ data points ready to license</h3>
          <p className="text-[#a1a1aa] text-sm max-w-lg mx-auto">Seven years of production design work — operation logs, expert narration, versioned decks, and 132K supervised feedback pairs. Available as a non-exclusive license to accelerate your training pipeline from day one.</p>
          <a href="#" className="inline-block text-sm text-white underline decoration-zinc-600 underline-offset-4 hover:decoration-zinc-400 transition-colors mt-2">Request dataset details</a>
        </div>
      </section>

      {/* Section 7: Footer */}
      <section className="relative z-10">
        <FooterSection />
      </section>
    </div>
  );
}

import { lazy, Suspense } from "react";
import { AboutSection } from "@/features/portfolio/sections/about-section";
import { ContactSectionWrapper } from "@/features/portfolio/sections/contact-section-wrapper";
import { ExperienceSection } from "@/features/portfolio/sections/experience-section";
import { ExpertiseSection } from "@/features/portfolio/sections/expertise-section";
import { Footer } from "@/features/portfolio/sections/footer";
import { HeroSection } from "@/features/portfolio/sections/hero-section";
import { TestimonialsSection } from "@/features/portfolio/sections/testimonials-section";

const PortfolioShaderBackground = lazy(() =>
  import("@/features/portfolio/animated-background").then((m) => ({
    default: m.AnimatedBackground,
  })),
);

export function PortfolioPage() {
  return (
    <div className="min-h-screen" style={{ background: "var(--c-bg)" }}>
      <Suspense fallback={null}>
        <PortfolioShaderBackground />
      </Suspense>
      <div className="page-content">
        <main>
          <HeroSection />
          <ExpertiseSection />
          <ExperienceSection />
          <AboutSection />
          <TestimonialsSection />
          <ContactSectionWrapper />
        </main>
        <Footer />
      </div>
    </div>
  );
}

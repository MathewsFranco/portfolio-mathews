import { motion } from "framer-motion";
import { Code2, Spade, Coffee } from "lucide-react";
import { fade } from "@/features/portfolio/animations";
import { SectionHeader } from "@/features/portfolio/components/section-header";
import { aboutContent } from "@/lib/portfolio-content";

const cards = [
  {
    icon: Code2,
    kicker: "Frontend · Engineering",
    title: "The Engineer",
    body: aboutContent.intro,
  },
  {
    icon: Spade,
    kicker: "Poker · Strategy",
    title: "The Strategist",
    body: aboutContent.poker,
  },
  {
    icon: Coffee,
    kicker: "Life · Craft",
    title: "The Human",
    body: aboutContent.beyond,
  },
] as const;

export function AboutSection() {
  return (
    <section id="about" className="section">
      <div className="shell">
        <SectionHeader index="03" kicker="About" title="In a nutshell" />

        <div className="about-cards">
          {cards.map(({ icon: Icon, kicker, title, body }, i) => (
            <motion.div
              key={title}
              className="about-card"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fade}
              custom={i}
            >
              <div className="about-card-grain" />

              <div className="about-card-identity">
                <div className="about-card-icon">
                  <Icon size={28} strokeWidth={1.25} />
                </div>
                <p className="about-card-kicker">{kicker}</p>
                <h3 className="about-card-title">{title}</h3>
              </div>

              <div className="about-card-reveal">
                <p>{body}</p>
              </div>

              <div className="about-card-pulse" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

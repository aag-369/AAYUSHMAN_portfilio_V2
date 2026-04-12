import dynamic from "next/dynamic";
import { NavBar } from "@/components/NavBar";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { SkillsSection } from "@/components/SkillsSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { CertificationsSection } from "@/components/CertificationsSection";
import { EducationSection } from "@/components/EducationSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

const QuantumParticleField = dynamic(() => import("@/components/QuantumParticleField"), { ssr: false });

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <QuantumParticleField />
      <NavBar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
      <CertificationsSection />
      <EducationSection />
      <ContactSection />
      <Footer />
    </main>
  );
}

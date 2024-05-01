import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import FAQPage from "@/components/sections/FAQ";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Project";
import SkillSection from "@/components/sections/Skill";

export default function Home() {
  return (
    <main className="px-20">
      <Hero />
      <About />
      <SkillSection />
      <Projects />
      <FAQPage />
      <Contact />
    </main>
  );
}

// import sections
import About from "@/sections/About";
import Activity from "@/sections/Activity";
import Contact from "@/sections/Contact";
import Faq from "@/sections/FAQ";
import Hero from "@/sections/Hero";
import Projects from "@/sections/Projects";
import Service from "@/sections/Service";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Projects />
      <Activity />
      <Service />
      <Faq />
      <Contact />
    </main>
  );
}

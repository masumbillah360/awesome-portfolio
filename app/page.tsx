import Hero from "./src/section/Hero";
import About from "./src/section/About";
import Activity from "./src/section/Activity";
import Service from "./src/section/Service";
import Contact from "./src/section/Contact";
import Projects from "./src/section/Projects";

export default function Home() {
  return (
    <main className="lg:p-24">
      <Hero />
      <About />
      <Projects />
      <Activity />
      <Service />
      <Contact />
    </main>
  );
}

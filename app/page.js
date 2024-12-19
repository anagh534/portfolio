import About from "./about";
import Contact from "./contact";
import Hero from "./hero";
import Skills from "./skills";
import Works from "./works";

export default function Home() {
  return (
    <>
      <Hero/>
      <About/>
      <Skills/>
      <Works/>
      <Contact/>
    </>
  );
}

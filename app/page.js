import About from "@/components/home/about";
import Contact from "@/components/home/contact";
import Hero from "@/components/home/hero";
import Skills from "@/components/home/skills";
import Works from "@/components/home/works";

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

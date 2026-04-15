import Hero from "../components/home/Hero";
import FeaturedWork from "../components/home/FeaturedWork";
import Skills from "../components/home/Skills";
import CTA from "../components/home/CTA";
import About from "@/components/home/About";

const Divider = () => (
  <div className="max-w-5xl mx-auto px-6">
    <hr className="border-neutral-100 dark:border-neutral-800/60" />
  </div>
);

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white dark:bg-neutral-950 pt-24">
      <Hero />
      <Divider />
      <FeaturedWork />
      <Divider />
      <About />
      <Divider />
      <Skills />
      <CTA />
    </main>
  );
}
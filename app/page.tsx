import AboutSection from "@/components/about";
import Hero from "@/components/hero";
import Plans from "@/components/plans";
import Services from "@/components/services";
import TrainingSection from "@/components/training-section";

export default function Home() {
  return (
    <div>
      <Hero />
      <Services />
      <Plans />
      <TrainingSection />
      <AboutSection />
    </div>
  );
}

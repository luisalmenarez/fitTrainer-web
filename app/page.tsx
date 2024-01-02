import Hero from "@/components/hero";
import Plans from "@/components/plans";
import Services from "@/components/services";
import TrainingSection from "@/components/trainig-section";

export default function Home() {
  return (
    <div>
      <Hero />
      <Services />
      <Plans />
      <TrainingSection />
    </div>
  );
}

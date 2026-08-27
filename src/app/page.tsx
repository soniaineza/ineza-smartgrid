import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import TechStack from "@/components/TechStack";
import VisionMission from "@/components/VisionMission";
import Contact from "@/components/Contact";

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <WhyChooseUs />
      <TechStack />
      <VisionMission />
      <Contact />
    </>
  );
}

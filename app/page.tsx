import Contact from "@/components/Contact";
import Dock from "@/components/Dock";
import Hero from "@/components/Hero";
import ProjectStack from "@/components/ProjectStack";
import Stack from "@/components/Stack";

export default function Portfolio() {
  return (
    <>
      <main>
        <Hero />
        <ProjectStack />
        <Stack />
      </main>
      <Contact />
      <Dock />
    </>
  );
}

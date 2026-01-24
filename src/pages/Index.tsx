import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import EventGallery from "@/components/EventGallery";
import Sponsors from "@/components/Sponsors";
import CodeOfConduct from "@/components/CodeOfConduct";
import GettingStarted from "@/components/GettingStarted";
import Timeline from "@/components/Timeline";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Timeline />
      <GettingStarted />
      <About />
      <EventGallery />
      <Sponsors />
      <CodeOfConduct />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Sponsors from "@/components/Sponsors";
import CodeOfConduct from "@/components/CodeOfConduct";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Sponsors />
      <CodeOfConduct />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;

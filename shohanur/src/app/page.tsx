// app/page.tsx
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Portfolio from "./components/Portfolio";
import ContactSection from "./components/ContactSection";
import Services from "./components/Services";
import Gallery from "./components/Gallery";


export default function Home() {
  return (
    <>
      <section id="home">
        <Hero />
      </section>

      <section id="stats">
        <Stats />
      </section>

      <section id="portfolio">
        <Portfolio />
      </section>

      <Gallery />

      <section id="services">
        <Services />
      </section>

      <section id="contact">
        <ContactSection />
      </section>


    </>
  );
}

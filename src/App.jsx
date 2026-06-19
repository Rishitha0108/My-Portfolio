import ArcaneBackground from './components/effects/ArcaneBackground';
import MagicCursor from './components/effects/MagicCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Impact from './components/Impact';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="grain">
      {/* Skip link for keyboard / screen-reader users */}
      <a
        href="#about"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-gold focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-obsidian-950"
      >
        Skip to content
      </a>

      <ArcaneBackground />
      <MagicCursor />
      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Impact />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

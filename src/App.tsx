import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Businesses from "./components/Businesses";
import Experience from "./components/Experience";
import Certifications from "./components/Certifications";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-ink-900 text-mist-100 overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Businesses />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;

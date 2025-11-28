import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HotNews from "./components/HotNews";
import Dashboard from "./components/Dashboard";
import Projects from "./components/Projects";
import Stats from "./components/Stats";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";
import LogoSlider from "./components/LogoSlider";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="font-mulish">
      <Navbar />
      <Hero />
      <HotNews />
      <Dashboard />
      <Projects />
      <Stats />
      <About />
      <Services />
      <Contact />
      <LogoSlider />
      <Footer />
    </div>
  );
}

export default App;

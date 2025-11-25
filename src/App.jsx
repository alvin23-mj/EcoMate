import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Dashboard from "./components/Dashboard";
import Services from "./components/Services";
import Stats from "./components/Stats";
import About from "./components/About";
import LogoSlider from "./components/LogoSlider";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="font-mulish">
      <Navbar />
      <Hero />
      <Dashboard />
      <Services />
      <Stats />
      <About />
      <LogoSlider />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

import About from "../components/About";
import Contact from "../components/Contact";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Resume from "../components/Resume";
import Skills from "../components/Skills";
import Testimonials from "../components/Testimonials";
import WorkSamples from "../components/WorkSamples";
import Footer from "../components/Footer"; // Import Footer component

const Home = () => {
  return (
    <div>
      <Navbar />
      <div id="hero">
        <Hero />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="work">
        <WorkSamples />
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div id="testimonials">
        <Testimonials />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <Footer /> {/* Add Footer component */}
    </div>
  );
};

export default Home;

import "./App.css";
import Display from "./pages/Display";
import FAQ from "./pages/FAQ";
import Footer from "./pages/Footer";
import HeroSection from "./pages/HeroSection";
import Navbar from "./pages/Navbar";
import Services from "./pages/Services";
import Testimonials from "./pages/Testimonials";
import Work from "./pages/Work";
function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Display />
      <Work />
      <Services />
      <Testimonials />
      <FAQ />
      <Footer />
    </>
  );
}

export default App;

import "./App.css";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Navs from "./Components/Header/Navbar";
import AboutSection from "./Components/Home/About";
import Hero from "./Components/Home/Hero";
import ServiceSection from "./Components/Home/Services";
import WhyChooseUs from "./Components/Home/WhyChhose";

function App() {

  return (
    <>
      <Header />
      <Navs />
      <Hero />
      <AboutSection />
      <ServiceSection />
      <WhyChooseUs />
      <Footer />
    </>
  );
}

export default App;

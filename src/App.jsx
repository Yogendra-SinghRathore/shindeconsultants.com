import Footer from "./components/Footer"
import Home from "./pages/Home"
import Navbar from "./components/Navbar"
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ContactUs from "./pages/ContactUs";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import About from "./pages/About";
import Construction from "./pages/Construction";
import Elevation from "./pages/Elevation";
import Floor from "./pages/Floor";
import Interior from "./pages/Interior";
import WhatsAppFloat from "./components/Whatsappfloat";



function App() {

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out-cubic",
      once: true,
      offset: 80,
    });
  }, []);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/terms" element={<Terms/>} />
        <Route path="/privacy" element={<Privacy/>} />
        <Route path="/about" element={<About/>} />

        <Route path="/construction" element={<Construction/>} />
        <Route path="/elevation" element={<Elevation/>} />
        <Route path="/floor" element={<Floor/>} />
        <Route path="/interior" element={<Interior/>} />

      </Routes>
      <Footer />
      <WhatsAppFloat/>
    </>
  )
}

export default App

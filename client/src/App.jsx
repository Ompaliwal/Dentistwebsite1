import { Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async'; // ✅ Import HelmetProvider

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import HeroSection from './pages/HeroSection';
import Services from './pages/Services';
import Contact from './pages/Contact';
import AboutUs from './pages/aboutus';

function App() {
  return (
    <HelmetProvider> {/* ✅ Wrap the app with HelmetProvider */}
      <Navbar />

      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>

      <Footer />
    </HelmetProvider>
  );
}

export default App;

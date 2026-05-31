import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Components
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Services from './components/Services/Services';
import Portfolio from './components/Portfolio/Portfolio';
import Results from './components/Results/Results';
import Testimonials from './components/Testimonials/Testimonials';
import Contact from './components/Contact/Contact';
import PortfolioDetail from './components/PortfolioDetail/PortfolioDetail'; // New Detail Page
import WebDevelopment from './components/Website/Website';
import VideoEditing from './components/Editing/Editing';
import PosterDesign from './components/Poster/Poster';
import MetaAds from './components/MetaAds/MetaAds';
import ScrollToTop from './components/ScrollToTop';

function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Results />
      <Testimonials />
      <Contact />
    </>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <main className="app-container">
        <div className="luxury-bg"></div>
        
        <Routes>
          {/* Main Home Route */}
          <Route path="/" element={<Home />} />
          
          {/* Portfolio Detail Routes */}
          <Route path="/portfolio/web-development" element={<WebDevelopment />} />
          <Route path="/portfolio/video-editing" element={<VideoEditing />} />
          <Route path="/portfolio/poster-design" element={<PosterDesign />} />
          <Route path="/portfolio/meta-ads" element={<MetaAds />} />
        </Routes>
        
        <footer style={{ padding: '40px', textAlign: 'center', opacity: '0.5', fontSize: '0.8rem' }}>
          © {new Date().getFullYear()} SAM NITHISH. ALL RIGHTS RESERVED.
        </footer>
      </main>
    </Router>
  );
}

export default App;
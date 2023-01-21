import React from 'react';
import Navbar from './layouts/Navbar';
import './_app.scss';
import './_typography.scss'
import Services from './pages/Services';
import Competencies from './pages/Competencies';
import Contact from './pages/Contact';
import Hero from './pages/Hero';
import Social from './components/Social';
import Footer from './layouts/Footer';
import Portfolio from './pages/Portfolio';
import ScrollButton from './components/ScrollToTop';
// import MuiAccordion from './pages/Accordion';


function App() {
  return (
    <>
      <body>
      <div className="App">
        <Navbar />
        <Social />
        <div className="content">
        <Hero />
        <Services />
        <Competencies />
        {/* <MuiAccordion /> */}
        <Portfolio />
        <Contact />
        </div>
        <ScrollButton />
        <Footer />
      </div>
      </body>
    </>
  );
}

export default App;

import React from 'react';
import Navbar from './layouts/Navbar';
import './App.scss';
import './_typography.scss'
import Services from './pages/Services';
import Competencies from './pages/Competencies';
import Contact from './pages/Contact';
import Hero from './pages/Hero';
import Social from './components/Social';
import Footer from './layouts/Footer';
import Portfolio from './pages/Portfolio';


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
        <Portfolio />
        <Contact />
        </div>
        <Footer />
      </div>
      </body>
    </>
  );
}

export default App;

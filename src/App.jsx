import React from 'react';
import Navbar from './layouts/Navbar';
import './App.scss';
import './_typography.scss'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Services from './pages/Services';
import Competencies from './pages/Competencies';
import Work from './pages/Portfolio';
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
      {/* <Router>
      <Navbar />
      <Routes>
        <Route path='/competencies' element={<Competencies />} />
      </Routes>
      </Router> */}
        {/* <Routes>
          <Route path='/' />
          <Route path='/services' element={<Services />} />
          <Route path='/competencies' element={<Competencies />} />
          <Route path='/work' element={<Work />} />
          <Route path='contact' element={<Contact />} />
        </Routes>
      </Router> */}
      {/* <Navbar /> */}
    </>
  );
}

export default App;

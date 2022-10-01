import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Services from './components/pages/Services';
import Competencies from './components/pages/Competencies';
import Work from './components/pages/Work';
import Contact from './components/pages/Contact';

function App() {
  return (
    <>
      <Router>
      <Navbar />
        <Routes>
          <Route path='/' />
          <Route path='/services' element={<Services />} />
          <Route path='/competencies' element={<Competencies />} />
          <Route path='/work' element={<Work />} />
          <Route path='contact' element={<Contact />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

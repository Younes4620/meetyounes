import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import NotFound from './NotFound';
import Navigation from './Navigation';
import Footer from './Footer';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
         <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} /> {/* Fallback for unmatched routes */}
        </Routes>
        <Navigation></Navigation>
        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;

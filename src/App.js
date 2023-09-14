import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Work from './Work';
import Contact from './Contact';
import NotFound from './NotFound';
import Footer from './Footer';
import Header from './Header';
import MobileMenu from './MobileMenu';
import './styles.scss';

function App() {
  return (
    <Router>
      <div className="App">
      <Header/>
      <MobileMenu />
         <Routes>
          <Route path="/meetyounes" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/work" element={<Work />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} /> 
         </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;

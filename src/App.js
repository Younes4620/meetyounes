import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Work from './Work';
import Contact from './Contact';
import NotFound from './NotFound';
import Navigation from './Navigation';
import Footer from './Footer';
import Header from './Header';
import './styles.scss';

function App() {
  return (
    <Router>
      <div className="App">
      <Header></Header>
      <Navigation></Navigation>
         <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/work" element={<Work />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} /> {/* Fallback for unmatched routes */}
        </Routes>
        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;

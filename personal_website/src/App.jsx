import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Footer from './components/Footer';
import './index.css'; // Import global styles

const App = () => {
  return (
    <div>
      <Header />
      <Home />
      <About />
      <Experience />
      <Education />
      <Footer />
    </div>
  );
};

export default App;

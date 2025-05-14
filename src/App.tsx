import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Education from './components/Education';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { Element } from 'react-scroll';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? 'bg-neutral-950 text-neutral-50' : 'bg-neutral-50 text-neutral-900'}`}>
      <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      
      <Element name="home">
        <Hero isDarkMode={isDarkMode} />
      </Element>
      
      <Element name="education" className="py-16">
        <Education isDarkMode={isDarkMode} />
      </Element>
      
      <Element name="projects" className="py-16">
        <Projects isDarkMode={isDarkMode} />
      </Element>
      
      <Element name="skills" className="py-16">
        <Skills isDarkMode={isDarkMode} />
      </Element>
      
      <Element name="certificates" className="py-16">
        <Certificates isDarkMode={isDarkMode} />
      </Element>
      
      <Element name="contact" className="py-16">
        <Contact isDarkMode={isDarkMode} />
      </Element>
      
      <Footer isDarkMode={isDarkMode} />
    </div>
  );
}

export default App;
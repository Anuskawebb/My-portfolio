import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? 'dark' : ''}>
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Hero darkMode={darkMode} />
      <About darkMode={darkMode} />
      <Skills darkMode={darkMode} />
      <Projects darkMode={darkMode} />
      <Contact darkMode={darkMode} />
    </div>
  );
}

export default App;
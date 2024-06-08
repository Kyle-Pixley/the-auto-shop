import React, { useState, useEffect } from 'react';
import Contact from './Components/Contact/Contact';
import Nav from './Components/Nav/Nav';
import './App.css';

function App() {

  const [ isDesktop, setIsDesktop ] = useState(window.innerWidth >= 700);
  const [ navMenu, isNavMenu ] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 700px)');

    const handleMediaQueryChange = e => {
      setIsDesktop(e.matches);
    };

    mediaQuery.addEventListener('change', handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    };
  }, [])
  
  return (
    <div id='webpage-container'>

      {isDesktop ? <Contact /> : null}

      <Nav isDesktop={isDesktop} />
    </div>
  )
}

export default App;
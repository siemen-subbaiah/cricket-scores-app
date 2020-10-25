import React, { useEffect, useState } from 'react';
import Main from './components/Main';
import Navbar from './components/Navbar';

function App() {
  const [theme, setTheme] = useState('dark-theme');

  const toggleTheme = () => {
    theme === 'light-theme' ? setTheme('dark-theme') : setTheme('light-theme');
  };

  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);

  return (
    <div className="App">
      <Navbar toggleTheme={toggleTheme} />
      <Main />
    </div>
  );
}

export default App;

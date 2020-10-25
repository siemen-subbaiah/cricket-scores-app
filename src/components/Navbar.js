import React from 'react';
import { GiCricketBat } from 'react-icons/gi';
import { CgDarkMode } from 'react-icons/cg';

const Navbar = ({ toggleTheme }) => {
  return (
    <nav>
      <header>
        <h1>
          CRICKET SCORE APP
          <GiCricketBat />
        </h1>
      </header>
      <div className="dark">
        <button className="icon-btn" onClick={toggleTheme}>
          <CgDarkMode />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

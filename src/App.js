import React from 'react';
import { ThemeProvider, useTheme } from './ThemeContext';
import './style.css';

const ThemeToggleButton = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme}>
      {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
    </button>
  );
};

const App = () => {
  return (
    <ThemeProvider>
      <div className="app">
        <h1>Dark and Light Theme in React</h1>
        <ThemeToggleButton />
      </div>
    </ThemeProvider>
  );
};

export default App;

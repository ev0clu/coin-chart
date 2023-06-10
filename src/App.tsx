import React, { useState } from 'react';
import ThemeContext from './helper/ThemeContext';
import '../src/assets/styles/App.css';

import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {
  const [theme, setTheme] = useState('light');

  const handleThemeClick = (
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    e.preventDefault;
    const data: string = theme === 'light' ? 'dark' : 'light';
    setTheme(data);
    //saveTheme(data);
  };
  return (
    <ThemeContext.Provider value={theme}>
      <div
        className={`${
          theme === 'light'
            ? 'bg-themeLightColor text-themeDarkColor'
            : 'bg-themeDarkColor text-themeLightColor'
        } flex h-screen flex-col items-stretch`}
      >
        <Header handleThemeClick={handleThemeClick} />
        <Main theme={theme} />
        <Footer />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;

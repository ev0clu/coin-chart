import { useState, useEffect } from 'react';
import ThemeContext from './helper/ThemeContext';
import '../src/assets/styles/App.css';

import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {
  const [theme, setTheme] = useState('light');
  const [isRestoredTheme, setIsRestoredTheme] = useState(false);

  useEffect(() => {
    restoreTheme();
  }, []);

  const handleThemeClick = (
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    e.preventDefault;
    const data: string = theme === 'light' ? 'dark' : 'light';
    setTheme(data);
    saveTheme(data);
  };

  const saveTheme = (data: string) => {
    localStorage.setItem('data-theme', JSON.stringify(data));
  };

  const restoreTheme = () => {
    const themeData = localStorage.getItem('data-theme');
    let data = '';

    if (themeData === null) {
      data = 'light';
    } else {
      data = JSON.parse(themeData);
    }
    setIsRestoredTheme(true);
    setTheme(data);
    saveTheme(data);
  };

  return (
    <ThemeContext.Provider value={theme}>
      <div
        className={`${
          theme === 'light'
            ? 'bg-themeLightColor text-themeDarkColor'
            : 'bg-themeDarkColor text-themeLightColor'
        } flex h-screen w-screen flex-col items-stretch`}
      >
        <Header handleThemeClick={handleThemeClick} />
        {isRestoredTheme ? <Main /> : ''}
        <Footer />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;

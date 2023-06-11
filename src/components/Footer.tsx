import React, { useContext } from 'react';
import ThemeContext from '../helper/ThemeContext';

const Footer = () => {
  const theme = useContext(ThemeContext);

  return (
    <footer className="text-center">
      <p>
        Copyright ©{' '}
        <a
          href={import.meta.env.VITE_HTTP_URL}
          target="_blank"
          rel="noreferrer"
          className={`${
            theme === 'light' ? 'text-blue' : 'text-blue'
          } font-medium`}
        >
          {import.meta.env.VITE_AUTHOR}
        </a>{' '}
        2023
      </p>
    </footer>
  );
};

export default Footer;

import React, { useContext } from 'react';
import ThemeContext from '../helper/ThemeContext';

const Footer = () => {
  const theme = useContext(ThemeContext);

  return (
    <footer className="text-center">
      <p>
        Copyright ©{' '}
        <a
          href="https://www.protowoerk.com/?lang=en"
          target="_blank"
          rel="noreferrer"
          className={`${
            theme === 'light' ? 'text-blue' : 'text-blue'
          } font-medium`}
        >
          Rapid Proto Woerk Kft.
        </a>{' '}
        2023
      </p>
    </footer>
  );
};

export default Footer;

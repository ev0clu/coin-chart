import React, { useContext } from 'react';
import ThemeContext from '../helper/ThemeContext';
import { MdDarkMode } from 'react-icons/md';
import { FiSun } from 'react-icons/fi';

interface HeaderProps {
  handleThemeClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Header = ({ handleThemeClick }: HeaderProps) => {
  const theme = useContext(ThemeContext);
  return (
    <header className="flex flex-row items-center justify-between px-12 py-5">
      <h1 className="text-2xl font-bold">BTC/USDT Chart</h1>
      <button
        onClick={handleThemeClick}
        className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full text-2xl text-themeButtonColor hover:bg-stone-200"
      >
        {theme === 'light' ? <MdDarkMode /> : <FiSun />}
      </button>
    </header>
  );
};

export default Header;

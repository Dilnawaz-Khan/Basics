import {useState} from 'react';

import ThemeContext from './ThemeContext';

const ThemeContextProvider = ({children}: any) => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <ThemeContext.Provider value={{darkMode, setDarkMode}}>
      {children}
    </ThemeContext.Provider>
  );
};

export {ThemeContextProvider};

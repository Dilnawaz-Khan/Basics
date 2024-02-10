import {useState} from 'react';

import Card from './src/components/Card';
import ThemeContext from './src/context/ThemeContext';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <ThemeContext.Provider value={{darkMode, setDarkMode}}>
      <Card />
    </ThemeContext.Provider>
  );
};

export default App;

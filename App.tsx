import Card from './src/components/Card';
import {ThemeContextProvider} from './src/context/ThemeContextProvider';

const App = () => {
  return (
    <ThemeContextProvider>
      <Card />
    </ThemeContextProvider>
  );
};

export default App;

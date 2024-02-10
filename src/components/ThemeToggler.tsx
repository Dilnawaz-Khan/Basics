import {useContext} from 'react';
import {Pressable, StyleSheet, Text} from 'react-native';

import {COLORS} from '../constants';
import ThemeContext from '../context/ThemeContext';

const ThemeToggler = () => {
  const {darkMode, setDarkMode} = useContext(ThemeContext);

  const toggleTheme = () => setDarkMode((prevState: any) => !prevState);

  const buttonText = darkMode ? 'Enable Light Mode' : 'Enable Dark Mode';

  const bgColor = darkMode
    ? {
        backgroundColor: COLORS.white,
      }
    : {
        backgroundColor: COLORS.primary,
      };

  const textColor = darkMode
    ? {
        color: COLORS.primary,
      }
    : {
        color: COLORS.white,
      };

  return (
    <Pressable onPress={toggleTheme} style={[styles.button, bgColor]}>
      <Text style={[styles.text, textColor]}>{buttonText}</Text>
    </Pressable>
  );
};

export default ThemeToggler;

const styles = StyleSheet.create({
  button: {
    width: '50%',
    height: 45,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-end',
    elevation: 10,
  },
  text: {
    fontSize: 16,
    fontWeight: '800',
  },
});

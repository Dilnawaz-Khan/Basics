import {StyleSheet, Text, View} from 'react-native';
import {COLORS} from '../constants';
import {useThemeContext} from '../hooks/useThemeContext';
import ThemeToggler from './ThemeToggler';

const Card = () => {
  const {darkMode} = useThemeContext();

  const bgColor = darkMode
    ? {backgroundColor: COLORS.white}
    : {backgroundColor: COLORS.black};

  const textColor = darkMode ? {color: COLORS.primary} : {color: COLORS.white};

  return (
    <View style={[styles.container, bgColor]}>
      <Text style={[styles.text, textColor]}>Codingwith Dill</Text>
      <ThemeToggler />
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    width: '90%',
    marginHorizontal: 20,
    height: 100,
    borderRadius: 10,
    marginTop: 60,
    padding: 10,
    gap: 10,
  },
  text: {
    fontSize: 18,
    fontWeight: '800',
  },
});

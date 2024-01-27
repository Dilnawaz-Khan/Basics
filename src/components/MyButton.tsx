import {useEffect} from 'react';
import {Pressable, StyleSheet, Text} from 'react-native';
import {COLORS} from '../constants';

const MyButton = () => {
  return (
    <Pressable style={styles.btn}>
      <Text style={styles.btnText}>Click me </Text>
    </Pressable>
  );
};

export default MyButton;

const styles = StyleSheet.create({
  btn: {
    width: '100%',
    height: 40,
    borderRadius: 5,
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    color: COLORS.white,
    fontSize: 24,
    fontWeight: '800',
  },
});

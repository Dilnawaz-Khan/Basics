import {Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import Greet from './src/components/Greet';
import {COLORS} from './src/constants';

const App = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log('I am in useEffect');
  }, [count]);

  console.log('I am outside');

  const handleClick = () => {
    setCount(prevState => prevState + 1);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Let us discuss useEffect</Text>
      <Pressable style={styles.btn} onPress={handleClick}>
        <Text style={styles.btnTxt}>Click me</Text>
      </Pressable>
      <Greet count={count} />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
    gap: 10,
  },
  title: {
    fontSize: 30,
    color: COLORS.white,
  },
  btn: {
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 4,
  },
  btnTxt: {
    color: COLORS.white,
    fontSize: 20,
    fontWeight: '900',
  },
});

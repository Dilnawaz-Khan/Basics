import React, {useEffect, useState} from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {COLORS} from './src/constants';
import Greet from './src/components/Greet';

let x = 0;

const App = () => {
  const [count, setCount] = useState(0);
  const [newState, setNewState] = useState(0);
  // useState = >

  useEffect(() => {
    console.log('useEffect triggered[Parent]', x);
  }, [x]);

  console.log('JSX rendered');
  return (
    <View style={styles.container}>
      <Text style={styles.title}>useEffect - Codingwith Dill</Text>
      <Pressable style={styles.btn} onPress={() => x++}>
        <Text style={styles.btnTxt}>Click me - {x}</Text>
      </Pressable>
      <Pressable
        style={styles.btn}
        onPress={() => setNewState(prevState => prevState + 1)}>
        <Text style={styles.btnTxt}>State Btn - {newState}</Text>
      </Pressable>

      {count < 2 && <Greet count={count} newState={newState} />}
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

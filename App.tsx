import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import Comp1 from './src/components/Comp1';
import Comp2 from './src/components/Comp2';

const App = () => {
  const [name, setName] = useState('Codingwith Dill');
  return (
    <View style={styles.container}>
      <Comp1 name={name} />
      <Comp2 name={name} />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    gap: 20,
  },
});

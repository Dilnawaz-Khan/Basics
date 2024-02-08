import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Comp3 from './Comp3';
import Comp4 from './Comp4';

const Comp1 = ({name}: any) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Component 1</Text>
      <Text style={styles.text}>Youtube Channel: {name}</Text>
      <View style={{flexDirection: 'row', alignItems: 'center', gap: 30}}>
        <Comp3 />
        <Comp4 />
      </View>
    </View>
  );
};

export default Comp1;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 120,
    backgroundColor: 'whitesmoke',
    // alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
    gap: 10,
  },
  text: {color: 'black', fontSize: 16},
});

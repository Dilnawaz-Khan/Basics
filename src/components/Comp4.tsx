import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Comp4 = () => {
  return (
    <View style={styles.container}>
      <Text>Comp 4</Text>
    </View>
  );
};

export default Comp4;

const styles = StyleSheet.create({
  container: {
    width: '45%',
    height: 40,
    backgroundColor: 'gray',
    // alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  text: {color: 'black', fontSize: 16},
});

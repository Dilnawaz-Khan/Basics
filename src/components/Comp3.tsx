import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Comp3 = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Comp 3</Text>
      <Text style={styles.channelName}>Channel Date missing</Text>
    </View>
  );
};

export default Comp3;

const styles = StyleSheet.create({
  container: {
    width: '45%',
    height: 40,
    backgroundColor: 'gray',
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  text: {color: 'whitesmoke', fontSize: 12},
  channelName: {color: 'white', fontSize: 12},
});

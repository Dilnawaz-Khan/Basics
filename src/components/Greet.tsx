import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {COLORS} from '../constants';

const Greet = (props: any) => {
  useEffect(() => {
    console.log('useEffect [Greet Component]');
  }, []);

  console.log('Greet Component Outside');

  return (
    <View style={styles.container}>
      <Text style={styles.greetTxt}>
        Hello, Welcome to Learn By Dill {props.count}
      </Text>
    </View>
  );
};

export default Greet;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  greetTxt: {
    fontSize: 18,
    color: COLORS.white,
  },
});

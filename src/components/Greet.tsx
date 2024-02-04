import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {COLORS} from '../constants';

const Greet = (props: any) => {
  useEffect(() => {
    console.log('useEffect Greet Comp [Child]');

    return () => {
      console.log('Child unmount');
    };
  }, [props.count]);

  console.log('JSX Greet Comp');
  return (
    <View style={styles.container}>
      <Text style={styles.greetTxt}>
        Hello, Welcome to Codewith Dill {props.count} ==== {props.newState}
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

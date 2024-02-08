import {Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {COLORS} from '../constants';

const Comp2 = ({name}: any) => {
  const [subscriber, setSubscriber] = useState(104);

  const increaseSubscriberCount = () => {
    setSubscriber(prevCount => prevCount + 1);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Component 2</Text>
      <Text style={styles.text}>Youtube Channel: {name}</Text>
      <Pressable style={styles.subscribeBtn}>
        <Text>Subscribe</Text>
      </Pressable>
    </View>
  );
};

export default Comp2;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 100,
    backgroundColor: 'whitesmoke',
    // alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
    gap: 10,
  },
  text: {color: 'black', fontSize: 16},
  subscribeBtn: {
    backgroundColor: 'red',
    width: 120,
    height: 35,
    borderRadius: 3,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
});

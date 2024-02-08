import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import Comp3 from './Comp3';
import Comp4 from './Comp4';

const Comp1 = ({name, setName, subscriber, channelCreateAt}: any) => {
  // const [subscriber, setSubscriber] = useState(104);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Component 1</Text>
      <Text style={styles.text}>
        {name} | Subscriber: {subscriber}
      </Text>
      <View style={{flexDirection: 'row', alignItems: 'center', gap: 30}}>
        <Comp3 channelCreateAt={channelCreateAt} />
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

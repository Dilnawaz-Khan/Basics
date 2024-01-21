import {StyleSheet, Text, View} from 'react-native';

import {COLORS} from './src/constants';
import MyButton from './src/components/MyButton';
import {useState} from 'react';

const App = () => {
  const [hide, setHide] = useState(false);
  return (
    <View style={styles.container}>
      <Text
        onPress={() => setHide(true)}
        style={{fontSize: 18, color: COLORS.white}}>
        Components & Props (Learn By Dill)
      </Text>
      <MyButton />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
});

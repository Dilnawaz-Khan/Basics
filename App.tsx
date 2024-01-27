import {StyleSheet, Text, View} from 'react-native';

import MyButton from './src/components/MyButton';
import {COLORS} from './src/constants';

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Props (Learn By Dill)</Text>
      <MyButton />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    gap: 30,
  },
  title: {
    fontSize: 18,
    color: COLORS.white,
  },
});

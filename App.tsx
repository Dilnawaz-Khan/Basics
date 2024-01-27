import {StyleSheet, Text, View} from 'react-native';

import MyButton from './src/components/MyButton';
import {COLORS} from './src/constants';

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Props (Learn By Dill)</Text>
      <MyButton
        title={'Subscribe!'}
        backgroundColor={'red'}
        numberTimesClick={12}
      />
      <MyButton
        title={'Follow'}
        backgroundColor={'dodgerblue'}
        numberTimesClick={0}
      />
      <MyButton
        title={'New Purpose'}
        backgroundColor={'dodgerblue'}
        numberTimesClick={0}
      />
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

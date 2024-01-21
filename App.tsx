import {StyleSheet, Text, View} from 'react-native';

import {COLORS} from './src/constants';

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={{fontSize: 18, color: COLORS.white}}>
        Components & Props (Learn By Dill)
      </Text>
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

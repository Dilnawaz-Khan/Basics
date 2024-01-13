import {useState} from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';

import {InstagramPopup} from './src/components';

const App = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  return (
    <View style={styles.container}>
      <Pressable style={styles.btn} onPress={openModal}>
        <Text style={styles.btnText}>Open Modal</Text>
      </Pressable>
      <InstagramPopup visible={showModal} handleClose={setShowModal} />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 5,
  },
  btn: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: 'dodgerblue',
    borderRadius: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    fontSize: 18,
    color: 'white',
  },
});

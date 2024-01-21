import {useEffect} from 'react';
import {Pressable, Text} from 'react-native';

const MyButton = () => {
  useEffect(() => {
    console.log('I am mounted');

    return () => {
      console.log('Unmounted');
    };
  }, []);
  return (
    <Pressable>
      <Text>Click me </Text>
    </Pressable>
  );
};

export default MyButton;

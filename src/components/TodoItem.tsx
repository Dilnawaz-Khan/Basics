import React from 'react';
import {Image, Pressable, StyleSheet, Text} from 'react-native';
import {COLORS} from '../constants';

const completedTodoImg = require('../assets/checkbox.png');

const TodoItem = ({data, onCompleted}: any) => {
  const isTodoCompleted = data.completed;

  const changeCompletedStatus = () => {
    onCompleted(data.id);
  };
  return (
    <Pressable onPress={changeCompletedStatus} style={styles.container}>
      <Text
        numberOfLines={2}
        style={[
          styles.title,
          {color: isTodoCompleted ? COLORS.gray : COLORS.black},
        ]}>
        {data.todo}
      </Text>
      {isTodoCompleted && (
        <Image source={completedTodoImg} style={styles.completedTodoImage} />
      )}
    </Pressable>
  );
};

export default TodoItem;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 60,
    borderRadius: 10,
    backgroundColor: COLORS.white,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    flexDirection: 'row',
  },
  title: {
    width: '85%',
    fontSize: 15,
    fontWeight: '800',
    color: COLORS.black,
  },
  completedTodoImage: {
    width: 25,
    height: 25,
    tintColor: COLORS.primary,
  },
});

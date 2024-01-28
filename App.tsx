import {Pressable, ScrollView, StyleSheet, Text, View} from 'react-native';

import {useState} from 'react';
import TodoItem from './src/components/TodoItem';
import {COLORS} from './src/constants';
import TODO_LIST from './src/constants/TODO_LIST';

const App = () => {
  const [todoItem, setTodoItem] = useState(TODO_LIST);
  const [isFiltered, setIsFiltered] = useState(false);

  const handleIsCompleted = (todoId: any) => {
    let newArray = [...todoItem];
    newArray = newArray.map(item =>
      item.id === todoId ? {...item, completed: !item.completed} : item,
    );

    setTodoItem(newArray);
  };

  const filterCompletedTodo = () => {
    if (isFiltered) {
      setTodoItem(TODO_LIST);
      setIsFiltered(false);
      return;
    }
    setIsFiltered(true);
    setTodoItem(prevTodos => prevTodos.filter(item => item.completed === true));
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.title}>Props - Part 2 (Learn By Dill)</Text>
          <Pressable onPress={filterCompletedTodo} style={styles.filterBtn}>
            <View
              style={[
                styles.radioBtn,
                {
                  borderColor: isFiltered ? COLORS.white : COLORS.primary,
                  backgroundColor: isFiltered ? COLORS.primary : 'transparent',
                },
              ]}
            />
            <Text style={styles.filterText}>Show Completed</Text>
          </Pressable>
        </View>
        {todoItem.map(item => (
          <TodoItem data={item} key={item.id} onCompleted={handleIsCompleted} />
        ))}
      </View>
    </ScrollView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    gap: 20,
  },
  title: {
    fontSize: 18,
    color: COLORS.white,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  filterBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 7,
  },
  radioBtn: {
    width: 15,
    height: 15,
    borderRadius: 7.5,
    borderWidth: 2,
  },
  filterText: {
    fontSize: 13,
    color: 'white',
  },
});

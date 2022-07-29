import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
import {Constant} from '../../../res/ResRoot';
import adjust from '../../../theme/adjust';

export function TodoList() {
  const todos = useSelector(state => state.todos);

  if (!todos.length) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{Constant.EMPTY_TODO_MSG}</Text>
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{'Todo List'}</Text>
      {todos.map((todo, index) => (
        <Text style={styles.todoText} key={todo.id}>{`${index + 1}. ${
          todo.text
        }`}</Text>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: adjust(12),
  },
  title: {
    fontSize: adjust(16),
    fontWeight: 'bold',
  },
  todoText: {
    margin: adjust(5),
  },
});

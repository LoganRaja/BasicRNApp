import React, {useState} from 'react';
import {View, Text, TextInput, Button, StyleSheet} from 'react-native';
import {useDispatch} from 'react-redux';
import {addTodo} from '../../../redux/slice/TodosSlice';
import {Color} from '../../../res/ResRoot';
import adjust from '../../../theme/adjust';

export const AddTodo = () => {
  const [text, setText] = useState();
  const dispatch = useDispatch();

  function handleSumbit() {
    dispatch(addTodo(text));
    setText('');
  }

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Todo"
        value={text}
        onChangeText={setText}
        style={styles.input}
      />
      <Button title="Add" onPress={handleSumbit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: adjust(2),
  },
  input: {
    backgroundColor: Color.WHITE,
    marginBottom: adjust(8),
    padding: adjust(8),
    height: adjust(40),
  },
});

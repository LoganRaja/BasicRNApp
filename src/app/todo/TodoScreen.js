import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import Config from 'react-native-config';
import {Color, Constant} from '../../res/ResRoot';
import adjust from '../../theme/adjust';
import {AddTodo} from './component/AddTodo';
import {TodoList} from './component/TodoList';

export const TodoScreen = ({props, navigation}) => {
  return (
    <View style={styles.rootView}>
      <Text style={styles.appNameTxt}>{Config.APP_NAME}</Text>
      <View style={styles.container}>
        <Text onPress={() => navigation.navigate(Constant.MOVIES_SCREEN)}>
          {'Goto Movies sections'}
        </Text>
        <Text style={styles.title}>{'Todo App '}</Text>
        <AddTodo />
        <TodoList />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: adjust(24),
    fontWeight: 'bold',
    marginBottom: adjust(12),
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Color.WHITE,
  },
  rootView: {
    flex: 1,
    backgroundColor: Color.WHITE,
  },
  appNameTxt: {
    textAlign: 'right',
    padding: 10,
    fontSize: adjust(10),
  },
});

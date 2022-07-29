import {createSlice} from '@reduxjs/toolkit';

let nextTodoId = 0;

const TodosSlice = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    addTodo(state, action) {
      state.push({id: nextTodoId++, text: action.payload, completed: false});
    },
    toggleTodo(state, action) {
      const todo = state.find(todo => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
  },
});

export const {addTodo, toggleTodo} = TodosSlice.actions;

export default TodosSlice.reducer;

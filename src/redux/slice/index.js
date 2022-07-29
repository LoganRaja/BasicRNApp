import {combineReducers} from 'redux';
import ThunkSlice from './ThunkSlice';
import TodosSlice from './TodosSlice';

const rootReducer = combineReducers({
  thunkdata: ThunkSlice,
  todos: TodosSlice,
});

export default rootReducer;

import {combineReducers, createStore} from 'redux';
import TodoReducer from './Todo/TodoReducer';


const rootReducer = combineReducers({
    todoReducer: TodoReducer,
});


const store = createStore(rootReducer, {});

export default store;
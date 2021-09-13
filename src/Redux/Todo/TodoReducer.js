import TodoTypes from "./TodoTypes";

const initialState = {
  listTodo: [],
};

const TodoReducer = (state = initialState, actions) => {
    switch (actions.type) {
        case TodoTypes.SET_TODO:
            return {
                ...state,
                listTodo: actions.payload,
            }
        case TodoTypes.ADD_TODO: 
        return {
            ...state,
            listTodo: [...state.listTodo, actions.payload]
        }
        default:
            return state;
    }
}

export default TodoReducer;
import TodoTypes from "./TodoTypes";

export function getTodo() {}

export function setTodo(data) {
  console.log(data);
  return {
    type: TodoTypes.SET_TODO,
    payload: data,
  };
}
export function addTodo(data) {
    console.log(data);
    return {
      type: TodoTypes.ADD_TODO,
      payload: data,
    };
  }

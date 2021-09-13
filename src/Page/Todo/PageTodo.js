import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setTodo } from "../../Redux/Todo/TodoActions";

const PageTodo = () => {
  const todoReducer = useSelector((state) => state.todoReducer);
  const dispatch = useDispatch();

  const getTodo = async () => {
    fetch("https://virtserver.swaggerhub.com/hanabyan/todo/1.0.0/to-do-list")
      .then((response) => response.json())
      .then((json) => dispatch(setTodo(json)));
  };

  useEffect(() => {
    getTodo();
    console.log(todoReducer);
  },[]);

  return (
    <div>
      <h1>My Todo List</h1>
      <Link to="/add"> add </Link>
    </div>
  );
};

export default PageTodo;

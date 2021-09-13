import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addTodo } from "../../Redux/Todo/TodoActions";

const PageTodoAdd = () => {
  const dispatch = useDispatch();
  const todoReducer = useSelector((state) => state.todoReducer);

  useEffect(() => {
    console.log(todoReducer);
  });

  return (
    <div>
      <h1>Add Todo List</h1>
      <button
        onClick={() => {
          const data = {
            id: 6,
            title: "Make a phone call to mom",
            description: "lorem ayam",
            status: 1,
            createdAt: "2019-11-15 04:00",
          };
          dispatch(addTodo(data));
        }}
      >
        {" "}
        Tambah Todo{" "}
      </button>
      <Link to="/"> back </Link>
    </div>
  );
};

export default PageTodoAdd;

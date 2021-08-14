import React from "react";
import { connect } from "react-redux";
import { toggleTodo, deleteTodo } from "../actions";

import "../scss/App.scss";

const Todo = ({ todo, toggleTodo, deleteTodo }) => {
  return (
    <li className={todo.completed ? "completed" : "uncomplete"}>
      <span onClick={() => toggleTodo(todo.id)} style={{ cursor: "pointer" }}>
        {todo.completed ? (
          <i className="fas fa-check"></i>
        ) : (
          <i className="fas fa-caret-right"></i>
        )}{" "}
        {todo.content}
      </span>
      <button className="X" onClick={() => deleteTodo(todo.id)}>
        <i className="fas fa-minus "></i>
      </button>
    </li>
  );
};

export default connect(null, { toggleTodo, deleteTodo })(Todo);

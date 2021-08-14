import React from "react";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";
import Filter from "./Filter";

const App = () => {
  return (
    <div>
      <h1>Todo list with Redux</h1>
      <div className="total">
        <AddTodo />
        <Filter />
        <TodoList />
      </div>
    </div>
  );
};

export default App;

import React from "react";
import { connect } from "react-redux";
import Todo from "./Todo";

const TodoList = ({ todos, filter }) => {
  const filterList = () => {
    switch (filter) {
      case "已完成": {
        return todos.filter((todo) => todo.completed);
      }
      case "未完成": {
        return todos.filter((todo) => !todo.completed);
      }
      default: {
        return todos.filter((todo) => todo);
      }
    }
  };

  const renderList = () => {
    return filterList().map((todo) => {
      return <Todo todo={todo} key={todo.id} />;
    });
  };

  return <ul>{renderList()}</ul>;
};

const mapStateToProps = (state) => {
  return {
    todos: state.todos,
    filter: state.setFilter,
  };
};

export default connect(mapStateToProps)(TodoList);

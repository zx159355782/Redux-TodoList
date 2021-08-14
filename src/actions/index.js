import { ADD_TODO, SET_FILTER, TOGGLE_TODO, DELETE_TODO } from "./types";

let nextId = 8;

export const addTodo = (content) => {
  return {
    type: ADD_TODO,
    payload: {
      id: nextId++,
      content,
    },
  };
};

export const setFilter = (filter) => {
  return {
    type: SET_FILTER,
    payload: {
      filter,
    },
  };
};

export const toggleTodo = (id) => {
  return {
    type: TOGGLE_TODO,
    payload: {
      id,
    },
  };
};

export const deleteTodo = (id) => {
  return {
    type: DELETE_TODO,
    payload: {
      id,
    },
  };
};

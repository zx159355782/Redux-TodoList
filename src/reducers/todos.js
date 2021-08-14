import { ADD_TODO, DELETE_TODO, TOGGLE_TODO } from "../actions/types";

const initialState = [
  {
    content: "HTML",
    id: 1,
    completed: true,
  },
  {
    content: "CSS",
    id: 2,
    completed: true,
  },
  {
    content: "javascript",
    id: 3,
    completed: true,
  },
  {
    content: "Sass",
    id: 4,
    completed: true,
  },
  {
    content: "ReactJS",
    id: 5,
    completed: false,
  },
  {
    content: "Redux",
    id: 6,
    completed: false,
  },
  {
    content: "Git",
    id: 7,
    completed: false,
  },
];

const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO: {
      return [
        ...state,
        {
          content: action.payload.content,
          id: action.payload.id,
          completed: false,
        },
      ];
    }
    case TOGGLE_TODO: {
      return state.map((s) => {
        if (s.id === action.payload.id) {
          return Object.assign({}, s, {
            completed: !s.completed,
          });
        }
        return s;
      });
    }
    case DELETE_TODO: {
      return state.filter((s) => {
        return s.id !== action.payload.id;
      });
    }
    default: {
      return state;
    }
  }
};

export default todos;

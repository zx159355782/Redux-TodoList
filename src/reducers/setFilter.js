import { SET_FILTER } from "../actions/types";

const setFilter = (state = "全部", action) => {
  switch (action.type) {
    case SET_FILTER: {
      return action.payload.filter;
    }
    default: {
      return state;
    }
  }
};

export default setFilter;

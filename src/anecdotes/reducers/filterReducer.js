const initialState = "";

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CHANGE_FILTER_VALUE":
      return action.value;
    default:
      return state;
  }
};

export const changeFilterValue = value => {
  return {
    type: "CHANGE_FILTER_VALUE",
    value
  };
};

export default filterReducer;

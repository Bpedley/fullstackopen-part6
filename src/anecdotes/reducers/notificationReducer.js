const initialState = null;
let timeout;

const notificationReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_MESSAGE":
      return action.message;
    case "DELETE_MESSAGE":
      return initialState;
    default:
      return state;
  }
};

export const addMessage = (message, ms) => {
  return dispatch => {
    dispatch({
      type: "SET_MESSAGE",
      message
    });

    if (timeout) clearInterval(timeout);

    timeout = setTimeout(() => {
      dispatch({ type: "DELETE_MESSAGE" });
    }, ms * 1000);
  };
};

export const deleteMessage = () => {
  return { type: "DELETE_MESSAGE" };
};

export default notificationReducer;

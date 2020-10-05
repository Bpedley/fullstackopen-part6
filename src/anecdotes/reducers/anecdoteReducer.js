import anecdoteService from "../services/anecdotes";
import { addMessage } from "./notificationReducer";

const anecdoteReducer = (state = [], action) => {
  switch (action.type) {
    case "INIT_ANECDOTES": {
      return action.data;
    }
    case "NEW_ANECDOTE": {
      const newState = [...state, action.data];
      return newState;
    }
    case "ADD_VOTE": {
      const changedAnecdote = action.data;
      return state.map(anecdote => {
        return anecdote.id === changedAnecdote.id ? changedAnecdote : anecdote;
      });
    }
    default:
      return state;
  }
};

export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll();
    dispatch({
      type: "INIT_ANECDOTES",
      data: anecdotes
    });
  };
};

export const createAnecdote = data => {
  return async dispatch => {
    const newAnecdote = await anecdoteService.create(data);
    dispatch({
      type: "NEW_ANECDOTE",
      data: newAnecdote
    });
    dispatch(addMessage(`created a new anecdote "${data}"`, 5));
  };
};

export const addVote = id => {
  return async (dispatch, getState) => {
    const anecdote = getState().anecdotes.find(anecdote => anecdote.id === id);
    const anecdoteToChange = {
      ...anecdote,
      votes: anecdote.votes + 1
    };
    const response = await anecdoteService.update(id, anecdoteToChange);
    dispatch({
      type: "ADD_VOTE",
      data: response
    });
    dispatch(addMessage(`you voted "${response.content}"`, 5));
  };
};

export default anecdoteReducer;

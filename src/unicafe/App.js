import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { good, neutral, bad, reset } from "./reducers/reducer";

const App = () => {
  const dispatch = useDispatch();
  const state = useSelector(state => state);

  return (
    <div>
      <button onClick={() => dispatch(good())}>good</button>
      <button onClick={() => dispatch(neutral())}>neutral</button>
      <button onClick={() => dispatch(bad())}>bad</button>
      <button onClick={() => dispatch(reset())}>reset stats</button>
      <div>good {state.good}</div>
      <div>neutral {state.ok}</div>
      <div>bad {state.bad}</div>
    </div>
  );
};

export default App;

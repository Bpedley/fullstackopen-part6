import React from "react";
import Filter from "./Filter";
import { connect } from "react-redux";
import { addVote } from "../reducers/anecdoteReducer";

const AnecdoteList = ({ anecdotes, filter, addVote }) => {
  const filteredItems = anecdotes
    .filter(item => item.content.toLowerCase().includes(filter.toLowerCase()))
    .map(item => (
      <div key={item.id}>
        <div>{item.content}</div>
        <div>
          has {item.votes}
          <button onClick={() => addVote(item.id)}>vote</button>
        </div>
      </div>
    ));

  return (
    <div>
      <Filter />
      {filteredItems.length ? filteredItems : <p>no results</p>}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    anecdotes: state.anecdotes.sort((a, b) => b.votes - a.votes),
    filter: state.filter
  };
};

export default connect(mapStateToProps, {
  addVote
})(AnecdoteList);

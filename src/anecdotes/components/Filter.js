import React from "react";
import { connect } from "react-redux";
import { changeFilterValue } from "../reducers/filterReducer";

const Filter = ({ changeFilterValue, filter }) => {
  const handleChange = e => changeFilterValue(e.target.value);

  const style = {
    marginTop: 10,
    marginBottom: 10
  };

  return (
    <div style={style}>
      <label>
        filter
        <input value={filter} onChange={e => handleChange(e)} />
      </label>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    filter: state.filter
  };
};

export default connect(mapStateToProps, { changeFilterValue })(Filter);

import React from 'react';
import { connect } from 'react-redux';

import { addTodo } from '../actions';

let AddTodo = ({ addToDo, state1 }) => {
  let input;

  return (
    <div>
      <input ref={node => {
        input = node;
      }} />
      <button onClick={() => {
        addToDo(input.value);
        input.value = '';
      }}>
        Add Todo {state1.length}
      </button>
    </div>
  );
};

const mapDispatchToProps = (
  dispatch
) => ({
  addToDo(value) {
    dispatch(addTodo(value));
  }
});

export default connect(
  (state) => ({state1 : state.todos}),
  mapDispatchToProps
)(AddTodo);
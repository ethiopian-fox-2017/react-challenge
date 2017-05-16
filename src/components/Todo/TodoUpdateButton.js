import React from 'react';
import { connect } from 'react-redux';

import { deleteTodoById } from '../../actions';

const buttonStyle = {background: 'green', cursor: 'pointer', outline: 'none', color: 'white', border: 0, borderRadius: 10};

const UpdateTodoButton = (props) => (
  <button
    onClick={() => props.deleteTodoById(props.todoId) }
    style={buttonStyle}
  >
    Upd
  </button>
);

const mapDispatchToProps = (dispatch) => {
  return {
    deleteTodoById: (todoId) => dispatch(deleteTodoById(todoId)),
  };
};

export default connect(null, mapDispatchToProps)(UpdateTodoButton);

import React from 'react';

import DeleteTodoButton from './TodoRemoveButton'
import UpdateTodoButton from './TodoUpdateButton'

const TodoItem = ({todoId, todo}) => (
  <li>{todoId}. {todo} <DeleteTodoButton todoId={todoId} /> <UpdateTodoButton todoId={todoId} /></li>
);

export default TodoItem;

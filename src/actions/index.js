export const addTodoCreate = (todo) => {
  return {
    type: 'ADD_TODO',
    payload: todo,
  };
};

export const deleteTodoById = (todoId) => {
  return {
    type: 'DELETE_TODO',
    payload: todoId,
  };
};

export const loginMyUser = (user) => {
  return {
    type: 'LOGIN',
    payload: user,
  };
};

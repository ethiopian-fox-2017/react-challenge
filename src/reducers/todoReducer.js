const initialState = [
  {todoId: 1, todo: 'menghadapi fase 3'},
  {todoId: 2, todo: 'bersiap dan berdoa'},
]

function addTodo(state,action) {
  let newId = state[state.length - 1].todoId + 1;
  let newTodo = {...action.payload, todoId: newId};
  let newState = [...state, newTodo];
  return newState;
}

function deleteTodo(state,action) {
  let deletedId = action.payload;
  let newTodoState = state.filter(todo => todo.todoId !== deletedId);
  return newTodoState;
}

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TODO': return addTodo(state,action)
    case 'DELETE_TODO': return deleteTodo(state,action)
    default: return state
  }
}

export default todoReducer
